'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/company';

export default function CompanyJourney() {
  const [active, setActive] = useState(0);
  const journey = COMPANY_INFO.journey;
  const current = journey[active];

  return (
    <section className="py-16 sm:py-24 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 space-y-3 max-w-3xl">
          <div className="text-xs font-bold text-red-500 uppercase tracking-widest">
            OUR JOURNEY — FROM 1989 TO THE FUTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            37 Years of Trust, Growth &<br className="hidden sm:block" />{' '}
            <span className="text-slate-400">Industry Leadership.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            From a single automobile electrical workshop in Ramanathapuram to the region's most trusted multi-category energy and automotive products business.
          </p>
        </div>

        {/* Desktop: Timeline rail + spotlight */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
          {/* Left: Year Navigation Rail */}
          <div className="col-span-3 space-y-1">
            {journey.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => setActive(idx)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                  active === idx
                    ? 'bg-red-600/15 border border-red-500/30 text-white'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className={`text-xs font-mono font-bold ${active === idx ? 'text-red-500' : 'text-slate-600'}`}>
                  {item.year}
                </div>
                <div className="text-sm font-medium mt-0.5 leading-snug line-clamp-1">
                  {item.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Spotlight Panel */}
          <div className="col-span-9">
            <div className="rounded-3xl overflow-hidden bg-[#0c1017] border border-white/10">
              {/* Image */}
              <div className="relative h-72 w-full">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 70vw, 800px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/30 to-transparent" />
                {/* Year badge floating over image */}
                <div className="absolute bottom-5 left-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/90 backdrop-blur-sm text-white font-bold text-sm">
                    {current.year}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {current.desc}
                </p>

                {/* Progress indicator */}
                <div className="pt-4 flex items-center gap-2">
                  {journey.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActive(idx)}
                      className={`h-1 rounded-full transition-all ${
                        idx === active ? 'w-8 bg-red-500' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-3 mt-4 justify-end">
              <button
                onClick={() => setActive(Math.max(0, active - 1))}
                disabled={active === 0}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              <span className="text-xs text-slate-500 font-mono">
                {active + 1} / {journey.length}
              </span>
              <button
                onClick={() => setActive(Math.min(journey.length - 1, active + 1))}
                disabled={active === journey.length - 1}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical scroll timeline */}
        <div className="lg:hidden space-y-6">
          {journey.map((item, idx) => (
            <div
              key={item.year}
              className="flex gap-4"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                  idx <= 4 ? 'bg-red-600 text-white' : 'bg-[#1a2133] text-slate-400 border border-white/10'
                }`}>
                  {idx + 1}
                </div>
                {idx < journey.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 mt-1" />
                )}
              </div>

              {/* Content card */}
              <div className="pb-6 flex-1">
                <div className="rounded-2xl overflow-hidden bg-[#0c1017] border border-white/10">
                  <div className="relative h-44 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-red-600/90 text-white font-bold text-xs">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
