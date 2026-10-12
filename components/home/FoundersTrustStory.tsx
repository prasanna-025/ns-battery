'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Award,
  ShieldCheck,
  Phone,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Quote,
  Users,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface Leader {
  id: string;
  name: string;
  role: string;
  era: string;
  image: string;
  quote: string;
  bio: string;
  credentials: string[];
}

export default function FoundersTrustStory() {
  const [activeId, setActiveId] = useState<string>('founder-1');

  const leaders: Leader[] = [
    {
      id: 'founder-1',
      name: 'Hussain',
      role: 'Founder & Automobile Electrician',
      era: '1989 — The Foundation',
      image: '/images/ecosystem/workshop-1989.jpg',
      quote:
        'When we started in 1989 as an auto electrical workshop in Ramanathapuram, our reputation was built on honest work, proper wire diagnostics, and community trust. That foundation remains unchanged.',
      bio:
        'Founded the business in 1989 with a focus on automobile electrical repair. Expanded into auto electrical spare parts in 1991, laying the groundwork for a generational energy enterprise.',
      credentials: [
        'Founded Automobile Electrical Shop (1989)',
        '37+ Years of Family Heritage',
        'Pioneered Technical Service in Ramanathapuram',
      ],
    },
    {
      id: 'founder-2',
      name: 'Hyder Ali',
      role: 'Co-Founder',
      era: '1994 — Rameswaram Milestone',
      image: '/images/ecosystem/rameswaram-history.jpg',
      quote:
        'Expanding to Rameswaram in 1994 proved that customers value reliable service wherever they are. We treat every customer invoice as a personal commitment.',
      bio:
        'Joined as co-founder in 1994, expanding operations across Rameswaram and strengthening the company’s coastal footprint. Instrumental in the 1996 Ramanathapuram battery hub expansion.',
      credentials: [
        'Co-Founder & Coastal Expansion Lead (1994)',
        'Established Ramanathapuram Battery Hub (1996)',
        'Decades of Local Customer Trust',
      ],
    },
    {
      id: 'founder-3',
      name: 'H. Mohamed Alshaban',
      role: 'Managing Director (Second Generation)',
      era: '2012 — Present',
      image: '/images/ecosystem/powerzone-battery.jpg',
      quote:
        'Taking over the second generation, our goal was to bring world-class brands like Amara Raja Power Zone, Luminous Solar, and SKF to South Tamil Nadu, earning No. 1 distributor recognition.',
      bio:
        'Joined in 2012 and spearheaded Power Zone battery wholesale distribution, achieving No. 1 Amara Raja distributor recognition in South Tamil Nadu for FY 2023–24. Diversified into solar, bearings, and lubricants.',
      credentials: [
        'No. 1 Power Zone Distributor South Tamil Nadu (FY 2023–24)',
        'Expanded Luminous Solar & Inverters (2019)',
        'Added SKF Bearings (2021) & Gulf Oil (2025)',
      ],
    },
    {
      id: 'founder-4',
      name: 'Mr. N. Syed Ibrahim',
      role: 'Executive Director & Operations',
      era: 'Current Leadership',
      image: '/images/hero-family.png',
      quote:
        'Our family stands behind every battery, solar panel, and inverter that leaves our showroom. We ensure every PM Surya Ghar rooftop solar plant is engineered for maximum generation.',
      bio:
        'Manages customer advisory, turnkey solar EPC deployment, and retail operations at AKB Complex, GH Road, Ramanathapuram.',
      credentials: [
        'Direct OEM Liaison & Store Operations',
        '12,500+ Battery & Solar Installations',
        'On-Counter Instant Battery Testing',
      ],
    },
  ];

  const activeLeader = leaders.find((l) => l.id === activeId) || leaders[0];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#16a34a]">
            <Users className="w-3.5 h-3.5 text-[#16a34a]" />
            <span>FOUNDER & SECOND-GENERATION LEADERSHIP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
            The People Behind NS Batteries
          </h2>

          <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
            From Hussain's automobile electrical workshop in 1989 to South Tamil Nadu's No. 1 Power Zone distributor today. Real people, authentic heritage, and direct accountability.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-1.5 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED]">
          {leaders.map((leader) => {
            const isActive = leader.id === activeId;
            return (
              <button
                key={leader.id}
                onClick={() => setActiveId(leader.id)}
                className={`text-left p-3.5 rounded-lg transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-l-4 border-[#16a34a] shadow-sm text-[#0B1722]'
                    : 'text-[#647384] hover:text-[#0B1722] hover:bg-white/50'
                }`}
              >
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase text-[#647384] mb-0.5">
                    {leader.era}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1722] leading-snug">
                    {leader.name}
                  </h4>
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] text-[#647384]">
                  <span className="line-clamp-1">{leader.role.split('&')[0]}</span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#16a34a]' : 'opacity-40'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Spotlight Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F5F7FA] border border-[#E1E7ED] rounded-2xl p-6 sm:p-10">
          {/* Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E1E7ED] bg-white shadow-sm">
              <Image
                src={activeLeader.image}
                alt={activeLeader.name}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded bg-[#0B1722]/85 text-white text-[11px] font-semibold backdrop-blur-sm">
                  {activeLeader.era}
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Quote Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Quote */}
            <div className="p-5 rounded-xl bg-white border border-[#E1E7ED] shadow-sm space-y-2">
              <Quote className="w-6 h-6 text-[#16a34a]" />
              <p className="text-sm sm:text-base text-[#17212B] italic leading-relaxed">
                &ldquo;{activeLeader.quote}&rdquo;
              </p>
              <div className="pt-2 text-xs font-bold text-[#0B1722] uppercase tracking-wide">
                — {activeLeader.name}, {activeLeader.role}
              </div>
            </div>

            {/* Bio */}
            <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">
              {activeLeader.bio}
            </p>

            {/* Credentials */}
            <div className="space-y-1.5 pt-1">
              {activeLeader.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#17212B]">
                  <CheckCircle2 className="w-4 h-4 text-[#16835D] shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            {/* Direct Connect */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B1722] hover:bg-[#122333] text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>Call Storefront</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
