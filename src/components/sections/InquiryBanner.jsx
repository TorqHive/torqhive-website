import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, PackageCheck, MessageSquare } from 'lucide-react';

const OPTIONS = [
  {
    icon: FileText,
    title: '2026 export catalogue',
    body: 'Full specification sheets, carton dimensions and MOQ per reference — sent as PDF.',
    action: 'Request the PDF',
    to: '/contact?subject=catalogue',
  },
  {
    icon: PackageCheck,
    title: 'Sample kit',
    body: 'One sample per tool family, dispatched in 48 hours. Freight collected on your account.',
    action: 'Request samples',
    to: '/contact?subject=sample-kit',
  },
  {
    icon: MessageSquare,
    title: 'Wholesale quotation',
    body: 'Send quantities and destination; we reply with pricing, lead time and terms.',
    action: 'Start an inquiry',
    to: '/contact',
  },
];

export default function InquiryBanner() {
  return (
    <section
      data-component="inquiry-banner"
      className="section cta"
      style={{ paddingBottom: '96px' }}
    >
      <div className="container cta__inner">
        <div className="cta__copy">
          <p className="text-eyebrow cta__eyebrow">Start Your Inquiry</p>
          <h2 className="text-h2 cta__title">What does your market need?</h2>
          <p className="cta__lead">
            Send your product list and destination. We review requirements with our supply partners and
            come back with a quotation you can compare line by line.
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn-primary">
              Start your inquiry <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/8615669586372?text=Hi%20TorqHive%2C%20I%27d%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="cta__grid">
          {OPTIONS.map(opt => {
            const Icon = opt.icon;
            return (
              <Link className="cta__card" to={opt.to} key={opt.title}>
                <span className="cta__icon"><Icon size={18} strokeWidth={1.6} /></span>
                <h3>{opt.title}</h3>
                <p>{opt.body}</p>
                <span className="cta__action">{opt.action} <ArrowUpRight size={14} /></span>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .cta {
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .cta__inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
          gap: 64px;
          align-items: start;
        }
        .cta__eyebrow { color: #FF7A8A; }
        .cta__title { margin: 10px 0 16px; color: var(--fg); max-width: 14ch; }
        .cta__lead {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 44ch;
          margin-bottom: 26px;
        }
        .cta__actions { display: flex; gap: 12px; flex-wrap: wrap; }

        .cta__grid { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
        .cta__card {
          position: relative;
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          grid-template-areas: "icon title" "icon body" "icon action";
          column-gap: 14px;
          padding: 20px 22px;
          background: var(--panel);
          color: var(--fg);
          transition: background 180ms var(--ease);
        }
        .cta__card:hover { background: #171E27; }
        .cta__icon { grid-area: icon; color: var(--th-red); padding-top: 2px; }
        .cta__card h3 { grid-area: title; font-size: 15px; font-weight: 700; margin-bottom: 5px; }
        .cta__card p { grid-area: body; font-size: 12.5px; line-height: 1.55; color: var(--muted); margin-bottom: 10px; }
        .cta__action {
          grid-area: action;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(232,234,237,0.72);
        }
        .cta__card:hover .cta__action { color: #FF7A8A; }

        @media (max-width: 1000px) {
          .cta__inner { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>
    </section>
  );
}
