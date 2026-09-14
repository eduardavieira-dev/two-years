'use client'
import DotField from '@/components/DotField'
import AnimatedHeart from '@/components/AnimatedHeart'
import Header from '@/components/Header'
import PrismaticBurst from '@/components/PrismaticBurst'
import PurposeSection from '@/components/PurposeSection'
import StorySection from '@/components/StorySection'
import { GithubIcon, InstagramIcon, Linkedin01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,#3a0a20_0%,#120713_38%,#05030b_78%)]">
      <Header />
      <div className="pointer-events-none absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={10}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(255, 150, 178, 0.42)"
          gradientTo="rgba(116, 42, 68, 0.32)"
          glowColor="rgba(180, 55, 87, 0.38)"
        />
      </div>

      <section
        id="mensagem"
        className="relative z-10 flex min-h-screen w-full scroll-mt-24 items-center justify-center"
      >
        <div className="absolute inset-0 -z-10">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={0}
            mixBlendMode="lighten"
            colors={['#ff007a', '#ff3d54', '#ff3939']}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-76 bg-linear-to-b from-transparent via-[#05030b]/35 to-[#05030b]/90"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center text-white">
          <p className="max-w-[min(90vw,42rem)] text-center text-4xl font-bold">
            Em comemoração aos nossos 2 anos de namoro
          </p>
          <AnimatedHeart />
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <img
            src="/we.JPG"
            alt="Foto do casal"
            className="aspect-4/3 w-full border border-rose-200/20 object-cover bg-[linear-gradient(135deg,rgba(255,115,159,0.22),rgba(20,5,16,0.72))] shadow-[0_24px_80px_rgba(255,49,95,0.16)]"
          />
          <div className="text-center text-white md:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-rose-200/70">
              Para o meu Artur
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Eu escolho você hoje, amanhã e sempre
            </h2>
            <p className="mt-6 text-lg leading-8 text-rose-100/75">
              Artur, você é o melhor namorado que eu poderia desejar, você faz a minha vida mais
              feliz e completa. Eu sou grata por cada momento que passamos juntos e por tudo que
              ainda vamos viver. Eu te amo mais do que palavras podem expressar.
            </p>
          </div>
        </div>
      </section>

      <StorySection />
      <PurposeSection />

      <footer className="relative z-10 border-t border-white/10 bg-[#05030b]/60 px-6 py-10 text-center text-white backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <p className="max-w-xl text-sm leading-6 text-rose-100/75">
            Uma pequena homenagem aos nossos dois anos de namoro, celebrando cada momento, cada
            lembrança e tudo que ainda vamos viver juntos.
          </p>
          <nav aria-label="Redes sociais" className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/eduardavieira"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Eduarda Vieira"
              className="text-rose-100/70 transition-colors hover:text-white"
            >
              <HugeiconsIcon icon={InstagramIcon} size={24} />
            </a>
            <a
              href="https://github.com/eduardavieira"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Eduarda Vieira"
              className="text-rose-100/70 transition-colors hover:text-white"
            >
              <HugeiconsIcon icon={GithubIcon} size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardavieira"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Eduarda Vieira"
              className="text-rose-100/70 transition-colors hover:text-white"
            >
              <HugeiconsIcon icon={Linkedin01Icon} size={24} />
            </a>
          </nav>
          <p className="text-xs text-white/45">Desenvolvido por Eduarda Vieira</p>
        </div>
      </footer>
    </main>
  )
}
