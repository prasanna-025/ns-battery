import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle2, Phone, Trophy, Users, Building2 } from 'lucide-react';
import FoundersTrustStory from '@/components/home/FoundersTrustStory';
import StorefrontShowcase from '@/components/store/StorefrontShowcase';
import CompanyJourney from '@/components/about/CompanyJourney';
import AchievementCounters from '@/components/about/AchievementCounters';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'About NS Batteries | 37-Year Heritage, Leadership & Clean Energy Engineering',
  description:
    'Discover the journey of NS Batteries Ramanathapuram. Founded in 1989, recognized as No. 1 Power Zone distributor in South Tamil Nadu. Genuine battery distribution, solar EPC, and community trust since 1989.',
};

const brandDivisions = [
  { brand: 'Power Zone / Amara Raja', category: 'Automotive & Inverter Batteries', note: 'No. 1 Distributor, South Tamil Nadu FY 2023–24' },
  { brand: 'Luminous', category: 'Inverters & Solar Batteries', note: 'Authorized distributor' },
  { brand: 'UTL Solar', category: 'Rooftop Solar EPC Systems', note: 'Grid-tie, off-grid & hybrid' },
  { brand: 'Gulf Oil', category: 'Engine Oils & Lubricants', note: 'Automotive & marine grade' },
  { brand: 'SKF', category: 'Precision Bearings & Grease', note: 'Industrial & automotive' },
  { brand: 'Intu Lithium', category: 'LiFePO4 Battery Storage', note: 'Next-gen energy storage' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white">

      {/* ── 1. EDITORIAL HERO ─────────────────────────────── */}
      <section className="relative pt-16 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5 text-red-500" />
              <span>NS Batteries — Energizing Your World Since 1989</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              From a Workshop in 1989 to<br className="hidden sm:block" />{' '}
              <span className="text-red-500">South Tamil Nadu's No. 1</span> Energy Business.
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-3xl">
              Founded by Hussain as an auto electrician in Ramanathapuram, NS Batteries has grown across three decades into the region's most trusted multi-category battery, solar, and industrial products business — now led by the second generation, H. Mohamed Alshaban.
            </p>

            <blockquote className="border-l-2 border-red-500 pl-5 italic text-slate-300 text-base sm:text-lg">
              "Our legacy is built on trust. Our growth is powered by innovation. Our future is energized by you."
            </blockquote>
          </div>

          {/* Achievement Counters */}
          <AchievementCounters />
        </div>
      </section>

      {/* ── 2. COMPANY JOURNEY TIMELINE ───────────────────── */}
      <CompanyJourney />

      {/* ── 3. FOUNDERS & LEADERSHIP ──────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold text-red-500 uppercase tracking-widest">
              FOUNDER & SECOND-GENERATION LEADERSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The People Behind NS Batteries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_INFO.founders.map((founder, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0c1017] border border-white/10 hover:border-red-500/30 transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                  <p className="text-xs font-semibold text-red-400 mt-1 uppercase tracking-wider">{founder.role}</p>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">{founder.era}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INTERACTIVE TEAM & FOUNDERS STORY ─────────── */}
      <section className="py-4 sm:py-8">
        <FoundersTrustStory />
      </section>

      {/* ── 5. BRAND DIVISIONS ────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/5 bg-[#09101a]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-bold text-red-500 uppercase tracking-widest">
                BRANDS & BUSINESS DIVISIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Power Zone · Luminous · UTL Solar · Gulf Oil · SKF · Intu
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Every brand we carry is authorized, OEM-direct, and backed by our no-counterfeit commitment to Ramanathapuram.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg self-start md:self-auto shrink-0"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brandDivisions.map((div, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c1017] border border-white/10 hover:border-red-500/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    {div.brand}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-slate-300 mb-2">{div.category}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{div.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OPERATIONAL PILLARS ────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-bold text-red-500 uppercase tracking-widest">
                HOW WE OPERATE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Three Non-Negotiable Operational Pillars
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Written into our daily showroom protocols since day one. Every customer walks away with verified serial numbers, factory-sealed products, and round-the-clock technician access.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg self-start md:self-auto shrink-0"
            >
              <span>Visit Our Counter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_INFO.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-[#0c1017] border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-5xl font-mono font-bold text-white/10 group-hover:text-red-500/20 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-red-400">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Guaranteed at Storefront</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FLAGSHIP STOREFRONT SHOWCASE ───────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <StorefrontShowcase />
      </section>

      {/* ── 8. GEOGRAPHIC SERVICE COVERAGE ────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/5 bg-[#0a0e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-bold text-red-500 uppercase tracking-widest">
                ON-SITE RAPID DISPATCH
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Districts & Coastal Regions We Serve
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Our equipped mobile field van delivers battery jump-starts, doorstep fitting, and solar rooftop site evaluations across:
              </p>
            </div>
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="px-5 py-3 rounded-xl bg-[#121722] hover:bg-[#182030] border border-white/10 text-white font-bold text-xs flex items-center gap-2 transition-colors self-start md:self-auto shrink-0"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call On-Call Mobile Van</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {COMPANY_INFO.serviceRegions.map((region, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0c1017] border border-white/10 hover:border-red-500/30 text-slate-300 flex flex-col items-center justify-center text-center gap-1.5 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-white">{region}</span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#111724] via-[#0c1017] to-[#111724] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">
                Have a Commercial or Residential Requirement?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Speak directly with the NS Batteries team for honest pricing and accurate solar sizing.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/calculator"
                className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
              >
                Calculate Solar kW
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Contact Store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
