import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { AboutSection } from './components/AboutSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { EmergencySection } from './components/EmergencySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './data/wagaData';

export function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedServiceName, setPreselectedServiceName] = useState<string>('Canalização');

  // Subtle IntersectionObserver reveal for sections
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedServiceName(serviceTitle);
    }
    setSelectedService(null);
    const contactEl = document.getElementById('contactos');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171A20]">
      <Navbar onRequestService={() => scrollToContact()} />

      <main>
        <HeroCarousel onRequestService={() => scrollToContact()} />

        <div className="reveal-section">
          <ServicesSection
            onSelectService={(service) => setSelectedService(service)}
            onRequestFromGallery={(serviceValue) => scrollToContact(serviceValue)}
          />
        </div>

        <div className="reveal-section">
          <AboutSection onRequestService={() => scrollToContact()} />
        </div>

        <div className="reveal-section">
          <DifferentiatorsSection />
        </div>

        <div className="reveal-section">
          <EmergencySection onContactNow={() => scrollToContact('Emergência 24 Horas')} />
        </div>

        <div className="reveal-section">
          <ContactSection preselectedService={preselectedServiceName} />
        </div>
      </main>

      <Footer onSelectServiceName={(name) => setPreselectedServiceName(name)} />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestThisService={(title) => scrollToContact(title)}
      />
    </div>
  );
}

export default App;
