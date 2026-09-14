import { GithubIcon, InstagramIcon, Linkedin01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05030b]/60 px-6 py-10 text-center text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <p className="max-w-xl text-sm leading-6 text-rose-100/75">
          Uma pequena homenagem aos nossos dois anos de namoro, celebrando cada momento, cada
          lembrança e tudo que ainda vamos viver juntos.
        </p>
        <nav aria-label="Redes sociais" className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/eduardavieira.dev"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Eduarda Vieira"
            className="text-rose-100/70 transition-colors hover:text-pink-500"
          >
            <HugeiconsIcon icon={InstagramIcon} size={24} />
          </a>
          <a
            href="https://github.com/eduardavieira-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Eduarda Vieira"
            className="text-rose-100/70 transition-colors hover:text-pink-500"
          >
            <HugeiconsIcon icon={GithubIcon} size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Eduarda Vieira"
            className="text-rose-100/70 transition-colors hover:text-pink-500"
          >
            <HugeiconsIcon icon={Linkedin01Icon} size={24} />
          </a>
        </nav>
        <p className="text-xs text-white/45">Desenvolvido por Eduarda Vieira</p>
      </div>
    </footer>
  )
}
