import React from 'react'

export default function ContactPage() {
  return (
    <main className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-base font-semibold text-indigo-600">Контакты</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Свяжитесь с нами
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Оставьте заявку, и мы ответим в ближайшее время. Рассчитаем смету и предложим удобный план работ.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Наши реквизиты</h2>
            <dl className="mt-8 space-y-6 text-gray-600">
              <div>
                <dt className="font-semibold text-gray-900">Телефон</dt>
                <dd className="mt-2">+7 (999) 123-45-67</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Email</dt>
                <dd className="mt-2">info@stroibrigada.ru</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Адрес</dt>
                <dd className="mt-2">Москва, ул. Строителей, 12</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Форма заявки</h2>
            <form className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Имя</label>
                <input type="text" className="mt-2 block w-full rounded-3xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none" placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Телефон или email</label>
                <input type="text" className="mt-2 block w-full rounded-3xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none" placeholder="+7 999 123-45-67 или email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Сообщение</label>
                <textarea rows="4" className="mt-2 block w-full rounded-3xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none" placeholder="Расскажите о вашем проекте" />
              </div>
              <button type="submit" className="inline-flex w-full justify-center rounded-3xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
