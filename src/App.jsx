import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WhatsAppFAB from './components/common/WhatsAppFAB';
import './styles.css';

// Route-based code splitting for Core Web Vitals optimization
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BuyingGuidePage = lazy(() => import('./pages/BuyingGuidePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostDetailPage = lazy(() => import('./pages/BlogPostDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '32px',
        height: '32px',
        border: '3px solid var(--th-border, #e5e7eb)',
        borderTopColor: 'var(--th-red, #dc2626)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"              element={<HomePage />} />
              <Route path="/products"      element={<ProductsPage />} />
              <Route path="/products/:id"  element={<ProductDetailPage />} />
              <Route path="/about"         element={<AboutPage />} />
              <Route path="/blog"          element={<BlogPage />} />
              <Route path="/blog/:slug"    element={<BlogPostDetailPage />} />
              <Route path="/contact"       element={<ContactPage />} />
              <Route path="/buying-guide"  element={<BuyingGuidePage />} />
              <Route path="*"              element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </Router>
  );
}
