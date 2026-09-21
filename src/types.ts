export interface ProtectionService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  recommendedMesh: '5x5cm' | '3x3cm';
  targetAudience: string;
  resistance: string;
  idealFor: string[];
  iconName: string;
  tag: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'seguranca' | 'instalacao' | 'materiais' | 'orcamento';
}

export interface TechnicalFeature {
  label: string;
  peadVirgem: string;
  nylonComum: string;
  importance: string;
}

export interface CalculatorState {
  environmentType: 'janela' | 'sacada' | 'pet' | 'piscina';
  width: number;
  height: number;
  quantity: number;
  meshType: '5x5' | '3x3';
  color: 'branca' | 'preta' | 'marrom' | 'areia';
  hasGlassEnclosure: boolean;
  city: string;
}
