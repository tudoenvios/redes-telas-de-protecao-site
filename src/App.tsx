/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ApplicationsGrid from './components/ApplicationsGrid';
import GalleryShowcase from './components/GalleryShowcase';
import FreeQuoteAdvisor from './components/FreeQuoteAdvisor';
import TechnicalSpecs from './components/TechnicalSpecs';
import SafetyAudit from './components/SafetyAudit';
import FaqSection from './components/FaqSection';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ImageManagerModal from './components/ImageManagerModal';
import FloatingImageButton from './components/FloatingImageButton';
import { ImageProvider } from './context/ImageContext';
import { CONTACT_INFO } from './data/protectionData';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsapp = (customMsg?: string) => {
    const text =
      customMsg ||
      'Olá! Gostaria de um orçamento gratuito e sem compromisso para redes de proteção para janelas e sacadas.';
    const url = `https://wa.me/${CONTACT_INFO.phoneClean}?text=` + encodeURIComponent(text);
    window.open(url, '_blank');
  };

  const handleSelectService = (_serviceId: string) => {
    scrollToSection('orcamento-gratuito');
  };

  return (
    <ImageProvider>
      <div id="site-root" className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 font-sans antialiased">
        {/* Cabeçalho Fixo com Contato e Navegação */}
        <Header onScrollTo={scrollToSection} />

        <main className="flex-1">
          {/* Seção Hero com Destaque de Segurança, Carga 500kg e ABNT */}
          <Hero
            onOpenAdvisor={() => scrollToSection('orcamento-gratuito')}
            onOpenWhatsapp={() => handleOpenWhatsapp()}
          />

          {/* Grade de Aplicações Técnicas (Janelas, Sacadas, Gatos/Pets, Escadas) */}
          <ApplicationsGrid onSelectService={handleSelectService} />

          {/* Galeria Visual de Instalações Concluídas */}
          <GalleryShowcase onOpenAdvisor={() => scrollToSection('orcamento-gratuito')} />

          {/* Dicas Especializadas, Chat Direto e Orçamento Gratuito Sem Compromisso */}
          <FreeQuoteAdvisor onOpenWhatsappWithMsg={handleOpenWhatsapp} />

          {/* Especificações Técnicas e Comparativo Norma ABNT NBR 16046 */}
          <TechnicalSpecs />

          {/* Dúvidas Estruturadas & Fatos Rápidos para Pesquisa Google e Motores de IA */}
          <SafetyAudit />

          {/* Seção de FAQ Completa com Acordeão Interativo e Busca */}
          <FaqSection />

          {/* Formulário de Contato e Vistoria Gratuita */}
          <ContactCta />
        </main>

        {/* Rodapé com Dados Institucionais, Normas e Regiões de Atendimento */}
        <Footer onScrollTo={scrollToSection} />

        {/* Botão Flutuante de WhatsApp com Indicador de Atendimento Online */}
        <FloatingWhatsApp />

        {/* Botão Flutuante para Trocar Todas as Imagens */}
        <FloatingImageButton />

        {/* Central de Gerenciamento e Troca de Todas as Imagens */}
        <ImageManagerModal />
      </div>
    </ImageProvider>
  );
}
