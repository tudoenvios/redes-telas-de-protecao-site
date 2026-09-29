export type ServiceArea = {
  name: string;
  slug: string;
  kind: 'distrito' | 'municipio' | 'regiao' | 'bairro-litoral';
  city: string;
  zone: string;
};

const slugify = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const districtNames = [
  'Água Rasa', 'Alto de Pinheiros', 'Anhanguera', 'Aricanduva', 'Artur Alvim',
  'Barra Funda', 'Bela Vista', 'Belém', 'Bom Retiro', 'Brás', 'Brasilândia',
  'Butantã', 'Cachoeirinha', 'Cambuci', 'Campo Belo', 'Campo Grande', 'Campo Limpo',
  'Cangaíba', 'Capão Redondo', 'Carrão', 'Casa Verde', 'Cidade Ademar',
  'Cidade Dutra', 'Cidade Líder', 'Cidade Tiradentes', 'Consolação', 'Cursino',
  'Ermelino Matarazzo', 'Freguesia do Ó', 'Grajaú', 'Guaianases', 'Iguatemi',
  'Ipiranga', 'Itaim Bibi', 'Itaim Paulista', 'Itaquera', 'Jabaquara', 'Jaçanã',
  'Jaguara', 'Jaguaré', 'Jaraguá', 'Jardim Ângela', 'Jardim Helena',
  'Jardim Paulista', 'Jardim São Luís', 'José Bonifácio', 'Lajeado', 'Lapa',
  'Liberdade', 'Limão', 'Mandaqui', 'Marsilac', 'Moema', 'Mooca', 'Morumbi',
  'Parelheiros', 'Pari', 'Parque do Carmo', 'Pedreira', 'Penha', 'Perdizes',
  'Perus', 'Pinheiros', 'Pirituba', 'Ponte Rasa', 'Raposo Tavares', 'República',
  'Rio Pequeno', 'Sacomã', 'Santa Cecília', 'Santana', 'Santo Amaro',
  'São Domingos', 'São Lucas', 'São Mateus', 'São Miguel', 'São Rafael',
  'Sapopemba', 'Saúde', 'Sé', 'Socorro', 'Tatuapé', 'Tremembé', 'Tucuruvi',
  'Vila Andrade', 'Vila Curuçá', 'Vila Formosa', 'Vila Guilherme', 'Vila Jacuí',
  'Vila Leopoldina', 'Vila Maria', 'Vila Mariana', 'Vila Matilde',
  'Vila Medeiros', 'Vila Prudente', 'Vila Sônia',
];

const districtZones: Record<string, string[]> = {
  'Centro de São Paulo': [
    'Barra Funda', 'Bela Vista', 'Bom Retiro', 'Brás', 'Cambuci', 'Consolação',
    'Liberdade', 'Pari', 'República', 'Santa Cecília', 'Sé',
  ],
  'Zona Leste de São Paulo': [
    'Água Rasa', 'Aricanduva', 'Artur Alvim', 'Belém', 'Cangaíba', 'Carrão',
    'Cidade Líder', 'Cidade Tiradentes', 'Ermelino Matarazzo', 'Guaianases',
    'Iguatemi', 'Itaim Paulista', 'Itaquera', 'Jardim Helena', 'José Bonifácio',
    'Lajeado', 'Mooca', 'Parque do Carmo', 'Penha', 'Ponte Rasa', 'São Lucas',
    'São Mateus', 'São Miguel', 'São Rafael', 'Sapopemba', 'Tatuapé',
    'Vila Curuçá', 'Vila Formosa', 'Vila Jacuí', 'Vila Matilde', 'Vila Prudente',
  ],
  'Zona Norte de São Paulo': [
    'Anhanguera', 'Brasilândia', 'Cachoeirinha', 'Casa Verde', 'Freguesia do Ó',
    'Jaçanã', 'Jaraguá', 'Limão', 'Mandaqui', 'Perus', 'Pirituba', 'Santana',
    'São Domingos', 'Tremembé', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria',
    'Vila Medeiros',
  ],
  'Zona Oeste de São Paulo': [
    'Alto de Pinheiros', 'Butantã', 'Itaim Bibi', 'Jaguara', 'Jaguaré',
    'Jardim Paulista', 'Lapa', 'Morumbi', 'Perdizes', 'Pinheiros', 'Raposo Tavares',
    'Rio Pequeno', 'Vila Leopoldina', 'Vila Sônia',
  ],
  'Zona Sul de São Paulo': [
    'Campo Belo', 'Campo Grande', 'Campo Limpo', 'Capão Redondo', 'Cidade Ademar',
    'Cidade Dutra', 'Cursino', 'Grajaú', 'Ipiranga', 'Jabaquara', 'Jardim Ângela',
    'Jardim São Luís', 'Marsilac', 'Moema', 'Parelheiros', 'Pedreira', 'Sacomã',
    'Santo Amaro', 'Saúde', 'Socorro', 'Vila Andrade', 'Vila Mariana',
  ],
};

