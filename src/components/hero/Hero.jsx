import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Wrench, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section data-component="hero-section" style={{ background: 'var(--th-black)', overflow: 'hidden' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          minHeight: '620px',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        {/* Left — Brand Logo, Title, Copy & Badges */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 32px 64px 0',
          }}
          className="hero-left"
        >
          {/* Brand Logo & Big English Typography */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(229,23,63,0.3)',
                boxShadow: '0 8px 24px rgba(200,16,46,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: '6px',
              }}
            >
              <img
                src="/assets/images/logo/torqhive-icon.svg"
                alt="TorqHive Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px', lineHeight: 1 }}>
                <span
                  style={{
                    fontFamily: "'Arial Black', Impact, sans-serif",
                    fontSize: '36px',
                    fontWeight: 900,
                    letterSpacing: '-0.5px',
                    color: '#FFFFFF',
                  }}
                >
                  TORQ
                </span>
                <span
                  style={{
                    fontFamily: "'Arial Black', Impact, sans-serif",
                    fontSize: '36px',
                    fontWeight: 900,
                    letterSpacing: '-0.5px',
                    color: 'var(--th-red)',
                  }}
                >
                  HIVE
                </span>
              </div>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2.5px',
                  color: 'rgba(255,255,255,0.55)',
                  marginTop: '5px',
                  textTransform: 'uppercase',
                }}
              >
                Industrial Tools &amp; Solutions
              </p>
            </div>
          </div>

          {/* Scope Badge: Hand Tools & Upcoming Power Tools */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '22px',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--th-red)',
                boxShadow: '0 0 10px var(--th-red)',
              }}
            />
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.02em' }}>
              Pro Hand Tools Catalog <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 6px' }}>•</span> Expanding to Cordless Power Tools
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1
            className="text-hero"
            style={{
              color: '#FFFFFF',
              marginBottom: '20px',
              fontSize: '44px',
              lineHeight: '1.18',
              letterSpacing: '-0.02em',
            }}
          >
            Precision Hand Tools.<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #F3F4F6 50%, var(--th-red) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Next-Gen Power Solutions.
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '16px',
              marginBottom: '28px',
              lineHeight: '1.75',
              maxWidth: '520px',
            }}
          >
            TorqHive engineers and exports professional mechanical hand tools alongside an expanding frontier of high-torque brushless power tools. Built for international distributors, trade buyers, and custom OEM/ODM brands with flexible MOQ and rigorous factory-direct quality testing.
          </p>

          {/* Quick Pillar Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '32px',
              maxWidth: '520px',
            }}
            className="hero-pillars"
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '12px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF5C7A', fontWeight: 800, fontSize: '14px' }}>
                <Wrench size={14} /> 40+ Models
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', marginTop: '4px' }}>
                Pro Hand Tools
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '12px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#60A5FA', fontWeight: 800, fontSize: '14px' }}>
                <Zap size={14} /> Power R&amp;D
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', marginTop: '4px' }}>
                Cordless &amp; Electric
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '12px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34D399', fontWeight: 800, fontSize: '14px' }}>
                <ShieldCheck size={14} /> Low MOQ
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', marginTop: '4px' }}>
                OEM &amp; Custom Label
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary" style={{ gap: '6px', padding: '12px 24px' }}>
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn btn-outline" style={{ padding: '12px 22px' }}>
              Company &amp; Roadmap
            </Link>
          </div>
        </div>

        {/* Right — Multi-Product Layered Sourcing Showcase */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 10px',
            minHeight: '580px',
            overflow: 'visible',
          }}
          className="hero-right"
        >
          {/* Ambient Lighting & Studio Spotlight */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '480px',
              height: '480px',
              background: 'radial-gradient(circle, rgba(200,16,46,0.22) 0%, rgba(200,16,46,0.06) 50%, transparent 72%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <img
            src="/assets/images/home/torqhive-hero-premium.webp"
            alt="TorqHive — One-Stop Professional Tool Sourcing Showcase"
            fetchPriority="high"
            decoding="async"
            width="864"
            height="768"
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '520px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 24px 50px rgba(0,0,0,0.85))',
            }}
          />
        </div>
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 900px) {
          .hero-left { padding: 48px 0 32px 0 !important; }
          .hero-right { display: none !important; }
          [data-component="hero-section"] .container {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .hero-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
