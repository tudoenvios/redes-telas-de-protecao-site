import React, { useState, useRef } from 'react';
import {
  X,
  Sparkles,
  Upload,
  Check,
  RotateCcw,
  Image as ImageIcon,
  Layers,
  FolderUp,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useImages, THEMATIC_PACKS } from '../context/ImageContext';

const SERVICE_LABELS: Record<string, string> = {
  janelas: 'Redes para Janelas (Quartos e Salas)',
  sacadas: 'Sacadas e Varandas Panorâmicas',
  'pets-gatos': 'Proteção Especial Anti-Gatos (3x3cm)',
  'escadas-mezaninos': 'Escadas, Mezaninos e Piscinas',
};

const GALLERY_LABELS: Record<string, string> = {
  'inst-1': 'Galeria 1: Sacada com Cortina de Vidro (Moema)',
  'inst-2': 'Galeria 2: Proteção Anti-Gatos (Perdizes)',
  'inst-3': 'Galeria 3: Janela Residencial Infantil (Tatuapé)',
  'inst-4': 'Galeria 4: Varanda Gourmet em Andar Alto (Alphaville)',
  'inst-5': 'Galeria 5: Escada Flutuante Interna (Granja Viana)',
  'inst-6': 'Galeria 6: Piscina e Área de Lazer (Campinas)',
};

