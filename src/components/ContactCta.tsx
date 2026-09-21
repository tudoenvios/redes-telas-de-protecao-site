import { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

export default function ContactCta() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    serviceType: 'Janelas e Sacadas',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Redireciona com mensagem no WhatsApp
    const msg =
      `Olá! Solicito vistoria/orçamento para redes de proteção:\n` +
      `• *Nome:* ${formData.name}\n` +
      `• *WhatsApp:* ${formData.phone}\n` +
      `• *Cidade/Bairro:* ${formData.city || 'Não informado'}\n` +
      `• *Serviço:* ${formData.serviceType}\n` +
      (formData.notes ? `• *Observação:* ${formData.notes}\n` : '');

    const url = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <section id="contato" className="py-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Coluna de Informações e Confiança */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950 text-sky-400 border border-sky-800">
              <Clock className="w-3.5 h-3.5" />
              Retorno Rápido em até 15 minutos
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Proteja sua Família e seus Pets Hoje Mesmo
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Agende uma vistoria técnica gratuita no seu imóvel ou envie as medidas para receber a cotação imediata com condições facilitadas de pagamento.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-white block">Orçamento sem compromisso</span>
                  <span className="text-xs text-zinc-400">Avaliação do vão, do tipo de alvenaria e indicação da malha ideal.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-white block">Instalação limpa e rápida</span>
                  <span className="text-xs text-zinc-400">Técnicos uniformizados, com aspirador de pó e sem sujeira na sua casa.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-white block">Certificado de Garantia de 5 Anos</span>
                  <span className="text-xs text-zinc-400">Nota fiscal e termo formal de conformidade com a ABNT NBR 16046.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Formulário Rápido */}
          <div className="lg:col-span-6 bg-zinc-800/90 rounded-2xl p-6 sm:p-8 border border-zinc-700 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Solicitar Contato Especializado
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Preencha os campos abaixo para atendimento imediato:
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Solicitação Encaminhada!</h4>
                <p className="text-xs text-emerald-200">
                  Você está sendo direcionado ao WhatsApp do nosso especialista técnico.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="form-nome" className="block text-xs font-semibold text-zinc-300 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    id="form-nome"
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-zinc-600 bg-zinc-700/60 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-telefone" className="block text-xs font-semibold text-zinc-300 mb-1">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      id="form-telefone"
                      type="tel"
                      required
                      placeholder="(DDD) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-zinc-600 bg-zinc-700/60 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-cidade" className="block text-xs font-semibold text-zinc-300 mb-1">
                      Bairro / Cidade
                    </label>
                    <input
                      id="form-cidade"
                      type="text"
                      placeholder="Ex: Jardins - SP"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-lg border border-zinc-600 bg-zinc-700/60 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-servico" className="block text-xs font-semibold text-zinc-300 mb-1">
                    Tipo de Instalação Desejada
                  </label>
                  <select
                    id="form-servico"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full rounded-lg border border-zinc-600 bg-zinc-700/60 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="Janelas de Quartos/Salas">Janelas de Quartos e Salas</option>
                    <option value="Sacada ou Varanda Gourmet">Sacada ou Varanda Gourmet</option>
                    <option value="Rede Anti-Gatos / Pets (Malha 3x3)">Rede Anti-Gatos / Pets (Malha 3x3)</option>
                    <option value="Sacada com Cortina de Vidro">Sacada com Cortina de Vidro</option>
                    <option value="Escadas e Mezaninos">Escadas e Mezaninos</option>
                    <option value="Outros vãos">Outros vãos e áreas</option>
                  </select>
                </div>

                <button
                  id="form-submit-btn"
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Enviar e Conversar no WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
