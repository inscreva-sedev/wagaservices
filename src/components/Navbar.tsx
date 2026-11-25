import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/wagaData';

interface NavbarProps {
  onRequestService: () => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contactos', href: '#contactos' },
];

export const Navbar: React.FC<NavbarProps> = ({ onRequestService }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_16px_rgba(0,0,0,0.06)] border-b border-black/[0.04]' : 'border-b border-black/[0.03]'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left: Official WAGA SERVICE Logo */}
        <a
          href="#inicio"
          aria-label="WAGA SERVICES - Página Inicial"
          className="group flex items-center focus:outline-none"
        >
          <img
            src={`/${encodeURIComponent('Logo Waga Service com Chave Inglesa.png')}`}
            alt="WAGA SERVICES"
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Center: Clean Horizontal Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-1.5 text-[14px] font-medium text-[#171A20] transition-colors duration-200 hover:bg-[#F4F4F4]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Contact Icon + Discreet CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            title={`Ligar para ${CONTACT_INFO.phoneDisplay}`}
            aria-label={`Ligar para ${CONTACT_INFO.phoneDisplay}`}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#171A20] transition-colors duration-200 hover:bg-[#F4F4F4]"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.65} />
          </a>

          <button
            type="button"
            onClick={onRequestService}
            className="hidden sm:inline-flex items-center justify-center rounded-[4px] bg-[#171A20] px-4 py-1.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#2E323B] active:scale-[0.98]"
          >
            Solicitar Serviço
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[#171A20] transition-colors hover:bg-[#F4F4F4] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-tesla md:hidden ${
          mobileMenuOpen ? 'max-h-80 border-t border-black/[0.06] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-md px-3 py-2.5 text-[15px] font-medium text-[#171A20] transition-colors hover:bg-[#F4F4F4]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestService();
              }}
              className="w-full rounded-[4px] bg-[#3E6AE1] px-4 py-2.5 text-center text-[14px] font-medium text-white transition-colors hover:bg-[#3457B1]"
            >
              Solicitar Serviço
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
