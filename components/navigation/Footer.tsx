import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sun, Battery, Zap, Droplets, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-[#031107] border-t border-emerald-900/50 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-12 w-52 mb-2">
              <Image
                src="/logos/asset_4.svg"
                alt="NS Batteries"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-emerald-400 font-semibold tracking-wide text-sm">
              ENERGY FOR PEOPLE
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ramanathapuram’s trusted family-owned energy partner. Providing Tier-1 rooftop solar systems, high-cranking automotive batteries, pure sine wave inverters, lithium energy storage, and industrial lubricants.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/20 text-xs text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine OEM Warranty</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/50 border border-amber-500/20 text-xs text-amber-300">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>PM Surya Ghar Partner</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider text-emerald-400 border-b border-emerald-900/40 pb-2">
              Divisions
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/solar" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Solar Rooftop Systems</span>
                </Link>
              </li>
              <li>
                <Link href="/batteries" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Automobile Batteries</span>
                </Link>
              </li>
              <li>
                <Link href="/batteries?category=inverter-battery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inverter Tubular Batteries</span>
                </Link>
              </li>
              <li>
                <Link href="/inverters" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inverters & Solar PCU</span>
                </Link>
              </li>
              <li>
                <Link href="/batteries?category=lithium" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Lithium LiFePO4 Storage</span>
                </Link>
              </li>
              <li>
                <Link href="/lubricants" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Gulf Oil & SKF Bearings</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider text-emerald-400 border-b border-emerald-900/40 pb-2">
              Information
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Founders & Heritage
                </Link>
              </li>
              <li>
                <Link href="/solar#calculator" className="hover:text-emerald-400 transition-colors">
                  Solar Savings Calculator
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 transition-colors">
                  Full Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Storefront & Location
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-emerald-400 transition-colors">
                  Request Free Site Survey
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Location & Contacts */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider text-emerald-400 border-b border-emerald-900/40 pb-2">
              Store & Contact
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  21/20, AKB Complex, Ground Floor, Lathams Bangalow GH Road, Ramanathapuram – 623501, TN.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <a href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`} className="text-slate-200 hover:text-white font-medium block">
                    +91 {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`} className="text-slate-200 hover:text-white font-medium block">
                    +91 {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <p className="text-xs">
                  Mon - Sat: 8:30 AM – 9:00 PM<br />
                  Sun: 9:00 AM – 2:00 PM
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NS Batteries. All rights reserved. Ramanathapuram, Tamil Nadu.</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400/80 font-medium">Energy for People</span>
            <span>•</span>
            <span>Solar • Automotive • Inverter • Industrial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
