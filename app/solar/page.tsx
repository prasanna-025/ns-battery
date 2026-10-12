import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sun,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TreePine,
  Banknote,
  Building,
  Home,
  Check,
  Phone,
  FileCheck,
} from 'lucide-react';
import SolarCalculator from '@/components/solar/SolarCalculator';
import EnergyFlowSimulator from '@/components/solar/EnergyFlowSimulator';
import RoofSolarVisualizer3D from '@/components/interactive/RoofSolarVisualizer3D';
import DayNightEnergyCycle from '@/components/interactive/DayNightEnergyCycle';
import CoastalResilienceEngine from '@/components/interactive/CoastalResilienceEngine';
import HomeQuoteSection from '@/components/home/HomeQuoteSection';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Solar Modules & Rooftop Solutions Ramanathapuram | NS Batteries',
  description:
    'High-efficiency On-grid, Off-grid and Hybrid solar systems in Ramanathapuram. TANGEDCO Net Metering and PM Surya Ghar subsidy up to ₹78,000.',
};

export default function SolarPage() {
  const solarArchitectures = [
    {
      title: 'On-Grid Solar (Grid-Tied)',
      subtitle: 'Fastest Payback & Maximum TANGEDCO Bill Reduction',
      badge: 'Best For Homes & Offices',
      description:
        'Connected directly to the Tamil Nadu grid through a bi-directional net meter. When your panels produce excess energy during the day, it is exported to TANGEDCO, spinning your meter backwards.',
      features: [
        'Payback in 3 to 4 years',
        'Eligible for PM Surya Ghar subsidy (up to ₹78,000)',
        'Zero battery maintenance cost',
        'Highest return on investment',
        'Automatic cloud monitoring on your smartphone',
      ],
      idealFor: 'Urban homes, commercial shops, schools, hospitals with low daytime power outages',
    },
    {
      title: 'Smart Hybrid Solar',
      subtitle: 'Grid Export Savings + Lithium / Tubular Battery Backup',
      badge: 'Most Popular Choice',
      popular: true,
      description:
        'The ultimate energy security system. Generates clean solar, charges your battery bank, powers your house, and exports any remaining excess to the grid. Zero disruption during power cuts.',
      features: [
        '24/7 Uninterrupted clean power',
        'Works during daytime AND night blackouts',
        'Supports high surge loads (fridge, pump, motors)',
        'Compatible with advanced LiFePO4 lithium batteries',
        'Eligible for residential central subsidies',
      ],
      idealFor: 'Homes in areas with frequent coastal power interruptions, clinics, diagnostic centers',
    },
    {
      title: 'Off-Grid Solar',
      subtitle: '100% Independent Power Without Any Grid Connection',
      badge: 'Remote & Rural Sites',
      description:
        'Stand-alone system with high-capacity solar batteries. Engineered for remote agricultural plots, prawn farms, and coastal sites where TANGEDCO grid power is absent or erratic.',
      features: [
        'Complete energy independence',
        'Heavy-duty deep-cycle tubular or lithium bank',
        'Built-in MPPT solar charge controller',
        'Corrosion-resistant coastal mounting hardware',
      ],
      idealFor: 'Farmhouses, coastal shrimp/fish hatcheries, agricultural pumps, remote installations',
    },
  ];

  const subsidyTiers = [
    {
      capacity: '1 kW System',
      generation: '~120 Units / month',
      subsidy: '₹30,000 Central Subsidy',
      benefit: 'Ideal for small 1BHK / 2BHK households',
    },
    {
      capacity: '2 kW System',
      generation: '~240 Units / month',
      subsidy: '₹60,000 Central Subsidy',
      benefit: 'Ideal for 2BHK / 3BHK homes with 1 AC',
    },
    {
      capacity: '3 kW to 10 kW System',
      generation: '~360 to 1200+ Units / month',
      subsidy: '₹78,000 Max Subsidy (Residential)',
      benefit: 'Eliminates high TANGEDCO bi-monthly bill brackets',
    },
  ];

  return (
    <div className="bg-white text-[#17212B] space-y-16 sm:space-y-24 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl bg-[#0B1722] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#F4B323] text-xs font-semibold">
              <Sun className="w-4 h-4 text-[#F4B323]" />
              <span>ROOFTOP SOLAR ENGINEERING • RAMANATHAPURAM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Turn Your Rooftop Into a <span className="text-[#F4B323]">Clean Power Station</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Cut up to 90% of your electricity bills with Tier-1 Mono PERC solar panels, smart bi-directional net metering, and hassle-free PM Surya Ghar government subsidies handled from start to finish.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#calculator"
                className="px-6 py-3.5 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-colors"
              >
                <span>Calculate My Savings</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/quote"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
              >
                Request Free Roof Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive 3D Rooftop Solar Configurator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <RoofSolarVisualizer3D />
      </section>

      {/* 3. Interactive 24-Hour Energy Lifecycle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <DayNightEnergyCycle />
      </section>

      {/* 4. Interactive Energy Flow Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <EnergyFlowSimulator />
      </section>

      {/* 5. Three Solar Architectures Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1722]">
            Choose the Right Solar Architecture
          </h2>
          <p className="text-xs sm:text-sm text-[#647384]">
            Engineered for the high solar irradiance and coastal weather conditions of southern Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solarArchitectures.map((arch, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 sm:p-7 bg-white border border-[#E1E7ED] flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md transition-shadow relative ${
                arch.popular ? 'border-[#D9232E]/40' : ''
              }`}
            >
              {arch.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#D9232E] text-white font-bold text-[10px] uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9232E] block">
                  {arch.badge}
                </span>
                <h3 className="text-lg font-bold text-[#0B1722]">{arch.title}</h3>
                <p className="text-xs font-semibold text-[#647384]">{arch.subtitle}</p>
                <p className="text-xs text-[#647384] leading-relaxed pt-1">{arch.description}</p>

                <div className="space-y-1.5 pt-3 border-t border-[#F1F5F9]">
                  {arch.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#17212B]">
                      <Check className="w-3.5 h-3.5 text-[#16835D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] text-[11px] text-[#647384]">
                <strong className="text-[#0B1722]">Best for:</strong> {arch.idealFor}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PM Surya Ghar Subsidy Guide Table */}
      <section id="pm-surya-ghar" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F4B323]/15 text-[#0B1722] text-xs font-bold uppercase">
            <Banknote className="w-3.5 h-3.5 text-[#F4B323]" />
            <span>CENTRAL GOVT SUBSIDY BREAKDOWN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1722]">
            PM Surya Ghar Muft Bijli Yojana Subsidies
          </h2>
          <p className="text-xs sm:text-sm text-[#647384]">
            Direct Benefit Transfer credited directly to your bank account after bi-directional net meter installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subsidyTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] space-y-3"
            >
              <h3 className="text-lg font-bold text-[#0B1722]">{tier.capacity}</h3>
              <div className="text-xl font-extrabold text-[#16835D] font-mono">{tier.subsidy}</div>
              <p className="text-xs text-[#647384]">Generates {tier.generation}</p>
              <p className="text-xs font-semibold text-[#17212B] pt-1">{tier.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Coastal Anti-Corrosion Engineering Engine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <CoastalResilienceEngine />
      </section>

      {/* 8. Interactive Solar Savings Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <SolarCalculator />
      </section>

      {/* 9. Contact / Quote Form */}
      <HomeQuoteSection />
    </div>
  );
}
