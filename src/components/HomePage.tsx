import { lazy, Suspense } from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { ImageProvider } from '../context/ImageContext';
import { CONTACT_INFO } from '../data/protectionData';

const ApplicationsGrid = lazy(() => import('./ApplicationsGrid'));
const GalleryShowcase = lazy(() => import('./GalleryShowcase'));
const FreeQuoteAdvisor = lazy(() => import('./FreeQuoteAdvisor'));
const TechnicalSpecs = lazy(() => import('./TechnicalSpecs'));
const SafetyAudit = lazy(() => import('./SafetyAudit'));
const FaqSection = lazy(() => import('./FaqSection'));
const ContactCta = lazy(() => import('./ContactCta'));

const DeferredSection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="min-h-24 bg-white" aria-hidden="true" />}>{children}</Suspense>
);

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
          <div className="defer-render"><DeferredSection><ApplicationsGrid onSelectService={() => scrollToSection('orcamento-gratuito')} /></DeferredSection></div>
          <div className="defer-render"><DeferredSection><GalleryShowcase onOpenAdvisor={() => scrollToSection('orcamento-gratuito')} /></DeferredSection></div>
          <div className="defer-render"><DeferredSection><FreeQuoteAdvisor onOpenWhatsappWithMsg={handleOpenWhatsapp} /></DeferredSection></div>
          <div className="defer-render"><DeferredSection><TechnicalSpecs /></DeferredSection></div>
          <div className="defer-render"><DeferredSection><SafetyAudit /></DeferredSection></div>
          <div className="defer-render"><DeferredSection><FaqSection /></DeferredSection></div>
          <div className="defer-render"><DeferredSection><ContactCta /></DeferredSection></div>
        </main>
        <Footer onScrollTo={scrollToSection} />
        <FloatingWhatsApp />
      </div>
    </ImageProvider>
  );
}
