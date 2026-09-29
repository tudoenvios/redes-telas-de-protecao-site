import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { coastalNeighborhoods, districtNames, regionalNames, root, serviceTopicSlugs, slugify } from './generate-sitemap.mjs';

const template = readFileSync('dist/index.html', 'utf8');
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

for (const page of pages) {
  const canonical = `${root}${page.path}`;
  const title = `Rede de Proteção em ${page.location} | Janelas e Sacadas`;
  const description = `Rede de proteção em ${page.location} para janelas, sacadas, crianças e pets. Avaliação técnica, instalação sob medida e orçamento rápido pelo WhatsApp.`;
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

console.log(`Generated ${pages.length} local SEO entry pages, ${serviceTopicSlugs.length} service pages and ${centralPages.length} central page.`);
