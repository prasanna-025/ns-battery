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
    image: '/images/solar1_crops/cat_1.jpg',
    href: '/batteries',
  },
  {
    id: 'solar-solutions',
    title: 'Solar Solutions',
    image: '/images/solar1_crops/cat_2.jpg',
    href: '/solar',
  },
  {
    id: 'inverter-batteries',
    title: 'Inverter Batteries',
    image: '/images/solar1_crops/cat_3.jpg',
    href: '/batteries',
  },
  {
    id: 'inverters-ups',
    title: 'Inverters & UPS',
    image: '/images/solar1_crops/cat_4.jpg',
    href: '/inverters',
  },
  {
    id: 'solar-batteries',
    title: 'Solar Batteries',
    image: '/images/solar1_crops/cat_5.jpg',
    href: '/solar',
  },
  {
    id: 'lubricants',
    title: 'Lubricants',
    image: '/images/solar1_crops/cat_6.jpg',
    href: '/lubricants',
  },
  {
    id: 'skf-accessories',
    title: 'SKF / Accessories',
    image: '/images/solar1_crops/cat_7.jpg',
    href: '/lubricants',
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-12 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Category Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group bg-white rounded-xl border border-[#e2e8f0] p-2.5 flex flex-col justify-between hover:shadow-md hover:border-[#22c55e] transition-all duration-300"
            >
              {/* Product Thumbnail Container with rounded top */}
              <div className="w-full h-24 sm:h-28 relative rounded-lg overflow-hidden bg-slate-50 mb-2.5">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 180px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Circular Arrow aligned bottom */}
              <div className="flex items-center justify-between gap-1 pt-1">
                <h3 className="text-xs font-bold text-[#0B1722] leading-tight line-clamp-2">
                  {cat.title}
                </h3>

                <div className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] text-slate-500 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
