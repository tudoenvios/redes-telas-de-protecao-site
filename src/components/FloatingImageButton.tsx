import { Image as ImageIcon } from 'lucide-react';
import { useImages } from '../context/ImageContext';

export default function FloatingImageButton() {
  const { setIsManagerOpen } = useImages();

  return (
    <button
      id="floating-trocar-imagens-btn"
      type="button"
      onClick={() => setIsManagerOpen(true)}
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-2xl border border-amber-300/80 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
      title="Clique para trocar todas as imagens do site por pacotes temáticos ou enviar suas fotos"
    >
      <div className="w-6 h-6 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
        <ImageIcon className="w-3.5 h-3.5" />
      </div>
      <span className="tracking-tight">Trocar Todas as Imagens</span>
      <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
    </button>
  );
}
