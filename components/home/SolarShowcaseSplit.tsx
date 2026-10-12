'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, MapPin, Phone } from 'lucide-react';

export default function SolarShowcaseSplit() {
  const whyPoints = [
    {
      title: 'Complete Energy Solutions',
      desc: 'Rooftop solar, inverters, deep-cycle batteries, and automotive storage under one roof.',
    },
    {
      title: 'Expert Guidance',
      desc: '37+ years of certified technical sizing, site surveys, and hassle-free subsidy claims.',
    },
    {
      title: 'Trusted Brands',
      desc: 'Authorized dealership for Amaron, Powerzone, Luminous, UTL, Gulf Oil & SKF.',
    },
    {
      title: 'Local Support',
      desc: 'Dedicated walk-in showroom, on-site installation, and doorstep battery assistance.',
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFC] py-14 sm:py-20 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 (Left): Dark Forest Green "Why Choose NS Batteries?" matching Solar1.png */}
          <div className="bg-[#032b21] rounded-2xl p-7 sm:p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#86efac]">
                  WHY CHOOSE US
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  Why Choose NS Batteries?
                </h3>
              </div>

              <div className="space-y-5">
                {whyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
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
                src="/images/storefront.jpg"
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
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#16a34a]">
                SUSTAINABLE ENERGY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1722] tracking-tight leading-tight">
                Powering Homes, Businesses and a Greener Future
              </h3>
              <p className="text-xs sm:text-sm text-[#54606d] leading-relaxed">
                From residential rooftop solar panel installations eligible for up to ₹78,000 PM Surya Ghar government subsidies, to industrial multi-kVA pure sine wave inverters and commercial heavy-duty batteries.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E1E7ED] flex items-center justify-between">
              <Link
                href="/solar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-xs bg-[#16a34a] hover:bg-[#15803d] transition-all hover:scale-105 active:scale-110 shadow-sm"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <span className="text-[11px] font-mono text-[#647384]">
                Govt. Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
