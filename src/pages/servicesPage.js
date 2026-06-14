import React from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircleIcon,
  SparklesIcon,
  WrenchIcon,
  LightBulbIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: WrenchIcon,
    title: 'Капитальный ремонт',
    description: 'Полная переделка квартиры с нуля — от демонтажа до отделки.',
    color: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
    link: '/capital-renovation',
  },
  {
    icon: SparklesIcon,
    title: 'Косметический ремонт',
    description: 'Быстрое обновление интерьера — краска, обои, новые полы.',
    color: 'from-sky-50 to-blue-50',
    borderColor: 'border-sky-200',
    link: '/cosmetic-remont',
  },
  {
    icon: LightBulbIcon,
    title: 'Дизайн интерьера',
    description: 'Создание уникального стиля вашего дома с учётом всех деталей.',
    color: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    link: '/dizajnersky-remont',
  },
  {
    icon: CheckCircleIcon,
    title: 'Плиточные работы',
    description: 'Профессиональная укладка плитки в ванной, кухне и других помещениях.',
    color: 'from-cyan-50 to-teal-50',
    borderColor: 'border-cyan-200',
    link: '/plitocnye-raboty',
  },
  {
    icon: SparklesIcon,
    title: 'Электрика + сантехника',
    description: 'Монтаж и ремонт электропроводки, сантехнических систем и коммуникаций.',
    color: 'from-orange-50 to-red-50',
    borderColor: 'border-orange-200',
    link: '/elektrika-santehnika',
  },
]

const highlights = [
  {
    number: '10+',
    title: 'Лет опыта',
    description: 'Работаем на рынке с надежной репутацией и портфолио проектов.',
  },
  {
    number: '500+',
    title: 'Завершено проектов',
    description: 'Сотни довольных клиентов и реализованных дизайн-решений.',
  },
  {
    number: '24/7',
    title: 'Техподдержка',
    description: 'Всегда готовы ответить на ваши вопросы и помочь на любом этапе.',
  },
]

const steps = [
  {
    step: '1',
    title: 'Консультация',
    description: 'Бесплатный выезд специалиста и оценка объема работ',
  },
  {
    step: '2',
    title: 'Смета и дизайн',
    description: 'Подробный расчет стоимости и 3D визуализация результата',
  },
  {
    step: '3',
    title: 'Договор',
    description: 'Оформление контракта с четким графиком и условиями',
  },
  {
    step: '4',
    title: 'Работа',
    description: 'Выполнение ремонта с еженедельными фото-отчетами',
  },
  {
    step: '5',
    title: 'Приемка',
    description: 'Полная сдача объекта с гарантией 3 года',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Прямые решения для дома</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ремонт и отделка, которым можно доверять
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              От консультации до сдачи ключей — мы берем на себя всю ответственность за качество вашего ремонта.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-600 transition"
              >
                Заказать консультацию
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
              <a
                href="tel:+70000000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                📞 +7 (000) 000-00-00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Наши услуги</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр работ для воплощения вашего идеального интерьера
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.link}
                  to={service.link}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border-2 ${service.borderColor} block`}
                >
                  <div className="relative z-10">
                    <Icon className="h-8 w-8 text-gray-900" />
                    <h3 className="mt-5 text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mt-3 text-gray-700 leading-relaxed">{service.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition">
                      Подробнее
                      <ChevronRightIcon className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <span className="text-3xl font-bold">{highlight.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{highlight.title}</h3>
                <p className="mt-2 text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Как мы работаем</h2>
            <p className="mt-4 text-xl text-gray-600">Прозрачный процесс от начала до конца</p>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-center text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-center text-sm text-gray-600">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-emerald-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Готовы начать преобразование?
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Оставьте заявку прямо сейчас и получите бесплатную консультацию специалиста
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-10 py-4 text-lg font-semibold text-white hover:bg-emerald-600 transition shadow-lg"
            >
              Заказать ремонт
            </Link>
            <a
              href="tel:+70000000000"
              className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-500 px-10 py-4 text-lg font-semibold text-emerald-600 hover:bg-emerald-50 transition"
            >
              Позвонить нам
            </a>
          </div>
        </div>
      </section>

      {/* Alicante Area */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Работаем в Аликанте и окрестностях</h2>
            <p className="mt-6 text-xl text-gray-600">
              Обслуживаем весь район Аликанте, включая Бенидорм, Эльче, Сан-Хуан и Торревьеху. Быстрый выезд, точная смета и гарантированное качество ремонта.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Локальные выезды</h3>
              <p className="mt-4 text-gray-600">
                Мы работаем по всему Аликанте и ближайшим городам в радиусе 50 км. Планируем работы так, чтобы выезд и логистика были максимально удобными.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Удобные сроки</h3>
              <p className="mt-4 text-gray-600">
                Гарантированно соблюдаем график и быстро отвечаем на запросы клиентов из прибрежных районов и загородных поселков.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

