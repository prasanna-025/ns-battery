'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Calculator, MapPin, Sun } from 'lucide-react';
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
      {/* Desktop: Refined, Compact, Unobtrusive Floating Utility Dock */}
      <aside
        aria-label="Quick Actions"
        className="fixed right-3 bottom-8 z-40 hidden lg:flex flex-col gap-2 items-end pointer-events-auto"
      >
        <div className="flex flex-col gap-1.5 p-1.5 bg-white/95 backdrop-blur-md border border-[#E1E7ED] rounded-xl shadow-lg">
          {/* Action 1: Call Helpline */}
          <a
            href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
            className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:text-white hover:bg-[#D9232E] transition-colors group"
            title="Call Helpline: 88701 20911"
          >
            <Phone className="w-4 h-4 text-[#D9232E] group-hover:text-white" />
            <span className="hidden xl:inline text-xs font-semibold">88701 20911</span>
          </a>

          {/* Action 2: WhatsApp Chat */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello NS Batteries, I would like to inquire about your solar and battery solutions.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:text-white hover:bg-[#16835D] transition-colors group"
            title="WhatsApp Live Chat"
          >
            <MessageCircle className="w-4 h-4 text-[#16835D] group-hover:text-white" />
            <span className="hidden xl:inline text-xs font-semibold">WhatsApp</span>
          </a>

          {/* Action 3: Solar Calculator */}
          <Link
            href="/calculator"
            className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:text-white hover:bg-[#0B1722] transition-colors group"
            title="Solar Savings Calculator"
          >
            <Calculator className="w-4 h-4 text-[#F4B323] group-hover:text-white" />
            <span className="hidden xl:inline text-xs font-semibold">Calculator</span>
          </Link>

          {/* Action 4: Store Location */}
          <a
            href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:text-white hover:bg-[#0B1722] transition-colors group"
            title="Store Location (AKB Complex)"
          >
            <MapPin className="w-4 h-4 text-[#D9232E] group-hover:text-white" />
            <span className="hidden xl:inline text-xs font-semibold">Store Map</span>
          </a>

          {/* Action 5: Subsidy Guide */}
          <Link
            href="/solar#pm-surya-ghar"
            className="flex items-center gap-2 p-2 rounded-lg text-slate-700 hover:text-white hover:bg-[#0B1722] transition-colors group"
            title="PM Surya Ghar Subsidy Guide"
          >
            <Sun className="w-4 h-4 text-[#F4B323] group-hover:text-white" />
            <span className="hidden xl:inline text-xs font-semibold">Subsidy</span>
          </Link>
        </div>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full bg-[#0B1722] text-white hover:bg-[#D9232E] shadow-md flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
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
          className="flex flex-col items-center gap-0.5 text-[#0B1722] hover:text-[#D9232E] py-1"
        >
          <Phone className="w-4 h-4 text-[#D9232E]" />
          <span className="text-[10px] font-semibold">Call Now</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[#0B1722] hover:text-[#16835D] py-1"
        >
          <MessageCircle className="w-4 h-4 text-[#16835D]" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        <Link
          href="/calculator"
          className="flex flex-col items-center gap-0.5 text-[#0B1722] hover:text-[#F4B323] py-1"
        >
          <Calculator className="w-4 h-4 text-[#F4B323]" />
          <span className="text-[10px] font-semibold">Calculator</span>
        </Link>

        <Link
          href="/quote"
          className="flex flex-col items-center gap-0.5 text-white bg-[#D9232E] px-3 py-1 rounded-md shadow-sm"
        >
          <span className="text-[11px] font-bold">Get Quote</span>
        </Link>
      </nav>
    </>
  );
}
