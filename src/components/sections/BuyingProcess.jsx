import React from 'react';
import SectionHeading from '../common/SectionHeading';

const STEPS = [
  {
    num: '01',
    title: 'Choose products',
    body: 'Share product references, variants and quantities.',
  },
  {
    num: '02',
    title: 'Confirm requirements',
    body: 'Discuss specifications, packaging, samples and destination.',
  },
  {
    num: '03',
    title: 'Review your quotation',
    body: 'Confirm availability, lead time, payment and delivery terms.',
  },
  {
    num: '04',
    title: 'Agree the order',
    body: 'Finalise the specification and inspection requirements before proceeding.',
  },
];

export default function BuyingProcess() {
  return (
    <section data-component="buying-process" className="section section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="From product selection to a clear quotation."
          theme="dark"
          align="center"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }} className="process-grid">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: '32px 24px',
                background: 'var(--th-black)',
                borderRight: i < STEPS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
              className="process-step"
            >
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--th-red)',
                fontWeight: 600,
                marginBottom: '16px',
                letterSpacing: '0.1em',
              }}>{step.num}</p>
              <h3 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 'var(--text-base)', marginBottom: '10px' }}>
                {step.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-step { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
