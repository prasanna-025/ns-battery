'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Phone, ArrowRight, Zap, Award } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import { COMPANY_INFO } from '@/data/company';

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

export default function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050a07] pt-8 pb-16 lg:py-20">
      {/* 3D Solar Experience Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-auto">
        <Hero3DCanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Trust & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a180f]/90 border border-white/10 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400">Ramanathapuram’s Energy Landmark</span>
              <span className="text-emerald-700">•</span>
              <span className="text-amber-300 flex items-center gap-1 font-medium">
                <Sun className="w-3.5 h-3.5" /> PM Surya Ghar Partner
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
                ENERGY FOR <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">PEOPLE.</span>
              </h1>
              <p className="text-lg sm:text-xl text-emerald-200/90 font-medium">
                Powering homes, businesses, and the next generation.
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Built on decades of family trust in Ramanathapuram. We deliver complete clean energy solutions — from turnkey 
              <span className="text-emerald-300 font-medium"> rooftop solar installations</span> and 
              <span className="text-emerald-300 font-medium"> LiFePO4 lithium storage</span> to 
              <span className="text-emerald-300 font-medium"> high-cranking automotive batteries</span>, pure sine wave inverters, and Gulf Oil industrial lubricants.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/solar"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-emerald-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 hover:from-emerald-300 hover:to-amber-200 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300 font-display"
              >
                <Sun className="w-4 h-4 text-emerald-950" />
                <span>Explore Solar Solutions</span>
                <ArrowRight className="w-4 h-4 text-emerald-950" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#0b1c11]/80 border border-white/10 hover:bg-[#0f2818] hover:border-emerald-400 transition-all duration-200 backdrop-blur-md"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Get Free Solar Assessment</span>
              </Link>

              <a
                href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-emerald-300 hover:text-white bg-black/40 border border-white/10 hover:bg-emerald-950/60 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Store</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg">
              <div className="space-y-0.5">
                <p className="text-xl sm:text-2xl font-bold text-white font-display">15+ Yrs</p>
                <p className="text-[11px] text-emerald-400 font-medium">Family Heritage</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">12,500+</p>
                <p className="text-[11px] text-slate-300 font-medium">Happy Installations</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xl sm:text-2xl font-bold text-emerald-300 font-display">100%</p>
                <p className="text-[11px] text-emerald-400 font-medium">Genuine OEM</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Family Leadership Portrait with Glassmorphism Framing */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/20 via-amber-500/15 to-emerald-400/20 rounded-3xl blur-xl opacity-75 animate-pulse-glow" />

              {/* Main Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#09170e]/90 to-[#040e07] border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-md">
                {/* Image */}
                <div className="relative aspect-[4/3] sm:aspect-[1.35/1] w-full">
                  <Image
                    src="/images/hero-family.png"
                    alt="NS Batteries Founders - Family Leadership"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051108] via-transparent to-transparent" />
                </div>

                {/* Portrait Caption & Heritage Badge */}
                <div className="p-4 sm:p-5 space-y-2 bg-[#06140b]/95 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                        <Award className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm sm:text-base leading-tight font-display">
                          Founders & Leadership
                        </h3>
                        <p className="text-emerald-400 text-xs font-medium">
                          Trust Built Across Generations
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-950/60 border border-white/10 text-[10px] font-semibold text-emerald-300">
                        Ramanathapuram
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    “Our word is our bond. When you install an NS solar system or buy a battery from our counter, you get authentic quality, genuine warranty, and our personal backing.”
                  </p>
                </div>
              </div>

              {/* Floating Technology Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-left-5 bg-[#03150b]/95 border border-white/10 rounded-xl px-3.5 py-2 shadow-xl shadow-black/60 backdrop-blur-md flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <p className="text-[11px] font-bold text-white leading-tight font-display">Zero-Flicker Solar Power</p>
                  <p className="text-[10px] text-emerald-400">TANGEDCO Net Metering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
