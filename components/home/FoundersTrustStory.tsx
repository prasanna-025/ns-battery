'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function FoundersTrustStory() {
  return (
    <section className="w-full py-16 bg-[#041209] border-t border-b border-emerald-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl shadow-black/80 bg-black">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero-family.png"
                  alt="NS Batteries Founders - Family Leadership Ramanathapuram"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04140b] via-transparent to-transparent" />
              </div>

              <div className="p-4 bg-[#05180e] border-t border-emerald-500/20 text-center space-y-1">
                <p className="text-white font-bold text-sm">
                  Founders & Executive Leadership
                </p>
                <p className="text-emerald-400 text-xs">
                  NS Batteries • Ramanathapuram, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Floating Trust Stamp */}
            <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-emerald-950 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 font-bold text-xs">
              <Award className="w-5 h-5 text-emerald-950" />
              <div>
                <p className="leading-tight">15+ Years</p>
                <p className="text-[10px] font-semibold text-emerald-900 uppercase">Unbroken Trust</p>
              </div>
            </div>
          </div>

          {/* Right Column: Family Story & Core Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>OUR FAMILY LEGACY & CODE OF HONOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Built on Real People, Genuine Products & Local Trust
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When NS Batteries opened its doors in Ramanathapuram, our founders set one non-negotiable rule:
              <strong className="text-white"> never compromise on authenticity</strong>. In an industry where customers often worry about counterfeit batteries, exaggerated solar output claims, and delayed warranty claims, our family has stood firm as a dependable anchor.
            </p>

            {/* Core Commitments Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#061e11] border border-emerald-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Factory-Sealed OEM</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every Amaron, Luminous, Powerzone, and UTL product comes with factory barcoded warranty and verified manufacturing date.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#061e11] border border-emerald-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Honest Solar Engineering</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We calculate your real kilowatt requirements without overselling or under-specifying, ensuring your return on investment is realized.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#061e11] border border-emerald-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Instant Counter Replacement</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  During warranty periods, you walk into our Ramanathapuram store and receive prompt testing and battery replacement without runarounds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#061e11] border border-emerald-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Personal Family Backing</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our founders and our certified local technicians are always accessible on our direct phone lines for any service question.
                </p>
              </div>
            </div>

            {/* Direct Founder Contact Quote */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-emerald-900/60 text-xs text-slate-400">
              <p className="italic">
                “Energy for People is not just our slogan — it is how we earn our bread and honor our family name every single day.”
              </p>
              <a
                href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Speak with our Store: {COMPANY_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
