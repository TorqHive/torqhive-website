import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { trackInquirySubmit, trackWhatsAppClick } from '../../utils/analytics';
import { ShieldCheck, MessageCircle, BookOpen, FileCheck } from 'lucide-react';

const WA_NUMBER = '8615669586372';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

/**
 * InquiryForm — collects B2B inquiry and submits via EmailJS + opens WhatsApp
 * @param {Object}  props
 * @param {string}  [props.prefilledProduct]  — pre-fill product reference field
 * @param {boolean} [props.compact]           — compact layout (for PDP sidebar)
 */
export default function InquiryForm({ prefilledProduct = '', compact = false }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    user_name: '',
    user_company: '',
    user_email: '',
    destination_country: '',
    products: prefilledProduct,
    phone_whatsapp: '',
    packaging_requirements: '',
    delivery_date: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const buildWaText = () => {
    const lines = [
      `New B2B Inquiry — TorqHive Website`,
      `Name: ${formData.user_name}`,
      `Company: ${formData.user_company}`,
      `Email: ${formData.user_email}`,
      `Destination: ${formData.destination_country}`,
      `Products: ${formData.products}`,
    ];
    if (formData.phone_whatsapp) lines.push(`Phone/WA: ${formData.phone_whatsapp}`);
    if (formData.message) lines.push(`Notes: ${formData.message}`);
    return lines.join('\n');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      trackInquirySubmit({
        productId: formData.products,
        company: formData.user_company,
        destination: formData.destination_country,
      });
      // Open WhatsApp with form summary as secondary action
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaText())}`;
      setTimeout(() => window.open(waUrl, '_blank', 'noopener,noreferrer'), 600);
    } catch (err) {
      console.error('EmailJS error:', err);
      // Still track attempted submission
      trackInquirySubmit({
        productId: formData.products,
        company: formData.user_company,
        destination: formData.destination_country,
      });
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        data-component="inquiry-form-success"
        style={{
          padding: compact ? '24px' : '36px',
          background: 'var(--th-surface)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--th-border)',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>Your inquiry has been received!</h3>
        <p style={{ color: 'var(--th-muted)', fontSize: 'var(--text-sm)', marginBottom: '24px', lineHeight: 1.6 }}>
          Our export team reviews requests within 30 minutes during business hours. Choose your next step:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', marginBottom: '20px' }}>
          {/* Action 1: WhatsApp */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaText())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ gap: '10px', justifyContent: 'center', padding: '12px 16px' }}
            onClick={() => trackWhatsAppClick({ location: 'form_success_next_step' })}
          >
            <MessageCircle size={18} />
            Continue on WhatsApp (Priority Fast Track)
          </a>

          {/* Action 2: Catalog */}
          <Link
            to="/products"
            className="btn btn-outline-dark"
            style={{ gap: '10px', justifyContent: 'center', padding: '12px 16px' }}
          >
            <BookOpen size={18} />
            Browse Full 40+ Tool Catalog
          </Link>

          {/* Action 3: About / QA */}
          <Link
            to="/about"
            className="btn btn-outline-dark"
            style={{ gap: '10px', justifyContent: 'center', padding: '12px 16px' }}
          >
            <FileCheck size={18} />
            Review Factory Standards & Test Reports
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      data-component="inquiry-form"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        background: compact ? 'transparent' : 'var(--th-surface)',
        padding: compact ? 0 : '40px',
        borderRadius: compact ? 0 : 'var(--radius)',
        border: compact ? 'none' : '1px solid var(--th-border)',
      }}
    >
      {/* Required fields */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="user_name">Your name<span>*</span></label>
          <input id="user_name" name="user_name" required className="form-input" value={formData.user_name} onChange={handleChange} placeholder="Jane Smith" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="user_company">Company<span>*</span></label>
          <input id="user_company" name="user_company" required className="form-input" value={formData.user_company} onChange={handleChange} placeholder="Your Trading Co." />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="user_email">Business email<span>*</span></label>
          <input id="user_email" name="user_email" type="email" required className="form-input" value={formData.user_email} onChange={handleChange} placeholder="jane@company.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="destination_country">Destination country<span>*</span></label>
          <input id="destination_country" name="destination_country" required className="form-input" value={formData.destination_country} onChange={handleChange} placeholder="e.g. United Kingdom" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="products">Product references and quantities<span>*</span></label>
        <textarea
          id="products"
          name="products"
          required
          className="form-textarea"
          value={formData.products}
          onChange={handleChange}
          placeholder="e.g. TH-005 × 50 pcs, TH-016 × 30 pcs"
          rows={3}
        />
      </div>

      {/* Optional fields */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="phone_whatsapp">Phone or WhatsApp</label>
          <input id="phone_whatsapp" name="phone_whatsapp" className="form-input" value={formData.phone_whatsapp} onChange={handleChange} placeholder="+1 555 000 0000" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="delivery_date">Desired delivery date</label>
          <input id="delivery_date" name="delivery_date" type="text" className="form-input" value={formData.delivery_date} onChange={handleChange} placeholder="e.g. Q1 2027" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="packaging_requirements">Packaging requirements</label>
        <input id="packaging_requirements" name="packaging_requirements" className="form-input" value={formData.packaging_requirements} onChange={handleChange} placeholder="e.g. private label, blister card, bulk" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Additional notes</label>
        <textarea id="message" name="message" className="form-textarea" value={formData.message} onChange={handleChange} placeholder="Any other requirements, sample requests, or certification needs." rows={3} />
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">Your inquiry could not be sent. Please try again or contact us via WhatsApp.</p>
      )}

      {/* Trust & Verification note */}
      <div style={{
        background: 'var(--th-bg, #f8fafc)',
        border: '1px solid var(--th-border)',
        borderRadius: 'var(--radius)',
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <ShieldCheck size={18} color="var(--th-red, #dc2626)" style={{ flexShrink: 0 }} />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--th-muted)', lineHeight: 1.4 }}>
          <strong>Factory Verified Standards:</strong> DIN ISO 6789 Calibrated &bull; Test Reports (Ref: G20251028 / XQD240529045) &bull; Direct Export Supply &bull; Samples Available (Freight Collect)
        </span>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'sending'}
        style={{ justifyContent: 'center', gap: '10px' }}
      >
        {status === 'sending' ? <><span className="spinner" /> Sending…</> : 'Send Inquiry'}
      </button>

      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--th-muted)', lineHeight: 1.6 }}>
        Your inquiry will be sent to our team by email. We'll also open WhatsApp so you can continue the conversation directly.
      </p>

      <style>{`
        @media (max-width: 600px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
