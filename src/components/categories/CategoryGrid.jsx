import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CATEGORY_ICONS = {
  "Ratchets & Drive Tools": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07A10 10 0 0 1 4.93 4.93"/></svg>
  ),
  "Sockets & Accessories": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M8 8V5a2 2 0 0 1 4 0v3"/><path d="M12 8v3"/></svg>
  ),
  "Wrenches": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  "Torque Tools": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="m15 19-3 3-3-3"/><path d="M10 2h4"/><path d="M12 2v4"/><path d="M7 7a5 5 0 1 0 10 0"/></svg>
  ),
  "Automotive Specialty Tools": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  ),
  "Insulated & High-Voltage Tools": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.2 8 11 4.6-1.8 8-6 8-11V5l-8-3z"/><path d="m13 7-4 6h3l-1 4 4-6h-3l1-4z"/></svg>
  ),
  "Workshop Consumables & Air Accessories": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10a3 3 0 0 1 3 3v1H8"/><path d="M16 12h5"/><path d="M6 16h8"/><path d="M9 20h5"/><path d="M4 12h2"/></svg>
  ),
  "Tool Sets": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
  ),
};

export default function CategoryGrid({ categories }) {
  const [lead, ...rest] = categories;
  const label = n => (n === 1 ? 'product' : 'products');

  return (
    <section data-component="category-grid" className="section cat">
      <div className="container">
        <div className="cat__head">
          <div>
            <p className="text-eyebrow">Browse Range</p>
            <h2 className="text-h2 cat__title">Shop by tool family.</h2>
          </div>
          <p className="cat__sub">
            Start with a tool type, then compare drive, configuration, dimensions, included pieces
            and listed weight before you request a quote.
          </p>
        </div>

        <div className="cat__grid">
          {lead && (
            <Link
              to={`/products?category=${encodeURIComponent(lead.name)}`}
              data-component="category-card"
              className="cat__card cat__card--lead"
            >
              <span className="cat__watermark" aria-hidden="true">{CATEGORY_ICONS[lead.name]}</span>
              <div className="cat__card-top">
                <span className="cat__num">01</span>
                <span className="cat__icon">{CATEGORY_ICONS[lead.name]}</span>
              </div>
              <div className="cat__card-body">
                <h3>{lead.name}</h3>
                <p>{lead.description}</p>
              </div>
              <div className="cat__card-foot">
                <span className="cat__count">{lead.count} {label(lead.count)}</span>
                <span className="cat__go"><ArrowUpRight size={16} /></span>
              </div>
            </Link>
          )}

          {rest.slice(0, 6).map((cat, i) => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              data-component="category-card"
              className="cat__card"
            >
              <div className="cat__card-top">
                <span className="cat__num">{String(i + 2).padStart(2, '0')}</span>
                <span className="cat__icon">{CATEGORY_ICONS[cat.name]}</span>
              </div>
              <div className="cat__card-body">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
              <div className="cat__card-foot">
                <span className="cat__count">{cat.count} {label(cat.count)}</span>
                <span className="cat__go"><ArrowUpRight size={14} /></span>
              </div>
            </Link>
          ))}

          {rest.slice(6).map((cat, i) => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              data-component="category-card"
              className="cat__card"
            >
              <div className="cat__card-top">
                <span className="cat__num">{String(i + 8).padStart(2, '0')}</span>
                <span className="cat__icon">{CATEGORY_ICONS[cat.name]}</span>
              </div>
              <div className="cat__card-body">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
              <div className="cat__card-foot">
                <span className="cat__count">{cat.count} {label(cat.count)}</span>
                <span className="cat__go"><ArrowUpRight size={14} /></span>
              </div>
            </Link>
          ))}

          <Link to="/products" className="cat__card cat__card--cta">
            <span className="cat__cta-num">ALL</span>
            <span className="cat__cta-label">All tool families</span>
            <span className="cat__cta-link">Browse full catalogue <ArrowUpRight size={14} /></span>
          </Link>
        </div>
      </div>

      <style>{`
        .cat { background: var(--bg); }
        .cat__head {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 56px;
          align-items: end;
          margin-bottom: 34px;
        }
        .cat__title { margin-top: 10px; color: var(--fg); }
        .cat__sub {
          font-size: 15px;
          line-height: 1.65;
          color: var(--muted);
          max-width: 52ch;
        }

        .cat__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          grid-auto-rows: 176px;
          gap: 10px;
        }
        .cat__card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 18px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--th-radius);
          color: var(--fg);
          overflow: hidden;
          transition: border-color 200ms var(--ease), background 200ms var(--ease), transform 200ms var(--ease);
        }
        .cat__card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 80% at 100% 0%, rgba(229,23,63,0.16), transparent 60%);
          opacity: 0;
          transition: opacity 220ms var(--ease);
          pointer-events: none;
        }
        .cat__card:hover { border-color: rgba(229,23,63,0.55); transform: translateY(-2px); }
        .cat__card:hover::after { opacity: 1; }

        .cat__card--lead {
          grid-column: span 2;
          grid-row: span 2;
          padding: 24px;
        }
        .cat__watermark {
          position: absolute;
          right: -30px;
          bottom: -34px;
          color: rgba(255,255,255,0.045);
          pointer-events: none;
          line-height: 0;
        }
        .cat__watermark svg { width: 260px; height: 260px; }
        .cat__card--lead .cat__card-body { margin-top: auto; }

        .cat__card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        .cat__num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--muted);
        }
        .cat__icon { color: var(--th-red); display: inline-flex; }
        .cat__card--lead .cat__icon svg { width: 40px; height: 40px; }

        .cat__card-body { position: relative; z-index: 1; }
        .cat__card-body h3 {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 6px;
          color: var(--fg);
        }
        .cat__card--lead .cat__card-body h3 {
          font-family: var(--font-display);
          font-size: 26px;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .cat__card-body p {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--muted);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cat__card--lead .cat__card-body p {
          -webkit-line-clamp: 3;
          max-width: 34ch;
          font-size: 14px;
        }

        .cat__card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--border);
          padding-top: 10px;
        }
        .cat__count {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .cat__go { color: var(--muted); transition: color 160ms ease, transform 160ms ease; }
        .cat__card:hover .cat__go { color: var(--th-red); transform: translate(2px, -2px); }

        .cat__card--cta {
          background: transparent;
          border-style: dashed;
          justify-content: flex-end;
          gap: 6px;
        }
        .cat__cta-num {
          font-family: var(--font-display);
          font-size: 40px;
          line-height: 1;
          color: rgba(255,255,255,0.14);
          position: absolute;
          top: 14px;
          right: 18px;
        }
        .cat__cta-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .cat__cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 700;
          color: var(--fg);
        }

        @media (max-width: 1100px) {
          .cat__head { grid-template-columns: 1fr; gap: 16px; align-items: start; }
          .cat__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: 168px; }
          .cat__card--lead { grid-column: span 2; grid-row: span 1; }
          .cat__card--lead .cat__card-body h3 { font-size: 22px; }
        }
        @media (max-width: 620px) {
          .cat__grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
          .cat__card { min-height: 132px; }
          .cat__card--lead { grid-column: span 1; }
          .cat__card--lead .cat__card-body p { -webkit-line-clamp: 2; }
        }
      `}</style>
    </section>
  );
}


