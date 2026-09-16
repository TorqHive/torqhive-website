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
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--th-red)', fontWeight: 800, fontSize: '14px' }}>
                <Wrench size={14} /> 40+ Models
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '4px' }}>
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
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '4px' }}>
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
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '4px' }}>
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
              width: '460px',
              height: '460px',
              background: 'radial-gradient(circle, rgba(200,16,46,0.22) 0%, rgba(200,16,46,0.06) 50%, transparent 72%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Stage Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Top Floating Badge: One-Stop Sourcing Partner */}
            <div
              style={{
                position: 'absolute',
                top: '-18px',
                right: '0px',
                zIndex: 10,
                background: 'rgba(15,17,21,0.95)',
                border: '1px solid rgba(229,23,63,0.45)',
                borderRadius: '100px',
                padding: '7px 16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.6), 0 0 16px rgba(200,16,46,0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ color: 'var(--th-red)', fontSize: '14px', fontWeight: 900 }}>★</span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                One-Stop Tool Sourcing <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span> 40+ Pro SKUs
              </span>
            </div>

            {/* BASE CARD (Centerpiece): Torque Wrench Master Set (TH-005) */}
            <div
              style={{
                position: 'relative',
                width: '360px',
                background: 'linear-gradient(145deg, #1C1F26 0%, #0D0F13 100%)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 28px 64px rgba(0,0,0,0.85), 0 0 35px rgba(200,16,46,0.18)',
                zIndex: 2,
                transform: 'translateY(12px)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '0 4px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF4D6D', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Torque Systems
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)' }}>
                  TH-005
                </span>
              </div>
              <div
                style={{
                  background: '#090A0D',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '200px',
                }}
              >
                <img
                  src="/assets/images/home/torqhive-hero-premium.png"
                  alt="TorqHive 15-Piece Torque Wrench & Spark Plug Socket Set"
                  style={{
                    maxHeight: '190px',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.8))',
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', padding: '0 4px' }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#FFFFFF' }}>
                  15-Pc Calibrated Torque Master Set
                </span>
                <span style={{ fontSize: '11px', color: '#CBD5E1', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                  EVA Tray
                </span>
              </div>
            </div>

            {/* OVERLAPPING CARD 1 (Top Left): Chrome Flex-Head Ratchets (TH-016) */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-24px',
                width: '190px',
                background: 'rgba(18, 21, 28, 0.94)',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: '14px',
                padding: '10px 12px',
                boxShadow: '0 20px 45px rgba(0,0,0,0.8)',
                transform: 'rotate(-6deg)',
                zIndex: 4,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--th-red)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Ratchets &amp; Drivers
                </span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
                  TH-016
                </span>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '115px',
                }}
              >
                <img
                  src="/assets/images/products/TH-016/hero-web.webp"
                  alt="3-Piece Flex-Head Ratchet Set"
                  style={{
                    maxHeight: '105px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.7))',
                  }}
                />
              </div>
              <p style={{ fontSize: '11.5px', fontWeight: 700, color: '#FFFFFF', marginTop: '6px', lineHeight: 1.3 }}>
                3-Pc Flex-Head Ratchets
              </p>
            </div>

            {/* OVERLAPPING CARD 2 (Bottom Right): Universal Impact Socket Set (TH-006) */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '-24px',
                width: '215px',
                background: 'rgba(17, 19, 26, 0.96)',
                border: '1px solid rgba(229,23,63,0.4)',
                borderRadius: '14px',
                padding: '12px',
                boxShadow: '0 24px 55px rgba(0,0,0,0.85), 0 0 24px rgba(200,16,46,0.3)',
                transform: 'rotate(5deg)',
                zIndex: 5,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Impact Sockets
                </span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
                  TH-006
                </span>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '118px',
                }}
              >
                <img
                  src="/assets/images/products/TH-006/hero-web.webp"
                  alt="15-Piece Universal Impact Socket Set"
                  style={{
                    maxHeight: '110px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.7))',
                  }}
                />
              </div>
              <p style={{ fontSize: '11.5px', fontWeight: 700, color: '#FFFFFF', marginTop: '6px', lineHeight: 1.3 }}>
                15-Pc Cr-Mo Impact Set
              </p>
            </div>

            {/* OVERLAPPING CARD 3 (Bottom Left): Combination Spanner Wrenches (TH-003) */}
            <div
              style={{
                position: 'absolute',
                bottom: '0px',
                left: '-15px',
                width: '185px',
                background: 'rgba(15, 18, 24, 0.94)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: '12px',
                padding: '9px 11px',
                boxShadow: '0 18px 40px rgba(0,0,0,0.75)',
                transform: 'rotate(-3deg)',
                zIndex: 3,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Wrenches
                </span>
                <span style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
                  TH-003
                </span>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '6px',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '88px',
                }}
              >
                <img
                  src="/assets/images/products/TH-003/hero-web.webp"
                  alt="Extra-Long Wrench Set"
                  style={{
                    maxHeight: '80px',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p style={{ fontSize: '10.5px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px', lineHeight: 1.2 }}>
                6-Pc Extra-Long Wrench Set
              </p>
            </div>

            {/* Bottom Multi-Category Pill Strip */}
            <div
              style={{
                position: 'absolute',
                bottom: '-32px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 8,
                background: 'rgba(10,12,16,0.96)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '100px',
                padding: '6px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: '0 12px 28px rgba(0,0,0,0.7)',
              }}
            >
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--th-red)' }}>Assortment:</span>
              <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>
                Ratchets <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span> Sockets <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span> Torque <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span> Wrenches <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span> Specialty Sets
              </span>
            </div>
          </div>
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
