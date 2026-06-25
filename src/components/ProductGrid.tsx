import React from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({ products, emptyMessage = 'No pieces match your search.' }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="py-16 text-center text-sm text-muted">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-8 sm:[grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
