import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  SERVICES,
  PROJECT_GALLERY,
  ServiceItem,
  ProjectGalleryItem,
} from '../data/wagaData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestFromGallery: (serviceValue: string) => void;
}

const CATEGORIES: Array<'Todos' | ProjectGalleryItem['category']> = [
  'Todos',
  'Canalização',
  'Electricidade',
  'Pintura',
  'Remodelação & Obras',
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestFromGallery,
}) => {
  const [activeCategory, setActiveCategory] = useState<'Todos' | ProjectGalleryItem['category']>(
    'Todos'
  );

  const visibleProjects =
    activeCategory === 'Todos'
      ? PROJECT_GALLERY
      : PROJECT_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Minimalist Section Heading */}
        <div className="mb-12 sm:mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#5C5E62]">
              ESPECIALIDADES
            </span>
            <h2 className="mt-2 text-[30px] sm:text-[38px] font-semibold tracking-[-0.02em] text-[#171A20]">
              Os Nossos Serviços
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-[#5C5E62]">
            Intervenções técnicas executadas com rigor, equipamentos modernos e equipa certificada.
          </p>
        </div>

        {/* Tesla Vehicle-Card Inspired Large Photo Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group relative h-[400px] sm:h-[460px] overflow-hidden rounded-xl bg-[#171A20] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-tesla group-hover:scale-[1.04]"
              />

              {/* Subtle Top + Rich Bottom Gradient Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(16,20,26,0.16) 0%, rgba(16,20,26,0.04) 35%, rgba(16,20,26,0.82) 100%)',
                }}
              />

              {/* Bottom Left Content & Action */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-7 sm:p-9">
                <h3 className="text-[26px] sm:text-[31px] font-semibold tracking-[-0.015em] text-white">
                  {service.title}
                </h3>
                <p className="mt-1.5 max-w-md text-[15px] sm:text-[16px] leading-relaxed text-white/90">
                  {service.shortDescription}
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex h-10 items-center justify-center rounded-[4px] bg-white/95 px-6 text-[13.5px] font-medium text-[#171A20] backdrop-blur-sm transition-all duration-200 hover:bg-white active:scale-[0.98]"
                  >
                    Explorar Serviço
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Real Work / Field Portfolio Showcase (using all 9 images from /images) */}
        <div className="mt-24 sm:mt-32 border-t border-black/[0.06] pt-16 sm:pt-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#5C5E62]">
                TRABALHOS EM CAMPO
              </span>
              <h3 className="mt-2 text-[26px] sm:text-[34px] font-semibold tracking-[-0.02em] text-[#171A20]">
                Serviços Executados
              </h3>
            </div>

            {/* Minimalist Filter Pills */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar trabalhos">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#171A20] text-white'
                        : 'bg-[#F4F4F4] text-[#5C5E62] hover:bg-[#E8E8E8] hover:text-[#171A20]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => onRequestFromGallery(project.serviceValue)}
                className="group relative h-[320px] sm:h-[340px] cursor-pointer overflow-hidden rounded-xl bg-[#F4F4F4] shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-tesla group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(16,20,26,0.05) 35%, rgba(16,20,26,0.82) 100%)',
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/75">
                      {project.category}
                    </span>
                    <h4 className="mt-1 text-[17px] font-semibold leading-snug text-white">
                      {project.title}
                    </h4>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#171A20] transition-transform duration-300 group-hover:scale-105 group-hover:bg-white"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
