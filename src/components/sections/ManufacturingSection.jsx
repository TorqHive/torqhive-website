import React from 'react';
import SectionHeading from '../common/SectionHeading';

const FACTORY_IMGS = [
  { src: '/assets/images/factory/machining-detail.jpg', alt: 'Precision machining at partner facility' },
  { src: '/assets/images/factory/machine-operation.jpg', alt: 'Machine operation floor' },
  { src: '/assets/images/factory/socket-component-detail.jpg', alt: 'Socket component detail' },
  { src: '/assets/images/factory/packed-goods.jpg', alt: 'Packed and ready-for-export goods' },
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
              eyebrow="Manufacturing &amp; Supply Chain"
              title="A closer look behind TorqHive tools."
              subtitle="Inside our partner manufacturing facilities in Zhejiang, China — covering alloy forging, precision CNC machining, torque calibration, and export packaging."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Location', value: 'Zhejiang, China (Industrial Hardware & Power Tool Cluster)' },
                { label: 'Core Capabilities', value: 'Precision alloy forging, CNC machining, and electromechanical assembly' },
                { label: 'Product Focus', value: 'Professional hand tools & upcoming cordless/brushless power tools' },
                { label: 'Customization', value: 'Laser marking, two-shot color molding, custom blow-mold cases & EVA trays' },
                { label: 'Compliance & QA', value: 'Traceable torque calibration, DIN/ISO standards, and CE/RoHS safety audits' },
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
