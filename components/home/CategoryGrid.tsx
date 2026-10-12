'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CategoryGrid() {
  const categories = [
    {
      title: 'Solar Modules',
      description: 'High-efficiency Mono PERC and TOPCon bifacial modules designed for high ambient temperatures and maximum unit generation.',
      image: '/images/ecosystem/solar-10kwp.jpeg',
      href: '/solar',
      actionLabel: 'Explore Solar Modules',
    },
    {
      title: 'Automotive Batteries',
      description: 'Factory-fresh, high-cranking starting batteries for two-wheelers, cars, commercial vehicles, and coastal tractors.',
      image: '/images/ecosystem/powerzone-battery.jpg',
      href: '/batteries',
      actionLabel: 'Explore Batteries',
    },
    {
      title: 'Industrial Batteries',
      description: 'Heavy tall-tubular deep-cycle batteries and advanced LiFePO4 energy storage packs for extended backup requirements.',
      image: '/images/ecosystem/hybrid-solar-flow.png',
      href: '/batteries?type=industrial',
      actionLabel: 'Explore Industrial',
    },
    {
      title: 'Inverters & UPS',
      description: 'Pure sine wave home UPS and rMPPT solar hybrid PCUs engineered to protect sensitive electronics and eliminate fan noise.',
      image: '/images/ecosystem/solar-dealership.jpg',
      href: '/inverters',
      actionLabel: 'Explore Inverters',
    },
    {
      title: 'Gulf Oil & SKF Products',
      description: '100% genuine Gulf engine lubricants for bikes, cars, and marine trawlers, plus authentic SKF precision bearings and greases.',
      image: '/images/ecosystem/gulf-oil.webp',
      href: '/lubricants',
      actionLabel: 'Explore Lubricants & Parts',
    },
    {
      title: 'Rooftop Solar Installation',
      description: 'Turnkey solar EPC services with complete net-metering approvals, DISCOM liaison, and PM Surya Ghar subsidy coordination.',
      image: '/images/ecosystem/solar-dealership.jpg',
      href: '/solar',
      actionLabel: 'Learn More',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#D9232E]">
            ENERGY PRODUCT DIVISIONS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
            Complete Energy Solutions for Every Need
          </h2>
          <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
            Explore dependable energy products and solutions for homes, businesses, and industrial applications.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white border border-[#E1E7ED] hover:border-[#CBD5E1] transition-all duration-200 hover:shadow-md flex flex-col group"
            >
              {/* Category Image */}
              <div className="relative aspect-[16/10] w-full bg-[#F5F7FA] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0B1722] group-hover:text-[#D9232E] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2 border-t border-[#F1F5F9]">
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D9232E] hover:text-[#B91F29] transition-colors"
                  >
                    <span>{cat.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
