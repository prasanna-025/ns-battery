'use client';

import React from 'react';
import { Award, ShieldCheck, Zap, Store } from 'lucide-react';

export default function CompanyStats() {
  const credentials = [
    {
      category: 'REGIONAL HERITAGE',
      value: '35+ Years',
      label: 'Founded in 1989',
      description: 'Continuous retail and battery service on GH Road in Ramanathapuram.',
      icon: Store,
      badgeColor: 'text-[#0B1722] bg-slate-100',
    },
    {
      category: 'FACTORY PARTNERSHIPS',
      value: '6 Tier-1',
      label: 'Authorized Brands',
      description: 'Direct distribution for Amaron, Powerzone, Luminous, UTL, Gulf Oil & SKF.',
      icon: Award,
      badgeColor: 'text-[#16a34a] bg-emerald-50',
    },
    {
      category: 'CENTRAL SUBSIDY',
      value: 'Turnkey',
      label: 'PM Surya Ghar Partner',
      description: 'Full handling of national portal registration, site surveys, and TANGEDCO meters.',
      icon: ShieldCheck,
      badgeColor: 'text-[#16835D] bg-emerald-50',
    },
    {
      category: 'SERVICE BENCHMARK',
      value: 'Same-Day',
      label: 'Local Diagnostic Desk',
      description: 'Instant computerized battery load testing, warranty claims & doorstep delivery.',
      icon: Zap,
      badgeColor: 'text-[#F4B323] bg-amber-50',
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-14 sm:py-20 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-mono uppercase tracking-widest text-[#15803d] font-bold text-xs">
              VERIFIED BUSINESS CREDENTIALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0B1722] font-bold mt-2 tracking-tight">
              A Real Storefront Backed by 35+ Years of Service
            </h2>
            <p className="text-sm sm:text-base text-[#54606d] mt-2 leading-relaxed">
              Serving households, vehicle owners, and commercial enterprises across Ramanathapuram and coastal Tamil Nadu with authentic factory-warranted energy hardware.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-[#647384] font-mono text-xs bg-white px-3 py-1.5 rounded-lg border border-[#E1E7ED] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
            <span>RAMANATHAPURAM HQ • EST. 1989</span>
          </div>
        </div>

        {/* 4-Column Clean Credential Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E1E7ED] hover:border-slate-300 transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[#647384] uppercase text-[11px] font-semibold tracking-wider">
                    {cred.category}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cred.badgeColor}`}>
                    <cred.icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1722] tracking-tight my-1">
                  {cred.value}
                </div>

                <h3 className="text-sm font-bold text-[#17212B]">
                  {cred.label}
                </h3>
              </div>

              <p className="text-xs text-[#54606d] mt-4 pt-3 border-t border-[#F1F5F9] leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
