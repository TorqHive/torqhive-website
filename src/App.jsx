import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WhatsAppFAB from './components/common/WhatsAppFAB';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BuyingGuidePage from './pages/BuyingGuidePage';
import NotFoundPage from './pages/NotFoundPage';
import './styles.css';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"              element={<HomePage />} />
            <Route path="/products"      element={<ProductsPage />} />
            <Route path="/products/:id"  element={<ProductDetailPage />} />
            <Route path="/about"         element={<AboutPage />} />
            <Route path="/contact"       element={<ContactPage />} />
            <Route path="/buying-guide"  element={<BuyingGuidePage />} />
            <Route path="*"              element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </Router>
  );
}
