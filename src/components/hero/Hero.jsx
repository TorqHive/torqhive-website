import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section data-component="hero-section" className="hero">
      {/* Full-bleed industrial visual: subject sits in the right 60%, left 40% stays clean for copy */}
      <div className="hero__media" aria-hidden="true">
        <img
          src="/assets/images/home/hero-carbon.webp"
          alt=""
          width="2560"
          height="1440"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            TorqHive <span>//</span> Industrial Tools &amp; Solutions
          </p>

          <h1 className="hero__title">
            Precision hand tools.<br />
            <span>Next-gen power solutions.</span>
          </h1>

          <p className="hero__lead">
            TorqHive engineers and exports professional mechanical hand tools alongside an expanding
            brushless power tool programme — built for distributors, trade buyers and private-label
            brands with flexible MOQ and factory-direct quality testing.
          </p>

          <div className="hero__stats">
            <div className="hero__stat"><b>40+</b><span>Catalog SKUs</span></div>
            <div className="hero__stat"><b>1 pc</b><span>MOQ from</span></div>
            <div className="hero__stat"><b>DIN/ISO</b><span>Calibration</span></div>
          </div>

          <div className="hero__actions">
            <Link to="/products" className="btn btn-primary">
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Request a Quote
            </Link>
          </div>

          <ul className="hero__trust">
            <li>ISO &amp; ASME standards</li>
            <li>48h sample dispatch</li>
            <li>100% pre-shipment QC</li>
          </ul>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          background: #0A0D12;
          overflow: hidden;
          isolation: isolate;
        }
        .hero__media {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 72% 45%;
        }
        .hero__scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(90deg, #0E1117 0%, rgba(14,17,23,0.94) 30%, rgba(14,17,23,0.55) 52%, rgba(14,17,23,0.05) 74%, rgba(14,17,23,0) 88%),
            linear-gradient(180deg, rgba(10,13,18,0.55) 0%, rgba(10,13,18,0) 28%),
            linear-gradient(0deg, rgba(14,17,23,0.85) 0%, rgba(14,17,23,0) 26%);
        }
        .hero__inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          min-height: 700px;
          padding-top: 96px;
          padding-bottom: 72px;
        }
        .hero__copy { width: 100%; max-width: 560px; }

        .hero__eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #FF7A8A;
          margin-bottom: 18px;
        }
        .hero__eyebrow span { color: rgba(255,255,255,0.3); }

        .hero__title {
          font-family: var(--font-display);
          font-size: 56px;
          line-height: 1.04;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 22px;
        }
        .hero__title span { color: #FF5C7A; }

        .hero__lead {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(232,234,237,0.72);
          max-width: 500px;
          margin-bottom: 28px;
        }

        .hero__stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.12);
          margin-bottom: 30px;
          max-width: 500px;
        }
        .hero__stat {
          background: rgba(14,17,23,0.72);
          padding: 14px 16px;
          backdrop-filter: blur(6px);
        }
        .hero__stat b {
          display: block;
          font-family: var(--font-display);
          font-size: 20px;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .hero__stat span {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(232,234,237,0.55);
        }

        .hero__actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 22px; }

        .hero__trust {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 22px;
          list-style: none;
          font-size: 12px;
          color: rgba(232,234,237,0.5);
        }
        .hero__trust li { display: inline-flex; align-items: center; gap: 7px; }
        .hero__trust li::before { content: ""; width: 5px; height: 5px; background: var(--th-red); }

        @media (max-width: 1100px) {
          .hero__title { font-size: 44px; }
          .hero__inner { min-height: 620px; }
        }
        @media (max-width: 760px) {
          .hero__media img { object-position: 68% 40%; }
          .hero__scrim {
            background:
              linear-gradient(180deg, rgba(14,17,23,0.86) 0%, rgba(14,17,23,0.72) 45%, rgba(14,17,23,0.94) 100%);
          }
          .hero__inner { min-height: 0; padding-top: 96px; padding-bottom: 56px; }
          .hero__title { font-size: 32px; }
          .hero__lead { font-size: 15px; }
          .hero__stats { margin-bottom: 24px; }
          .hero__stat { padding: 12px; }
          .hero__stat b { font-size: 17px; }
        }
        @media (max-width: 420px) {
          .hero__stats { grid-template-columns: 1fr 1fr; }
          .hero__stat:last-child { grid-column: span 2; }
        }
      `}</style>
    </section>
  );
}

