import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { PRODUCT_CATEGORIES } from '@/types';
import ProductGrid from '@/components/ProductGrid';

interface CollectionsProps {
  searchQuery: string;
}

const FILTERS = ['All', ...PRODUCT_CATEGORIES];

export default function Collections({ searchQuery }: CollectionsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-2.5 py-6 sm:px-10 sm:py-10">
      <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-2.5">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex-shrink-0 whitespace-nowrap rounded-sm border px-6 py-2.5 text-xs ${
              selectedCategory === cat
                ? 'border-gold bg-ink text-gold'
                : 'border-ivory-line bg-ivory-card text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
