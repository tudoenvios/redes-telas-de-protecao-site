export type LocalSeoProfile = {
  title: string;
  description: string;
  intro: string;
  localAngle: string;
  intent: string;
  nearbyAreas: string[];
  secondaryKeywords: string[];
  proofSignals: string[];
  internalLinks: Array<{ label: string; href: string }>;
};

export const localSeoProfiles: Record<string, LocalSeoProfile> = {
  'vila-mariana': {
    title: 'Rede de Proteção na Vila Mariana | Janelas, Sacadas e Pets',
    description: 'Rede de proteção na Vila Mariana para janelas, sacadas, apartamentos, crianças e gatos. Atendimento local e orçamento rápido pelo WhatsApp.',
    intro: 'Na Vila Mariana, a procura costuma vir de apartamentos familiares, janelas de quartos, varandas e imóveis próximos a Saúde, Paraíso, Aclimação e Chácara Klabin.',
    localAngle: 'Página prioritária para destacar segurança infantil, proteção para pets e instalação limpa em apartamentos e condomínios.',
    intent: 'Famílias em apartamentos buscando proteção para janelas, quartos, sacadas e áreas com pets.',
    nearbyAreas: ['Saúde', 'Paraíso', 'Aclimação', 'Chácara Klabin'],
    secondaryKeywords: ['rede para janela Vila Mariana', 'rede para sacada Vila Mariana', 'instalação de rede de proteção Vila Mariana'],
    proofSignals: ['Fotos de janelas e sacadas protegidas', 'Orientação por WhatsApp com fotos e medidas', 'Confirmação de atendimento na região'],
    internalLinks: [
      { label: 'Rede de proteção na Saúde', href: '/distritos/saude' },
      { label: 'Rede de proteção no Ipiranga', href: '/distritos/ipiranga' },
      { label: 'Áreas atendidas', href: '/areas-atendidas' },
    ],
  },
  moema: {
    title: 'Rede de Proteção em Moema | Sacadas, Janelas e Gatos',
    description: 'Instalação de rede de proteção em Moema para sacadas, janelas, apartamentos, crianças e pets. Solicite orçamento pelo WhatsApp.',
    intro: 'Em Moema, a página deve falar com moradores de apartamentos e condomínios que procuram acabamento discreto, segurança e atendimento organizado.',
    localAngle: 'Boa página para reforçar acabamento, garantia, avaliação por fotos e proteção para sacadas de apartamentos.',
    intent: 'Apartamentos de padrão médio e alto, sacadas, telas para pets e proteção para crianças.',
    nearbyAreas: ['Ibirapuera', 'Campo Belo', 'Vila Olímpia', 'Indianópolis'],
    secondaryKeywords: ['rede de proteção para sacada Moema', 'rede para gatos Moema', 'rede de proteção apartamento Moema'],
    proofSignals: ['Fotos com acabamento discreto', 'Orientação sobre malha e cor', 'Confirmação de atendimento em condomínios'],
    internalLinks: [
      { label: 'Rede de proteção em Campo Belo', href: '/distritos/campo-belo' },
      { label: 'Rede de proteção no Itaim Bibi', href: '/distritos/itaim-bibi' },
      { label: 'Áreas atendidas', href: '/areas-atendidas' },
    ],
  },
  'jardim-paulista': {
    title: 'Rede de Proteção no Jardim Paulista | Janelas e Sacadas',
    description: 'Rede de proteção no Jardim Paulista e Jardins para janelas, sacadas, crianças e pets. Atendimento com orçamento rápido pelo WhatsApp.',
    intro: 'No Jardim Paulista, o conteúdo precisa combinar segurança, acabamento e facilidade para pedir orçamento em prédios centrais.',
    localAngle: 'Foco em apartamentos, janelas, sacadas, pets e moradores que buscam atendimento rápido nos Jardins.',
    intent: 'Moradores buscando proteção para janelas, sacadas e pets em prédios centrais.',
    nearbyAreas: ['Jardins', 'Bela Vista', 'Consolação', 'Itaim Bibi'],
    secondaryKeywords: ['rede para janela Jardim Paulista', 'rede para sacada Jardim Paulista', 'rede de proteção Jardins'],
    proofSignals: ['Fotos de instalação em janela', 'Bairros próximos confirmados', 'Orientação sobre orçamento por WhatsApp'],
    internalLinks: [
      { label: 'Rede de proteção na Bela Vista', href: '/distritos/bela-vista' },
      { label: 'Rede de proteção na Consolação', href: '/distritos/consolacao' },
      { label: 'Rede de proteção no Itaim Bibi', href: '/distritos/itaim-bibi' },
    ],
  },
  santana: {
    title: 'Rede de Proteção em Santana | Zona Norte de São Paulo',
    description: 'Rede de proteção em Santana para janelas, sacadas, apartamentos, crianças e gatos. Atendimento na Zona Norte e orçamento por WhatsApp.',
    intro: 'Santana é uma página âncora para a Zona Norte, com buscas de instalação próxima, orçamento rápido e atendimento em condomínios.',
    localAngle: 'Destacar atendimento local na Zona Norte e conexão com Casa Verde, Mandaqui, Tremembé e Vila Guilherme.',
    intent: 'Famílias da Zona Norte procurando instalador próximo para janelas, sacadas e pets.',
    nearbyAreas: ['Casa Verde', 'Mandaqui', 'Tremembé', 'Vila Guilherme'],
    secondaryKeywords: ['rede para sacada Santana', 'rede para janela Santana', 'instalador de rede de proteção Santana'],
    proofSignals: ['Fotos de sacadas e janelas', 'Bairros vizinhos atendidos', 'CTA específico para Zona Norte'],
    internalLinks: [
      { label: 'Rede de proteção em Casa Verde', href: '/distritos/casa-verde' },
      { label: 'Rede de proteção no Mandaqui', href: '/distritos/mandaqui' },
      { label: 'Áreas atendidas', href: '/areas-atendidas' },
    ],
  },
  tatuape: {
    title: 'Rede de Proteção no Tatuapé | Zona Leste',
    description: 'Instalação de rede de proteção no Tatuapé para sacadas, janelas, apartamentos, gatos e crianças. Peça orçamento pelo WhatsApp.',
    intro: 'O Tatuapé funciona como página forte para a Zona Leste, com foco em apartamentos familiares, sacadas e proteção para pets.',
    localAngle: 'Página âncora para Zona Leste com links para Mooca, Vila Formosa, Carrão e Penha.',
    intent: 'Apartamentos familiares, sacadas e proteção para gatos na Zona Leste.',
    nearbyAreas: ['Mooca', 'Vila Formosa', 'Carrão', 'Penha'],
    secondaryKeywords: ['rede de proteção zona leste', 'rede para sacada Tatuapé', 'rede para gatos Tatuapé'],
    proofSignals: ['Foto real em apartamento', 'Confirmação de atendimento', 'FAQ sobre prazo e orçamento'],
    internalLinks: [
      { label: 'Rede de proteção na Mooca', href: '/distritos/mooca' },
      { label: 'Rede de proteção na Vila Formosa', href: '/distritos/vila-formosa' },
      { label: 'Rede de proteção no Carrão', href: '/distritos/carrao' },
    ],
  },
  mooca: {
    title: 'Rede de Proteção na Mooca | Janelas, Sacadas e Pets',
    description: 'Rede de proteção na Mooca para janelas, sacadas, apartamentos, crianças e gatos. Orçamento rápido pelo WhatsApp.',
    intro: 'Na Mooca, a busca costuma vir de famílias e tutores de pets que querem proteger janelas, varandas e apartamentos.',
    localAngle: 'Linguagem direta, reforçando segurança para crianças, gatos e imóveis próximos ao Tatuapé e Ipiranga.',
    intent: 'Famílias e tutores de pets buscando proteção para janelas e varandas.',
    nearbyAreas: ['Tatuapé', 'Belenzinho', 'Ipiranga', 'Vila Prudente'],
    secondaryKeywords: ['rede para janela Mooca', 'rede para gatos Mooca', 'rede para sacada Mooca'],
    proofSignals: ['Foto real', 'Atendimento em prédios', 'Bairros próximos mencionados'],
    internalLinks: [
      { label: 'Rede de proteção no Tatuapé', href: '/distritos/tatuape' },
      { label: 'Rede de proteção no Ipiranga', href: '/distritos/ipiranga' },
      { label: 'Rede de proteção na Vila Prudente', href: '/distritos/vila-prudente' },
    ],
  },
  ipiranga: {
    title: 'Rede de Proteção no Ipiranga | Apartamentos e Sacadas',
    description: 'Rede de proteção no Ipiranga para janelas, sacadas, apartamentos, crianças e pets. Solicite avaliação pelo WhatsApp.',
    intro: 'No Ipiranga, a página conecta Zona Sul e Sudeste, com foco em segurança, sacadas e orçamento fácil por WhatsApp.',
    localAngle: 'Boa página para conectar Vila Mariana, Saúde, Sacomã e Vila Prudente.',
    intent: 'Redes para janelas, sacadas e apartamentos familiares.',
    nearbyAreas: ['Saúde', 'Vila Mariana', 'Sacomã', 'Vila Prudente'],
    secondaryKeywords: ['rede para janela Ipiranga', 'rede para sacada Ipiranga', 'instalação de rede Ipiranga'],
    proofSignals: ['Bairros próximos confirmados', 'Foto real', 'Perguntas sobre medição e instalação'],
    internalLinks: [
      { label: 'Rede de proteção na Vila Mariana', href: '/distritos/vila-mariana' },
      { label: 'Rede de proteção na Saúde', href: '/distritos/saude' },
      { label: 'Rede de proteção no Sacomã', href: '/distritos/sacoma' },
    ],
  },
  saude: {
    title: 'Rede de Proteção na Saúde | Janelas, Sacadas e Gatos',
    description: 'Rede de proteção na Saúde para janelas, sacadas, apartamentos, crianças e gatos. Atendimento local e orçamento por WhatsApp.',
    intro: 'Na Saúde, a página captura buscas próximas da Vila Mariana, Praça da Árvore, Jabaquara e Ipiranga.',
    localAngle: 'Foco em apartamentos, segurança para crianças e animais e contato rápido por WhatsApp.',
    intent: 'Moradores de apartamentos buscando segurança para crianças e animais.',
    nearbyAreas: ['Vila Mariana', 'Praça da Árvore', 'Jabaquara', 'Ipiranga'],
    secondaryKeywords: ['rede para janela Saúde', 'rede para sacada Saúde', 'rede de proteção para gatos Saúde'],
    proofSignals: ['Atendimento por região', 'Foto real', 'CTA para orçamento rápido'],
    internalLinks: [
      { label: 'Rede de proteção na Vila Mariana', href: '/distritos/vila-mariana' },
      { label: 'Rede de proteção no Jabaquara', href: '/distritos/jabaquara' },
      { label: 'Rede de proteção no Ipiranga', href: '/distritos/ipiranga' },
    ],
  },
  perdizes: {
    title: 'Rede de Proteção em Perdizes | Zona Oeste',
    description: 'Rede de proteção em Perdizes para sacadas, janelas, apartamentos, gatos e crianças. Orçamento rápido pelo WhatsApp.',
    intro: 'Perdizes é página estratégica para a Zona Oeste, especialmente para apartamentos, famílias, pets e sacadas.',
    localAngle: 'Destacar acabamento, segurança em condomínios e conexão com Pompeia, Água Branca, Barra Funda e Pacaembu.',
    intent: 'Apartamentos, famílias, pets e sacadas na Zona Oeste.',
    nearbyAreas: ['Pompeia', 'Água Branca', 'Barra Funda', 'Pacaembu'],
    secondaryKeywords: ['rede para sacada Perdizes', 'rede para janela Perdizes', 'rede para gatos Perdizes'],
    proofSignals: ['Foto real', 'Bairros vizinhos', 'Materiais e garantia explicados'],
    internalLinks: [
      { label: 'Rede de proteção na Lapa', href: '/distritos/lapa' },
      { label: 'Rede de proteção em Pinheiros', href: '/distritos/pinheiros' },
      { label: 'Áreas atendidas', href: '/areas-atendidas' },
    ],
  },
  pinheiros: {
    title: 'Rede de Proteção em Pinheiros | Sacadas, Janelas e Pets',
    description: 'Rede de proteção em Pinheiros para janelas, sacadas, apartamentos, gatos e crianças. Atendimento local pelo WhatsApp.',
    intro: 'Em Pinheiros, o conteúdo deve destacar acabamento, proteção para pets e atendimento em bairros próximos como Vila Madalena e Alto de Pinheiros.',
    localAngle: 'Boa página para buscas de redes discretas, seguras e com orçamento ágil em prédios residenciais.',
    intent: 'Moradores de prédios buscando redes discretas, seguras e atendimento por WhatsApp.',
    nearbyAreas: ['Vila Madalena', 'Alto de Pinheiros', 'Jardins', 'Butantã'],
    secondaryKeywords: ['rede para janela Pinheiros', 'rede para sacada Pinheiros', 'rede para gatos Pinheiros'],
    proofSignals: ['Foto real com acabamento', 'Regiões próximas', 'FAQ sobre sacadas'],
    internalLinks: [
      { label: 'Rede de proteção em Alto de Pinheiros', href: '/distritos/alto-de-pinheiros' },
      { label: 'Rede de proteção no Butantã', href: '/distritos/butanta' },
      { label: 'Rede de proteção no Jardim Paulista', href: '/distritos/jardim-paulista' },
    ],
  },
};

export const getLocalSeoProfile = (slug: string) => localSeoProfiles[slug];
