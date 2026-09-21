import React, { useState, useRef } from 'react';
import {
  ShieldCheck,
  Award,
  CreditCard,
  MessageCircle,
  Sparkles,
  Link2,
  Users,
  CheckCircle2,
  Wrench,
  Grid,
  Upload,
  RotateCcw,
  Building2,
  Image as ImageIcon,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';
import { useImages } from '../context/ImageContext';

interface BannerShowcaseProps {
  onOpenAdvisor?: () => void;
}

export default function BannerShowcase({ onOpenAdvisor: _onOpenAdvisor }: BannerShowcaseProps) {
  const { bannerImage, setBannerImage, setIsManagerOpen } = useImages();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setBannerImage(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleResetImage = () => {
    setBannerImage(null);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(
    'Olá! Vi o banner de Redes de Proteção para Apartamento e gostaria de solicitar um orçamento para janelas/sacadas.'
  )}`;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {/* Barra de Ação Superior: Alternar ou Carregar o Arquivo Original Enviado + Botão para Trocar Todas */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 bg-sky-900/10 rounded-xl border border-sky-200/80 text-xs text-sky-950">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            {bannerImage
              ? 'Exibindo imagem original do banner'
              : 'Banner oficial clonado da arte anexa (Janelas, Sacadas, Crianças e Pets)'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* BOTÃO PRINCIPAL: TROCAR TODAS AS IMAGENS */}
          <button
            type="button"
            id="btn-trocar-todas-imagens-banner"
            onClick={() => setIsManagerOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-xs transition-transform hover:scale-105 cursor-pointer"
            title="Abre a Central para trocar todas as fotos do site"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Trocar Todas as Imagens</span>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
            title="Selecione o arquivo da imagem salva no seu computador"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Carregar Imagem Original</span>
          </button>

          {bannerImage && (
            <button
              type="button"
              onClick={handleResetImage}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-medium text-xs transition-colors cursor-pointer"
              title="Voltar para a versão clonada em código"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restaurar Clone</span>
            </button>
          )}
        </div>
      </div>

      {/* CASO 1: SE O USUÁRIO CARREGOU A IMAGEM ORIGINAL (PNG/JPG) */}
      {bannerImage ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 transition-all ${
            isDragging ? 'border-sky-500 ring-4 ring-sky-300' : 'border-sky-900/20'
          }`}
        >
          <img
            src={bannerImage}
            alt="Rede de Proteção para Apartamento - Janelas e Sacadas - Rede & Proteção®"
            className="w-full h-auto object-contain block bg-zinc-950"
          />

          {/* Botão de Ação Flutuante para Chamar no WhatsApp 11 97753-4049 */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm sm:text-base shadow-2xl border-2 border-white hover:scale-105 transition-all cursor-pointer group"
            >
              <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider font-extrabold text-emerald-950">
                  Fale com a gente!
                </span>
                <span className="block text-sm sm:text-lg font-black tracking-tight leading-none text-white">
                  {CONTACT_INFO.whatsappDisplay}
                </span>
              </div>
            </a>
          </div>
        </div>
      ) : (
        /* CASO 2: CLONE PIXEL A PIXEL DA ARTE ANEXA */
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 bg-white text-zinc-900 transition-all ${
            isDragging ? 'border-sky-500 ring-4 ring-sky-300' : 'border-zinc-200'
          }`}
        >
          {/* Topo do Banner: Título + Selo Dourado de Garantia */}
          <div className="relative z-10 px-5 sm:px-8 pt-6 sm:pt-8 pb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4 bg-gradient-to-b from-sky-50/80 via-white to-transparent">
            {/* Bloco de Título */}
            <div className="space-y-1.5">
              <span className="inline-block px-3 py-1 rounded bg-[#0b2238] text-white font-black text-xs sm:text-sm uppercase tracking-wider">
                Rede de
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0b2238] tracking-tight leading-none">
                PROTEÇÃO
              </h2>
              <h3 className="text-xl sm:text-3xl font-black text-[#0b2238] tracking-tight uppercase">
                Para Apartamento
              </h3>
              <div className="pt-1">
                <span className="inline-block bg-[#f59e0b] text-[#0b2238] font-black text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                  Para Janelas e Sacadas
                </span>
              </div>
            </div>

            {/* Selo Heraldico Dourado: 5 Anos de Garantia */}
            <div className="shrink-0 self-end sm:self-auto">
              <div className="relative w-36 sm:w-44 bg-[#0b2238] text-center p-3 sm:p-4 rounded-b-2xl border-4 border-[#d4af37] shadow-xl">
                {/* Ícone de escudo no topo do selo */}
                <div className="w-8 h-8 mx-auto rounded-full bg-white flex items-center justify-center mb-1 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#0b2238]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#f59e0b] leading-tight tracking-tight">
                  5 ANOS
                </div>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white">
                  De Garantia
                </div>
                <div className="flex justify-center gap-1 text-[#f59e0b] text-xs mt-1">
                  ★ ★ ★ ★ ★
                </div>
              </div>
            </div>
          </div>

          {/* Área Central: Pilares Técnicos à Esquerda + Foto Real da Janela com Rede, Crianças e Pet à Direita */}
          <div className="relative min-h-[380px] sm:min-h-[460px] overflow-hidden bg-gradient-to-r from-white via-sky-50/40 to-transparent">
            {/* Foto de Fundo Real de Janela Ensolarada com Trama de Rede Técnica */}
            <div className="absolute inset-0 sm:left-1/3">
              <img
                src="/rede-janela-real.jpg"
                alt="Janela ampla com rede de proteção instalada e vista panorâmica da cidade"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay Suave para Integração */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 sm:via-white/50 to-transparent" />
              {/* Trama de Rede de Proteção Diamante com Efeito Tátil */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(255,255,255,0.7) 1.5px, transparent 1.5px),
                    linear-gradient(-45deg, rgba(255,255,255,0.7) 1.5px, transparent 1.5px)
                  `,
                  backgroundSize: '28px 28px',
                }}
              />
            </div>

            {/* Conteúdo à Esquerda: 3 Badges (Resistente, Durável, Decorativa) + Card de Segurança */}
            <div className="relative z-10 p-5 sm:p-8 max-w-md space-y-4">
              {/* 1. Resistente */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0b2238] border-2 border-white shadow-md flex items-center justify-center shrink-0 text-white">
                  <ShieldCheck className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-[#0b2238] tracking-wide">
                    Resistente
                  </h4>
                  <p className="text-xs text-zinc-700 leading-tight font-medium">
                    Material de alta qualidade e máxima segurança (500 kg/m²).
                  </p>
                </div>
              </div>

              {/* 2. Durável */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0b2238] border-2 border-white shadow-md flex items-center justify-center shrink-0 text-white">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-[#0b2238] tracking-wide">
                    Durável
                  </h4>
                  <p className="text-xs text-zinc-700 leading-tight font-medium">
                    Feita para durar e proteger o que você mais ama (Tratamento Anti-UV).
                  </p>
                </div>
              </div>

              {/* 3. Decorativa */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0b2238] border-2 border-white shadow-md flex items-center justify-center shrink-0 text-white">
                  <Sparkles className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-[#0b2238] tracking-wide">
                    Decorativa
                  </h4>
                  <p className="text-xs text-zinc-700 leading-tight font-medium">
                    Design discreto que valoriza seu apartamento sem fechar a vista.
                  </p>
                </div>
              </div>

              {/* Card Destaque: Crianças e Pets */}
              <div className="mt-4 bg-[#0b2238] text-white p-3.5 sm:p-4 rounded-2xl shadow-lg border border-sky-900/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-900/80 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-sky-200" />
                </div>
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-white">
                    Proteção para quem você ama!
                  </span>
                  <span className="block text-xs sm:text-sm font-black text-[#f59e0b] leading-tight">
                    CRIANÇAS E PETS
                  </span>
                  <span className="block text-[11px] text-sky-200 font-medium">
                    Mais segurança no seu dia a dia.
                  </span>
                </div>
              </div>
            </div>

            {/* Botão de WhatsApp Flutuante na Direita (Fale com a Gente! 11 97753-4049) */}
            <div className="relative sm:absolute sm:bottom-6 sm:right-6 z-20 px-5 pb-5 sm:p-0">
              <a
                id="clone-banner-whatsapp-card"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-zinc-900 px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-[#f59e0b] hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-black uppercase text-zinc-800 tracking-wider">
                    Fale com a gente!
                  </span>
                  <span className="block text-xl sm:text-2xl font-black text-[#0b2238] tracking-tight leading-none">
                    {CONTACT_INFO.whatsappDisplay}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Faixa de Pagamento Parcelado nos Cartões de Crédito */}
          <div className="bg-[#0b2238] text-white px-5 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-sky-950">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#f59e0b]">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-black uppercase tracking-wide">
                  Pagamento Parcelado
                </span>
                <span className="block text-[11px] text-zinc-300">
                  Nos cartões de crédito
                </span>
              </div>
            </div>

            {/* Bandeiras dos Cartões em Pílula Branca */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-inner">
                <span className="text-blue-800 font-black text-xs italic tracking-tighter">
                  VISA
                </span>
                <span className="text-red-600 font-black text-xs">
                  mastercard
                </span>
                <span className="text-black font-black text-xs lowercase">
                  elo
                </span>
                <span className="bg-[#006fcf] text-white font-bold text-[9px] px-1 py-0.5 rounded-xs">
                  AMERICAN EXPRESS
                </span>
                <span className="bg-[#b3141a] text-white font-bold text-[9px] px-1 py-0.5 rounded-xs">
                  Hipercard
                </span>
              </div>
              <span className="text-xs font-bold text-[#f59e0b]">
                PARCELE EM ATÉ 12X* | MAIS FACILIDADE PARA VOCÊ!
              </span>
            </div>
          </div>

          {/* Rodapé do Banner: 5 Selos Dourados Oficiais */}
          <div className="bg-[#071727] text-white px-4 sm:px-6 py-3 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px] sm:text-[11px] font-bold border-t border-sky-900/60">
            <div className="flex flex-col items-center justify-center p-1">
              <ShieldCheck className="w-5 h-5 text-[#f59e0b] mb-1" />
              <span>MAIS SEGURANÇA PARA SUA FAMÍLIA E SEUS PETS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <Building2 className="w-5 h-5 text-[#f59e0b] mb-1" />
              <span>IDEAL PARA JANELAS E SACADAS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <Grid className="w-5 h-5 text-[#f59e0b] mb-1" />
              <span>REDE 100% POLIETILENO DE ALTA RESISTÊNCIA</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <Wrench className="w-5 h-5 text-[#f59e0b] mb-1" />
              <span>INSTALAÇÃO PROFISSIONAL E SEGURA</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center p-1">
              <Award className="w-5 h-5 text-[#f59e0b] mb-1" />
              <span>5 ANOS DE GARANTIA TOTAL</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
