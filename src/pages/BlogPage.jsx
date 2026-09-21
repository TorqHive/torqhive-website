import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main data-component="blog-page">
      {/* Header */}
      <div style={{ background: 'var(--th-black)', padding: '64px 0 56px' }}>
        <div className="container">
          <p className="text-eyebrow" style={{ marginBottom: '10px' }}>
            Industry & Sourcing Knowledge
          </p>
          <h1 className="text-h1" style={{ color: '#FFFFFF', marginBottom: '16px' }}>
            TorqHive Technical Insights & Blog
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', lineHeight: 1.7, fontSize: 'var(--text-base)' }}>
            Authoritative buying guides, metallurgical analyses, and OEM export best practices written for hardware distributors, importers, and tool brand managers.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px', background: 'var(--th-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              {/* Category Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '999px',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                      border: '1px solid',
                      borderColor: selectedCategory === cat ? 'var(--th-red)' : 'var(--th-border)',
                      background: selectedCategory === cat ? 'var(--th-red)' : '#FFFFFF',
                      color: selectedCategory === cat ? '#FFFFFF' : 'var(--th-text)',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div style={{ position: 'relative', minWidth: '280px' }}>
                <Search
                  size={16}
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--th-muted)' }}
                />
                <input
                  type="text"
                  placeholder="Search articles, topics or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 14px 8px 36px',
                    borderRadius: 'var(--th-radius)',
                    border: '1px solid var(--th-border)',
                    fontSize: 'var(--text-sm)',
                    outline: 'none',
                    background: '#FFFFFF',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--th-muted)' }}>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: '8px' }}>No articles match your search.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--th-red)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '32px',
              }}
            >
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#FFFFFF',
                    borderRadius: 'var(--th-radius)',
                    border: '1px solid var(--th-border)',
                    overflow: 'hidden',
                    transition: 'transform 200ms ease, box-shadow 200ms ease',
                  }}
                  className="hover:shadow-md"
                >
                  <Link to={`/blog/${post.slug}`} style={{ display: 'block', overflow: 'hidden', height: '220px', background: 'var(--th-black)' }}>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '16px',
                        transition: 'transform 300ms ease',
                      }}
                      className="hover:scale-105"
                      loading="lazy"
                    />
                  </Link>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: 'var(--text-xs)',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          color: 'var(--th-red)',
                          background: 'rgba(200, 16, 46, 0.08)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                        }}
                      >
                        {post.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'var(--text-xs)', color: 'var(--th-muted)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={13} />
                          {post.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, lineHeight: 1.4, marginBottom: '12px' }}>
                      <Link
                        to={`/blog/${post.slug}`}
                        style={{ color: 'var(--th-text)', textDecoration: 'none' }}
                        className="hover:text-red-700"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                            fontSize: '11px',
                            color: 'var(--th-muted)',
                            background: 'var(--th-surface)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        color: 'var(--th-red)',
                        textDecoration: 'none',
                        marginTop: 'auto',
                      }}
                    >
                      Read full analysis <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sourcing Banner */}
      <section style={{ background: 'var(--th-black)', padding: '56px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '12px' }}>
            Looking for Custom Tool Engineering or OEM Quotations?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '580px', margin: '0 auto 28px', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
            Share your required torque specifications, alloy grades, or packaging designs with TorqHive specialists for comprehensive FOB/CIF proposals.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'var(--th-red)',
                color: '#FFFFFF',
                borderRadius: 'var(--th-radius)',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
                textDecoration: 'none',
              }}
            >
              Request a Commercial Quote <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/8615669586372?text=Hi%20TorqHive%2C%20I%20read%20your%20technical%20blog%20and%20would%20like%20to%20discuss%20an%20OEM%20tool%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: '#25D366',
                color: '#FFFFFF',
                borderRadius: 'var(--th-radius)',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
                textDecoration: 'none',
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
