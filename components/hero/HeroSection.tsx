'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Phone, ArrowRight, Zap, Award, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import { COMPANY_INFO } from '@/data/company';

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

export default function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'PM SURYA GHAR : NATIONAL SOLAR PORTAL',
      titleLine1: 'ENABLING CO₂ EMISSION REDUCTION',
      titleLine2: '& 300 UNITS FREE POWER',
      highlight: 'FREE POWER',
      description:
        'Transform your rooftop into a private power station. Slash up to 90% off your monthly TANGEDCO electricity bill with Tier-1 TOPCon Bifacial solar modules and direct government subsidy up to ₹78,000.',
      primaryBtn: { text: 'EXPLORE SOLAR MODULES', href: '/solar' },
      secondaryBtn: { text: 'CALCULATE SUBSIDY', href: '/solar#calculator' },
      metrics: [
        { label: 'DBT CENTRAL SUBSIDY', value: 'Up to ₹78,000' },
        { label: 'CELL EFFICIENCY', value: '22.8% TOPCon' },
        { label: 'LINEAR WARRANTY', value: '25-Year Guarantee' },
      ],
    },
    {
      badge: 'COMMERCIAL, INDUSTRIAL & COASTAL MICROGRIDS',
      titleLine1: 'SWITCH TO SOLAR. CUT DIESEL',
      titleLine2: '& HIGH TARIFF COSTS',
      highlight: 'CUT DIESEL COSTS',
      description:
        'Engineered for Ramanathapuram’s extreme coastal salt-mist conditions. Heavy-duty anodized aluminum framing, IP68 junction boxes, and pure sine wave hybrid inverters built to endure cyclones and high heat.',
      primaryBtn: { text: 'REQUEST SITE SURVEY', href: '/quote' },
      secondaryBtn: { text: 'VIEW INVERTERS & UPS', href: '/inverters' },
      metrics: [
        { label: 'COASTAL RESILIENCE', value: 'IEC 61701 Grade' },
        { label: 'ESTIMATED ROI', value: '3 to 4 Years' },
        { label: 'PEAK CAPACITY', value: '1.4+ MW Installed' },
      ],
    },
    {
      badge: '15+ YEARS OF FAMILY TRUST IN RAMANATHAPURAM',
      titleLine1: 'POWERING HOMES, MOBILITY',
      titleLine2: '& THE NEXT GENERATION',
      highlight: 'NEXT GENERATION',
      description:
        'Ramanathapuram’s authorized hub for genuine Amaron, Exide, Luminous, Microtek, LiFePO4 lithium batteries, and Gulf Oil lubricants. Built on generational family honor and personal customer accountability.',
      primaryBtn: { text: 'MEET FOUNDERS & STORY', href: '/about' },
      secondaryBtn: { text: 'BROWSE CATALOGUE', href: '/products' },
      metrics: [
        { label: 'HAPPY CLIENTS', value: '12,500+' },
        { label: 'FACTORY DIRECT', value: '100% Genuine' },
        { label: 'COUNTER REPLACEMENT', value: 'Instant Testing' },
      ],
    },
  ];

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#060c12] pt-6 pb-16 lg:py-16">
      {/* 3D Solar Experience Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
        <Hero3DCanvas />
      </div>

      {/* Dark Gradient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060c12]/95 via-[#060c12]/80 to-[#060c12]/60 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vikram Solar Corporate Typography & Slider Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill / Ribbon Badge (Vikram Solar Style) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#0a1622] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#cd2028] animate-ping" />
              <span>{slide.badge}</span>
            </div>

            {/* High-Impact Uppercase Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white font-display leading-[1.08]">
                <span>{slide.titleLine1}</span>
                <br />
                <span className="text-[#cd2028]">{slide.titleLine2}</span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {slide.description}
            </p>

            {/* Action CTA Buttons (Vikram Red Buttons) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href={slide.primaryBtn.href}
                className="vikram-btn flex items-center justify-center gap-2.5 text-xs font-bold tracking-wider"
              >
                <span>{slide.primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={slide.secondaryBtn.href}
                className="vikram-btn-outline flex items-center justify-center gap-2 text-xs font-bold tracking-wider"
              >
                <span>{slide.secondaryBtn.text}</span>
              </Link>

              <a
                href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-[#cd2028]" />
                <span>88701 20911</span>
              </a>
            </div>

            {/* Vikram Solar Technical Specs Strip */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 max-w-xl">
              {slide.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{m.label}</p>
                  <p className="text-sm sm:text-base font-bold text-white font-mono">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Slide Navigation Dots & Arrows */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded bg-white/5 hover:bg-[#cd2028] text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 transition-all rounded-full ${
                      currentSlide === idx ? 'w-8 bg-[#cd2028]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                aria-label="Next Slide"
                className="w-8 h-8 rounded bg-white/5 hover:bg-[#cd2028] text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Founders Portrait in Formal Suits (Family Leadership Card) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#cd2028]/20 via-amber-500/10 to-transparent rounded-2xl blur-lg opacity-80" />

              {/* Main Portrait Card */}
              <div className="relative rounded-xl overflow-hidden bg-[#0c1824] border border-white/15 shadow-2xl backdrop-blur-md">
                {/* Red Header Bar */}
                <div className="bg-[#cd2028] px-4 py-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                    Generational Leadership
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold text-white/90">
                    Est. Ramanathapuram
                  </span>
                </div>

                {/* Founders Photo */}
                <div className="relative aspect-[4/3] sm:aspect-[1.35/1] w-full">
                  <Image
                    src="/images/hero-family.png"
                    alt="NS Batteries Founders - Family Leadership"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1824] via-transparent to-transparent opacity-80" />
                </div>

                {/* Portrait Caption */}
                <div className="p-4 sm:p-5 space-y-2.5 bg-[#09141f] border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base uppercase tracking-tight font-display">
                        The Founders & Partners
                      </h3>
                      <p className="text-[#cd2028] text-xs font-semibold uppercase tracking-wider">
                        Unwavering Trust Across Generations
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded bg-[#cd2028]/20 border border-[#cd2028]/40 flex items-center justify-center text-[#cd2028]">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    “Every solar project commissioned and every battery sold from our counter carries our family’s word, authentic manufacturer warranty, and direct after-sales care.”
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/5 text-[11px] text-slate-400">
                    <span>AKB Complex, GH Road</span>
                    <span className="text-[#cd2028] font-bold uppercase">100% Genuine OEM</span>
                  </div>
                </div>
              </div>

              {/* Floating Technical Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-[#0a1622] border-l-4 border-[#cd2028] border-y border-r border-white/15 rounded-sm px-3.5 py-2 shadow-2xl flex items-center gap-2.5">
                <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
                <div>
                  <p className="text-[11px] font-bold uppercase text-white leading-tight">Zero-Bill Solar Power</p>
                  <p className="text-[10px] text-slate-400 uppercase font-mono">TANGEDCO Net Metering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

