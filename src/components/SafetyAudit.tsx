import { Search, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';
import { SEO_AI_QUESTIONS } from '../data/protectionData';

export default function SafetyAudit() {
  return (
    <section className="py-16 bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Guia Rápido para Decisão e Pesquisa
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Perguntas Fundamentais ao Contratar Redes de Proteção
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Respostas diretas e fatos técnicos essenciais para quem busca segurança máxima e referências confiáveis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {SEO_AI_QUESTIONS.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl p-5 border border-zinc-200 shadow-xs flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-zinc-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Resumo de palavras-chave contextuais semânticas */}
        <div className="max-w-4xl mx-auto mt-8 p-4 rounded-xl bg-zinc-100/70 border border-zinc-200 text-xs text-zinc-600 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-zinc-500" />
            <span className="font-semibold text-zinc-800">Principais buscas atendidas:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Rede de proteção janela apartamento</span>
            <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Tela sacada para gatos malha 3x3</span>
            <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Preço m² rede de proteção</span>
            <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Norma ABNT NBR 16046</span>
          </div>
        </div>
      </div>
    </section>
  );
}
