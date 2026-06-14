import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../store/slices/languageSlice'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const services = [
  { name: 'Косметический ремонт', description: 'Обновление интерьера без перепланировки', to: '/cosmetic-remont', icon: ChartPieIcon },
  { name: 'Капитальный ремонт', description: 'Полная реконструкция помещений', to: '/capital-renovation', icon: CursorArrowRaysIcon },
  { name: 'Дизайнерский ремонт', description: 'Индивидуальный дизайн и премиум материалы', to: '/dizajnersky-remont', icon: FingerPrintIcon },
  { name: 'Плиточные работы', description: 'Укладка плитки и камня', to: '/plitocnye-raboty', icon: SquaresPlusIcon },
  { name: 'Электрика и Сантехника', description: 'Электромонтаж и сантехнические услуги', to: '/elektrika-santehnika', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Связаться', to: '/contact', icon: PhoneIcon },
  { name: 'Портфолио', to: '/portfolio', icon: PlayCircleIcon },
]

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const currentLanguage = useSelector((state) => state.language.current)
  const dispatch = useDispatch()

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">СтройБригада</span>
            <span className="text-2xl font-bold text-gray-900">СтройБригада</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus:outline-none">
              Услуги
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <Popover.Button
                    as={Link}
                    key={item.name}
                    to={item.to}
                    className="group relative flex w-full items-center gap-x-6 rounded-lg p-4 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <span className="block font-semibold text-gray-900">{item.name}</span>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </Popover.Button>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Popover.Button
                    as={Link}
                    key={item.name}
                    to={item.to}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </Popover.Button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to="/portfolio" className="text-sm/6 font-semibold text-gray-900">
            Портфолио
          </Link>
          <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
            О нас
          </Link>
          <Link to="/contact" className="text-sm/6 font-semibold text-gray-900">
            Контакты
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus:outline-none">
              {languages.find(lang => lang.code === currentLanguage)?.flag}
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 z-10 mt-3 w-48 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => dispatch(setLanguage(lang.code))}
                    className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none"
                  >
                    <span>{lang.flag}</span>
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition data-closed:translate-x-full data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">СтройБригада</span>
              <img
                alt="СтройБригада"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none">
                    Услуги
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel
                    transition
                    className="mt-2 space-y-2 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                  >
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Портфолио
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  О нас
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Контакты
                </Link>
              </div>
              <div className="py-6">
                <div className="space-y-2">
                  <p className="text-base font-semibold text-gray-900">Выберите язык:</p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => dispatch(setLanguage(lang.code))}
                      className={`flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50 focus:outline-none ${
                        currentLanguage === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900'
                      }`}
                    >
                      <span>{lang.flag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
