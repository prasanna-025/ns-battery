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
  Sparkles,
  Wrench,
  Award,
  Layers,
  MessageCircle,
  TrendingUp,
  Flame,
  Globe2,
} from 'lucide-react';
import HeroSection from '@/components/hero/HeroSection';
import InteractiveEnergyStudio from '@/components/home/InteractiveEnergyStudio';
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
      series: 'TOPCon BIFACIAL & ON-GRID',
      icon: Sun,
      color: 'text-amber-400',
      tag: 'PM Surya Ghar Ready',
      desc: 'On-grid, off-grid & hybrid rooftop solar systems with bi-directional net metering for Tamil Nadu homes & enterprises.',
      href: '/solar',
      highlights: ['Mono PERC & TOPCon Bifacial Panels', 'Central Subsidy up to ₹78,000', '25-Year Performance Guarantee'],
    },
    {
      title: 'Automobile Batteries',
      series: 'AMARON & POWERZONE OEM',
      icon: Battery,
      color: 'text-emerald-400',
      tag: 'Zero Maintenance',
      desc: 'High-cranking Silver-X alloy batteries for two-wheelers, passenger cars, commercial fleets, and coastal tractors.',
      href: '/batteries',
      highlights: ['Amaron & Powerzone Genuine', 'Up to 60 Months Warranty', 'Instant On-Site Health Check'],
    },
    {
      title: 'Inverters & Home UPS',
      series: 'PURE SINE WAVE & SOLAR PCU',
      icon: Zap,
      color: 'text-amber-400',
      tag: 'Zero Hum Noise',
      desc: 'Smart digital UPS and solar PCUs engineered to protect delicate electronics and provide silent extended backup.',
      href: '/inverters',
      highlights: ['Luminous & UTL Solar', 'rMPPT Smart Solar Tracking', 'Zero Hum Noise in Fans'],
    },
    {
      title: 'Lithium LiFePO4 Storage',
      series: 'NEXT-GEN WALL MOUNT PACKS',
      icon: Sparkles,
      color: 'text-teal-400',
      tag: '3500+ Deep Cycles',
      desc: 'Modern wall-mount lithium iron phosphate battery packs. 3x longer life, 1/3rd weight, zero acid odor.',
      href: '/batteries?category=lithium',
      highlights: ['3500+ Deep Cycles', 'Fast 2-Hour Charge', '5-Year Replacement Warranty'],
    },
    {
      title: 'Gulf Oil Lubricants',
      series: '100% FACTORY SEALED OILS',
      icon: Droplets,
      color: 'text-amber-400',
      tag: 'Authorized Gulf Hub',
      desc: 'Authorized Gulf motor oils for motorbikes, cars, commercial trucks, marine trawlers & ISO AdBlue DEF.',
      href: '/lubricants',
      highlights: ['JASO MA2 & API SP Oils', 'Coastal Marine Vessel Engine Oils', 'EcoHold AdBlue DEF'],
    },
    {
      title: 'SKF Bearings & Greases',
      series: 'PRECISION INDUSTRIAL PARTS',
      icon: Wrench,
      color: 'text-emerald-400',
      tag: 'Genuine Hologram',
      desc: 'Genuine SKF deep groove ball bearings, wheel bearing kits, and high-temperature lithium greases.',
      href: '/lubricants#skf',
      highlights: ['SKF Authenticity Hologram', 'Low Friction Torque', 'Heavy-Duty Industrial Greases'],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION (Vikram Solar Corporate Multi-Banner Slider + Founders) */}
      <HeroSection />

      {/* 2. VIKRAM SOLAR SIGNATURE: "OUR REVOLUTION IN NUMBERS" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-6 sm:p-10 rounded-xl bg-[#091520] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Red Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#cd2028]" />

          <div className="space-y-3 mb-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#060e15] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <span>OUR REVOLUTION IN NUMBERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight font-display">
              PIONEERING SOUTHERN TAMIL NADU’S ENERGY TRANSITION
            </h2>
            <p className="text-slate-300 text-sm max-w-3xl">
              From Ramanathapuram’s sun-drenched coastal roofs to commercial setups across southern districts, our numbers speak of steadfast customer trust and reliable engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Stat 1 */}
            <div className="p-5 rounded-lg bg-[#0c1c2a] border border-white/10 hover:border-[#cd2028] transition-colors relative group">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                FAMILY HERITAGE
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1">
                15+ <span className="text-base text-[#cd2028] font-sans">Years</span>
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Generational trust serving Ramanathapuram, Paramakudi, and coastal fishermen fleets.
              </p>
              <div className="h-0.5 w-0 bg-[#cd2028] group-hover:w-full transition-all duration-300 mt-3" />
            </div>

            {/* Stat 2 */}
            <div className="p-5 rounded-lg bg-[#0c1c2a] border border-white/10 hover:border-[#cd2028] transition-colors relative group">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                INSTALLATIONS COMPLETED
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono mt-1">
                12,500+
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Solar rooftops, automotive battery replacements & industrial inverter deployments.
              </p>
              <div className="h-0.5 w-0 bg-[#cd2028] group-hover:w-full transition-all duration-300 mt-3" />
            </div>

            {/* Stat 3 */}
            <div className="p-5 rounded-lg bg-[#0c1c2a] border border-white/10 hover:border-[#cd2028] transition-colors relative group">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                CLEAN CAPACITY COMMISSIONED
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1">
                1.4+ <span className="text-base text-[#cd2028] font-sans">Megawatts</span>
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Aggregate grid-tied & off-grid solar capacity generating clean green power daily.
              </p>
              <div className="h-0.5 w-0 bg-[#cd2028] group-hover:w-full transition-all duration-300 mt-3" />
            </div>

            {/* Stat 4 */}
            <div className="p-5 rounded-lg bg-[#0c1c2a] border border-white/10 hover:border-[#cd2028] transition-colors relative group">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                CUMULATIVE BILLS SAVED
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                ₹1.8 Cr+
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Direct electricity bill reduction for local families, retail shops, and MSMEs.
              </p>
              <div className="h-0.5 w-0 bg-[#cd2028] group-hover:w-full transition-all duration-300 mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIKRAM SOLAR SIGNATURE SPLIT SECTION: "CREATING CLIMATE FOR CHANGE" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#08131d] border border-white/10 rounded-xl p-6 sm:p-10 shadow-2xl relative">
          {/* Left Column: Visual Highlight */}
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden border border-white/10 bg-[#0c1a27] aspect-[4/3] flex items-center justify-center p-6 text-center">
            <div className="space-y-4 max-w-sm">
              <div className="w-16 h-16 rounded-full bg-[#cd2028]/20 border border-[#cd2028]/40 flex items-center justify-center mx-auto text-[#cd2028]">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold uppercase text-white font-display">
                PM Surya Ghar: Muft Bijli Yojana
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Up to 300 units of free power each month. Direct government subsidy of ₹78,000 transferred straight into your bank account via DBT.
              </p>
              <Link
                href="/solar#calculator"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-white"
              >
                <span>Calculate Your 300 Units Subsidy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Corporate Split Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0a1622] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <span>CLEAN ENERGY TRANSITION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight font-display leading-tight">
              CREATING CLIMATE FOR CHANGE
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              We at NS Batteries are focused on accelerating Tamil Nadu’s clean energy transition. With extensive experience in commissioning ground-mounted and rooftop projects for residences, institutions, and coastal industries, we deliver turnkey reliability.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#cd2028] mt-1.5 shrink-0" />
                <span><strong>ENABLING TAMIL NADU’S GREEN GOAL:</strong> Supporting state solar targets through high-yield rooftop adoption.</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#cd2028] mt-1.5 shrink-0" />
                <span><strong>COASTAL ANTI-CORROSION ENGINEERING:</strong> Heavy anodized frames resistant to Ramanathapuram’s salt-mist air.</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#cd2028] mt-1.5 shrink-0" />
                <span><strong>ZERO TANGEDCO EB BILL:</strong> Bi-directional net-metering synchronization with the grid.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link href="/solar" className="vikram-btn text-xs font-bold tracking-wider inline-flex gap-2">
                <span>Learn More About Solar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX CORE PRODUCT DIVISIONS (Vikram Series Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0a1622] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-white text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#cd2028]" />
            <span>PORTFOLIO BASED ENERGY SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight font-display">
            Explore Our Comprehensive Technology Series
          </h2>
          <p className="text-slate-300 text-sm max-w-3xl">
            From high-efficiency photovoltaic modules to heavy-duty automotive starter batteries and pure sine wave inverters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#0b1723] border border-white/10 hover:border-[#cd2028] transition-all duration-300 shadow-xl flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {div.series}
                  </span>
                  <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded bg-[#cd2028]">
                    {div.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold uppercase text-white group-hover:text-[#cd2028] transition-colors font-display">
                    {div.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {div.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {div.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#cd2028] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={div.href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#cd2028] transition-colors pt-2 border-t border-white/5"
              >
                <span>View {div.title} Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE ENERGY STUDIO (UNIFIED WORKBENCH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <InteractiveEnergyStudio />
      </section>

      {/* 6. SOLAR SAVINGS & PM SURYA GHAR CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <SolarCalculator />
      </section>

      {/* 7. INTELLIGENT BATTERY FINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <BatteryFinder />
      </section>

      {/* 8. FEATURED PRODUCTS CATALOGUE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0a1622] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#cd2028]" />
              <span>POPULAR AT OUR RAMANATHAPURAM HUB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-display">
              Featured Energy & Automotive Modules
            </h2>
          </div>
          <Link
            href="/products"
            className="vikram-btn text-xs font-bold uppercase tracking-wider shrink-0"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>

        <ProductGrid featuredOnly limit={6} />
      </section>

      {/* 9. REAL STOREFRONT SHOWCASE & VIRTUAL TOUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <StorefrontShowcase />
      </section>

      {/* 10. FOUNDERS' TRUST & FAMILY LEGACY STORY */}
      <FoundersTrustStory />

      {/* 11. VIKRAM SOLAR STYLE LEAD CAPTURE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-xl bg-[#091520] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Top Red Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#cd2028]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#060e15] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>FREE SITE SURVEY & ENERGY AUDIT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight font-display leading-tight">
                Ready to Slash Your Power Bills or Replace a Battery?
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you want to install a zero-bill rooftop solar plant in Ramanathapuram, need an emergency car battery delivered, or want advice on pure sine wave inverters — our family is ready to assist you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded bg-[#cd2028] text-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span>100% Free on-site shadow analysis & roof measurement in Ramanathapuram district</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded bg-[#cd2028] text-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span>End-to-end documentation for PM Surya Ghar subsidy & TANGEDCO net-meter approval</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded bg-[#cd2028] text-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Zero-delay counter battery warranty replacement with printed test slip</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                  className="vikram-btn-outline text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#cd2028]" />
                  <span>Call {COMPANY_INFO.phones[0].display}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello NS Batteries, I would like to schedule a solar site inspection.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded text-white bg-[#25D366] hover:bg-[#20b858] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-[#07111a] p-6 sm:p-8 rounded-xl border border-white/10 shadow-xl">
              <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2 font-display">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cd2028]" />
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
