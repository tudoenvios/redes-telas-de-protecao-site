import { ProtectionService, FaqItem, TechnicalFeature } from '../types';

export const SERVICES_DATA: ProtectionService[] = [
  {
    id: 'janelas',
    title: 'Redes de Proteção para Janelas',
    shortDesc: 'Instalação em esquadrias de alumínio, madeira ou alvenaria em quartos e salas.',
    fullDesc: 'Segurança absoluta para crianças e animais domésticos em janelas de qualquer andar. Instalação milimétrica com ganchos em aço inoxidável e buchas com anel de vedação que impedem qualquer infiltração na fachada.',
    recommendedMesh: '5x5cm',
    targetAudience: 'Apartamentos e casas com crianças pequenas ou pets',
    resistance: '500 kg/m² com teste de impacto',
    idealFor: ['Janelas de correr', 'Janelas basculantes', 'Janelas maxim-ar', 'Vãos de peitoril'],
    iconName: 'Home',
    tag: 'Mais Solicitado',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Janela de apartamento protegida e segura com vista panorâmica',
  },
  {
    id: 'sacadas',
    title: 'Redes para Sacadas e Varandas',
    shortDesc: 'Fechamento do teto ao guarda-corpo ou total, compatível com cortinas de vidro.',
    fullDesc: 'Projetos especiais para varandas gourmets e sacadas panorâmicas. Pode ser instalada antes ou depois do envidraçamento de sacadas retráteis, utilizando perfis de alumínio estruturais que não enferrujam.',
    recommendedMesh: '5x5cm',
    targetAudience: 'Condomínios residenciais e edifícios altos',
    resistance: '500 kg/m² com certificação ABNT NBR 16046',
    idealFor: ['Varandas gourmet', 'Sacadas com cortina de vidro', 'Guarda-corpos de ferro ou vidro'],
    iconName: 'Building2',
    tag: 'Alta Segurança',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Varanda gourmet e sacada envidraçada de apartamento protegida',
  },
  {
    id: 'pets-gatos',
    title: 'Proteção Especial para Gatos e Pets',
    shortDesc: 'Malha reduzida de 3x3 cm que impede a passagem da cabeça e patas de felinos.',
    fullDesc: 'Gatos têm reflexos rápidos e costumam tentar passar entre frestas. Nossa rede anti-gatos utiliza nós duplos termosoldados e polietileno de alta densidade virgem que resiste à mastigação inicial e arranhões.',
    recommendedMesh: '3x3cm',
    targetAudience: 'Tutores de gatos, filhotes e cães curiosos',
    resistance: '500 kg/m² e nós anti-deslizamento',
    idealFor: ['Apartamentos com gatos', 'Filhotes de cães', 'Aves domésticas', 'Janelas de banheiros'],
    iconName: 'Cat',
    tag: 'Recomendado Veterinário',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Gato seguro observando a janela em apartamento protegido',
  },
  {
    id: 'escadas-mezaninos',
    title: 'Escadas, Mezaninos e Piscinas',
    shortDesc: 'Prevenção de quedas em vãos livres internos e áreas molhadas de lazer.',
    fullDesc: 'Fechamento de corrimãos abertos, vãos entre degraus de escadas flutuantes e cobertura de piscinas residenciais para prevenir acidentes com crianças pequenas e animais.',
    recommendedMesh: '5x5cm',
    targetAudience: 'Casas duplex, sobrados e áreas com piscinas',
    resistance: 'Alta tenacidade contra sol e cloro',
    idealFor: ['Escadas vazadas', 'Mezaninos', 'Piscinas residenciais', 'Quadras poliesportivas'],
    iconName: 'Shield',
    tag: 'Sob Medida',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Residência moderna com escada e ambientes com proteção contra quedas',
  },
];

