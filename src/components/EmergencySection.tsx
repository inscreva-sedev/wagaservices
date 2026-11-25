import React from 'react';
import { EMERGENCY_CONTENT } from '../data/wagaData';

interface EmergencySectionProps {
  onContactNow: () => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onContactNow }) => {
  return (
    <section
      id="emergencia"
      className="relative w-full overflow-hidden bg-[#171A20] py-28 sm:py-36 lg:py-44"
      aria-label="Assistência de Emergência 24 Horas"
    >
      <img
        src={EMERGENCY_CONTENT.image}
        alt={EMERGENCY_CONTENT.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dramatic Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(16, 20, 26, 0.86) 0%, rgba(16, 20, 26, 0.62) 55%, rgba(16, 20, 26, 0.35) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.24em] uppercase text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#3E6AE1]" />
            {EMERGENCY_CONTENT.eyebrow}
          </span>

          <h2 className="mt-4 text-[32px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.12] tracking-[-0.02em] text-white">
            {EMERGENCY_CONTENT.title}
          </h2>

          <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-white/85">
            {EMERGENCY_CONTENT.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onContactNow}
              className="inline-flex h-11 items-center justify-center rounded-[4px] bg-white px-8 text-[14px] font-semibold text-[#171A20] shadow-md transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              {EMERGENCY_CONTENT.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
