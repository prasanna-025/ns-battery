'use client';

import React from 'react';

export default function CompanyStats() {
  const stats = [
    {
      value: '15+ Years',
      label: 'Family Heritage',
      description: 'Serving Ramanathapuram with continuous local trust and service.',
      highlight: false,
    },
    {
      value: '12,500+',
      label: 'Installations Completed',
      description: 'Homes, retail businesses, and rural farms powered reliably.',
      highlight: false,
    },
    {
      value: '1.4+ MW',
      label: 'Clean Capacity Commissioned',
      description: 'Solar rooftop and microgrid energy generation across the district.',
      highlight: true,
    },
    {
      value: '₹1.8 Cr+',
      label: 'Cumulative Bills Saved',
      description: 'Measurable energy savings returned directly to customers.',
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-14 sm:py-20 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#D9232E]">
            OUR JOURNEY IN NUMBERS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
            Built on Trust. Driven by Reliable Energy.
          </h2>
          <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
            Serving households and businesses across southern Tamil Nadu with dependable energy products and practical solar solutions.
          </p>
        </div>

        {/* 4-Column Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-xl bg-white border transition-shadow duration-200 hover:shadow-md ${
                stat.highlight ? 'border-[#D9232E]/30 relative' : 'border-[#E1E7ED]'
              }`}
            >
              {stat.highlight && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D9232E]" />
              )}
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1722] tracking-tight font-sans">
                {stat.value}
              </div>
              <h3 className="text-sm font-bold text-[#17212B] mt-2 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-[#647384] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
