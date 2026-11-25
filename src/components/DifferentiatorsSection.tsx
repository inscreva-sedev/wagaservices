import React from 'react';
import { ShieldCheck, Award, Users, Clock } from 'lucide-react';
import { DIFFERENTIATORS, DifferentiatorItem } from '../data/wagaData';

const renderIcon = (iconName: DifferentiatorItem['iconName']) => {
  const iconProps = { className: 'h-6 w-6 text-[#171A20]', strokeWidth: 1.4 };
  switch (iconName) {
    case 'users':
      return <Users {...iconProps} />;
    case 'shield':
      return <ShieldCheck {...iconProps} />;
    case 'award':
      return <Award {...iconProps} />;
    case 'clock':
      return <Clock {...iconProps} />;
  }
};

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="border-y border-black/[0.05] bg-white py-24 sm:py-32"
      aria-label="Diferenciais WAGA SERVICES"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-[#5C5E62]">
            COMPROMISSO
          </span>
          <h2 className="mt-2.5 text-[28px] sm:text-[36px] font-semibold tracking-[-0.02em] text-[#171A20]">
            Excelência em cada intervenção.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-start border-t border-black/[0.08] pt-7 transition-colors duration-300 hover:border-[#171A20]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F4F4F4] transition-transform duration-300 group-hover:-translate-y-0.5">
                {renderIcon(item.iconName)}
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-[#171A20]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#5C5E62]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
