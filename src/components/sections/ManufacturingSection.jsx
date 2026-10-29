import React from 'react';
import { Link } from 'react-router-dom';

const CAPABILITIES = [
  { label: 'Location', value: 'Zhejiang, China — industrial hardware & power tool cluster' },
  { label: 'Core capabilities', value: 'Precision alloy forging, CNC machining, electromechanical assembly' },
  { label: 'Product focus', value: 'Professional hand tools & upcoming cordless / brushless power tools' },
  { label: 'Customization', value: 'Laser marking, two-shot color molding, blow-mold cases & EVA trays' },
  { label: 'Compliance & QA', value: 'Traceable torque calibration, DIN/ISO standards, CE/RoHS audits' },
];

export default function ManufacturingSection() {
  return (
    <section data-component="manufacturing-section" className="section">
      <div className="container">

        {/* Header row */}
        <div className="mfg-head">
          <div>
            <p className="mfg-eyebrow">Manufacturing &amp; Supply Chain</p>
            <h2 className="mfg-title">A closer look behind TorqHive tools.</h2>
          </div>
          <div>
            <p className="mfg-lead">
              Inside our partner manufacturing facilities in Zhejiang, China — alloy forging, precision CNC
              machining, torque calibration and export packaging, held to one quality standard from raw steel
              to sealed carton.
            </p>
            <Link className="mfg-cta" to="/contact?subject=factory-program">
              Request a factory program <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </div>

        {/* Full-width image band */}
        <div className="mfg-mosaic">
          <div className="mfg-cell mfg-cell--wide">
            <img
              src="/assets/images/factory/machining-detail-v2.jpg"
              alt="Precision CNC machining at a partner facility in Zhejiang"
              loading="lazy"
              style={{ objectPosition: '50% 55%' }}
            />
            <div className="mfg-cap"><span><b>01</b>&nbsp; Precision CNC machining</span><i>Turning &amp; tooling</i></div>
          </div>

          <div className="mfg-cell">
            <img
              src="/assets/images/factory/machine-operation-v2.jpg"
              alt="Technician operating a CNC machining centre"
              loading="lazy"
              style={{ objectPosition: '62% 45%' }}
            />
            <div className="mfg-cap"><span><b>02</b>&nbsp; Machine operation</span><i>Shop floor</i></div>
          </div>

          <div className="mfg-cell">
            <img
              src="/assets/images/factory/socket-component-detail-v2.jpg"
              alt="Chrome socket component inspection"
              loading="lazy"
              style={{ objectPosition: '42% 50%' }}
            />
            <div className="mfg-cap"><span><b>03</b>&nbsp; Component inspection</span><i>Socket / Cr-V</i></div>
          </div>

          <div className="mfg-cell mfg-cell--full">
            <img
              src="/assets/images/factory/packed-goods-v2.jpg"
              alt="Palletised export packaging in the warehouse"
              loading="lazy"
              style={{ objectPosition: '55% 50%' }}
            />
            <div className="mfg-cap"><span><b>04</b>&nbsp; Export packaging</span><i>Palletised</i></div>
          </div>

          <div className="mfg-cell mfg-cell--stat">
            <div>
              <p className="mfg-stat-top">Program snapshot</p>
              <div className="mfg-stat-list">
                <div className="mfg-stat-row"><b>40+</b><span>Catalog SKUs</span></div>
                <div className="mfg-stat-row"><b>1 pc</b><span>MOQ from</span></div>
                <div className="mfg-stat-row"><b>DIN/ISO</b><span>Calibration</span></div>
              </div>
            </div>
            <p className="mfg-stat-foot">Zhejiang, China &middot; hand tools &amp; power tools</p>
          </div>
        </div>

        {/* Full-width capability bar */}
        <div className="mfg-facts">
          {CAPABILITIES.map(item => (
            <div className="mfg-fact" key={item.label}>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .mfg-head {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
          gap: 56px;
          align-items: end;
          margin-bottom: 34px;
        }
        .mfg-eyebrow {
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--th-red);
          font-weight: 700;
          margin: 0 0 12px;
        }
        .mfg-title {
          font-family: var(--font-display);
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0;
          color: var(--th-black);
          max-width: 15ch;
        }
        .mfg-lead {
          margin: 0 0 14px;
          font-size: 16px;
          line-height: 1.65;
          color: var(--th-muted);
          max-width: 56ch;
        }
        .mfg-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--th-black);
          text-decoration: none;
          border-bottom: 1px solid var(--th-black);
          padding-bottom: 3px;
        }
        .mfg-cta span { color: var(--th-red); }
        .mfg-cta:hover { color: var(--th-red); border-bottom-color: var(--th-red); }

        .mfg-mosaic {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: 390px 320px;
          gap: 10px;
        }
        .mfg-cell {
          position: relative;
          overflow: hidden;
          background: var(--th-surface);
          border-radius: var(--th-radius);
        }
        .mfg-cell img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 420ms ease;
        }
        .mfg-cell:hover img { transform: scale(1.03); }
        .mfg-cell--wide { grid-column: span 2; }
        .mfg-cap {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 34px 16px 12px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 12px;
          background: linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0));
          color: #fff;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .mfg-cap b { font-weight: 700; }
        .mfg-cap i {
          font-style: normal;
          color: rgba(255,255,255,0.62);
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mfg-cell--stat {
          background: var(--th-black);
          color: #fff;
          padding: 26px 26px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mfg-stat-top {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FF5C7A;
          font-weight: 700;
        }
        .mfg-stat-list { margin-top: 6px; }
        .mfg-stat-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 0;
          border-top: 1px solid rgba(255,255,255,0.16);
        }
        .mfg-stat-row:first-child { border-top: 0; }
        .mfg-stat-row b {
          font-family: var(--font-display);
          font-size: 26px;
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .mfg-stat-row span {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.62);
          text-align: right;
        }
        .mfg-stat-foot {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.5);
        }

        .mfg-facts {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 26px;
          border-top: 1px solid var(--th-border);
        }
        .mfg-fact {
          padding: 18px 22px 2px 0;
          border-right: 1px solid var(--th-border);
        }
        .mfg-fact:last-child { border-right: 0; padding-right: 0; }
        .mfg-fact h3 {
          margin: 0 0 7px;
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--th-muted);
          font-weight: 700;
        }
        .mfg-fact p {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--th-text);
        }

        @media (max-width: 1100px) {
          .mfg-head { grid-template-columns: 1fr; gap: 20px; align-items: start; }
          .mfg-title { max-width: 22ch; }
          .mfg-mosaic { grid-template-rows: 300px 240px; }
          .mfg-facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .mfg-fact {
            padding: 16px 18px 16px 0;
            border-bottom: 1px solid var(--th-border);
          }
        }

        @media (max-width: 760px) {
          .mfg-title { font-size: 26px; }
          .mfg-mosaic {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 8px;
          }
          .mfg-cell { aspect-ratio: 16 / 9; }
          .mfg-cell--wide,
          .mfg-cell--full { grid-column: span 2; }
          .mfg-cell--stat {
            aspect-ratio: auto;
            grid-column: span 2;
            padding: 20px 18px 18px;
          }
          .mfg-stat-list {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0 14px;
            margin-top: 12px;
          }
          .mfg-stat-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            border-top: 0;
            padding: 0;
          }
          .mfg-stat-row b { font-size: 22px; }
          .mfg-stat-row span { text-align: left; font-size: 9.5px; }
          .mfg-stat-foot { display: none; }
          .mfg-cap {
            font-size: 9.5px;
            letter-spacing: 0.06em;
            padding: 22px 10px 9px;
          }
          .mfg-cap i { display: none; }
          .mfg-facts { grid-template-columns: 1fr; }
          .mfg-fact { border-right: 0; padding-right: 0; }
        }
      `}</style>
    </section>
  );
}
