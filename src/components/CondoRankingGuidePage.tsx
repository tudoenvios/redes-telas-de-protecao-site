import { useEffect } from 'react';
import { Building2, ChevronRight, MapPin, ShieldCheck } from 'lucide-react';
import { getAreaPath, serviceAreas } from '../data/serviceAreas';

const ROOT_URL = 'https://www.redestelasdeprotecoes.com.br';
const CANONICAL = `${ROOT_URL}/guias/ranking-bairros-condominios-sao-paulo`;

const priorityDistricts = [
  {
    position: 1,
    name: 'Vila Mariana',
    summary: 'Distrito com forte presenca de apartamentos, empreendimentos verticais, familias e moradores com pets.',
    reason: 'Boa combinacao entre predios residenciais, sacadas, janelas altas e demanda por seguranca preventiva.',
  },
  {
    position: 2,
    name: 'Moema',
    summary: 'Regiao verticalizada, com condominios residenciais de medio e alto padrao e muitas varandas.',
    reason: 'Perfil excelente para redes em sacadas, janelas de quartos, apartamentos com gatos e protecao infantil.',
  },
  {
    position: 3,
    name: 'Jardim Paulista',
    summary: 'Area densa, com muitos edificios residenciais, apartamentos compactos e predios familiares.',
    reason: 'Alta relevancia para buscas de seguranca em janelas, sacadas e condominios nos Jardins.',
  },
  {
    position: 4,
    name: 'Pinheiros',
    summary: 'Bairro com verticalizacao intensa, novos empreendimentos e grande concentracao de apartamentos.',
    reason: 'Boa demanda para protecao de janelas, varandas, pets e apartamentos em andares altos.',
  },
  {
    position: 5,
    name: 'Itaim Bibi',
    summary: 'Regiao de alta densidade imobiliaria, com muitos condominios verticais e apartamentos com varanda.',
    reason: 'Forte potencial para redes discretas, instalacao em sacadas e atendimento tecnico em condominios.',
  },
  {
    position: 6,
    name: 'Perdizes',
    summary: 'Bairro residencial verticalizado, com condominios familiares, varandas e apartamentos antigos e novos.',
    reason: 'Relevante para familias, criancas, gatos e manutencao preventiva de redes em janelas.',
  },
  {
    position: 7,
    name: 'Tatuape',
    summary: 'Polo residencial da Zona Leste, com muitos condominios, torres novas e apartamentos familiares.',
    reason: 'Importante para ampliar autoridade fora do eixo Centro-Sul-Oeste e captar buscas da Zona Leste.',
  },
  {
    position: 8,
    name: 'Santana',
    summary: 'Distrito-chave da Zona Norte, com predios residenciais, condominios e apartamentos familiares.',
    reason: 'Boa oportunidade para redes em janelas, sacadas e protecao para criancas e pets na Zona Norte.',
  },
  {
    position: 9,
    name: 'Campo Belo',
    summary: 'Regiao com predios residenciais e condominios de perfil familiar, proxima a Moema e Brooklin.',
    reason: 'Alta afinidade com sacadas, apartamentos, pets e instalacoes sob medida em predios.',
  },
  {
    position: 10,
    name: 'Vila Andrade',
    summary: 'Distrito com grande numero de torres residenciais, condominios fechados e apartamentos altos.',
    reason: 'Muito relevante para protecao em sacadas, janelas e familias em condominios verticais.',
  },
  {
    position: 11,
    name: 'Morumbi',
    summary: 'Regiao com condominios residenciais, torres, varandas amplas e familias com criancas e pets.',
    reason: 'Boa oportunidade para conteudo sobre sacadas, gatos, criancas e manutencao de redes.',
  },
  {
    position: 12,
    name: 'Saude',
    summary: 'Bairro verticalizado, com apartamentos, edificios familiares e forte conexao com Vila Mariana.',
    reason: 'Relevante para buscas locais de redes para janelas, sacadas e apartamentos com pets.',
  },
  {
    position: 13,
    name: 'Mooca',
    summary: 'Distrito tradicional com adensamento residencial, condominios e predios familiares.',
    reason: 'Boa ponte de autoridade para Zona Leste e regiao central expandida.',
  },
  {
    position: 14,
    name: 'Ipiranga',
    summary: 'Area residencial com predios, condominios e apartamentos em diferentes perfis de construcao.',
    reason: 'Importante para captar buscas de protecao em janelas, sacadas e redes para gatos.',
  },
  {
    position: 15,
    name: 'Lapa',
    summary: 'Bairro com predios residenciais, condominios e boa conexao com Vila Leopoldina e Perdizes.',
    reason: 'Ajuda a fortalecer cobertura na Zona Oeste e buscas por instalacao em apartamentos.',
  },
];

