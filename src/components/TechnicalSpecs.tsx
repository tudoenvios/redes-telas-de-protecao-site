import { ShieldCheck, AlertTriangle, CheckCircle, XCircle, Award, FileCheck2 } from 'lucide-react';
import { TECHNICAL_COMPARISON } from '../data/protectionData';

export default function TechnicalSpecs() {
  return (
    <section id="especificacoes" className="py-16 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <Award className="w-3.5 h-3.5" />
            Engenharia e Normas Regulamentadoras
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Por que a Norma ABNT NBR 16046 Salva Vidas?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            A segurança da sua família depende de materiais certificados. Entenda as diferenças vitais entre redes de polietileno virgem e materiais reciclados sem procedência.
          </p>
        </div>

        {/* Tabela de Comparação Técnica */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-zinc-200 shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-100 text-xs font-bold uppercase text-zinc-600 border-b border-zinc-200">
                <tr>
                  <th scope="col" className="p-4 sm:p-5 w-1/3">
                    Critério Técnico
                  </th>
                  <th scope="col" className="p-4 sm:p-5 w-1/3 text-emerald-800 bg-emerald-50/70">
                    <span className="flex items-center gap-1.5 font-bold">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      Nossa Rede (PEAD Virgem)
                    </span>
                  </th>
                  <th scope="col" className="p-4 sm:p-5 w-1/3 text-red-900 bg-red-50/50">
                    <span className="flex items-center gap-1.5 font-bold">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      Redes Comuns / Sucata
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {TECHNICAL_COMPARISON.map((spec, index) => (
                  <tr key={index} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-zinc-800 align-top">
                      {spec.label}
                      <span className="block text-xs font-normal text-zinc-500 mt-1">
                        {spec.importance}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-950 font-medium bg-emerald-50/30 align-top">
                      {spec.peadVirgem}
                    </td>
                    <td className="p-4 sm:p-5 text-red-950 font-medium bg-red-50/20 align-top">
                      {spec.nylonComum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bloco explicativo sobre a NBR 16046 */}
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200 space-y-2">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
              <FileCheck2 className="w-4 h-4" />
              NBR 16046-1 (Fabricação)
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Exige que o fio tenha resistência mínima de 500 N por malha individual e suporte testes de tração laboratoriais após envelhecimento acelerado em câmara UV.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200 space-y-2">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
              <FileCheck2 className="w-4 h-4" />
              NBR 16046-2 (Instalação)
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Determina distância máxima de 30 cm entre pontos de ancoragem para evitar vãos de fuga e exige buchas específicas com colar para evitar infiltração no concreto.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200 space-y-2">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
              <FileCheck2 className="w-4 h-4" />
              NBR 16046-3 (Manutenção)
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Orienta inspeções anuais visuais pelo usuário e substituição preventiva antes de completar 5 anos de exposição severa ao sol e intempéries climáticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
