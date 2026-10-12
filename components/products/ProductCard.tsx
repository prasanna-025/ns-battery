'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { ShieldCheck, MessageCircle, Zap, ChevronDown, ChevronUp, Check, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import ProductImage from './ProductImage';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showSpecs, setShowSpecs] = useState(false);

  const whatsappMessage = `Hello NS Batteries, I am interested in *${product.name}* (${product.brand} - ${product.capacity || 'Standard'}). Please let me know the price, warranty, and availability at your Ramanathapuram counter.`;

  return (
    <article className="flex flex-col justify-between rounded-xl bg-white border border-[#E1E7ED] hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md group overflow-hidden">
      {/* Product Image Header with Loading and Error Fallback */}
      <ProductImage
        src={product.image}
        alt={product.name}
        category={product.category}
        brand={product.brand}
        isIllustrative={product.isIllustrative}
      />

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-2.5">
          {/* Brand & Warranty Meta */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[11px] font-bold text-[#0B1722] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E1E7ED]">
              {product.brand}
            </span>
            {product.warranty && (
              <span className="text-[11px] font-semibold text-[#16835D] px-2 py-0.5 rounded bg-emerald-50 flex items-center gap-1 border border-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[140px]">{product.warranty}</span>
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="text-base font-bold text-[#0B1722] group-hover:text-[#16a34a] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Capacity / Voltage highlight */}
          {(product.capacity || product.voltage) && (
            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#647384]">
              <Zap className="w-3.5 h-3.5 text-[#F4B323] shrink-0" />
              <span>
                {product.capacity} {product.voltage ? `• ${product.voltage}` : ''}
              </span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs text-[#647384] leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Highlights List */}
          <ul className="space-y-1 pt-1" aria-label="Key highlights">
            {product.highlights.slice(0, 3).map((hl, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-[#17212B]">
                <Check className="w-3.5 h-3.5 text-[#16835D] shrink-0" />
                <span className="truncate">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions & Technical Specifications */}
        <div className="pt-3 border-t border-[#F1F5F9] space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-[#16835D] hover:bg-[#136C4D] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 hover:scale-[1.02] active:scale-[1.06] shadow-sm"
              title="Chat with NS Batteries on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </a>

            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="w-full py-2 px-3 rounded-lg bg-[#F8FAFC] hover:bg-[#E2E8F0] border border-[#E1E7ED] text-[#0B1722] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 hover:scale-[1.02] active:scale-[1.06]"
              title="Call NS Batteries Ramanathapuram Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>Call Store</span>
            </a>
          </div>

          {/* Expand Specifications Drawer */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div>
              <button
                type="button"
                onClick={() => setShowSpecs(!showSpecs)}
                className="w-full text-center text-[11px] font-semibold text-[#647384] hover:text-[#0B1722] flex items-center justify-center gap-1 py-1 transition-colors"
                aria-expanded={showSpecs}
              >
                <span>{showSpecs ? 'Hide Specifications' : 'Technical Specifications'}</span>
                {showSpecs ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              {showSpecs && (
                <div className="mt-2 p-3 rounded-lg bg-[#F8FAFC] border border-[#E1E7ED] text-[11px] space-y-1.5 font-mono text-[#17212B]">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-[#E1E7ED]/60 pb-1 last:border-0 last:pb-0">
                      <span className="text-[#647384] capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-semibold text-right pl-2">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
