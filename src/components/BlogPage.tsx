import { useEffect } from 'react';
import { ArrowLeft, BookOpen, ChevronRight, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { blogArticles, BlogArticle, findBlogArticle } from '../data/blogArticles';
import { CONTACT_INFO } from '../data/protectionData';

const ROOT_URL = 'https://www.redestelasdeprotecoes.com.br';

const articlePath = (article: BlogArticle) => `/blog/${article.slug}/`;

const relatedFor = (article: BlogArticle) =>
  blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

function setMeta(selector: string, attribute: 'name' | 'property', key: string, value: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

function updateHead(title: string, description: string, canonical: string, schema: object) {
  document.title = title;
  setMeta('meta[name="description"]', 'name', 'description', description);
  setMeta('meta[property="og:title"]', 'property', 'og:title', title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = canonical;
  document.getElementById('blog-schema')?.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'blog-schema';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

function BlogHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex items-center gap-2 font-bold text-zinc-900">
          <ShieldCheck className="h-7 w-7 text-sky-600" />
          Rede & <span className="text-sky-600">Proteção</span>
        </a>
        <div className="hidden items-center gap-5 text-sm font-semibold text-zinc-700 sm:flex">
          <a href="/rede-de-protecao" className="hover:text-sky-700">Rede de proteção</a>
          <a href="/areas-atendidas" className="hover:text-sky-700">Áreas atendidas</a>
          <a href={`tel:+${CONTACT_INFO.phoneClean}`} className="inline-flex items-center gap-2 text-sky-800">
            <Phone className="h-4 w-4" />
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </header>
  );
}

function BlogFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10 text-sm text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rede & Proteção®. Conteúdo informativo sobre redes e telas de proteção.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/" className="font-semibold text-sky-300 hover:text-sky-200">Início</a>
          <a href="/blog/" className="font-semibold text-sky-300 hover:text-sky-200">Blog</a>
          <a href="/sitemap.xml" className="font-semibold text-sky-300 hover:text-sky-200">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

function BlogIndex() {
  const canonical = `${ROOT_URL}/blog/`;
  const title = 'Blog Rede & Proteção | Guias de redes de proteção';
  const description = 'Guias para planejar redes de proteção em janelas, sacadas, apartamentos, ambientes com gatos e pedidos de orçamento.';

  useEffect(() => {
    updateHead(title, description, canonical, {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: canonical,
      inLanguage: 'pt-BR',
      publisher: { '@type': 'Organization', name: 'Rede & Proteção' },
    });
  }, [canonical]);

  return (
    <main className="bg-zinc-50 text-zinc-900">
      <section className="border-b border-sky-900 bg-sky-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-sky-200">
            <BookOpen className="h-4 w-4" />
            Guias práticos
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Blog sobre redes de proteção para janelas, sacadas, gatos e apartamentos
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-sky-100">
            Conteúdos para organizar medidas, fotos, dúvidas de condomínio e informações úteis antes de solicitar uma avaliação técnica.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {blogArticles.map((article) => (
            <article key={article.slug} className="border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Guia Rede & Proteção</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight">
                <a href={articlePath(article)} className="hover:text-sky-700">{article.title}</a>
              </h2>
              <p className="mt-3 leading-7 text-zinc-600">{article.description}</p>
              <a href={articlePath(article)} className="mt-5 inline-flex items-center gap-2 font-bold text-sky-700">
                Ler guia
                <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogArticlePage({ article }: { article: BlogArticle }) {
  const canonical = `${ROOT_URL}${articlePath(article)}`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(`Olá! Li o guia "${article.title}" e gostaria de pedir orientação para redes de proteção. Posso enviar fotos e medidas aproximadas.`)}`;
  const related = relatedFor(article);

  useEffect(() => {
    updateHead(`${article.title} | Rede & Proteção`, article.description, canonical, {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: article.title,
          description: article.description,
          inLanguage: 'pt-BR',
          author: { '@type': 'Organization', name: 'Rede & Proteção' },
          publisher: { '@type': 'Organization', name: 'Rede & Proteção' },
          mainEntityOfPage: canonical,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${ROOT_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ROOT_URL}/blog/` },
            { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
          ],
        },
      ],
    });
  }, [article, canonical]);

  return (
    <main className="bg-zinc-50 text-zinc-900">
      <nav aria-label="Navegação estrutural" className="border-b border-zinc-200 bg-white">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-zinc-600">
          <li><a href="/">Início</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li><a href="/blog/">Blog</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li className="font-semibold text-zinc-900">{article.title}</li>
        </ol>
      </nav>
      <article>
        <header className="bg-sky-950 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 lg:py-18">
            <a href="/blog/" className="inline-flex items-center gap-2 text-sm font-bold text-sky-200">
              <ArrowLeft className="h-4 w-4" />
              Todos os guias
            </a>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">{article.title}</h1>
            <p className="mt-5 text-lg leading-8 text-sky-100">{article.intro}</p>
          </div>
        </header>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading} className="border-b border-zinc-200 pb-9 last:border-b-0">
                <h2 className="text-3xl font-bold leading-tight">{section.heading}</h2>
                <div className="mt-5 space-y-4 text-lg leading-8 text-zinc-700">
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="border-l-4 border-emerald-600 bg-white px-4 py-3 font-semibold text-zinc-800">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          <aside className="space-y-5">
            <div className="border border-sky-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-bold">Pedir orientação</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Envie fotos internas, medidas aproximadas e o objetivo da proteção para receber direcionamento pelo WhatsApp.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-emerald-600 px-4 py-3 font-bold text-white hover:bg-emerald-700">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
            <div className="border border-zinc-200 bg-white p-5">
              <h2 className="text-xl font-bold">Leia também</h2>
              <ul className="mt-4 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <a href={articlePath(item)} className="font-semibold text-sky-700 hover:text-sky-900">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-zinc-200 bg-zinc-100 p-5 text-sm leading-6 text-zinc-600">
              Conteúdo informativo. Medidas, materiais, fixações, prazo e disponibilidade dependem de avaliação técnica do imóvel.
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

export default function BlogPage() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const article = findBlogArticle(pathname);

  return (
    <div className="min-h-screen bg-zinc-50">
      <BlogHeader />
      {pathname === '/blog' ? <BlogIndex /> : article ? <BlogArticlePage article={article} /> : <BlogIndex />}
      <BlogFooter />
    </div>
  );
}
