import { ShieldCheck, Phone, Mail, MapPin, Clock, Award, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span>
                Rede & <span className="text-sky-400">Proteção®</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Especialistas em segurança residencial com redes de proteção certificadas pela ABNT NBR 16046. Mais de 10 anos preservando a integridade de crianças, adultos e pets em edifícios e residências.
            </p>
            <div className="flex items-center gap-2 text-zinc-300 text-xs pt-1">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Garantia de 5 anos com termo oficial</span>
            </div>
          </div>

          {/* Coluna 2: Navegação e Serviços */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Serviços Especializados
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('aplicacoes')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Redes para Janelas de Apartamentos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('aplicacoes')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Telas para Sacadas com Cortina de Vidro
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('aplicacoes')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Rede Anti-Gatos (Malha 3x3 cm)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('aplicacoes')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Proteção para Escadas e Mezaninos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('galeria-instalacoes')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Galeria de Fotos Reais
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('orcamento-gratuito')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Orçamento Gratuito Sem Compromisso
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Conformidade Técnica */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Conformidade ABNT & Normas
            </h4>
            <div className="space-y-2 text-zinc-400 text-xs leading-relaxed">
              <p>
                <strong className="text-zinc-200">ABNT NBR 16046-1:</strong> Fabricação com fios de alta tenacidade em Polietileno Virgem PEAD e tratamento anti-UV.
              </p>
              <p>
                <strong className="text-zinc-200">ABNT NBR 16046-2:</strong> Procedimento seguro de fixação e ancoragem com ganchos em inox a cada 30 cm.
              </p>
              <p>
                <strong className="text-zinc-200">NR-35:</strong> Todos os instaladores possuem certificado ativo para trabalho seguro em altura.
              </p>
            </div>
          </div>

          {/* Coluna 4: Contato e Regiões */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Atendimento e Contato
            </h4>
            <div className="space-y-2 text-zinc-400 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {CONTACT_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={CONTACT_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 font-medium transition-colors"
                >
                  {CONTACT_INFO.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span>Atendimento em toda a Região Metropolitana, Litoral e Interior</span>
                  <a
                    href="/areas-atendidas"
                    className="mt-2 block font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Ver todas as áreas de atendimento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Rede & Proteção®. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Polietileno 100% Virgem</span>
            <span>•</span>
            <span>Resistência 500 kg/m²</span>
            <span>•</span>
            <span>Laudos ABNT NBR 16046</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
