import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/buying-guide', label: 'Buying Guide' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-component="site-header"
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--th-black)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'border-color 200ms ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '32px' }}>
        {/* Logo */}
        <Link to="/" aria-label="TorqHive Home" style={{ flexShrink: 0 }}>
          <img
            src="/assets/images/logo/torqhive-wordmark-light.svg"
            alt="TorqHive"
            width={130}
            height={28}
            style={{ height: '28px', width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '4px', flex: 1 }} aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                padding: '6px 12px',
                fontSize: 'var(--text-sm)',
                fontWeight: isActive ? '700' : '500',
                color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                borderRadius: 'var(--radius-sm)',
                transition: 'color 150ms ease, background 150ms ease',
                textDecoration: 'none',
              })}
              onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              className="hidden md:block"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="btn btn-primary btn-sm hidden md:inline-flex"
          style={{ flexShrink: 0 }}
        >
          Request a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: '#FFFFFF', marginLeft: 'auto' }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--th-black)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '12px 0 20px',
          }}
        >
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  padding: '10px 12px',
                  fontSize: 'var(--text-base)',
                  fontWeight: isActive ? '700' : '400',
                  color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                })}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary"
              style={{ marginTop: '8px', justifyContent: 'center' }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
