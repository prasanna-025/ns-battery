'use client';

import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';
import { Search, Filter, Sparkles, X } from 'lucide-react';

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
    <div className="w-full space-y-6">
      {/* Category Pills & Search Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-emerald-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-[#061e11] text-slate-300 hover:text-white border border-emerald-900/60 hover:border-emerald-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div className="relative min-w-[240px] md:w-72 shrink-0">
          <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search battery, solar, brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#04170d] border border-emerald-500/30 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>
          Showing <strong className="text-white">{displayedProducts.length}</strong> verified products
        </span>
        {searchQuery && (
          <span>
            Filtered by &ldquo;<strong className="text-emerald-400">{searchQuery}</strong>&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Product Cards */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl bg-[#04170d] border border-emerald-900/40 space-y-3">
          <Sparkles className="w-8 h-8 text-emerald-500/40 mx-auto" />
          <h3 className="text-base font-bold text-white">No products match your criteria</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query or clear category filters to view all products.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-500 text-emerald-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
