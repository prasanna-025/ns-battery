'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sun } from 'lucide-react';
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
      {/* Floating Desktop / Tablet Quick Action Widgets */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-all flex items-center justify-center shadow-lg shadow-black/40 backdrop-blur-sm"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Direct Floating Button with pulse */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello NS Batteries, I would like to inquire about your products and solar solutions.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 text-emerald-950 fill-emerald-950" />
          <span className="text-sm font-semibold tracking-wide">Instant WhatsApp</span>
        </a>
      </div>

      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#04160c]/95 border-t border-emerald-500/30 backdrop-blur-md px-3 py-2">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-950/70 border border-emerald-600/30 text-emerald-200 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="text-[11px] font-semibold">Call Store</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello NS Batteries, I need assistance with solar / battery products.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-500 text-emerald-950 active:scale-95 transition-transform shadow-md shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-950 mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          {/* Solar Calc button */}
          <Link
            href="/solar#calculator"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 active:scale-95 transition-transform"
          >
            <Sun className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[11px] font-semibold">Solar Calc</span>
          </Link>
        </div>
      </div>
    </>
  );
}
