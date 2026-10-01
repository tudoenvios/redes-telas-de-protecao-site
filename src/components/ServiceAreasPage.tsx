import { coastalAreas, districtAreas, getAreaPath, regionalAreas } from '../data/serviceAreas';

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="font-semibold text-sky-700">← Voltar ao início</a>
        <h1 className="mt-6 text-4xl font-black">Áreas de atendimento</h1>
        <p className="mt-3 max-w-3xl text-zinc-600">Encontre a página da sua região para solicitar instalação de redes de proteção em janelas, sacadas e áreas para pets.</p>
        <a href="/guias/ranking-bairros-condominios-sao-paulo" className="mt-6 inline-flex items-center border border-sky-200 bg-white px-5 py-3 font-bold text-sky-800 hover:border-sky-500">
          Ver ranking de bairros com mais condomínios e edifícios residenciais
        </a>

        <h2 className="mt-10 text-2xl font-bold">Distritos de São Paulo</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {districtAreas.map((area) => <a key={area.slug} href={getAreaPath(area)} className="border border-zinc-200 bg-white px-4 py-3 font-medium hover:border-sky-500 hover:text-sky-700">{area.name}</a>)}
        </div>

        <h2 className="mt-12 text-2xl font-bold">Municípios e regiões próximas</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {regionalAreas.map((area) => <a key={area.slug} href={getAreaPath(area)} className="border border-zinc-200 bg-white px-4 py-3 font-medium hover:border-sky-500 hover:text-sky-700">{area.name}</a>)}
        </div>

        {['Praia Grande', 'Santos'].map((city) => (
          <section key={city}>
            <h2 className="mt-12 text-2xl font-bold">Bairros de {city}</h2>
            <p className="mt-2 text-zinc-600">Atendimento em apartamentos e condomínios próximos à orla de {city}.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {coastalAreas.filter((area) => area.city === city).map((area) => <a key={`${area.city}-${area.slug}`} href={getAreaPath(area)} className="border border-zinc-200 bg-white px-4 py-3 font-medium hover:border-sky-500 hover:text-sky-700">{area.name}</a>)}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
