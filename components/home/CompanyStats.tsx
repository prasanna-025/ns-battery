'use client';

import React from 'react';

export default function CompanyStats() {
  const stats = [
    {
      category: 'ESTABLISHED LEGACY',
      value: '37+ Years',
      label: 'Family Heritage',
      description: 'Founded in 1989 on GH Road in Ramanathapuram.',
      valueColor: 'text-[#0B1722]',
    },
    {
      category: 'FIELD DEPLOYMENT',
      value: '12,500+',
      label: 'Installations Done',
      description: 'Homes, agricultural pumps & commercial hubs.',
      valueColor: 'text-[#10805a]',
    },
    {
      category: 'OEM LEADERSHIP',
      value: 'No. 1',
      label: 'Power Zone Distributor',
      description: 'South Tamil Nadu territory benchmark • FY 2023–24.',
      valueColor: 'text-[#16a34a]',
    },
    {
      category: 'CUSTOMER REALIZATION',
      value: '₹1.8 Cr+',
      label: 'Cumulative Bills Saved',
      description: 'Clean solar generation & low-loss inverters.',
      valueColor: 'text-[#F4B323]',
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-16 md:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono uppercase tracking-widest text-[#15803d] font-semibold text-xs">
              OUR JOURNEY IN NUMBERS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0B1722] font-bold mt-2 tracking-tight">
              Built on Trust. Driven by Reliable Energy.
            </h2>
            <p className="text-sm sm:text-base text-[#54606d] mt-2">
              Serving households and businesses across southern Tamil Nadu with dependable energy products and practical solar solutions.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-[#647384] font-mono text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a]" />
            AUDITED REGIONAL PERFORMANCE • 1989-2026
          </div>
        </div>

        {/* 4-Column Clean Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-[#E1E7ED] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[#647384] uppercase text-xs font-semibold">
                  {stat.category}
                </span>
                <div className={`text-3xl sm:text-4xl font-bold my-2 ${stat.valueColor}`}>
                  {stat.value}
                </div>
                <h3 className="text-base sm:text-lg text-[#17212B] font-semibold">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#54606d] mt-4 pt-4 bg-[#F5F7FA] -mx-6 -mb-6 px-6 py-3 rounded-b-xl border-t border-[#E1E7ED]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
