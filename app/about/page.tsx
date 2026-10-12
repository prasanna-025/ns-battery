import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle2, Phone, Trophy, Users } from 'lucide-react';
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
    <div className="min-h-screen bg-white text-[#17212B]">
      {/* ── 1. EDITORIAL HERO ─────────────────────────────── */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#E1E7ED] bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E1E7ED] text-[11px] font-bold text-[#16a34a] uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>NS Batteries — Energizing Your World Since 1989</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1722] leading-[1.15]">
              From an Auto Workshop in 1989 to<br className="hidden sm:block" />{' '}
              <span className="text-[#16a34a]">South Tamil Nadu's No. 1</span> Energy Business.
            </h1>

            <p className="text-base sm:text-lg text-[#647384] leading-relaxed max-w-3xl">
              Founded by Hussain as an auto electrician in Ramanathapuram, NS Batteries has grown across nearly four decades into the region's most trusted multi-category battery, solar, and industrial products distributor — now driven by second-generation leadership.
            </p>

            <blockquote className="border-l-3 border-[#16a34a] pl-4 italic text-[#0B1722] text-sm sm:text-base font-medium">
              &ldquo;Our legacy is built on trust. Our growth is powered by innovation. Our future is energized by you.&rdquo;
            </blockquote>
          </div>

          {/* Achievement Counters */}
          <AchievementCounters />
        </div>
      </section>

      {/* ── 2. COMPANY JOURNEY TIMELINE (1989 to 2026) ──────── */}
      <CompanyJourney />

      {/* ── 3. FOUNDERS & LEADERSHIP CARDS ─────────────────── */}
      <section className="py-16 sm:py-24 border-b border-[#E1E7ED] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold text-[#16a34a] uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>GENERATIONAL HERITAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
              Founder & Second-Generation Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_INFO.founders.map((founder, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] hover:border-[#CBD5E1] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E1E7ED] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#16a34a]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1722]">{founder.name}</h3>
                  <p className="text-xs font-semibold text-[#16a34a] mt-0.5">{founder.role}</p>
                  <p className="text-[11px] font-mono text-[#647384] mt-0.5">{founder.era}</p>
                </div>
                <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INTERACTIVE TEAM & FOUNDERS STORY ───────────── */}
      <FoundersTrustStory />

      {/* ── 5. BRAND DIVISIONS ────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-[#E1E7ED] bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E1E7ED] text-[11px] font-bold text-[#16a34a] uppercase tracking-wider">
                BRANDS & BUSINESS DIVISIONS
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
                Power Zone · Luminous · UTL Solar · Gulf Oil · SKF · Intu
              </h2>
              <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
                Every brand we carry is authorized, OEM-direct, and backed by our authentic product warranty commitment in Ramanathapuram.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B1722] hover:bg-[#122333] text-white font-semibold text-xs uppercase tracking-wider transition-colors self-start md:self-auto shrink-0"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4 text-[#16a34a]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brandDivisions.map((div, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E1E7ED] hover:border-[#CBD5E1] transition-all"
              >
                <h3 className="text-base font-bold text-[#0B1722] mb-1">
                  {div.brand}
                </h3>
                <p className="text-xs font-semibold text-[#647384] mb-2">{div.category}</p>
                <div className="flex items-center gap-1.5 text-xs text-[#16835D] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{div.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OPERATIONAL PILLARS ────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-[#E1E7ED] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold text-[#16a34a] uppercase tracking-wider">
                HOW WE OPERATE
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
                Three Non-Negotiable Operational Pillars
              </h2>
              <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
                Written into our showroom protocols since day one. Every customer walks away with verified serial numbers, factory-sealed products, and continuous technician access.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs uppercase tracking-wider transition-colors self-start md:self-auto shrink-0 shadow-sm"
            >
              <span>Visit Our Counter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_INFO.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-4xl font-mono font-extrabold text-[#CBD5E1]">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1722] mt-3 mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#E1E7ED] flex items-center gap-2 text-xs font-semibold text-[#16835D]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed at Storefront</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FLAGSHIP STOREFRONT SHOWCASE ───────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 border-b border-[#E1E7ED]">
        <StorefrontShowcase />
      </section>

      {/* ── 8. GEOGRAPHIC SERVICE COVERAGE ────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E1E7ED] text-[11px] font-bold text-[#16a34a] uppercase tracking-wider">
                ON-SITE RAPID DISPATCH
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1722]">
                Districts & Coastal Regions We Serve
              </h3>
              <p className="text-xs sm:text-sm text-[#647384]">
                Our equipped field team delivers doorstep battery fitting, battery testing, and rooftop solar site surveys across:
              </p>
            </div>
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="px-5 py-3 rounded-lg bg-[#0B1722] hover:bg-[#122333] text-white font-semibold text-xs flex items-center gap-2 transition-colors self-start md:self-auto shrink-0"
            >
              <Phone className="w-4 h-4 text-[#16a34a]" />
              <span>Call Mobile Field Service</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {COMPANY_INFO.serviceRegions.map((region, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-white border border-[#E1E7ED] hover:border-[#CBD5E1] flex flex-col items-center justify-center text-center gap-1.5 transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#16a34a]" />
                <span className="text-xs font-medium text-[#17212B]">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
