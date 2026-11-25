import React from 'react';
import { Phone, Globe, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../data/wagaData';

interface FooterProps {
  onSelectServiceName: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectServiceName }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-white pt-16 pb-10 text-[#171A20]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#inicio" className="inline-flex items-center">
              <img
                src={`/${encodeURIComponent('Logo Waga Service com Chave Inglesa.png')}`}
                alt="WAGA SERVICES"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[#5C5E62]">
              Soluções profissionais para o seu lar e negócio. Qualidade, segurança e
              profissionalismo em cada serviço em Moçambique.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#171A20]">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px] text-[#5C5E62]">
              <li>
                <a href="#inicio" className="transition-colors hover:text-[#171A20]">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="transition-colors hover:text-[#171A20]">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#171A20]">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contactos" className="transition-colors hover:text-[#171A20]">
                  Contactos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#171A20]">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px] text-[#5C5E62]">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#contactos"
                    onClick={() => onSelectServiceName(service.title)}
                    className="transition-colors hover:text-[#171A20]"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts & Social */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#171A20]">
              Contactos
            </h4>
            <ul className="mt-4 space-y-3 text-[14px] text-[#5C5E62]">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#171A20]"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.6} />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#171A20]"
                >
                  <Globe className="h-4 w-4" strokeWidth={1.6} />
                  <span>{CONTACT_INFO.websiteDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#171A20]"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                  <span>WhatsApp 24h</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-black/[0.06] pt-7 text-[12.5px] text-[#5C5E62] sm:flex-row">
          <p>© {year} WAGA SERVICES. Todos os direitos reservados.</p>
          <p>{CONTACT_INFO.location} · Assistência 24 horas</p>
        </div>
      </div>
    </footer>
  );
};
