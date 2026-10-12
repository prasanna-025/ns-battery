'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sun, Car, BatteryCharging, Zap, Cpu, Droplets } from 'lucide-react';

export default function CategoryGrid() {
  const categories = [
    {
      title: 'Solar Modules & Hybrid Systems',
      description: 'Bifacial Mono PERC rooftop installations, on-grid & hybrid storage arrays with complete 25-year manufacturer performance coverage.',
      tag: 'TIER-1 PV',
      specs: '3kW • 5kW • 10kW • Commercial',
      icon: Sun,
      iconBg: 'bg-[#F4B323]/10 text-[#F4B323]',
      tagStyle: 'text-[#F4B323] bg-[#F4B323]/10',
      href: '/solar',
    },
    {
      title: 'Automobile Batteries',
      description: 'Amaron & Powerzone maintenance-free batteries for private hatchbacks, heavy commercial trucks, tractors, and high-load marine vessels.',
      tag: 'AUTOMOTIVE',
      specs: 'Up to 66 Months Warranty',
      icon: Car,
      iconBg: 'bg-emerald-50 text-[#16a34a]',
      tagStyle: 'text-[#15803d] bg-emerald-100/70',
      href: '/batteries',
    },
    {
      title: 'Inverter Batteries',
      description: 'Luminous and Powerzone deep-cycle tubular cells equipped with heavy-duty spines for extended coastal power cut resistance.',
      tag: 'TALL TUBULAR',
      specs: '150Ah • 200Ah • 220Ah',
      icon: BatteryCharging,
      iconBg: 'bg-slate-100 text-[#0B1722]',
      tagStyle: 'text-[#0B1722] bg-slate-100',
      href: '/batteries',
    },
    {
      title: 'Inverters & Pure Sine Wave UPS',
      description: 'Microcontroller pure sine wave backup architectures with rMPPT solar synchronization, bypass switches, and silent operation.',
      tag: 'PURE SINE',
      specs: '900VA to 10kVA Commercial',
      icon: Zap,
      iconBg: 'bg-emerald-50 text-[#10805a]',
      tagStyle: 'text-[#10805a] bg-emerald-50',
      href: '/inverters',
    },
    {
      title: 'Lithium Iron Phosphate (LiFePO4)',
      description: 'Next-generation wall-mounted storage modules with integrated smart BMS, zero distilled water maintenance, and ultra-fast 2-hour recharge.',
      tag: 'LITHIUM LiFePO4',
      specs: '3,500+ Depth Cycles @ 80%',
      icon: Cpu,
      iconBg: 'bg-teal-50 text-[#10805a]',
      tagStyle: 'text-[#10805a] bg-teal-50',
      href: '/batteries',
    },
    {
      title: 'Gulf Oil & SKF Bearings',
      description: 'Genuine commercial lubricants, synthetic heavy diesel motor oils, specialized marine transmission fluids, and genuine SKF precision bearings.',
      tag: 'INDUSTRIAL & FLEET',
      specs: 'Direct Institutional Supply',
      icon: Droplets,
      iconBg: 'bg-amber-50 text-[#0B1722]',
      tagStyle: 'text-[#0B1722] bg-amber-50',
      href: '/lubricants',
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-mono uppercase tracking-widest text-[#15803d] font-semibold text-xs">
            PRODUCT CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0B1722] font-bold mt-2 tracking-tight">
            Complete Energy Solutions for Every Need
          </h2>
          <p className="text-sm sm:text-base text-[#54606d] mt-2">
            Explore dependable energy products and turnkey solutions engineered for the Tamil Nadu climate and coastal power demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#E1E7ED] hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] active:scale-[1.05] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <span className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold ${cat.tagStyle}`}>
                    {cat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1722] group-hover:text-[#16a34a] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#54606d] mt-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 bg-[#F5F7FA] -mx-6 -mb-6 p-6 rounded-b-xl border-t border-[#E1E7ED] flex items-center justify-between">
                <span className="font-mono text-xs text-[#647384] truncate pr-2">
                  {cat.specs}
                </span>
                <Link
                  href={cat.href}
                  className="inline-flex items-center text-[#15803d] font-semibold text-xs sm:text-sm hover:underline hover:scale-105 active:scale-115 transition-all duration-200 shrink-0"
                >
                  Explore <ChevronRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
