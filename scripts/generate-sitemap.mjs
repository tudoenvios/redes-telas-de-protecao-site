import { mkdirSync, writeFileSync } from 'node:fs';

const districtNames = [
  'Água Rasa','Alto de Pinheiros','Anhanguera','Aricanduva','Artur Alvim','Barra Funda','Bela Vista','Belém','Bom Retiro','Brás','Brasilândia','Butantã','Cachoeirinha','Cambuci','Campo Belo','Campo Grande','Campo Limpo','Cangaíba','Capão Redondo','Carrão','Casa Verde','Cidade Ademar','Cidade Dutra','Cidade Líder','Cidade Tiradentes','Consolação','Cursino','Ermelino Matarazzo','Freguesia do Ó','Grajaú','Guaianases','Iguatemi','Ipiranga','Itaim Bibi','Itaim Paulista','Itaquera','Jabaquara','Jaçanã','Jaguara','Jaguaré','Jaraguá','Jardim Ângela','Jardim Helena','Jardim Paulista','Jardim São Luís','José Bonifácio','Lajeado','Lapa','Liberdade','Limão','Mandaqui','Marsilac','Moema','Mooca','Morumbi','Parelheiros','Pari','Parque do Carmo','Pedreira','Penha','Perdizes','Perus','Pinheiros','Pirituba','Ponte Rasa','Raposo Tavares','República','Rio Pequeno','Sacomã','Santa Cecília','Santana','Santo Amaro','São Domingos','São Lucas','São Mateus','São Miguel','São Rafael','Sapopemba','Saúde','Sé','Socorro','Tatuapé','Tremembé','Tucuruvi','Vila Andrade','Vila Curuçá','Vila Formosa','Vila Guilherme','Vila Jacuí','Vila Leopoldina','Vila Maria','Vila Mariana','Vila Matilde','Vila Medeiros','Vila Prudente','Vila Sônia'
];
const regionalNames = ['ABC Paulista','Santo André','São Bernardo do Campo','São Caetano do Sul','Diadema','Mauá','Ribeirão Pires','Rio Grande da Serra','Barueri','Alphaville','Granja Viana','Osasco','Guarulhos','Mogi das Cruzes','Atibaia','Arujá','Santana de Parnaíba'];
const slugify = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const root = 'https://redestelasdeprotecoes.com.br';
const urls = [root + '/', root + '/areas-atendidas', ...districtNames.map((name) => `${root}/distritos/${slugify(name)}`), ...regionalNames.map((name) => `${root}/atendimento/${slugify(name)}`)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
mkdirSync('public', { recursive: true });
writeFileSync('public/sitemap.xml', xml);
console.log(`Generated ${urls.length} sitemap URLs.`);
