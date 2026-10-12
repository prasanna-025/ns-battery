'use client';

import React, { useState } from 'react';
import { Waves, ThermometerSun, Wind, ShieldCheck, Check, Sparkles, Anchor } from 'lucide-react';

export default function CoastalResilienceEngine() {
  const [activeTab, setActiveTab] = useState<'salt' | 'heat' | 'wind' | 'marine'>('salt');

  const pillars = {
    salt: {
      title: 'Salt-Fog Corrosion Shield (C5-M Grade)',
      tagline: 'Engineered for Coastal Ramanathapuram & Rameswaram Air',
      icon: Waves,
      color: 'text-teal-400',
      badge: 'Marine Grade C5-M',
      stats: 'Tested for 1000+ Hours ASTM B117 Salt Fog',
      desc: 'The salty sea breeze along the Palk Strait rapidly corrodes standard iron mounts and unsealed terminals. All our solar installations feature 80-micron Hot Dip Galvanized (HDG) or anodized marine-grade aluminum mounting structures with stainless steel SS304 fasteners.',
      bulletPoints: [
        'Anodized 15-micron aluminum module frames that resist salt crusting',
        'IP68 sealed solar junction boxes with bypass diodes',
        'Lead-acid and lithium terminals pre-coated with anti-oxidation compound',
        '25-year structural integrity guarantee against coastal rust',
      ],
    },
    heat: {
      title: 'Extreme 45°C Tropical Heat Endurance',
      tagline: 'Zero Thermal Throttling in Southern Tamil Nadu Summers',
      icon: ThermometerSun,
      color: 'text-amber-400',
      badge: 'Silver-X Heat Formulation',
      stats: 'Tolerates up to 55°C Ambient Operating Temp',
      desc: 'Ramanathapuram summers push roof and under-hood vehicle temperatures above 50°C. Generic batteries boil away electrolyte water within months. Our Amaron Silver-X and Luminous Tall Tubular alloys feature high-density antimony spines and patented BIC safety vents to minimize water loss.',
      bulletPoints: [
        'Silver-Amalgam alloy chemistry minimizes acid vaporization',
        'Extra tall tubular acid reservoir keeps plates submerged longer',
        'Pure sine wave inverter toroidal transformers with active whisper cooling',
        'Smart LiFePO4 BMS with dual NTC temperature sensor shutoffs',
      ],
    },
    wind: {
      title: '160 km/h Cyclone & Coastal Storm Structure',
      tagline: 'Certified Aerodynamic Rooftop Wind Load Engineering',
      icon: Wind,
      color: 'text-emerald-400',
      badge: '160 km/h Wind Rated',
      stats: 'Compliant with IS 875 Part 3 Wind Standards',
      desc: 'Coastal Tamil Nadu faces seasonal cyclones and high gusts. We do not use flimsy light-gauge sheet channels. Every solar system installed by NS Batteries utilizes heavy-duty foundation grouting and structural triangular rafters engineered for severe wind forces.',
      bulletPoints: [
        'Chemical anchor bolts grouted into RCC roof slabs without causing water leaks',
        'Optimal 12° to 15° south tilt minimizing wind drag coefficient',
        'Dual-clamp mid and end clamps with serrated lock washers',
        '100% leak-proof rubber waterproofing pads under all roof feet',
      ],
    },
    marine: {
      title: 'Mechanized Fishing Boat & Marine Fleet Support',
      tagline: 'Power & Lubrication for Coastal Fishermen Communities',
      icon: Anchor,
      color: 'text-blue-400',
      badge: 'Marine Diesel Specs',
      stats: 'Serving Rameswaram, Mandapam & Kilakarai Ports',
      desc: 'Our deep roots in Ramanathapuram include supporting hundreds of mechanized trawlers and coastal fiber boats. We supply specialized Gulf Marine Diesel engine oils, high-reserve Powerzone marine cranking batteries, and onboard solar navigation backups.',
      bulletPoints: [
        'Gulf Marine engine oils designed for high-sulphur coastal marine fuel',
        'High reserve capacity marine batteries supporting VHF radios and GPS sonars',
        'Instant counter availability for bulk barrels and 20L oil buckets',
        'Priority emergency support during morning fishing fleet departures',
      ],
    },
  };

  const current = pillars[activeTab];

  return (
    <div className="w-full bg-white border border-[#E1E7ED] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Title */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E1E7ED] text-xs font-semibold text-[#16835D] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Ramanathapuram Climate &amp; Coastal Resilience</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1722] tracking-tight">
          Engineered for Coastal Salt, Extreme Heat &amp; Monsoons
        </h2>
        <p className="text-xs sm:text-sm text-[#647384]">
          Why off-the-shelf equipment fails along the Tamil Nadu coastline, and how our specialized engineering protects your investment for 25+ years.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
        {(Object.keys(pillars) as Array<keyof typeof pillars>).map((key) => {
          const tab = pillars[key];
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 transition-all text-xs font-semibold ${
                activeTab === key
                  ? 'bg-[#16a34a] text-white border-[#16a34a] shadow-sm'
                  : 'bg-[#F5F7FA] text-[#647384] border-[#E1E7ED] hover:border-[#16a34a] hover:text-[#16a34a]'
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Details Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] border border-[#E1E7ED] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-[#16a34a] uppercase tracking-wider">
              {current.tagline}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1722]">
              {current.title}
            </h3>
            <p className="text-xs font-mono font-semibold text-[#F4B323]">
              Benchmark: {current.stats}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">
            {current.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#E1E7ED]">
            {current.bulletPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#647384]">
                <Check className="w-3.5 h-3.5 text-[#16835D] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B1722] border border-[#0B1722] text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto">
            <current.icon className="w-8 h-8" />
          </div>
          <h4 className="text-base font-bold text-white">The NS Engineering Standard</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            Every product installed or sold from our Ramanathapuram showroom is pre-inspected for coastal durability so you never suffer rust or premature failure.
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-[#16835D]">
              100% Coastal Marine Grade Guaranteed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
