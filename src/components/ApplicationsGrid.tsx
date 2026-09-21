import { Home, Building2, Cat, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/protectionData';
import { ProtectionService } from '../types';
import { useImages } from '../context/ImageContext';

interface ApplicationsGridProps {
  onSelectService: (serviceId: string) => void;
}

export default function ApplicationsGrid({ onSelectService }: ApplicationsGridProps) {
  const { serviceImages } = useImages();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return Home;
      case 'Building2':
        return Building2;
      case 'Cat':
        return Cat;
      default:
        return Shield;
    }
  };

  return (
    <section id="aplicacoes" className="py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
            Aplicações Especializadas
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Onde as Redes de Proteção são Indispensáveis?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Soluções personalizadas em conformidade com as exigências de condomínios residenciais e órgãos de segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service: ProtectionService) => {
            const Icon = getIcon(service.iconName);
            const currentImg = serviceImages[service.id] || service.imageUrl;

            return (
              <div
                key={service.id}
                id={`card-servico-${service.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Imagem Real da Aplicação */}
                {currentImg && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 group">
                    <img
                      src={currentImg}
                      alt={service.imageAlt || service.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {service.recommendedMesh}
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {service.tag}
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Cabeçalho do Card */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block">
                            {service.recommendedMesh} • {service.tag}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Descrições */}
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Informações Técnicas Relevantes */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="bg-zinc-50 rounded-lg p-2.5 border border-zinc-100">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Resistência</span>
                        <span className="font-semibold text-zinc-800">{service.resistance}</span>
                      </div>
                      <div className="bg-zinc-50 rounded-lg p-2.5 border border-zinc-100">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Público Indicado</span>
                        <span className="font-semibold text-zinc-800">{service.targetAudience}</span>
                      </div>
                    </div>

                    {/* Lista de Vãos Ideais */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-semibold text-zinc-700 block">
                        Tipos de vãos e aberturas atendidos:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.idealFor.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs bg-zinc-100 text-zinc-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Botão de Cotação Rápida */}
                  <div className="pt-4 border-t border-zinc-100">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.id)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors cursor-pointer group"
                    >
                      <span>Solicitar orçamento gratuito sem compromisso</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
