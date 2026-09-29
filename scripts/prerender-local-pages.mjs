import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { coastalNeighborhoods, districtNames, regionalNames, root, slugify } from './generate-sitemap.mjs';

const template = readFileSync('dist/index.html', 'utf8');
const regions = new Set(['ABC Paulista', 'Alphaville', 'Granja Viana']);
const pages = [
  ...districtNames.map((name) => ({ name, path: `/distritos/${slugify(name)}`, location: `${name}, São Paulo`, areaType: 'AdministrativeArea' })),
  ...regionalNames.map((name) => ({ name, path: `/atendimento/${slugify(name)}`, location: name, areaType: regions.has(name) ? 'AdministrativeArea' : 'City' })),
  ...coastalNeighborhoods.map(({ name, city, citySlug }) => ({ name, path: `/${citySlug}/${slugify(name)}`, location: `${name}, ${city}`, areaType: 'Place' })),
];

const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

console.log(`Generated ${pages.length} local SEO entry pages.`);
