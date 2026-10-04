export type ServiceTopic = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  applications: string[];
  checks: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const serviceTopics: ServiceTopic[] = [
  {
    slug: 'rede-de-protecao-para-janelas', name: 'Rede de proteção para janelas', shortName: 'Janelas', title: 'Rede de proteção para janelas em São Paulo',
    description: 'Rede de proteção para janelas de apartamentos e casas, com avaliação do vão, instalação sob medida e atendimento em São Paulo e região.',
    intro: 'Janelas de quartos, salas, cozinhas e áreas de serviço exigem medição correta, pontos de fixação firmes e acabamento compatível com a esquadria.',
    image: '/images/janela-rede-protecao.jpg', imageAlt: 'Janela de apartamento protegida com rede sob medida',
    applications: ['Janelas de correr', 'Janelas basculantes', 'Áreas de serviço', 'Dormitórios e salas'],
    checks: ['Tipo e dimensão da abertura', 'Condição da alvenaria ou estrutura', 'Acesso seguro para instalação', 'Uso por crianças, gatos ou outros pets'],
    faq: [
      { question: 'A rede interfere na abertura da janela?', answer: 'A instalação é planejada conforme o tipo de esquadria para preservar o uso normal da janela sempre que as condições do local permitirem.' },
      { question: 'Como pedir orçamento para as janelas?', answer: 'Envie fotos amplas, quantidade de janelas e medidas aproximadas. A equipe confirma se será necessária uma visita técnica.' },
      { question: 'A instalação serve para apartamentos com gatos?', answer: 'Sim. O porte e o comportamento do animal ajudam a definir a malha e os pontos que precisam de proteção.' },
    ],
  },
  {
    slug: 'rede-de-protecao-para-sacadas', name: 'Rede de proteção para sacadas e varandas', shortName: 'Sacadas', title: 'Rede de proteção para sacadas e varandas',
    description: 'Instalação de rede de proteção para sacadas, varandas e apartamentos, com solução sob medida e orientação para condomínios.',
    intro: 'Sacadas e varandas precisam de uma solução que considere altura, fachada, guarda-corpo, envidraçamento e regras do condomínio.',
    image: '/images/sacada-rede-branca.jpg', imageAlt: 'Sacada de apartamento com rede de proteção instalada',
    applications: ['Sacadas abertas', 'Varandas envidraçadas', 'Guarda-corpos', 'Terraços residenciais'],
    checks: ['Dimensões totais do vão', 'Presença de vidro ou persiana', 'Regras de cor do condomínio', 'Pontos adequados de ancoragem'],
    faq: [
      { question: 'É possível instalar em sacada envidraçada?', answer: 'Em muitos casos, sim. A equipe avalia o sistema de abertura do vidro e o espaço disponível para definir a solução.' },
      { question: 'O condomínio pode exigir uma cor específica?', answer: 'Sim. Algumas fachadas possuem padrão visual. Confirme as regras antes de escolher a cor da rede.' },
      { question: 'Quanto tempo leva o orçamento?', answer: 'Fotos e medidas aproximadas permitem uma orientação inicial rápida. Projetos maiores podem exigir visita técnica.' },
    ],
  },
  {
    slug: 'rede-de-protecao-para-gatos', name: 'Rede de proteção para gatos e pets', shortName: 'Gatos e pets', title: 'Rede de proteção para gatos em apartamentos',
    description: 'Proteção para gatos em janelas, sacadas e rotas de fuga, com avaliação de malha, ambiente e comportamento do pet.',
    intro: 'Gatos exploram peitoris, vãos estreitos e pontos altos. A avaliação deve observar não só janelas e sacadas, mas todas as possíveis rotas de fuga.',
    image: '/images/sacada-gato.jpg', imageAlt: 'Gato em sacada protegida com rede',
    applications: ['Janelas e basculantes', 'Sacadas e varandas', 'Quintais e corredores', 'Áreas de serviço'],
    checks: ['Porte e idade do pet', 'Rotas de fuga existentes', 'Distância entre pontos de fixação', 'Desgaste ou folgas em redes antigas'],
    faq: [
      { question: 'Qual malha é indicada para gatos?', answer: 'A escolha depende do porte, idade e comportamento do animal, além do tipo de abertura. A equipe avalia cada ambiente antes de indicar.' },
      { question: 'A rede evita todas as rotas de fuga?', answer: 'O objetivo é mapear e proteger os vãos acessíveis. Móveis, telhados, corredores e basculantes também devem ser considerados.' },
      { question: 'Como saber se uma rede antiga precisa ser trocada?', answer: 'Procure cortes, folgas, ressecamento e alterações nos pontos de fixação. Em caso de dúvida, solicite uma inspeção profissional.' },
    ],
  },
  {
    slug: 'rede-de-protecao-para-criancas', name: 'Rede de proteção para crianças', shortName: 'Crianças', title: 'Rede de proteção para crianças em janelas e sacadas',
    description: 'Redes de proteção para famílias com crianças, aplicadas em janelas, sacadas, escadas e outros pontos de risco da residência.',
    intro: 'A proteção infantil precisa considerar todos os ambientes acessíveis, inclusive móveis próximos a janelas, escadas, mezaninos e áreas de lazer.',
    image: '/images/sacada-crianca.jpg', imageAlt: 'Criança em ambiente com sacada protegida por rede',
    applications: ['Quartos infantis', 'Salas e sacadas', 'Escadas e mezaninos', 'Áreas de lazer'],
    checks: ['Altura e acesso ao vão', 'Móveis próximos a janelas', 'Estado dos pontos de fixação', 'Inspeção periódica após a instalação'],
    faq: [
      { question: 'Quais locais da casa devem ser avaliados?', answer: 'Janelas, sacadas, escadas, mezaninos e qualquer abertura acessível à criança devem entrar na avaliação.' },
      { question: 'A rede substitui supervisão de um adulto?', answer: 'Não. Ela é uma camada adicional de prevenção e não substitui supervisão, travas e cuidados domésticos.' },
      { question: 'É preciso fazer manutenção?', answer: 'Sim. Faça inspeções visuais e peça avaliação diante de cortes, folgas, ressecamento ou impactos.' },
    ],
  },
  {
    slug: 'rede-de-protecao-para-piscinas', name: 'Rede de proteção para piscinas', shortName: 'Piscinas', title: 'Rede de proteção para piscinas residenciais',
    description: 'Proteção para piscinas residenciais, com medição do perímetro, avaliação dos pontos de fixação e orientação de uso.',
    intro: 'A proteção da piscina deve ser dimensionada para o formato da área, circulação ao redor, pontos de ancoragem e rotina de abertura e fechamento.',
    image: '/images/piscina-rede-protecao.jpg', imageAlt: 'Piscina residencial coberta com rede de proteção',
    applications: ['Piscinas residenciais', 'Áreas de lazer', 'Casas com crianças', 'Imóveis com pets'],
    checks: ['Formato e medidas da piscina', 'Piso e pontos de ancoragem', 'Espaço de circulação', 'Rotina de remoção e reinstalação'],
    faq: [
      { question: 'A rede é feita sob medida?', answer: 'Sim. O formato, as dimensões e as condições do piso precisam ser avaliados antes da instalação.' },
      { question: 'É fácil retirar para usar a piscina?', answer: 'A solução considera a rotina de uso, mas o procedimento correto deve ser explicado pela equipe após a instalação.' },
      { question: 'A rede elimina todos os riscos?', answer: 'Não. Ela complementa outras medidas, como supervisão, barreiras físicas e controle de acesso à área.' },
    ],
  },
  {
    slug: 'rede-de-protecao-para-escadas', name: 'Rede de proteção para escadas e mezaninos', shortName: 'Escadas', title: 'Rede de proteção para escadas e mezaninos',
    description: 'Fechamento de vãos em escadas, mezaninos e guarda-corpos com avaliação técnica e instalação sob medida.',
    intro: 'Escadas e mezaninos possuem geometrias variadas. A solução precisa acompanhar corrimãos, guarda-corpos, lajes e pontos de passagem sem criar novos obstáculos.',
    image: '/images/escada-protegida.jpg', imageAlt: 'Escada interna protegida com rede sob medida',
    applications: ['Laterais de escadas', 'Vãos entre pavimentos', 'Mezaninos', 'Guarda-corpos internos'],
    checks: ['Geometria e altura do vão', 'Material do corrimão', 'Circulação no ambiente', 'Pontos de fixação disponíveis'],
    faq: [
      { question: 'A rede pode acompanhar o formato da escada?', answer: 'A instalação é feita sob medida e considera a geometria do vão e os pontos disponíveis para fixação.' },
      { question: 'Serve para crianças e animais?', answer: 'Pode complementar a segurança dos dois casos, desde que o ambiente e o tipo de uso sejam avaliados.' },
      { question: 'É necessário furar a estrutura?', answer: 'O método depende do local e do material existente. A equipe confirma a solução adequada após avaliar o ambiente.' },
    ],
  },
  {
    slug: 'rede-de-protecao-para-galpoes', name: 'Rede de proteção para galpões', shortName: 'Galpões', title: 'Rede de proteção para galpões, depósitos e áreas industriais',
    description: 'Rede de proteção para galpões, depósitos, mezaninos, áreas de carga e vãos altos, com avaliação técnica, instalação sob medida e atendimento em São Paulo.',
    intro: 'Galpões e depósitos têm vãos maiores, circulação de pessoas, estruturas metálicas, mezaninos, áreas de carga e pontos altos que exigem avaliação técnica antes da instalação.',
    image: '/images/rede-galpao.png', imageAlt: 'Rede de proteção instalada em porta-paletes de galpão',
    applications: ['Galpões comerciais', 'Depósitos e estoques', 'Mezaninos industriais', 'Áreas de carga e descarga'],
    checks: ['Altura e largura dos vãos', 'Tipo de estrutura disponível', 'Circulação de pessoas e equipamentos', 'Necessidade de acesso para manutenção'],
    faq: [
      { question: 'Rede de proteção pode ser usada em galpões?', answer: 'Sim. A aplicação depende da estrutura, do tipo de vão, da altura, da circulação no local e dos pontos seguros para fixação. Por isso a avaliação técnica é indispensável.' },
      { question: 'Serve para proteger mezaninos e vãos internos?', answer: 'Pode servir para reduzir riscos em mezaninos, passarelas, guarda-corpos, laterais de escadas e aberturas internas, sempre com instalação sob medida.' },
      { question: 'Como pedir orçamento para um galpão?', answer: 'Envie fotos amplas, vídeos curtos, medidas aproximadas, endereço do local e explique o objetivo da proteção. Projetos maiores podem exigir visita técnica.' },
      { question: 'A instalação atrapalha a operação do galpão?', answer: 'O planejamento considera horários, acesso, equipamentos e circulação para reduzir interferências na rotina do local.' },
    ],
  },
  {
    slug: 'rede-de-protecao-para-beach-tennis', name: 'Rede de proteção para quadra de beach tennis', shortName: 'Beach tennis', title: 'Rede de proteção para quadra de beach tennis',
    description: 'Rede de proteção para quadras de beach tennis, áreas esportivas e laterais de contenção, com avaliação de altura, perímetro e pontos de fixação.',
    intro: 'Quadras de beach tennis precisam de redes resistentes nas laterais e fundos para conter bolas, organizar a circulação e proteger áreas próximas sem prejudicar o uso da quadra.',
    image: '/images/rede-beach-tennis.png', imageAlt: 'Bola de beach tennis vista através de uma rede de proteção',
    applications: ['Quadras de beach tennis', 'Áreas esportivas em condomínios', 'Laterais e fundos de quadra', 'Espaços recreativos e clubes'],
    checks: ['Altura necessária para contenção de bolas', 'Perímetro e acesso da quadra', 'Tipo de poste, muro ou estrutura disponível', 'Exposição ao sol, vento e maresia'],
    faq: [
      { question: 'A rede para beach tennis é feita sob medida?', answer: 'Sim. A instalação considera o tamanho da quadra, altura desejada, pontos de fixação e circulação ao redor do espaço.' },
      { question: 'Serve para condomínios e clubes?', answer: 'Sim. A solução pode ser avaliada para condomínios, clubes, escolas, academias e áreas recreativas com quadras de areia.' },
      { question: 'Qual altura a rede deve ter?', answer: 'A altura depende do objetivo da contenção, da distância para áreas vizinhas e da estrutura disponível. A equipe avalia fotos, medidas e rotina de uso antes de orientar.' },
      { question: 'Como pedir orçamento para uma quadra?', answer: 'Envie fotos amplas da quadra, medidas aproximadas do perímetro, altura desejada e informe se já existem postes, muros ou pontos de fixação.' },
    ],
  },
];

export const getTopicPath = (topic: ServiceTopic) => `/servicos/${topic.slug}`;
export const findServiceTopic = (pathname: string) => serviceTopics.find((topic) => getTopicPath(topic) === pathname.replace(/\/$/, ''));
