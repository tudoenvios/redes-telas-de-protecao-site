import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, DoorOpen, Frame, MessageCircle, Ruler, Search, ShieldCheck, Sparkles, Wind } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { CONTACT_INFO } from '../data/protectionData';

const models = [
  { icon: Frame, title: 'Tela fixa', use: 'Janelas com pouca movimentação', detail: 'Solução discreta e econômica para vãos que não precisam de abertura frequente.' },
  { icon: ArrowRight, title: 'Tela de correr', use: 'Janelas e portas de correr', detail: 'Acompanha o movimento da esquadria e facilita o uso diário sem ocupar espaço.' },
  { icon: Sparkles, title: 'Tela retrátil', use: 'Ambientes que pedem flexibilidade', detail: 'Recolhe quando não está em uso, preservando a abertura e o visual do ambiente.' },
  { icon: DoorOpen, title: 'Tela para portas', use: 'Varandas, cozinhas e acessos', detail: 'Permite circulação com praticidade e ajuda a reduzir a entrada de mosquitos.' },
];

const faqs = [
  ['A tela diminui a ventilação?', 'A malha é escolhida para barrar insetos sem fechar a passagem natural de ar. A sensação pode variar conforme o tipo de janela e a circulação do ambiente.'],
  ['É possível instalar em apartamento?', 'Sim. A solução é produzida conforme as medidas e o tipo de esquadria de cada janela, sacada ou porta.'],
  ['Como fazer a limpeza?', 'Use pano macio ou escova de cerdas leves com água e sabão neutro. Evite produtos abrasivos e pressão excessiva sobre a malha.'],
  ['Qual modelo devo escolher?', 'Depende do formato da abertura, da frequência de uso e do espaço disponível. Nossa equipe orienta a opção mais adequada após avaliar medidas e rotina.'],
];

