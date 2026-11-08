import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Palette, Package, FileCheck2 } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: PenTool,
    title: 'Laser etching',
    body: 'Buyer logo and part markings etched on sockets, wrench beams and case lids, with artwork approval before production.',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Two-shot grips',
    body: 'Custom grip colourways and dual-injection handles matched to your catalogue palette or retail programme.',
  },
  {
    num: '03',
    icon: Package,
    title: 'Packaging engineering',
    body: 'Blow-mould cases, EVA trays, blister cards and retail cartons built around your shelf and freight requirements.',
  },
  {
    num: '04',
    icon: FileCheck2,
    title: 'Traceable documentation',
    body: 'Torque calibration records, DIN/ISO reference data and CE/RoHS support packaged with each production lot.',
  },
];

export default function OemSection() {
  return (
    <section data-component="oem-section" className="section oem">
      <div className="container">
        <div className="oem__head">
          <div>
            <p className="text-eyebrow">Private Label &amp; Custom Engineering</p>
            <h2 className="text-h2 oem__title">Your brand, built into the tool.</h2>
          </div>
          <div className="oem__head-right">
            <p className="oem__lead">
              Four levers cover most private-label programmes: marking, grip colour, packaging and
              documentation. Send a reference and target market — we will confirm tooling, MOQ and lead time.
            </p>
            <Link to="/contact?subject=oem-brief" className="oem__cta">
              Start an OEM brief <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="oem__grid">
          {STEPS.map(step => {
            const Icon = step.icon;
            return (
              <div className="oem__step" key={step.num}>
                <div className="oem__step-top">
                  <span className="oem__num">{step.num}</span>
                  <span className="oem__icon"><Icon size={18} strokeWidth={1.6} /></span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .oem {
          background: var(--panel);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .oem__head {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          gap: 56px;
          align-items: end;
          margin-bottom: 40px;
        }
        .oem__title { margin-top: 10px; color: var(--fg); max-width: 16ch; }
        .oem__lead {
          font-size: 15px;
          line-height: 1.68;
          color: var(--muted);
          max-width: 50ch;
          margin-bottom: 14px;
        }
        .oem__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--fg);
          border-bottom: 1px solid var(--border-strong);
          padding-bottom: 3px;
          transition: color 160ms ease, border-color 160ms ease;
        }
        .oem__cta:hover { color: var(--th-red); border-color: var(--th-red); }

        .oem__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0 32px;
        }
        .oem__step {
          padding: 20px 0 4px;
          border-top: 1px solid var(--border);
          transition: border-color 200ms var(--ease);
        }
        .oem__step:hover { border-top-color: var(--th-red); }
        .oem__step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 26px;
        }
        .oem__num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--muted);
        }
        .oem__icon { color: var(--th-red); display: inline-flex; }
        .oem__step h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--fg);
          margin-bottom: 8px;
        }
        .oem__step p {
          font-size: 13px;
          line-height: 1.6;
          color: var(--muted);
        }

        @media (max-width: 1100px) {
          .oem__head { grid-template-columns: 1fr; gap: 18px; align-items: start; }
          .oem__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 24px; }
        }
        @media (max-width: 620px) {
          .oem__grid { grid-template-columns: 1fr; }
          .oem__step-top { margin-bottom: 14px; }
        }
      `}</style>
    </section>
  );
}
