'use client';

import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';
import { Search, X } from 'lucide-react';

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
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1722] text-white shadow-sm'
                  : 'bg-[#F5F7FA] text-[#647384] hover:text-[#0B1722] border border-[#E1E7ED]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#647384] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-xs text-[#17212B] placeholder-[#647384] focus:bg-white focus:border-[#D9232E] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#647384] hover:text-[#0B1722]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Product Cards */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] text-[#647384] text-xs">
          No matching products found. Try adjusting your search or category filter.
        </div>
      )}
    </div>
  );
}
