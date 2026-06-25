import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { formatINR } from '@/utils/format';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discountPct = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-ivory-line bg-ivory-card">
      <Link to={`/collections/${product.id}`} className="block h-40 sm:h-72 overflow-hidden bg-ivory">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-3 sm:p-5">
        <Link to={`/collections/${product.id}`} className="block">
          <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-gold">
            {product.category}
          </span>
          <h3 className="mb-2 line-clamp-2 font-display text-sm font-semibold text-ink sm:text-lg">
            {product.name}
          </h3>
          <div className="mb-3 flex items-baseline gap-2">
            <span className="text-sm font-bold text-ink sm:text-lg">{formatINR(product.price)}</span>
            {discountPct > 0 && (
              <span className="text-xs text-muted line-through">{formatINR(product.originalPrice)}</span>
            )}
          </div>
        </Link>

        <div className="flex flex-col gap-2">
          <Link
            to={`/collections/${product.id}?buyNow=1`}
            className="w-full rounded-sm border border-gold bg-ink py-2.5 text-center text-[11px] font-semibold uppercase tracking-wide text-gold transition hover:bg-ink-soft"
          >
            Buy Now
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-full rounded-sm border border-ink bg-ivory-card py-2.5 text-[11px] font-semibold uppercase tracking-wide text-ink transition hover:bg-ivory"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}
