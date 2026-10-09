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
    <div className="w-full rounded-3xl bg-[#0b0f17] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-10 space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400">
          <Store className="w-3.5 h-3.5 text-red-500" />
          <span>VISIT OUR FLAGSHIP STORE IN RAMANATHAPURAM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Walk In to NS Batteries — Ramanathapuram
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Experience personal guidance, instant battery health check-ups, and live demonstrations of solar inverters at our central Ramanathapuram flagship store.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: High-Res Storefront Image with Framing */}
        <div className="lg:col-span-7 relative group">
          <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#07090e]">
            <Image
              src="/images/storefront.jpg"
              alt="NS Batteries Storefront - Ramanathapuram"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating Banner on Image */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0b0f17]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-white">Open Today</span>
                <span className="text-slate-400 hidden sm:inline">• 8:30 AM to 9:00 PM</span>
              </div>
              <a
                href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-400 hover:text-white font-semibold underline text-xs transition-colors"
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500">
              Explore Store Divisions
            </h3>
            <div className="space-y-2">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    activeTab === idx
                      ? 'bg-red-500/10 border-red-500/40 shadow-lg'
                      : 'bg-[#101522] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-red-500' : 'bg-slate-600'}`} />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <span className="text-[10px] text-red-400 font-semibold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">
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
          <div className="p-4 rounded-xl bg-[#101522] border border-white/10 space-y-3">
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">{COMPANY_INFO.address}</p>
                <p className="text-slate-400 text-[11px]">{COMPANY_INFO.landmark}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 block">Direct Store Lines</span>
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <a href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`} className="hover:text-red-400 transition-colors">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <span className="text-slate-600">/</span>
                  <a href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`} className="hover:text-red-400 transition-colors">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
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
