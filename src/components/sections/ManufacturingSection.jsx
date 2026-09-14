import React from 'react';
import SectionHeading from '../common/SectionHeading';

const FACTORY_IMGS = [
  { src: 'https://sc02.alicdn.com/kf/H8e50af1cb26f454aa3c521fd04764156i.jpg', alt: 'Precision machining at partner facility' },
  { src: 'https://sc02.alicdn.com/kf/H34d63c1261fd47b7816a57a4994ee74a6.jpg', alt: 'Machine operation floor' },
  { src: 'https://sc02.alicdn.com/kf/Heacf559c61b842d7b26816b251e608b4v.jpg', alt: 'Socket component detail' },
  { src: 'https://sc02.alicdn.com/kf/H38afb1f2663b429d956a0cdfc96a3d85E.jpg', alt: 'Packed and ready-for-export goods' },
];

export default function ManufacturingSection() {
  return (
    <section data-component="manufacturing-section" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="mfg-grid">
          {/* Left — image mosaic */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            {FACTORY_IMGS.map(img => (
              <div key={img.src} style={{ aspectRatio: '1/1', overflow: 'hidden', background: 'var(--th-surface)' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 300ms ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
              </div>
            ))}
          </div>

          {/* Right — copy */}
          <div>
            <SectionHeading
              eyebrow="Sourcing Approach"
              title="A closer look behind the tools."
              subtitle="See footage from a partner manufacturing facility, including machining, component handling and packing areas."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Location', value: 'Zhejiang, China' },
                { label: 'Partnership model', value: 'Coordinated sourcing with partner factories' },
                { label: 'Customization', value: 'Logo, label, packaging — confirm per product' },
                { label: 'Quality documentation', value: 'Available for selected models on request' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--th-border)' }}>
                  <p className="text-meta" style={{ width: '140px', flexShrink: 0 }}>{item.label}</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-text)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .mfg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