const findArea = (name: string) => serviceAreas.find((area) => area.name === name);

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function CondoRankingGuidePage() {
  useEffect(() => {
    const title = 'Ranking de bairros com mais condominios em Sao Paulo | Rede & Protecao';
    const description = 'Guia estrategico sobre bairros de Sao Paulo com alta concentracao de edificios residenciais, condominios, apartamentos, sacadas e demanda por redes de protecao.';
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', CANONICAL);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = CANONICAL;

    const schema = document.createElement('script');
    schema.id = 'condo-ranking-guide-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      inLanguage: 'pt-BR',
      author: { '@type': 'Organization', name: 'Rede & Protecao' },
      publisher: { '@type': 'Organization', name: 'Rede & Protecao' },
      mainEntityOfPage: CANONICAL,
      about: ['condominios residenciais em Sao Paulo', 'edificios residenciais', 'redes de protecao', 'apartamentos com sacada'],
    });
    document.getElementById(schema.id)?.remove();
    document.head.appendChild(schema);
    return () => schema.remove();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-2 font-bold text-zinc-900">
            <ShieldCheck className="h-7 w-7 text-sky-600" />
            Rede & <span className="text-sky-600">Protecao</span>
          </a>
          <a href="/areas-atendidas" className="font-semibold text-sky-700 hover:text-sky-900">Areas atendidas</a>
        </div>
      </header>

      <section className="bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-sky-200">
            <Building2 className="h-4 w-4" />
            Guia DOTS de autoridade local
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Ranking de bairros com mais condominios e edificios residenciais em Sao Paulo
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-100">
            Este guia organiza os bairros e distritos mais relevantes para instalacao de redes de protecao em apartamentos,
            considerando verticalizacao, presenca de condominios, perfil residencial, sacadas, janelas altas, familias e pets.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {['Condominios e torres residenciais', 'Apartamentos com sacadas e janelas altas', 'Demanda por criancas, gatos e pets'].map((item) => (
              <div key={item} className="border border-sky-800 bg-sky-900 p-4 font-semibold text-sky-50">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1.1fr_.9fr]">
        <article className="border border-zinc-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Como ler este ranking</h2>
          <p className="mt-4 leading-7 text-zinc-700">
            Esta primeira versao e um ranking estrategico editorial para orientar conteudo, SEO local, campanhas e links internos.
            Ela nao afirma uma contagem oficial absoluta de todos os condominios da cidade. Para uma versao estatistica completa,
            o proximo passo e cruzar bases do GeoSampa, Prefeitura, IBGE e relatorios imobiliarios por distrito.
          </p>
          <p className="mt-4 leading-7 text-zinc-700">
            Mesmo assim, a lista ja ajuda a priorizar os bairros onde redes de protecao costumam ter maior aderencia:
            regioes com muitos predios residenciais, apartamentos em andares altos, sacadas, gatos, criancas e regras de condominio.
          </p>
        </article>
        <aside className="border border-zinc-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Fontes para evoluir a versao 2</h2>
          <ul className="mt-4 space-y-3 leading-7 text-zinc-700">
            <li><a className="font-semibold text-sky-700 hover:text-sky-900" href="https://novogeosampa.prefeitura.sp.gov.br/">GeoSampa</a>: lotes, edificacoes, distritos e dados geograficos da cidade.</li>
            <li><a className="font-semibold text-sky-700 hover:text-sky-900" href="https://secovi.com.br/">Secovi-SP</a>: mercado imobiliario, oferta residencial e relatorios por distrito.</li>
            <li><a className="font-semibold text-sky-700 hover:text-sky-900" href="https://www.ibge.gov.br/">IBGE</a>: domicilios, apartamentos e caracteristicas urbanas do Censo.</li>
            <li><a className="font-semibold text-sky-700 hover:text-sky-900" href="https://www.prefeitura.sp.gov.br/">Prefeitura de Sao Paulo</a>: urbanismo, licenciamento e dados abertos.</li>
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-black">Ranking estrategico inicial</h2>
        <p className="mt-3 max-w-3xl leading-7 text-zinc-700">
          Abaixo estao os bairros prioritarios para conteudos sobre condominios, edificios residenciais, redes de protecao,
          sacadas, janelas, criancas e pets na capital paulista.
        </p>
        <div className="mt-8 grid gap-4">
          {priorityDistricts.map((district) => {
            const area = findArea(district.name);
            return (
              <article key={district.name} className="grid gap-4 border border-zinc-200 bg-white p-5 md:grid-cols-[80px_1fr_auto] md:items-center">
                <div className="text-4xl font-black text-sky-700">{String(district.position).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-2xl font-bold">{district.name}</h3>
                  <p className="mt-2 leading-7 text-zinc-700">{district.summary}</p>
                  <p className="mt-2 text-sm font-semibold text-zinc-600">{district.reason}</p>
                </div>
                {area && (
                  <a href={getAreaPath(area)} className="inline-flex items-center justify-center gap-2 border border-sky-200 px-4 py-3 font-bold text-sky-800 hover:border-sky-500">
                    Ver pagina local
                    <ChevronRight className="h-5 w-5" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase text-sky-700">Por que isso ajuda em SEO e GEO</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black">Uma materia desse tipo vira hub de autoridade local</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="border border-zinc-200 p-5">
              <MapPin className="h-7 w-7 text-sky-700" />
              <h3 className="mt-4 text-xl font-bold">Conecta bairros</h3>
              <p className="mt-2 leading-7 text-zinc-700">A materia aponta para paginas locais, como Vila Mariana, Moema, Santana, Tatuape e Pinheiros.</p>
            </div>
            <div className="border border-zinc-200 p-5">
              <Building2 className="h-7 w-7 text-sky-700" />
              <h3 className="mt-4 text-xl font-bold">Explica a demanda</h3>
              <p className="mt-2 leading-7 text-zinc-700">Mostra por que predios, sacadas, janelas altas e condominios precisam de redes de protecao.</p>
            </div>
            <div className="border border-zinc-200 p-5">
              <ShieldCheck className="h-7 w-7 text-sky-700" />
              <h3 className="mt-4 text-xl font-bold">Atrai backlinks naturais</h3>
              <p className="mt-2 leading-7 text-zinc-700">Guias com dados e utilidade real sao melhores para receber links de parceiros, redes sociais e portais locais.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-black">Mora em predio ou condominio?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-300">
            Envie fotos da janela, sacada ou varanda para uma avaliacao inicial de rede de protecao.
          </p>
          <a href="https://wa.me/5511977534049?text=Ola!%20Gostaria%20de%20um%20orcamento%20para%20rede%20de%20protecao%20em%20apartamento%20ou%20condominio." className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700">
            Solicitar avaliacao pelo WhatsApp
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
