import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sun,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
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
import LeadForm from '@/components/common/LeadForm';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Solar Rooftop Solutions Ramanathapuram | NS Batteries',
  description:
    'High-efficiency On-grid, Off-grid and Hybrid solar systems in Ramanathapuram. TANGEDCO Net Metering and PM Surya Ghar subsidy up to ₹78,000.',
};

export default function SolarPage() {
  const solarArchitectures = [
    {
      title: 'On-Grid Solar (Grid-Tied)',
      subtitle: 'Fastest Payback & Maximum TANGEDCO Bill Reduction',
      badge: 'Best For Homes & Offices',
      color: 'border-emerald-500/40',
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
      color: 'border-amber-500/50',
      popular: true,
      description:
        'The ultimate energy security system. Generates clean solar, charges your lithium battery bank, powers your house, and exports any remaining excess to the grid. Zero disruption during power cuts.',
      features: [
        '24/7 Uninterrupted clean power',
        'Instant < 10ms UPS switchover during grid cuts',
        'Charges batteries from solar even when grid is down',
        'Compatible with high-density LiFePO4 wall packs',
        'Subsidies applicable for grid-connected portion',
      ],
      idealFor: 'Residences, clinics, IT home offices, coastal bungalows needing 100% reliable power',
    },
    {
      title: 'Off-Grid Standalone Solar',
      subtitle: '100% Independent from Utility Grid',
      badge: 'Zero Grid Connection',
      color: 'border-emerald-500/40',
      description:
        'Operates completely autonomous from the electricity board. Harnesses solar energy with heavy-duty rMPPT charge controllers and deep-cycle solar batteries to power remote properties.',
      features: [
        'Complete energy independence',
        'Ideal where grid connection is weak or unavailable',
        'Powers water pumps, lights, refrigeration & fans',
        'Heavy-duty surge tolerance for motor loads',
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
    <div className="space-y-16 sm:space-y-24 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#062413] via-[#09351c] to-[#04150b] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>ROOFTOP SOLAR ENGINEERING • RAMANATHAPURAM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Turn Your Rooftop Into a <span className="text-emerald-400">Green Power Station</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Cut up to 90% of your electricity bills with Tier-1 Mono PERC solar panels, smart bi-directional net metering, and hassle-free PM Surya Ghar government subsidies handled from start to finish.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#calculator"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-amber-300 hover:from-emerald-300 hover:to-amber-200 text-emerald-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <span>Calculate My Savings</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/quote"
                className="px-6 py-3 rounded-xl bg-emerald-950 border border-emerald-500/40 hover:bg-emerald-900 text-emerald-200 font-semibold text-xs sm:text-sm transition-colors"
              >
                Request Free Roof Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Energy Flow Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <EnergyFlowSimulator />
      </section>

      {/* 3. Three Solar Architectures Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Choose the Right Solar Architecture
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Engineered for the high solar irradiance and coastal weather conditions of southern Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solarArchitectures.map((arch, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 bg-[#061e11] border ${arch.color} flex flex-col justify-between space-y-5 relative shadow-xl ${
                arch.popular ? 'ring-2 ring-amber-400/40' : ''
              }`}
            >
              {arch.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-amber-950 font-bold text-[10px] uppercase tracking-wider shadow">
                  Most Recommended
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                    {arch.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {arch.title}
                  </h3>
                  <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                    {arch.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {arch.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-emerald-950">
                  {arch.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-950 space-y-3">
                <p className="text-[11px] text-slate-400">
                  <strong className="text-slate-300">Best for:</strong> {arch.idealFor}
                </p>

                <Link
                  href={`/quote?service=${encodeURIComponent(arch.title)}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-500 hover:text-emerald-950 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 border border-emerald-500/30 transition-all"
                >
                  <span>Select {arch.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PM Surya Ghar Subsidy Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#061d10] border border-emerald-500/30 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2">
                <Banknote className="w-3.5 h-3.5 text-amber-400" />
                <span>CENTRAL GOVERNMENT SOLAR SCHEME</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                PM Surya Ghar: Muft Bijli Yojana Subsidies
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              We handle the entire online application, portal approval, TANGEDCO inspection, and net-meter commissioning for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subsidyTiers.map((tier, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#04150b] border border-emerald-900/60 space-y-2">
                <p className="text-lg font-bold text-white">{tier.capacity}</p>
                <p className="text-xl font-extrabold text-amber-400 font-mono">{tier.subsidy}</p>
                <p className="text-xs text-emerald-300">{tier.generation}</p>
                <p className="text-xs text-slate-400 pt-2 border-t border-emerald-950">{tier.benefit}</p>
              </div>
            ))}
          </div>

          {/* Step-by-step process */}
          <div className="pt-4 border-t border-emerald-900/60 grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="space-y-1">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">1</span>
              <p className="font-bold text-white">Free Roof Survey</p>
              <p className="text-slate-400 text-[11px]">We measure shadow patterns & structural load.</p>
            </div>
            <div className="space-y-1">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">2</span>
              <p className="font-bold text-white">Portal Registration</p>
              <p className="text-slate-400 text-[11px]">We register your consumer number on the National Portal.</p>
            </div>
            <div className="space-y-1">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">3</span>
              <p className="font-bold text-white">Installation & Testing</p>
              <p className="text-slate-400 text-[11px]">Certified installation of 550W+ Mono PERC panels.</p>
            </div>
            <div className="space-y-1">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">4</span>
              <p className="font-bold text-white">Direct Subsidy Credit</p>
              <p className="text-slate-400 text-[11px]">Net meter installed & subsidy credited to your bank account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Solar Savings Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SolarCalculator />
      </section>

      {/* 6. Consultation Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#061d10] border border-emerald-500/40 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Book Your Free Rooftop Solar Feasibility Survey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering team will visit your Ramanathapuram premises, inspect your distribution board, and prepare an engineering drawing with estimated unit generation.
            </p>
          </div>
          <LeadForm defaultService="Rooftop Solar Consultation" />
        </div>
      </section>
    </div>
  );
}
