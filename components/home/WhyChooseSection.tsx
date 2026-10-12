'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Wrench, Sun, FileCheck, Headphones, HeartHandshake, ArrowRight } from 'lucide-react';

export default function WhyChooseSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: '100% Genuine OEM Products',
      desc: 'Direct factory-authorized stock from Amaron, Powerzone, Luminous, UTL, Gulf Oil, and SKF. Zero counterfeit stock guarantee.',
    },
    {
      icon: Wrench,
      title: 'Practical Technical Assistance',
      desc: 'Trained battery diagnosticians and solar engineers provide honest capacity sizing tailored to your specific power loads.',
    },
    {
      icon: Sun,
      title: 'Solar Installation Support',
      desc: 'Complete rooftop site surveys, corrosion-resistant coastal mounting structures, inverter synchronization, and bi-directional metering.',
    },
    {
      icon: FileCheck,
      title: 'Manufacturer Warranty Guidance',
      desc: 'Hassle-free on-counter testing and direct manufacturer warranty claim processing without bureaucratic delays.',
    },
    {
      icon: Headphones,
      title: 'Responsive After-Sales Assistance',
      desc: 'Doorstep battery fitting, dead battery jump-start assistance across Ramanathapuram, and routine solar array maintenance.',
    },
    {
      icon: HeartHandshake,
      title: 'Local Community Trust',
      desc: 'A 37-year family business footprint established in Ramanathapuram with verifiable customer relationships since 1989.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#15803d]">
            THE NS BATTERIES PROMISE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
            Reliable Products. Practical Expertise. Local Support.
          </h2>
          <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
            We bridge authorized manufacturer distribution with hands-on technical guidance across Southern Tamil Nadu.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] hover:border-[#CBD5E1] transition-all hover:shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E1E7ED] flex items-center justify-center text-[#16a34a]">
                <pt.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B1722]">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
