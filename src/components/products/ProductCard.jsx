import React from 'react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../../utils/analytics';

/**
 * ProductCard — single product display for grid catalog
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} props.category
 * @param {string} props.dimensions
 * @param {string} props.weight
 * @param {number} props.moq
 * @param {string} props.image
 */
export default function ProductCard({ id, title, category, dimensions, weight, moq, image }) {
  const waNumber = '8615669586372';
  const waText = encodeURIComponent(
    `Hi TorqHive, I'd like to inquire about ${id} — ${title}.\n` +
    `• Target Qty: [e.g. 50 / 200 / 1000 pcs]\n` +
    `• Destination Country: [e.g. UK / Germany / USA]\n` +
    `Please share export pricing, sample availability (freight collect) and lead time.`
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <article className="product-card" data-component="product-card">
      <Link to={`/products/${id}`} aria-label={`View ${title}`}>
        <div className="product-card__img-wrap">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={400}
            height={400}
          />
        </div>
      </Link>
      <div className="product-card__body">
        <p className="product-card__id">{id}</p>
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__specs">
          {dimensions} · {weight}
        </p>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span className="badge badge-outline">MOQ {moq}</span>
          <span className="badge badge-outline">Samples available</span>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm product-card__cta"
          aria-label={`Request quote for ${title} via WhatsApp`}
          onClick={() => trackWhatsAppClick({ location: 'product_card', productId: id, productTitle: title })}
        >
          Request Quote
        </a>
      </div>
    </article>
  );
}
