import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroSection from '@/components/hero/HeroSection';
import CompanyStats from '@/components/home/CompanyStats';
import CategoryGrid from '@/components/home/CategoryGrid';
import SubsidyGuideSection from '@/components/home/SubsidyGuideSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import InstallationGallery from '@/components/home/InstallationGallery';
import FoundersTrustStory from '@/components/home/FoundersTrustStory';
import StorefrontShowcase from '@/components/store/StorefrontShowcase';
import SolarCalculator from '@/components/solar/SolarCalculator';
import HomeQuoteSection from '@/components/home/HomeQuoteSection';
import ProductGrid from '@/components/products/ProductGrid';

export default function HomePage() {
  return (
    <div className="bg-white text-[#17212B]">
      {/* 1. HERO SECTION (Corporate 2-Column with Realistic Rooftop Solar Photo) */}
      <HeroSection />

      {/* 2. COMPANY STATISTICS ("OUR JOURNEY IN NUMBERS") */}
      <CompanyStats />

      {/* 3. PRODUCT CATEGORIES ("Complete Energy Solutions for Every Need") */}
      <CategoryGrid />

      {/* 4. FEATURED PRODUCTS CATALOGUE */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E7ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#D9232E]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9232E]" />
                <span>AUTHORIZED OEM STOCK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
                Featured Energy & Automotive Products
              </h2>
              <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
                Discover tested, high-demand batteries, solar inverters, and automotive lubricants available at our Ramanathapuram showroom.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B1722] hover:bg-[#122333] text-white text-xs font-bold uppercase tracking-wider transition-colors self-start md:self-auto shrink-0"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4 text-[#D9232E]" />
            </Link>
          </div>

          {/* Product Grid with Filters */}
          <ProductGrid limit={8} />
        </div>
      </section>

      {/* 5. PM SURYA GHAR SUBSIDY GUIDANCE SECTION */}
      <SubsidyGuideSection />

      {/* 6. WHY CHOOSE NS BATTERIES (6 Core Trust Pillars) */}
      <WhyChooseSection />

      {/* 7. SOLAR SOLUTIONS IN ACTION (Verified Field Installation Gallery) */}
      <InstallationGallery />

      {/* 8. FOUNDER & SECOND-GENERATION LEADERSHIP */}
      <FoundersTrustStory />

      {/* 9. FLAGSHIP SHOWROOM WALK-IN SHOWCASE */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E7ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <StorefrontShowcase />
        </div>
      </section>

      {/* 10. INTERACTIVE SOLAR SAVINGS CALCULATOR */}
      <section className="bg-[#F5F7FA] py-16 sm:py-24 border-b border-[#E1E7ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SolarCalculator />
        </div>
      </section>

      {/* 11. CONTACT & QUOTE REQUEST SECTION */}
      <HomeQuoteSection />
    </div>
  );
}