const zoneByDistrict = new Map(
  Object.entries(districtZones).flatMap(([zone, names]) => names.map((name) => [name, zone])),
);

const extraAreas: Array<[string, ServiceArea['kind'], string]> = [
  ['ABC Paulista', 'regiao', 'Região do ABC'],
  ['Santo André', 'municipio', 'Santo André'],
  ['São Bernardo do Campo', 'municipio', 'São Bernardo do Campo'],
  ['São Caetano do Sul', 'municipio', 'São Caetano do Sul'],
  ['Diadema', 'municipio', 'Diadema'],
  ['Mauá', 'municipio', 'Mauá'],
  ['Ribeirão Pires', 'municipio', 'Ribeirão Pires'],
  ['Rio Grande da Serra', 'municipio', 'Rio Grande da Serra'],
  ['Barueri', 'municipio', 'Barueri'],
  ['Alphaville', 'regiao', 'Barueri e Santana de Parnaíba'],
  ['Granja Viana', 'regiao', 'Cotia'],
  ['Osasco', 'municipio', 'Osasco'],
  ['Guarulhos', 'municipio', 'Guarulhos'],
  ['Mogi das Cruzes', 'municipio', 'Mogi das Cruzes'],
  ['Atibaia', 'municipio', 'Atibaia'],
  ['Arujá', 'municipio', 'Arujá'],
  ['Santana de Parnaíba', 'municipio', 'Santana de Parnaíba'],
];

const coastalNeighborhoods: Array<[string, string]> = [
  ['Guilhermina', 'Praia Grande'],
  ['Aviação', 'Praia Grande'],
  ['Canto do Forte', 'Praia Grande'],
  ['Vila Tupi', 'Praia Grande'],
  ['Ocian', 'Praia Grande'],
  ['Boqueirão', 'Praia Grande'],
  ['Vila Caiçara', 'Praia Grande'],
  ['Ponta da Praia', 'Santos'],
  ['Aparecida', 'Santos'],
  ['Embaré', 'Santos'],
  ['Boqueirão', 'Santos'],
  ['Gonzaga', 'Santos'],
  ['Pompéia', 'Santos'],
  ['José Menino', 'Santos'],
];

export const districtAreas: ServiceArea[] = districtNames.map((name) => ({
  name,
  slug: slugify(name),
  kind: 'distrito',
  city: 'São Paulo',
  zone: zoneByDistrict.get(name) ?? 'São Paulo',
}));

export const regionalAreas: ServiceArea[] = extraAreas.map(([name, kind, city]) => ({
  name,
  slug: slugify(name),
  kind,
  city,
  zone: kind === 'regiao' ? name : 'Grande São Paulo e região',
}));

export const coastalAreas: ServiceArea[] = coastalNeighborhoods.map(([name, city]) => ({
  name,
  slug: slugify(name),
  kind: 'bairro-litoral',
  city,
  zone: `Orla de ${city}`,
}));

export const serviceAreas = [...districtAreas, ...regionalAreas, ...coastalAreas];

export const getAreaPath = (area: ServiceArea) => {
  if (area.kind === 'distrito') return `/distritos/${area.slug}`;
  if (area.kind === 'bairro-litoral') return `/${slugify(area.city)}/${area.slug}`;
  return `/atendimento/${area.slug}`;
};

export const findServiceArea = (pathname: string) =>
  serviceAreas.find((area) => getAreaPath(area) === pathname.replace(/\/$/, ''));

export const getRelatedAreas = (area: ServiceArea, limit = 6) => {
  const pool = serviceAreas.filter((candidate) => {
    if (candidate.slug === area.slug) return false;
    if (area.kind === 'distrito') return candidate.kind === 'distrito' && candidate.zone === area.zone;
    if (area.kind === 'bairro-litoral') return candidate.kind === 'bairro-litoral' && candidate.city === area.city;
    return candidate.kind !== 'distrito';
  });
  const start = pool.length ? area.slug.split('').reduce((total, char) => total + char.charCodeAt(0), 0) % pool.length : 0;
  return [...pool.slice(start), ...pool.slice(0, start)].slice(0, limit);
};