export const mercadoLivreProducts = [
  {
    title: 'Tela Mosquiteiro para Janela 100 x 120 cm em Alumínio',
    price: 'R$ 186,50',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_859753-MLB117710032627_092026-E--tela-mosquiteiro-janela-100x120-aluminio-kit-completo.webp',
    url: 'https://www.mercadolivre.com.br/tela-mosquiteiro-janela-100x120-aluminio-kit-completo/up/MLBU5175050413',
  },
  {
    title: 'Tela Mosquiteiro para Janela 100 x 150 cm em Alumínio',
    price: 'R$ 198,50',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_946307-MLA117709239953_092026-E--tela-mosquiteiro-janela-100x150-aluminio-kit-completo.webp',
    url: 'https://www.mercadolivre.com.br/tela-mosquiteiro-janela-100x150-aluminio-kit-completo/up/MLBU5211155096',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 1,00 x 3,00 m',
    price: 'R$ 53,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_856077-MLB76405417344_052024-E--tela-fibra-de-vidro-mosquiteira-100x300.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira-100x300/up/MLBU1441183234',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 1,30 x 1,60 m',
    price: 'R$ 48,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_812798-MLB76405396370_052024-E--tela-fibra-de-vidro-mosquiteira-130-x-160cm.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira-130-x-160cm/up/MLBU1445633778',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 1,20 x 5,00 m',
    price: 'R$ 77,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_875552-MLB114264564182_082026-E--tela-fibra-de-vidro-mosquiteira---120-x-5-metros.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira---120-x-5-metros/up/MLBU1441181136',
  },
  {
    title: 'Kit Tela Mosquiteiro Basculante em Alumínio 65 x 65 cm',
    price: 'R$ 163,45',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_818863-MLB94226575859_102025-E-kit-tela-mosquiteiro-basculante-aluminio-p-janela-65-x-65.webp',
    url: 'https://produto.mercadolivre.com.br/MLB-4423673361-kit-tela-mosquiteiro-basculante-aluminio-p-janela-65-x-65-_JM',
  },
  {
    title: 'Kit Tela Mosquiteiro Basculante em Alumínio 70 x 70 cm',
    price: 'R$ 150,00',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_725779-MLB91532448199_092025-E-kit-tela-mosquiteiro-basculante-aluminio-p-janela-70-x-70c.webp',
    url: 'https://produto.mercadolivre.com.br/MLB-5717417486-kit-tela-mosquiteiro-basculante-aluminio-p-janela-70-x-70c-_JM',
  },
  {
    title: 'Kit com 8 Tramelas para Fixação de Tela Mosquiteira',
    price: 'R$ 27,80',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_604387-MLA109863883000_042026-E.webp',
    url: 'https://www.mercadolivre.com.br/kit-8-tramela-trava-bucha-parafuso-fixacao-tela-mosquiteira-cor-preto/p/MLB68439980',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 2,50 x 1,20 m',
    price: 'R$ 58,60',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_825869-MLB76599980143_052024-E--tela-fibra-de-vidro-mosquiteira--250m-largura-x-120.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira--250m-largura-x-120/up/MLBU1441001403',
  },
  {
    title: 'Canto em Nylon para Perfil de Tela Mosquiteira - 10 Peças',
    price: 'R$ 26,50',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_771080-MLB117044029161_092026-E--canto-para-tela-mosquiteira-em-nylon-perfil-a058--10-pecas.webp',
    url: 'https://www.mercadolivre.com.br/canto-para-tela-mosquiteira-em-nylon-perfil-a058--10-pecas/up/MLBU5090488966',
  },
  {
    title: 'Borracha Cordão para Vedação de Tela Mosquiteira - 10 m',
    price: 'R$ 29,99',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_671951-MLB76293736055_052024-E--borracha-cordao-macico-vedacao-tela-mosquiteira-10-metros.webp',
    url: 'https://www.mercadolivre.com.br/borracha-cordao-macico-vedacao-tela-mosquiteira-10-metros/up/MLBU2670842599',
  },
  {
    title: 'Kit com 20 Cantos para Perfil de Tela Mosquiteiro',
    price: 'R$ 44,50',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_697026-MLB117029328003_092026-E--kit-20-canto-para-perfil-de-tela-mosquiteiro.webp',
    url: 'https://www.mercadolivre.com.br/kit-20-canto-para-perfil-de-tela-mosquiteiro/up/MLBU5088282604',
  },
  {
    title: 'Cantoneira de Encaixe para Perfil de Alumínio - 8 Unidades',
    price: 'R$ 27,50',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_656130-MLB115604359954_092026-E--cantoneira-encaixe-canto-perfil-aluminio-tela-mosquiteira-8u.webp',
    url: 'https://www.mercadolivre.com.br/cantoneira-encaixe-canto-perfil-aluminio-tela-mosquiteira-8u/up/MLBU5057468321',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 1,00 x 2,40 m',
    price: 'R$ 42,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_920374-MLB76600255811_052024-E--tela-fibra-de-vidro-mosquiteira--100mx240.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira--100mx240/up/MLBU1437079843',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 2,00 x 1,20 m',
    price: 'R$ 48,50',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_958081-MLB76405295288_052024-E--tela-fibra-de-vidro-mosquiteira--2m-x-120cm.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira--2m-x-120cm/up/MLBU1441131986',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 2,00 x 1,20 m Econômica',
    price: 'R$ 38,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_712747-MLB76404963684_052024-E--tela-fibra-de-vidro-mosquiteira--2-metros-x-120m.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira--2-metros-x-120m/up/MLBU1437079593',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 1,50 x 3,00 m',
    price: 'R$ 75,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_606087-MLB76600166785_052024-E--tela-fibra-de-vidro-mosquiteira--150-x-300m.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira--150-x-300m/up/MLBU1445467050',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 1,50 x 2,00 m',
    price: 'R$ 51,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_698313-MLB76405416528_052024-E--tela-fibra-de-vidro-mosquiteira---150-x-200-metros.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira---150-x-200-metros/up/MLBU1437056047',
  },
  {
    title: 'Tela de Fibra de Vidro Mosquiteira 1,50 x 7,00 m',
    price: 'R$ 175,90',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_968126-MLB76405171402_052024-E--tela-fibra-de-vidro-mosquiteira--150mx7m.webp',
    url: 'https://www.mercadolivre.com.br/tela-fibra-de-vidro-mosquiteira--150mx7m/up/MLBU1441137555',
  },
  {
    title: 'Kit com 2 Telas Mosquiteiras para Janela com Velcro',
    price: 'R$ 32,50',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_657958-MLB72027035908_102023-E--kit-2-tela-mosquiteira-janela-velcro-adesiva--anti-inseto.webp',
    url: 'https://www.mercadolivre.com.br/kit-2-tela-mosquiteira-janela-velcro-adesiva--anti-inseto/up/MLBU1463024617',
  },
  { title: 'Kit Tela Mosquiteiro Removível Correr P/ Vão 1,10cmx 1,33cm', price: 'R$ 260,45', image: 'https://http2.mlstatic.com/D_Q_NP_2X_991956-MLB74682137247_022024-E--kit-tela-mosquiteiro-removivel-correr-p-vao--110cmx-133cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-correr-p-vao--110cmx-133cm/up/MLBU3666518270' },
  { title: 'Kit Tela Mosquiteiro Removível Janelas 1.10x90cm', price: 'R$ 221,65', image: 'https://http2.mlstatic.com/D_Q_NP_2X_644809-MLB90288089064_082025-E--kit-tela-mosquiteiro-removivel--janelas--110x90cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel--janelas--110x90cm/up/MLBU3097590395' },
  { title: 'Kit Tela Mosquiteiro Removível De Correr P/ Janelas 100x100', price: 'R$ 228,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_991956-MLB74682137247_022024-E--kit-tela-mosquiteiro-removivel-de-correr-p-janelas-100x100.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-de-correr-p-janelas-100x100/up/MLBU2656293711' },
  { title: 'Kit Tela Mosquiteiro Removível P/ Vão 57,5 X 112cm', price: 'R$ 192,55', image: 'https://http2.mlstatic.com/D_Q_NP_2X_843021-MLB82069488503_012025-E--kit-tela-mosquiteiro-removivel-p-vao--575-x-112cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-p-vao--575-x-112cm/up/MLBU2854707826' },
  { title: 'Kit Tela Mosquiteiro Removível Janelas 0,75cmx120cm', price: 'R$ 231,35', image: 'https://http2.mlstatic.com/D_Q_NP_2X_763122-MLA100487111365_122025-E--kit-tela-mosquiteiro-removivel-janelas-075cmx120cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-janelas-075cmx120cm/up/MLBU3702880260' },
  { title: 'Kit Tela Mosquiteiro Removível Janelas 0,76cmx100,5cm', price: 'R$ 231,35', image: 'https://http2.mlstatic.com/D_Q_NP_2X_763122-MLA100487111365_122025-E--kit-tela-mosquiteiro-removivel-janelas-076cmx1005cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-janelas-076cmx1005cm/up/MLBU3693229849' },
  { title: 'Kit Tela Mosquiteiro Removível Janelas 1,33 X 0,77cm', price: 'R$ 254,14', image: 'https://http2.mlstatic.com/D_Q_NP_2X_763122-MLA100487111365_122025-E--kit-tela-mosquiteiro-removivel-janelas-133-x-077cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-janelas-133-x-077cm/up/MLBU3694129924' },
  { title: 'Kit Tela Mosquiteiro Removível Janelas 110x110cm Cor Branco', price: 'R$ 241,05', image: 'https://http2.mlstatic.com/D_Q_NP_2X_763122-MLA100487111365_122025-E.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-janelas-110x110cm-cor-branco/p/MLB62873864' },
  { title: 'Kit Tela Mosquiteiro Removível Janelas 0,70x1,80m', price: 'R$ 192,55', image: 'https://http2.mlstatic.com/D_Q_NP_2X_991270-MLB88741407688_082025-E--kit-tela-mosquiteiro-removivel--janelas-070x180m.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel--janelas-070x180m/up/MLBU3117402237' },
  { title: 'Kit Tela Mosquiteira Removível Perfil Alumínio 120x120m', price: 'R$ 196,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_922343-MLB73662570873_122023-E-kit-tela-mosquiteira-removivel-perfil-aluminio-120x120m.webp', url: 'https://produto.mercadolivre.com.br/MLB-5162417726-kit-tela-mosquiteira-removivel-perfil-aluminio-120x120m-_JM' },
  { title: '2 Kit Tela Mosquiteira Correr P Janelas 91cm X 85cm', price: 'R$ 286,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_941934-MLB77023964400_062024-E-2-kit-tela-mosquiteira-correr-p-janelas-91cm-x-85cm.webp', url: 'https://produto.mercadolivre.com.br/MLB-3944612099-2-kit-tela-mosquiteira-correr-p-janelas-91cm-x-85cm-_JM' },
  { title: 'Kit Tela Mosquiteira Removível Perfil Alumínio 1,54x1,49 M', price: 'R$ 268,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_922343-MLB73662570873_122023-E-kit-tela-mosquiteira-removivel-perfil-aluminio-154x149-m.webp', url: 'https://produto.mercadolivre.com.br/MLB-5159961702-kit-tela-mosquiteira-removivel-perfil-aluminio-154x149-m-_JM' },
  { title: 'Tela Mosquiteira Removível Kit Com Perfil Alumínio 100x150', price: 'R$ 214,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_991566-MLB79117148219_092024-E-tela-mosquiteira-removivel-kit-com-perfil-aluminio-100x150.webp', url: 'https://produto.mercadolivre.com.br/MLB-5152054606-tela-mosquiteira-removivel-kit-com-perfil-aluminio-100x150-_JM' },
  { title: 'Kit Mosqueteiro 4 Perfis Branco C/ Cantoneira Cordão E Tela', price: 'R$ 194,05', image: 'https://http2.mlstatic.com/D_Q_NP_2X_642956-MLB79296607888_092024-E--kit-mosqueteiro-4-perfis-branco-c-cantoneira-cordao-e-tela.webp', url: 'https://www.mercadolivre.com.br/kit-mosqueteiro-4-perfis-branco-c-cantoneira-cordao-e-tela/up/MLBU2661142320' },
  { title: 'Kit Tela Mosquiteira De Correr P/ Janelas Com 134 X 154', price: 'R$ 286,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_941934-MLB77023964400_062024-E-kit-tela-mosquiteira-de-correr-p-janelas-com-134-x-154.webp', url: 'https://produto.mercadolivre.com.br/MLB-5173905744-kit-tela-mosquiteira-de-correr-p-janelas-com-134-x-154-_JM' },
  { title: 'Kit Tela Mosquiteiro Basculante Alumínio 101,5cmx71,5cm', price: 'R$ 192,55', image: 'https://http2.mlstatic.com/D_Q_NP_2X_641276-MLB97147572747_112025-E-kit-tela-mosquiteiro-basculante-aluminio-1015cmx715cm.webp', url: 'https://produto.mercadolivre.com.br/MLB-5894516144-kit-tela-mosquiteiro-basculante-aluminio-1015cmx715cm-_JM' },
  { title: 'Tela Mosqueteira Perfil Alumínio 1,70 X 2,25m', price: 'R$ 348,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_769417-MLB91824246162_092025-E--tela-mosqueteira-perfil-aluminio-170-x-225m.webp', url: 'https://www.mercadolivre.com.br/tela-mosqueteira-perfil-aluminio-170-x-225m/up/MLBU3774905873' },
  { title: 'Kit Tela Mosquiteira 0,60 X 0,40 - Monte Sua Tela Em Casa', price: 'R$ 117,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_951635-MLB74957968935_032024-E-kit-tela-mosquiteira-060-x-040-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071474524-kit-tela-mosquiteira-060-x-040-monte-sua-tela-em-casa-_JM' },
  { title: 'Kit Tela Mosquiteira 1,20 X 0,40 - Monte Sua Tela Em Casa', price: 'R$ 167,80', image: 'https://http2.mlstatic.com/D_Q_NP_2X_882569-MLB75276227842_032024-E-kit-tela-mosquiteira-120-x-040-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071488530-kit-tela-mosquiteira-120-x-040-monte-sua-tela-em-casa-_JM' },
  { title: 'Tela Mosquiteira Premium Pet Screen Larg. 1,20m X 20 Metros', price: 'R$ 1.621,15', image: 'https://http2.mlstatic.com/D_Q_NP_2X_996627-MLB90487766826_082025-E--tela-mosquiteira-premium-pet-screen-larg-120m-x-20-metros.webp', url: 'https://www.mercadolivre.com.br/tela-mosquiteira-premium-pet-screen-larg-120m-x-20-metros/up/MLBU1468231124' },
  { title: 'Tela Mosquiteira Removível Kit C/perfil Alumínio 42 X 91cm', price: 'R$ 124,28', image: 'https://http2.mlstatic.com/D_Q_NP_2X_635965-MLB51110696046_082022-E-tela-mosquiteira-removivel-kit-cperfil-aluminio-42-x-91cm.webp', url: 'https://produto.mercadolivre.com.br/MLB-5082784510-tela-mosquiteira-removivel-kit-cperfil-aluminio-42-x-91cm-_JM' },
  { title: 'Kit Tela Mosquiteira P/ Janela 1,00 X 0,40 - Monte Em Casa', price: 'R$ 138,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_797773-MLB74678972005_022024-E-kit-tela-mosquiteira-p-janela-100-x-040-monte-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071642970-kit-tela-mosquiteira-p-janela-100-x-040-monte-em-casa-_JM' },
  { title: 'Kit Tela Mosquiteira 1,20 X 0,60 - Monte Sua Tela Em Casa', price: 'R$ 191,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_704801-MLB75426312547_032024-E-kit-tela-mosquiteira-120-x-060-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071502104-kit-tela-mosquiteira-120-x-060-monte-sua-tela-em-casa-_JM' },
  { title: 'Tela Mosquiteira Fibra De Vidro Larg. 1,55 M X 11,00 M Comp.', price: 'R$ 369,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_740477-MLB51439264639_092022-E-tela-mosquiteira-fibra-de-vidro-larg-155-m-x-1100-m-comp.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071497958-tela-mosquiteira-fibra-de-vidro-larg-155-m-x-1100-m-comp-_JM' },
  { title: 'Tela Mosqueteira Perfil Alumínio 0,93x0,74cm', price: 'R$ 248,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_680276-MLB77320673449_062024-E--tela-mosqueteira-perfil-aluminio-093x074cm.webp', url: 'https://www.mercadolivre.com.br/tela-mosqueteira-perfil-aluminio-093x074cm/up/MLBU3774907923' },
  { title: 'Kit Tela Mosquiteiro 110x160', price: 'R$ 260,45', image: 'https://http2.mlstatic.com/D_Q_NP_2X_982220-MLB91139413545_082025-E-kit-tela-mosquiteiro-110x160.webp', url: 'https://produto.mercadolivre.com.br/MLB-5152082072-kit-tela-mosquiteiro-110x160-_JM' },
  { title: 'Kit Tela Mosqueteira Removível Perfil Alumínio C/ 105 X 155', price: 'R$ 172,64', image: 'https://http2.mlstatic.com/D_Q_NP_2X_703155-MLB51795452746_102022-E-kit-tela-mosqueteira-removivel-perfil-aluminio-c-105-x-155.webp', url: 'https://produto.mercadolivre.com.br/MLB-3444811663-kit-tela-mosqueteira-removivel-perfil-aluminio-c-105-x-155-_JM' },
  { title: 'Kit Tela Mosquiteiro 93 Cm X 113 Cm (trilhos 195cm) Branco', price: 'R$ 283,63', image: 'https://http2.mlstatic.com/D_Q_NP_2X_792576-MLB95217425148_102025-E--kit-tela-mosquiteiro-93-cm-x-113-cm-trilhos-195cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-93-cm-x-113-cm-trilhos-195cm/up/MLBU3505586676' },
  { title: 'Kit Tela Mosquiteiro Removível Janelas 1,10x1,30', price: 'R$ 295,51', image: 'https://http2.mlstatic.com/D_Q_NP_2X_654206-MLB92614780194_092025-E--kit-tela-mosquiteiro-removivel--janelas-110x130.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel--janelas-110x130/up/MLBU3666046816' },
  { title: 'Kit Tela Mosquiteiro Removível Correr P/ Vão 0.90cmx 112cm', price: 'R$ 386,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_991956-MLB74682137247_022024-E--kit-tela-mosquiteiro-removivel-correr-p-vao--090cmx-112cm.webp', url: 'https://www.mercadolivre.com.br/kit-tela-mosquiteiro-removivel-correr-p-vao--090cmx-112cm/up/MLBU2978086566' },
  { title: 'Kit Perfil Tela Mosquiteiro 1,50x1,00 Branco + Acessórios', price: 'R$ 196,51', image: 'https://http2.mlstatic.com/D_Q_NP_2X_950583-MLB93200562569_092025-E--kit-perfil-tela-mosquiteiro-150x100-branco--acessorios.webp', url: 'https://www.mercadolivre.com.br/kit-perfil-tela-mosquiteiro-150x100-branco--acessorios/up/MLBU2656344281' },
  { title: 'Kit Mosqueteiro 4 Perfis Preto C/ Cantoneira Cordão E Tela', price: 'R$ 196,15', image: 'https://http2.mlstatic.com/D_Q_NP_2X_696247-MLB79518186859_092024-E--kit-mosqueteiro-4-perfis-preto-c-cantoneira-cordao-e-tela.webp', url: 'https://www.mercadolivre.com.br/kit-mosqueteiro-4-perfis-preto-c-cantoneira-cordao-e-tela/up/MLBU2661021238' },
  { title: 'Kit Mosqueteiro 4 Perfis 1,20 Preto Cantoneira Cordão Tela', price: 'R$ 186,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_818250-MLB79518140271_092024-E--kit-mosqueteiro-4-perfis-120-preto-cantoneira-cordao-tela.webp', url: 'https://www.mercadolivre.com.br/kit-mosqueteiro-4-perfis-120-preto-cantoneira-cordao-tela/up/MLBU2656150295' },
  { title: 'Kit Mosqueteiro 4 Perfis Branco C/ Cantoneira Cordão E Tela', price: 'R$ 295,51', image: 'https://http2.mlstatic.com/D_Q_NP_2X_868744-MLB91744247393_092025-E--kit-mosqueteiro-4-perfis-branco-c-cantoneira-cordao-e-tela.webp', url: 'https://www.mercadolivre.com.br/kit-mosqueteiro-4-perfis-branco-c-cantoneira-cordao-e-tela/up/MLBU2863894824' },
  { title: 'Kit Tela Mosquiteiro Alumínio 1.16cmx1.20cm + 73cmx60cm', price: 'R$ 398,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_725779-MLB91532448199_092025-E-kit-tela-mosquiteiro-aluminio-116cmx120cm-73cmx60cm.webp', url: 'https://produto.mercadolivre.com.br/MLB-4304937981-kit-tela-mosquiteiro-aluminio-116cmx120cm-73cmx60cm-_JM' },
  { title: 'Kit Mosqueteiro Perfis Cantoneira Cordão Tela 2,00x1,00m', price: 'R$ 268,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_952239-MLB79556213364_102024-E--kit-mosqueteiro-perfis-cantoneira--cordao-tela-200x100m.webp', url: 'https://www.mercadolivre.com.br/kit-mosqueteiro-perfis-cantoneira--cordao-tela-200x100m/up/MLBU2769658983' },
  { title: 'Kit Perfil Tela Mosquiteiro 1,50x1,00 Preto + Acessórios', price: 'R$ 236,11', image: 'https://http2.mlstatic.com/D_Q_NP_2X_645954-MLB92365350371_092025-E--kit-perfil-tela-mosquiteiro-150x100-preto--acessorios.webp', url: 'https://www.mercadolivre.com.br/kit-perfil-tela-mosquiteiro-150x100-preto--acessorios/up/MLBU2661273976' },
  { title: 'Kit Mosqueteiro Perfis Preto C/ Cantoneira Cordão E Tela', price: 'R$ 265,81', image: 'https://http2.mlstatic.com/D_Q_NP_2X_696247-MLB79518186859_092024-E--kit-mosqueteiro--perfis-preto-c-cantoneira-cordao-e-tela.webp', url: 'https://www.mercadolivre.com.br/kit-mosqueteiro--perfis-preto-c-cantoneira-cordao-e-tela/up/MLBU2891112668' },
  { title: 'Kit Mosqueteiro 4 Perfis 120cm Preto C/ Cantoneira E Cordão', price: 'R$ 198,50', image: 'https://http2.mlstatic.com/D_Q_NP_2X_664373-MLB75165369090_032024-E--kit-mosqueteiro-4-perfis-120cm-preto-c-cantoneira-e-cordao.webp', url: 'https://www.mercadolivre.com.br/kit-mosqueteiro-4-perfis-120cm-preto-c-cantoneira-e-cordao/up/MLBU2661138510' },
  { title: 'Tela Mosquiteira Fibra De Vidro Larg. 1,05m - Rolo 30 Metros', price: 'R$ 406,49', image: 'https://http2.mlstatic.com/D_Q_NP_2X_657318-MLB70304426034_072023-E-tela-mosquiteira-fibra-de-vidro-larg-105m-rolo-30-metros.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071538874-tela-mosquiteira-fibra-de-vidro-larg-105m-rolo-30-metros-_JM' },
  { title: 'Kit Tela Mosquiteira 1,80 X 1,00 - Monte Sua Tela Em Casa', price: 'R$ 300,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_939530-MLB74470882231_022024-E-kit-tela-mosquiteira-180-x-100-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071487202-kit-tela-mosquiteira-180-x-100-monte-sua-tela-em-casa-_JM' },
  { title: 'Kit Tela Mosquiteira 1,60 X 1,00 - Monte Sua Tela Em Casa', price: 'R$ 263,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_602697-MLB74471290979_022024-E-kit-tela-mosquiteira-160-x-100-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071500392-kit-tela-mosquiteira-160-x-100-monte-sua-tela-em-casa-_JM' },
  { title: 'Kit Tela Mosquiteira 1,20 X 1,20 - Monte Sua Tela Em Casa', price: 'R$ 268,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_677098-MLB74352636268_022024-E-kit-tela-mosquiteira-120-x-120-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071473676-kit-tela-mosquiteira-120-x-120-monte-sua-tela-em-casa-_JM' },
  { title: 'Kit Tela Mosquiteira 1,80 X 1,80 - Monte Sua Tela Em Casa', price: 'R$ 385,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_631586-MLB74470929959_022024-E-kit-tela-mosquiteira-180-x-180-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071487130-kit-tela-mosquiteira-180-x-180-monte-sua-tela-em-casa-_JM' },
  { title: 'Kit Tela Mosquiteira 2,20 X 1,00 - Monte Sua Tela Em Casa', price: 'R$ 428,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_757047-MLB74352674554_022024-E-kit-tela-mosquiteira-220-x-100-monte-sua-tela-em-casa.webp', url: 'https://produto.mercadolivre.com.br/MLB-5071490094-kit-tela-mosquiteira-220-x-100-monte-sua-tela-em-casa-_JM' },
  { title: 'Tela Mosquiteira Nylon Verde Branca Cinza 1,00 X 50 M Rolo', price: 'R$ 513,38', image: 'https://http2.mlstatic.com/D_Q_NP_2X_724099-MLB71302305636_082023-E-tela-mosquiteira-nylon-verde-branca-cinza-100-x-50-m-rolo.webp', url: 'https://produto.mercadolivre.com.br/MLB-4690153136-tela-mosquiteira-nylon-verde-branca-cinza-100-x-50-m-rolo-_JM' },
  { title: 'Tela Mosquiteira Nylon Verde Branca Cinza 1,20 X 50 M - Rolo', price: 'R$ 424,18', image: 'https://http2.mlstatic.com/D_Q_NP_2X_797513-MLB71345007743_082023-E-tela-mosquiteira-nylon-verde-branca-cinza-120-x-50-m-rolo.webp', url: 'https://produto.mercadolivre.com.br/MLB-4690184094-tela-mosquiteira-nylon-verde-branca-cinza-120-x-50-m-rolo-_JM' },
  { title: 'Perfil E Acessórios P/ Janela Mosquiteira 1,00x1,20', price: 'R$ 210,99', image: 'https://http2.mlstatic.com/D_Q_NP_2X_734587-MLB74289024997_012024-E-perfil-e-acessorios-p-janela-mosquiteira-100x120.webp', url: 'https://produto.mercadolivre.com.br/MLB-5153691166-perfil-e-acessorios-p-janela-mosquiteira-100x120-_JM' },
];

const productCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'kits', label: 'Kits' },
  { id: 'cantos', label: 'Cantos' },
  { id: 'tramelas', label: 'Tramelas' },
  { id: 'borracha', label: 'Cordão / Borracha' },
  { id: 'fibra', label: 'Fibra de Vidro' },
] as const;

type ProductCategory = (typeof productCategories)[number]['id'];

const parseBrazilianPrice = (price: string) =>
  Number(price.replace(/[^\d,.]/g, '').replace(/\./g, '').replace(',', '.'));

export default function MosquitoScreensPage() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para telas mosquiteiras sob medida.')}`;
  const [productSearch, setProductSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('todos');
  const [visibleProductCount, setVisibleProductCount] = useState(16);

  const products = useMemo(() => {
    const priority = (title: string) => {
      if (/kit tela mosquiteir|tela mosquiteir.*kit completo/i.test(title)) return 0;
      if (/\bkit\b/i.test(title)) return 1;
      if (/tela mosquiteir|fibra de vidro/i.test(title)) return 2;
      return 3;
    };

    return [...mercadoLivreProducts].sort((a, b) => priority(a.title) - priority(b.title));
  }, []);

  const filteredProducts = useMemo(() => {
    const term = productSearch.trim().toLocaleLowerCase('pt-BR');
    const categoryPatterns: Partial<Record<ProductCategory, RegExp>> = {
      kits: /\bkit\b/i,
      cantos: /canto|cantoneira/i,
      tramelas: /tramela|trava/i,
      borracha: /borracha|cordão/i,
      fibra: /fibra de vidro/i,
    };
    const categoryPattern = categoryPatterns[activeCategory];

    return products
      .filter((product) => {
        const matchesSearch = !term || product.title.toLocaleLowerCase('pt-BR').includes(term);
        const matchesCategory = !categoryPattern || categoryPattern.test(product.title);
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => parseBrazilianPrice(a.price) - parseBrazilianPrice(b.price));
  }, [activeCategory, productSearch, products]);

  const visibleProducts = filteredProducts.slice(0, visibleProductCount);

  useEffect(() => {
    document.title = 'Telas Mosquiteiras Sob Medida em São Paulo | Rede & Proteção';
    const description = 'Telas mosquiteiras sob medida para janelas, portas e vãos em São Paulo. Modelos fixos, de correr e retráteis com orçamento pelo WhatsApp.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.redestelasdeprotecoes.com.br/telas-mosquiteiras';
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'mosquito-screen-schema';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Telas mosquiteiras sob medida', serviceType: 'Instalação de telas mosquiteiras', provider: { '@type': 'LocalBusiness', name: 'Rede & Proteção', telephone: CONTACT_INFO.phone }, areaServed: 'São Paulo e Região Metropolitana', url: canonical.href });
    document.getElementById(script.id)?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const selectCategory = (category: ProductCategory) => {
    setActiveCategory(category);
    setVisibleProductCount(16);
    window.requestAnimationFrame(() => document.getElementById('comprar-online')?.scrollIntoView({ behavior: 'smooth' }));
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      <Header onScrollTo={scrollToSection} />
      <nav aria-label="Categorias de produtos" className="border-b border-zinc-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          <span className="mr-1 hidden shrink-0 text-sm font-bold text-zinc-900 sm:inline">Categorias:</span>
          {productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={activeCategory === category.id}
              onClick={() => selectCategory(category.id)}
              className={`min-h-10 shrink-0 rounded-lg border px-4 py-2 text-sm font-bold transition-colors ${activeCategory === category.id ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-zinc-300 bg-white text-zinc-700 hover:border-emerald-600 hover:bg-emerald-50'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>
      <main>
        <section className="relative min-h-[620px] lg:min-h-[680px] flex items-end overflow-hidden bg-zinc-900">
          <img src="/images/hero-tela-mosquiteira-original.png" alt="Sala iluminada com tela mosquiteira instalada na janela" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/55 to-transparent" />
          <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 pt-28 lg:pb-24">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-300">Ventilação com mais tranquilidade</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Telas Mosquiteiras Sob Medida</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-100">Proteção contra mosquitos para janelas e portas, com soluções feitas para o seu espaço e para a rotina da sua família.</p>
              <a id="mosquito-hero-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg hover:bg-emerald-700 transition-colors">
                <MessageCircle className="h-5 w-5" /> Solicitar orçamento pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="modelos" className="py-16 lg:py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10"><p className="text-sm font-bold uppercase text-sky-700">Soluções para cada abertura</p><h2 className="mt-2 text-3xl lg:text-4xl font-bold">Qual modelo combina com seu ambiente?</h2><p className="mt-4 text-zinc-600">A escolha considera o tipo de esquadria, o espaço disponível e quantas vezes a abertura é usada ao longo do dia.</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{models.map(({ icon: Icon, title, use, detail }) => <article key={title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"><Icon className="h-8 w-8 text-sky-700" /><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-2 text-sm font-semibold text-emerald-700">{use}</p><p className="mt-3 text-sm leading-relaxed text-zinc-600">{detail}</p></article>)}</div>
          </div>
        </section>

        <section id="comprar-online" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase text-sky-700">Produtos para sua tela mosquiteira</p>
                <h2 className="mt-2 text-3xl lg:text-4xl font-bold">Vitrine Doutor das Telas</h2>
                <p className="mt-4 text-zinc-600">Escolha o produto e fale diretamente com nossa equipe. Confirmamos medidas, disponibilidade e a melhor forma de compra pelo WhatsApp.</p>
              </div>
              <label className="relative block w-full md:max-w-sm">
                <span className="sr-only">Buscar produto ou medida</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <input
                  type="search"
                  value={productSearch}
                  onChange={(event) => { setProductSearch(event.target.value); setVisibleProductCount(16); }}
                  placeholder="Buscar produto ou medida"
                  className="h-12 w-full rounded-lg border border-zinc-300 bg-white pl-10 pr-4 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </label>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                {visibleProducts.map((product) => (
                  <article key={product.url} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="block aspect-square bg-white p-3 sm:p-5">
                      <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-contain" />
                    </div>
                    <div className="flex flex-1 flex-col border-t border-zinc-100 p-3 sm:p-5">
                      <span className="text-[11px] font-bold uppercase text-emerald-700">Doutor das Telas</span>
                      <h3 className="mt-2 line-clamp-3 text-sm font-semibold leading-snug text-zinc-800 sm:text-base">{product.title}</h3>
                      <p className="mt-4 text-lg font-bold text-zinc-950 sm:text-xl">{product.price}</p>
                      <a href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.title}. Pode me orientar sobre medidas e compra?`)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-center text-xs font-bold text-white hover:bg-emerald-700 sm:text-sm">
                        <MessageCircle className="h-4 w-4 shrink-0" /> Consultar pelo WhatsApp
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            {visibleProducts.length < filteredProducts.length && (
              <div className="mt-8 flex justify-center">
                <button type="button" onClick={() => setVisibleProductCount((count) => count + 16)} className="inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-700 bg-white px-5 py-2.5 text-sm font-bold text-emerald-800 hover:bg-emerald-50">
                  Mostrar mais produtos
                </button>
              </div>
            )}
            {filteredProducts.length === 0 && <p className="mt-10 text-center text-zinc-600">Nenhum produto encontrado para essa busca.</p>}
            <p className="mt-5 text-xs leading-relaxed text-zinc-500">Preços e disponibilidade podem mudar. Nossa equipe confirma as condições atuais durante o atendimento.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div><p className="text-sm font-bold uppercase text-sky-700">Escolha orientada</p><h2 className="mt-2 text-3xl font-bold">Comparação rápida</h2><div className="mt-7 overflow-x-auto"><table className="w-full min-w-[520px] text-left text-sm"><thead className="bg-zinc-900 text-white"><tr><th className="p-4">Modelo</th><th className="p-4">Uso frequente</th><th className="p-4">Principal vantagem</th></tr></thead><tbody className="divide-y divide-zinc-200">{[['Fixa','Janelas','Simplicidade'],['De correr','Esquadrias deslizantes','Uso prático'],['Retrátil','Janelas e portas','Recolhimento'],['Para portas','Acessos e varandas','Circulação']].map(row => <tr key={row[0]}>{row.map(cell => <td key={cell} className="p-4">{cell}</td>)}</tr>)}</tbody></table></div></div>
            <div className="bg-sky-950 text-white p-7 lg:p-9 rounded-lg"><h2 className="text-2xl font-bold">Do orçamento à instalação</h2><div className="mt-7 space-y-6">{[[Ruler,'1. Medição','Conferimos o vão e o tipo de esquadria.'],[Frame,'2. Fabricação sob medida','Preparamos a solução conforme as dimensões do ambiente.'],[ShieldCheck,'3. Instalação','Ajustamos e testamos o funcionamento no local.']].map(([Icon,title,text]: any) => <div key={title} className="flex gap-4"><Icon className="w-6 h-6 shrink-0 text-emerald-300"/><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-sky-100">{text}</p></div></div>)}</div></div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div><Wind className="h-9 w-9 text-emerald-700"/><h2 className="mt-4 text-3xl font-bold">Conforto no dia a dia</h2><ul className="mt-6 space-y-4 text-zinc-700">{['Ajuda a reduzir a entrada de mosquitos e outros insetos.','Mantém a circulação natural de ar no ambiente.','Modelos adaptáveis a diferentes janelas e portas.','Acabamento discreto e manutenção simples.'].map(item => <li key={item} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald-700"/>{item}</li>)}</ul></div>
            <div><h2 className="text-3xl font-bold">Limpeza e manutenção</h2><p className="mt-5 leading-relaxed text-zinc-700">Remova a poeira com escova macia e faça a limpeza periódica com pano úmido, água e sabão neutro. Não use objetos pontiagudos, solventes ou jatos de alta pressão. Caso a malha solte ou a estrutura perca o alinhamento, solicite uma avaliação.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-900">Tirar dúvidas pelo WhatsApp <ArrowRight className="w-4 h-4"/></a></div>
          </div>
        </section>

        <section id="faq" className="py-16 lg:py-24 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6"><h2 className="text-3xl font-bold text-center">Perguntas frequentes</h2><div className="mt-9 divide-y divide-zinc-200 border-y border-zinc-200">{faqs.map(([q,a]) => <details key={q} className="group py-5"><summary className="cursor-pointer list-none font-bold flex justify-between gap-4">{q}<span className="text-sky-700">+</span></summary><p className="pt-3 pr-8 text-zinc-600 leading-relaxed">{a}</p></details>)}</div></div></section>

        <section className="bg-zinc-950 text-white py-14"><div className="max-w-5xl mx-auto px-4 sm:px-6 text-center"><h2 className="text-3xl font-bold">Peça uma avaliação para seu ambiente</h2><p className="mt-4 text-zinc-300">Envie as medidas aproximadas ou fotos da janela e receba orientação sobre o modelo mais adequado.</p><a id="mosquito-final-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 font-bold hover:bg-emerald-700"><MessageCircle className="w-5 h-5"/> Falar no WhatsApp</a></div></section>
      </main>
      <Footer onScrollTo={scrollToSection} />
      <FloatingWhatsApp />
    </div>
  );
}
