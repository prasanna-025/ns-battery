'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, MapPin, Phone } from 'lucide-react';

export default function SolarShowcaseSplit() {
  const whyPoints = [
    {
      icon: 'zap',
      title: 'Complete Energy Solutions',
      desc: 'Solar, batteries, inverters, UPS and more — all under one roof.',
    },
    {
      icon: 'shield',
      title: 'Expert Guidance',
      desc: 'We deal with leading and reliable brands.',
    },
    {
      icon: 'users',
      title: 'Trusted Brands',
      desc: 'Get the right solution for your needs.',
    },
    {
      icon: 'map',
      title: 'Local Support',
      desc: 'Proudly serving Ramanathapuram and nearby areas.',
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFC] py-14 sm:py-20 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 (Left): Dark Forest Green "Why Choose NS Batteries?" matching Solar1.png */}
          <div className="bg-[#032b21] rounded-2xl p-7 sm:p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why Choose NS Batteries?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5">
                  <div className="w-9 h-9 rounded-full border border-emerald-500/50 flex items-center justify-center text-[#22c55e] mb-2">
                    <span className="text-sm font-bold">⚡</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Complete Energy Solutions</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">Solar, batteries, inverters, UPS and more — all under one roof.</p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-9 h-9 rounded-full border border-emerald-500/50 flex items-center justify-center text-[#22c55e] mb-2">
                    <span className="text-sm font-bold">🛡️</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Expert Guidance</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">We deal with leading and reliable brands.</p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-9 h-9 rounded-full border border-emerald-500/50 flex items-center justify-center text-[#22c55e] mb-2">
                    <span className="text-sm font-bold">👥</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Trusted Brands</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">Get the right solution for your needs.</p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-9 h-9 rounded-full border border-emerald-500/50 flex items-center justify-center text-[#22c55e] mb-2">
                    <span className="text-sm font-bold">📍</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Local Support</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">Proudly serving Ramanathapuram and nearby areas.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#86efac] hover:text-white transition-colors"
              >
                <span>Read our full company story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2 (Center): Storefront Photo with Location Card matching Solar1.png */}
          <div className="bg-white rounded-2xl border border-[#E1E7ED] overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="relative w-full h-56 sm:h-64 bg-slate-100">
              <Image
                src="/images/solar1_crops/store_showcase.jpg"
                alt="NS Batteries Storefront at AKB Complex, GH Road, Ramanathapuram"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#16a34a]">
                  VISIT OUR SHOWROOM
                </span>
                <h4 className="text-base font-bold text-[#0B1722]">
                  Flagship Store in Ramanathapuram
                </h4>
              </div>

              <div className="space-y-2 text-xs text-[#54606d]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>21/20, AKB Complex, Ground Floor, Lathams Bangalow GH Road, Ramanathapuram – 623501</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>88701 20911 / 95145 20911</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#0B1722] bg-[#F5F7FA] hover:bg-[#E1E7ED] border border-[#CBD5E1] transition-all hover:scale-[1.02] active:scale-105"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 (Right): "Powering Homes, Businesses and a Greener Future" matching Solar1.png */}
          <div className="bg-white rounded-2xl border border-[#E1E7ED] p-7 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1722] tracking-tight leading-tight">
                Powering Homes, Businesses and a Greener Future
              </h3>
              <p className="text-xs sm:text-sm text-[#54606d] leading-relaxed max-w-sm">
                NS Batteries is a trusted name in power solutions, offering high-quality products and expert support for homes, businesses and industries. We help you stay powered — today and tomorrow.
              </p>
            </div>

            <div className="pt-6 mt-6 relative z-10 flex items-center justify-between">
              <Link
                href="/solar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-xs bg-[#16a34a] hover:bg-[#15803d] transition-all hover:scale-105 active:scale-110 shadow-sm"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Background Solar Array Graphic from Solar1.png */}
            <div className="absolute right-0 bottom-0 w-3/4 h-48 opacity-90 pointer-events-none">
              <Image
                src="/images/solar1_crops/solar_leaf_bg.jpg"
                alt="Solar Panels & Green Leaf Graphic"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
