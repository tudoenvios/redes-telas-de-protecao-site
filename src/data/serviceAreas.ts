export type ServiceArea = {
  name: string;
  slug: string;
  kind: 'distrito' | 'municipio' | 'regiao';
  city: string;
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

export const districtAreas: ServiceArea[] = districtNames.map((name) => ({
  name,
  slug: slugify(name),
  kind: 'distrito',
  city: 'São Paulo',
}));

export const regionalAreas: ServiceArea[] = extraAreas.map(([name, kind, city]) => ({
  name,
  slug: slugify(name),
  kind,
  city,
}));

export const serviceAreas = [...districtAreas, ...regionalAreas];

export const getAreaPath = (area: ServiceArea) =>
  area.kind === 'distrito' ? `/distritos/${area.slug}` : `/atendimento/${area.slug}`;

export const findServiceArea = (pathname: string) =>
  serviceAreas.find((area) => getAreaPath(area) === pathname.replace(/\/$/, ''));
