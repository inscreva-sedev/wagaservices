import React, { useEffect, useState, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SECTION_IDS = ['inicio', 'servicos', 'sobre', 'diferenciais', 'emergencia', 'contactos'];

export const ScrollNavigator: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollPercent(0);
        return;
      }
      const pct = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
      setScrollPercent(pct);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const handleScrollUp = useCallback(() => {
    const currentY = window.scrollY;
    const offsets = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      return el ? el.offsetTop - 56 : 0;
    }).filter((top) => top < currentY - 30);

    if (offsets.length > 0 && currentY > 120) {
      const prevOffset = offsets[offsets.length - 1];
      window.scrollTo({ top: Math.max(0, prevOffset), behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleScrollDown = useCallback(() => {
    const currentY = window.scrollY;
    const nextOffset = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      return el ? el.offsetTop - 56 : 0;
    }).find((top) => top > currentY + 30);

    if (nextOffset !== undefined) {
      window.scrollTo({ top: nextOffset, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <aside
      aria-label="Controlo de navegação vertical"
      className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-40 flex flex-col items-center gap-2 rounded-full border border-black/[0.06] bg-white/95 p-1.5 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-md"
    >
      {/* Up button */}
      <button
        type="button"
        onClick={handleScrollUp}
        aria-label="Subir secção ou voltar ao topo"
        title="Subir"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF4FB] text-[#0B7EC4] transition-all duration-200 hover:bg-[#D6ECFA] active:scale-95 focus:outline-none"
      >
        <ChevronUp className="h-4 w-4" strokeWidth={2.4} />
      </button>

      {/* Percentage indicator */}
      <span
        aria-live="polite"
        className="select-none text-[11px] font-semibold tabular-nums text-[#171A20]"
      >
        {scrollPercent}%
      </span>

      {/* Down button with circular scroll progress ring */}
      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Descer para a próxima secção"
        title="Descer"
        className="relative flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none"
      >
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 38 38"
          aria-hidden="true"
        >
          <circle
            cx="19"
            cy="19"
            r={radius}
            fill="none"
            stroke="#E3F2FB"
            strokeWidth="2.5"
          />
          <circle
            cx="19"
            cy="19"
            r={radius}
            fill="none"
            stroke="#0B7EC4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>
        <ChevronDown className="relative h-4 w-4 text-[#0B7EC4]" strokeWidth={2.4} />
      </button>
    </aside>
  );
};
