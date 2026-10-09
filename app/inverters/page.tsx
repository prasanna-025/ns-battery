import React from 'react';
import type { Metadata } from 'next';
import { Zap, ShieldCheck, Check, Phone, ArrowRight, Laptop, Tv, Wind, Refrigerator, Clock } from 'lucide-react';
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#062413] via-[#09351c] to-[#04150b] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>PURE SINE WAVE HOME UPS & SOLAR PCU</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Silent, Flicker-Free <span className="text-emerald-400">Power Backup for Your Family</span>
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

      {/* 2. Sine Wave vs Square Wave Quality Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#061e11] border border-emerald-500/40 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-emerald-400">Pure Sine Wave (Recommended)</h3>
              <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] font-bold">NS Standard</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Identical to the clean grid power supplied by TANGEDCO. Smooth sinusoidal oscillation prevents motor overheating, eliminates buzzing noise in fans, and keeps televisions and computer monitors completely flicker-free.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-emerald-950">
              <li className="flex items-center gap-2 text-emerald-300">✓ Completely silent operation</li>
              <li className="flex items-center gap-2 text-emerald-300">✓ Preserves motor lifespan of fans and refrigerators</li>
              <li className="flex items-center gap-2 text-emerald-300">✓ Zero risk to sensitive laptops and LED screens</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#140b07] border border-red-900/40 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-red-400">Generic Square / Quasi Wave</h3>
              <span className="px-2 py-0.5 rounded bg-red-950/60 text-red-300 text-[10px] font-bold">Old Technology</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Crude step-voltage outputs that inject heavy harmonic distortion into household wiring. Often leads to hot fan bearings, high buzzing sound, and premature motherboard failure in modern smart appliances.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-red-950/60">
              <li className="flex items-center gap-2 text-red-400">✗ Annoying buzzing hum from ceiling fans</li>
              <li className="flex items-center gap-2 text-red-400">✗ Causes excessive heat in AC motor windings</li>
              <li className="flex items-center gap-2 text-red-400">✗ Not recommended for modern electronic appliances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Load Calculator Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#061d10] border border-emerald-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white">
              Typical Appliance Power Consumption
            </h2>
            <p className="text-xs text-slate-400">
              Calculate your total required wattage to choose between a 900VA (12V) or 2000VA (24V) inverter.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {loadEstimates.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#04150b] border border-emerald-950 space-y-2 text-center">
                <item.icon className="w-5 h-5 text-emerald-400 mx-auto" />
                <p className="text-xs font-bold text-white">{item.appliance}</p>
                <p className="text-xs font-mono text-amber-300 font-semibold">{item.power}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-300">
              Unsure about your exact requirement? Call our Ramanathapuram store team for a custom load calculation.
            </span>
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Talk to Inverter Specialist: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Products Catalog filtered to Inverters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">
            Inverters & Solar PCU Models in Stock
          </h2>
          <p className="text-xs text-slate-400">
            Luminous Zelio+, Cruze, and UTL Gamma Plus rMPPT systems available at our counter.
          </p>
        </div>

        <ProductGrid initialCategory="inverter" />
      </section>
    </div>
  );
}
