import React, { useEffect } from 'react';
import { X, Check, Clock, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/wagaData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestThisService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestThisService,
}) => {
  useEffect(() => {
    if (!service) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#171A20]">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do serviço"
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171A20] backdrop-blur-sm transition-colors hover:bg-white"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/80">
              WAGA SERVICES
            </span>
            <h3 id="service-modal-title" className="mt-1 text-[28px] font-semibold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <p className="text-[15px] leading-relaxed text-[#5C5E62]">{service.overview}</p>

          <div className="mt-6 space-y-2.5">
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#171A20]">
              Âmbito de Intervenção
            </p>
            <ul className="space-y-2">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#171A20]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3E6AE1]" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.galleryImages.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-[#171A20]">
                Exemplos de Execução
              </p>
              <div
                className={`grid gap-3 ${
                  service.galleryImages.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {service.galleryImages.map((img) => (
                  <div
                    key={img.src}
                    className="group relative h-36 overflow-hidden rounded-lg bg-[#F4F4F4]"
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 right-3 text-[12px] font-medium text-white">
                      {img.caption}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-4 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#5C5E62]">
              <Clock className="h-4 w-4 text-[#171A20]" strokeWidth={1.75} />
              <span>{service.responseTime}</span>
            </div>

            <button
              type="button"
              onClick={() => onRequestThisService(service.title)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-[4px] bg-[#3E6AE1] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#3457B1]"
            >
              <span>Solicitar {service.title}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
