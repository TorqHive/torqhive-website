import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section data-component="hero-section" style={{ background: 'var(--th-black)', overflow: 'hidden' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '560px',
          gap: 0,
        }}
      >
        {/* Left — copy */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 48px 80px 0',
          }}
          className="hero-left"
        >
          <p className="text-eyebrow" style={{ marginBottom: '16px' }}>
            Professional Hand Tools for Global Trade
          </p>
          <h1 className="text-hero" style={{ color: '#FFFFFF', marginBottom: '20px' }}>
            Build a sharper<br />
            tool assortment.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-lg)', marginBottom: '36px', lineHeight: '1.7', maxWidth: '420px' }}>
            Explore 40 ratchets, sockets, wrenches, torque tools, automotive specialty tools and workshop sets. MOQ starts at one piece, with light customization available.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary" style={{ gap: '6px' }}>
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Right — product image */}
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            position: 'relative',
          }}
          className="hero-right"
        >
          <img
            src="/assets/images/home/torqhive-hero-premium.png"
            alt="TorqHive — Professional Hand Tools"
            style={{
              maxWidth: '440px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.5))',
            }}
          />
          {/* Subtle accent line */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
            background: 'var(--th-red)',
          }} />
        </div>
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 768px) {
          .hero-left { padding: 40px 0 32px 0 !important; }
          .hero-right { display: none !important; }
          [data-component="hero-section"] .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
