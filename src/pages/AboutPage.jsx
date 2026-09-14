import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';

export default function AboutPage() {
  return (
    <main data-component="about-page">
      {/* Header */}
      <div style={{ background: 'var(--th-black)', padding: '64px 0 56px' }}>
        <div className="container">
          <p className="text-eyebrow" style={{ marginBottom: '10px' }}>About Us</p>
          <h1 className="text-h1" style={{ color: '#FFFFFF', maxWidth: '600px' }}>
            A hand tool export business built on clear communication.
          </h1>
        </div>
      </div>

      {/* Brand story */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">
            <div>
              <SectionHeading eyebrow="Who We Are" title="About TorqHive." />
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8, color: 'var(--th-muted)', marginBottom: '24px' }}>
                TorqHive is a hand tool export business working with manufacturing partners in Zhejiang, China. We bring together ratchets, sockets, wrenches and automotive service tool sets for importers, distributors and trade buyers.
              </p>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--th-muted)', marginBottom: '24px' }}>
                Our approach starts with understanding the tools and configurations a buyer needs. Through close communication with our partner factories, we coordinate product selection, specifications and order requirements, helping buyers build a focused assortment.
              </p>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--th-muted)', marginBottom: '32px' }}>
                We believe good tools deserve trust. That means discussing quality requirements clearly, checking which documents apply to the selected product, and agreeing on supply details before an order is placed.
              </p>
              <Link to="/products" className="btn btn-primary">Explore Our Product Range</Link>
            </div>
            <div>
              {/* Factory image */}
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '16px' }}>
                <img src="https://sc02.alicdn.com/kf/H0b4987d7f364498fb5a33841d02ef01ct.jpg" alt="Partner workshop facility" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <img src="https://sc02.alicdn.com/kf/Hde614e4cea90410895c73894158a6f4cY.jpg" alt="Sample room" style={{ borderRadius: 'var(--radius)', height: '160px', objectFit: 'cover', width: '100%' }} />
                <img src="https://sc02.alicdn.com/kf/H6cbac9ceb9604aa79ad6cf40a9932692Y.jpg" alt="Product photography" style={{ borderRadius: 'var(--radius)', height: '160px', objectFit: 'cover', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="quality" className="section section--surface">
        <div className="container">
          <SectionHeading eyebrow="Our Approach" title="What guides us." align="center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="values-grid">
            {[
              { title: 'Product-first', body: 'We start by understanding what a buyer needs — drive sizes, configurations, intended use — before discussing quantities or price.' },
              { title: 'Clear documentation', body: 'Quality reports are model- and test-specific. We discuss which documents apply to your selected product before an order is placed.' },
              { title: 'Supply coordination', body: 'We work directly with partner factories to coordinate product specifications, samples, packaging requirements and lead times.' },
            ].map(v => (
              <div key={v.title} style={{ padding: '28px', background: 'var(--th-white)', borderRadius: 'var(--radius)', border: '1px solid var(--th-border)' }}>
                <div style={{ width: '4px', height: '32px', background: 'var(--th-red)', borderRadius: '2px', marginBottom: '16px' }} />
                <h3 style={{ fontWeight: 700, marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-muted)', lineHeight: 1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
