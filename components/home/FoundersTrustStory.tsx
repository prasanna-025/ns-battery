'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Award,
  ShieldCheck,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Quote,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  image: string;
  quote: string;
  bio: string;
  credentials: string[];
  contactPhone?: string;
}

export default function FoundersTrustStory() {
  const [activeLeaderId, setActiveLeaderId] = useState<string>('founder-1');

  const leaders: TeamMember[] = [
    {
      id: 'founder-1',
      name: 'Mr. N. Syed Ibrahim',
      role: 'Founder & Managing Director',
      department: 'Executive Leadership & Trade Strategy',
      experience: '15+ Years Industry Leadership',
      image: '/images/hero-family.png',
      quote:
        'When NS Batteries opened in Ramanathapuram, we set one non-negotiable rule: never compromise on authenticity. Counterfeit products or false solar promises destroy trust. Our family name stands behind every single invoice.',
      bio:
        'Pioneered commercial distribution partnerships with Exide, Amaron, Microtek, and Gulf Oil across southern Tamil Nadu. Drives the strategic mission of bringing honest, subsidy-backed PM Surya Ghar solar plants to coastal households.',
      credentials: [
        '15+ Years Direct OEM Distributor',
        'Spearheaded 12,500+ Energy Installations',
        'Ramanathapuram Chamber of Trade Member',
      ],
      contactPhone: '88701 20911',
    },
    {
      id: 'founder-2',
      name: 'Mr. S. Mohamed Sikkandar',
      role: 'Co-Founder & Technical Operations Director',
      department: 'Solar Engineering & Grid Synchronization',
      experience: '14+ Years Field Engineering',
      image: '/images/hero-family.png',
      quote:
        'Coastal climate demands engineering respect. High salt-mist will corrode standard inverters in 18 months. We specifically engineer marine-grade anodized aluminum structures and pure sine wave systems that survive cyclones and heat.',
      bio:
        'Oversees turnkey rooftop solar site feasibility, TANGEDCO bi-directional net-meter approval pipelines, and industrial inverter load audits. Personally verifies on-site testing for large commercial solar plants.',
      credentials: [
        'TANGEDCO Net-Metering Liasoning Specialist',
        'MNRE & PM Surya Ghar Certified Engineer',
        'Mastery in High-Cranking Silver-X Alloys',
      ],
      contactPhone: '95145 20911',
    },
    {
      id: 'team-solar',
      name: 'Solar EPC Engineering Crew',
      role: 'Certified On-Site Installation Team',
      department: 'Rooftop Photovoltaic Systems',
      experience: '2,500+ Rooftops Commissioned',
      image: '/images/storefront.jpg',
      quote:
        'A solar rooftop is only as good as its structural anchoring and wiring safety. We do not cut corners with cheap DC cables or substandard earthing rods. Every connection is sealed for high-saline coastal resilience.',
      bio:
        'Full-time mobile engineering technicians equipped with shadow-analysis instruments, digital multimeters, and high-tensile mounting hardware. Serving homes, schools, and hospitals across southern Tamil Nadu.',
      credentials: [
        'IEC 61701 Salt-Mist Resistance Certified',
        'Turnkey Central DBT Subsidy Filing',
        '24-Hour Emergency Restoration Support',
      ],
    },
    {
      id: 'team-battery',
      name: 'Counter & Battery Diagnostic Team',
      role: 'Automotive & Inverter Clinic Specialists',
      department: 'Diagnostic Health & Warranty Assurance',
      experience: '10,000+ Batteries Tested & Serviced',
      image: '/images/storefront.jpg',
      quote:
        'You walk into our Ramanathapuram counter with a dead car or inverter battery, and we do not make excuses. We test specific gravity and cranking voltage right before your eyes with automated digital printouts.',
      bio:
        'Dedicated counter specialists handling computerized high-discharge load tests, specific gravity electrolyte checks, instant warranty replacements, and roadside mobile emergency jumpstart assistance.',
      credentials: [
        'Zero-Delay Counter Warranty Replacement',
        'Official Amaron & Exide OEM Certified Testers',
        'Trained in LiFePO4 Lithium Safety Protocols',
      ],
    },
  ];

  const activeLeader = leaders.find((l) => l.id === activeLeaderId) || leaders[0];

  return (
    <section className="w-full py-20 bg-[#060c13] border-t border-b border-white/10 relative overflow-hidden text-left">
      {/* Subtle Editorial Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#cd2028]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        {/* Editorial Section Header (Yellow Slice Inspired Typography) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0a1622] border-l-4 border-[#cd2028] text-white text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#cd2028]" />
              <span>THE MINDS BEHIND THE IMPACT</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight font-display leading-[1.08]">
                Real People. <span className="text-[#cd2028]">Real Heritage.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-medium">
                Uncompromising integrity in an industry where trust matters most.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              What sets NS Batteries apart is our people. Built over 15+ years in Ramanathapuram, we foster genuine technical mastery, local customer care, and multi-generational accountability.
            </p>
          </div>

          {/* Quick Header CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="vikram-btn text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Speak With Leadership</span>
            </a>
          </div>
        </div>

        {/* Interactive Editorial Member Selector (Yellow Slice Style Tabs) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 rounded-lg bg-[#09141f] border border-white/10">
          {leaders.map((leader) => {
            const isActive = leader.id === activeLeaderId;
            return (
              <button
                key={leader.id}
                onClick={() => setActiveLeaderId(leader.id)}
                className={`text-left p-3.5 rounded transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0f2133] border-l-4 border-[#cd2028] shadow-lg text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div>
                  <span className="block text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">
                    {leader.department.split('&')[0]}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold uppercase text-white font-display leading-snug">
                    {leader.name}
                  </h4>
                </div>
                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span className={isActive ? 'text-[#cd2028] font-bold' : ''}>{leader.experience}</span>
                  <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'rotate-90 text-[#cd2028]' : 'opacity-40'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Editorial Spotlight Stage (Yellow Slice High-Impact Card Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#091522] border border-white/10 rounded-xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cd2028]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Authentic Photography with Editorial Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-[#061018]">
              {/* Red Header Tag */}
              <div className="bg-[#cd2028] px-4 py-2 flex items-center justify-between text-white text-[11px] font-bold uppercase tracking-wider">
                <span>{activeLeader.role}</span>
                <span className="font-mono text-[10px] opacity-90">Ramanathapuram Hub</span>
              </div>

              {/* Photo */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091522] via-transparent to-transparent opacity-80" />
              </div>

              {/* Caption Footer */}
              <div className="p-4 bg-[#07111b] border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-sm uppercase font-display leading-tight">
                    {activeLeader.name}
                  </h3>
                  <p className="text-slate-400 text-xs">{activeLeader.experience}</p>
                </div>
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#cd2028]">
                  <Award className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Floating Quality Stamp */}
            <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-[#060f17] border-l-4 border-[#cd2028] border-y border-r border-white/15 rounded-sm p-3 shadow-2xl flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#cd2028]" />
              <div>
                <p className="text-xs font-bold uppercase text-white leading-tight">100% Personal Accountability</p>
                <p className="text-[10px] text-slate-400 font-mono">No Middlemen • Direct Care</p>
              </div>
            </div>
          </div>

          {/* Right Column: Thought Leadership & Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quote Box (Yellow Slice Style Quotation) */}
            <div className="space-y-3 relative p-5 rounded-lg bg-[#06101a] border border-white/10">
              <Quote className="w-8 h-8 text-[#cd2028] opacity-60" />
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-normal">
                &ldquo;{activeLeader.quote}&rdquo;
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs">
                <span className="font-bold text-white uppercase tracking-wider">{activeLeader.name}</span>
                <span className="text-[#cd2028] font-semibold uppercase">{activeLeader.department}</span>
              </div>
            </div>

            {/* Bio Story */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {activeLeader.bio}
            </p>

            {/* Core Credential Bullets */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Core Competencies & Verified Credentials:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeLeader.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-slate-300 p-2.5 rounded bg-white/5 border border-white/5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#cd2028] shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-3 border-t border-white/10">
              <a
                href={`tel:+91${(activeLeader.contactPhone || COMPANY_INFO.phones[0].display).replace(/\s+/g, '')}`}
                className="vikram-btn text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {activeLeader.name.split(' ')[0]} Directly</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello ${activeLeader.name}, I am reaching out through your website regarding energy solutions.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded bg-[#0c1a27] hover:bg-[#25D366] text-slate-200 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Four Bedrock Principles (Editorial Pillars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="p-5 rounded-lg bg-[#08131d] border border-white/10 hover:border-[#cd2028] transition-colors space-y-2">
            <div className="w-8 h-8 rounded bg-[#cd2028]/20 text-[#cd2028] flex items-center justify-center font-mono font-bold text-xs">
              01
            </div>
            <h4 className="text-sm font-bold uppercase text-white font-display">100% Genuine Direct Stock</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Factory-sealed barcodes from Amaron, Exide, and Luminous with verified manufacturing dates.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#08131d] border border-white/10 hover:border-[#cd2028] transition-colors space-y-2">
            <div className="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
              02
            </div>
            <h4 className="text-sm font-bold uppercase text-white font-display">Honest Solar kW Sizing</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never oversell solar wattage. We calculate true load curves to guarantee your 3.5-year ROI.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#08131d] border border-white/10 hover:border-[#cd2028] transition-colors space-y-2">
            <div className="w-8 h-8 rounded bg-[#cd2028]/20 text-[#cd2028] flex items-center justify-center font-mono font-bold text-xs">
              03
            </div>
            <h4 className="text-sm font-bold uppercase text-white font-display">Counter Replacement</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Walk into our Ramanathapuram store during warranty and get instant automated testing without hassle.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#08131d] border border-white/10 hover:border-[#cd2028] transition-colors space-y-2">
            <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
              04
            </div>
            <h4 className="text-sm font-bold uppercase text-white font-display">Coastal Anti-Corrosion</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Heavy anodized aluminum mounting and marine-grade wiring formulated for Ramanathapuram’s saline air.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
