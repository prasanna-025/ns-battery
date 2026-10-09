'use client';

import React, { useState } from 'react';
import { Zap, Tv, Wind, Laptop, Refrigerator, Plus, Minus, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface ApplianceItem {
  id: string;
  name: string;
  watts: number;
  icon: React.ComponentType<{ className?: string }>;
  defaultCount: number;
}

export default function ApplianceLoadBuilder() {
  const appliances: ApplianceItem[] = [
    { id: 'fans', name: 'Ceiling Fans', watts: 75, icon: Wind, defaultCount: 3 },
    { id: 'lights', name: 'LED Tube Lights', watts: 15, icon: Zap, defaultCount: 4 },
    { id: 'tv', name: 'Smart LED TV & Wi-Fi', watts: 120, icon: Tv, defaultCount: 1 },
    { id: 'laptop', name: 'Workstation / Laptops', watts: 90, icon: Laptop, defaultCount: 1 },
    { id: 'fridge', name: 'Inverter Refrigerator', watts: 250, icon: Refrigerator, defaultCount: 0 },
  ];

  const [counts, setCounts] = useState<Record<string, number>>({
    fans: 3,
    lights: 4,
    tv: 1,
    laptop: 1,
    fridge: 0,
  });

  const updateCount = (id: string, delta: number) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(10, (prev[id] || 0) + delta)),
    }));
  };

  // Total running watts
  const totalWatts = appliances.reduce((sum, item) => {
    return sum + (counts[item.id] || 0) * item.watts;
  }, 0);

  // Recommended Inverter VA (with 25% power factor margin)
  let recommendedInverterVA = 900;
  let recommendedModel = 'Luminous Zelio+ 1100 (12V)';
  if (totalWatts > 1500) {
    recommendedInverterVA = 3500;
    recommendedModel = 'UTL / Luminous 3.5kVA Heavy (48V)';
  } else if (totalWatts > 800) {
    recommendedInverterVA = 2000;
    recommendedModel = 'Luminous Cruze 2kVA (24V Dual Battery)';
  } else if (totalWatts > 550) {
    recommendedInverterVA = 1100;
    recommendedModel = 'Luminous Zelio+ 1100 / UTL Gamma Plus (12V)';
  } else {
    recommendedInverterVA = 900;
    recommendedModel = 'Luminous Eco Volt Neo 900 (12V)';
  }

  // Backup hours calculation on different battery options (assuming 85% inverter efficiency)
  // Battery watt-hours = Voltage * Ah * Depth of Discharge * Efficiency
  const calcHours = (voltage: number, ah: number, dod: number) => {
    if (totalWatts === 0) return 24;
    const usableWh = voltage * ah * dod * 0.85;
    return Number((usableWh / totalWatts).toFixed(1));
  };

  const hours150Ah = calcHours(12, 150, 0.7); // Lead acid ~70% DOD
  const hours200Ah = calcHours(12, 200, 0.7);
  const hoursLithium = calcHours(12.8, 100, 0.9); // LiFePO4 ~90% DOD

  const whatsappInquiry = `Hello NS Batteries, I calculated my home inverter load: Total ${totalWatts}W (${counts.fans} Fans, ${counts.lights} Lights, ${counts.tv} TV, ${counts.laptop} Laptop, ${counts.fridge} Fridge). Recommended: ${recommendedModel}. Please share combo pricing with battery.`;

  return (
    <div className="w-full rounded-3xl bg-gradient-to-b from-[#072515] via-[#04160c] to-[#020e06] border border-emerald-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Title */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>INTERACTIVE INVERTER SIZING & LOAD BUILDER</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Select Your Appliances & Watch Backup Time Calculate Live
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Tap the plus and minus buttons to add your home appliances. We instantly compute your total running wattage, recommend the exact Pure Sine Wave UPS, and calculate battery backup hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Appliance Counters */}
        <div className="lg:col-span-7 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {appliances.map((app) => {
              const currentCount = counts[app.id] || 0;
              const subtotal = currentCount * app.watts;

              return (
                <div
                  key={app.id}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    currentCount > 0
                      ? 'bg-[#051f11] border-emerald-400/60 shadow-md'
                      : 'bg-[#04150b]/60 border-emerald-900/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <app.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{app.name}</h4>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {app.watts}W each • <strong className="text-emerald-300">{subtotal}W</strong>
                      </p>
                    </div>
                  </div>

                  {/* Counter Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCount(app.id, -1)}
                      disabled={currentCount === 0}
                      className="w-7 h-7 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-white font-bold flex items-center justify-center disabled:opacity-30 border border-emerald-800"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-5 text-center text-sm font-bold text-white font-mono">
                      {currentCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateCount(app.id, 1)}
                      className="w-7 h-7 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold flex items-center justify-center shadow"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-[#031309] border border-emerald-950 text-xs text-slate-400 flex items-center justify-between">
            <span>Total Connected Wattage:</span>
            <span className="text-lg font-mono font-extrabold text-amber-300">
              {totalWatts} Watts
            </span>
          </div>
        </div>

        {/* Right Column: Inverter & Backup Hours Recommendation Box */}
        <div className="lg:col-span-5 bg-[#03140a] p-6 sm:p-7 rounded-2xl border border-emerald-500/30 space-y-5 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
              RECOMMENDED INVERTER MODEL
            </span>
            <h3 className="text-xl font-bold text-white">{recommendedModel}</h3>
            <p className="text-xs text-emerald-300 font-medium">
              Pure Sine Wave • 100% Protection for Smart TV & Laptops
            </p>
          </div>

          {/* Backup Duration Comparison Matrix */}
          <div className="space-y-2 pt-2 border-t border-emerald-950">
            <span className="text-xs font-bold text-slate-300 block mb-1">
              Estimated Backup Duration by Battery Choice:
            </span>

            {/* 150Ah */}
            <div className="p-3 rounded-xl bg-[#061d10] border border-emerald-900/60 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white">150Ah Tall Tubular (Luminous RC18000)</p>
                <p className="text-[10px] text-slate-400">Standard residential option</p>
              </div>
              <span className="text-base font-bold text-emerald-300 font-mono">
                ~{hours150Ah} hrs
              </span>
            </div>

            {/* 200Ah */}
            <div className="p-3 rounded-xl bg-[#061d10] border border-emerald-900/60 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white">200Ah Heavy Tubular (Powerzone / Luminous)</p>
                <p className="text-[10px] text-slate-400">Extended monsoon backup</p>
              </div>
              <span className="text-base font-bold text-amber-300 font-mono">
                ~{hours200Ah} hrs
              </span>
            </div>

            {/* Lithium LiFePO4 */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950 to-teal-950 border border-teal-500/40 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-teal-300">100Ah LiFePO4 Lithium (Wall Mount)</p>
                <p className="text-[10px] text-slate-300">3x longer life • Fast 2hr recharge</p>
              </div>
              <span className="text-base font-bold text-teal-300 font-mono">
                ~{hoursLithium} hrs
              </span>
            </div>
          </div>

          {/* WhatsApp Action Button */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappInquiry)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 hover:from-emerald-300 hover:to-amber-200 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-950" />
            <span>Get Official Inverter & Battery Combo Price</span>
          </a>
        </div>
      </div>
    </div>
  );
}
