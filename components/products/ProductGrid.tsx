'use client';

import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';
import { Search, X, SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  initialCategory?: string;
  limit?: number;
  featuredOnly?: boolean;
}

export default function ProductGrid({
  initialCategory = 'all',
  limit,
  featuredOnly = false,
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PRODUCTS.length,
    };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = PRODUCTS.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Featured match if requested
      const matchFeatured = !featuredOnly || item.isFeatured;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.capacity && item.capacity.toLowerCase().includes(query));

      return matchCategory && matchFeatured && matchSearch;
    });
  }, [selectedCategory, searchQuery, featuredOnly]);

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <div className="w-full space-y-6 text-left">
      {/* Category Pills & Search Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-xl border border-[#E1E7ED] shadow-sm">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0B1722] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-[#647384] hover:text-[#0B1722] hover:bg-slate-100 border border-[#E1E7ED]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="w-4 h-4 text-[#647384] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by brand, model, kW, Ah..."
            className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#F8FAFC] border border-[#E1E7ED] text-xs text-[#17212B] placeholder-[#647384] focus:bg-white focus:border-[#16a34a] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#647384] hover:text-[#0B1722]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Header Info */}
      <div className="flex items-center justify-between text-xs text-[#647384] px-1">
        <span>
          Showing <strong className="text-[#0B1722]">{displayedProducts.length}</strong> of{' '}
          <strong className="text-[#0B1722]">{PRODUCTS.length}</strong> verified products
        </span>
        {searchQuery && (
          <span className="font-mono text-[11px]">
            Filtered by: &ldquo;{searchQuery}&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Product Cards */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl bg-[#F8FAFC] border border-[#E1E7ED] text-[#647384] space-y-3">
          <SlidersHorizontal className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="text-sm font-semibold text-[#0B1722]">No matching products found</p>
          <p className="text-xs max-w-sm mx-auto text-slate-500">
            We couldn&apos;t find anything matching your search criteria. Try a different term or clear your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-2 px-4 py-2 rounded-lg bg-[#0B1722] text-white text-xs font-semibold hover:bg-[#122333] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
