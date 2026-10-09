import React from 'react';
import type { Metadata } from 'next';
import ProductGrid from '@/components/products/ProductGrid';
import { Layers, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Full Product Catalogue | NS Batteries Ramanathapuram',
  description:
    'Browse our complete catalogue of automobile batteries, inverter batteries, solar rooftop systems, pure sine wave inverters, lithium energy storage, Gulf Oil and SKF bearings.',
};

export default function ProductsPage() {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#062413] via-[#09351c] to-[#04150b] border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>OFFICIAL PRODUCT & INVENTORY CATALOGUE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Genuine Energy & Automotive Products
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every item at our Ramanathapuram counter is directly sourced from authorized brand channels with genuine warranty protection. Select a category or search below to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ProductGrid initialCategory="all" />
      </section>

      {/* Custom Inquiry Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-2xl bg-[#061d10] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Looking for a specific model or bulk order not listed above? We arrange factory orders within 24 hours.</span>
          </div>

          <a
            href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold shrink-0 flex items-center gap-1.5 transition-colors shadow"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Store Desk: {COMPANY_INFO.phones[0].display}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
