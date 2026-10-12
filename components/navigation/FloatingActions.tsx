'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Calculator, MapPin, Sun, ChevronRight, FileCheck } from 'lucide-react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Action Dock Styled Exactly like User Image 1 (with Light Green instead of Red) */}
      <aside
        aria-label="Quick Actions"
        className="fixed right-3 bottom-6 z-40 hidden lg:flex flex-col gap-2 items-end pointer-events-auto"
      >
        <div className="flex flex-col gap-1.5 w-48 shadow-2xl">
          {/* Action 1: Helpline with Light Green Border */}
          <a
            href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B1722]/95 hover:bg-[#122333] border-l-4 border-[#16A34A] border-y border-r border-white/10 text-white transition-all duration-200 shadow-md group hover:scale-105 hover:-translate-x-1 active:scale-110"
            title="Call Helpline"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#16A34A] shrink-0" />
              <div className="text-left">
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Helpline</span>
                <span className="block text-xs font-bold text-white font-mono leading-tight">{COMPANY_INFO.phones[0].display}</span>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
          </a>

          {/* Action 2: WhatsApp Live Chat with Green Border */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello NS Batteries, I would like to inquire about your solar and battery solutions.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B1722]/95 hover:bg-[#122333] border-l-4 border-[#22C55E] border-y border-r border-white/10 text-white transition-all duration-200 shadow-md group hover:scale-105 hover:-translate-x-1 active:scale-110"
            title="WhatsApp Live Chat"
          >
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-[#22C55E] shrink-0" />
              <div className="text-left">
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
                <span className="block text-xs font-bold text-white leading-tight">Live Chat</span>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
          </a>

          {/* Action 3: Solar Calculator with Yellow/Amber Border */}
          <Link
            href="/calculator"
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B1722]/95 hover:bg-[#122333] border-l-4 border-[#F4B323] border-y border-r border-white/10 text-white transition-all duration-200 shadow-md group hover:scale-105 hover:-translate-x-1 active:scale-110"
            title="Solar Calculator"
          >
            <div className="flex items-center gap-2.5">
              <Sun className="w-4 h-4 text-[#F4B323] shrink-0" />
              <div className="text-left">
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Solar Calculator</span>
                <span className="block text-xs font-bold text-[#F4B323] leading-tight">Save 90% EB</span>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
          </Link>

          {/* Action 4: Store Locator with Cyan/Blue Border */}
          <a
            href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B1722]/95 hover:bg-[#122333] border-l-4 border-[#38BDF8] border-y border-r border-white/10 text-white transition-all duration-200 shadow-md group hover:scale-105 hover:-translate-x-1 active:scale-110"
            title="Store Locator (AKB Complex)"
          >
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <div className="text-left">
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Store Locator</span>
                <span className="block text-xs font-bold text-white leading-tight">AKB Complex</span>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
          </a>

          {/* Action 5: Subsidy Guide Pill in Light Green */}
          <Link
            href="/solar#pm-surya-ghar"
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white transition-all duration-200 shadow-lg group mt-0.5 hover:scale-105 hover:-translate-x-1 active:scale-110"
            title="PM Surya Ghar Subsidy Guide"
          >
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-4 h-4 text-white shrink-0" />
              <div className="text-left">
                <span className="block text-[9px] font-bold text-white/80 uppercase tracking-wider">Subsidy Guide</span>
                <span className="block text-xs font-extrabold text-white leading-tight">₹78,000 Grant</span>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
          </Link>
        </div>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-[#0B1722] text-white hover:bg-[#16A34A] border border-white/20 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-125"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        )}
      </aside>

      {/* Mobile: Compact Fixed Bottom Action Bar */}
      <nav
        aria-label="Mobile Quick Actions"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E1E7ED] px-4 py-2 flex items-center justify-around shadow-lg lg:hidden"
      >
        <a
          href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
          className="flex flex-col items-center gap-0.5 text-[#0B1722] hover:text-[#16A34A] py-1 transition-all duration-200 hover:scale-105 active:scale-110"
        >
          <Phone className="w-4 h-4 text-[#16A34A]" />
          <span className="text-[10px] font-semibold">Call Now</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[#0B1722] hover:text-[#16A34A] py-1 transition-all duration-200 hover:scale-105 active:scale-110"
        >
          <MessageCircle className="w-4 h-4 text-[#16A34A]" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        <Link
          href="/calculator"
          className="flex flex-col items-center gap-0.5 text-[#0B1722] hover:text-[#F4B323] py-1 transition-all duration-200 hover:scale-105 active:scale-110"
        >
          <Calculator className="w-4 h-4 text-[#F4B323]" />
          <span className="text-[10px] font-semibold">Calculator</span>
        </Link>

        <Link
          href="/quote"
          className="flex flex-col items-center gap-0.5 text-white bg-[#16A34A] hover:bg-[#15803D] px-3 py-1 rounded-md shadow-sm transition-all duration-200 hover:scale-105 active:scale-110"
        >
          <span className="text-[11px] font-bold">Get Quote</span>
        </Link>
      </nav>
    </>
  );
}
