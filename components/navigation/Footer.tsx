import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1722] text-[#E1E7ED] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Company (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-11 w-48">
              <Image
                src="/logos/asset_2.svg"
                alt="NS Batteries"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Ramanathapuram’s authorized partner for Tier-1 solar modules, automotive batteries, inverters, and industrial lubrication. Built on trust, technical service, and community relationships since 1989.
            </p>
            <div className="flex items-start gap-2.5 text-xs text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          {/* Column 2: Products (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Products & Divisions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/solar" className="hover:text-white transition-colors">
                  Solar Modules & Panels
                </Link>
              </li>
              <li>
                <Link href="/batteries" className="hover:text-white transition-colors">
                  Automotive Batteries
                </Link>
              </li>
              <li>
                <Link href="/batteries?type=tubular" className="hover:text-white transition-colors">
                  Inverter Tubular Batteries
                </Link>
              </li>
              <li>
                <Link href="/inverters" className="hover:text-white transition-colors">
                  Inverters & Home UPS
                </Link>
              </li>
              <li>
                <Link href="/batteries?type=lithium" className="hover:text-white transition-colors">
                  Lithium LiFePO4 Storage
                </Link>
              </li>
              <li>
                <Link href="/lubricants" className="hover:text-white transition-colors">
                  Gulf Oil & SKF Bearings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Company Heritage
                </Link>
              </li>
              <li>
                <Link href="/solar#pm-surya-ghar" className="hover:text-white transition-colors">
                  PM Surya Ghar Subsidy
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  Solar Calculator
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Support
            </h4>
            <p className="text-xs text-slate-400">
              Reach our Ramanathapuram sales & service desk directly:
            </p>
            <div className="space-y-2 pt-1 font-mono text-xs">
              <a
                href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                className="flex items-center gap-2 text-white hover:text-[#16a34a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
                <span className="font-semibold">{COMPANY_INFO.phones[0].display}</span>
              </a>
              <a
                href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`}
                className="flex items-center gap-2 text-white hover:text-[#16a34a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
                <span className="font-semibold">{COMPANY_INFO.phones[1].display}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors pt-1 font-sans text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Instant Support</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Store Hours: Mon–Sat 8:30 AM – 9:00 PM | Sun 9:00 AM – 2:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} NS Batteries. All rights reserved. Energy for People.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Ramanathapuram</span>
            <span>•</span>
            <span>Rameswaram</span>
            <span>•</span>
            <span>Kilakarai</span>
            <span>•</span>
            <span>Southern Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
