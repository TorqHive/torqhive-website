import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

const REPORTS = [
  {
    ref: 'XQD240529045',
    desc: 'Selected substance testing on a submitted socket-tool sample.',
    date: 'May 30, 2024',
    note: 'Not a blanket certificate for the TorqHive range.',
  },
  {
    ref: 'G20251028',
    desc: 'Torque accuracy test report for model S016106, 12.5 mm drive, 40–200 N·m.',
    date: 'July 31, 2025',
    note: 'Model and supplier linkage must be checked before relying on it for an order.',
  },
];

export default function QualitySection() {
  return (
    <section data-component="quality-section" className="section section--surface">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="quality-grid">
          <div>
            <SectionHeading
              eyebrow="Quality & Compliance"
              title="Documentation that matches your order."
              subtitle="Product requirements depend on the selected model and destination. Tell us the specifications and documents your purchasing process needs."
            />
            <Link to="/contact?subject=documentation" className="btn btn-outline-dark">
              Ask About Product Documentation
            </Link>
          </div>
          <div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-muted)', marginBottom: '24px', lineHeight: 1.7 }}>
              Reports apply only to the sample, model and tested items identified in each document. Confirm model and supplier linkage before relying on any report for an order.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {REPORTS.map((r, i) => (
                <div
                  key={r.ref}
                  style={{
                    padding: '20px 0',
                    borderBottom: i < REPORTS.length - 1 ? '1px solid var(--th-border)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <span className="badge badge-dark">{r.ref}</span>
                    <span className="text-meta">{r.date}</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-text)', marginBottom: '4px' }}>{r.desc}</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--th-muted)' }}>{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .quality-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
