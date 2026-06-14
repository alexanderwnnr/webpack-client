import React from 'react'

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.35),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">О нас</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              СтройБригада в Аликанте: ремонт под ключ без лишних слов
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-slate-200">
              Работаем в Аликанте и соседних районах с акцентом на качество, сроки и спокойствие клиента. Современный подход к отделке, быстрая организация работ и прозрачный контроль каждого этапа.
            </p>
            <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Карта покрытия</p>
                  <h2 className="mt-3 text-2xl font-bold text-white">Испания и юг побережья</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                    Подробный охват региона: Аликанте, Бенидорм, Эльче, Сан-Хуан, Торревьеха и соседние районы. Работы проводятся с учетом особенностей климата и местной архитектуры.
                  </p>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 p-4">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <svg viewBox="0 0 640 480" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0f766e" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="#0f172a" />
                    <path d="M205 120c20-50 60-80 115-90 40-8 80 5 110 33 20 18 36 42 42 72 8 40 5 76-16 110-25 40-75 80-120 92-35 10-72 6-100-16-28-22-45-58-45-98 0-29 8-56 24-79z" fill="url(#mapGradient)" opacity="0.95" />
                    <circle cx="419" cy="230" r="18" fill="#ecfccb" opacity="0.95" />
                    <circle cx="419" cy="230" r="10" fill="#22c55e" />
                    <text x="420" y="255" fontSize="20" textAnchor="middle" fill="#e2e8f0" fontWeight="700">Alicante</text>
                    <circle cx="310" cy="160" r="12" fill="#facc15" opacity="0.95" />
                    <circle cx="285" cy="140" r="10" fill="#f97316" />
                    <text x="310" y="190" fontSize="14" textAnchor="middle" fill="#94a3b8">Valencia</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Работаем в Аликанте и окрестностях</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Строим и обновляем жилые и коммерческие объекты по всему региону: от Аликанте и Бенидорма до Эльче, Сан-Хуана и Торревьехи. Мы покрываем весь побережье и ближайшие пригороды, чтобы ремонт был доступен и удобен.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">Выезд в течение 24 часов</h3>
                  <p className="mt-3 text-gray-600">Оперативно оцениваем объект и составляем прозрачную смету без скрытых платежей.</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">Ремонт в прибрежных районах</h3>
                  <p className="mt-3 text-gray-600">Работаем с домами, апартаментами и коммерческими помещениями на побережье и в центральной зоне города.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
                  alt="Интерьер квартиры в Аликанте"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
                    alt="Ремонтная бригада на объекте"
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80"
                    alt="Современная отделка жилого помещения"
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Комплексные решения</h3>
              <p className="mt-4 text-gray-600">
                Полный цикл ремонта: от демонтажа и электрики до отделки, мебельных решений и финальной уборки.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Гарантии качества</h3>
              <p className="mt-4 text-gray-600">
                Работаем по договору и даём гарантию на все виды работ, чтобы вы были уверены в результате.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Материалы и стиль</h3>
              <p className="mt-4 text-gray-600">
                Используем проверенные материалы и современные решения, чтобы интерьеры выглядели свежо и служили долго.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl border border-gray-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">Преимущества работы с нами</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900">Прозрачные сметы</h3>
                <p className="mt-3 text-gray-600">Вы получаете точную стоимость и поэтапные расходы без сюрпризов.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900">Сроки и контроль</h3>
                <p className="mt-3 text-gray-600">Чёткий график работ и регулярные отчёты на каждом этапе проекта.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900">Сервис для дома</h3>
                <p className="mt-3 text-gray-600">Сервисные решения для квартир, домов и коммерческих помещений на побережье.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900">Поддержка клиентов</h3>
                <p className="mt-3 text-gray-600">Открытая связь и быстрый отклик на запросы клиентов из региона.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
