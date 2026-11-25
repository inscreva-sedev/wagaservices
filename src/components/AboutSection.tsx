import React from 'react';
import { ABOUT_CONTENT } from '../data/wagaData';

interface AboutSectionProps {
  onRequestService: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestService }) => {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual Column */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl bg-[#F4F4F4]">
              <img
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                loading="lazy"
                className="h-[420px] sm:h-[500px] lg:h-[560px] w-full object-cover object-[center_15%] transition-transform duration-700 ease-tesla hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Editorial Text Column */}
          <div className="lg:col-span-5">
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-[#5C5E62]">
              {ABOUT_CONTENT.eyebrow}
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#171A20]">
              {ABOUT_CONTENT.title}
            </h2>

            <div className="mt-6 space-y-4 text-[16px] leading-[1.7] text-[#5C5E62]">
              {ABOUT_CONTENT.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onRequestService}
                className="inline-flex h-10 items-center justify-center rounded-[4px] bg-[#171A20] px-7 text-[14px] font-medium text-white transition-all duration-200 hover:bg-[#2E323B] active:scale-[0.98]"
              >
                Solicitar Serviço
              </button>
              <a
                href="#diferenciais"
                className="inline-flex h-10 items-center justify-center rounded-[4px] border border-[#171A20]/15 bg-white px-7 text-[14px] font-medium text-[#171A20] transition-colors duration-200 hover:bg-[#F4F4F4]"
              >
                Porquê a Waga
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
