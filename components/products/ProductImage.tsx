'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Battery, Sun, Zap, Shield, Droplets, Wrench, Sparkles } from 'lucide-react';

interface ProductImageProps {
  src?: string;
  alt: string;
  category: string;
  brand?: string;
  isIllustrative?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  solar: '/images/products/category-solar.jpg',
  automobile: '/images/products/category-automobile.jpg',
  'inverter-battery': '/images/products/category-inverter-battery.jpg',
  inverter: '/images/products/category-inverter.jpg',
  lithium: '/images/products/category-lithium.jpg',
  lubricants: '/images/products/category-lubricants.webp',
  accessories: '/images/products/category-accessories.jpg',
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  solar: Sun,
  automobile: Battery,
  'inverter-battery': Zap,
  inverter: Zap,
  lithium: Battery,
  lubricants: Droplets,
  accessories: Wrench,
};

export default function ProductImage({
  src,
  alt,
  category,
  brand,
  isIllustrative = false,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px',
  priority = false,
}: ProductImageProps) {
  const [errorCount, setErrorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Determine initial image source or category fallback
  const initialSrc = src || CATEGORY_FALLBACK_IMAGES[category] || '/images/products/category-automobile.jpg';
  const fallbackSrc = CATEGORY_FALLBACK_IMAGES[category] || '/images/products/category-automobile.jpg';

  const currentSrc = errorCount === 0 ? initialSrc : errorCount === 1 ? fallbackSrc : null;

  const IconComponent = CATEGORY_ICONS[category] || Battery;

  return (
    <div className={`relative w-full aspect-[4/3] bg-[#F8FAFC] overflow-hidden rounded-t-xl group ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && currentSrc && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <IconComponent className="w-8 h-8 text-slate-300 animate-bounce" />
        </div>
      )}

      {/* Actual Image or Category Fallback */}
      {currentSrc ? (
        <Image
          src={currentSrc}
          alt={alt || `${brand || 'NS Batteries'} ${category} product`}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setErrorCount((prev) => prev + 1);
          }}
          className={`object-cover object-center transition-transform duration-500 group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : (
        /* Deterministic SVG Fallback when no image is available */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#F8FAFC] to-[#EDF2F7] text-slate-400">
          <IconComponent className="w-12 h-12 text-slate-300 mb-2 stroke-[1.5]" />
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{category.replace('-', ' ')}</span>
          <span className="text-[10px] text-slate-400 font-mono mt-0.5">{brand || 'NS Batteries'}</span>
        </div>
      )}

      {/* Subtle Illustrative Badge (Ensures no false official branding is implied) */}
      {isIllustrative && (
        <div className="absolute top-2.5 right-2.5 bg-[#0B1722]/80 backdrop-blur-sm text-slate-200 text-[9px] font-mono font-medium px-2 py-0.5 rounded shadow-sm flex items-center gap-1 border border-white/10 pointer-events-none">
          <Sparkles className="w-2.5 h-2.5 text-[#16a34a]" />
          <span>Spec Photo</span>
        </div>
      )}
    </div>
  );
}
