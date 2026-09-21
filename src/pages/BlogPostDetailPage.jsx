import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User, MessageSquare, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { products } from '../data/products';
import useBlogMetadata from '../hooks/useBlogMetadata';

const WA_NUMBER = '8615669586372';

export default function BlogPostDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  useBlogMetadata({
    title: post ? (post.seoTitle || `${post.title} | TorqHive`) : 'Article Not Found | TorqHive',
    description: post ? (post.metaDescription || post.excerpt) : 'Find practical tool guides on the TorqHive blog.',
    path: `/blog/${slug}`, image: post?.coverImage, type: post ? 'article' : 'website', missing: !post,
  });

  if (!post) {
    return (
      <main style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="text-h2" style={{ marginBottom: '16px' }}>Article Not Found</h1>
          <p style={{ color: 'var(--th-muted)', marginBottom: '24px' }}>
            The requested article could not be located.
          </p>
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              background: 'var(--th-red)',
              color: '#FFFFFF',
              borderRadius: 'var(--th-radius)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Find related products
  const matchedProducts = products.filter((item) =>
    (post.relatedProducts || []).includes(item.id)
  );

  const waInquiryUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi TorqHive, I just read "${post.title}" on your blog and would like to inquire about specifications and quotations.`
  )}`;

  return (
    <main data-component="blog-detail-page">
      {/* Header & Breadcrumb */}
      <div style={{ background: 'var(--th-black)', padding: '56px 0 48px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>{post.category}</span>
          </div>

          <div style={{ display: 'inline-block', marginBottom: '16px' }}>
            <span
              style={{
                fontSize: 'var(--text-xs)',
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: 'var(--th-red)',
                background: 'rgba(200, 16, 46, 0.15)',
                padding: '4px 12px',
                borderRadius: '4px',
              }}
            >
              {post.category}
            </span>
          </div>

          <h1
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '20px',
            }}
          >
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.65)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={15} />
              {post.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} />
              {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <article className="section" style={{ paddingTop: '48px', paddingBottom: '72px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Cover Media */}
          {post.coverImage && (
            <div
              style={{
                background: 'var(--th-black)',
                borderRadius: 'calc(var(--th-radius) * 1.5)',
                overflow: 'hidden',
                marginBottom: '40px',
                border: '1px solid var(--th-border)',
                height: '360px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={post.coverImage}
                alt={post.title}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  padding: '24px',
                }}
              />
            </div>
          )}

          {/* Excerpt Lead Box */}
          <div
            style={{
              padding: '20px 24px',
              background: 'var(--th-surface)',
              borderLeft: '4px solid var(--th-red)',
              borderRadius: '0 var(--th-radius) var(--th-radius) 0',
              marginBottom: '36px',
              fontSize: 'var(--text-base)',
              fontStyle: 'italic',
              color: 'var(--th-text)',
              lineHeight: 1.7,
            }}
          >
            {post.excerpt}
          </div>

          {/* Body Html Render */}
          <div
            className="blog-prose"
            style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.8,
              color: 'var(--th-text)',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--th-border)' }}>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--th-muted)', marginBottom: '10px' }}>
              Tagged Topics
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--th-text)',
                    background: 'var(--th-surface)',
                    border: '1px solid var(--th-border)',
                    padding: '5px 12px',
                    borderRadius: '999px',
                  }}
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Products Showcase */}
          {matchedProducts.length > 0 && (
            <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--th-border)' }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '20px' }}>
                Featured Products in this Article
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {matchedProducts.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/products/${prod.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px',
                      background: '#FFFFFF',
                      border: '1px solid var(--th-border)',
                      borderRadius: 'var(--th-radius)',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 150ms ease, box-shadow 150ms ease',
                    }}
                    className="hover:border-red-600 hover:shadow-sm"
                  >
                    <img
                      src={prod.image}
                      alt={prod.title}
                      style={{ width: '64px', height: '64px', objectFit: 'contain', background: 'var(--th-surface)', borderRadius: '4px', padding: '4px' }}
                    />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--th-muted)' }}>{prod.id}</span>
                      <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, lineHeight: 1.3, marginBottom: '4px' }}>{prod.title}</h4>
                      <span style={{ fontSize: '11px', color: 'var(--th-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                        View Specs <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick WhatsApp Inquiry Action Box */}
          <div
            style={{
              marginTop: '56px',
              padding: '32px',
              background: 'var(--th-surface)',
              borderRadius: 'var(--th-radius)',
              border: '1px solid var(--th-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare style={{ color: 'var(--th-red)' }} size={24} />
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, margin: 0 }}>
                Need Engineering Drawings or Sourcing Support?
              </h3>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--th-muted)', lineHeight: 1.7, margin: 0 }}>
              Connect directly with our export engineering team on WhatsApp to request full test certifications, sample tooling availability, or container-load FOB quotes.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
              <a
                href={waInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  background: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: 'var(--th-radius)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  textDecoration: 'none',
                }}
              >
                Discuss on WhatsApp
              </a>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  background: 'var(--th-black)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--th-radius)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  textDecoration: 'none',
                }}
              >
                Submit RFQ Form
              </Link>
            </div>
          </div>

          {/* Back button */}
          <div style={{ marginTop: '48px' }}>
            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--th-muted)',
                textDecoration: 'none',
              }}
              className="hover:text-black"
            >
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
