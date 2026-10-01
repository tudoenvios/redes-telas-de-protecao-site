import { useEffect, useMemo } from 'react';
import { CheckCircle2, ChevronRight, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';
import { getLocalSeoProfile } from '../data/localSeoProfiles';
import { getAreaPath, getRelatedAreas, ServiceArea } from '../data/serviceAreas';
import { mercadoLivreProducts } from './MosquitoScreensPage';
import { getTopicPath, serviceTopics } from '../data/serviceTopics';

const ROOT_URL = 'https://www.redestelasdeprotecoes.com.br';

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

const serviceFocuses = [
  ['Janelas e apartamentos', 'Redes sob medida para dormitórios, salas, cozinhas e áreas de serviço.', '/images/janela-rede-protecao.jpg'],
  ['Sacadas e varandas', 'Proteção planejada conforme o vão, a fachada e as regras do condomínio.', '/images/sacada-rede-branca.jpg'],
  ['Gatos e outros pets', 'Avaliação entre malhas 3x3 cm e 5x5 cm conforme o porte e o ambiente.', '/images/sacada-gato.jpg'],
  ['Escadas e mezaninos', 'Fechamento de pontos internos que exigem atenção especial na instalação.', '/images/escada-protegida.jpg'],
] as const;

const hash = (value: string) => value.split('').reduce((total, char) => total + char.charCodeAt(0), 0);

export default function LocalLandingPage({ area }: { area: ServiceArea }) {
  const location = area.kind === 'distrito' ? `${area.name}, São Paulo` : area.kind === 'bairro-litoral' ? `${area.name}, ${area.city}` : area.name;
  const canonical = `${ROOT_URL}${getAreaPath(area)}`;
  const profile = getLocalSeoProfile(area.slug);
  const title = profile?.title ?? `Rede de Proteção em ${location} | Janelas e Sacadas`;
  const description = profile?.description ?? `Rede de proteção em ${location} para janelas, sacadas, crianças e pets. Avaliação técnica, instalação sob medida e orçamento rápido pelo WhatsApp.`;
  const relatedAreas = useMemo(() => getRelatedAreas(area), [area]);
  const focusOffset = hash(area.slug) % serviceFocuses.length;
  const orderedServices = [...serviceFocuses.slice(focusOffset), ...serviceFocuses.slice(0, focusOffset)];
  const productOffset = hash(area.slug) % Math.max(1, mercadoLivreProducts.length - 4);
  const featuredProducts = mercadoLivreProducts.slice(productOffset, productOffset + 4);
  const message = encodeURIComponent(`Olá! Gostaria de um orçamento para rede de proteção em ${location}. Posso enviar fotos e medidas aproximadas.`);
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${message}`;
  const faq = useMemo(() => [
    { question: `Vocês instalam rede de proteção em ${area.name}?`, answer: `Sim. Atendemos ${location} mediante agendamento. Para uma avaliação inicial, envie pelo WhatsApp fotos e medidas aproximadas das janelas, sacadas ou demais vãos.${profile ? ` Também avaliamos bairros próximos como ${profile.nearbyAreas.slice(0, 3).join(', ')}.` : ''}` },
    { question: `Qual malha é indicada para apartamentos com gatos em ${area.name}?`, answer: 'A escolha entre malha 3x3 cm e 5x5 cm depende do porte e do comportamento do animal, do tipo de abertura e das regras do condomínio. A indicação é feita após avaliar o ambiente.' },
    { question: 'Como solicitar orçamento para janelas e sacadas?', answer: `Informe o tipo de imóvel em ${area.name}, a quantidade de vãos e as medidas aproximadas. Fotos ajudam a identificar esquadrias, acesso e condições de fixação.` },
    { question: 'A rede precisa de manutenção?', answer: 'Sim. Faça inspeções visuais periódicas e solicite avaliação se houver cortes, folgas, ressecamento, impacto ou alteração nos pontos de fixação. Não improvise reparos.' },
  ], [area.name, location, profile]);

  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large');
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'local-service-schema';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical, name: title, description, inLanguage: 'pt-BR', isPartOf: { '@id': `${ROOT_URL}/#website` }, breadcrumb: { '@id': `${canonical}#breadcrumb` } },
        { '@type': 'Service', '@id': `${canonical}#servico`, name: `Instalação de redes de proteção em ${location}`, serviceType: 'Instalação de redes de proteção para janelas, sacadas e pets', areaServed: { '@type': area.kind === 'bairro-litoral' ? 'Place' : area.kind === 'distrito' ? 'AdministrativeArea' : 'City', name: location }, provider: { '@id': `${ROOT_URL}/#empresa` }, url: canonical },
        { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${ROOT_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Áreas atendidas', item: `${ROOT_URL}/areas-atendidas` },
          { '@type': 'ListItem', position: 3, name: area.name, item: canonical },
        ] },
        { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      ],
    });
    document.getElementById('static-local-schema')?.remove();
    document.getElementById(schema.id)?.remove();
    document.head.appendChild(schema);
    return () => schema.remove();
  }, [area.kind, area.name, canonical, description, faq, location, title]);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-2 font-bold text-zinc-900"><ShieldCheck className="h-7 w-7 text-sky-600" />Rede & <span className="text-sky-600">Proteção</span></a>
          <a href={`tel:+${CONTACT_INFO.phoneClean}`} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800"><Phone className="h-4 w-4" /> (11) 97753-4049</a>
        </div>
      </header>

      <nav aria-label="Navegação estrutural" className="border-b border-zinc-200 bg-white">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-zinc-600">
          <li><a href="/" className="hover:text-sky-700">Início</a></li><li><ChevronRight className="h-4 w-4" /></li>
          <li><a href="/areas-atendidas" className="hover:text-sky-700">Áreas atendidas</a></li><li><ChevronRight className="h-4 w-4" /></li>
          <li className="font-semibold text-zinc-900">{area.name}</li>
        </ol>
      </nav>

      <section className="bg-sky-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.25fr_.75fr] lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-200"><MapPin className="h-4 w-4" /> {area.zone}</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Rede de proteção em {area.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sky-100">{profile?.intro ?? `Instalação sob medida em apartamentos e condomínios, com soluções para janelas, sacadas, varandas, crianças, gatos e outros pets em ${location}.`}</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={whatsappUrl} className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-bold text-white hover:bg-emerald-600"><MessageCircle className="h-5 w-5" /> Pedir orçamento</a><a href={`tel:+${CONTACT_INFO.phoneClean}`} className="inline-flex items-center gap-2 rounded-md border border-sky-300 px-5 py-3 font-bold text-white hover:bg-sky-900"><Phone className="h-5 w-5" /> Ligar agora</a></div>
            {profile && <div className="mt-6 flex flex-wrap gap-2">{profile.secondaryKeywords.map((keyword) => <span key={keyword} className="rounded-full border border-sky-700 bg-sky-900 px-3 py-1 text-sm font-semibold text-sky-100">{keyword}</span>)}</div>}
          </div>
          <aside className="border border-sky-800 bg-sky-900 p-6"><h2 className="text-xl font-bold">O que enviar para avaliação</h2><ul className="mt-5 space-y-3 text-sky-100">{['Fotos amplas das janelas ou sacadas', 'Medidas aproximadas dos vãos', 'Quantidade de locais a proteger', 'Informação sobre crianças ou pets'].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />{item}</li>)}</ul></aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase text-sky-700">Soluções em {area.name}</p><h2 className="mt-2 text-3xl font-bold">Proteção planejada para cada abertura</h2><p className="mt-4 leading-7 text-zinc-700">O atendimento em {location} começa pela análise do ambiente. Tipo de esquadria, dimensões, acesso para instalação e regras do condomínio influenciam a solução recomendada.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">{orderedServices.map(([name, detail, image]) => <article key={name} className="overflow-hidden border border-zinc-200 bg-white"><img src={image} alt={`${name} com rede de proteção`} className="h-48 w-full object-cover" loading="lazy" /><div className="p-5"><h3 className="text-lg font-bold">{name}</h3><p className="mt-2 leading-6 text-zinc-600">{detail}</p></div></article>)}</div>
      </section>

      {profile && (
        <section className="border-y border-zinc-200 bg-white py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-sm font-bold uppercase text-sky-700">SEO local verificado</p>
              <h2 className="mt-2 text-3xl font-bold">Por que criar uma página específica para {area.name}</h2>
              <p className="mt-4 leading-7 text-zinc-700">{profile.localAngle}</p>
              <p className="mt-4 leading-7 text-zinc-700"><strong>Intenção de busca:</strong> {profile.intent}</p>
              <div className="mt-5 flex flex-wrap gap-2">{profile.nearbyAreas.map((nearby) => <span key={nearby} className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800">{nearby}</span>)}</div>
            </div>
            <div className="border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-bold">Sinais que fortalecem esta página</h3>
              <ul className="mt-5 space-y-3 text-zinc-700">{profile.proofSignals.map((signal) => <li key={signal} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{signal}</li>)}</ul>
              <div className="mt-6 flex flex-wrap gap-3">{profile.internalLinks.map((link) => <a key={link.href} href={link.href} className="font-semibold text-sky-700 hover:text-sky-900">{link.label}</a>)}</div>
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
          <img src="/images/hero-tela-mosquiteira-original.png" alt="Tela mosquiteira instalada em janela" className="h-72 w-full object-cover" loading="lazy" />
          <div><p className="text-sm font-bold uppercase text-emerald-700">Proteção contra insetos</p><h2 className="mt-2 text-3xl font-bold">Telas mosquiteiras em {area.name}</h2><p className="mt-4 leading-7 text-zinc-700">Também oferecemos telas mosquiteiras e acessórios para janelas e portas. Consulte modelos, kits e medidas disponíveis para seu projeto.</p><a href="/telas-mosquiteiras" className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700">Ver telas mosquiteiras <ChevronRight className="h-5 w-5" /></a></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-sm font-bold uppercase text-sky-700">Vitrine Doutor das Telas</p><h2 className="mt-2 text-3xl font-bold">Produtos em destaque</h2><p className="mt-3 max-w-3xl text-zinc-600">Uma seleção do catálogo para quem deseja montar, substituir ou complementar a tela mosquiteira.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{featuredProducts.map((product) => <article key={product.title} className="border border-zinc-200 bg-white"><img src={product.image} alt={product.title} className="h-44 w-full object-contain p-3" loading="lazy" /><div className="border-t border-zinc-100 p-4"><h3 className="line-clamp-3 font-bold">{product.title}</h3><p className="mt-2 text-lg font-black text-emerald-700">{product.price}</p><a href={whatsappUrl} className="mt-4 inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-900"><MessageCircle className="h-4 w-4" /> Consultar</a></div></article>)}</div>
        <a href="/telas-mosquiteiras" className="mt-7 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900">Ver todos os produtos <ChevronRight className="h-5 w-5" /></a>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div><h2 className="text-3xl font-bold">Como funciona o orçamento em {area.name}</h2><ol className="mt-6 space-y-4 text-zinc-700"><li><strong>1. Envie fotos e medidas:</strong> fazemos uma leitura inicial dos vãos.</li><li><strong>2. Confirme o uso:</strong> crianças, gatos, cães ou prevenção geral.</li><li><strong>3. Receba a orientação:</strong> indicamos malha, acabamento e necessidade de visita.</li><li><strong>4. Agende o serviço:</strong> combinamos data e condições de atendimento.</li></ol></div>
          <div><h2 className="text-3xl font-bold">Escolha da malha e manutenção</h2><p className="mt-4 leading-7 text-zinc-700">A escolha entre malha 3x3 cm e 5x5 cm considera o porte dos pets, o tipo de vão e a aplicação. A instalação deve respeitar as condições do imóvel e os requisitos técnicos aplicáveis.</p><p className="mt-4 leading-7 text-zinc-700">Depois da instalação, faça inspeções visuais e solicite avaliação se houver folgas, cortes, ressecamento ou impacto. Evite reparos improvisados.</p><div className="mt-5 flex flex-wrap gap-4"><a href="/#especificacoes" className="font-semibold text-sky-700 hover:text-sky-900">Informações técnicas</a><a href="/telas-mosquiteiras" className="font-semibold text-sky-700 hover:text-sky-900">Conhecer telas mosquiteiras</a></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14"><h2 className="text-3xl font-bold">Serviços de proteção em {area.name}</h2><p className="mt-3 max-w-3xl text-zinc-600">Veja orientações específicas para cada ambiente e necessidade antes de solicitar a avaliação local.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{serviceTopics.map((topic) => <a key={topic.slug} href={getTopicPath(topic)} className="flex items-center justify-between border border-zinc-200 bg-white p-4 font-bold text-sky-800 hover:border-sky-500">{topic.shortName}<ChevronRight className="h-5 w-5" /></a>)}</div></section>

      <section className="mx-auto max-w-6xl px-4 py-14"><h2 className="text-3xl font-bold">Perguntas frequentes em {area.name}</h2><div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">{faq.map((item) => <details key={item.question} className="py-5"><summary className="cursor-pointer font-bold">{item.question}</summary><p className="max-w-3xl pt-3 leading-7 text-zinc-600">{item.answer}</p></details>)}</div></section>

      <section className="bg-sky-50 py-12"><div className="mx-auto max-w-6xl px-4"><h2 className="text-2xl font-bold">Atendimento próximo de {area.name}</h2><p className="mt-2 text-zinc-600">Consulte também as páginas de áreas relacionadas para conhecer nossa cobertura regional.</p><div className="mt-5 flex flex-wrap gap-2">{relatedAreas.map((related) => <a key={related.slug} href={getAreaPath(related)} className="border border-sky-200 bg-white px-4 py-2 font-semibold text-sky-800 hover:border-sky-500">{related.name}</a>)}</div><a href="/areas-atendidas" className="mt-5 inline-block font-bold text-sky-700">Ver todas as áreas atendidas</a></div></section>

      <section className="bg-zinc-950 py-14 text-white"><div className="mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold">Solicite uma avaliação em {area.name}</h2><p className="mx-auto mt-4 max-w-2xl text-zinc-300">Envie fotos e medidas aproximadas para receber uma orientação inicial sobre sua instalação.</p><a href={whatsappUrl} className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"><MessageCircle className="h-5 w-5" /> Conversar pelo WhatsApp</a></div></section>
      <footer className="bg-black px-4 py-8 text-center text-sm text-zinc-400">Rede & Proteção · Atendimento em {location} · Segunda a sábado, 08h às 19h</footer>
    </main>
  );
}
