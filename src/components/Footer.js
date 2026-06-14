import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-white">СтройБригада</h3>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Надёжный ремонт и отделка в Аликанте и ближайших районах. Работаем с частными и коммерческими объектами — от консультации до сдачи под ключ.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Где работаем</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Аликанте</li>
              <li>Бенидорм</li>
              <li>Эльче</li>
              <li>Сан-Хуан</li>
              <li>Торревьеха</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Контакты</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>📞 <a href="tel:+70000000000" className="text-white hover:text-emerald-300">+7 (000) 000-00-00</a></p>
              <p>✉ <a href="mailto:info@example.com" className="text-white hover:text-emerald-300">info@example.com</a></p>
              <p>🕒 Работаем 7 дней в неделю</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Заказать смету
              </Link>
              <Link
                to="/portfolio"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Смотреть портфолио
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} СтройБригада. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
