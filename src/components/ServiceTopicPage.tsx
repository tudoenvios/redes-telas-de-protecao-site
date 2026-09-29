import { useEffect } from 'react';
import { CheckCircle2, ChevronRight, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';
import { getTopicPath, ServiceTopic, serviceTopics } from '../data/serviceTopics';

const ROOT_URL = 'https://redestelasdeprotecoes.com.br';

export default function ServiceTopicPage({ topic }: { topic: ServiceTopic }) {
  const canonical = `${ROOT_URL}${getTopicPath(topic)}`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para ${topic.name.toLowerCase()}. Posso enviar fotos e medidas aproximadas.`)}`;

  useEffect(() => {
    document.title = topic.title;
    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = value;
    };
    setMeta('meta[name="description"]', 'name', 'description', topic.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', topic.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', topic.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-topic-schema';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical, name: topic.title, description: topic.description, inLanguage: 'pt-BR', breadcrumb: { '@id': `${canonical}#breadcrumb` } },
      { '@type': 'Service', '@id': `${canonical}#servico`, name: topic.name, serviceType: topic.name, areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'AdministrativeArea', name: 'Grande São Paulo' }], provider: { '@id': `${ROOT_URL}/#empresa` }, url: canonical },
      { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${ROOT_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${ROOT_URL}/#aplicacoes` },
        { '@type': 'ListItem', position: 3, name: topic.shortName, item: canonical },
      ] },
      { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: topic.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    ] });
    document.getElementById(script.id)?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [canonical, topic]);

  const related = serviceTopics.filter((item) => item.slug !== topic.slug);

  return <main className="min-h-screen bg-zinc-50 text-zinc-900">
    <header className="border-b border-zinc-200 bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4"><a href="/" className="flex items-center gap-2 font-bold"><ShieldCheck className="h-7 w-7 text-sky-600" />Rede & <span className="text-sky-600">Proteção</span></a><a href={`tel:+${CONTACT_INFO.phoneClean}`} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800"><Phone className="h-4 w-4" /> (11) 97753-4049</a></div></header>
    <nav aria-label="Navegação estrutural" className="border-b border-zinc-200 bg-white"><ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-zinc-600"><li><a href="/">Início</a></li><li><ChevronRight className="h-4 w-4" /></li><li><a href="/rede-de-protecao">Rede de proteção</a></li><li><ChevronRight className="h-4 w-4" /></li><li className="font-semibold text-zinc-900">{topic.shortName}</li></ol></nav>
    <section className="bg-sky-950 text-white"><div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20"><div><p className="text-sm font-bold uppercase text-sky-200">Instalação sob medida</p><h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{topic.title}</h1><p className="mt-5 text-lg leading-8 text-sky-100">{topic.intro}</p><a href={whatsappUrl} className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-bold"><MessageCircle className="h-5 w-5" /> Solicitar avaliação</a></div><img src={topic.image} alt={topic.imageAlt} className="aspect-[4/3] w-full object-cover" fetchPriority="high" /></div></section>
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2"><div><h2 className="text-3xl font-bold">Onde essa solução é aplicada</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2">{topic.applications.map((item) => <li key={item} className="flex gap-2 border border-zinc-200 bg-white p-4"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />{item}</li>)}</ul></div><div><h2 className="text-3xl font-bold">O que avaliamos antes de instalar</h2><ul className="mt-6 space-y-3">{topic.checks.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600" />{item}</li>)}</ul><p className="mt-6 leading-7 text-zinc-600">Fotos e medidas aproximadas ajudam na orientação inicial. A confirmação final considera as condições reais do imóvel e os requisitos técnicos aplicáveis.</p></div></section>
    <section className="border-y border-zinc-200 bg-white py-14"><div className="mx-auto max-w-6xl px-4"><h2 className="text-3xl font-bold">Como funciona o atendimento</h2><div className="mt-7 grid gap-4 md:grid-cols-4">{['Envie fotos e medidas', 'Explique quem precisa de proteção', 'Receba a orientação técnica', 'Agende a instalação'].map((item, index) => <article key={item} className="border-l-4 border-sky-600 bg-zinc-50 p-5"><span className="text-sm font-black text-sky-700">0{index + 1}</span><h3 className="mt-2 font-bold">{item}</h3></article>)}</div></div></section>
    <section className="mx-auto max-w-6xl px-4 py-14"><h2 className="text-3xl font-bold">Perguntas frequentes</h2><div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">{topic.faq.map((item) => <details key={item.question} className="py-5"><summary className="cursor-pointer font-bold">{item.question}</summary><p className="max-w-3xl pt-3 leading-7 text-zinc-600">{item.answer}</p></details>)}</div></section>
    <section className="bg-sky-50 py-12"><div className="mx-auto max-w-6xl px-4"><h2 className="text-2xl font-bold">Outras soluções de proteção</h2><div className="mt-5 flex flex-wrap gap-2">{related.map((item) => <a key={item.slug} href={getTopicPath(item)} className="border border-sky-200 bg-white px-4 py-2 font-semibold text-sky-800 hover:border-sky-500">{item.shortName}</a>)}</div><div className="mt-6 flex flex-wrap gap-5"><a href="/rede-de-protecao" className="font-bold text-sky-700">Guia completo de redes de proteção</a><a href="/areas-atendidas" className="font-bold text-sky-700">Consultar áreas de atendimento</a></div></div></section>
    <section className="bg-zinc-950 py-14 text-center text-white"><div className="mx-auto max-w-3xl px-4"><h2 className="text-3xl font-bold">Peça uma avaliação sem compromisso</h2><p className="mt-4 text-zinc-300">Fale com a equipe e envie as informações do ambiente pelo WhatsApp.</p><a href={whatsappUrl} className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-bold"><MessageCircle className="h-5 w-5" /> Conversar pelo WhatsApp</a></div></section>
  </main>;
}
