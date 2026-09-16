import React from 'react';
import Hero from '../components/hero/Hero';
import CategoryGrid from '../components/categories/CategoryGrid';
import PowerToolsRoadmap from '../components/sections/PowerToolsRoadmap';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import BuyingProcess from '../components/sections/BuyingProcess';
import ManufacturingSection from '../components/sections/ManufacturingSection';
import QualitySection from '../components/sections/QualitySection';
import InquiryBanner from '../components/sections/InquiryBanner';
import { products, categories, featuredProductIds } from '../data/products';

const featuredProducts = products.filter(p => featuredProductIds.includes(p.id));

export default function HomePage() {
  return (
    <main data-component="home-page">
      <Hero />
      <CategoryGrid categories={categories} />
      <PowerToolsRoadmap />
      <FeaturedProducts products={featuredProducts} />
      <BuyingProcess />
      <ManufacturingSection />
      <QualitySection />
      <InquiryBanner />
    </main>
  );
}
