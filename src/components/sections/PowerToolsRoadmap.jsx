import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Zap, CheckCircle2, ArrowRight, BatteryCharging, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function PowerToolsRoadmap() {
  return (
    <section data-component="power-tools-roadmap" className="section" style={{ background: '#0F1014', color: '#FFFFFF' }}>
      <div className="container">
        <SectionHeading
          eyebrow="Product Architecture &amp; Future"
          title="Precision Hand Tools Today. Smart Power Tools Tomorrow."
          subtitle="TorqHive bridges mechanical precision and electromechanical innovation. We provide an immediate export-ready hand tool assortment while engineering the next generation of brushless power tools."
          align="center"
          theme="dark"
        />

        {/* Dual Pillar Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            marginTop: '48px',
          }}
          className="roadmap-grid"
        >
          {/* Card 1: Hand Tools Division */}
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(200,16,46,0.15)',
                  border: '1px solid rgba(200,16,46,0.4)',
                  color: '#FF4D6D',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <Wrench size={13} /> Immediate Export Ready
              </span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-mono)' }}>
                40 Catalog SKUs
              </span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', color: '#FFFFFF' }}>
              Professional Mechanical Hand Tools
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>
              Forged from premium Chrome-Vanadium (Cr-V) and Chrome-Molybdenum (Cr-Mo) steel alloys. Precision machined for automotive workshops, industrial maintenance, and commercial hardware programs.
            </p>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px', flex: 1 }}>
              {[
                { title: 'Fine-Tooth Ratchets & Drivers', desc: '72T, 90T and telescoping extendable handles with reversible quick-release drive.' },
                { title: 'Calibrated Torque Wrenches', desc: 'Micrometer-click torque wrenches calibrated to international DIN ISO 6789 tolerances.' },
                { title: 'Impact & Chrome Sockets', desc: 'Deep and shallow socket sets, universal joints, and impact-rated accessories.' },
                { title: 'Automotive Specialty Toolkits', desc: 'Dedicated brake, wheel, spark plug, and suspension service tool configurations.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: '#34D399', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>{item.title}</div>
                    <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, marginTop: '2px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer / CTA */}
            <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.5)' }}>MOQ starts at 1 pc • Custom branding</span>
              <Link to="/products" className="btn btn-primary btn-sm" style={{ gap: '6px' }}>
                View Catalog <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2: Upcoming Power Tools Division */}
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(30,41,59,0.3) 0%, rgba(15,23,42,0.2) 100%)',
              border: '1px solid rgba(96,165,250,0.3)',
              borderRadius: '12px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
            }}
          >
            {/* Ambient Corner Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '140px',
                height: '140px',
                background: 'radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Top Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(96,165,250,0.15)',
                  border: '1px solid rgba(96,165,250,0.4)',
                  color: '#93C5FD',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <Zap size={13} /> Future R&amp;D Roadmap
              </span>
              <span style={{ fontSize: '13px', color: '#60A5FA', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                Coming Soon
              </span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', color: '#FFFFFF' }}>
              Next-Gen Cordless &amp; Power Tools
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' }}>
              Engineered with high-efficiency brushless motors, smart torque limiters, and high-capacity lithium-ion technology to deliver superior power-to-weight performance for heavy-duty tasks.
            </p>

            {/* Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px', flex: 1 }}>
              {[
                { title: 'Brushless Cordless Impact Wrenches', desc: 'Heavy breakaway torque, multi-stage speed profiles, and automatic bolt-loosening stop mode.' },
                { title: 'Compact Electric Cordless Ratchets', desc: 'Ultra-slim low-profile head design engineered for tight engine bays and vehicle chassis work.' },
                { title: 'Smart Digital Torque Fasteners', desc: 'Electronic angle and torque setting with real-time digital display for precision assembly.' },
                { title: 'Modular Lithium Battery Ecosystem', desc: 'Unified 18V/20V Li-ion battery platform with intelligent BMS thermal and overload protection.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Cpu size={18} style={{ color: '#60A5FA', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>{item.title}</div>
                    <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, marginTop: '2px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer / CTA */}
            <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.5)' }}>Early OEM/ODM specification inquiries</span>
              <Link to="/contact?subject=power-tools" className="btn btn-outline" style={{ gap: '6px', borderColor: 'rgba(96,165,250,0.4)', color: '#FFFFFF' }}>
                Inquire Power Tools <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner: OEM/ODM Customization for Both Product Lines */}
        <div
          style={{
            marginTop: '36px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px',
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sparkles size={20} style={{ color: 'var(--th-red)' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>
                Full-Service OEM / ODM Manufacturing Available
              </div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)' }}>
                Laser engraving, custom color housings, custom EVA foam trays, and tailored blow-mold packaging.
              </div>
            </div>
          </div>
          <Link to="/contact" className="btn btn-outline btn-sm" style={{ color: '#FFFFFF' }}>
            Request Custom Program
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .roadmap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
