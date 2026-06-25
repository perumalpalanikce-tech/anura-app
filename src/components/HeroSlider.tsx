import React, { useEffect, useState } from 'react';
import { HERO_SLIDES } from '@/data/heroSlides';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[280px] w-full overflow-hidden bg-black sm:h-[520px]">
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{
          width: `${HERO_SLIDES.length * 100}%`,
          transform: `translateX(-${(activeSlide * 100) / HERO_SLIDES.length}%)`,
        }}
      >
        {HERO_SLIDES.map((slide) => (
          <div key={slide.id} className="relative h-full" style={{ width: `${100 / HERO_SLIDES.length}%` }}>
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover opacity-65" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
              <img
                src="https://pub-ffa3ad4198b746aa88d918af2625c508.r2.dev/anura%20white%20logo.png"
                alt=""
                className="mb-3 h-9 object-contain sm:h-14"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h2 className="mb-1.5 font-display text-2xl font-semibold tracking-[0.15em] sm:text-5xl">{slide.title}</h2>
              <h3 className="mb-2 text-sm font-light text-[#E5E5EA] sm:text-2xl">{slide.subtitle}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold sm:text-[13px]">{slide.tagline}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${activeSlide === i ? 'bg-gold' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}