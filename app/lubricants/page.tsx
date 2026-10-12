import React from 'react';
import type { Metadata } from 'next';
import { Droplets, Wrench, ShieldCheck, Check, Phone, Anchor, Truck, Car, Bike, Sparkles } from 'lucide-react';
import ProductGrid from '@/components/products/ProductGrid';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Gulf Oil Lubricants & SKF Bearings Ramanathapuram | NS Batteries',
  description:
    'Authorized Gulf Oil engine oils for bikes, cars, commercial trucks, tractors and marine fishing vessels in Ramanathapuram. Genuine SKF bearings & greases.',
};

export default function LubricantsPage() {
  const gulfDivisions = [
    {
      title: 'Two-Wheeler Oils',
      icon: Bike,
      desc: 'Gulf Pride 4T Plus 10W-30 with Oxy-Bitors for instant pick-up, smoother clutch response, and extreme engine thermal stability.',
      specs: 'JASO MA2 • API SL',
    },
    {
      title: 'Passenger Car Oils',
      icon: Car,
      desc: 'Gulf Ultrasynth X 5W-30 fully synthetic motor oil engineered for turbo-petrol and common-rail diesel engines with maximum fuel economy.',
      specs: 'API SP / SN Plus • ILSAC GF-6A',
    },
    {
      title: 'Commercial Fleet & Tractors',
      icon: Truck,
      desc: 'Gulf Superfleet Special 15W-40 heavy-duty diesel engine oil for Tata, Ashok Leyland, Mahindra and Swaraj tractors operating in intense dust and heavy haulage.',
      specs: 'API CI-4 Plus • Extended Drain',
    },
    {
      title: 'Coastal Marine Vessel Engine Oils',
      icon: Anchor,
      desc: 'Engineered specifically for Ramanathapuram and Rameswaram coastal mechanized fishing boats, trawlers, and marine gensets. Resists salt-water corrosion and high-sulphur fuels.',
      specs: 'Marine TBN Spec • Salt-Fog Protection',
    },
    {
      title: 'EcoHold AdBlue / DEF Fluid',
      icon: Sparkles,
      desc: 'High purity 32.5% aqueous urea solution meeting ISO 22241 for all BS-VI trucks, buses, and modern diesel passenger SUVs with SCR catalytic converters.',
      specs: 'ISO 22241 • DIN 70070 Certified',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl bg-[#0B1722] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-[#F4B323]">
              <Droplets className="w-4 h-4 text-[#F4B323]" />
              <span>AUTHORIZED GULF OIL & SKF DISTRIBUTOR</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              100% Genuine <span className="text-[#D9232E]">Gulf Lubricants & SKF Bearings</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We protect your engine and machinery with authentic, factory-sealed Gulf Oil lubricants and genuine SKF precision bearings. Backed by tamper-proof manufacturer seals and bulk supplies for garages, fleet operators, and coastal fishing vessels.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-emerald-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Factory Tamper-Proof Seals
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Original SKF Hologram Certified
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Bulk Fleet & Marine Barrels Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gulf Oil Application Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1722]">
            Gulf Oil Performance Divisions
          </h2>
          <p className="text-xs sm:text-sm text-[#647384]">
            Formulated to exceed rigorous OEM specifications in tropical and coastal environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gulfDivisions.map((div, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F5F7FA] border border-[#E1E7ED] flex flex-col justify-between space-y-4 hover:border-[#D9232E]/40 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E1E7ED] flex items-center justify-center text-[#D9232E]">
                    <div.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#F4B323] px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                    {div.specs}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1722]">
                  {div.title}
                </h3>

                <p className="text-xs text-[#647384] leading-relaxed">
                  {div.desc}
                </p>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello NS Batteries, I need to check price and stock for ${div.title} at your Ramanathapuram store.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#D9232E] hover:text-white text-[#D9232E] font-semibold text-xs text-center border border-[#D9232E]/30 hover:border-[#D9232E] transition-all shadow-sm"
              >
                Inquire Stock / Bulk Packs
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SKF Precision Bearings Section */}
      <section id="skf" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#F5F7FA] border border-[#E1E7ED] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E1E7ED] text-[#D9232E] text-xs font-semibold">
                <Wrench className="w-3.5 h-3.5" />
                <span>SKF Original Bearings &amp; Greases</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1722]">
                Genuine SKF Bearings: Zero Counterfeits Guarantee
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#647384] max-w-md">
              Counterfeit bearings cause catastrophic wheel lockups and motor seizures. At NS Batteries, every SKF box features an authentic verify-code hologram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-white border border-[#E1E7ED] space-y-2">
              <h4 className="text-base font-bold text-[#0B1722]">Deep Groove Ball Bearings</h4>
              <p className="text-xs text-[#647384] leading-relaxed">
                Available in 6000, 6200, and 6300 series (2RS rubber sealed &amp; 2Z metal shielded) for two-wheeler wheels, alternators, water pumps, and industrial electric motors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E1E7ED] space-y-2">
              <h4 className="text-base font-bold text-[#0B1722]">SKF LGMT 2 Multi-Purpose Grease</h4>
              <p className="text-xs text-[#647384] leading-relaxed">
                Mineral oil based, lithium soap thickened grease with exceptional rust inhibition and thermal stability from -30 °C to +120 °C. Available in 500g, 1kg, and 5kg packs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0B1722]">
            Lubricants &amp; Accessories in Stock
          </h2>
          <p className="text-xs text-[#647384]">
            Gulf engine oils, AdBlue DEF cans, and SKF grease packs ready for store pickup or delivery.
          </p>
        </div>

        <ProductGrid initialCategory="lubricants" />
      </section>
    </div>
  );
}
