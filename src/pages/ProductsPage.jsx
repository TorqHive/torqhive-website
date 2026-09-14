import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import SectionHeading from '../components/common/SectionHeading';
import { products, categories } from '../data/products';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const setCategory = cat => {
    const p = new URLSearchParams(searchParams);
    if (cat) p.set('category', cat); else p.delete('category');
    setSearchParams(p, { replace: true });
  };

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = !activeCategory || p.category === activeCategory;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <main data-component="products-page">
      {/* Page header */}
      <div style={{ background: 'var(--th-black)', padding: '48px 0 40px' }}>
        <div className="container">
          <p className="text-eyebrow" style={{ marginBottom: '10px' }}>Product Catalog</p>
          <h1 className="text-h1" style={{ color: '#FFFFFF', marginBottom: '12px' }}>40 professional hand tools.</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-lg)', maxWidth: '480px' }}>
            MOQ starts at one piece. Light customization available on all items.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        {/* Search + mobile filter toggle */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, maxWidth: '360px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--th-muted)', pointerEvents: 'none' }} />
            <input
              type="search"
              placeholder="Search by name or ID…"
              className="form-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: '38px' }}
            />
          </div>
          <button
            className="btn btn-outline-dark md:hidden"
            onClick={() => setMobileFilterOpen(v => !v)}
            style={{ gap: '6px', display: 'flex', alignItems: 'center' }}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          <p className="text-meta" style={{ marginLeft: 'auto' }}>{filtered.length} products</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start' }} className="catalog-layout">
          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '80px' }} className={`catalog-sidebar${mobileFilterOpen ? ' open' : ''}`}>
            <p style={{ fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: '12px', color: 'var(--th-black)' }}>Category</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <li>
                <button
                  onClick={() => setCategory('')}
                  style={{
                    width: '100%', textAlign: 'left', padding: '8px 10px',
                    fontSize: 'var(--text-sm)', fontWeight: !activeCategory ? 700 : 400,
                    color: !activeCategory ? 'var(--th-black)' : 'var(--th-muted)',
                    borderLeft: !activeCategory ? '3px solid var(--th-red)' : '3px solid transparent',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    transition: 'color 150ms ease',
                    background: !activeCategory ? 'var(--th-surface)' : 'transparent',
                  }}
                >
                  All Products <span style={{ color: 'var(--th-muted)', fontWeight: 400 }}>({products.length})</span>
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.name}>
                  <button
                    onClick={() => setCategory(cat.name)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '8px 10px',
                      fontSize: 'var(--text-sm)', fontWeight: activeCategory === cat.name ? 700 : 400,
                      color: activeCategory === cat.name ? 'var(--th-black)' : 'var(--th-muted)',
                      borderLeft: activeCategory === cat.name ? '3px solid var(--th-red)' : '3px solid transparent',
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      background: activeCategory === cat.name ? 'var(--th-surface)' : 'transparent',
                      transition: 'color 150ms ease',
                    }}
                  >
                    {cat.name} <span style={{ color: 'var(--th-muted)', fontWeight: 400 }}>({cat.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <section>
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--th-muted)' }}>
                <Search size={32} style={{ margin: '0 auto 12px', opacity: 0.4 }} />
                <p>No products match your search. <button onClick={() => { setSearch(''); setCategory(''); }} style={{ color: 'var(--th-red)', fontWeight: 600 }}>Clear filters</button></p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                {filtered.map(p => <ProductCard key={p.id} {...p} />)}
              </div>
            )}
          </section>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .catalog-layout { grid-template-columns: 1fr !important; }
          .catalog-sidebar { display: none; }
          .catalog-sidebar.open { display: block; }
        }
      `}</style>
    </main>
  );
}
