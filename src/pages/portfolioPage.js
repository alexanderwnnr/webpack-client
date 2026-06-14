import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Ремонт квартир под ключ',
    description: 'Современный дизайн, отделка стен, потолков и пола.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Дизайнерский ремонт студии',
    description: 'Комплексный ремонт с подбором мебели и освещения.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Капитальный ремонт дома',
    description: 'Полная реконструкция и обновление инженерии.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Плиточные работы любой сложности',
    description: 'Качественная укладка плитки, мозаики и камня.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function PortfolioPage() {
  return (
    <main className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-base font-semibold text-indigo-600">Портфолио</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Наши лучшие проекты
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Примеры реализованных ремонтов и отделочных работ для квартир, домов и коммерческих помещений.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <img src={project.image} alt={project.title} className="h-72 w-full object-cover" />
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                <p className="mt-4 text-gray-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
