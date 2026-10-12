import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Clock, Mail, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import HomeQuoteSection from '@/components/home/HomeQuoteSection';
import StorefrontShowcase from '@/components/store/StorefrontShowcase';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Contact NS Batteries | Store Location & Phone Ramanathapuram',
  description:
    'Visit NS Batteries at AKB Complex, GH Road, Ramanathapuram. Call 88701 20911 or 95145 20911 for battery testing, solar surveys, and emergency service.',
};

export default function ContactPage() {
  return (
    <div className="bg-white text-[#17212B] space-y-16 sm:space-y-20 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl bg-[#0B1722] text-white p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-[#D9232E]">
              <MapPin className="w-4 h-4 text-[#D9232E]" />
              <span>DIRECT STORE CONTACT & LOCATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get in Touch with NS Batteries
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Have a question about solar net metering, need an urgent battery replacement, or want to pick up Gulf Oil and SKF bearings? Visit our store or reach out through phone and WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact & Enquiry Form */}
      <HomeQuoteSection />

      {/* 3. Flagship Showroom Walk-In */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <StorefrontShowcase />
      </section>
    </div>
  );
}
