'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, Sun, Battery, Zap, Droplets, ArrowRight, MessageCircle, FileText, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/solar', label: 'SOLAR MODULES', icon: Sun, badge: 'PM SURYA GHAR' },
    { href: '/batteries', label: 'BATTERIES', icon: Battery },
    { href: '/inverters', label: 'INVERTERS & UPS', icon: Zap },
    { href: '/lubricants', label: 'GULF OIL & SKF', icon: Droplets },
    { href: '/products', label: 'PRODUCTS' },
    { href: '/about', label: 'COMPANY' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Corporate Strip (Vikram Solar Style) */}
      <div className="bg-[#050b10] border-b border-white/10 text-xs text-slate-300 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-semibold tracking-wide uppercase">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#cd2028]" />
              <span>AKB Complex, GH Road, Ramanathapuram, Tamil Nadu</span>
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-amber-400">
              <Sun className="w-3.5 h-3.5" />
              <span>PM Surya Ghar Govt Subsidy Partner</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden sm:inline">TOLL FREE / HELPLINE:</span>
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="flex items-center gap-1.5 text-white hover:text-[#cd2028] transition-colors font-mono font-bold"
            >
              <Phone className="w-3 h-3 text-[#cd2028]" />
              <span>{COMPANY_INFO.phones[0].display}</span>
            </a>
            <span className="text-white/20">/</span>
            <a
              href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`}
              className="text-white hover:text-[#cd2028] transition-colors font-mono font-bold"
            >
              {COMPANY_INFO.phones[1].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation (Vikram Solar Style) */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08121a]/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-white/10 py-2.5'
            : 'bg-[#071017]/90 backdrop-blur-sm border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo with Energy Insignia */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 sm:h-12 w-44 sm:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logos/asset_4.svg"
                alt="NS Batteries - Energy for People"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links (High-impact Uppercase Industrial Sans) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-xs font-bold tracking-wider transition-all duration-200 relative group flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white border-b-2 border-[#cd2028] bg-white/5'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {link.badge}
                    </span>
                  )}
                  {/* Subtle red indicator on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cd2028] group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </div>

          {/* Right Action CTAs (Vikram Red Button) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/solar#calculator"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 hover:text-white transition-all duration-200"
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Solar Calc</span>
            </Link>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#cd2028] hover:bg-[#b0171e] shadow-lg shadow-[#cd2028]/30 hover:shadow-[#cd2028]/50 transition-all duration-200 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get A Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded text-slate-200 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6 text-[#cd2028]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#07111a] border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-2">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-[#cd2028]/20 border-l-4 border-[#cd2028]'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {link.icon && <link.icon className="w-4 h-4 text-[#cd2028]" />}
                      {link.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 rounded text-center text-xs font-bold uppercase tracking-wider text-white bg-[#cd2028] flex items-center justify-center gap-2 shadow"
              >
                <FileText className="w-4 h-4" />
                <span>Request Free Site Quote</span>
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded text-center text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#0b1b28] border border-white/10 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
