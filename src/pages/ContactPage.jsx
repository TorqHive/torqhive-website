import React from 'react';
import InquiryForm from '../components/sections/InquiryForm';
import SectionHeading from '../components/common/SectionHeading';
import { trackWhatsAppClick } from '../utils/analytics';
import { ShieldCheck } from 'lucide-react';

const WA_URL = 'https://wa.me/8615669586372?text=' + encodeURIComponent(
  "Hi TorqHive, I'd like to discuss a B2B product inquiry.\n• Product Lines: [e.g. Torque Wrenches / Ratchets / Sockets]\n• Target Qty: [e.g. Trial sample / 100+ pcs / Container]\n• Destination: [Country / Port]\nPlease share your export price list and catalog."
);

export default function ContactPage() {
  return (
    <main data-component="contact-page">
      {/* Header */}
      <div style={{ background: 'var(--th-black)', padding: '64px 0 56px' }}>
        <div className="container">
          <p className="text-eyebrow" style={{ marginBottom: '10px' }}>Get in Touch</p>
          <h1 className="text-h1" style={{ color: '#FFFFFF', marginBottom: '16px' }}>Tell us what you need.</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-lg)', maxWidth: '480px' }}>
            Share your product selection, quantities and destination. Add any requirements for packaging, samples or product documentation.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }} className="contact-grid">
            {/* Left — info */}
            <div>
              <SectionHeading eyebrow="Contact" title="How to reach us." />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <p className="text-meta" style={{ marginBottom: '8px' }}>WhatsApp Business (30-Min Fast Response)</p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ gap: '8px', display: 'inline-flex' }}
                    onClick={() => trackWhatsAppClick({ location: 'contact_page' })}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Chat on WhatsApp
                  </a>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--th-muted)', marginTop: '8px' }}>Direct connection to our export engineering sales desk.</p>
                </div>

                {/* Trust endorsement */}
                <div style={{ padding: '16px 20px', background: 'var(--th-surface)', borderRadius: 'var(--radius)', border: '1px solid var(--th-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <ShieldCheck size={18} color="var(--th-red, #dc2626)" />
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>Quality & Compliance Assurance</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--th-muted)', lineHeight: 1.5, margin: 0 }}>
                    DIN ISO 6789 Calibrated &bull; Traceable Reports (Ref: G20251028 / XQD240529045) &bull; Samples available (freight collect) for trade buyers.
                  </p>
                </div>

                <div style={{ padding: '20px', background: 'var(--th-surface)', borderRadius: 'var(--radius)', border: '1px solid var(--th-border)' }}>
                  <p className="text-meta" style={{ marginBottom: '8px' }}>Include in your inquiry</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Product references (e.g. TH-005, TH-016)', 'Quantities per item', 'Destination country', 'Packaging or labeling requirements', 'Certification documents needed'].map(item => (
                      <li key={item} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-sm)', color: 'var(--th-text)' }}>
                        <span style={{ color: 'var(--th-red)', flexShrink: 0, marginTop: '1px' }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
