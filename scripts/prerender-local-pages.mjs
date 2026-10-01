import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { coastalNeighborhoods, districtNames, guideSlugs, regionalNames, root, serviceTopicSlugs, slugify } from './generate-sitemap.mjs';

const template = readFileSync('dist/index.html', 'utf8');
const priorityProfiles = {
  'vila-mariana': {
    title: 'Rede de Proteção na Vila Mariana | Janelas, Sacadas e Gatos',
    description: 'Rede de proteção na Vila Mariana para apartamentos, janelas, sacadas, crianças e gatos. Atendimento local com avaliação técnica e orçamento rápido pelo WhatsApp.',
    nearbyAreas: ['Ana Rosa', 'Chácara Klabin', 'Saúde', 'Aclimação'],
  },
  moema: {
    title: 'Rede de Proteção em Moema | Apartamentos, Sacadas e Pets',
    description: 'Instalação de rede de proteção em Moema para janelas, varandas, sacadas, crianças e pets. Atendimento sob medida em condomínios e orçamento pelo WhatsApp.',
    nearbyAreas: ['Vila Olímpia', 'Indianópolis', 'Campo Belo', 'Ibirapuera'],
  },
  'jardim-paulista': {
    title: 'Rede de Proteção no Jardim Paulista | Janelas e Sacadas',
    description: 'Rede de proteção no Jardim Paulista para apartamentos, janelas, sacadas e pets. Avaliação técnica, instalação sob medida e atendimento por WhatsApp.',
    nearbyAreas: ['Jardins', 'Cerqueira César', 'Paraíso', 'Pinheiros'],
  },
  santana: {
    title: 'Rede de Proteção em Santana | Zona Norte SP',
    description: 'Rede de proteção em Santana para janelas, sacadas, gatos e crianças. Instalação sob medida na Zona Norte de São Paulo com orçamento rápido.',
    nearbyAreas: ['Tucuruvi', 'Casa Verde', 'Mandaqui', 'Vila Guilherme'],
  },
  tatuape: {
    title: 'Rede de Proteção no Tatuapé | Janelas, Varandas e Pets',
    description: 'Instalação de rede de proteção no Tatuapé para apartamentos, janelas, varandas, gatos e crianças. Atendimento técnico e orçamento pelo WhatsApp.',
    nearbyAreas: ['Anália Franco', 'Carrão', 'Mooca', 'Belém'],
  },
  mooca: {
    title: 'Rede de Proteção na Mooca | Sacadas, Janelas e Gatos',
    description: 'Rede de proteção na Mooca para janelas, sacadas, crianças e pets. Instalação planejada para apartamentos e condomínios com orçamento rápido.',
    nearbyAreas: ['Belenzinho', 'Brás', 'Tatuapé', 'Ipiranga'],
  },
  ipiranga: {
    title: 'Rede de Proteção no Ipiranga | Apartamentos e Sacadas',
    description: 'Rede de proteção no Ipiranga para janelas, sacadas, varandas, crianças e gatos. Atendimento sob medida e avaliação técnica pelo WhatsApp.',
    nearbyAreas: ['Sacomã', 'Vila Mariana', 'Saúde', 'Mooca'],
  },
  saude: {
    title: 'Rede de Proteção na Saúde | Janelas, Sacadas e Pets',
    description: 'Rede de proteção na Saúde para apartamentos, janelas, sacadas, crianças e gatos. Orçamento rápido e instalação sob medida em São Paulo.',
    nearbyAreas: ['Praça da Árvore', 'Vila Mariana', 'Jabaquara', 'Ipiranga'],
  },
  perdizes: {
    title: 'Rede de Proteção em Perdizes | Varandas, Janelas e Pets',
    description: 'Instalação de rede de proteção em Perdizes para varandas, janelas, crianças e pets. Atendimento técnico em condomínios e orçamento pelo WhatsApp.',
    nearbyAreas: ['Pompéia', 'Sumaré', 'Barra Funda', 'Higienópolis'],
  },
  pinheiros: {
    title: 'Rede de Proteção em Pinheiros | Janelas, Sacadas e Gatos',
    description: 'Rede de proteção em Pinheiros para apartamentos, janelas, sacadas, gatos e crianças. Instalação sob medida e orçamento rápido pelo WhatsApp.',
    nearbyAreas: ['Vila Madalena', 'Jardins', 'Butantã', 'Itaim Bibi'],
  },
};
const regions = new Set(['ABC Paulista', 'Alphaville', 'Granja Viana']);
const pages = [
  ...districtNames.map((name) => ({ name, path: `/distritos/${slugify(name)}`, location: `${name}, São Paulo`, areaType: 'AdministrativeArea' })),
  ...regionalNames.map((name) => ({ name, path: `/atendimento/${slugify(name)}`, location: name, areaType: regions.has(name) ? 'AdministrativeArea' : 'City' })),
  ...coastalNeighborhoods.map(({ name, city, citySlug }) => ({ name, path: `/${citySlug}/${slugify(name)}`, location: `${name}, ${city}`, areaType: 'Place' })),
];

const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const topicNames = {
  'rede-de-protecao-para-janelas': 'Rede de proteção para janelas em São Paulo',
  'rede-de-protecao-para-sacadas': 'Rede de proteção para sacadas e varandas',
  'rede-de-protecao-para-gatos': 'Rede de proteção para gatos em apartamentos',
  'rede-de-protecao-para-criancas': 'Rede de proteção para crianças em janelas e sacadas',
  'rede-de-protecao-para-piscinas': 'Rede de proteção para piscinas residenciais',
  'rede-de-protecao-para-escadas': 'Rede de proteção para escadas e mezaninos',
};

