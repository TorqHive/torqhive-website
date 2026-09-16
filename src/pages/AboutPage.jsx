import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Zap, 
  ShieldCheck, 
  Settings, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Factory, 
  Globe2, 
  Compass, 
  Award, 
  ArrowRight,
  TrendingUp,
  FileCheck2
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

export default function AboutPage() {
  return (
    <main data-component="about-page">
      {/* Hero Banner */}
      <div style={{ background: 'var(--th-black)', padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Brand Emblem & Tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '100px', padding: '6px 16px', marginBottom: '20px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--th-red)' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              About TorqHive
            </span>
          </div>

          <h1
            className="text-h1"
            style={{
              color: '#FFFFFF',
              maxWidth: '840px',
              fontSize: '44px',
              lineHeight: 1.2,
              marginBottom: '24px',
              fontWeight: 800,
            }}
          >
            Engineering Precision Mechanical Tools &amp; Next-Generation Power Solutions.
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '18px',
              lineHeight: 1.7,
              maxWidth: '720px',
            }}
          >
            Headquartered in the manufacturing heartland of Zhejiang, China, TorqHive unites high-precision mechanical hand tools with an aggressive R&amp;D roadmap into cordless brushless power tools — delivering industrial-grade reliability to importers, distributors, and brands worldwide.
          </p>
        </div>

        {/* Ambient decorative line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--th-red) 0%, rgba(200,16,46,0.3) 60%, transparent 100%)' }} />
      </div>

      {/* Brand Story & The Origin of "TorqHive" */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '64px', alignItems: 'center' }} className="about-grid">
            <div>
              <SectionHeading
                eyebrow="Our Identity &amp; Origin"
                title="The meaning behind TorqHive."
              />
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--th-muted)', marginBottom: '20px' }}>
                The name <strong style={{ color: 'var(--th-text)' }}>TorqHive</strong> encapsulates our core mission: <span style={{ color: 'var(--th-red)', fontWeight: 700 }}>"Torq"</span> represents torque, mechanical leverage, and rotational kinetic energy — the fundamental physical force that powers every tightening, loosening, and fastening action.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--th-muted)', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--th-text)' }}>"Hive"</strong> represents our collaborative manufacturing ecosystem in Zhejiang, China — an interconnected cluster of specialized precision forging workshops, CNC machining centers, and electromechanical testing laboratories operating with honeycomb-like structural resilience and collective efficiency.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--th-muted)', marginBottom: '28px' }}>
                Today, TorqHive is advancing from our solid foundation in professional mechanical hand tools into the expanding domain of intelligent, high-torque cordless power tools, offering global procurement partners a cohesive single-source tool platform.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn btn-primary">
                  Explore Current Catalog
                </Link>
                <Link to="/contact" className="btn btn-outline-dark">
                  Inquire OEM / ODM Program
                </Link>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
                <img
                  src="/assets/images/factory/partner-workshop.jpg"
                  alt="TorqHive Partner Workshop Facility"
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <img
                  src="/assets/images/factory/machining-detail.jpg"
                  alt="Precision CNC Machining"
                  style={{ borderRadius: 'var(--radius)', height: '160px', objectFit: 'cover', width: '100%' }}
                />
                <img
                  src="/assets/images/factory/machine-operation.jpg"
                  alt="Assembly & Inspection Floor"
                  style={{ borderRadius: 'var(--radius)', height: '160px', objectFit: 'cover', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Product Ecosystem: Hand Tools & Power Tools */}
      <section className="section section--surface" style={{ borderTop: '1px solid var(--th-border)', borderBottom: '1px solid var(--th-border)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Dual Product Strategy"
            title="Two Pillars. One Unified Commitment to Quality."
            subtitle="Explore how our established mechanical hand tool lines and upcoming cordless power tool developments combine to form a comprehensive industrial tooling catalog."
            align="center"
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '48px' }} className="ecosystem-grid">
            {/* Hand Tools Division */}
            <div style={{ background: 'var(--th-white)', padding: '40px', borderRadius: '12px', border: '1px solid var(--th-border)', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(200,16,46,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--th-red)' }}>
                  <Wrench size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--th-red)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Available Now • Export Ready
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--th-text)' }}>
                    Professional Hand Tools
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--th-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                Forged from high-tensile 50BV30 Chrome-Vanadium and 42CrMo Chrome-Molybdenum alloys. Engineered for heavy industrial maintenance, professional automotive garages, and commercial distribution.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {[
                  { title: 'Fine-Tooth Ratchets & Drive Tools', text: '72T, 90T, and telescoping handles designed for high torque transmission in restricted spaces.' },
                  { title: 'Calibrated Torque Wrenches', text: 'Micrometer click and preset torque mechanisms adhering to DIN ISO 6789 precision thresholds.' },
                  { title: 'Impact & Chrome Socket Sets', text: 'Deep, shallow, thin-wall, and universal swivel sockets with clear high-visibility size markings.' },
                  { title: 'Automotive Specialty Toolkits', text: 'Specialized kits for brake calipers, spark plug removal, hub servicing, and engine diagnostics.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '10px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--th-red)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--th-text)' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', color: 'var(--th-muted)', lineHeight: 1.5 }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '16px', background: 'var(--th-surface)', borderRadius: '8px', fontSize: '13px', color: 'var(--th-muted)' }}>
                <strong>Program Terms:</strong> Catalog items available with 1-piece MOQ for evaluation. Custom laser logo &amp; packaging from low volume.
              </div>
            </div>

            {/* Power Tools Division (R&D & Upcoming) */}
            <div style={{ background: 'var(--th-white)', padding: '40px', borderRadius: '12px', border: '1px solid #BFDBFE', boxShadow: '0 4px 16px rgba(59,130,246,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                  <Zap size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Active R&amp;D • Coming Soon
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--th-text)' }}>
                    Next-Gen Cordless Power Tools
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--th-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                Harnessing state-of-the-art brushless motor architecture, electronic torque regulation, and high-density lithium-ion battery packs to deliver relentless power with compact ergonomics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {[
                  { title: 'High-Torque Brushless Impact Wrenches', text: 'Up to 1200+ N·m breakaway torque with variable 3-speed selector and automatic reverse nut-stop.' },
                  { title: 'Ultra-Compact Electric Cordless Ratchets', text: 'Engineered with low-profile heads to easily access tight under-hood automotive spaces.' },
                  { title: 'Intelligent Digital Torque Screwdrivers', text: 'Real-time torque sensing and digital display for precision assembly in electronics and mechanics.' },
                  { title: 'Modular 20V Li-Ion Battery Ecosystem', text: 'Smart BMS with thermal dissipation, overcharge protection, and universal tool interchangeability.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '10px' }}>
                    <Cpu size={18} style={{ color: '#2563EB', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--th-text)' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', color: 'var(--th-muted)', lineHeight: 1.5 }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '16px', background: '#EFF6FF', borderRadius: '8px', fontSize: '13px', color: '#1E40AF' }}>
                <strong>OEM Partnerships:</strong> Early-stage OEM/ODM design customization, bespoke battery voltage platforms, and regional certification support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM / ODM & Manufacturing Capabilities */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Turnkey Manufacturing"
            title="Custom OEM &amp; ODM Capabilities."
            subtitle="We help international distributors, retail chains, and emerging hardware brands build proprietary tool collections without excessive capital barriers."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '36px' }} className="capabilities-grid">
            {[
              {
                icon: <Settings size={22} />,
                title: 'Custom Branding',
                desc: 'Laser etching on steel bodies, two-shot handle color molding, and screen-printed logos.',
              },
              {
                icon: <Layers size={22} />,
                title: 'Case & Tray Engineering',
                desc: 'Bespoke heavy-duty blow-mold cases, custom dual-color EVA foam inserts, and metal tool chests.',
              },
              {
                icon: <TrendingUp size={22} />,
                title: 'Flexible Order Volumes',
                desc: 'Trial orders from 1 piece for catalog models; sensible MOQ thresholds for custom private-label branding.',
              },
              {
                icon: <FileCheck2 size={22} />,
                title: 'Export Compliance',
                desc: 'CE, RoHS, DIN ISO compliance, torque calibration reports, and complete customs documentation.',
              },
            ].map(c => (
              <div key={c.title} style={{ padding: '28px 24px', background: 'var(--th-white)', border: '1px solid var(--th-border)', borderRadius: 'var(--radius)' }}>
                <div style={{ color: 'var(--th-red)', marginBottom: '16px' }}>{c.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{c.title}</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--th-muted)', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Operational Principles */}
      <section id="quality" className="section section--surface" style={{ borderTop: '1px solid var(--th-border)' }}>
        <div className="container">
          <SectionHeading eyebrow="Operating Principles" title="What guides our business." align="center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '36px' }} className="values-grid">
            {[
              {
                title: 'Product-First Engineering',
                body: 'We prioritize metallurgical durability, dimensional accuracy, and ergonomic comfort before quantity or price negotiations.',
              },
              {
                title: 'Model-Specific Transparency',
                body: 'Quality inspection and torque testing data are documented per model and batch. We verify test certificates prior to production.',
              },
              {
                title: 'End-to-End Supply Coordination',
                body: 'We oversee the full pipeline from raw material forging and CNC machining to final packaging and international freight forwarding.',
              },
            ].map(v => (
              <div key={v.title} style={{ padding: '32px', background: 'var(--th-white)', borderRadius: 'var(--radius)', border: '1px solid var(--th-border)' }}>
                <div style={{ width: '4px', height: '32px', background: 'var(--th-red)', borderRadius: '2px', marginBottom: '16px' }} />
                <h3 style={{ fontWeight: 700, fontSize: '17px', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--th-muted)', lineHeight: 1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Contact / CTA */}
      <section style={{ background: 'var(--th-black)', padding: '64px 0', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: '#FFFFFF' }}>
            Ready to expand your tool assortment?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
            Whether you require immediate delivery of our 40-model pro hand tool range or wish to discuss early OEM specifications for our upcoming power tool line, our export team is ready to assist.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              Request a Custom Quote
            </Link>
            <a
              href="https://wa.me/8615669586372?text=Hi%20TorqHive%2C%20I%27d%20like%20to%20inquire%20about%20your%20hand%20and%20power%20tool%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '12px 24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              WhatsApp Us Direct
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .ecosystem-grid { grid-template-columns: 1fr !important; }
          .capabilities-grid { grid-template-columns: 1fr 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .capabilities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
