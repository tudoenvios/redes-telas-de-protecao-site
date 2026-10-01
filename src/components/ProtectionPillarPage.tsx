import { useEffect } from 'react';
import { CheckCircle2, ChevronRight, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';
import { getTopicPath, serviceTopics } from '../data/serviceTopics';

const ROOT_URL = 'https://www.redestelasdeprotecoes.com.br';
const PATH = '/rede-de-protecao';
const TITLE = 'Rede de Proteção em São Paulo | Instalação Sob Medida';
const DESCRIPTION = 'Instalação de rede de proteção em São Paulo para janelas, sacadas, gatos, crianças, piscinas e escadas. Avaliação técnica e orçamento pelo WhatsApp.';

const faqs = [
  { question: 'Quanto custa instalar rede de proteção?', answer: 'O orçamento considera as medidas dos vãos, o tipo de ambiente, a malha indicada, a dificuldade de acesso e as condições de fixação. Fotos e medidas aproximadas permitem uma orientação inicial pelo WhatsApp.' },
  { question: 'Qual rede é indicada para janelas e sacadas?', answer: 'A indicação depende do uso do ambiente, das dimensões, da estrutura e de quem precisa de proteção. Crianças, gatos e outros pets podem exigir avaliações diferentes.' },
  { question: 'É possível instalar em sacada com vidro?', answer: 'Em muitos casos, sim. É necessário avaliar o sistema de abertura do envidraçamento e o espaço disponível para que a solução preserve o funcionamento da sacada.' },
  { question: 'Como saber quando trocar a rede?', answer: 'Cortes, folgas, ressecamento, deformações e alterações nos pontos de fixação indicam necessidade de avaliação. Impactos ou reformas no local também justificam uma inspeção.' },
  { question: 'A rede substitui a supervisão de crianças e pets?', answer: 'Não. A rede é uma camada adicional de prevenção e deve ser combinada com supervisão, controle de acesso e inspeções periódicas.' },
];

export default function ProtectionPillarPage() {
  const canonical = `${ROOT_URL}${PATH}`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para instalação de rede de proteção. Posso enviar fotos, medidas e meu bairro.')}`;

  useEffect(() => {
    document.title = TITLE;
    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = value;
    };
    setMeta('meta[name="description"]', 'name', 'description', DESCRIPTION);
    setMeta('meta[property="og:title"]', 'property', 'og:title', TITLE);
    setMeta('meta[property="og:description"]', 'property', 'og:description', DESCRIPTION);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'protection-pillar-schema';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical, name: TITLE, description: DESCRIPTION, inLanguage: 'pt-BR', breadcrumb: { '@id': `${canonical}#breadcrumb` } },
      { '@type': 'Service', '@id': `${canonical}#servico`, name: 'Instalação de redes de proteção', serviceType: 'Instalação de redes de proteção sob medida', areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'AdministrativeArea', name: 'Grande São Paulo' }], provider: { '@id': `${ROOT_URL}/#empresa` }, url: canonical },
      { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${ROOT_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Rede de proteção', item: canonical },
      ] },
      { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    ] });
    document.getElementById(script.id)?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [canonical]);

  return <main className="min-h-screen bg-zinc-50 text-zinc-900">
    <header className="border-b border-zinc-200 bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4"><a href="/" className="flex items-center gap-2 font-bold"><ShieldCheck className="h-7 w-7 text-sky-600" />Rede & <span className="text-sky-600">Proteção</span></a><a href={`tel:+${CONTACT_INFO.phoneClean}`} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800"><Phone className="h-4 w-4" /> {CONTACT_INFO.phone}</a></div></header>
    <nav aria-label="Navegação estrutural" className="border-b border-zinc-200 bg-white"><ol className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-sm text-zinc-600"><li><a href="/">Início</a></li><li><ChevronRight className="h-4 w-4" /></li><li className="font-semibold text-zinc-900">Rede de proteção</li></ol></nav>

    <section className="bg-sky-950 text-white"><div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20"><div><p className="text-sm font-bold uppercase text-sky-200">Segurança para apartamentos e casas</p><h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Rede de proteção em São Paulo</h1><p className="mt-5 text-lg leading-8 text-sky-100">Instalação sob medida para janelas, sacadas, gatos, crianças, piscinas, escadas e outros pontos de risco. Cada ambiente é avaliado antes da indicação.</p><a href={whatsappUrl} className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-bold"><MessageCircle className="h-5 w-5" /> Pedir orçamento</a></div><img src="/images/banner-protecao-apartamento.jpg" alt="Rede de proteção instalada em apartamento para crianças e pets" className="aspect-[4/3] w-full object-cover" fetchPriority="high" /></div></section>

    <section className="mx-auto max-w-6xl px-4 py-14"><div className="max-w-3xl"><h2 className="text-3xl font-bold">Escolha a proteção adequada para cada ambiente</h2><p className="mt-4 leading-7 text-zinc-600">Uma instalação segura começa pela finalidade da proteção, pelas condições do imóvel e pelos pontos de fixação. Conheça as soluções e envie fotos para receber uma orientação inicial.</p></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{serviceTopics.map((topic) => <article key={topic.slug} className="overflow-hidden border border-zinc-200 bg-white"><img src={topic.image} alt={topic.imageAlt} className="aspect-[16/10] w-full object-cover" loading="lazy" /><div className="p-5"><h3 className="text-xl font-bold">{topic.shortName}</h3><p className="mt-2 leading-6 text-zinc-600">{topic.intro}</p><a href={getTopicPath(topic)} className="mt-4 inline-flex items-center gap-1 font-bold text-sky-700">Ver detalhes <ChevronRight className="h-4 w-4" /></a></div></article>)}</div></section>

    <section className="border-y border-zinc-200 bg-white py-14"><div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2"><div><h2 className="text-3xl font-bold">O que influencia a escolha e o orçamento</h2><ul className="mt-6 space-y-4">{['Medidas, formato e quantidade de vãos', 'Tipo de estrutura e condições de fixação', 'Presença de crianças, gatos ou outros pets', 'Altura, acesso e necessidade de trabalho especializado', 'Envidraçamento e regras visuais do condomínio'].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" /><span>{item}</span></li>)}</ul></div><div><h2 className="text-3xl font-bold">Como funciona o atendimento</h2><ol className="mt-6 grid gap-3">{['Envie fotos, medidas aproximadas e seu bairro', 'Informe onde será instalada e quem precisa de proteção', 'Receba a orientação e o orçamento inicial', 'Confirme as condições e agende a instalação'].map((item, index) => <li key={item} className="flex gap-4 border-l-4 border-sky-600 bg-zinc-50 p-4"><strong className="text-sky-700">0{index + 1}</strong><span>{item}</span></li>)}</ol></div></div></section>

    <section className="mx-auto max-w-6xl px-4 py-14"><h2 className="text-3xl font-bold">Perguntas frequentes sobre redes de proteção</h2><div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">{faqs.map((item) => <details key={item.question} className="py-5"><summary className="cursor-pointer font-bold">{item.question}</summary><p className="max-w-3xl pt-3 leading-7 text-zinc-600">{item.answer}</p></details>)}</div></section>

    <section className="bg-sky-50 py-12"><div className="mx-auto max-w-6xl px-4"><h2 className="text-2xl font-bold">Atendimento por localidade</h2><p className="mt-3 max-w-3xl leading-7 text-zinc-600">Consulte as regiões atendidas e acesse a página da sua localidade para falar com a equipe já informando o bairro ou a cidade.</p><a href="/areas-atendidas" className="mt-5 inline-flex items-center gap-1 font-bold text-sky-700">Ver áreas de atendimento <ChevronRight className="h-4 w-4" /></a></div></section>

    <section className="bg-zinc-950 py-14 text-center text-white"><div className="mx-auto max-w-3xl px-4"><h2 className="text-3xl font-bold">Envie as informações do ambiente</h2><p className="mt-4 text-zinc-300">Fotos, medidas aproximadas e o bairro ajudam a equipe a orientar a solução indicada.</p><a href={whatsappUrl} className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-bold"><MessageCircle className="h-5 w-5" /> Conversar pelo WhatsApp</a></div></section>
  </main>;
}
