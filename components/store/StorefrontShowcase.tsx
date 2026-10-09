'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck, CheckCircle2, ChevronRight, Store } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function StorefrontShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: 'Automobile Batteries',
      brand: 'Amaron & Powerzone',
      desc: 'Factory fresh, high-cranking batteries for bikes, cars, commercial trucks, and tractors with quick on-site testing.',
    },
    {
      title: 'Inverter Batteries',
      brand: 'Luminous & Powerzone',
      desc: 'Heavy tall tubular batteries offering deep cycle backup for homes, shops, and clinics.',
    },
    {
      title: 'Solar Solutions',
      brand: 'UTL & NS Solar',
      desc: 'Rooftop solar panels, rMPPT solar inverters, and high-efficiency lithium LiFePO4 storage packs.',
    },
    {
      title: 'Gulf Oil & SKF',
      brand: 'Gulf Oil & SKF Bearings',
      desc: '100% genuine Gulf engine oils (bike, car, truck, marine vessel) plus original SKF precision bearings & greases.',
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#061e11] to-[#031309] border border-emerald-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden relative">
      {/* Header */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <Store className="w-3.5 h-3.5 text-emerald-400" />
          <span>VISIT OUR FLAGSHIP STORE IN RAMANATHAPURAM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Walk In to NS Batteries — Ramanathapuram
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Experience personal guidance, instant battery health check-ups, and live demonstrations of solar inverters at our central Ramanathapuram store.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: High-Res Storefront Image with Glow & Overlay */}
        <div className="lg:col-span-7 relative group">
          <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl shadow-black/80 bg-black">
            <Image
              src="/images/storefront.jpg"
              alt="NS Batteries Storefront - Ramanathapuram"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating Banner on Image */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#04160c]/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-white">Open Today</span>
                <span className="text-emerald-300 hidden sm:inline">• 8:30 AM to 9:00 PM</span>
              </div>
              <a
                href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-white font-semibold underline text-xs"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Store Pillars & Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Interactive Division Pillars */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Explore Store Divisions
            </h3>
            <div className="space-y-2">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    activeTab === idx
                      ? 'bg-emerald-950/90 border-emerald-400 shadow-md'
                      : 'bg-[#05180e]/60 border-emerald-900/40 hover:border-emerald-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-900/40 border border-emerald-500/20">
                      {item.brand}
                    </span>
                  </div>
                  {activeTab === idx && (
                    <p className="text-xs text-slate-300 mt-2 pl-3.5 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact Block */}
          <div className="p-4 rounded-xl bg-[#04160c] border border-emerald-500/30 space-y-3">
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">{COMPANY_INFO.address}</p>
                <p className="text-emerald-400/90 text-[11px]">{COMPANY_INFO.landmark}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-900/60 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 block">Direct Store Lines</span>
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <a href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`} className="hover:text-emerald-400">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <span>/</span>
                  <a href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`} className="hover:text-emerald-400">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
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
