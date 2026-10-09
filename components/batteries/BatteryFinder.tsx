'use client';

import React, { useState } from 'react';
import { Battery, Bike, Car, Truck, Zap, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface BatteryRecommendation {
  type: string;
  recommendedModel: string;
  brand: string;
  capacity: string;
  warranty: string;
  desc: string;
  idealFor: string;
}

export default function BatteryFinder() {
  const [vehicleType, setVehicleType] = useState<'bike' | 'car' | 'truck' | 'inverter'>('car');

  const recommendations: Record<string, BatteryRecommendation[]> = {
    bike: [
      {
        type: 'Commuter Bikes & Scooters (100cc - 125cc)',
        recommendedModel: 'Amaron Pro Rider ABR-PR-APBTZ4L',
        brand: 'Amaron',
        capacity: '4Ah (12V)',
        warranty: '48 Months Warranty',
        desc: 'VRLA maintenance-free battery with high cranking amps for instant morning self-starts.',
        idealFor: 'Hero Splendor, HF Deluxe, Honda Activa, Passion Pro, TVS Jupiter',
      },
      {
        type: 'Sports & Heavy Cruiser Motorcycles (150cc - 350cc+)',
        recommendedModel: 'Amaron Pro Rider ABR-PR-APBTZ9 / ETZ9',
        brand: 'Amaron',
        capacity: '9Ah (12V)',
        warranty: '48 Months Warranty',
        desc: 'Reinforced vibration-proof casing engineered for high compression engines and LED lighting setups.',
        idealFor: 'Royal Enfield Classic 350, Bullet, Bajaj Pulsar 220, KTM Duke, Dominar',
      },
    ],
    car: [
      {
        type: 'Compact Hatchbacks & Sedans (Petrol)',
        recommendedModel: 'Amaron FLO 42B20L / AAM-FL-00042B20L',
        brand: 'Amaron',
        capacity: '35Ah (12V)',
        warranty: '55 Months (30+25)',
        desc: 'Longest life car battery with patented BIC vents to prevent acid spewing in hot Tamil Nadu weather.',
        idealFor: 'Maruti Alto, WagonR, Swift Petrol, Hyundai i10, Celerio, Baleno',
      },
      {
        type: 'Diesel Sedans, Compact & Mid-size SUVs',
        recommendedModel: 'Amaron FLO 55B24L / Din50 / Din60',
        brand: 'Amaron / Powerzone',
        capacity: '45Ah – 65Ah (12V)',
        warranty: '55 - 60 Months Warranty',
        desc: 'High cold cranking power for instant ignition in diesel engines, supporting high auxiliary electrical loads.',
        idealFor: 'Hyundai Creta, Kia Seltos, Tata Nexon, Swift Diesel, Brezza, Honda City',
      },
      {
        type: 'Full-size SUVs & Multi-Utility Vehicles',
        recommendedModel: 'Amaron Go / Powerzone 80D26L',
        brand: 'Amaron / Powerzone',
        capacity: '65Ah – 80Ah (12V)',
        warranty: '48 - 60 Months Warranty',
        desc: 'Heavy duty silver amalgam alloy built to handle dual air-conditioning, infotainment, and high road stress.',
        idealFor: 'Toyota Innova Crysta, Fortuner, Mahindra Scorpio-N, XUV700, Safari',
      },
    ],
    truck: [
      {
        type: 'Light Commercial Vehicles (LCV) & Farm Tractors',
        recommendedModel: 'Powerzone Commercial Heavy PZC-100',
        brand: 'Powerzone',
        capacity: '100Ah (12V)',
        warranty: '36 Months Warranty',
        desc: 'Heavy cast grids and thick plate separators resisting continuous vibration on rural roads.',
        idealFor: 'Tata 407, Mahindra Bolero Maxi Truck, Swaraj 744, Tafe Tractors',
      },
      {
        type: 'Heavy Haulage Trucks, Buses & Marine Vessels',
        recommendedModel: 'Powerzone Heavy Commercial PZC-150 / PZC-180',
        brand: 'Powerzone / Exide',
        capacity: '150Ah – 180Ah (12V)',
        warranty: '36 Months Warranty',
        desc: 'Superior reserve capacity and corrosion protection for coastal logistics and mechanized fishing vessels.',
        idealFor: 'Ashok Leyland Multi-Axle, BharatBenz Trucks, Tourist Buses, Rameswaram Fishing Boats',
      },
    ],
    inverter: [
      {
        type: 'Standard 1BHK / 2BHK Home Inverter Backup',
        recommendedModel: 'Luminous Red Charge RC18000 Tall Tubular',
        brand: 'Luminous',
        capacity: '150Ah (12V)',
        warranty: '36 Months (18+18)',
        desc: 'Reliable tall tubular design delivering 4 to 8 hours backup for 3 fans, 3 LED lights, TV and router.',
        idealFor: 'Standard residential apartments and retail checkout counters',
      },
      {
        type: 'Extended Backup for 3BHK Homes, Clinics & Shops',
        recommendedModel: 'Luminous Inverlast ILTT 26060 / Powerzone 200Ah',
        brand: 'Luminous / Powerzone',
        capacity: '200Ah – 220Ah (12V)',
        warranty: '48 - 60 Months Warranty',
        desc: 'Maximum acid volume and thick spine plates engineered for prolonged power brownouts.',
        idealFor: 'Homes needing 8-12 hours backup or 24V double-battery inverter systems',
      },
      {
        type: 'Next-Gen Space-Saving Lithium LiFePO4',
        recommendedModel: 'NS LiFePO4 Smart Wall-Mount 100Ah',
        brand: 'NS Batteries',
        capacity: '100Ah (1.28 kWh) LiFePO4',
        warranty: '5-Year Replacement Warranty',
        desc: 'Wall-mounted lithium battery. 1/3rd weight, zero acid odors, fast 2-hour recharge, 3500+ cycles.',
        idealFor: 'Modern interior homes, IT workstations, and solar hybrid inverters',
      },
    ],
  };

  const currentList = recommendations[vehicleType];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#072113] to-[#04140b] border border-emerald-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Title */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <Battery className="w-3.5 h-3.5 text-emerald-400" />
          <span>INTELLIGENT BATTERY FINDER</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Find the Perfect Battery for Your Vehicle or Home
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Select your category below to view recommended OEM batteries with exact capacities, warranty periods, and vehicle fitments.
        </p>
      </div>

      {/* Category Switcher Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <button
          onClick={() => setVehicleType('car')}
          className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 transition-all text-xs sm:text-sm font-bold ${
            vehicleType === 'car'
              ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-[#051a0e] text-slate-300 border-emerald-900/50 hover:border-emerald-600'
          }`}
        >
          <Car className="w-4 h-4" />
          <span>Cars & SUVs</span>
        </button>

        <button
          onClick={() => setVehicleType('bike')}
          className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 transition-all text-xs sm:text-sm font-bold ${
            vehicleType === 'bike'
              ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-[#051a0e] text-slate-300 border-emerald-900/50 hover:border-emerald-600'
          }`}
        >
          <Bike className="w-4 h-4" />
          <span>Two-Wheelers</span>
        </button>

        <button
          onClick={() => setVehicleType('truck')}
          className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 transition-all text-xs sm:text-sm font-bold ${
            vehicleType === 'truck'
              ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-[#051a0e] text-slate-300 border-emerald-900/50 hover:border-emerald-600'
          }`}
        >
          <Truck className="w-4 h-4" />
          <span>Commercial & Marine</span>
        </button>

        <button
          onClick={() => setVehicleType('inverter')}
          className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 transition-all text-xs sm:text-sm font-bold ${
            vehicleType === 'inverter'
              ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-[#051a0e] text-slate-300 border-emerald-900/50 hover:border-emerald-600'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Inverter & Lithium</span>
        </button>
      </div>

      {/* Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {currentList.map((rec, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#04170d] border border-emerald-500/30 flex flex-col justify-between space-y-4 hover:border-emerald-400/60 transition-all shadow-md group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                  {rec.brand} Genuine
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                  {rec.warranty}
                </span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                {rec.recommendedModel}
              </h3>

              <div className="flex items-center gap-2 text-xs text-amber-300 font-mono">
                <span>Capacity:</span>
                <span className="font-bold">{rec.capacity}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {rec.desc}
              </p>

              <div className="pt-2 border-t border-emerald-950 text-xs text-slate-400">
                <strong className="text-slate-300 block mb-1">Suitable Models:</strong>
                <span>{rec.idealFor}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Hello NS Batteries, I am looking for the ${rec.recommendedModel} (${rec.capacity}) for my vehicle. Please share pricing and availability at your Ramanathapuram store.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-500 hover:text-emerald-950 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-500/30 transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire Price on WhatsApp</span>
            </a>
          </div>
        ))}
      </div>

      {/* Emergency Assistance Footnote */}
      <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Battery dead on the road in Ramanathapuram? We offer quick jumpstart & replacement assistance.</span>
        </div>
        <a
          href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
          className="text-emerald-400 hover:text-white font-bold flex items-center gap-1.5 shrink-0 underline"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Emergency Assistance: {COMPANY_INFO.phones[0].display}</span>
        </a>
      </div>
    </div>
  );
}
