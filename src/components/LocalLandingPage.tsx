import { useEffect } from 'react';
import { CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/protectionData';
import { ServiceArea, getAreaPath } from '../data/serviceAreas';

const ROOT_URL = 'https://redestelasdeprotecoes.com.br';

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function LocalLandingPage({ area }: { area: ServiceArea }) {
  const location = area.kind === 'distrito' ? `${area.name}, São Paulo` : area.name;
  const canonical = `${ROOT_URL}${getAreaPath(area)}`;
  const title = `Redes de Proteção em ${location} | Instalação e Orçamento`;
  const description = `Instalação de redes de proteção para janelas, sacadas e pets em ${location}. Atendimento técnico, materiais conforme ABNT NBR 16046 e orçamento pelo WhatsApp.`;
  const message = encodeURIComponent(
    `Olá! Gostaria de um orçamento para rede de proteção em ${location}.`,
  );

  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('robots', 'index, follow, max-image-preview:large');

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'local-service-schema';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Instalação de redes de proteção em ${location}`,
      serviceType: 'Instalação de redes e telas de proteção',
      areaServed: { '@type': 'AdministrativeArea', name: location },
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: 'Rede & Proteção',
        telephone: '+55-11-97753-4049',
        url: ROOT_URL,
      },
      url: canonical,
    });
    document.getElementById(schema.id)?.remove();
    document.head.appendChild(schema);
    return () => schema.remove();
  }, [canonical, description, location, title]);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-2 font-bold text-zinc-900">
            <ShieldCheck className="h-7 w-7 text-sky-600" />
            Rede & <span className="text-sky-600">Proteção</span>
          </a>
          <a href={`tel:+${CONTACT_INFO.phoneClean}`} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
            <Phone className="h-4 w-4" /> (11) 97753-4049
          </a>
        </div>
      </header>

      <section className="bg-sky-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.25fr_.75fr] lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-200">
              <MapPin className="h-4 w-4" /> Atendimento em {location}
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Redes de proteção em {location}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sky-100">
              Instalação para janelas, sacadas, varandas, escadas e proteção de pets, com avaliação do imóvel e indicação da malha adequada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${message}`} className="inline-flex items-center gap-2 bg-emerald-500 px-5 py-3 font-bold text-white hover:bg-emerald-600">
                <MessageCircle className="h-5 w-5" /> Pedir orçamento
              </a>
              <a href={`tel:+${CONTACT_INFO.phoneClean}`} className="inline-flex items-center gap-2 border border-sky-300 px-5 py-3 font-bold text-white hover:bg-sky-900">
                <Phone className="h-5 w-5" /> Ligar agora
              </a>
            </div>
          </div>
          <div className="border border-sky-800 bg-sky-900 p-6">
            <h2 className="text-xl font-bold">Aplicações atendidas</h2>
            <ul className="mt-5 space-y-3 text-sky-100">
              {['Janelas de apartamentos e casas', 'Sacadas e varandas', 'Proteção para gatos e pets', 'Escadas, mezaninos e piscinas'].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Instalação técnica perto de você</h2>
            <p className="mt-4 leading-7 text-zinc-700">
              Atendemos imóveis em {location} com redes de polietileno de alta densidade, proteção anti-UV e opções de malha 5x5 cm e 3x3 cm. A escolha depende do vão, das regras do condomínio e de quem precisa ser protegido.
            </p>
            <p className="mt-4 leading-7 text-zinc-700">
              O orçamento é feito após entender o tipo de abertura e as medidas aproximadas. Uma foto enviada pelo WhatsApp ajuda na avaliação inicial.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Segurança e manutenção</h2>
            <p className="mt-4 leading-7 text-zinc-700">
              A instalação segue os requisitos aplicáveis da ABNT NBR 16046. Recomendamos inspeção visual periódica e substituição quando houver desgaste, cortes, impacto ou ao fim da vida útil indicada para o material.
            </p>
            <a href="/#especificacoes" className="mt-5 inline-block font-semibold text-sky-700 hover:text-sky-900">Ver informações técnicas</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold">Solicite uma avaliação em {location}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">Informe o tipo de imóvel, o local da instalação e, se possível, envie uma foto dos vãos.</p>
          <a href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${message}`} className="mt-7 inline-flex items-center gap-2 bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700">
            <MessageCircle className="h-5 w-5" /> Conversar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-zinc-950 px-4 py-8 text-center text-sm text-zinc-400">
        Rede & Proteção · Atendimento em {location} · Segunda a sábado, 08h às 19h
      </footer>
    </main>
  );
}
