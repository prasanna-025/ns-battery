'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Calculator, Headphones, Wrench, ShieldCheck, Sun } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function HeroSection() {
  const verifiedBenefits = [
    'Government solar subsidy assistance (up to ₹78,000 via PM Surya Ghar)',
    'High-efficiency Tier-1 solar modules & pure sine wave inverters',
    'Professional on-site engineering, rooftop installation & warranty support',
  ];

  return (
    <section className="w-full bg-white pt-6 pb-16 md:py-20 lg:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* 52% Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
              <span className="font-mono uppercase tracking-wider text-xs font-semibold">
                PM SURYA GHAR | SOLAR ENERGY SOLUTIONS
              </span>
            </div>

            {/* Headline with Light Green Accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] font-bold text-[#0B1722] tracking-tight">
              Powering a Smarter, <span className="text-[#16a34a]">Cleaner Energy</span> Future.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#54606d] max-w-2xl leading-relaxed">
              Discover reliable solar modules, high-performance batteries, and complete energy solutions backed by trusted service in Ramanathapuram and across southern Tamil Nadu.
            </p>

            {/* Verified Benefits */}
            <div className="w-full space-y-3 pt-2">
              {verifiedBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#17212B] font-medium leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTAs in Brand Light Green */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl text-white bg-[#15803d] hover:bg-[#166534] transition-colors shadow-sm"
              >
                <span>Explore Solar Solutions</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/calculator"
                className="inline-flex items-center justify-center text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl text-[#0B1722] bg-white hover:bg-[#F5F7FA] border border-[#E1E7ED] transition-colors shadow-sm"
              >
                <span>Calculate Your Subsidy</span>
                <Calculator className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Direct Helpline Info */}
            <div className="flex items-center gap-2 pt-2 text-[#647384] text-xs sm:text-sm">
              <Headphones className="w-4 h-4 text-[#F4B323] shrink-0" />
              <span>
                Direct helpline: <strong className="text-[#0B1722] font-semibold font-mono">{COMPANY_INFO.phones[0].display}</strong> • Mon-Sat 8:30 AM – 9:00 PM
              </span>
            </div>
          </div>

          {/* 48% Asset Column */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#F5F7FA] aspect-[4/3] lg:aspect-auto lg:h-[480px] border border-[#E1E7ED] group">
              <Image
                src="/images/ecosystem/solar-10kwp.jpeg"
                alt="Authentic Residential Rooftop Solar Installation by NS Batteries in Tamil Nadu"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Contextual Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0B1722]/90 backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center gap-3 text-white shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#F4B323] font-semibold">
                    Authentic Rooftop Installation
                  </span>
                  <span className="text-xs text-slate-200 font-medium">
                    Bifacial Mono PERC Array • Ramanathapuram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicator Bar */}
        <div className="mt-14 pt-8 bg-[#F5F7FA] border border-[#E1E7ED] rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-100/70 flex items-center justify-center text-[#16a34a] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0B1722] leading-tight">Authorized OEM Dealer</h4>
              <p className="text-xs text-[#647384] mt-0.5">Direct tier-1 factory warranties for solar &amp; storage</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-[#F4B323] shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0B1722] leading-tight">TANGEDCO Net-Metering</h4>
              <p className="text-xs text-[#647384] mt-0.5">Turnkey utility approvals and bi-directional bi-phase meters</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-[#10805a] shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0B1722] leading-tight">Local Service &amp; Spares</h4>
              <p className="text-xs text-[#647384] mt-0.5">Flagship engineering center at AKB Complex, GH Road</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