export default function ImageManagerModal() {
  const {
    isManagerOpen,
    setIsManagerOpen,
    bannerImage,
    serviceImages,
    galleryImages,
    activePackId,
    applyPack,
    setBannerImage,
    setServiceImage,
    setGalleryImage,
    uploadBatchImages,
    resetAllImages,
  } = useImages();

  const [activeTab, setActiveTab] = useState<'packs' | 'batch' | 'individual'>('packs');
  const [dragOver, setDragOver] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);
  const batchInputRef = useRef<HTMLInputElement>(null);
  const singleInputRef = useRef<HTMLInputElement>(null);
  const [pendingTarget, setPendingTarget] = useState<{ type: 'banner' | 'service' | 'gallery'; id?: string } | null>(null);

  if (!isManagerOpen) return null;

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  const handleBatchFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const updatedCount = await uploadBatchImages(files);
    showToast(`${updatedCount} imagens foram substituídas com sucesso em todo o site!`);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const updatedCount = await uploadBatchImages(e.dataTransfer.files);
      showToast(`${updatedCount} imagens foram substituídas com sucesso!`);
    }
  };

  const handleSingleUpload = (type: 'banner' | 'service' | 'gallery', id?: string) => {
    setPendingTarget({ type, id });
    singleInputRef.current?.click();
  };

  const handleSingleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !pendingTarget) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) return;

      if (pendingTarget.type === 'banner') {
        setBannerImage(result);
        showToast('Imagem do Banner Principal atualizada com sucesso!');
      } else if (pendingTarget.type === 'service' && pendingTarget.id) {
        setServiceImage(pendingTarget.id, result);
        showToast(`Imagem de "${SERVICE_LABELS[pendingTarget.id]}" atualizada!`);
      } else if (pendingTarget.type === 'gallery' && pendingTarget.id) {
        setGalleryImage(pendingTarget.id, result);
        showToast(`Imagem de "${GALLERY_LABELS[pendingTarget.id]}" atualizada!`);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-zinc-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={() => setIsManagerOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toast Notificação */}
        {successToast && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
            <CheckCircle2 className="w-4 h-4" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Input oculto para troca individual */}
        <input
          ref={singleInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleSingleFileChange}
        />

        {/* Topo / Header da Janela */}
        <div className="px-5 sm:px-6 py-4 border-b border-zinc-200 flex items-center justify-between bg-gradient-to-r from-sky-900 to-sky-800 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-sky-200 shadow-inner">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                Central de Imagens do Site
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-600 text-sky-100 border border-sky-400/30">
                  Troca Rápida
                </span>
              </h3>
              <p className="text-xs text-sky-200">
                Troque todas as fotos do site de uma só vez ou faça upload das fotos reais da sua empresa.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsManagerOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Abas de Navegação */}
        <div className="flex border-b border-zinc-200 bg-zinc-50 px-4 sm:px-6 pt-2 gap-2 text-xs font-bold overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('packs')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'packs'
                ? 'border-sky-600 text-sky-700'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. Trocar Todas com Pacotes Prontos (1 Clique)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('batch')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'batch'
                ? 'border-sky-600 text-sky-700'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <FolderUp className="w-4 h-4" />
            <span>2. Subir Fotos do Meu Computador (Em Massa)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('individual')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'individual'
                ? 'border-sky-600 text-sky-700'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>3. Personalizar Cada Seção Individualmente</span>
          </button>
        </div>

        {/* Conteúdo da Modal */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* ABA 1: PACOTES PRONTOS */}
          {activeTab === 'packs' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-zinc-900">
                    Escolha um tema para substituir todas as imagens
                  </h4>
                  <p className="text-xs text-zinc-600">
                    Ao selecionar qualquer um dos pacotes abaixo, todas as fotos de serviços e galeria serão atualizadas imediatamente.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    resetAllImages();
                    showToast('Todas as imagens foram restauradas para os padrões originais!');
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200 transition-colors self-start sm:self-auto cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restaurar Originais</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {THEMATIC_PACKS.map((pack) => {
                  const isActive = activePackId === pack.id;
                  return (
                    <div
                      key={pack.id}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all p-4 flex flex-col justify-between ${
                        isActive
                          ? 'border-sky-600 bg-sky-50/50 shadow-md ring-2 ring-sky-300'
                          : 'border-zinc-200 bg-white hover:border-sky-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={pack.previewUrl}
                          alt={pack.name}
                          className="w-20 h-20 rounded-lg object-cover shrink-0 border border-zinc-200 shadow-xs"
                        />
                        <div className="space-y-1">
                          <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                            {pack.badge}
                          </span>
                          <h5 className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                            {pack.name}
                          </h5>
                          <p className="text-[11px] text-zinc-500 leading-snug">
                            {pack.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-[10px] text-zinc-500 font-medium">
                          10 fotos inclusas
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            applyPack(pack.id);
                            showToast(`Pacote "${pack.name}" aplicado em todo o site!`);
                          }}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-sky-600 hover:bg-sky-700 text-white shadow-xs'
                          }`}
                        >
                          {isActive ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Pacote em Uso</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Aplicar Todas as Fotos</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ABA 2: SUBIR FOTOS DO COMPUTADOR (EM MASSA) */}
          {activeTab === 'batch' && (
            <div className="space-y-5">
              <input
                ref={batchInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => handleBatchFileSelect(e.target.files)}
              />

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => batchInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-3 ${
                  dragOver
                    ? 'border-sky-500 bg-sky-50/70 ring-4 ring-sky-200'
                    : 'border-zinc-300 hover:border-sky-400 bg-zinc-50 hover:bg-sky-50/20'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-sky-600/10 text-sky-600 flex items-center justify-center">
                  <FolderUp className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-base font-black text-zinc-900">
                    Arraste ou clique para selecionar suas imagens
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-md mx-auto">
                    Você pode selecionar de 1 a 10 fotos de uma só vez (incluindo o banner <strong>redetela....s....png</strong> e fotos das suas instalações). O sistema substitui automaticamente tudo pelo site.
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span>Selecionar Fotos do Meu Computador</span>
                </button>
              </div>

              {/* Dica de organização */}
              <div className="bg-sky-50 rounded-xl p-4 border border-sky-200 text-xs text-sky-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  Como funciona o upload inteligente:
                </span>
                <p>
                  • <strong>1 arquivo selecionado</strong>: Atualiza o Banner Principal do anúncio no topo da página.
                </p>
                <p>
                  • <strong>Múltiplos arquivos</strong>: O 1º é aplicado ao Banner, os 4 seguintes para as Aplicações Técnicas (Janelas, Sacadas, Pets, Escadas) e os demais para a Galeria de Fotos Reais!
                </p>
              </div>
            </div>
          )}

          {/* ABA 3: PERSONALIZAÇÃO INDIVIDUAL POR SEÇÃO */}
          {activeTab === 'individual' && (
            <div className="space-y-6">
              {/* Destaque Banner Principal */}
              <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                      Destaque Superior
                    </span>
                    <h5 className="text-sm font-black text-zinc-900 mt-1">
                      Banner do Anúncio Principal (Janelas, Sacadas, Crianças & Pets)
                    </h5>
                    <p className="text-xs text-zinc-500">
                      Suba o arquivo original da arte fornecida (ex: <em>redetela....s....png</em>) ou use o clone fiel em código.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleSingleUpload('banner')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Nova Imagem</span>
                    </button>
                    {bannerImage && (
                      <button
                        type="button"
                        onClick={() => {
                          setBannerImage(null);
                          showToast('Restaurado para a arte original em código!');
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-800 text-xs font-medium cursor-pointer"
                      >
                        Restaurar
                      </button>
                    )}
                  </div>
                </div>

                {bannerImage && (
                  <div className="w-full max-h-36 overflow-hidden rounded-xl border border-zinc-300 bg-zinc-900 flex items-center justify-center">
                    <img src={bannerImage} alt="Banner Preview" className="max-h-36 object-contain" />
                  </div>
                )}
              </div>

              {/* Seção 4 Aplicações */}
              <div className="space-y-3">
                <h5 className="text-xs font-black uppercase tracking-wider text-zinc-700">
                  Fotos dos 4 Serviços Principais
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(SERVICE_LABELS).map(([key, label]) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-zinc-200 shadow-2xs"
                    >
                      <img
                        src={serviceImages[key]}
                        alt={label}
                        className="w-16 h-16 rounded-lg object-cover border border-zinc-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-1">
                        <span className="block text-xs font-bold text-zinc-900 truncate">
                          {label}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSingleUpload('service', key)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:text-sky-800 cursor-pointer"
                        >
                          <Upload className="w-3 h-3" />
                          <span>Trocar Esta Foto</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seção 6 Fotos da Galeria */}
              <div className="space-y-3">
                <h5 className="text-xs font-black uppercase tracking-wider text-zinc-700">
                  Fotos da Galeria de Obras Reais (6 Fotos)
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(GALLERY_LABELS).map(([key, label]) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-zinc-200 shadow-2xs"
                    >
                      <img
                        src={galleryImages[key]}
                        alt={label}
                        className="w-16 h-16 rounded-lg object-cover border border-zinc-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-1">
                        <span className="block text-xs font-bold text-zinc-900 truncate">
                          {label}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSingleUpload('gallery', key)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:text-sky-800 cursor-pointer"
                        >
                          <Upload className="w-3 h-3" />
                          <span>Trocar Esta Foto</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé da Modal */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            As imagens selecionadas ficam gravadas permanentemente no seu navegador.
          </span>
          <button
            type="button"
            onClick={() => setIsManagerOpen(false)}
            className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            Concluir e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
