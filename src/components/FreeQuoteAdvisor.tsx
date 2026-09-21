import { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Send,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  PhoneCall,
  Clock,
  ThumbsUp,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

interface FreeQuoteAdvisorProps {
  onOpenWhatsappWithMsg?: (msg: string) => void;
}

export default function FreeQuoteAdvisor({ onOpenWhatsappWithMsg }: FreeQuoteAdvisorProps) {
  const [selectedTopic, setSelectedTopic] = useState<'geral' | 'gatos' | 'sacada' | 'medidas'>('geral');
  const [userQuery, setUserQuery] = useState('');
  const [userName, setUserName] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Olá! Sou o consultor técnico da Rede & Proteção®. Que bom ter você aqui! Em que ambiente você precisa de proteção (janelas, sacada, escadas ou pets)?',
      time: 'Agora',
    },
  ]);

  const quickTips = [
    {
      id: 'geral',
      icon: Lightbulb,
      title: 'Dica de Ouro: Vistoria 100% Gratuita',
      tag: 'Mais Importante',
      desc: 'Evite surpresas ou compras erradas. O orçamento e a visita no local são totalmente gratuitos e sem compromisso. Nosso técnico avalia os vãos e o tipo de alvenaria sem você pagar nada por isso.',
    },
    {
      id: 'gatos',
      icon: Sparkles,
      title: 'Dica para Gatos & Filhotes',
      tag: 'Segurança Pet',
      desc: 'Para felinos e animais de pequeno porte, a malha 3x3 cm é indispensável. A malha padrão 5x5 cm pode permitir que gatos coloquem a cabeça ou o focinho para fora em momentos de curiosidade.',
    },
    {
      id: 'sacada',
      icon: ShieldCheck,
      title: 'Dica para Sacadas Envidraçadas',
      tag: 'Condomínios',
      desc: 'Se sua sacada já possui ou terá cortina de vidro retrátil, a rede é instalada com trilhos de alumínio especiais para permitir a abertura total das folhas de vidro sem prender a rede.',
    },
    {
      id: 'medidas',
      icon: HelpCircle,
      title: 'Dica sobre Medidas',
      tag: 'Sem Complicação',
      desc: 'Não se preocupe se não tiver trena agora! Uma foto da janela ou sacada enviada no nosso WhatsApp já é suficiente para passarmos uma estimativa prévia exata na hora.',
    },
  ];

  const quickQuestions = [
    'Quero um orçamento gratuito para janelas',
    'Preciso fechar sacada com cortina de vidro',
    'Tenho gato, qual a tela mais recomendada?',
    'Gostaria de agendar uma vistoria técnica gratuita',
  ];

  const handleSendChat = (textToSend?: string) => {
    const text = textToSend || userQuery;
    if (!text.trim()) return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsgs = [
      ...chatMessages,
      { sender: 'user' as const, text: text, time: now },
      {
        sender: 'bot' as const,
        text: 'Excelente! Vou transferir seu atendimento diretamente para nosso técnico especialista no WhatsApp agora mesmo para passar todos os detalhes sem compromisso.',
        time: now,
      },
    ];
    setChatMessages(newMsgs);
    setUserQuery('');

    // Prepara link do WhatsApp com os dados
    const fullMsg =
      `Olá, especialista da Rede & Proteção®! Estava no site e gostaria de uma orientação / orçamento gratuito sem compromisso:\n\n` +
      (userName ? `• *Meu Nome:* ${userName}\n` : '') +
      `• *Minha dúvida/solicitação:* "${text}"\n\n` +
      `Pode me atender e tirar algumas dúvidas antes de fecharmos?`;

    setTimeout(() => {
      if (onOpenWhatsappWithMsg) {
        onOpenWhatsappWithMsg(fullMsg);
      } else {
        const url = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(fullMsg)}`;
        window.open(url, '_blank');
      }
    }, 600);
  };

  return (
    <section id="orcamento-gratuito" className="py-16 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho acolhedor e focado na intenção do cliente */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ThumbsUp className="w-3.5 h-3.5" />
            100% Gratuito & Sem Qualquer Compromisso
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Tire suas Dúvidas e Peça seu Orçamento Gratuito
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Fale conosco agora pelo chat ou WhatsApp. Você recebe dicas personalizadas para o seu imóvel e uma cotação rápida com garantia oficial de 5 anos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Coluna 1: Painel de Dicas Especializadas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Dicas Importantes Antes de Instalar
              </span>
              <span className="text-[11px] text-zinc-400">Clique para ver</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {quickTips.map((tip) => {
                const Icon = tip.icon;
                const isSelected = selectedTopic === tip.id;
                return (
                  <div
                    key={tip.id}
                    id={`dica-card-${tip.id}`}
                    onClick={() => setSelectedTopic(tip.id as typeof selectedTopic)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50/70 border-sky-300 ring-1 ring-sky-300 shadow-xs'
                        : 'bg-zinc-50 hover:bg-zinc-100/70 border-zinc-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-sky-600 text-white' : 'bg-white text-zinc-600 border border-zinc-200'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
                            {tip.tag}
                          </span>
                          <h4 className="text-sm font-bold text-zinc-900 leading-tight">{tip.title}</h4>
                        </div>
                      </div>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-1" />}
                    </div>
                    <p className="mt-2.5 text-xs text-zinc-600 leading-relaxed pl-10.5">{tip.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Aviso de Confiança */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-semibold block">Sem pressão de vendas!</span>
                <span className="text-emerald-800 text-[11px]">
                  Nosso objetivo é garantir que seu espaço fique 100% seguro com a norma ABNT NBR 16046.
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Chat Interativo de Atendimento Imediato */}
          <div className="lg:col-span-6 bg-zinc-900 text-white rounded-2xl border border-zinc-800 shadow-lg flex flex-col justify-between overflow-hidden">
            {/* Topo do Chat */}
            <div className="p-4 sm:p-5 bg-zinc-800/90 border-b border-zinc-700/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    PL
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-zinc-900 rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Consultor Técnico Online</h3>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                    <Clock className="w-3 h-3" />
                    <span>Pronto para responder em instantes</span>
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                Sem Custo
              </span>
            </div>

            {/* Histórico do Chat */}
            <div className="p-4 sm:p-5 space-y-3.5 flex-1 max-h-[320px] overflow-y-auto bg-zinc-950/40">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-sky-600 text-white rounded-br-xs'
                        : 'bg-zinc-800 text-zinc-100 rounded-bl-xs border border-zinc-700/60'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-zinc-500 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Perguntas Rápidas Sugeridas */}
            <div className="p-3 bg-zinc-800/50 border-t border-zinc-800 space-y-1.5">
              <span className="text-[10px] uppercase font-semibold text-zinc-400 block px-1">
                Sugestões rápidas de mensagens:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendChat(q)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-700/70 hover:bg-zinc-700 text-zinc-200 border border-zinc-600/50 transition-colors text-left cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Campo de Digitação & Envio no WhatsApp */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  id="chat-user-name"
                  type="text"
                  placeholder="Seu nome (opcional)"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-zinc-800/90 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-500"
                />
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 px-1">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Conexão direta no WhatsApp</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="chat-user-input"
                  type="text"
                  placeholder="Digite sua dúvida ou descreva o que precisa..."
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendChat();
                  }}
                  className="flex-1 bg-zinc-800/90 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-500"
                />
                <button
                  id="chat-send-btn"
                  type="button"
                  onClick={() => handleSendChat()}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span className="hidden sm:inline">Falar no Chat</span>
                  <Send className="w-3.5 h-3.5 sm:hidden" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1 pt-1">
                <span>Atendimento rápido e humano</span>
                <span>•</span>
                <span>Orçamento 100% gratuito</span>
                <span>•</span>
                <span>Garantia de 5 anos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
