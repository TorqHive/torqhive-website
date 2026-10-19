#!/usr/bin/env node
/**
 * TorqHive weekly SEO health check.
 *
 * What it does
 *   1. Reads https://torqhive.com/sitemap.xml and audits every URL for status code,
 *      redirect chains, canonical tag and robots meta.
 *   2. If GSC credentials are present, inspects each URL through the Google Search
 *      Console URL Inspection API and lists sitemaps errors.
 *   3. With --notify, pushes not-indexed blog URLs to IndexNow (Bing/Yandex).
 *      Google has no public "request indexing" API; the report lists URLs that
 *      still need a manual Request Indexing click in the GSC UI.
 *
 * Credentials (optional, read-only scope)
 *   Create a Google Cloud service account, enable "Google Search Console API",
 *   download the JSON key, add the service account email as a user on the
 *   sc-domain:torqhive.com property, then save the key to:
 *     C:/Users/ASUS/AccioWork/secrets/gsc-service-account.json
 *   Or point GSC_SERVICE_ACCOUNT_JSON at it.
 *
 * Usage
 *   node scripts/seo-weekly.mjs            # audit only
 *   node scripts/seo-weekly.mjs --notify   # audit + IndexNow for unindexed blog URLs
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SITE = 'https://torqhive.com';
const SITEMAP_URL = `${SITE}/sitemap.xml`;
const GSC_PROPERTY = 'sc-domain:torqhive.com';
const REPORT_DIR = 'C:/Users/ASUS/AccioWork/seo-reports';
const REPORT_MD = path.join(REPORT_DIR, 'gsc-weekly.md');
const REPORT_JSON = path.join(REPORT_DIR, 'gsc-weekly-latest.json');
const STATE_JSON = path.join(REPORT_DIR, 'indexnow-state.json');
const CRED_PATH = process.env.GSC_SERVICE_ACCOUNT_JSON || 'C:/Users/ASUS/AccioWork/secrets/gsc-service-account.json';
const NOTIFY = process.argv.includes('--notify');
const DRY_RUN = process.argv.includes('--dry-run');
const LIMIT_ARG = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = LIMIT_ARG ? Number(LIMIT_ARG.split('=')[1]) : 0;
const UA = 'TorqHiveSEOBot/1.0 (+https://torqhive.com)';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: { 'user-agent': UA, ...(options.headers || {}) },
    signal: AbortSignal.timeout(45000),
  });
  return res;
}

function decodeXml(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

async function readSitemap() {
  const res = await get(SITEMAP_URL);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => decodeXml(m[1]));
  return { xml, urls: [...new Set(urls)] };
}

function pick(html, patterns) {
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1].trim();
  }
  return '';
}

async function auditUrl(url) {
  const out = { url, status: 0, chain: [], finalUrl: url, canonical: '', robots: '', title: '', error: '' };
  try {
    let current = url;
    for (let hop = 0; hop < 6; hop += 1) {
      const res = await get(current, { redirect: 'manual' });
      out.status = res.status;
      out.finalUrl = current;
      const loc = res.headers.get('location');
      if (res.status >= 300 && res.status < 400 && loc) {
        const next = new URL(loc, current).toString();
        out.chain.push(`${res.status} -> ${next}`);
        current = next;
        continue;
      }
      if (res.status === 200) {
        const type = res.headers.get('content-type') || '';
        if (type.includes('text/html')) {
          const html = await res.text();
          out.canonical = pick(html, [
            /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i,
            /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i,
          ]);
          out.robots = pick(html, [
            /<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i,
            /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']robots["']/i,
          ]);
          out.title = pick(html, [/<title[^>]*>([\s\S]*?)<\/title>/i]);
        }
      }
      break;
    }
  } catch (err) {
    out.error = err.message;
  }
  return out;
}

function b64url(input) {
  return Buffer.from(input).toString('base64url');
}

async function getAccessToken() {
  if (!fs.existsSync(CRED_PATH)) return null;
  let sa;
  try {
    sa = JSON.parse(fs.readFileSync(CRED_PATH, 'utf8'));
  } catch {
    return null;
  }
  if (!sa.client_email || !sa.private_key) return null;
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }));
  const unsigned = `${header}.${claim}`;
  const signature = crypto.createSign('RSA-SHA256').update(unsigned).sign(sa.private_key).toString('base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
    signal: AbortSignal.timeout(30000),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`token error: ${data.error_description || res.status}`);
  return data.access_token;
}

async function inspectUrl(token, url) {
  const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: GSC_PROPERTY, languageCode: 'en' }),
    signal: AbortSignal.timeout(30000),
  });
  const data = await res.json();
  if (!res.ok) return { error: data.error?.message || String(res.status) };
  const r = data.inspectionResult?.indexStatusResult || {};
  return {
    verdict: r.verdict || '',
    coverageState: r.coverageState || '',
    indexingState: r.indexingState || '',
    pageFetchState: r.pageFetchState || '',
    robotsTxtState: r.robotsTxtState || '',
    lastCrawlTime: r.lastCrawlTime || '',
    googleCanonical: r.googleCanonical || '',
    userCanonical: r.userCanonical || '',
  };
}

async function listSitemaps(token) {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_PROPERTY)}/sitemaps`, {
    headers: { authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(30000),
  });
  const data = await res.json();
  if (!res.ok) return { error: data.error?.message || String(res.status), items: [] };
  return {
    error: '',
    items: (data.sitemap || []).map((s) => ({
      path: s.path,
      lastDownloaded: s.lastDownloaded,
      errors: Number(s.errors || 0),
      warnings: Number(s.warnings || 0),
      contents: (s.contents || []).map((c) => `${c.type}:${c.submitted}`).join(', '),
    })),
  };
}

function findIndexNowKey() {
  const pub = path.resolve('public');
  if (!fs.existsSync(pub)) return '';
  const hit = fs.readdirSync(pub).find((f) => /^[a-f0-9]{32}\.txt$/i.test(f));
  return hit ? hit.replace(/\.txt$/i, '') : '';
}

async function submitIndexNow(urls, key) {
  if (!urls.length || !key) return { submitted: 0, status: 0, body: '' };
  if (DRY_RUN) return { submitted: urls.length, status: -1, body: 'dry-run, not sent' };
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'torqhive.com',
      key,
      keyLocation: `${SITE}/${key}.txt`,
      urlList: urls,
    }),
    signal: AbortSignal.timeout(30000),
  });
  return { submitted: urls.length, status: res.status, body: (await res.text()).slice(0, 300) };
}

function loadJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function mdTable(headers, rows) {
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((r) => `| ${r.join(' | ')} |`),
  ].join('\n');
}

async function main() {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const started = new Date();
  const stamp = started.toISOString().replace('T', ' ').slice(0, 16);

  const { urls } = await readSitemap();
  const auditList = LIMIT > 0 ? urls.slice(0, LIMIT) : urls;

  const audits = new Array(auditList.length);
  let cursor = 0;
  const worker = async () => {
    while (cursor < auditList.length) {
      const index = cursor;
      cursor += 1;
      audits[index] = await auditUrl(auditList[index]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(6, auditList.length) }, worker));

  let token = null;
  let gscError = '';
  try {
    token = await getAccessToken();
  } catch (err) {
    gscError = err.message;
  }

  let inspections = {};
  let sitemaps = { error: 'no credentials', items: [] };
  if (token) {
    try {
      sitemaps = await listSitemaps(token);
      for (const url of auditList) {
        inspections[url] = await inspectUrl(token, url);
        await sleep(150);
      }
    } catch (err) {
      gscError = err.message;
    }
  }

  const blogUrls = auditList.filter((u) => /\/blog\/[^/]+$/.test(u));
  const notIndexed = blogUrls.filter((u) => {
    const g = inspections[u];
    if (g && !g.error) return g.verdict !== 'PASS' || /not indexed|excluded/i.test(g.coverageState || '');
    return false;
  });
  const crawlErrors = auditList.filter((u) => {
    const g = inspections[u];
    return g && !g.error && g.pageFetchState && g.pageFetchState !== 'SUCCESSFUL';
  });
  const httpErrors = audits.filter((a) => a.status >= 400 || a.error);
  const redirects = audits.filter((a) => a.chain.length > 0);
  const noindex = audits.filter((a) => /noindex/i.test(a.robots));
  const canonicalHome = audits.filter((a) => {
    if (!a.canonical) return false;
    try {
      const c = new URL(a.canonical);
      const p = new URL(a.url);
      return c.origin === p.origin && c.pathname === '/' && p.pathname !== '/';
    } catch {
      return false;
    }
  });

  const key = findIndexNowKey();
  let indexnow = { submitted: 0, status: 0, body: 'skipped' };
  let notifyList = [];
  if (NOTIFY && key) {
    const state = loadJson(STATE_JSON, {});
    const now = Date.now();
    // With GSC connected: every unindexed blog URL, with a 7-day cooldown.
    // Without GSC: the newest blog URLs that have never been submitted, so a
    // weekly run only picks up genuinely new articles.
    const pool = token ? notIndexed : blogUrls.slice(-6);
    notifyList = pool.filter((u) => {
      const last = state[u] ? Date.parse(state[u]) : 0;
      if (!last) return true;
      return Boolean(token) && now - last > 7 * 24 * 3600 * 1000;
    }).slice(0, 50);
    indexnow = await submitIndexNow(notifyList, key);
    if (!DRY_RUN && (indexnow.status === 200 || indexnow.status === 202)) {
      for (const u of notifyList) state[u] = new Date().toISOString();
      fs.writeFileSync(STATE_JSON, JSON.stringify(state, null, 2));
    }
  }

  const verdict = httpErrors.length || crawlErrors.length
    ? '异常'
    : notIndexed.length || redirects.length || canonicalHome.length || noindex.length
      ? '需关注'
      : '健康';

  const lines = [];
  lines.push(`## ${stamp} (Asia/Shanghai)`);
  lines.push('');
  lines.push(`**结论：${verdict}**`);
  lines.push('');
  lines.push(`- Sitemap URL 总数：${urls.length}（本次检查 ${auditList.length}）`);
  lines.push(`- HTTP：200 ${audits.filter((a) => a.status === 200).length} / 3xx ${redirects.length} / 4xx+5xx ${httpErrors.length}`);
  lines.push(`- GSC：${token ? `已检查 ${Object.keys(inspections).length} 条，未收录 ${notIndexed.length} 条，抓取异常 ${crawlErrors.length} 条` : `未连接（${gscError || '缺少服务账号凭据'}）`}`);
  lines.push('');

  if (httpErrors.length) {
    lines.push('### HTTP 错误');
    lines.push(mdTable(['URL', '状态', '错误'], httpErrors.map((a) => [a.url, a.status || '-', a.error || '-'])));
    lines.push('');
  }
  if (redirects.length) {
    lines.push('### 重定向');
    lines.push(mdTable(['URL', '跳转链'], redirects.map((a) => [a.url, a.chain.join(' ; ')])));
    lines.push('');
  }
  if (noindex.length) {
    lines.push('### 带 noindex 的 URL');
    lines.push(mdTable(['URL', 'robots'], noindex.map((a) => [a.url, a.robots])));
    lines.push('');
  }
  if (canonicalHome.length) {
    lines.push('### 静态 HTML canonical 指向首页');
    lines.push(`共 ${canonicalHome.length} 条。页面依赖 JS 渲染后改写 canonical，Googlebot 首轮抓取可能先看到首页 canonical，需关注“备用网页”类未收录。`);
    lines.push(mdTable(['URL', 'HTML canonical'], canonicalHome.slice(0, 10).map((a) => [a.url, a.canonical])));
    lines.push('');
  }
  if (notIndexed.length) {
    lines.push('### 未收录博客 URL');
    lines.push(mdTable(['URL', 'coverageState', 'pageFetchState', 'lastCrawlTime'], notIndexed.map((u) => {
      const g = inspections[u] || {};
      return [u, g.coverageState || '-', g.pageFetchState || '-', g.lastCrawlTime || '-'];
    })));
    lines.push('');
  }
  if (crawlErrors.length) {
    lines.push('### 抓取异常');
    lines.push(mdTable(['URL', 'pageFetchState', 'coverageState'], crawlErrors.map((u) => {
      const g = inspections[u] || {};
      return [u, g.pageFetchState, g.coverageState];
    })));
    lines.push('');
  }
  if (sitemaps.items.length) {
    lines.push('### 站点地图状态');
    lines.push(mdTable(['Sitemap', 'lastDownloaded', 'errors', 'warnings'], sitemaps.items.map((s) => [s.path, s.lastDownloaded || '-', s.errors, s.warnings])));
    lines.push('');
  }
  lines.push('### 更新通知');
  if (!NOTIFY) {
    lines.push('- 本次为只读检查，未提交 IndexNow。加 `--notify` 可对未收录博客批量通知。');
  } else if (!key) {
    lines.push('- 未找到 public/ 下的 IndexNow key 文件，跳过提交。');
  } else {
    lines.push(`- 数据源：${token ? 'GSC 未收录列表' : '未连接 GSC，按“从未提交过的新博客”判定'}`);
    lines.push(`- IndexNow：${DRY_RUN ? '演练' : '提交'} ${indexnow.submitted} 条，HTTP ${indexnow.status}${indexnow.body ? `，响应 ${indexnow.body}` : ''}`);
    if (notifyList.length) lines.push(`- 队列：${notifyList.join(', ')}`);
  }
  lines.push('- Google 无公开的 Request Indexing API，未收录页面仍需在 GSC 后台手动点击“请求编入索引”，或通过内链与 sitemap 自然发现。');
  lines.push('');

  if (!DRY_RUN) fs.appendFileSync(REPORT_MD, `${lines.join('\n')}\n`);
  if (!DRY_RUN) fs.writeFileSync(REPORT_JSON, JSON.stringify({
    checkedAt: started.toISOString(),
    verdict,
    sitemapTotal: urls.length,
    checked: auditList.length,
    httpErrors: httpErrors.map((a) => ({ url: a.url, status: a.status, error: a.error })),
    redirects: redirects.map((a) => ({ url: a.url, chain: a.chain })),
    noindex: noindex.map((a) => a.url),
    canonicalHome: canonicalHome.map((a) => a.url),
    notIndexed,
    crawlErrors,
    indexnow,
    gscConnected: Boolean(token),
    gscError,
  }, null, 2));

  console.log(lines.join('\n'));
  console.log(DRY_RUN ? '\nDry run: no report written, nothing submitted.' : `\nReport appended to ${REPORT_MD}`);
}

main().catch((err) => {
  console.error(`seo-weekly failed: ${err.stack || err.message}`);
  process.exitCode = 1;
});
