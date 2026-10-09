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
    <div className="w-full rounded-3xl bg-gradient-to-b from-[#072415] via-[#04160c] to-[#020e06] border border-emerald-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Title */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>RAMANATHAPURAM CLIMATE & COASTAL RESILIENCE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Engineered for Coastal Salt, Extreme Heat & Monsoons
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
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
              className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 transition-all text-xs font-bold ${
                activeTab === key
                  ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                  : 'bg-[#05180e] text-slate-300 border-emerald-900/50 hover:border-emerald-600'
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Details Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#03150b] border border-emerald-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              {current.tagline}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {current.title}
            </h3>
            <p className="text-xs font-mono font-bold text-amber-300">
              Benchmark: {current.stats}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {current.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-emerald-950">
            {current.bulletPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-[#062413] to-[#04160c] border border-emerald-500/40 text-center space-y-3 shadow-inner">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <current.icon className="w-8 h-8" />
          </div>
          <h4 className="text-base font-bold text-white">The NS Engineering Standard</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Every product installed or sold from our Ramanathapuram showroom is pre-inspected for coastal durability so you never suffer rust or premature failure.
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
              100% Coastal Marine Grade Guaranteed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
