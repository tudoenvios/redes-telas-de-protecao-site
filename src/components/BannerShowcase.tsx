import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

interface BannerShowcaseProps {
  onOpenAdvisor?: () => void;
}

export default function BannerShowcase({ onOpenAdvisor: _onOpenAdvisor }: BannerShowcaseProps) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(
    'Olá! Vi o banner de Redes de Proteção para Apartamento e gostaria de solicitar um orçamento para janelas/sacadas.',
  )}`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-sky-900/20 bg-zinc-950">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/banner-protecao-apartamento-mobile.jpg"
          />
          <img
            src="/images/banner-protecao-apartamento.jpg"
            alt="Rede de Proteção para Apartamento - Janelas e Sacadas - Rede & Proteção®"
            width="1254"
            height="1254"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="block h-auto w-full object-contain"
          />
        </picture>

        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl border-2 border-white bg-[#25D366] px-3 py-2.5 text-white shadow-xl transition-transform hover:scale-105 sm:px-4 sm:py-3"
            aria-label={`Solicitar orçamento pelo WhatsApp ${CONTACT_INFO.whatsappDisplay}`}
          >
            <MessageCircle className="h-5 w-5 fill-white text-[#25D366] sm:h-6 sm:w-6" />
            <span className="hidden text-left sm:block">
              <span className="block text-[10px] font-extrabold uppercase">Fale com a gente</span>
              <span className="block text-lg font-black leading-none">{CONTACT_INFO.whatsappDisplay}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
