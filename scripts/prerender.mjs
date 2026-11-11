import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[prerender] Error: dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Load blog posts and products dynamically
async function loadData() {
  const { blogPosts } = await import('../src/data/blogPosts.js');
  const { products } = await import('../src/data/products.js');
  return { blogPosts, products };
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replaceMeta(html, { title, description, canonicalUrl, ogImage, structuredData, bodyContent }) {
  let output = html;

  // Title
  if (title) {
    output = output.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(title)}</title>`);
    output = output.replace(/<meta property="og:title" content=".*?" \/>/is, `<meta property="og:title" content="${escapeHtml(title)}" />`);
    output = output.replace(/<meta name="twitter:title" content=".*?" \/>/is, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  }

  // Description
  if (description) {
    output = output.replace(/<meta name="description" content=".*?" \/>/is, `<meta name="description" content="${escapeHtml(description)}" />`);
    output = output.replace(/<meta property="og:description" content=".*?" \/>/is, `<meta property="og:description" content="${escapeHtml(description)}" />`);
    output = output.replace(/<meta name="twitter:description" content=".*?" \/>/is, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  }

  // Canonical & URL
  if (canonicalUrl) {
    output = output.replace(/<link rel="canonical" href=".*?" \/>/is, `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`);
    output = output.replace(/<meta property="og:url" content=".*?" \/>/is, `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`);
    output = output.replace(/<meta name="twitter:url" content=".*?" \/>/is, `<meta name="twitter:url" content="${escapeHtml(canonicalUrl)}" />`);
  }

  // Image
  if (ogImage) {
    const fullImg = ogImage.startsWith('http') ? ogImage : `https://torqhive.com${ogImage}`;
    output = output.replace(/<meta property="og:image" content=".*?" \/>/is, `<meta property="og:image" content="${escapeHtml(fullImg)}" />`);
    output = output.replace(/<meta name="twitter:image" content=".*?" \/>/is, `<meta name="twitter:image" content="${escapeHtml(fullImg)}" />`);
  }

  // Structured Data
  if (structuredData) {
    const jsonLdScript = `<script type="application/ld+json">\n${JSON.stringify(structuredData, null, 2)}\n</script>`;
    output = output.replace('</head>', `  ${jsonLdScript}\n  </head>`);
  }

  // Body content in #root
  if (bodyContent) {
    output = output.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);
  }

  return output;
}

