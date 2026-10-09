import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sun,
  Battery,
  Zap,
  Droplets,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  Wrench,
  Award,
  Layers,
  MessageCircle,
} from 'lucide-react';
import HeroSection from '@/components/hero/HeroSection';
import EnergyFlowSimulator from '@/components/solar/EnergyFlowSimulator';
import SolarCalculator from '@/components/solar/SolarCalculator';
import BatteryFinder from '@/components/batteries/BatteryFinder';
import StorefrontShowcase from '@/components/store/StorefrontShowcase';
import FoundersTrustStory from '@/components/home/FoundersTrustStory';
import ProductGrid from '@/components/products/ProductGrid';
import LeadForm from '@/components/common/LeadForm';
import { COMPANY_INFO } from '@/data/company';

export default function HomePage() {
  const divisions = [
    {
      title: 'Solar Solutions',
      icon: Sun,
      color: 'text-amber-400',
      bgGlow: 'from-amber-500/10 to-transparent',
      borderColor: 'border-amber-500/30',
      tag: 'PM Surya Ghar Ready',
      desc: 'On-grid, off-grid & hybrid rooftop solar systems with bi-directional net metering for Tamil Nadu homes & enterprises.',
      href: '/solar',
      highlights: ['Mono PERC Bifacial Panels', 'Central Subsidy up to ₹78,000', '25-Year Performance Guarantee'],
    },
    {
      title: 'Automobile Batteries',
      icon: Battery,
      color: 'text-emerald-400',
      bgGlow: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/30',
      tag: 'Zero Maintenance',
      desc: 'High-cranking Silver-X alloy batteries for two-wheelers, passenger cars, commercial fleets, and tractors.',
      href: '/batteries',
      highlights: ['Amaron & Powerzone Genuine', 'Up to 60 Months Warranty', 'Instant On-Site Health Check'],
    },
    {
      title: 'Inverters & Home UPS',
      icon: Zap,
      color: 'text-emerald-300',
      bgGlow: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/30',
      tag: 'Pure Sine Wave',
      desc: 'Smart digital UPS and solar PCUs engineered to protect delicate electronics and provide silent extended backup.',
      href: '/inverters',
      highlights: ['Luminous & UTL Solar', 'rMPPT Smart Solar Tracking', 'Zero Hum Noise in Fans'],
    },
    {
      title: 'Lithium LiFePO4 Storage',
      icon: Sparkles,
      color: 'text-teal-400',
      bgGlow: 'from-teal-500/10 to-transparent',
      borderColor: 'border-teal-500/30',
      tag: 'Next-Gen Storage',
      desc: 'Modern wall-mount lithium iron phosphate battery packs. 3x longer life, 1/3rd weight, zero acid odor.',
      href: '/batteries?category=lithium',
      highlights: ['3500+ Deep Cycles', 'Fast 2-Hour Charge', '5-Year Replacement Warranty'],
    },
    {
      title: 'Gulf Oil Lubricants',
      icon: Droplets,
      color: 'text-amber-400',
      bgGlow: 'from-amber-500/10 to-transparent',
      borderColor: 'border-amber-500/30',
      tag: '100% Factory Sealed',
      desc: 'Authorized Gulf motor oils for motorbikes, cars, commercial trucks, marine trawlers & ISO AdBlue DEF.',
      href: '/lubricants',
      highlights: ['JASO MA2 & API SP Oils', 'Coastal Marine Vessel Engine Oils', 'EcoHold AdBlue Fluid'],
    },
    {
      title: 'SKF Bearings & Greases',
      icon: Wrench,
      color: 'text-emerald-400',
      bgGlow: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/30',
      tag: 'Precision Engineering',
      desc: 'Genuine SKF deep groove ball bearings, wheel bearing kits, and high-temperature lithium greases.',
      href: '/lubricants#skf',
      highlights: ['SKF Authenticity Hologram', 'Low Friction Torque', 'Heavy-Duty Industrial Greases'],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION (Three.js 3D Rooftop Solar Canvas + Family Portrait) */}
      <HeroSection />

      {/* 2. TRUST & QUICK CONTACT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#041a0e] via-[#072615] to-[#041a0e] border border-emerald-500/30 p-5 sm:p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-emerald-900/60">
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5 pt-3 md:pt-0">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Quality Products</h4>
                <p className="text-xs text-slate-300">
                  100% factory-sealed OEM stock with direct manufacturer warranties.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Expert Service</h4>
                <p className="text-xs text-slate-300">
                  Certified technicians for rooftop solar installation & roadside battery testing.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Trusted Partner</h4>
                <p className="text-xs text-slate-300">
                  15+ years of family trust in Ramanathapuram and southern Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIX CORE BUSINESS DIVISIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMPLETE ENERGY & MOBILITY ECOSYSTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            One Destination for Solar, Batteries & Power Backups
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From clean solar harvesting on your rooftop to high-discharge automotive cranking and industrial lubricants, discover our core divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-b from-[#061f12] to-[#04140b] border ${div.borderColor} hover:border-emerald-400 transition-all duration-300 shadow-xl flex flex-col justify-between group space-y-5`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform">
                    <div.icon className={`w-6 h-6 ${div.color}`} />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30">
                    {div.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {div.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {div.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-emerald-950">
                  {div.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={div.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-200 transition-colors pt-2"
              >
                <span>Explore {div.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE 3D ENERGY FLOW SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <EnergyFlowSimulator />
      </section>

      {/* 5. SOLAR SAVINGS & TANGEDCO SUBSIDY CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SolarCalculator />
      </section>

      {/* 6. INTELLIGENT BATTERY FINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <BatteryFinder />
      </section>

      {/* 7. FEATURED PRODUCTS CATALOGUE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>POPULAR AT OUR RAMANATHAPURAM COUNTER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Energy & Automotive Products
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/30 shrink-0 transition-colors"
          >
            <span>View Full Product Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProductGrid featuredOnly limit={6} />
      </section>

      {/* 8. REAL STOREFRONT SHOWCASE & VIRTUAL TOUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <StorefrontShowcase />
      </section>

      {/* 9. FOUNDERS' TRUST & FAMILY LEGACY STORY */}
      <FoundersTrustStory />

      {/* 10. FINAL CONVERSION & LEAD CAPTURE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-b from-[#082a17] to-[#04140b] border border-emerald-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>FREE SITE SURVEY & ENERGY AUDIT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Ready to Slash Your Power Bills or Replace a Battery?
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you want to install a zero-bill rooftop solar plant in Ramanathapuram, need an emergency car battery delivered, or want advice on pure sine wave inverters — our family is ready to assist you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</div>
                  <span>100% Free on-site shadow analysis & roof measurement in Ramanathapuram district</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</div>
                  <span>End-to-end documentation for PM Surya Ghar subsidy & TANGEDCO net-meter approval</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</div>
                  <span>Zero-delay counter battery warranty replacement with printed test slip</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-200 hover:text-white text-xs font-bold transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {COMPANY_INFO.phones[0].display}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello NS Batteries, I would like to schedule a solar site inspection.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-[#04170d] p-6 sm:p-8 rounded-2xl border border-emerald-500/30 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>Request Free Site Assessment / Quote</span>
              </h3>
              <LeadForm defaultService="Rooftop Solar Consultation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