const guidePages = {
  'ranking-bairros-condominios-sao-paulo': {
    title: 'Ranking de bairros com mais condominios em Sao Paulo | Rede & Protecao',
    description: 'Guia estrategico sobre bairros de Sao Paulo com alta concentracao de edificios residenciais, condominios, apartamentos, sacadas e demanda por redes de protecao.',
  },
  'como-proteger-gatos-em-apartamento': {
    title: 'Como proteger gatos em apartamento | Janelas e sacadas seguras',
    description: 'Guia para proteger gatos em apartamento com redes em janelas, sacadas, areas de servico e basculantes. Veja cuidados antes de instalar e como pedir orcamento.',
  },
};

for (const page of pages) {
  const canonical = `${root}${page.path}`;
  const profile = priorityProfiles[slugify(page.name)];
  const title = profile?.title ?? `Rede de Proteção em ${page.location} | Janelas e Sacadas`;
  const description = profile?.description ?? `Rede de proteção em ${page.location} para janelas, sacadas, crianças e pets. Avaliação técnica, instalação sob medida e orçamento rápido pelo WhatsApp.`;
  const faq = profile ? [
    {
      question: `Vocês instalam rede de proteção em ${page.name}?`,
      answer: `Sim. Atendemos ${page.location} e bairros próximos como ${profile.nearbyAreas.slice(0, 3).join(', ')} mediante agendamento pelo WhatsApp.`,
    },
    {
      question: `Como pedir orçamento para ${page.name}?`,
      answer: 'Envie fotos amplas das janelas ou sacadas, medidas aproximadas e informe se a instalação é para crianças, gatos, outros pets ou prevenção geral.',
    },
  ] : [];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical, name: title, description, inLanguage: 'pt-BR', breadcrumb: { '@id': `${canonical}#breadcrumb` } },
      { '@type': 'Service', '@id': `${canonical}#servico`, name: `Instalação de redes de proteção em ${page.location}`, serviceType: 'Instalação de redes de proteção para janelas, sacadas e pets', areaServed: { '@type': page.areaType, name: page.location }, provider: { '@id': `${root}/#empresa` }, url: canonical },
      { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${root}/` },
        { '@type': 'ListItem', position: 2, name: 'Áreas atendidas', item: `${root}/areas-atendidas` },
        { '@type': 'ListItem', position: 3, name: page.name, item: canonical },
      ] },
      ...(faq.length ? [{ '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }] : []),
    ],
  };

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="title" content="[^"]*"\s*\/>/, `<meta name="title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="static-local-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`);

  const output = join('dist', page.path, 'index.html');
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, html);
}

for (const slug of serviceTopicSlugs) {
  const canonical = `${root}/servicos/${slug}`;
  const title = `${topicNames[slug]} | Rede & Proteção`;
  const description = `${topicNames[slug]} com avaliação técnica, instalação sob medida e orçamento pelo WhatsApp em São Paulo e região.`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical, name: title, description, inLanguage: 'pt-BR' },
    { '@type': 'Service', '@id': `${canonical}#servico`, name: topicNames[slug], serviceType: topicNames[slug], areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'AdministrativeArea', name: 'Grande São Paulo' }], provider: { '@id': `${root}/#empresa` }, url: canonical },
  ] };
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="title" content="[^"]*"\s*\/>/, `<meta name="title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="static-topic-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`);
  const output = join('dist', 'servicos', slug, 'index.html');
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, html);
}

for (const slug of guideSlugs) {
  const page = guidePages[slug];
  if (!page) continue;
  const canonical = `${root}/guias/${slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: page.title, description: page.description, inLanguage: 'pt-BR', author: { '@type': 'Organization', name: 'Rede & Protecao' }, publisher: { '@type': 'Organization', name: 'Rede & Protecao' }, mainEntityOfPage: canonical };
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="title" content="[^"]*"\s*\/>/, `<meta name="title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="static-guide-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`);
  const output = join('dist', 'guias', slug, 'index.html');
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, html);
}

const centralPages = [{
  path: '/rede-de-protecao',
  title: 'Rede de Proteção em São Paulo | Instalação Sob Medida',
  description: 'Instalação de rede de proteção em São Paulo para janelas, sacadas, gatos, crianças, piscinas e escadas. Avaliação técnica e orçamento pelo WhatsApp.',
}];

for (const page of centralPages) {
  const canonical = `${root}${page.path}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical, name: page.title, description: page.description, inLanguage: 'pt-BR' },
    { '@type': 'Service', '@id': `${canonical}#servico`, name: 'Instalação de redes de proteção', serviceType: 'Instalação de redes de proteção sob medida', areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'AdministrativeArea', name: 'Grande São Paulo' }], provider: { '@id': `${root}/#empresa` }, url: canonical },
  ] };
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="title" content="[^"]*"\s*\/>/, `<meta name="title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="static-central-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`);
  const output = join('dist', page.path, 'index.html');
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, html);
}

console.log(`Generated ${pages.length} local SEO entry pages, ${serviceTopicSlugs.length} service pages, ${guideSlugs.length} guide page and ${centralPages.length} central page.`);
