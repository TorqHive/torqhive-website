import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: 'Are all displayed products available for immediate shipment?',
    a: 'The website shows our initial sourcing range. Available configurations, quantities and dispatch timing are confirmed with each quotation.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'Minimum quantities depend on the product and packaging configuration. Send your intended quantities for review.',
  },
  {
    q: 'Can I request a sample?',
    a: 'Send the product reference and destination to discuss sample availability, charges and shipping arrangements.',
  },
  {
    q: 'Can I request my own logo or packaging?',
    a: 'Send your branding and packaging requirements. Feasibility, minimum quantities, artwork requirements and lead time must be confirmed for the selected product.',
  },
  {
    q: 'What payment and delivery terms do you offer?',
    a: 'Payment method, currency, delivery terms and the named delivery location are agreed in the quotation and order documents.',
  },
  {
    q: 'Which test reports are available?',
    a: 'Reports are model- and test-specific. Tell us which documents your purchasing process requires so we can check the relevant product records.',
  },
  {
    q: 'How do I report an order issue?',
    a: 'Contact the sales representative handling your order with the order reference, affected quantity and clear photos or video. The agreed order terms govern the handling of claims.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--th-border)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--th-text)',
          gap: '16px',
        }}
        aria-expanded={open}
      >
        {q}
        {open ? <ChevronUp size={18} style={{ flexShrink: 0, color: 'var(--th-red)' }} /> : <ChevronDown size={18} style={{ flexShrink: 0, color: 'var(--th-muted)' }} />}
      </button>
      {open && (
        <p style={{ paddingBottom: '20px', fontSize: 'var(--text-sm)', color: 'var(--th-muted)', lineHeight: 1.75 }}>{a}</p>
      )}
    </div>
  );
}

export default function BuyingGuidePage() {
  return (
    <main data-component="buying-guide-page">
      <div style={{ background: 'var(--th-black)', padding: '64px 0 56px' }}>
        <div className="container">
          <p className="text-eyebrow" style={{ marginBottom: '10px' }}>Buying Guide</p>
          <h1 className="text-h1" style={{ color: '#FFFFFF' }}>Buying from TorqHive.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="guide-grid">
            <div>
              <SectionHeading eyebrow="Start Here" title="Start with your product list." />
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--th-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
                Choose the product references and configurations you need. Include quantity per item, destination and any packaging requirements so we can prepare the next discussion.
              </p>
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            </div>
            <div>
              <SectionHeading eyebrow="FAQ" title="Frequently asked questions." />
              <div>
                {FAQS.map(item => <FaqItem key={item.q} {...item} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) { .guide-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
