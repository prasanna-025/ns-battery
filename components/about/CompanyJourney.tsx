'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/company';

export default function CompanyJourney() {
  const [active, setActive] = useState(0);
  const journey = COMPANY_INFO.journey;
  const current = journey[active];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#D9232E]">
            OUR JOURNEY — FROM 1989 TO THE FUTURE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
            37 Years of Trust, Growth & Industry Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#647384] leading-relaxed max-w-2xl">
            From a single automobile electrical workshop in Ramanathapuram to the region's most trusted multi-category energy and automotive products business.
          </p>
        </div>

        {/* Desktop: Timeline rail + spotlight */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left: Year Navigation Rail */}
          <div className="col-span-4 space-y-1.5">
            {journey.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => setActive(idx)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  active === idx
                    ? 'bg-[#F5F7FA] border-l-4 border-[#D9232E] shadow-sm text-[#0B1722]'
                    : 'text-[#647384] hover:text-[#0B1722] hover:bg-[#F8FAFC]'
                }`}
              >
                <div className={`text-xs font-mono font-bold ${active === idx ? 'text-[#D9232E]' : 'text-[#647384]'}`}>
                  {item.year}
                </div>
                <div className="text-sm font-semibold mt-0.5 leading-snug line-clamp-1">
                  {item.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Spotlight Panel */}
          <div className="col-span-8">
            <div className="rounded-2xl overflow-hidden bg-[#F5F7FA] border border-[#E1E7ED] shadow-sm">
              {/* Image */}
              <div className="relative h-80 w-full bg-white">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 70vw, 800px"
                  unoptimized
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-md bg-[#0B1722]/90 text-white font-bold text-xs shadow-sm">
                    {current.year} Milestone
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-[#0B1722]">
                  {current.title}
                </h3>
                <p className="text-[#647384] text-sm leading-relaxed">
                  {current.desc}
                </p>

                {/* Progress indicator */}
                <div className="pt-4 flex items-center justify-between border-t border-[#E1E7ED]">
                  <div className="flex items-center gap-1.5">
                    {journey.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActive(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === active ? 'w-6 bg-[#D9232E]' : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActive(Math.max(0, active - 1))}
                      disabled={active === 0}
                      className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 border border-[#E1E7ED] text-xs font-semibold text-[#0B1722] disabled:opacity-40"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActive(Math.min(journey.length - 1, active + 1))}
                      disabled={active === journey.length - 1}
                      className="px-3 py-1.5 rounded bg-[#0B1722] hover:bg-[#122333] text-white text-xs font-semibold disabled:opacity-40"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical scroll timeline */}
        <div className="lg:hidden space-y-4">
          {journey.map((item, idx) => (
            <div
              key={item.year}
              className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] space-y-3"
            >
              <div className="relative h-44 w-full rounded-lg overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  unoptimized
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#0B1722]/90 text-white font-bold text-xs">
                    {item.year}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0B1722]">{item.title}</h3>
                <p className="text-xs text-[#647384] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
