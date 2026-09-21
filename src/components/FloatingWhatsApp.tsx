import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl =
    `https://wa.me/${CONTACT_INFO.phoneClean}?text=` +
    encodeURIComponent('Olá! Gostaria de um orçamento para redes de proteção para janelas e sacadas.');

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {showTooltip && (
        <div className="bg-white text-zinc-800 text-xs px-3.5 py-2 rounded-xl shadow-lg border border-zinc-200 flex items-center gap-2 max-w-[240px] animate-fade-in">
          <span>Olá! Precisa de orçamento rápido? Tire suas dúvidas agora.</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-zinc-600 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:scale-105 transition-all"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white" />
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
      </a>
    </div>
  );
}
