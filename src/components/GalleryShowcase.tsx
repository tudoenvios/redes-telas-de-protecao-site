import { useState } from 'react';
import { Camera, MapPin, CheckCircle2, ShieldCheck, ZoomIn, X, MessageCircle, Image as ImageIcon } from 'lucide-react';
import { REAL_INSTALLATIONS, CONTACT_INFO } from '../data/protectionData';
import { useImages } from '../context/ImageContext';

interface GalleryShowcaseProps {
  onOpenAdvisor: () => void;
}

export default function GalleryShowcase({ onOpenAdvisor }: GalleryShowcaseProps) {
  const { galleryImages, setIsManagerOpen } = useImages();
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [activeModalImg, setActiveModalImg] = useState<typeof REAL_INSTALLATIONS[0] | null>(null);

  const filters = [
    { id: 'todos', label: 'Todas as Instalações' },
    { id: 'Sacada / Varanda', label: 'Sacadas & Varandas' },
    { id: 'Segurança Pet', label: 'Proteção para Pets & Gatos' },
    { id: 'Janelas Residenciais', label: 'Janelas' },
    { id: 'Escadas e Vãos', label: 'Escadas & Mezaninos' },
  ];

  const filteredItems =
    selectedFilter === 'todos'
      ? REAL_INSTALLATIONS
      : REAL_INSTALLATIONS.filter((item) => item.category === selectedFilter);

  return (
    <section id="galeria-instalacoes" className="py-16 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção de Imagens */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            Galeria de Instalações Reais
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Veja Nossos Serviços Concluídos
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Acabamento discreto, estética limpa e fixação milimétrica com ganchos em aço inoxidável e cordas de alta tenacidade.
          </p>

          <div className="pt-2">
            <button
              type="button"
              id="btn-trocar-imagens-galeria"
              onClick={() => setIsManagerOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-xs hover:scale-105 transition-all cursor-pointer"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Trocar Todas as Imagens do Site</span>
            </button>
          </div>
        </div>

        {/* Filtros da Galeria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === f.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 border border-zinc-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grade de Fotos Reais com Zoom e Detalhes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const currentImg = galleryImages[item.id] || item.imageUrl;
            return (
              <div
                key={item.id}
                id={`galeria-card-${item.id}`}
                className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={currentImg}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge de Malha Técnica */}
                <div className="absolute top-3 left-3 bg-zinc-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {item.mesh}
                </div>

                {/* Botão de Zoom */}
                <button
                  type="button"
                  onClick={() => setActiveModalImg(item)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/70 hover:bg-zinc-900 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  title="Ampliar foto"
                  aria-label="Ampliar foto"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Localização e Categoria */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] text-sky-300 font-medium mb-0.5">
                    <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-200/70 text-xs">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Norma ABNT NBR 16046
                  </span>

                  <button
                    type="button"
                    onClick={onOpenAdvisor}
                    className="font-semibold text-sky-700 hover:text-sky-800 transition-colors cursor-pointer"
                  >
                    Quero assim →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Banner de Chamada Visual para Orçamento com Foto */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-900 to-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Cotação com Foto
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Envie a foto da sua janela ou sacada no WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Nosso especialista técnico analisa o vão pela foto e envia o orçamento sem compromisso em instantes.
            </p>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(
              'Olá! Gostaria de enviar a foto da minha janela/sacada para vocês avaliarem um orçamento sem compromisso.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span>Enviar Foto no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Modal de Foto Ampliada */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="relative bg-zinc-900 rounded-2xl max-w-3xl w-full overflow-hidden border border-zinc-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-black">
              <img
                src={galleryImages[activeModalImg.id] || activeModalImg.imageUrl}
                alt={activeModalImg.imageAlt}
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-white space-y-2">
              <div className="flex items-center gap-2 text-xs text-sky-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeModalImg.location}</span>
                <span>•</span>
                <span>{activeModalImg.mesh}</span>
              </div>
              <h4 className="text-lg font-bold">{activeModalImg.title}</h4>
              <p className="text-xs text-zinc-300">{activeModalImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
