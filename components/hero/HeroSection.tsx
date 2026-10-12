'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#012b21] overflow-hidden min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex items-center">
      {/* Background Hero Asset extracted directly from Solar1.png with the two founders from Tree.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solar1_crops/hero_bg_clean_canvas.jpg"
          alt="NS Batteries Directors & Solar Farm Installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        {/* On mobile screens, subtle gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012b21] via-[#012b21]/90 to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-20 w-full">
        <div className="max-w-xl lg:max-w-2xl text-left space-y-4 sm:space-y-5">
          {/* Eyebrow matching Solar1.png */}
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-200 font-semibold font-mono">
              NS BATTERIES
            </span>
          </div>

          {/* Main Headline from Solar1.png */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-bold text-white tracking-tight">
            Powering a <br className="hidden sm:inline" />
            <span className="text-[#22c55e]">Sustainable</span> Tomorrow
          </h1>

          {/* Supporting Paragraph from Solar1.png */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-lg">
            Your trusted partner for solar solutions, batteries, inverters, UPS and complete power backup systems.
          </p>

          {/* CTA Buttons Matching Solar1.png Pill Styling */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3 sm:pt-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-xs sm:text-sm bg-[#22c55e] hover:bg-[#16a34a] transition-all hover:scale-105 active:scale-110 shadow-md"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium text-xs sm:text-sm bg-transparent border border-white/80 hover:bg-white/10 hover:border-white transition-all hover:scale-105 active:scale-110"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
