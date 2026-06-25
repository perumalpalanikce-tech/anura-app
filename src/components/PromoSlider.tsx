import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROMO_SLIDES } from '@/data/promoSlides';

export default function PromoSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % PROMO_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  if (PROMO_SLIDES.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden bg-ink-soft">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-10 sm:py-6">
        <div className="relative h-[130px] overflow-hidden rounded-sm sm:h-[180px]">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{
              width: `${PROMO_SLIDES.length * 100}%`,
              transform: `translateX(-${(activeSlide * 100) / PROMO_SLIDES.length}%)`,
            }}
          >
            {PROMO_SLIDES.map((slide) => (
              <Link
                key={slide.id}
                to="/collections"
                className="relative h-full flex-shrink-0"
                style={{ width: `${100 / PROMO_SLIDES.length}%` }}
              >
                <img src={slide.image} alt={slide.title} className="h-full w-full object-cover opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                  <h3 className="font-display text-lg font-semibold tracking-wide sm:text-2xl">{slide.title}</h3>
                  <p className="mt-1 text-xs text-[#E5E5EA] sm:text-sm">{slide.subtitle}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gold sm:text-xs">{slide.tagline}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5">
            {PROMO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to promo slide ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full ${activeSlide === i ? 'bg-gold' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}