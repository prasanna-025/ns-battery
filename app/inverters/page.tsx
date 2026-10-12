import React from 'react';
import type { Metadata } from 'next';
import { Zap, ShieldCheck, Check, Phone, ArrowRight, Laptop, Tv, Wind, Refrigerator, Clock } from 'lucide-react';
import ApplianceLoadBuilder from '@/components/interactive/ApplianceLoadBuilder';
import ProductGrid from '@/components/products/ProductGrid';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Inverters & Solar PCU Ramanathapuram | NS Batteries',
  description:
    'Luminous and UTL pure sine wave inverters, home UPS and rMPPT solar PCUs in Ramanathapuram. Silent operation and protection for delicate home appliances.',
};

export default function InvertersPage() {
  const loadEstimates = [
    {
      appliance: 'LED Lights (x4)',
      power: '40 Watts',
      icon: Zap,
    },
    {
      appliance: 'Ceiling Fans (x3)',
      power: '225 Watts',
      icon: Wind,
    },
    {
      appliance: 'Smart LED TV & Wi-Fi',
      power: '120 Watts',
      icon: Tv,
    },
    {
      appliance: 'Laptop & Phone Chargers',
      power: '90 Watts',
      icon: Laptop,
    },
    {
      appliance: 'Inverter Refrigerator (Optional)',
      power: '250 Watts',
      icon: Refrigerator,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl bg-[#0B1722] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-[#F4B323]">
              <Zap className="w-4 h-4 text-[#F4B323]" />
              <span>PURE SINE WAVE HOME UPS & SOLAR PCU</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Silent, Flicker-Free <span className="text-[#16a34a]">Power Backup for Your Family</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Say goodbye to noisy fan humming, sudden TV reboots, and damaged appliance motherboards. We supply advanced Pure Sine Wave Home UPS from Luminous and patented rMPPT Solar PCUs from UTL with digital remaining-time displays.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Check className="w-4 h-4 text-emerald-400" /> 100% Pure Sine Wave
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Check className="w-4 h-4 text-emerald-400" /> Safe for Medical & IT Equipment
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Check className="w-4 h-4 text-emerald-400" /> Ultra-Fast &lt;10ms Switchover
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Appliance Load Builder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ApplianceLoadBuilder />
      </section>

      {/* 3. Sine Wave vs Square Wave Quality Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] border border-[#16835D]/30 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#16835D]">Pure Sine Wave (Recommended)</h3>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#16835D] border border-emerald-200 text-[10px] font-bold">NS Standard</span>
            </div>
            <p className="text-xs text-[#647384] leading-relaxed">
              Identical to the clean grid power supplied by TANGEDCO. Smooth sinusoidal oscillation prevents motor overheating, eliminates buzzing noise in fans, and keeps televisions and computer monitors completely flicker-free.
            </p>
            <ul className="space-y-1.5 text-xs text-[#647384] pt-2 border-t border-[#E1E7ED]">
              <li className="flex items-center gap-2 text-[#16835D]">✓ Completely silent operation</li>
              <li className="flex items-center gap-2 text-[#16835D]">✓ Preserves motor lifespan of fans and refrigerators</li>
              <li className="flex items-center gap-2 text-[#16835D]">✓ Zero risk to sensitive laptops and LED screens</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] border border-[#16a34a]/30 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#16a34a]">Generic Square / Quasi Wave</h3>
              <span className="px-2 py-0.5 rounded bg-red-50 text-[#16a34a] border border-red-200 text-[10px] font-bold">Old Technology</span>
            </div>
            <p className="text-xs text-[#647384] leading-relaxed">
              Crude step-voltage outputs that inject heavy harmonic distortion into household wiring. Often leads to hot fan bearings, high buzzing sound, and premature motherboard failure in modern smart appliances.
            </p>
            <ul className="space-y-1.5 text-xs text-[#647384] pt-2 border-t border-[#E1E7ED]">
              <li className="flex items-center gap-2 text-[#16a34a]">✗ Annoying buzzing hum from ceiling fans</li>
              <li className="flex items-center gap-2 text-[#16a34a]">✗ Causes excessive heat in AC motor windings</li>
              <li className="flex items-center gap-2 text-[#16a34a]">✗ Not recommended for modern electronic appliances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Products Catalog filtered to Inverters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0B1722]">
            Inverters &amp; Solar PCU Models in Stock
          </h2>
          <p className="text-xs text-[#647384]">
            Luminous Zelio+, Cruze, and UTL Gamma Plus rMPPT systems available at our counter.
          </p>
        </div>

        <ProductGrid initialCategory="inverter" />
      </section>
    </div>
  );
}
