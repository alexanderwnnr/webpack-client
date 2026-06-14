import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const processSteps = [
  'Осматриваем объект и фиксируем пожелания',
  'Готовим смету, сроки и список материалов',
  'Выполняем работы с промежуточным контролем',
  'Сдаем результат и передаем гарантию',
]

const capitalRenovationData = {
  eyebrow: 'Полное обновление под ключ',
  title: 'Капитальный ремонт',
  lead: 'Полная реконструкция помещения: перепланировка, замена инженерии, подготовка к новым финишным покрытиям.',
  summary: 'Решение для квартир после покупки, старого фонда или помещений, где нужно заменить не только отделку, но и коммуникации.',
  timeline: 'от 35 дней',
  price: 'от 8 000 ₽/м²',
  warranty: 'до 5 лет',
  accent: 'from-emerald-500 to-teal-400',
  heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
  points: [
    'Демонтаж и вывоз мусора',
    'Перепланировка и согласование проекта',
    'Электрика и сантехника по нормам Испании',
    'Стены, полы и потолки',
    'Кухни и санузлы',
    'Финиш и сдача готового объекта',
  ],
  benefits: [
    'Гарантия до 5 лет',
    'Фиксированная смета',
    'Лицензии и нормы',
    'Свои бригады',
    'Фото-отчёты',
    'Поддержка на русском и испанском',
  ],
}

const serviceDetails = {
  'cosmetic-remont': {
    eyebrow: 'Быстрое обновление пространства',
    title: 'Косметический ремонт',
    lead: 'Освежаем интерьер без капитальных изменений: покраска, выравнивание стен, отделка потолков, замена покрытий и мелкие работы.',
    summary: 'Подходит, когда квартира в хорошем техническом состоянии, но интерьер устал и нуждается в аккуратном обновлении.',
    timeline: 'от 10 дней',
    price: 'от 2 500 ₽/м²',
    warranty: 'до 3 лет',
    accent: 'from-sky-500 to-cyan-400',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Выравнивание стен и потолков',
      'Покраска и декоративная штукатурка',
      'Замена напольных покрытий',
      'Установка новой фурнитуры и освещения',
    ],
    benefits: [
      'Без сложной перепланировки',
      'Быстрое улучшение внешнего вида',
      'Помогаем подобрать практичные материалы',
    ],
  },
  'kapitalny-remont': capitalRenovationData,
  'capital-renovation': capitalRenovationData,
  'dizajnersky-remont': {
    eyebrow: 'Интерьер с продуманной концепцией',
    title: 'Дизайнерский ремонт',
    lead: 'Индивидуальный проект с подбором материалов, освещения и мебели, реализованный с максимальным вниманием к стилю.',
    summary: 'Берем идею интерьера и доводим ее до готового пространства: от планировки и визуализации до финальных деталей.',
    timeline: 'от 45 дней',
    price: 'от 12 000 ₽/м²',
    warranty: 'до 5 лет',
    accent: 'from-amber-500 to-orange-400',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Разработка дизайн-проекта',
      'Подбор материалов и декора',
      'Контроль качества монтажа',
      'Финальная постановка элементов интерьера',
    ],
    benefits: [
      'Единая стилистика во всех комнатах',
      'Реализация без случайных решений',
      'Согласование материалов до закупки',
    ],
  },
  'plitocnye-raboty': {
    eyebrow: 'Ровная геометрия и чистые швы',
    title: 'Плиточные работы',
    lead: 'Укладка плитки любой сложности: керамогранит, мозаика, натуральный камень и декоративные панели.',
    summary: 'Подготавливаем основание, соблюдаем раскладку и аккуратно работаем с углами, примыканиями и затиркой.',
    timeline: 'от 3 дней',
    price: 'от 1 800 ₽/м²',
    warranty: 'до 3 лет',
    accent: 'from-cyan-500 to-teal-400',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Разметка и подготовка основания',
      'Укладка плитки и мозаики',
      'Затирка швов',
      'Установка плинтусов и порожков',
    ],
    benefits: [
      'Аккуратные запилы и примыкания',
      'Работа с крупным форматом',
      'Гидроизоляция мокрых зон',
    ],
  },
  'elektrika-santehnika': {
    eyebrow: 'Инженерия без сюрпризов',
    title: 'Электрика и сантехника',
    lead: 'Профессиональный монтаж электрических систем и сантехнического оборудования под ключ.',
    summary: 'Прокладываем коммуникации с понятной схемой, безопасными соединениями и удобным доступом к важным узлам.',
    timeline: 'от 5 дней',
    price: 'по смете',
    warranty: 'до 3 лет',
    accent: 'from-orange-500 to-red-400',
    heroImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80',
    points: [
      'Монтаж новой разводки',
      'Установка розеток, выключателей и освещения',
      'Прокладка сантехнических трасс',
      'Установка ванн, унитазов, раковин и душевых кабин',
    ],
    benefits: [
      'Продуманное расположение точек',
      'Защита мокрых зон',
      'Проверка систем перед сдачей',
    ],
  },
}

const statIcons = [ClockIcon, CurrencyDollarIcon, ShieldCheckIcon]

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <div className="bg-white">
        <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Услуга не найдена</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Такой услуги нет</h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">Возможно, ссылка устарела или была введена с ошибкой.</p>
          <Link to="/" className="mt-10 inline-flex items-center justify-center rounded-lg bg-gray-900 px-7 py-3 text-base font-semibold text-white hover:bg-gray-800">
            Вернуться к услугам
          </Link>
        </section>
      </div>
    )
  }

  const stats = [
    { label: 'Сроки', value: service.timeline },
    { label: 'Стоимость', value: service.price },
    { label: 'Гарантия', value: service.warranty },
  ]

  return (
    <div className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white">
              <ArrowLeftIcon className="h-4 w-4" />
              Все услуги
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">{service.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">{service.lead}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-gray-950 hover:bg-gray-100">
                Рассчитать стоимость
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a href="tel:+70000000000" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10">
                Позвонить
              </a>
            </div>
          </div>
          <div className="self-end rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">Кратко</p>
            <p className="mt-4 text-2xl font-semibold leading-9 text-white">{service.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat, index) => {
                const Icon = statIcons[index]
                return (
                  <div key={stat.label} className="flex items-center gap-4 rounded-xl bg-white p-4 text-gray-900">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${service.accent} text-white`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-sm text-gray-500">{stat.label}</span>
                      <span className="block text-lg font-bold">{stat.value}</span>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Состав работ</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">Что входит в услугу</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">Собираем работы в понятные этапы, чтобы до старта было ясно, за что вы платите и какой результат получите.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.points.map((point) => (
              <div key={point} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <CheckCircleIcon className="h-7 w-7 text-emerald-600" />
                <p className="mt-4 text-lg font-semibold text-gray-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Преимущества</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">Почему это удобно</h2>
              <div className="mt-8 space-y-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-4 rounded-2xl bg-gray-50 p-5">
                    <SparklesIcon className="h-6 w-6 flex-none text-emerald-600" />
                    <p className="text-base font-medium text-gray-800">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gray-950 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Процесс</p>
              <h2 className="mt-3 text-3xl font-bold">Как проходит работа</h2>
              <div className="mt-8 space-y-5">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br ${service.accent} text-sm font-bold`}>
                      {index + 1}
                    </span>
                    <p className="pt-1 text-lg text-gray-100">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Начнем с оценки</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">Расскажите, что нужно сделать</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">Мы уточним детали, предложим оптимальный состав работ и подготовим понятную смету.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800">
              Обсудить проект
            </Link>
            <Link to="/" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-100">
              Смотреть все услуги
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
