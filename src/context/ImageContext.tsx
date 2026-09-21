import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ImagePack {
  id: string;
  name: string;
  description: string;
  badge: string;
  previewUrl: string;
  bannerImage: string | null;
  serviceImages: Record<string, string>;
  galleryImages: Record<string, string>;
}

// Conjunto Padrão
const DEFAULT_BANNER_IMAGE = '/images/banner-protecao-apartamento.jpg';

const DEFAULT_SERVICE_IMAGES: Record<string, string> = {
  janelas: '/images/sacada-crianca.jpg',
  sacadas: '/images/sacada-rede-branca.jpg',
  'pets-gatos': '/images/sacada-gato.jpg',
  'escadas-mezaninos': '/images/escada-protegida.jpg',
};

const DEFAULT_GALLERY_IMAGES: Record<string, string> = {
  'inst-1': '/images/sacada-crianca.jpg',
  'inst-2': '/images/sacada-gato.jpg',
  'inst-3': '/images/sacada-rede-branca.jpg',
  'inst-4': '/images/sacada-crianca-cadeira.jpg',
  'inst-5': '/images/escada-protegida.jpg',
  'inst-6': '/images/piscina-rede-protecao.jpg',
  'inst-7': '/images/piscina-criancas-rede.jpg',
  'inst-8': '/images/janela-rede-protecao.jpg',
  'inst-9': '/images/banner-seguranca-criancas.jpg',
  'inst-10': '/images/banner-seguranca-gatos.jpg',
};

