'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, Sun, Battery, Zap, Droplets, ArrowRight, MessageCircle } from 'lucide-react';
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
    { href: '/solar', label: 'Solar Solutions', icon: Sun, highlight: true },
    { href: '/batteries', label: 'Batteries', icon: Battery },
    { href: '/inverters', label: 'Inverters & UPS', icon: Zap },
    { href: '/lubricants', label: 'Gulf Oil & SKF', icon: Droplets },
    { href: '/products', label: 'All Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#030905] border-b border-white/5 text-xs text-emerald-200/90 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>AKB Complex, GH Road, Ramanathapuram</span>
            </span>
            <span className="hidden md:inline-block text-emerald-900">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-amber-400 font-medium">
              <Sun className="w-3.5 h-3.5" />
              <span>PM Surya Ghar Solar Subsidy Authorized Partner</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="font-semibold font-mono">{COMPANY_INFO.phones[0].display}</span>
            </a>
            <span className="text-emerald-900">/</span>
            <a
              href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`}
              className="text-emerald-300 hover:text-white transition-colors font-semibold font-mono"
            >
              {COMPANY_INFO.phones[1].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#040e07]/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-white/10 py-2'
            : 'bg-[#050f08]/90 backdrop-blur-sm border-b border-white/5 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 sm:h-11 w-44 sm:w-48 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logos/asset_4.svg"
                alt="NS Batteries - Energy for People"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-emerald-500/20 border border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                      : link.highlight
                      ? 'text-amber-400 hover:text-amber-300 hover:bg-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.icon && <link.icon className={`w-3.5 h-3.5 ${link.highlight ? 'text-amber-400' : 'text-emerald-400'}`} />}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/solar#calculator"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 hover:from-emerald-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-[1.02] font-display"
            >
              <Sun className="w-3.5 h-3.5 text-emerald-950 animate-spin" style={{ animationDuration: '10s' }} />
              <span>Solar Calculator</span>
            </Link>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello NS Batteries, I would like to inquire about your products and solar solutions.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-[#07170c] border border-white/10 hover:bg-[#0c2615] hover:text-white transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-emerald-300 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#040e07] border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-2">
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
                        ? 'text-white bg-emerald-500/20 border border-emerald-500/40'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {link.icon && <link.icon className="w-4 h-4 text-emerald-400" />}
                      {link.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-500/60" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/solar#calculator"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-bold text-emerald-950 bg-gradient-to-r from-emerald-400 to-amber-300 flex items-center justify-center gap-2 shadow font-display"
              >
                <Sun className="w-4 h-4" />
                <span>Calculate Solar Savings</span>
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-emerald-300 bg-[#07170c] border border-white/10 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
