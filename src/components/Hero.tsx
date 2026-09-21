import { Shield, CheckCircle2, ArrowRight, MessageCircle, Award, Sparkles, ThumbsUp } from 'lucide-react';
import { TRUST_METRICS } from '../data/protectionData';
import BannerShowcase from './BannerShowcase';

interface HeroProps {
  onOpenAdvisor: () => void;
  onOpenWhatsapp: () => void;
}

export default function Hero({ onOpenAdvisor, onOpenWhatsapp }: HeroProps) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-sky-50/70 via-white to-zinc-50 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-zinc-200/80">
      {/* Detalhe de fundo de tela sutil */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Selo oficial de certificação */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 shadow-xs">
            <Award className="w-4 h-4 text-sky-600" />
            <span className="text-xs font-semibold text-sky-900 tracking-wide">
              Em Conformidade Estrita com a Norma ABNT NBR 16046
            </span>
            <span className="hidden sm:inline text-sky-300">•</span>
            <span className="hidden sm:inline text-xs text-sky-700 font-medium">
              Garantia de 5 Anos
            </span>
          </div>

          {/* Título Principal rico em SEO */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]"
          >
            Redes de Proteção para <span className="text-sky-600">Janelas e Sacadas</span> com Segurança Máxima
          </h1>

          {/* Descrição clara de autoridade para clientes e motores de busca/IA */}
          <p
            id="hero-subtitle"
            className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto"
          >
            Instalação técnica em edifícios e residências com <strong>Polietileno 100% virgem</strong> de alta densidade. Suporte comprovado de <strong>até 500 kg/m²</strong> de impacto, proteção solar anti-UV e malhas especiais para crianças e gatos.
          </p>

          {/* Botões de Ação Principal */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              id="hero-quote-cta-btn"
              type="button"
              onClick={onOpenAdvisor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <ThumbsUp className="w-4 h-4 text-sky-100" />
              <span>Solicitar Orçamento Gratuito (Sem Compromisso)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              id="hero-whatsapp-cta-btn"
              type="button"
              onClick={onOpenWhatsapp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Fale Conosco no WhatsApp</span>
            </button>
          </div>

          {/* Destaques rápidos de segurança */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Ganchos em Aço Inox
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Bucha com Anel Anti-Infiltração
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Técnicos Certificados NR-35
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Malhas 5x5cm e 3x3cm Anti-Pets
            </span>
          </div>
        </div>

        {/* Visual Hero Banner Promocional Completo com a Imagem e Elementos Exatos */}
        <div className="mt-10 max-w-5xl mx-auto">
          <BannerShowcase onOpenAdvisor={onOpenAdvisor} />
        </div>

        {/* Grade com os 4 Pilares de Confiança Técnica */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              id={`trust-metric-${idx}`}
              className="bg-white rounded-xl p-5 border border-zinc-200/90 shadow-xs hover:border-sky-300 transition-colors text-center"
            >
              <span className="block text-2xl sm:text-3xl font-bold text-sky-700 tracking-tight">
                {metric.value}
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-zinc-800 mt-1">
                {metric.label}
              </span>
              <span className="block text-[11px] text-zinc-500 mt-0.5">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
