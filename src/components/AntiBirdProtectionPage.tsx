import { useEffect } from 'react';
import { CheckCircle2, ChevronRight, Feather, MessageCircle, Ruler, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

const ROOT_URL = 'https://www.redestelasdeprotecoes.com.br';
const CANONICAL = `${ROOT_URL}/servicos/rede-anti-passaro`;

const benefits = [
  'Tratamento ultra violeta Anti-UV e antioxidante.',
  'Trama da rede que nao desfia e permite recortes mais eficientes.',
  'Material leve e discreto, sem forcar a estrutura do local.',
  'Excelente custo-beneficio em comparacao com telas metalicas.',
  'Rede resistente, com alta durabilidade para uso sob medida.',
  'Instalacao simples quando existe estrutura adequada para fixacao.',
  'Nao causa ferimentos nas criacoes quando aplicada corretamente.',
];

const applications = [
  'Fechamento de aviarios.',
  'Cobertura de lagos e tanques-rede para reduzir ataques de passaros aos peixes.',
  'Protecao contra entrada de morcegos, pombas, pardais, bem-te-vis e outras aves.',
  'Casas, industrias, armazenagem de graos e locais que possam abrigar aves.',
];

const meshes = ['5 cm x 5 cm', '3 cm x 3 cm', '2 cm x 2 cm', '1,5 cm x 1,5 cm'];

const measurementQuestions = [
  'Qual a altura x largura que precisa proteger?',
  'O local e casa, industria, aviario, lago, tanque-rede ou armazenamento?',
  'Ja existe estrutura para fixacao ou sera preciso avaliar os pontos?',
  'A necessidade e impedir entrada, cobrir uma area ou fechar uma lateral?',
];

const faq = [
  {
    question: 'A rede anti-passaro e feita sob medida?',
    answer: 'Sim. A equipe orienta a partir das medidas de altura e largura, fotos do local e objetivo da protecao antes de indicar a malha e a forma de fixacao.',
  },
  {
    question: 'Qual malha devo escolher?',
    answer: 'A malha depende do tipo de ave, do vao, da aplicacao e da necessidade do cliente. Trabalhamos com opcoes como 5 cm, 3 cm, 2 cm e 1,5 cm.',
  },
  {
    question: 'Serve para industria e armazenamento de graos?',
    answer: 'Pode ser avaliada para industrias, depositos, galpoes e locais de armazenamento, especialmente quando ha entrada ou abrigo de aves no ambiente.',
  },
  {
    question: 'A rede e mais economica que tela metalica?',
    answer: 'Em muitos casos, sim. A rede anti-passaro costuma ser uma alternativa leve, discreta e com melhor custo-beneficio que telas metalicas, dependendo do projeto.',
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

export default function AntiBirdProtectionPage() {
  const title = 'Rede anti-passaro sob medida';
  const description = 'Rede tela de protecao anti-passaros com tratamento Anti-UV, malhas variadas e aplicacao em aviarios, lagos, tanques-rede, casas, industrias e armazenamento.';
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Olá! Preciso de orçamento para rede anti-pássaro sob medida. Posso enviar altura, largura, fotos do local e a malha desejada?')}`;

  useEffect(() => {
    document.title = `${title} | Rede & Proteção`;
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
    schema.id = 'anti-bird-protection-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${CANONICAL}#servico`,
          name: 'Rede anti-passaro',
          serviceType: 'Rede tela de protecao anti-passaros sob medida',
          description,
          areaServed: [
            { '@type': 'City', name: 'Sao Paulo' },
            { '@type': 'AdministrativeArea', name: 'Grande Sao Paulo' },
          ],
          provider: { '@type': 'Organization', name: 'Rede & Proteção', telephone: CONTACT_INFO.phone },
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
            Rede & <span className="text-sky-600">Proteção</span>
          </a>
          <a href={`tel:+${CONTACT_INFO.phoneClean}`} className="font-semibold text-sky-700 hover:text-sky-900">
            {CONTACT_INFO.phone}
          </a>
        </div>
      </header>

      <nav aria-label="Navegação estrutural" className="border-b border-zinc-200 bg-white">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-zinc-600">
          <li><a href="/">Início</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li><a href="/rede-de-protecao">Rede de proteção</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li className="font-semibold text-zinc-900">Anti-pássaro</li>
        </ol>
      </nav>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_.95fr] lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-sky-200">
              <Feather className="h-4 w-4" />
              Rede tela de proteção anti-pássaros
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Rede anti-pássaro sob medida</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-200">
              Solução leve, discreta e econômica para reduzir a entrada de aves em casas, indústrias, aviários,
              lagos, tanques-rede e locais de armazenamento. Temos diversas medidas e malhas para avaliar conforme o uso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700">
                <MessageCircle className="h-5 w-5" />
                Pedir medida sob encomenda
              </a>
              <a href="#malhas" className="inline-flex items-center gap-2 rounded-md border border-zinc-600 px-5 py-3 font-bold text-white hover:border-white">
                <Ruler className="h-5 w-5" />
                Ver malhas
              </a>
            </div>
          </div>
          <img
            src="/images/rede-anti-passaro.jpeg"
            alt="Rede anti-passaro instalada para controle de aves"
            className="aspect-[4/3] w-full object-cover"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        {[
          ['Anúncio específico', 'Podemos criar um orçamento sob medida conforme altura, largura, malha e aplicação.'],
          ['Diversas medidas', 'A indicação depende do espaço, do tipo de ave e da estrutura disponível para fixação.'],
          ['Leve e discreta', 'A rede ajuda a proteger sem sobrecarregar a estrutura do local onde é instalada.'],
        ].map(([itemTitle, text]) => (
          <article key={itemTitle} className="border border-zinc-200 bg-white p-5">
            <Sparkles className="h-7 w-7 text-sky-700" />
            <h2 className="mt-3 text-xl font-bold">{itemTitle}</h2>
            <p className="mt-2 leading-7 text-zinc-700">{text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase text-sky-700">Vantagens da rede</p>
            <h2 className="mt-2 text-3xl font-black">Rede anti-pássaro com bom custo-benefício</h2>
            <p className="mt-4 leading-7 text-zinc-700">
              A tela anti-pássaros é uma alternativa econômica em comparação com telas metálicas, principalmente quando o objetivo é
              fechar vãos, laterais, coberturas ou pontos de entrada sem adicionar peso excessivo à estrutura.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <li key={item} className="flex gap-2 border border-zinc-200 bg-zinc-50 p-4 leading-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
        <article>
          <p className="text-sm font-bold uppercase text-sky-700">Aplicações principais</p>
          <h2 className="mt-2 text-3xl font-black">Onde a rede anti-pássaro pode ser usada</h2>
          <div className="mt-7 grid gap-4">
            {applications.map((item) => (
              <div key={item} className="flex gap-3 border border-zinc-200 bg-white p-5">
                <Feather className="mt-1 h-5 w-5 shrink-0 text-sky-700" />
                <p className="leading-7 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <aside id="malhas" className="border border-sky-200 bg-sky-50 p-6">
          <Ruler className="h-8 w-8 text-sky-700" />
          <h2 className="mt-4 text-3xl font-black">Temos na malha de</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {meshes.map((item) => (
              <div key={item} className="border border-sky-200 bg-white px-4 py-4 text-center text-lg font-black text-sky-900">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 leading-7 text-zinc-700">
            Não sabe se seria essa medida que precisa? Envie fotos, objetivo do fechamento e a medida de altura x largura para uma orientação inicial.
          </p>
        </aside>
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase text-sky-700">Orçamento sob medida</p>
          <h2 className="mt-2 text-3xl font-black">Perguntas para acertar a medida antes do anúncio</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {measurementQuestions.map((item) => (
              <article key={item} className="border border-zinc-200 bg-zinc-50 p-5">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                <h3 className="mt-3 text-lg font-bold">{item}</h3>
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
          <h2 className="text-3xl font-black">Precisa de rede anti-pássaro em medida específica?</h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Envie a altura, largura, fotos do local e informe se a aplicação é para aviário, lago, tanque-rede, casa, indústria ou armazenamento.
          </p>
          <a href={whatsappUrl} className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700">
            <MessageCircle className="h-5 w-5" />
            Solicitar orçamento no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
