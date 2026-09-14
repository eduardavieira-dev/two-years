'use client'

import { Menu01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'

const links = [
  { label: 'Mensagem', href: '#mensagem' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Nosso propósito', href: '#proposito' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between border border-white/15 bg-[#160913]/60 px-5 py-3 text-white shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl rounded-full">
        <a
          href="#mensagem"
          className="text-sm font-semibold tracking-[0.18em] text-rose-100 uppercase py-2"
        >
          Artur &amp; Eduarda
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-md font-medium text-rose-100/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="grid size-9 place-items-center border border-white/15 text-rose-100 transition-colors hover:bg-white/10 md:hidden rounded-full"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <HugeiconsIcon icon={Menu01Icon} size={20} />
        </button>
      </div>
      {menuOpen && (
        <nav
          className="mx-4 mt-2 flex flex-col gap-1 border border-white/15 bg-[#160913]/85 p-3 text-white shadow-xl backdrop-blur-xl sm:mx-6 md:hidden"
          aria-label="Navegação móvel"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-sm text-rose-100/80 hover:bg-white/10 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
