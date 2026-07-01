import { useState } from 'react'
import { siteData } from '../../data/siteData'
import Button from '../ui/Button'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { company, navigation } = siteData

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d8dee6] bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="#" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[#ebeef1] p-1.5 ring-1 ring-[#d8dee6]">
            <img
              src={company.logoSymbol}
              alt={`Logo ${company.name}`}
              className="h-full w-full object-contain"
            />
          </span>

          <span>
            <span className="block text-sm font-black tracking-wide text-[#1f2937]">
              {company.name}
            </span>
            <span className="hidden max-w-80 text-xs font-medium text-[#627c99] sm:block">
              {company.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold text-[#546b8c] transition hover:text-[#1f2937]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            WhatsApp
          </Button>

          <Button href="#cotizar" variant="primary">
            Cotizar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8dee6] text-[#546b8c] lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-xl">{isOpen ? '×' : '☰'}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#d8dee6] bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-sm font-bold text-[#546b8c]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#cotizar"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-[#546b8c] px-5 py-3 text-center text-sm font-black text-white"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar