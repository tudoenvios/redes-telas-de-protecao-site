import { useEffect } from 'react';
import { Building2, CheckCircle2, ChevronRight, ClipboardCheck, HardHat, MessageCircle, Ruler, ShieldCheck, Warehouse } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

const ROOT_URL = 'https://www.redestelasdeprotecoes.com.br';
const CANONICAL = `${ROOT_URL}/servicos/rede-de-protecao-para-galpoes`;

const applications = [
  {
    title: 'Galpoes comerciais e logisticos',
    text: 'Protecao em vãos internos, areas de circulacao, laterais abertas, pontos altos e locais com movimentacao de equipe.',
  },
  {
    title: 'Depositos e estoques',
    text: 'Fechamento preventivo em regioes com prateleiras altas, passagens tecnicas, aberturas internas e areas de separacao.',
  },
  {
    title: 'Mezaninos e passarelas',
    text: 'Instalacao sob medida para laterais de mezaninos, guarda-corpos, escadas industriais e vãos entre pavimentos.',
  },
  {
    title: 'Areas de carga e manutencao',
    text: 'Avaliacao de pontos onde existe circulacao de pessoas, acesso de equipamentos e necessidade de protecao sem travar a operacao.',
  },
];

const checklist = [
  'Fotos amplas do galpao, mostrando o vao completo e os pontos de fixacao possiveis.',
  'Medidas aproximadas de largura, altura e profundidade da area a proteger.',
  'Informacao sobre circulacao de empilhadeiras, escadas, plataformas ou equipamentos.',
  'Objetivo principal da rede: protecao de queda, isolamento de vao, apoio visual ou seguranca preventiva.',
  'Endereco, horario possivel de visita e se o local exige acesso com responsavel tecnico.',
];

