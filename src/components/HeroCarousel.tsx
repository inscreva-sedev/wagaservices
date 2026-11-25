import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/wagaData';

interface HeroCarouselProps {
  onRequestService: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onRequestService }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(nextSlide, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      id="inicio"
      className="relative mt-14 h-[calc(100svh-56px)] min-h-[600px] max-h-[860px] w-full overflow-hidden bg-[#171A20]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Destaques WAGA SERVICES"
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-tesla ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className={`h-full w-full object-cover object-center ${
                isActive ? 'hero-slide-active' : ''
              }`}
            />
            {/* Balanced top-to-bottom cinematic scrim for white text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(16, 20, 26, 0.56) 0%, rgba(16, 20, 26, 0.30) 45%, rgba(16, 20, 26, 0.42) 100%)',
              }}
            />
          </div>
        );
      })}

      {/* Centered Content Overlay — Tesla inspired upper-center hierarchy */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 pt-14 pb-10 sm:pt-16 md:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-3 text-[12px] sm:text-[13px] font-semibold tracking-[0.28em] uppercase text-white/90">
            {currentSlide.eyebrow}
          </span>

          <h1
            key={currentSlide.id}
            className="text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.02em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] transition-all duration-500"
          >
            {currentSlide.headline}
          </h1>

          <p className="mt-3.5 max-w-xl text-[15px] sm:text-[17px] font-normal text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">
            {currentSlide.subtitle}
          </p>

          {/* Dual Side-by-Side Buttons */}
          <div className="mt-7 flex w-full max-w-[460px] flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onRequestService}
              className="inline-flex h-10 sm:h-[42px] flex-1 items-center justify-center rounded-[4px] bg-[#3E6AE1] px-6 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#3457B1] active:scale-[0.98]"
            >
              Solicitar Serviço
            </button>
            <a
              href="#servicos"
              className="inline-flex h-10 sm:h-[42px] flex-1 items-center justify-center rounded-[4px] bg-white/95 px-6 text-[14px] font-medium text-[#171A20] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white active:scale-[0.98]"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>

        {/* Bottom Indicator Dots */}
        <div className="flex items-center gap-2.5" role="tablist" aria-label="Selecionar slide">
          {HERO_SLIDES.map((slide, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Slide ${index + 1}: ${slide.headline}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active ? 'w-2.5 bg-white shadow-sm' : 'w-2.5 bg-white/45 hover:bg-white/75'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Discreet Lateral Arrows (matching Tesla frosted square arrows) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-4 sm:left-6 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[4px] bg-white/75 text-[#171A20] backdrop-blur-sm transition-all duration-200 hover:bg-white focus:outline-none"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-4 sm:right-6 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[4px] bg-white/75 text-[#171A20] backdrop-blur-sm transition-all duration-200 hover:bg-white focus:outline-none"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
      </button>
    </section>
  );
};
