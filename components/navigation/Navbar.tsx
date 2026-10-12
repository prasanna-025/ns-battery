'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Sun, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solar', label: 'Solar Modules' },
    { href: '/solar#pm-surya-ghar', label: 'PM Surya Ghar' },
    { href: '/batteries', label: 'Batteries' },
    { href: '/inverters', label: 'Inverters & UPS' },
    { href: '/lubricants', label: 'Gulf Oil & SKF' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'Company' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Top Bar: Navy Strip */}
      <div className="bg-[#0B1722] text-[#FFFFFF] text-[12px] border-b border-[#122333]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4 truncate">
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F4B323] shrink-0" />
              <span className="truncate">21/20, AKB Complex, GH Road, Ramanathapuram – 623501</span>
            </div>
            <span className="hidden md:inline text-[#122333]">|</span>
            <div className="flex items-center gap-1.5 bg-[#122333]/80 px-2 py-0.5 rounded">
              <Sun className="w-3.5 h-3.5 text-[#F4B323] shrink-0" />
              <span className="font-mono text-[#F4B323] tracking-wider text-[11px] uppercase font-semibold">
                PM Surya Ghar Partner
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#86efac] shrink-0" />
              <a href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`} className="text-white font-semibold hover:text-[#86efac]">
                {COMPANY_INFO.phones[0].display}
              </a>
              <span className="text-slate-500">/</span>
              <a href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`} className="text-white font-semibold hover:text-[#86efac]">
                {COMPANY_INFO.phones[1].display}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar: Clean Canvas White with subtle border & shadow */}
      <div className="bg-white border-b border-[#E1E7ED] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo with Green Branding */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-11 w-44 sm:w-48">
              <Image
                src="/logos/asset_1.svg"
                alt="NS Batteries"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-200 py-2 flex items-center h-full text-sm font-medium hover:scale-105 active:scale-110 ${
                    isActive
                      ? 'text-[#16a34a] font-semibold border-b-2 border-[#16a34a] scale-105'
                      : 'text-[#54606d] hover:text-[#0B1722]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/calculator"
              className="hidden sm:inline-flex items-center text-xs font-semibold px-4 py-2 rounded-xl text-[#0B1722] border border-[#0B1722] hover:bg-[#F5F7FA] hover:scale-105 active:scale-110 transition-all duration-200 shadow-sm"
            >
              Solar Calculator
            </Link>

            <Link
              href="/quote"
              className="inline-flex items-center text-xs font-semibold px-4 py-2 rounded-xl text-white bg-[#15803d] hover:bg-[#166534] hover:scale-105 active:scale-110 transition-all duration-200 shadow-sm"
            >
              Get a Quote
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-[#0B1722] hover:bg-slate-100 hover:scale-105 active:scale-110 transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#16a34a]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-[#E1E7ED] px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-all duration-200 hover:scale-[1.02] active:scale-105 ${
                      isActive
                        ? 'text-[#16a34a] bg-emerald-50 font-semibold scale-[1.02]'
                        : 'text-slate-700 hover:text-[#0B1722] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#E1E7ED] flex flex-col gap-2">
              <Link
                href="/calculator"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-[#0B1722] border border-[#0B1722] hover:bg-slate-50 hover:scale-[1.02] active:scale-105 transition-all duration-200"
              >
                Solar Calculator
              </Link>
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-white bg-[#15803d] hover:bg-[#166534] shadow hover:scale-[1.02] active:scale-105 transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
