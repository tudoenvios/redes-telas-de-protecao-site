import { useState } from 'react';
import { ShieldCheck, Phone, MessageCircle, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Aplicações', id: 'aplicacoes' },
    { label: 'Fotos Reais', id: 'galeria-instalacoes' },
    { label: 'Dicas & Orçamento Gratuito', id: 'orcamento-gratuito' },
    { label: 'Norma ABNT', id: 'especificacoes' },
    { label: 'Perguntas Frequentes', id: 'faq' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    if (window.location.pathname === '/') onScrollTo('hero');
    else window.location.href = '/';
  };

  const whatsappUrl =
    `https://wa.me/${CONTACT_INFO.phoneClean}?text=` +
    encodeURIComponent('Olá! Gostaria de um orçamento gratuito para instalação de redes de proteção.');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      {/* Barra superior de aviso de segurança e atendimento */}
      <div className="bg-sky-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">
              Atendimento Técnico Especializado • Redes 100% em conformidade com ABNT NBR 16046
            </span>
          </div>
          <div className="flex items-center gap-4 text-sky-200 text-[11px] sm:text-xs">
            <span>Segunda a Sábado: 08h às 19h</span>
            <span className="hidden md:inline font-medium text-emerald-300">Instalação Imediata</span>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            {/* Logotipo */}
            <div
              id="site-logo"
              onClick={goHome}
              className="flex min-w-0 items-center gap-2 sm:gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-sm group-hover:bg-sky-700 transition-colors">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-xl font-bold tracking-tight text-zinc-900 block leading-tight whitespace-nowrap">
                  Rede & <span className="text-sky-600">Proteção®</span>
                </span>
                <span className="hidden sm:block text-[10px] uppercase font-semibold tracking-wider text-zinc-500">
                  Redes & Telas de Proteção
                </span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1.5">
              <a
                id="header-mosquito-screen-btn"
                href="/telas-mosquiteiras"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-2 sm:px-3 py-2.5 font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-emerald-700"
              >
                <span className="sm:hidden text-xs leading-none">Mosquiteira</span>
                <span className="hidden sm:inline text-base leading-none tracking-tight">Tela Mosquiteira</span>
              </a>
              <a
                href="/telas-mosquiteiras"
                aria-label="Conhecer telas mosquiteiras"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-0.5 shadow-md ring-1 ring-zinc-200 transition-transform hover:scale-105"
              >
                <img
                  src="/images/icone-tela-mosquiteira.jpg"
                  alt="Símbolo de proteção contra mosquitos"
                  className="h-full w-full rounded-md bg-white object-cover"
                />
              </a>
            </div>
          </div>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button key={item.id} id={`nav-link-${item.id}`} onClick={() => handleNavClick(item.id!)} className="text-sm font-medium text-zinc-600 hover:text-sky-700 transition-colors cursor-pointer">
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botões de Ação */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="header-phone-btn"
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 hover:bg-zinc-100 border border-zinc-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Botão menu Mobile */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu gaveta mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button key={item.id} id={`mobile-nav-${item.id}`} onClick={() => handleNavClick(item.id!)} className="text-left px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:bg-zinc-100">
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <a
              id="mobile-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-emerald-600 text-white"
            >
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
