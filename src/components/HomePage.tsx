import Header from './Header';
import Hero from './Hero';
import ApplicationsGrid from './ApplicationsGrid';
import GalleryShowcase from './GalleryShowcase';
import FreeQuoteAdvisor from './FreeQuoteAdvisor';
import TechnicalSpecs from './TechnicalSpecs';
import SafetyAudit from './SafetyAudit';
import FaqSection from './FaqSection';
import ContactCta from './ContactCta';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { ImageProvider } from '../context/ImageContext';
import { CONTACT_INFO } from '../data/protectionData';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenWhatsapp = (customMsg?: string) => {
    const text =
      customMsg ||
      'Olá! Gostaria de um orçamento gratuito e sem compromisso para redes de proteção para janelas e sacadas.';
    window.open(
      `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(text)}`,
      '_blank',
    );
  };

  return (
    <ImageProvider>
      <div id="site-root" className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 font-sans antialiased">
        <Header onScrollTo={scrollToSection} />
        <main className="flex-1">
          <Hero
            onOpenAdvisor={() => scrollToSection('orcamento-gratuito')}
            onOpenWhatsapp={() => handleOpenWhatsapp()}
          />
          <div className="defer-render"><ApplicationsGrid onSelectService={() => scrollToSection('orcamento-gratuito')} /></div>
          <div className="defer-render"><GalleryShowcase onOpenAdvisor={() => scrollToSection('orcamento-gratuito')} /></div>
          <div className="defer-render"><FreeQuoteAdvisor onOpenWhatsappWithMsg={handleOpenWhatsapp} /></div>
          <div className="defer-render"><TechnicalSpecs /></div>
          <div className="defer-render"><SafetyAudit /></div>
          <div className="defer-render"><FaqSection /></div>
          <div className="defer-render"><ContactCta /></div>
        </main>
        <Footer onScrollTo={scrollToSection} />
        <FloatingWhatsApp />
      </div>
    </ImageProvider>
  );
}
