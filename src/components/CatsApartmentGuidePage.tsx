import { useEffect } from 'react';
import { Cat, ChevronRight, Home, MessageCircle, ShieldCheck, Wind } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';

const ROOT_URL = 'https://www.redestelasdeprotecoes.com.br';
const CANONICAL = `${ROOT_URL}/guias/como-proteger-gatos-em-apartamento`;

const faq = [
  {
    question: 'Como proteger gato em apartamento?',
    answer: 'O primeiro passo e proteger todos os pontos de acesso: janelas, sacadas, areas de servico, basculantes e qualquer vao por onde o gato possa subir, apoiar o corpo ou tentar passar. A avaliacao tecnica confirma o tipo de fixacao, a altura, a tensao da rede e o padrao aceito pelo condominio.',
  },
  {
    question: 'Rede de protecao e indicada para gato filhote?',
    answer: 'Sim. Filhotes costumam ser curiosos, pequenos e rapidos, por isso a protecao precisa considerar janelas baixas, frestas, moveis proximos ao vao e locais onde o animal consiga impulsionar o corpo.',
  },
  {
    question: 'Gato consegue passar pela rede de protecao?',
    answer: 'Uma rede bem dimensionada, bem tensionada e instalada sem folgas reduz muito esse risco. Para gatos, a equipe avalia o tamanho do animal, o comportamento e os pontos de fuga antes de orientar a rede mais adequada.',
  },
  {
    question: 'Da para instalar em sacada envidracada?',
    answer: 'Na maioria dos casos, sim. O tecnico precisa entender como os vidros abrem, onde existem trilhos, perfis e pontos de fixacao para manter a circulacao da sacada sem comprometer a seguranca.',
  },
  {
    question: 'Preciso enviar medidas ou uma foto basta?',
    answer: 'Fotos amplas ajudam muito no primeiro atendimento. Medidas aproximadas aceleram o orcamento, mas a confirmacao final depende das condicoes reais da janela, sacada ou area de servico.',
  },
  {
    question: 'Qual a diferenca entre rede para gato e rede comum?',
    answer: 'A diferenca principal esta no cuidado com frestas, tensao, fixacao e fechamento dos pontos por onde o animal poderia tentar passar. Em alguns casos, uma malha mais fechada e indicada, mas essa orientacao deve vir depois de entender o ambiente e o perfil do gato.',
  },
  {
    question: 'O condominio pode exigir padrao de cor?',
    answer: 'Sim. Muitos condominios definem cores aceitas para manter o padrao visual da fachada. Antes de instalar, vale confirmar se o predio exige rede branca, preta, cristal ou outro acabamento especifico.',
  },
];

const riskPoints = [
  {
    title: 'Janelas de quartos e salas',
    text: 'Mesmo janelas com peitoril alto podem ser acessadas por camas, sofas, mesas e prateleiras.',
  },
  {
    title: 'Sacadas e varandas',
    text: 'Sao areas de curiosidade natural para gatos, principalmente quando ha vento, movimento na rua ou aves por perto.',
  },
  {
    title: 'Areas de servico',
    text: 'Tanques, maquinas, armarios e varais criam apoios que aproximam o pet de basculantes e vãos abertos.',
  },
  {
    title: 'Basculantes e frestas',
    text: 'Aberturas pequenas tambem precisam de atencao porque gatos testam passagem com cabeca, patas e ombros.',
  },
];

