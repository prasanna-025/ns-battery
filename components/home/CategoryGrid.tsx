'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'automotive-batteries',
    title: 'Automotive Batteries',
    image: '/images/products/amaron_current_hi_life.png',
    href: '/batteries',
  },
  {
    id: 'solar-solutions',
    title: 'Solar Solutions',
    image: '/images/products/utl_solar_panel_330w.png',
    href: '/solar',
  },
  {
    id: 'inverter-batteries',
    title: 'Inverter Batteries',
    image: '/images/products/luminous_inverlast_150ah.png',
    href: '/batteries',
  },
  {
    id: 'inverters-ups',
    title: 'Inverters & UPS',
    image: '/images/products/luminous_zelio_1100.png',
    href: '/inverters',
  },
  {
    id: 'solar-batteries',
    title: 'Solar Batteries',
    image: '/images/products/luminous_solar_tubular_150ah.png',
    href: '/solar',
  },
  {
    id: 'lubricants',
    title: 'Lubricants',
    image: '/images/products/gulf_superfleet_turbo_15w40.png',
    href: '/lubricants',
  },
  {
    id: 'skf-accessories',
    title: 'SKF / Accessories',
    image: '/images/products/skf_deep_groove_ball_bearing.png',
    href: '/lubricants',
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-[#F5F7FA] py-12 md:py-16 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Category Cards Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group bg-white rounded-xl border border-[#E1E7ED] p-3 flex flex-col items-center justify-between text-center hover:shadow-md hover:border-[#16a34a] hover:-translate-y-1 hover:scale-[1.03] active:scale-105 transition-all duration-300"
            >
              {/* Product Thumbnail Container */}
              <div className="w-full aspect-square relative bg-[#FAFBFC] rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 150px"
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold text-[#0B1722] group-hover:text-[#16a34a] transition-colors leading-snug line-clamp-2 h-9 flex items-center justify-center">
                {cat.title}
              </h3>

              {/* Circular Arrow Button (matching Solar1.png) */}
              <div className="mt-3 w-7 h-7 rounded-full bg-[#F0FDF4] group-hover:bg-[#16a34a] text-[#16a34a] group-hover:text-white flex items-center justify-center transition-all duration-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
