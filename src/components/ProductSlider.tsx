import React, { useRef } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductSliderProps {
  title: string;
  eyebrow?: string;
  products: Product[];
}

export default function ProductSlider({ title, eyebrow, products }: ProductSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    
    // Grabs the actual width of a card plus the gap for pixel-perfect scrolling
    const cardWidth = track.firstElementChild?.clientWidth ?? 280;
    const gap = window.innerWidth >= 640 ? 24 : 16; // matching sm:gap-6 (24px) vs gap-4 (16px)
    
    track.scrollBy({ 
      left: direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap), 
      behavior: 'smooth' 
    });
  };

  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-14 lg:px-20 bg-white selection:bg-gold/10">
      {/* Header Section */}
      <div className="mb-10 flex items-end justify-between gap-6">
        <div className="space-y-1">
          {eyebrow && (
            <span className="block text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400/90 mix-blend-difference">
              {eyebrow}
            </span>
          )}
          <h3 className="font-sans text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h3>
        </div>

        {/* Apple-inspired Minimalist Controls */}
        <div className="hidden gap-3 sm:flex">
          <button
            onClick={() => scrollByCard('left')}
            aria-label="Scroll left"
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100/80 text-neutral-800 backdrop-blur-md transition-all duration-300 ease-out hover:bg-neutral-900 hover:text-white active:scale-95"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scrollByCard('right')}
            aria-label="Scroll right"
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100/80 text-neutral-800 backdrop-blur-md transition-all duration-300 ease-out hover:bg-neutral-900 hover:text-white active:scale-95"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider Track */}
      <div
        ref={trackRef}
        className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto scroll-smooth px-6 pb-6 snap-x snap-mandatory sm:-mx-14 sm:gap-6 sm:px-14 lg:-mx-20 lg:px-20"
        style={{
          WebkitOverflowScrolling: 'touch', // Silky smooth iOS inertia scrolling
          scrollbarWidth: 'none' // Firefox hiding
        }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="w-[260px] flex-shrink-0 snap-start transition-transform duration-500 ease-out sm:w-[320px] md:w-[360px] hover:scale-[1.01]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}