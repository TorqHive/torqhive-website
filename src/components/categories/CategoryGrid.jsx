import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

const CATEGORY_ICONS = {
  "Ratchets & Drive Tools": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07A10 10 0 0 1 4.93 4.93"/></svg>
  ),
  "Sockets & Accessories": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M8 8V5a2 2 0 0 1 4 0v3"/><path d="M12 8v3"/></svg>
  ),
  "Wrenches": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  "Torque Tools": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="m15 19-3 3-3-3"/><path d="M10 2h4"/><path d="M12 2v4"/><path d="M7 7a5 5 0 1 0 10 0"/></svg>
  ),
  "Automotive Specialty Tools": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  ),
  "Tool Sets": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
  ),
};

export default function CategoryGrid({ categories }) {
  return (
    <section data-component="category-grid" className="section section--surface">
      <div className="container">
        <SectionHeading
          eyebrow="Browse Range"
          title="Shop by tool family."
          subtitle="Start with a tool type, then compare drive, configuration, dimensions, included pieces and listed weight."
          align="center"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }} className="cat-grid">
          {categories.map(cat => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              data-component="category-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '24px',
                background: 'var(--th-white)',
                border: '1px solid var(--th-border)',
                borderRadius: 'var(--radius)',
                transition: 'border-color 150ms ease, box-shadow 150ms ease',
                textDecoration: 'none',
                color: 'var(--th-text)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--th-black)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--th-border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <span style={{ color: 'var(--th-red)' }}>{CATEGORY_ICONS[cat.name]}</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 'var(--text-base)', marginBottom: '6px' }}>{cat.name}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-muted)', lineHeight: 1.5 }}>{cat.description}</p>
              </div>
              <p className="text-meta" style={{ marginTop: 'auto' }}>{cat.count} products</p>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .cat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