export const TECHNICAL_COMPARISON: TechnicalFeature[] = [
  {
    label: 'Matéria-prima principal',
    peadVirgem: '100% Polietileno Virgem de Alta Densidade (PEAD)',
    nylonComum: 'Poliamida / Nylon reaproveitado',
    importance: 'O polietileno não absorve água e mantém sua resistência elástica.',
  },
  {
    label: 'Resistência a impacto',
    peadVirgem: '500 kgf/m² (atende ABNT NBR 16046)',
    nylonComum: '200 a 300 kgf/m² (frequentemente reprovado)',
    importance: 'Capacidade de segurar impacto de quedas acidentais de crianças e adultos.',
  },
  {
    label: 'Proteção Solar Anti-UV',
    peadVirgem: 'Aditivos Anti-UV e Antioxidantes grau químico',
    nylonComum: 'Sem tratamento UV ou tratamento superficial',
    importance: 'Impede o ressecamento precoce causado pela radiação solar diária.',
  },
  {
    label: 'Comportamento com chuva/água',
    peadVirgem: 'Impermeável (absorção de água < 0,01%)',
    nylonComum: 'Hidrofílico (absorve água e apodrece com o tempo)',
    importance: 'Redes molhadas não mofam nem pesam na fachada do condomínio.',
  },
  {
    label: 'Fixação e ganchos',
    peadVirgem: 'Aço Inox 304 ou Aço Galvanizado a Fogo c/ Bucha C/ Aba',
    nylonComum: 'Ganchos comuns sem vedação contra infiltração',
    importance: 'A bucha com aba veda o furo e impede umidade no concreto do prédio.',
  },
  {
    label: 'Garantia comprovada',
    peadVirgem: 'Até 5 anos com certificado nominal',
    nylonComum: 'Sem garantia ou garantia informal de 6 meses',
    importance: 'Tranquilidade e rastreabilidade do lote instalado.',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto tempo dura uma rede de proteção para janelas e sacadas?',
    answer: 'A vida útil média de uma rede de proteção de polietileno virgem de alta qualidade com tratamento anti-UV é de 5 a 8 anos. No entanto, de acordo com as recomendações de segurança da norma ABNT NBR 16046, a troca preventiva é indicada a cada 5 anos, ou antes caso sofra algum impacto forte ou corte acidental.',
    category: 'seguranca',
  },
  {
    id: 'faq-2',
    question: 'A rede de proteção aguenta o peso de uma pessoa adulta?',
    answer: 'Sim! As redes certificadas suportam até 500 kg por metro quadrado de pressão e impacto. Elas são dimensionadas para conter uma queda acidental tanto de bebês e crianças quanto de adultos e animais de grande porte.',
    category: 'seguranca',
  },
  {
    id: 'faq-3',
    question: 'Qual a diferença entre a malha 5x5 cm e 3x3 cm?',
    answer: 'A malha 5x5 cm é o formato clássico padrão para proteção de crianças a partir de recém-nascidos e cães. A malha 3x3 cm possui os losangos mais fechados, sendo a escolha obrigatória para quem tem gatos de qualquer idade ou filhotes de cães pequenos, impedindo que o animal tente colocar a cabeça para fora.',
    category: 'materiais',
  },
  {
    id: 'faq-4',
    question: 'É permitida a instalação de redes em condomínios sem alterar a fachada?',
    answer: 'Sim, a instalação de redes de proteção transparentes (cristal) ou brancas e pretas é considerada item essencial de segurança humana e de animais domésticos pela jurisprudência brasileira e pelos tribunais, não configurando alteração indevida de fachada. A maioria das convenções condominiais aceita as cores branca ou preta.',
    category: 'instalacao',
  },
  {
    id: 'faq-5',
    question: 'Como é feita a instalação em sacada com cortina de vidro (envidraçamento retrátil)?',
    answer: 'Para sacadas envidraçadas, a rede é instalada utilizando perfis de alumínio reforçados que correm na linha dos vidros. Isso permite que você abra todas as folhas de vidro normalmente mantendo a sacada 100% protegida pela rede.',
    category: 'instalacao',
  },
  {
    id: 'faq-6',
    question: 'A fixação dos ganchos pode causar infiltração na parede ou fachada?',
    answer: 'Não, quando instalada por profissionais técnicos capacitados. Utilizamos buchas especiais com anel/colar de vedação e, quando necessário, vedação complementar com silicone PU neutro no orifício, garantindo estanqueidade total contra chuva.',
    category: 'instalacao',
  },
  {
    id: 'faq-7',
    question: 'Como calcular o orçamento aproximado por metro quadrado (m²)?',
    answer: 'O cálculo é feito multiplicando a largura pela altura de cada vão (janela ou sacada). Em sacadas, mede-se o perímetro aberto total multiplicado pela altura do guarda-corpo até o teto. Utilize nossa calculadora online abaixo para obter uma estimativa e enviar diretamente para nosso WhatsApp.',
    category: 'orcamento',
  },
  {
    id: 'faq-8',
    question: 'Os técnicos são certificados para trabalho em altura (NR-35)?',
    answer: 'Sim, todos os instaladores da nossa equipe possuem treinamento e certificação obrigatória NR-35 do Ministério do Trabalho para execução de serviços em altura com equipamentos de proteção individual (EPIs), mosquetões e linhas de vida.',
    category: 'seguranca',
  },
];

