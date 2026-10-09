import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sun, Battery, Zap, Droplets, ExternalLink, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-[#050b11] border-t border-white/10 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="relative h-12 w-52 mb-2">
              <Image
                src="/logos/asset_4.svg"
                alt="NS Batteries - Energy for People"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#cd2028] font-bold uppercase tracking-wider text-xs">
              ENERGY FOR PEOPLE • RAMANATHAPURAM
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Southern Tamil Nadu’s premier energy house. Delivering turnkey PM Surya Ghar rooftop solar plants, high-cranking automotive batteries, pure sine wave inverters, lithium energy storage, and genuine Gulf Oil lubricants.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#cd2028]" />
                <span>100% Factory Direct OEM</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>PM Surya Ghar Partner</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Divisions */}
          <div className="space-y-3 text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-[#cd2028] pb-2">
              SOLAR & STORAGE
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/solar" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Rooftop Solar PV Systems</span>
                </Link>
              </li>
              <li>
                <Link href="/solar#calculator" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-[#cd2028]" />
                  <span>Solar Savings Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/batteries" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Automobile Batteries</span>
                </Link>
              </li>
              <li>
                <Link href="/batteries?category=inverter-battery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Battery className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inverter Tubular Batteries</span>
                </Link>
              </li>
              <li>
                <Link href="/inverters" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pure Sine Wave Inverters</span>
                </Link>
              </li>
              <li>
                <Link href="/batteries?category=lithium" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-teal-400" />
                  <span>LiFePO4 Lithium Storage</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3 text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-[#cd2028] pb-2">
              COMPANY & POLICIES
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Founders Heritage & Vision
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Full Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Storefront & Counter Location
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  Request Free Site Assessment
                </Link>
              </li>
              <li>
                <Link href="/lubricants" className="hover:text-white transition-colors">
                  Gulf Oil & SKF Bearings
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Registered & Showroom Office */}
          <div className="space-y-3 text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-[#cd2028] pb-2">
              STOREFRONT & CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#cd2028] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  21/20, AKB Complex, Ground Floor, Lathams Bangalow GH Road, Ramanathapuram – 623501, Tamil Nadu.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#cd2028] shrink-0" />
                <div>
                  <a href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`} className="text-white hover:text-[#cd2028] font-bold font-mono block">
                    +91 {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`} className="text-white hover:text-[#cd2028] font-bold font-mono block">
                    +91 {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <p className="text-[11px]">
                  Mon – Sat: 8:30 AM – 9:00 PM<br />
                  Sun: 9:00 AM – 2:00 PM
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#cd2028] hover:text-white underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter / Enquiry Strip (Vikram Solar Style) */}
        <div className="p-6 rounded-lg bg-[#08121c] border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Updated with PM Surya Ghar & Solar Subsidies
            </h5>
            <p className="text-xs text-slate-400">
              Get notified of TANGEDCO tariff updates and central subsidy policy notifications.
            </p>
          </div>

          <div className="flex items-center w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email ID"
              className="px-3.5 py-2.5 rounded bg-[#0c1a27] border border-white/15 text-xs text-white focus:outline-none focus:border-[#cd2028] w-full"
            />
            <button
              type="button"
              className="vikram-btn text-xs font-bold uppercase tracking-wider px-4 py-2.5 shrink-0"
            >
              <span>Subscribe</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NS BATTERIES LTD. ALL RIGHTS RESERVED. RAMANATHAPURAM, TAMIL NADU.</p>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider font-semibold">
            <span className="text-white">ENERGY FOR PEOPLE</span>
            <span>•</span>
            <span>SOLAR PV • AUTOMOBILE • INVERTER • LUBRICANTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
