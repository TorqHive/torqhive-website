import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import InquiryForm from '../components/sections/InquiryForm';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

const WA_NUMBER = '8615669586372';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <main style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--th-muted)', marginBottom: '16px' }}>Product not found.</p>
          <Link to="/products" className="btn btn-outline-dark">Back to Products</Link>
        </div>
      </main>
    );
  }

  const waText = encodeURIComponent(
    `Hi TorqHive, I'd like to inquire about ${product.id} — ${product.title}.\n` +
    `• Target Qty: [e.g. 50 / 200 / 1000 pcs]\n` +
    `• Destination Country: [e.g. UK / Germany / USA]\n` +
    `• Customization: [Logo / Custom Packaging / Standard]\n` +
    `Please share export pricing, sample availability (freight collect) and lead time.`
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  return (
    <main data-component="product-detail-page">
      {/* Breadcrumb */}
      <div style={{ background: 'var(--th-surface)', borderBottom: '1px solid var(--th-border)', padding: '12px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--th-text)' }}>{product.id}</span>
          </nav>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="pdp-grid">
          {/* Left — image */}
          <div>
            <div style={{
              background: 'var(--th-surface)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--th-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              aspectRatio: '1/1',
            }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>

            {/* Trust endorsement above primary CTA */}
            <div style={{
              background: 'var(--th-surface)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--th-border)',
              padding: '14px 16px',
              marginTop: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <ShieldCheck size={16} color="var(--th-red, #dc2626)" />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Verified Factory Standards</span>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--th-muted)', margin: 0, lineHeight: 1.5 }}>
                DIN ISO 6789 Calibration &bull; Documented Test Reports (Ref: G20251028 / XQD240529045) &bull; Zhejiang Hardware Export Base
              </p>
            </div>

            {/* Quick actions */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: 'center', gap: '8px' }}
                onClick={() => trackWhatsAppClick({ location: 'pdp_quick', productId: product.id, productTitle: product.title })}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Quick WhatsApp Inquiry
              </a>
              <Link to="/products" className="btn btn-outline-dark" style={{ gap: '6px' }}>
                <ArrowLeft size={14} /> All Products
              </Link>
            </div>
          </div>

          {/* Right — details */}
          <div>
            <p className="text-meta" style={{ marginBottom: '8px' }}>{product.category}</p>
            <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: '8px', lineHeight: 1.25 }}>{product.title}</h1>
            <p className="text-meta" style={{ marginBottom: '20px', color: 'var(--th-red)' }}>Ref: {product.id}</p>

            <p style={{ color: 'var(--th-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7, marginBottom: '28px' }}>
              {product.overview}
            </p>

            {/* Spec table */}
            <h2 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: '12px' }}>Specifications</h2>
            <table className="spec-table" style={{ marginBottom: '28px' }}>
              <tbody>
                <tr><td>Package dimensions</td><td>{product.dimensions}</td></tr>
                <tr><td>Listed weight</td><td>{product.weight}</td></tr>
                <tr><td>Minimum order quantity</td><td>{product.moq} piece</td></tr>
                <tr><td>Sample policy</td><td>Samples available &bull; Freight collect</td></tr>
              </tbody>
            </table>

            {/* Customization */}
            <h2 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: '12px' }}>Customization</h2>
            <div style={{ background: 'var(--th-surface)', borderRadius: 'var(--radius)', padding: '16px 20px', marginBottom: '28px', border: '1px solid var(--th-border)' }}>
              <p style={{ fontSize: 'var(--text-sm)', marginBottom: '6px' }}>
                <strong>Light customization:</strong> Logo, label or packaging changes subject to artwork, setup charge and lead-time confirmation.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-muted)' }}>
                Full customization: Confirm feasibility, tooling, sample, MOQ and lead time per project.
              </p>
            </div>

            {/* Inquiry form */}
            <h2 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: '16px' }}>Request a Quote</h2>
            <InquiryForm prefilledProduct={`${product.id} — ${product.title} × (qty)`} compact={true} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pdp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
