import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
      // Open WhatsApp with form summary as secondary action
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaText())}`;
      setTimeout(() => window.open(waUrl, '_blank', 'noopener,noreferrer'), 600);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        data-component="inquiry-form-success"
        style={{
          padding: compact ? '24px' : '40px',
          background: 'var(--th-surface)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--th-border)',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>Your inquiry has been received.</h3>
        <p style={{ color: 'var(--th-muted)', fontSize: 'var(--text-sm)', marginBottom: '20px' }}>
          We'll review your requirements and follow up shortly. You can also continue the conversation directly on WhatsApp.
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaText())}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ gap: '8px', justifyContent: 'center' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Continue on WhatsApp
        </a>
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