const faq = [
  {
    question: 'Rede de protecao para galpao e igual a rede de apartamento?',
    answer: 'Nao necessariamente. Em galpoes, os vãos costumam ser maiores, a altura pode ser superior e a estrutura de fixacao pode ser metalica, de concreto ou mista. Por isso a solucao precisa ser avaliada no local.',
  },
  {
    question: 'Da para instalar em estrutura metalica?',
    answer: 'Em muitos casos, sim. A equipe precisa avaliar espessura, acesso, pontos de apoio, tipo de fixacao e se a instalacao interfere em telhas, vigas, passagens ou operacao interna.',
  },
  {
    question: 'A rede pode proteger mezanino de galpao?',
    answer: 'Pode ser indicada para laterais, vãos e pontos de risco em mezaninos, desde que exista estrutura adequada e que a instalacao seja dimensionada para o uso do ambiente.',
  },
  {
    question: 'Como funciona o orcamento?',
    answer: 'O primeiro passo e enviar fotos, videos e medidas. Quando o projeto e maior ou envolve altura, a visita tecnica ajuda a confirmar acesso, fixacao, metragem e planejamento da instalacao.',
  },
  {
    question: 'Atende empresas em Sao Paulo?',
    answer: 'Sim. O atendimento pode ser avaliado para Sao Paulo, Grande Sao Paulo e regioes proximas, conforme endereco, tipo de projeto e agenda tecnica.',
  },
];

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function WarehouseProtectionPage() {
  const title = 'Rede de protecao para galpoes em Sao Paulo';
  const description = 'Instalacao de rede de protecao para galpoes, depositos, mezaninos, areas de carga e vãos altos em Sao Paulo. Avaliacao tecnica e orcamento sob medida.';
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Olá! Preciso de orçamento para rede de proteção em galpão, depósito ou mezanino. Posso enviar fotos, vídeos e medidas aproximadas?')}`;

  useEffect(() => {
    document.title = `${title} | Rede & Protecao`;
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
    schema.id = 'warehouse-protection-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${CANONICAL}#servico`,
          name: 'Rede de protecao para galpoes',
          serviceType: 'Instalacao de rede de protecao para galpoes, depositos e mezaninos',
          description,
          areaServed: [
            { '@type': 'City', name: 'Sao Paulo' },
            { '@type': 'AdministrativeArea', name: 'Grande Sao Paulo' },
          ],
          provider: { '@type': 'Organization', name: 'Rede & Protecao', telephone: CONTACT_INFO.phone },
          url: CANONICAL,
        },
        {
          '@type': 'FAQPage',
          '@id': `${CANONICAL}#faq`,
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        },
      ],
    });
    document.getElementById(schema.id)?.remove();
    document.head.appendChild(schema);
    return () => schema.remove();
  }, [description, title]);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-2 font-bold text-zinc-900">
            <ShieldCheck className="h-7 w-7 text-sky-600" />
            Rede & <span className="text-sky-600">Protecao</span>
          </a>
          <a href={`tel:+${CONTACT_INFO.phoneClean}`} className="font-semibold text-sky-700 hover:text-sky-900">
            {CONTACT_INFO.phone}
          </a>
        </div>
      </header>

      <nav aria-label="Navegacao estrutural" className="border-b border-zinc-200 bg-white">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-zinc-600">
          <li><a href="/">Inicio</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li><a href="/rede-de-protecao">Rede de protecao</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li className="font-semibold text-zinc-900">Galpoes</li>
        </ol>
      </nav>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-sky-200">
              <Warehouse className="h-4 w-4" />
              Protecao para empresas, galpoes e areas tecnicas
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-200">
              Instalacao sob medida para galpoes, depositos, mezaninos, passarelas, areas de carga e vãos altos.
              A avaliacao considera estrutura, altura, acesso, circulacao de pessoas e rotina de operacao do local.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700">
                <MessageCircle className="h-5 w-5" />
                Enviar fotos do galpao
              </a>
              <a href="#checklist" className="inline-flex items-center gap-2 rounded-md border border-zinc-600 px-5 py-3 font-bold text-white hover:border-white">
                <ClipboardCheck className="h-5 w-5" />
                Ver checklist
              </a>
            </div>
          </div>
          <img
            src="/images/rede-galpao.png"
            alt="Rede de protecao instalada em porta-paletes de galpao"
            className="aspect-[4/3] w-full object-cover"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        {[
          ['Projetos sob medida', 'Nao e pagina de produto pronto: cada vao precisa de leitura tecnica.'],
          ['Atendimento empresarial', 'Ideal para empresas, condominios comerciais, depositos e operacoes logisticas.'],
          ['Foco em avaliacao', 'Fotos, videos e medidas aceleram a primeira orientacao antes da visita.'],
        ].map(([titleItem, text]) => (
          <article key={titleItem} className="border border-zinc-200 bg-white p-5">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            <h2 className="mt-3 text-xl font-bold">{titleItem}</h2>
            <p className="mt-2 leading-7 text-zinc-700">{text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase text-sky-700">Aplicacoes principais</p>
          <h2 className="mt-2 text-3xl font-black">Onde a rede de protecao pode ajudar em galpoes</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {applications.map((item) => (
              <article key={item.title} className="border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <Building2 className="h-5 w-5 text-sky-700" />
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1fr_.9fr]">
        <article className="border border-zinc-200 bg-white p-6">
          <HardHat className="h-8 w-8 text-sky-700" />
          <h2 className="mt-4 text-3xl font-black">Por que galpao exige uma avaliacao diferente</h2>
          <p className="mt-4 leading-7 text-zinc-700">
            Em apartamentos, a rede geralmente protege janelas e sacadas com medidas previsiveis. Em galpoes, a conversa muda:
            existem vãos maiores, estruturas metalicas, paredes altas, telhas, equipamentos, pontos de manutencao e circulacao de equipe.
          </p>
          <p className="mt-4 leading-7 text-zinc-700">
            Por isso, a pagina orienta o cliente a enviar fotos, videos e medidas antes do orcamento. Isso filtra melhor a demanda,
            evita promessa sem vistoria e traz leads mais qualificados para atendimento comercial.
          </p>
        </article>
        <aside id="checklist" className="border border-sky-200 bg-sky-50 p-6">
          <Ruler className="h-8 w-8 text-sky-700" />
          <h2 className="mt-4 text-2xl font-black">Checklist para orcamento</h2>
          <ul className="mt-5 space-y-3 leading-7 text-zinc-700">
            {checklist.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase text-sky-700">SEO e venda</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black">Essa pagina pega uma busca mais empresarial</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ['Intencao comercial', 'Quem procura rede para galpao normalmente ja tem local, problema e necessidade de orcamento.'],
              ['Ticket maior', 'Projetos de galpao tendem a envolver mais metragem, vistoria e planejamento que uma janela comum.'],
              ['Menos concorrencia', 'E uma palavra-chave menos explorada do que rede para janela, gatos ou sacada.'],
            ].map(([itemTitle, text]) => (
              <article key={itemTitle} className="border border-zinc-200 p-5">
                <h3 className="text-xl font-bold">{itemTitle}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black">Perguntas frequentes</h2>
        <div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">
          {faq.map((item) => (
            <details key={item.question} className="py-5">
              <summary className="cursor-pointer font-bold">{item.question}</summary>
              <p className="max-w-3xl pt-3 leading-7 text-zinc-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-black">Precisa proteger um galpao, deposito ou mezanino?</h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Envie fotos do vao, medidas aproximadas e o endereco do local para uma primeira avaliacao pelo WhatsApp.
          </p>
          <a href={whatsappUrl} className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700">
            <MessageCircle className="h-5 w-5" />
            Solicitar orcamento tecnico
          </a>
        </div>
      </section>
    </main>
  );
}
