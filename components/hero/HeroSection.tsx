'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Wrench, Headphones } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function HeroSection() {
  const benefits = [
    'Government solar subsidy assistance.',
    'High-efficiency solar solutions.',
    'Professional installation and service support.',
  ];

  const trustIndicators = [
    {
      icon: Headphones,
      title: 'Local Customer Support',
      desc: 'Direct assistance from our Ramanathapuram store.',
    },
    {
      icon: Wrench,
      title: 'Solar Installation Assistance',
      desc: 'Expert sizing, site evaluation, and net-metering.',
    },
    {
      icon: ShieldCheck,
      title: 'Product Warranty Support',
      desc: 'Backed by official manufacturer warranty terms.',
    },
  ];

  return (
    <section className="bg-white text-[#17212B] pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (approx 52%) */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[12px] font-semibold tracking-wider text-[#0B1722] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D9232E]" />
              <span>PM SURYA GHAR | SOLAR ENERGY SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1722] leading-[1.15] tracking-tight">
              Powering a Smarter,<br />
              <span className="text-[#D9232E]">Cleaner Energy Future.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#647384] leading-relaxed max-w-xl">
              Discover reliable solar modules, high-performance batteries, and complete energy solutions backed by trusted service in Ramanathapuram and across southern Tamil Nadu.
            </p>

            {/* 3 Concise Benefits */}
            <ul className="space-y-2.5 pt-1">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#17212B]">
                  <CheckCircle2 className="w-5 h-5 text-[#16835D] shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons & Subtle Phone Link */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/solar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white text-sm font-semibold shadow-sm transition-colors active:scale-95"
              >
                <span>Explore Solar Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-transparent hover:bg-[#F5F7FA] text-[#0B1722] text-sm font-semibold border border-[#E1E7ED] hover:border-[#CBD5E1] transition-colors"
              >
                <span>Calculate Your Subsidy</span>
              </Link>
            </div>

            {/* Subtle Phone Link */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-[#647384]">
              <span>Speak with a local energy advisor:</span>
              <a
                href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                className="font-semibold text-[#0B1722] hover:text-[#D9232E] underline flex items-center gap-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D9232E]" />
                <span>{COMPANY_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>

          {/* Right Column (approx 48%) - Realistic Rooftop Solar Photograph */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[14/11] rounded-2xl overflow-hidden shadow-lg border border-[#E1E7ED] bg-[#F5F7FA] group">
              <Image
                src="/images/ecosystem/solar-10kwp.jpeg"
                alt="Professionally installed rooftop solar energy system"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Single Subtle Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/95 backdrop-blur-sm border border-[#E1E7ED] shadow-sm text-xs font-semibold text-[#0B1722]">
                  <span className="w-2 h-2 rounded-full bg-[#16835D]" />
                  <span>Reliable Solar Solutions — Ramanathapuram</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Trust-Indicator Row Below Hero */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E1E7ED]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {trustIndicators.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] flex items-center justify-center shrink-0 text-[#0B1722]">
                  <item.icon className="w-5 h-5 text-[#D9232E]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1722]">{item.title}</h4>
                  <p className="text-xs text-[#647384] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
