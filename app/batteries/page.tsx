import React from 'react';
import type { Metadata } from 'next';
import { Battery, Bike, Car, Truck, Zap, ShieldCheck, Phone, CheckCircle2, RefreshCw } from 'lucide-react';
import BatteryFinder from '@/components/batteries/BatteryFinder';
import ProductGrid from '@/components/products/ProductGrid';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Automobile & Inverter Batteries Ramanathapuram | NS Batteries',
  description:
    'Authorized Amaron, Powerzone and Luminous battery dealer in Ramanathapuram. Two-wheeler, car, truck, tractor, inverter tall tubular and LiFePO4 lithium batteries with instant on-site replacement.',
};

export default function BatteriesPage() {
  return (
    <div className="space-y-16 sm:space-y-20 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#062413] via-[#09351c] to-[#04150b] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Battery className="w-4 h-4 text-emerald-400" />
              <span>AUTHORIZED OEM BATTERY SPECIALIST • RAMANATHAPURAM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              High-Cranking Power for <span className="text-emerald-400">Every Vehicle & Backup Need</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Never get stranded. We stock factory-sealed, 100% genuine batteries from Amaron, Powerzone, and Luminous with digital warranty registration, instant load testing, and doorstep replacement across Ramanathapuram.
            </p>

            {/* Quick Metrics */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-emerald-900/60 max-w-2xl text-xs">
              <div>
                <p className="font-bold text-white text-base">Up to 60 Mos</p>
                <p className="text-emerald-400">Manufacturer Warranty</p>
              </div>
              <div>
                <p className="font-bold text-white text-base">Silver X Alloy</p>
                <p className="text-slate-300">High Heat Resistance</p>
              </div>
              <div>
                <p className="font-bold text-white text-base">Zero Acid Leaks</p>
                <p className="text-emerald-400">Factory Charged VRLA</p>
              </div>
              <div>
                <p className="font-bold text-white text-base">Old Battery Exchange</p>
                <p className="text-amber-400">Best Scrap Value Rebate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intelligent Battery Finder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <BatteryFinder />
      </section>

      {/* 3. Old Battery Exchange / Rebate Explainer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#061d10] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" />
              ECO-FRIENDLY LEAD RECYCLING & SCRAP REBATE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Get Maximum Value for Your Old Dead Battery
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Bring your scrap bike, car, or inverter battery to our counter. We calculate instant credit against your new purchase and send the old lead for certified green smelting.
            </p>
          </div>

          <a
            href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs shrink-0 flex items-center gap-2 transition-colors shadow"
          >
            <Phone className="w-4 h-4" />
            <span>Check Scrap Rebate Value</span>
          </a>
        </div>
      </section>

      {/* 4. Complete Battery Products Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">
            Explore All Batteries in Stock
          </h2>
          <p className="text-xs text-slate-400">
            Automobile, tall tubular inverter, and LiFePO4 lithium batteries ready for immediate Ramanathapuram delivery.
          </p>
        </div>

        <ProductGrid initialCategory="automobile" />
      </section>
    </div>
  );
}
