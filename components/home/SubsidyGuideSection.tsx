'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Sun, FileCheck, Layers, BadgePercent } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function SubsidyGuideSection() {
  const steps = [
    {
      step: '01',
      title: 'Check Eligibility & Requirements',
      desc: 'Verify your TANGEDCO consumer connection, sanctioned load, and available shadow-free rooftop area.',
      icon: FileCheck,
    },
    {
      step: '02',
      title: 'Choose Rooftop Solar Solution',
      desc: 'Select a customized on-grid system (1 kW to 10 kW) with Tier-1 bifacial panels matched to your consumption.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Installation & Subsidy Disbursement',
      desc: 'Our team handles national portal documentation, bi-directional net meter installation, and DBT subsidy release.',
      icon: BadgePercent,
    },
  ];

  return (
    <section id="pm-surya-ghar" className="bg-[#F5F7FA] py-16 sm:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Block with Amber Accent */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4B323]/15 border border-[#F4B323]/30 text-[11px] font-bold uppercase tracking-wider text-[#0B1722]">
            <Sun className="w-3.5 h-3.5 text-[#F4B323]" />
            <span>CENTRAL GOVERNMENT SCHEME</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
            Make Rooftop Solar More Affordable
          </h2>

          <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
            Explore rooftop solar options and get guidance on the applicable government subsidy process.
          </p>
        </div>

        {/* Highlight Card: Up to ₹78,000 Subsidy */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#E1E7ED] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-block px-2.5 py-0.5 rounded bg-[#16835D]/10 text-[#16835D] text-xs font-bold uppercase">
              Direct Benefit Transfer (DBT)
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1722]">
              Up to <span className="text-[#16a34a]">₹78,000</span> in eligible central subsidy
            </h3>
            <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">
              Subsidy amounts depend on current scheme guidelines, applicant eligibility, system capacity, and official DISCOM approval requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/calculator"
              className="px-5 py-3 rounded-lg bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Check Subsidy Eligibility
            </Link>
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="px-4 py-3 rounded-lg bg-transparent hover:bg-[#F5F7FA] border border-[#E1E7ED] text-[#0B1722] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>Talk to an Expert</span>
            </a>
          </div>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#E1E7ED] shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-[#F5F7FA] text-[#647384] border border-[#E1E7ED]">
                    STEP {item.step}
                  </span>
                  <item.icon className="w-5 h-5 text-[#16a34a]" />
                </div>
                <h4 className="text-base font-bold text-[#0B1722]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-semibold text-[#16835D] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>End-to-End Assistance Included</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
