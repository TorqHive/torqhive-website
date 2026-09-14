import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main
      data-component="not-found-page"
      style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0' }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '80px',
            fontWeight: 700,
            color: 'var(--th-surface)',
            lineHeight: 1,
            marginBottom: '8px',
            userSelect: 'none',
          }}
          aria-hidden="true"
        >
          404
        </p>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: '12px' }}>Page not found.</h1>
        <p style={{ color: 'var(--th-muted)', marginBottom: '32px', maxWidth: '340px', margin: '0 auto 32px' }}>
          The page you're looking for doesn't exist. Head back to explore our product range.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ gap: '6px' }}>
            <ArrowLeft size={16} /> Home
          </Link>
          <Link to="/products" className="btn btn-outline-dark">View All Products</Link>
        </div>
      </div>
    </main>
  );
}
