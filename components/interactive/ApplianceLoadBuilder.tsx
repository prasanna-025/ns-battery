'use client';

import React, { useState } from 'react';
import { Zap, Tv, Wind, Laptop, Refrigerator, Plus, Minus, MessageCircle } from 'lucide-react';
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

  const totalWatts = appliances.reduce((sum, item) => {
    return sum + (counts[item.id] || 0) * item.watts;
  }, 0);

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

  const calcHours = (voltage: number, ah: number, dod: number) => {
    if (totalWatts === 0) return 24;
    const usableWh = voltage * ah * dod * 0.85;
    return Number((usableWh / totalWatts).toFixed(1));
  };

  const hours150Ah = calcHours(12, 150, 0.7);
  const hours200Ah = calcHours(12, 200, 0.7);
  const hoursLithium = calcHours(12.8, 100, 0.9);

  const whatsappInquiry = `Hello NS Batteries, I calculated my home inverter load: Total ${totalWatts}W (${counts.fans} Fans, ${counts.lights} Lights, ${counts.tv} TV, ${counts.laptop} Laptop, ${counts.fridge} Fridge). Recommended: ${recommendedModel}. Please share combo pricing with battery.`;

  return (
    <div className="w-full bg-white border border-[#E1E7ED] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Header */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E1E7ED] text-xs font-semibold text-[#D9232E] uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>Inverter Sizing Tool</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1722] tracking-tight">
          Select Your Appliances &amp; Calculate Backup Time
        </h2>
        <p className="text-[#647384] text-sm sm:text-base leading-relaxed">
          Add your home appliances using the controls below. We instantly compute your total wattage, recommend the right inverter, and calculate battery backup hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Appliance Counters */}
        <div className="lg:col-span-7 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {appliances.map((app) => {
              const currentCount = counts[app.id] || 0;
              const subtotal = currentCount * app.watts;

              return (
                <div
                  key={app.id}
                  className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                    currentCount > 0
                      ? 'bg-white border-[#D9232E]/30 shadow-sm'
                      : 'bg-[#F5F7FA] border-[#E1E7ED]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] flex items-center justify-center text-[#D9232E]">
                      <app.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#0B1722]">{app.name}</h4>
                      <p className="text-[11px] text-[#647384] font-mono">
                        {app.watts}W each •{' '}
                        <strong className="text-[#D9232E]">{subtotal}W</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCount(app.id, -1)}
                      disabled={currentCount === 0}
                      className="w-7 h-7 rounded-lg bg-[#F5F7FA] hover:bg-[#E1E7ED] text-[#0B1722] font-bold flex items-center justify-center disabled:opacity-30 border border-[#E1E7ED] transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-5 text-center text-sm font-bold text-[#0B1722] font-mono">
                      {currentCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateCount(app.id, 1)}
                      className="w-7 h-7 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white font-bold flex items-center justify-center shadow-sm transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B1722] border border-[#0B1722] text-xs flex items-center justify-between">
            <span className="text-white/70">Total Connected Wattage:</span>
            <span className="text-lg font-mono font-extrabold text-[#F4B323]">
              {totalWatts} Watts
            </span>
          </div>
        </div>

        {/* Right: Recommendation Box */}
        <div className="lg:col-span-5 bg-[#F5F7FA] p-6 sm:p-7 rounded-2xl border border-[#E1E7ED] space-y-5">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#D9232E] uppercase tracking-wider">
              Recommended Inverter
            </span>
            <h3 className="text-xl font-bold text-[#0B1722]">{recommendedModel}</h3>
            <p className="text-xs text-[#647384] font-medium">
              Pure Sine Wave • 100% Protection for Smart TV &amp; Laptops
            </p>
          </div>

          {/* Backup Duration Matrix */}
          <div className="space-y-2 pt-3 border-t border-[#E1E7ED]">
            <span className="text-xs font-semibold text-[#0B1722] block mb-2">
              Estimated Backup by Battery Choice:
            </span>

            <div className="p-3 rounded-xl bg-white border border-[#E1E7ED] flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-[#0B1722]">150Ah Tall Tubular (Luminous RC18000)</p>
                <p className="text-[10px] text-[#647384]">Standard residential option</p>
              </div>
              <span className="text-base font-bold text-[#0B1722] font-mono">~{hours150Ah} hrs</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#E1E7ED] flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-[#0B1722]">200Ah Heavy Tubular (Powerzone / Luminous)</p>
                <p className="text-[10px] text-[#647384]">Extended monsoon backup</p>
              </div>
              <span className="text-base font-bold text-[#F4B323] font-mono">~{hours200Ah} hrs</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0B1722] border border-[#0B1722] flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-white">100Ah LiFePO4 Lithium (Wall Mount)</p>
                <p className="text-[10px] text-white/60">3x longer life • Fast 2hr recharge</p>
              </div>
              <span className="text-base font-bold text-[#F4B323] font-mono">~{hoursLithium} hrs</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappInquiry)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#D9232E] hover:bg-[#B91F29] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get Official Inverter &amp; Battery Combo Price</span>
          </a>
        </div>
      </div>
    </div>
  );
}
