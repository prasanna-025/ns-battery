'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck, CheckCircle2, Store } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function StorefrontShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: 'Automobile Batteries',
      brand: 'Amaron & Powerzone',
      desc: 'Factory fresh, high-cranking starting batteries for bikes, cars, commercial trucks, and coastal tractors with instant health check-ups.',
    },
    {
      title: 'Inverter Batteries',
      brand: 'Luminous & Powerzone',
      desc: 'Heavy tall tubular batteries providing deep cycle backup for homes, shops, and clinics across Tamil Nadu power cuts.',
    },
    {
      title: 'Solar Solutions',
      brand: 'UTL & NS Solar',
      desc: 'Rooftop solar panels, rMPPT solar inverters, and high-efficiency lithium LiFePO4 energy storage packs.',
    },
    {
      title: 'Gulf Oil & SKF Bearings',
      brand: 'Gulf Oil & SKF',
      desc: '100% genuine Gulf engine oils (two-wheeler, four-wheeler, heavy commercial, marine) plus original SKF precision bearings and greases.',
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-[#E1E7ED] p-6 sm:p-10 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold text-[#D9232E] uppercase tracking-wider">
          <Store className="w-3.5 h-3.5" />
          <span>RAMANATHAPURAM FLAGSHIP SHOWROOM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
          Walk In to NS Batteries — Ramanathapuram
        </h2>
        <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
          Experience personal guidance, instant battery health check-ups, and live demonstrations of solar inverters at our central showroom on GH Road.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: High-Res Storefront Image */}
        <div className="lg:col-span-7 relative group">
          <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden border border-[#E1E7ED] shadow-sm bg-[#F5F7FA]">
            <Image
              src="/images/storefront.jpg"
              alt="NS Batteries Storefront - Ramanathapuram"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Bottom Floating Banner on Image */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-[#E1E7ED] shadow-md flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16835D]" />
                <span className="font-bold text-[#0B1722]">Open Today</span>
                <span className="text-[#647384] hidden sm:inline">• 8:30 AM to 9:00 PM</span>
              </div>
              <a
                href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#D9232E] hover:text-[#B91F29] font-bold text-xs transition-colors"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Store Divisions & Contact */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#647384]">
              Explore Showroom Divisions
            </h3>
            <div className="space-y-2">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                    activeTab === idx
                      ? 'bg-[#F5F7FA] border-[#D9232E]/40 shadow-sm'
                      : 'bg-white border-[#E1E7ED] hover:border-[#CBD5E1]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${activeTab === idx ? 'bg-[#D9232E]' : 'bg-slate-300'}`} />
                      <h4 className="text-sm font-bold text-[#0B1722]">{item.title}</h4>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F5F7FA] text-[#647384] border border-[#E1E7ED]">
                      {item.brand}
                    </span>
                  </div>
                  {activeTab === idx && (
                    <p className="text-xs text-[#647384] mt-2 pl-4 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Location & Quick Contact Block */}
          <div className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] space-y-3">
            <div className="flex items-start gap-2.5 text-xs text-[#17212B]">
              <MapPin className="w-4 h-4 text-[#D9232E] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#0B1722]">{COMPANY_INFO.address}</p>
                <p className="text-[#647384] text-[11px]">{COMPANY_INFO.landmark}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E1E7ED] flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] text-[#647384] block font-medium">Store Helplines:</span>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1722] font-mono">
                  <a href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`} className="hover:text-[#D9232E] transition-colors">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <span className="text-slate-300">/</span>
                  <a href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`} className="hover:text-[#D9232E] transition-colors">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
