import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {
  SERVICES,
  PROJECT_GALLERY,
  ServiceItem,
  ProjectCategory,
  ProjectGalleryItem,
} from '../data/wagaData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestFromGallery: (serviceValue: string) => void;
}

const CATEGORIES: Array<'Todos' | ProjectCategory> = [
  'Todos',
  'Canalização',
  'Casas de Banho',
  'Electricidade',
  'Pintura',
  'Remodelação & Obras',
];

const INITIAL_VISIBLE = 9;
const LOAD_STEP = 12;

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestFromGallery,
}) => {
  const [activeCategory, setActiveCategory] = useState<'Todos' | ProjectCategory>('Todos');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [lightboxItem, setLightboxItem] = useState<ProjectGalleryItem | null>(null);

  const filteredProjects =
    activeCategory === 'Todos'
      ? PROJECT_GALLERY
      : PROJECT_GALLERY.filter((item) => item.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const remainingCount = Math.max(0, filteredProjects.length - visibleCount);

  const handleSelectCategory = (category: 'Todos' | ProjectCategory) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  };

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
        return;
      }
      const idx = filteredProjects.findIndex((p) => p.id === lightboxItem.id);
      if (idx === -1) return;
      if (e.key === 'ArrowRight') {
        setLightboxItem(filteredProjects[(idx + 1) % filteredProjects.length]);
      } else if (e.key === 'ArrowLeft') {
        setLightboxItem(
          filteredProjects[(idx - 1 + filteredProjects.length) % filteredProjects.length]
        );
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxItem, filteredProjects]);

  const stepLightbox = (dir: 1 | -1) => {
    if (!lightboxItem) return;
    const idx = filteredProjects.findIndex((p) => p.id === lightboxItem.id);
    if (idx === -1) return;
    const nextIdx = (idx + dir + filteredProjects.length) % filteredProjects.length;
    setLightboxItem(filteredProjects[nextIdx]);
  };

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

        {/* Field Portfolio Showcase (all 63 unique photos from public/images + servicos executados) */}
        <div className="mt-24 sm:mt-32 border-t border-black/[0.06] pt-16 sm:pt-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#5C5E62]">
                TRABALHOS EM CAMPO · {filteredProjects.length} REGISTOS
              </span>
              <h3 className="mt-2 text-[26px] sm:text-[34px] font-semibold tracking-[-0.02em] text-[#171A20]">
                Serviços Executados
              </h3>
            </div>

            {/* Minimalist Filter Pills */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar trabalhos">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === 'Todos'
                    ? PROJECT_GALLERY.length
                    : PROJECT_GALLERY.filter((p) => p.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleSelectCategory(category)}
                    className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#171A20] text-white'
                        : 'bg-[#F4F4F4] text-[#5C5E62] hover:bg-[#E8E8E8] hover:text-[#171A20]'
                    }`}
                  >
                    {category}{' '}
                    <span className={isActive ? 'text-white/70' : 'text-[#5C5E62]/70'}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setLightboxItem(project)}
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

          {/* Progressive Expand / Collapse Controls */}
          {filteredProjects.length > INITIAL_VISIBLE && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {remainingCount > 0 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + LOAD_STEP)}
                    className="inline-flex h-10 items-center justify-center rounded-[4px] bg-[#171A20] px-7 text-[13.5px] font-medium text-white transition-all duration-200 hover:bg-[#2E323B] active:scale-[0.98]"
                  >
                    Ver mais trabalhos ({Math.min(LOAD_STEP, remainingCount)} de {remainingCount} restantes)
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisibleCount(filteredProjects.length)}
                    className="inline-flex h-10 items-center justify-center rounded-[4px] border border-black/15 bg-white px-6 text-[13.5px] font-medium text-[#171A20] transition-colors hover:bg-[#F4F4F4]"
                  >
                    Mostrar todos ({filteredProjects.length})
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setVisibleCount(INITIAL_VISIBLE)}
                  className="inline-flex h-10 items-center justify-center rounded-[4px] border border-black/15 bg-white px-7 text-[13.5px] font-medium text-[#171A20] transition-colors hover:bg-[#F4F4F4]"
                >
                  Mostrar menos
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Field Projects */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[56vh] min-h-[320px] max-h-[620px] w-full bg-[#111318]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.alt}
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Fechar visualização"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171A20] backdrop-blur-sm transition-colors hover:bg-white"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>

              {filteredProjects.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Trabalho anterior"
                    className="absolute left-3 sm:left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[4px] bg-white/80 text-[#171A20] backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    aria-label="Próximo trabalho"
                    className="absolute right-3 sm:right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[4px] bg-white/80 text-[#171A20] backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5C5E62]">
                  {lightboxItem.category}
                </span>
                <h4 className="mt-1 text-[20px] font-semibold text-[#171A20]">
                  {lightboxItem.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => {
                  const svc = lightboxItem.serviceValue;
                  setLightboxItem(null);
                  onRequestFromGallery(svc);
                }}
                className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-[4px] bg-[#3E6AE1] px-6 text-[13.5px] font-medium text-white transition-colors hover:bg-[#3457B1]"
              >
                <span>Solicitar Serviço Semelhante</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
