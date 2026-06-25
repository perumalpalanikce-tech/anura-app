import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import HeroSlider from '@/components/HeroSlider';
import PromoSlider from '@/components/PromoSlider';
import ProductGrid from '@/components/ProductGrid';
import ProductSlider from '@/components/ProductSlider';

export default function Home() {
  const spotlight = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.slice(-8); // last 8 items in the array — swap for any slice/filter you like

  return (
    <div>
      <HeroSlider />
        <ProductSlider eyebrow="Fresh in the Treasury" title="New Arrivals" products={newArrivals} />
      <PromoSlider />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-10">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Signature Artifacts</span>
          <h3 className="mt-1.5 font-display text-2xl font-normal text-ink sm:text-3xl">The Core Collection Spotlight</h3>
        </div>

        <ProductGrid products={spotlight} />

        <div className="mt-10 text-center">
          <Link
            to="/collections"
            className="inline-block rounded-sm border border-gold bg-ink px-9 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gold"
          >
            Explore Entire Treasury
          </Link>
        </div>
      </div>
    </div>
  );
}