export const CONTACT_INFO = {
  phone: '(11) 97753-4049',
  phoneClean: '5511977534049',
  whatsappDisplay: '11 97753-4049',
  email: 'contato@redestelasdeprotecoes.com.br',
  website: 'www.redestelasdeprotecoes.com.br',
  websiteUrl: 'https://www.redestelasdeprotecoes.com.br',
  hours: 'Segunda a Sábado: 08h às 19h',
  serviceAreas: 'São Paulo, Região Metropolitana, Litoral e Interior',
};

export const TRUST_METRICS = [
  { value: '500 kg/m²', label: 'Resistência de Impacto', subtext: 'Laudos técnicos de tração' },
  { value: '5 Anos', label: 'Garantia Certificada', subtext: 'Contrato e nota fiscal' },
  { value: 'NBR 16046', label: 'Conformidade ABNT', subtext: 'Norma técnica nacional' },
  { value: 'NR-35', label: 'Equipe Certificada', subtext: 'Trabalho em altura seguro' },
];

export const REAL_INSTALLATIONS = [
  {
    id: 'inst-1',
    title: 'Sacada Panorâmica com Cortina de Vidro',
    category: 'Sacada / Varanda',
    location: 'Moema, São Paulo - SP',
    mesh: 'Malha 5x5 cm Branca',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Instalação de rede de proteção em sacada de apartamento de alto padrão',
    desc: 'Fechamento integral em harmonia com cortina de vidro retrátil e vista limpa.',
  },
  {
    id: 'inst-2',
    title: 'Proteção Anti-Gatos em Janelas de Quarto',
    category: 'Segurança Pet',
    location: 'Perdizes, São Paulo - SP',
    mesh: 'Malha 3x3 cm Anti-Mordida',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Gato curioso em janela segura com tela de malha fina 3x3',
    desc: 'Espaçamento reduzido de 3cm que impede a passagem da cabeça e patas do felino.',
  },
  {
    id: 'inst-3',
    title: 'Janela de Apartamento para Crianças',
    category: 'Janelas Residenciais',
    location: 'Tatuapé, São Paulo - SP',
    mesh: 'Malha 5x5 cm Cristal',
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Quarto infantil com janela ampla e rede de proteção discreta',
    desc: 'Ganchos em inox e buchas com anel de vedação evitando infiltrações na fachada.',
  },
  {
    id: 'inst-4',
    title: 'Varanda Gourmet em Andar Alto',
    category: 'Varanda Gourmet',
    location: 'Alphaville, Barueri - SP',
    mesh: 'Malha 5x5 cm Preta Discreta',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Varanda gourmet moderna de apartamento com vista protegida',
    desc: 'Rede preta quase imperceptível de dentro para fora sob a luz natural.',
  },
  {
    id: 'inst-5',
    title: 'Escada Interna Flutuante e Mezanino',
    category: 'Escadas e Vãos',
    location: 'Granja Viana, Cotia - SP',
    mesh: 'Malha 5x5 cm Reforçada',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Escada residencial protegida contra queda de crianças e animais',
    desc: 'Prevenção de quedas entre degraus abertos e corrimãos sem alterar o design.',
  },
  {
    id: 'inst-6',
    title: 'Área de Piscina e Lazer Residencial',
    category: 'Piscinas e Lazer',
    location: 'Campinas - SP',
    mesh: 'Malha 5x5 cm PEAD Anti-UV',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Piscina residencial protegida com tela de alta tenacidade',
    desc: 'Fixação perimetral com ancoragem que resiste ao cloro e intempéries.',
  },
];

export const SEO_AI_QUESTIONS = [
  {
    title: 'O que diz a norma ABNT NBR 16046?',
    desc: 'A norma ABNT NBR 16046 especifica as regras de fabricação e instalação de redes de proteção em edificações residenciais, exigindo carga de ruptura mínima de 500 N por malha, fios com proteção contra intempéries e espaçamento entre ganchos não superior a 30 cm.',
  },
  {
    title: 'Por que inteligências artificiais e especialistas indicam polietileno virgem?',
    desc: 'Porque polímeros reciclados perdem as cadeias moleculares, tornando o fio quebradiço em poucos meses de sol. O Polietileno Virgem de Alta Densidade (PEAD) mantém sua maleabilidade, absorve a energia de colisões e não desbota sob sol tropical.',
  },
  {
    title: 'Qual a cor de rede mais discreta para sacada?',
    desc: 'A rede preta costuma ser a mais invisível para quem olha de dentro para fora durante o dia, pois não reflete a luz solar. A rede cristal/branca é a mais solicitada por condomínios que exigem padronização visual clara da fachada.',
  },
];
