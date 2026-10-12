'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#04241c] text-white overflow-hidden">
      {/* Background radial gradient glow for subtle depth matching Solar1.png */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#074233] via-[#04241c] to-[#021712] opacity-95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (55%): Eyebrow, Main Headline, Subcopy, Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-slate-200 font-semibold font-mono">
                NS BATTERIES
              </span>
            </div>

            {/* Main Headline from Solar1.png */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12] font-extrabold text-white tracking-tight">
              Powering a <br className="hidden sm:inline" />
              <span className="text-[#22c55e]">Sustainable</span> Tomorrow
            </h1>

            {/* Supporting Paragraph from Solar1.png */}
            <p className="text-sm sm:text-base text-slate-200 max-w-lg leading-relaxed">
              Your trusted partner for solar solutions, batteries, inverters, UPS and complete power backup systems.
            </p>

            {/* CTA Buttons Matching Solar1.png Pill Styling */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm bg-[#16a34a] hover:bg-[#15803d] shadow-lg shadow-emerald-950/40 hover:scale-105 active:scale-110 transition-all duration-200"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white font-semibold text-sm bg-transparent border-2 border-white/80 hover:bg-white/10 hover:border-white hover:scale-105 active:scale-110 transition-all duration-200"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Quick Helpline Indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Phone className="w-4 h-4 text-[#22c55e] shrink-0" />
              <span>
                Need immediate battery or solar sizing? Call{' '}
                <a href="tel:+918870120911" className="text-white font-semibold underline underline-offset-2">
                  88701 20911
                </a>
              </span>
            </div>
          </div>

          {/* Right Column (45%): Tree.png Hero Asset Showing the Two Seated Men */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#063326]/40">
              <Image
                src="/images/tree.png"
                alt="NS Batteries Leadership & Directors with Solar Field Installation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Subtle bottom gradient overlay for harmonious blend */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#04241c]/90 via-[#04241c]/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
