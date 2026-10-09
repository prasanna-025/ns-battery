'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sun, MapPin, FileText, ChevronRight } from 'lucide-react';
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
      {/* Vikram Solar Iconic Right Floating Action Tabs (Desktop / Tablet) */}
      <aside
        aria-label="Quick Actions"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1 items-end pointer-events-auto"
      >
        {/* Tab 1: Toll Free Call */}
        <a
          href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
          className="group flex items-center justify-between gap-3 bg-[#0a1622] hover:bg-[#cd2028] text-white border-l-4 border-[#cd2028] hover:border-white px-3.5 py-2.5 rounded-l-md shadow-xl transition-all duration-200 w-36 hover:w-44 overflow-hidden"
          title="Direct Toll-Free Helpline"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#cd2028] group-hover:text-white shrink-0" />
            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-white/80 font-bold">Helpline</span>
              <span className="block text-xs font-mono font-bold leading-tight">88701 20911</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
        </a>

        {/* Tab 2: WhatsApp Chat */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello NS Batteries, I would like to inquire about your solar and battery solutions.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 bg-[#0a1622] hover:bg-[#25D366] text-white border-l-4 border-[#25D366] hover:border-white px-3.5 py-2.5 rounded-l-md shadow-xl transition-all duration-200 w-36 hover:w-44 overflow-hidden"
          title="Direct WhatsApp Support"
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white shrink-0 fill-current" />
            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-white/80 font-bold">WhatsApp</span>
              <span className="block text-xs font-bold leading-tight">Live Chat</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
        </a>

        {/* Tab 3: Solar Calculator */}
        <Link
          href="/solar#calculator"
          className="group flex items-center justify-between gap-3 bg-[#0a1622] hover:bg-[#cd2028] text-white border-l-4 border-amber-500 hover:border-white px-3.5 py-2.5 rounded-l-md shadow-xl transition-all duration-200 w-36 hover:w-44 overflow-hidden"
          title="Estimate Solar Subsidy & Savings"
        >
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-400 group-hover:text-white shrink-0" />
            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-white/80 font-bold">Solar Calculator</span>
              <span className="block text-xs font-bold leading-tight">Save 90% EB</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
        </Link>

        {/* Tab 4: Store / Dealer Locator */}
        <Link
          href="/contact"
          className="group flex items-center justify-between gap-3 bg-[#0a1622] hover:bg-[#cd2028] text-white border-l-4 border-slate-500 hover:border-white px-3.5 py-2.5 rounded-l-md shadow-xl transition-all duration-200 w-36 hover:w-44 overflow-hidden"
          title="Store Locator - Ramanathapuram"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-300 group-hover:text-white shrink-0" />
            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-white/80 font-bold">Store Locator</span>
              <span className="block text-xs font-bold leading-tight">AKB Complex</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
        </Link>

        {/* Tab 5: PM Surya Ghar Brochure */}
        <Link
          href="/quote"
          className="group flex items-center justify-between gap-3 bg-[#0a1622] hover:bg-[#cd2028] text-white border-l-4 border-emerald-500 hover:border-white px-3.5 py-2.5 rounded-l-md shadow-xl transition-all duration-200 w-36 hover:w-44 overflow-hidden"
          title="PM Surya Ghar Subsidy Guide"
        >
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400 group-hover:text-white shrink-0" />
            <div className="text-left">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-white/80 font-bold">Subsidy Guide</span>
              <span className="block text-xs font-bold leading-tight">₹78,000 Grant</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
        </Link>
      </aside>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-md bg-[#0a1622] hover:bg-[#cd2028] border border-white/10 text-white transition-all flex items-center justify-center shadow-2xl backdrop-blur-sm"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Bottom Bar for Mobile Devices (Vikram Solar Mobile Bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#07111a]/95 border-t border-white/10 backdrop-blur-md px-2 py-2">
        <div className="grid grid-cols-4 gap-1.5">
          {/* Call button */}
          <a
            href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md bg-[#0c1a27] border border-white/5 text-slate-200 active:bg-[#cd2028] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#cd2028] mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello NS Batteries, I need assistance with solar / battery products.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md bg-[#0c1a27] border border-white/5 text-slate-200 active:bg-[#25D366] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5 fill-current" />
            <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* Solar Calc button */}
          <Link
            href="/solar#calculator"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md bg-[#0c1a27] border border-white/5 text-slate-200 active:bg-amber-600 transition-colors"
          >
            <Sun className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Solar Calc</span>
          </Link>

          {/* Quote button */}
          <Link
            href="/quote"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md bg-[#cd2028] text-white active:scale-95 transition-transform shadow-md"
          >
            <FileText className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Quote</span>
          </Link>
        </div>
      </div>
    </>
  );
}
