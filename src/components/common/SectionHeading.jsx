import React from 'react';

/**
 * SectionHeading — reusable section title with optional eyebrow and subtitle
 * @param {Object} props
 * @param {string} props.eyebrow
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {'left'|'center'} [props.align]
 * @param {'dark'|'light'} [props.theme]
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', theme = 'light' }) {
  const isDark = theme === 'dark';
  return (
    <div
      data-component="section-heading"
      style={{ textAlign: align, marginBottom: '40px' }}
    >
      {eyebrow && (
        <p className="text-eyebrow" style={{ marginBottom: '10px', color: isDark ? '#FF5C7A' : undefined }}>
          {eyebrow}
        </p>
      )}
      <h2
        className="text-h2"
        style={{ color: isDark ? '#FFFFFF' : 'var(--th-black)', marginBottom: subtitle ? '12px' : 0 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 'var(--text-lg)',
          color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--th-muted)',
          maxWidth: align === 'center' ? '560px' : 'none',
          margin: align === 'center' ? '0 auto' : 0,
          lineHeight: 1.6,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
