import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../products/ProductCard';

export default function FeaturedProducts({ products }) {
  return (
    <section data-component="featured-products" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <SectionHeading
            eyebrow="Featured Range"
            title="Start with proven workshop essentials."
            subtitle="Review a focused cross-section of the launch range, then send quantities, destination and customization needs for a quotation."
          />
          <Link to="/products" className="btn btn-outline-dark" style={{ flexShrink: 0 }}>
            View All 40 Products
          </Link>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }} className="featured-grid">
          {products.map(p => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .featured-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .featured-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
