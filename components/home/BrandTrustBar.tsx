'use client';

import React from 'react';
import Image from 'next/image';

const BRANDS = [
  { name: 'Luminous', logo: '/images/solar1_crops/logo_luminous.png', width: 110, height: 32 },
  { name: 'Powerzone', logo: '/images/solar1_crops/logo_powerzone.png', width: 130, height: 30 },
  { name: 'UTL Solar', logo: '/images/solar1_crops/logo_utl.png', width: 105, height: 32 },
  { name: 'Gulf Oil', logo: '/images/solar1_crops/logo_gulf.png', width: 68, height: 36 },
  { name: 'SKF', logo: '/images/solar1_crops/logo_skf.png', width: 95, height: 28 },
];

export default function BrandTrustBar() {
  return (
    <section className="w-full bg-white py-5 sm:py-6 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand Logos Exact from Solar1.png */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-14">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="relative h-7 sm:h-8 flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain h-6 sm:h-7 w-auto"
                />
              </div>
            ))}
          </div>

          {/* Right Slogan Matching Solar1.png */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-[#54606d] border-t lg:border-t-0 lg:border-l border-[#E1E7ED] pt-3 lg:pt-0 lg:pl-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#22c55e]">🍃</span>
              <span>Quality Products</span>
            </span>
            <span className="text-slate-300">|</span>
            <span>Trusted Brands</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#16a34a] font-bold">Better Energy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
