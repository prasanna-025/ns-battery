'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SolarShowcaseSplit() {
  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-14 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1 (Left): Why Choose NS Batteries */}
          <div className="bg-[#012b21] rounded-2xl overflow-hidden shadow-sm relative min-h-[340px] flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[340px]">
              <Image
                src="/images/solar1_crops/exact_c1_why.jpg"
                alt="Why Choose NS Batteries"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Card 2 (Center): Storefront Photo + Address */}
          <Link
            href="/contact"
            className="bg-white rounded-2xl overflow-hidden border border-[#E1E7ED] shadow-sm hover:shadow-md transition-shadow relative min-h-[340px] flex flex-col justify-between group"
          >
            <div className="relative w-full h-full min-h-[340px]">
              <Image
                src="/images/solar1_crops/exact_c2_store.jpg"
                alt="NS Batteries Storefront at Ramanathapuram"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Card 3 (Right): Powering Homes, Businesses and a Greener Future */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E1E7ED] shadow-sm relative min-h-[340px] flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[340px]">
              <Image
                src="/images/solar1_crops/exact_c3_homes.jpg"
                alt="Powering Homes, Businesses and a Greener Future"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
              {/* Clickable Learn More button over the image button */}
              <div className="absolute left-6 top-[182px] sm:top-[190px]">
                <Link
                  href="/solar"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium text-xs bg-[#22c55e] hover:bg-[#16a34a] shadow-sm transition-all hover:scale-105 active:scale-110"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
