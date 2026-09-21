import React from 'react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../../utils/analytics';

const FOOTER_LINKS = {
  Products: [
    { label: 'Ratchets & Drive Tools', to: '/products?category=Ratchets+%26+Drive+Tools' },
    { label: 'Sockets & Accessories', to: '/products?category=Sockets+%26+Accessories' },
    { label: 'Wrenches', to: '/products?category=Wrenches' },
    { label: 'Torque Tools', to: '/products?category=Torque+Tools' },
    { label: 'Automotive Specialty', to: '/products?category=Automotive+Specialty+Tools' },
    { label: 'Tool Sets', to: '/products?category=Tool+Sets' },
    { label: 'Next-Gen Power Tools', to: '/about' },
  ],
  Company: [
    { label: 'About TorqHive', to: '/about' },
    { label: 'Technical Blog & Insights', to: '/blog' },
    { label: 'Buying Guide', to: '/buying-guide' },
    { label: 'Quality & Documentation', to: '/about#quality' },
    { label: 'Contact', to: '/contact' },
  ],
};

const WA_URL = 'https://wa.me/8615669586372?text=Hi%20TorqHive%2C%20I%27d%20like%20to%20inquire%20about%20your%20products.';

export default function Footer() {
  return (
    <footer data-component="site-footer" style={{ background: 'var(--th-black)', color: 'rgba(255,255,255,0.65)' }}>
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }} className="footer-grid">
          {/* Brand column */}
          <div>
            <Link to="/">
              <img
                src="/assets/images/logo/torqhive-wordmark-light.svg"
                alt="TorqHive"
                height={26}
                style={{ height: '26px', width: 'auto', marginBottom: '20px' }}
              />
            </Link>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8, maxWidth: '280px', marginBottom: '20px' }}>
              Precision mechanical hand tools and next-generation cordless power tool solutions for global trade. Serving distributors, importers, and custom OEM programs.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-sm)', color: '#25D366', fontWeight: 600 }}
              onClick={() => trackWhatsAppClick({ location: 'footer' })}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Inquiry
            </a>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: '16px', letterSpacing: '0.04em' }}>
                {group}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(l => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.55)', transition: 'color 150ms ease' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="divider" style={{ borderColor: 'rgba(255,255,255,0.08)', marginBottom: '24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} TorqHive. All rights reserved.
          </p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-mono)' }}>
            Precision hand tools &amp; next-gen power solutions for global trade.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