function ensureDirAndWrite(targetFile, content) {
  const dir = path.dirname(targetFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(targetFile, content, 'utf8');
}

async function run() {
  console.log('[prerender] Starting SSG pre-rendering...');
  const { blogPosts, products } = await loadData();
  let count = 0;

  // 1. Static Pages
  const staticPages = [
    {
      route: '/products',
      title: 'TorqHive Product Catalog — Professional B2B Hand & Automotive Tools',
      description: 'Explore 100+ professional ratchets, sockets, wrenches, torque tools, and automotive specialty tools for global B2B trade. MOQ starts at 1.',
      heading: 'Professional Hand & Automotive Tools Catalog',
      intro: 'Industrial-grade tools engineered for distributors, workshop chains, and OEM/ODM buyers worldwide.'
    },
    {
      route: '/about',
      title: 'About TorqHive — Global B2B Hand Tool Engineering & Supply Chain',
      description: 'TorqHive connects verified industrial tool manufacturing clusters with overseas trade buyers, providing zero cam-out and high-torque fastening solutions.',
      heading: 'About TorqHive',
      intro: 'Dedicated to precision engineering, rigorous standard compliance, and streamlined global procurement.'
    },
    {
      route: '/contact',
      title: 'Contact TorqHive — Wholesale Inquiry & Custom Tool Sourcing',
      description: 'Contact TorqHive for wholesale pricing, custom tool development, and fast dispatch. Response within 24 hours via email or WhatsApp.',
      heading: 'Contact Our Engineering & Sales Team',
      intro: 'Reach out directly for RFQ, sample requests, and technical consultations.'
    },
    {
      route: '/buying-guide',
      title: 'B2B Hand Tool Buying Guide — TorqHive Procurement Resource',
      description: 'Essential technical specifications, international torque standards (ASME/DIN/ISO), and sourcing advice for professional tool buyers.',
      heading: 'B2B Tool Procurement & Technical Guide',
      intro: 'Compare steel grades, drive standards, and manufacturing tolerances before placing your orders.'
    },
    {
      route: '/blog',
      title: 'TorqHive Technical Insights — Engineering, Maintenance & Sourcing Guides',
      description: 'Deep-dive technical guides on screw extraction, fastener metallurgy, torque calibrations, and workshop best practices.',
      heading: 'Engineering & Procurement Insights',
      intro: 'Practical field guides and technical analysis from the TorqHive engineering team.'
    }
  ];

  for (const page of staticPages) {
    const canonicalUrl = `https://torqhive.com${page.route}`;
    const targetFile = path.resolve(distDir, page.route.slice(1), 'index.html');
    const bodyContent = `
      <header style="padding: 20px 0; border-bottom: 1px solid #e5e7eb;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;">
          <a href="/" style="font-weight: bold; font-size: 20px; color: #111827; text-decoration: none;">TorqHive</a>
        </div>
      </header>
      <main style="max-width: 1200px; margin: 0 auto; padding: 32px 16px;">
        <nav aria-label="Breadcrumb" style="font-size: 14px; margin-bottom: 24px; color: #6b7280;">
          <a href="/" style="color: #4b5563; text-decoration: none;">Home</a> &gt; <span>${escapeHtml(page.heading)}</span>
        </nav>
        <h1>${escapeHtml(page.heading)}</h1>
        <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin-top: 12px;">${escapeHtml(page.intro)}</p>
      </main>
    `;

    const html = replaceMeta(template, {
      title: page.title,
      description: page.description,
      canonicalUrl,
      bodyContent
    });

    ensureDirAndWrite(targetFile, html);
    count++;
  }

  // 2. Products (102 products)
  for (const product of products) {
    const route = `/products/${product.id}`;
    const canonicalUrl = `https://torqhive.com${route}`;
    const targetFile = path.resolve(distDir, 'products', product.id, 'index.html');
    const title = `${product.title} (${product.id}) — Professional Wholesale | TorqHive`;
    const description = `${product.overview || product.title} Category: ${product.category}. MOQ: ${product.moq || 1}. Factory-direct wholesale pricing from TorqHive.`;
    const ogImage = product.image || '/assets/images/home/torqhive-hero-premium.webp';

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': product.title,
      'image': `https://torqhive.com${product.image}`,
      'description': product.overview || product.title,
      'sku': product.id,
      'mpn': product.id,
      'brand': {
        '@type': 'Brand',
        'name': 'TorqHive'
      },
      'category': product.category,
      'offers': {
        '@type': 'AggregateOffer',
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock',
        'itemCondition': 'https://schema.org/NewCondition'
      }
    };

    const bodyContent = `
      <header style="padding: 20px 0; border-bottom: 1px solid #e5e7eb;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;">
          <a href="/" style="font-weight: bold; font-size: 20px; color: #111827; text-decoration: none;">TorqHive</a>
        </div>
      </header>
      <main style="max-width: 1200px; margin: 0 auto; padding: 32px 16px;">
        <nav aria-label="Breadcrumb" style="font-size: 14px; margin-bottom: 24px; color: #6b7280;">
          <a href="/" style="color: #4b5563; text-decoration: none;">Home</a> &gt;
          <a href="/products" style="color: #4b5563; text-decoration: none;">Products</a> &gt;
          <span>${escapeHtml(product.category)}</span> &gt;
          <span>${escapeHtml(product.title)}</span>
        </nav>
        <div style="display: flex; gap: 16px; margin-bottom: 24px; padding: 12px 16px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 13px; color: #374151; flex-wrap: wrap;">
          <span><strong>ISO &amp; ASME</strong> Standard Tested</span> &bull;
          <span><strong>48h Sample</strong> Dispatch Ready</span> &bull;
          <span><strong>Factory-Direct</strong> MOQ from ${product.moq || 1} pc</span> &bull;
          <span><strong>OEM/ODM</strong> Custom Logo &amp; Packaging</span>
        </div>
        <article style="display: grid; grid-template-columns: 1fr; gap: 24px;">
          <h1 style="font-size: 28px; font-weight: 700; color: #111827; margin: 0;">${escapeHtml(product.title)}</h1>
          <p style="font-size: 14px; color: #6b7280; margin: 0;">SKU: ${escapeHtml(product.id)} | Category: ${escapeHtml(product.category)} | MOQ: ${product.moq || 1} unit(s)</p>
          <div style="font-size: 16px; line-height: 1.6; color: #374151;">
            <p>${escapeHtml(product.overview || '')}</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
            <tbody>
              <tr><th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; width: 30%;">Dimensions</th><td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(product.dimensions || 'Standard Industrial')}</td></tr>
              <tr><th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Weight</th><td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(product.weight || 'Standard')}</td></tr>
              <tr><th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Minimum Order Quantity</th><td style="padding: 10px; border: 1px solid #e5e7eb;">${product.moq || 1} unit(s)</td></tr>
              <tr><th style="text-align: left; padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb;">Customization</th><td style="padding: 10px; border: 1px solid #e5e7eb;">${product.lightCustomization ? 'Light Customization / OEM Available' : 'Standard Specification'}</td></tr>
            </tbody>
          </table>
          <div style="margin-top: 24px;">
            <a href="/contact?sku=${encodeURIComponent(product.id)}" style="display: inline-block; padding: 12px 24px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 500;">Request Wholesale Quote</a>
          </div>
        </article>
      </main>
    `;

    const html = replaceMeta(template, {
      title,
      description,
      canonicalUrl,
      ogImage,
      structuredData,
      bodyContent
    });

    ensureDirAndWrite(targetFile, html);
    count++;
  }

  // 3. Blog Posts (61 posts)
  for (const post of blogPosts) {
    const route = `/blog/${post.slug}`;
    const canonicalUrl = `https://torqhive.com${route}`;
    const targetFile = path.resolve(distDir, 'blog', post.slug, 'index.html');
    const title = `${post.title} | TorqHive Engineering & Insights`;
    const description = post.metaDescription || post.excerpt || post.title;
    const ogImage = post.coverImage || '/assets/images/home/torqhive-hero-premium.webp';

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': post.title,
      'description': post.excerpt || post.title,
      'image': `https://torqhive.com${ogImage}`,
      'datePublished': post.date,
      'author': {
        '@type': 'Organization',
        'name': post.author || 'TorqHive Engineering Team',
        'url': 'https://torqhive.com'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'TorqHive',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://torqhive.com/assets/images/logo/torqhive-icon.svg'
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonicalUrl
      }
    };

    const bodyContent = `
      <header style="padding: 20px 0; border-bottom: 1px solid #e5e7eb;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;">
          <a href="/" style="font-weight: bold; font-size: 20px; color: #111827; text-decoration: none;">TorqHive</a>
        </div>
      </header>
      <main style="max-width: 800px; margin: 0 auto; padding: 32px 16px;">
        <nav aria-label="Breadcrumb" style="font-size: 14px; margin-bottom: 24px; color: #6b7280;">
          <a href="/" style="color: #4b5563; text-decoration: none;">Home</a> &gt;
          <a href="/blog" style="color: #4b5563; text-decoration: none;">Blog</a> &gt;
          <span>${escapeHtml(post.title)}</span>
        </nav>
        <article>
          <h1 style="font-size: 32px; font-weight: 700; color: #111827; line-height: 1.3; margin-bottom: 16px;">${escapeHtml(post.title)}</h1>
          <div style="font-size: 14px; color: #6b7280; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #e5e7eb;">
            <span>Published: ${escapeHtml(post.date)}</span> &bull;
            <span>Category: ${escapeHtml(post.category)}</span> &bull;
            <span>${escapeHtml(post.readTime || '5 min read')}</span>
          </div>
          <div class="blog-body" style="font-size: 16px; line-height: 1.8; color: #374151;">
            ${post.content || ''}
          </div>
        </article>
      </main>
    `;

    const html = replaceMeta(template, {
      title,
      description,
      canonicalUrl,
      ogImage,
      structuredData,
      bodyContent
    });

    ensureDirAndWrite(targetFile, html);
    count++;
  }

  console.log(`[prerender] Successfully generated ${count} static HTML pages in dist/!`);
}

run().catch((err) => {
  console.error('[prerender] Error during pre-rendering:', err);
  process.exit(1);
});
