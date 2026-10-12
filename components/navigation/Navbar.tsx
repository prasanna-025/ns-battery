'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, Sun, Battery, Zap, Droplets, ArrowRight, MessageCircle, FileText, Calculator } from 'lucide-react';
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
    { href: '/', label: 'Home' },
    { href: '/solar', label: 'Solar Modules' },
    { href: '/solar#pm-surya-ghar', label: 'PM Surya Ghar', badge: 'Subsidy' },
    { href: '/batteries', label: 'Batteries' },
    { href: '/inverters', label: 'Inverters & UPS' },
    { href: '/lubricants', label: 'Gulf Oil & SKF' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'Company' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* 1. Top Slim Navy Information Strip */}
      <div className="bg-[#0B1722] text-[#E1E7ED] border-b border-white/10 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-medium tracking-wide">
          {/* Left: Location & Subsidy Partner */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D9232E]" />
              <span>AKB Complex, GH Road, Ramanathapuram, Tamil Nadu</span>
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#F4B323]">
              <Sun className="w-3.5 h-3.5" />
              <span>PM Surya Ghar Subsidy Partner</span>
            </span>
          </div>

          {/* Right: Helplines */}
          <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
            <span className="text-slate-400 text-[10px] uppercase font-semibold">Helpline:</span>
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="hover:text-white transition-colors font-mono font-semibold"
            >
              {COMPANY_INFO.phones[0].display}
            </a>
            <span className="text-white/20">/</span>
            <a
              href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`}
              className="hover:text-white transition-colors font-mono font-semibold"
            >
              {COMPANY_INFO.phones[1].display}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0B1722]/98 shadow-md border-b border-white/10 py-2.5'
            : 'bg-[#0B1722] border-b border-white/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-10 sm:h-11 w-44 sm:w-48">
              <Image
                src="/logos/asset_4.svg"
                alt="NS Batteries"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-colors relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F4B323]/20 text-[#F4B323]">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Secondary CTA: Solar Calculator */}
            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-[#F4B323]" />
              <span>Solar Calculator</span>
            </Link>

            {/* Primary CTA: Get a Quote */}
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#D9232E] hover:bg-[#B91F29] shadow-sm transition-colors active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6 text-[#D9232E]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="xl:hidden bg-[#122333] border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-2">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-[#D9232E]/20 text-[#D9232E] font-semibold'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F4B323]/20 text-[#F4B323]">
                        {link.badge}
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/calculator"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-lg text-center text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#F4B323]" />
                <span>Solar Calculator</span>
              </Link>
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-lg text-center text-xs font-semibold text-white bg-[#D9232E] hover:bg-[#B91F29] flex items-center justify-center gap-2 shadow"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