const priorityAreas = [
  ['Vila Mariana', '/distritos/vila-mariana'],
  ['Moema', '/distritos/moema'],
  ['Jardim Paulista', '/distritos/jardim-paulista'],
  ['Santana', '/distritos/santana'],
  ['Tatuape', '/distritos/tatuape'],
  ['Pinheiros', '/distritos/pinheiros'],
  ['Perdizes', '/distritos/perdizes'],
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

export default function CatsApartmentGuidePage() {
  const title = 'Como proteger gatos em apartamento: janelas, sacadas e cuidados importantes';
  const description = 'Guia para proteger gatos em apartamento com redes em janelas, sacadas, areas de servico e basculantes. Veja cuidados antes de instalar e como pedir orcamento.';
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Olá! Tenho gato em apartamento e quero proteger janelas ou sacada. Posso enviar fotos do ambiente para avaliação?')}`;

  useEffect(() => {
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
    schema.id = 'cats-apartment-guide-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${CANONICAL}#artigo`,
          headline: title,
          description,
          inLanguage: 'pt-BR',
          author: { '@type': 'Organization', name: 'Rede & Protecao' },
          publisher: { '@type': 'Organization', name: 'Rede & Protecao' },
          mainEntityOfPage: CANONICAL,
          about: ['rede de protecao para gatos', 'gatos em apartamento', 'sacadas seguras', 'janelas protegidas'],
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

      <nav aria-label="Navegação estrutural" className="border-b border-zinc-200 bg-white">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-zinc-600">
          <li><a href="/">Inicio</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li><a href="/servicos/rede-de-protecao-para-gatos">Rede para gatos</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li className="font-semibold text-zinc-900">Gatos em apartamento</li>
        </ol>
      </nav>

      <section className="bg-sky-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-sky-200">
              <Cat className="h-4 w-4" />
              Guia para tutores de gatos
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-sky-100">
              Para quem mora em apartamento, proteger o gato nao e apenas colocar rede em um vao. E entender por onde ele sobe,
              onde ele se apoia, quais frestas chamam atencao e como deixar janelas e sacadas seguras sem atrapalhar a rotina da casa.
            </p>
            <a href={whatsappUrl} className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-bold text-white">
              <MessageCircle className="h-5 w-5" />
              Enviar fotos para avaliacao
            </a>
          </div>
          <img
            src="/images/sacada-gato.jpg"
            alt="Gato em apartamento com sacada protegida por rede"
            className="aspect-[4/3] w-full object-cover"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1fr_.9fr]">
        <article className="border border-zinc-200 bg-white p-6">
          <h2 className="text-3xl font-black">O erro mais comum e proteger so o lugar mais obvio</h2>
          <p className="mt-4 leading-7 text-zinc-700">
            Muita gente pensa apenas na sacada principal. Mas gatos circulam por dormitorios, lavanderia, banheiro,
            janelas basculantes e moveis perto da parede. Uma boa avaliacao olha o apartamento como um circuito:
            onde o gato sobe, onde ele observa a rua e onde pode existir uma rota de fuga.
          </p>
          <p className="mt-4 leading-7 text-zinc-700">
            Por isso, a conversa ideal para orcamento inclui fotos amplas dos ambientes, informacao sobre idade e porte do gato,
            se ele e filhote, adulto, medroso, curioso ou escalador, e se o condominio exige padrao de cor.
          </p>
        </article>
        <aside className="border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-2xl font-bold">O que enviar no WhatsApp</h2>
          <ul className="mt-4 space-y-3 leading-7 text-zinc-700">
            <li>Fotos de frente e de lado das janelas, sacadas e areas de servico.</li>
            <li>Medidas aproximadas de largura e altura dos vaos.</li>
            <li>Quantidade de gatos, idade e comportamento.</li>
            <li>Regras do condominio sobre cor ou padrao visual.</li>
          </ul>
          <a href={whatsappUrl} className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 font-bold text-white">
            <MessageCircle className="h-5 w-5" />
            Pedir orientacao
          </a>
        </aside>
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black">Pontos do apartamento que precisam de atencao</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {riskPoints.map((item) => (
              <article key={item.title} className="border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <Home className="h-5 w-5 text-sky-700" />
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-sm font-bold uppercase text-sky-700">Escolha sem confundir o cliente</p>
        <h2 className="mt-2 text-3xl font-black">Rede para gato precisa ser pensada pelo ambiente, nao so pelo nome da malha</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.9fr]">
          <div className="leading-7 text-zinc-700">
            <p>
              Termos tecnicos como malha menor ou padrao podem aparecer na orientacao, mas eles nao devem ser a primeira decisao do cliente.
              O que importa no atendimento e entender se existe fresta, se a rede ficara bem tensionada, se a fixacao e adequada e se o gato
              tem comportamento de escalar, morder ou insistir em saidas.
            </p>
            <p className="mt-4">
              Depois dessa leitura, a equipe indica a solucao: janelas, sacadas, fechamento parcial ou total, pontos extras de seguranca,
              cor aceita pelo condominio e acabamento mais discreto para o apartamento.
            </p>
          </div>
          <div className="border-l-4 border-sky-600 bg-sky-50 p-5">
            <Wind className="h-7 w-7 text-sky-700" />
            <h3 className="mt-3 text-xl font-bold">Sacadas com vidro tambem entram na avaliacao</h3>
            <p className="mt-2 leading-7 text-zinc-700">
              Em sacadas envidracadas, e preciso observar trilhos, abertura dos vidros, perfis, cortinas e o vao que continua exposto
              quando a sacada esta aberta.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black">Guias e servicos relacionados</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Rede de protecao para gatos', '/servicos/rede-de-protecao-para-gatos'],
              ['Rede para sacadas', '/servicos/rede-de-protecao-para-sacadas'],
              ['Rede para janelas', '/servicos/rede-de-protecao-para-janelas'],
              ['Ranking de bairros com condominios', '/guias/ranking-bairros-condominios-sao-paulo'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="flex items-center justify-between gap-3 border border-zinc-200 bg-zinc-50 px-4 py-4 font-bold text-sky-800 hover:border-sky-500">
                {label}
                <ChevronRight className="h-5 w-5 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black">Atendimento em bairros com muitos apartamentos</h2>
        <p className="mt-3 max-w-3xl leading-7 text-zinc-700">
          O guia tambem se conecta as paginas locais para fortalecer o SEO por bairro e ajudar moradores de condominios a encontrarem atendimento proximo.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {priorityAreas.map(([label, href]) => (
            <a key={href} href={href} className="border border-sky-200 bg-white px-4 py-2 font-semibold text-sky-800 hover:border-sky-500">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black">Perguntas frequentes</h2>
          <div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">
            {faq.map((item) => (
              <details key={item.question} className="py-5">
                <summary className="cursor-pointer font-bold">{item.question}</summary>
                <p className="max-w-3xl pt-3 leading-7 text-zinc-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-black">Quer deixar janelas e sacada seguras para seu gato?</h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Envie fotos do apartamento, diga quantos gatos vivem no local e informe se o condominio tem alguma regra de cor.
          </p>
          <a href={whatsappUrl} className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-bold">
            <MessageCircle className="h-5 w-5" />
            Conversar pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