export const THEMATIC_PACKS: ImagePack[] = [
  {
    id: 'padrao',
    name: 'Pack 1: Apartamentos & Janelas Tradicionais',
    description: 'Fotos nítidas de janelas amplas, sacadas residenciais e ambientes familiares bem iluminados.',
    badge: 'Mais Utilizado',
    previewUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    bannerImage: null,
    serviceImages: {
      janelas: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      sacadas: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'pets-gatos': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      'escadas-mezaninos': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    galleryImages: {
      'inst-1': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'inst-2': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
      'inst-3': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      'inst-4': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'inst-5': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      'inst-6': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 'familia-pets',
    name: 'Pack 2: Família, Crianças & Pets na Janela',
    description: 'Ambientes afetuosos com crianças seguras perto da janela, gatos curiosos e tranquilidade total.',
    badge: 'Foco Segurança Infantil',
    previewUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    bannerImage: null,
    serviceImages: {
      janelas: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      sacadas: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'pets-gatos': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
      'escadas-mezaninos': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    },
    galleryImages: {
      'inst-1': 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'inst-2': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      'inst-3': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      'inst-4': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'inst-5': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      'inst-6': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 'alto-padrao',
    name: 'Pack 3: Alto Padrão, Sacadas Gourmet & Vistas Panorâmicas',
    description: 'Edifícios modernos, cortinas de vidro impecáveis, varandas amplas e estética sofisticada.',
    badge: 'Arquitetura Premium',
    previewUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    bannerImage: null,
    serviceImages: {
      janelas: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      sacadas: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'pets-gatos': 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
      'escadas-mezaninos': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    },
    galleryImages: {
      'inst-1': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'inst-2': 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
      'inst-3': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'inst-4': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'inst-5': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      'inst-6': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 'pets-especial',
    name: 'Pack 4: Universo Felino & Canino Protegido',
    description: 'Enfatiza a segurança de gatos e cães em apartamentos, janelas altas e sacadas fechadas.',
    badge: 'Especialista Pet',
    previewUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    bannerImage: null,
    serviceImages: {
      janelas: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
      sacadas: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
      'pets-gatos': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      'escadas-mezaninos': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    },
    galleryImages: {
      'inst-1': 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
      'inst-2': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      'inst-3': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
      'inst-4': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      'inst-5': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      'inst-6': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    },
  },
];

interface ImageContextType {
  bannerImage: string | null;
  serviceImages: Record<string, string>;
  galleryImages: Record<string, string>;
  activePackId: string;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  applyPack: (packId: string) => void;
  setBannerImage: (url: string | null) => void;
  setServiceImage: (id: string, url: string) => void;
  setGalleryImage: (id: string, url: string) => void;
  uploadBatchImages: (files: FileList | File[]) => Promise<number>;
  resetAllImages: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const STORAGE_KEYS = {
  BANNER: 'redeprotecao_banner_img',
  SERVICES: 'redeprotecao_services_img',
  GALLERY: 'redeprotecao_gallery_img',
  ACTIVE_PACK: 'redeprotecao_active_pack',
};

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bannerImage, setBannerImageState] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem(STORAGE_KEYS.BANNER) ||
        localStorage.getItem('protegelar_banner_img') ||
        DEFAULT_BANNER_IMAGE
      );
    } catch {
      return DEFAULT_BANNER_IMAGE;
    }
  });

  const [serviceImages, setServiceImagesState] = useState<Record<string, string>>(() => {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEYS.SERVICES) ||
        localStorage.getItem('protegelar_services_img');
      return saved ? { ...DEFAULT_SERVICE_IMAGES, ...JSON.parse(saved) } : DEFAULT_SERVICE_IMAGES;
    } catch {
      return DEFAULT_SERVICE_IMAGES;
    }
  });

  const [galleryImages, setGalleryImagesState] = useState<Record<string, string>>(() => {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEYS.GALLERY) ||
        localStorage.getItem('protegelar_gallery_img');
      return saved ? { ...DEFAULT_GALLERY_IMAGES, ...JSON.parse(saved) } : DEFAULT_GALLERY_IMAGES;
    } catch {
      return DEFAULT_GALLERY_IMAGES;
    }
  });

  const [activePackId, setActivePackId] = useState<string>(() => {
    try {
      return (
        localStorage.getItem(STORAGE_KEYS.ACTIVE_PACK) ||
        localStorage.getItem('protegelar_active_pack') ||
        'padrao'
      );
    } catch {
      return 'padrao';
    }
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);

  const setBannerImage = (url: string | null) => {
    setBannerImageState(url);
    try {
      if (url) {
        localStorage.setItem(STORAGE_KEYS.BANNER, url);
      } else {
        localStorage.removeItem(STORAGE_KEYS.BANNER);
      }
    } catch {
      // quota safeguard
    }
  };

  const setServiceImage = (id: string, url: string) => {
    setServiceImagesState((prev) => {
      const updated = { ...prev, [id]: url };
      try {
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(updated));
      } catch {
        // quota safeguard
      }
      return updated;
    });
  };

  const setGalleryImage = (id: string, url: string) => {
    setGalleryImagesState((prev) => {
      const updated = { ...prev, [id]: url };
      try {
        localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      } catch {
        // quota safeguard
      }
      return updated;
    });
  };

  // Troca TODAS as imagens do site em 1 clique
  const applyPack = (packId: string) => {
    const targetPack = THEMATIC_PACKS.find((p) => p.id === packId);
    if (!targetPack) return;

    setActivePackId(packId);
    setServiceImagesState(targetPack.serviceImages);
    setGalleryImagesState(targetPack.galleryImages);

    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_PACK, packId);
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(targetPack.serviceImages));
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(targetPack.galleryImages));
    } catch {
      // ignore
    }
  };

  // Upload em lote: recebe múltiplos arquivos e distribui pelo site
  const uploadBatchImages = async (files: FileList | File[]): Promise<number> => {
    const fileArray = Array.from(files).filter((f) => f.type.startsWith('image/'));
    if (fileArray.length === 0) return 0;

    const readAsDataUrl = (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

    const dataUrls = await Promise.all(fileArray.map(readAsDataUrl));

    // Se tiver 1 imagem e for a primeira, define no Banner Principal
    if (dataUrls.length === 1) {
      setBannerImage(dataUrls[0]);
      return 1;
    }

    // Se tiver múltiplas, distribui entre Banner, Serviços e Galeria
    let count = 0;
    if (dataUrls[0]) {
      setBannerImage(dataUrls[0]);
      count++;
    }

    const serviceKeys = Object.keys(DEFAULT_SERVICE_IMAGES);
    const galleryKeys = Object.keys(DEFAULT_GALLERY_IMAGES);

    const newServices = { ...serviceImages };
    const newGallery = { ...galleryImages };

    let urlIdx = 1;
    for (let i = 0; i < serviceKeys.length && urlIdx < dataUrls.length; i++, urlIdx++) {
      newServices[serviceKeys[i]] = dataUrls[urlIdx];
      count++;
    }

    for (let i = 0; i < galleryKeys.length && urlIdx < dataUrls.length; i++, urlIdx++) {
      newGallery[galleryKeys[i]] = dataUrls[urlIdx];
      count++;
    }

    setServiceImagesState(newServices);
    setGalleryImagesState(newGallery);

    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(newServices));
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(newGallery));
    } catch {
      // ignore
    }

    return count;
  };

  // Restaura todas as imagens para o estado inicial
  const resetAllImages = () => {
    setBannerImage(null);
    setServiceImagesState(DEFAULT_SERVICE_IMAGES);
    setGalleryImagesState(DEFAULT_GALLERY_IMAGES);
    setActivePackId('padrao');

    try {
      localStorage.removeItem(STORAGE_KEYS.BANNER);
      localStorage.removeItem(STORAGE_KEYS.SERVICES);
      localStorage.removeItem(STORAGE_KEYS.GALLERY);
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_PACK);
    } catch {
      // ignore
    }
  };

  return (
    <ImageContext.Provider
      value={{
        bannerImage,
        serviceImages,
        galleryImages,
        activePackId,
        isManagerOpen,
        setIsManagerOpen,
        applyPack,
        setBannerImage,
        setServiceImage,
        setGalleryImage,
        uploadBatchImages,
        resetAllImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};
