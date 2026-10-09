'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { ShieldCheck, MessageCircle, Zap, ChevronDown, ChevronUp, Check, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showSpecs, setShowSpecs] = useState(false);

  const whatsappMessage = `Hello NS Batteries, I am interested in *${product.name}* (${product.brand} - ${product.capacity || 'Standard'}). Please let me know price and availability at your Ramanathapuram store.`;

  return (
    <div className="flex flex-col justify-between rounded-lg bg-[#0a1622] border border-white/10 hover:border-[#cd2028] transition-all duration-300 p-5 shadow-lg hover:shadow-2xl group relative">
      {/* Top Meta */}
      <div className="space-y-3 text-left">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
            {product.brand}
          </span>
          {product.warranty && (
            <span className="text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>{product.warranty}</span>
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-base font-bold uppercase text-white group-hover:text-[#cd2028] transition-colors leading-snug font-display">
          {product.name}
        </h3>

        {/* Capacity / Voltage highlight */}
        {(product.capacity || product.voltage) && (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Zap className="w-3.5 h-3.5 text-[#cd2028]" />
            <span>
              {product.capacity} {product.voltage ? `• ${product.voltage}` : ''}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Highlights List */}
        <div className="space-y-1 pt-1">
          {product.highlights.slice(0, 3).map((hl, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
              <Check className="w-3 h-3 text-[#cd2028] shrink-0" />
              <span className="truncate">{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Accordion */}
      <div className="pt-4 mt-3 border-t border-white/10 space-y-3">
        {Object.keys(product.specs).length > 0 && (
          <div>
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-white flex items-center justify-between w-full py-1"
            >
              <span>{showSpecs ? 'Hide Technical Specs' : 'View Technical Specifications'}</span>
              {showSpecs ? <ChevronUp className="w-3.5 h-3.5 text-[#cd2028]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#cd2028]" />}
            </button>

            {showSpecs && (
              <div className="mt-2 space-y-1.5 p-3 rounded bg-[#061018] border border-white/10 text-[11px]">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between items-start gap-2 text-slate-400">
                    <span className="font-semibold text-slate-300 shrink-0 uppercase tracking-wider">{k}:</span>
                    <span className="text-right text-white font-mono">{v}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-2 pt-1">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded bg-[#cd2028] hover:bg-[#b0171e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Check Price & Availability</span>
          </a>
        </div>
      </div>
    </div>
  );
}
