'use client';

import React from 'react';
import Image from 'next/image';

const BRANDS = [
  { name: 'Luminous', logo: '/logos/luminous.svg' },
  { name: 'Powerzone', logo: '/logos/powerzone.svg' },
  { name: 'UTL Solar', logo: '/logos/utl.svg' },
  { name: 'Gulf Oil', logo: '/logos/gulf.svg' },
  { name: 'SKF', logo: '/logos/skf.svg' },
];

export default function BrandTrustBar() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand Logos */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 opacity-85 hover:opacity-100 transition-opacity">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="relative h-8 sm:h-9 w-24 sm:w-28 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Slogan Matching Solar1.png */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-[#54606d] border-t lg:border-t-0 lg:border-l border-[#E1E7ED] pt-4 lg:pt-0 lg:pl-8 text-center lg:text-left">
            <span>Quality Products</span>
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
