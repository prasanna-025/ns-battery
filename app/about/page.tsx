import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, HeartHandshake, MapPin, CheckCircle2, Phone, Sun, ArrowRight } from 'lucide-react';
import FoundersTrustStory from '@/components/home/FoundersTrustStory';
import StorefrontShowcase from '@/components/store/StorefrontShowcase';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'About NS Batteries | Founders, Family Heritage & Mission',
  description:
    'Learn about NS Batteries, our founders, and our 15+ year journey in Ramanathapuram delivering genuine batteries, rooftop solar systems and reliable energy.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#062413] via-[#09351c] to-[#04150b] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>FAMILY HERITAGE & VISION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              A Family Legacy of Trust in <span className="text-emerald-400">Ramanathapuram</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded on the bedrock of integrity, NS Batteries has grown from a local battery destination to Ramanathapuram’s premier clean energy and power management partner. We take pride in real human relationships, transparent advice, and dependable technology.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-emerald-300">
              <span>Motto: &ldquo;Energy for People&rdquo;</span>
              <span>•</span>
              <span>Est. in Ramanathapuram, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founders Story Section */}
      <FoundersTrustStory />

      {/* 3. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Three Principles We Live By
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Visible right on our Ramanathapuram storefront facade: Quality Products, Expert Service, Trusted Partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_INFO.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#061e11] border border-emerald-500/30 space-y-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Storefront Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <StorefrontShowcase />
      </section>

      {/* 5. Districts & Service Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl bg-[#061d10] border border-emerald-500/30 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Areas We Serve Across Southern Tamil Nadu</h3>
              <p className="text-xs text-slate-400">Our mobile technical van and installation crews cover:</p>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <span>Contact Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {COMPANY_INFO.serviceRegions.map((region, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#04150b] border border-emerald-950 text-slate-200 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
