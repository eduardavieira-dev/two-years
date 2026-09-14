'use client'

import {
  ArrowLeft05Icon,
  ArrowRight02Icon,
  Calendar02Icon,
  CancelCircleIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Story = {
  date: string
  title: string
  message: string
  image: string
  alt: string
}

const stories: Story[] = [
  {
    date: 'Julho de 2024',
    title: 'Quando tudo começou',
    message:
      'A Julinha nos apresentou e você me chamou no instagram. Começamos a conversar sobre JavaScript. E tão rápido quando começou começamos a almoçar juntos e a nos conhecer melhor. E desde então não paramos mais de nos encontrar.',
    image: '/nos-dois/puc1.JPG',
    alt: 'Nosso primeiro capítulo juntos',
  },
  {
    date: 'Setembro de 2024',
    title: 'O pedido💍',
    message:
      'Depois de conhecermos a família um do outro e você conversar com meu pai, você me pediu em namoro. Nunca vou esquecer daquele momento, foi tão lindo e atencioso! O pedido foi uma surpresa e eu fiquei muito feliz. E desde então começamos a escrever nossa história juntos.',
    image: '/nos-dois/pedido.jpg',
    alt: 'O pedido de namoro',
  },
  {
    date: 'Outubro de 2024',
    title: 'O anuncio do namoro',
    message:
      'Lembro quando começamos a namorar e contamos para as pessoas. Foi muito legal viver tudo isso com você. De todas as pessoas desse mundo eu não poderia ter escolhido melhor a pessoa para estar ao meu lado.',
    image: '/nos-dois/zion.JPG',
    alt: 'O anuncio do namoro',
  },
  {
    date: 'Outubro de 2024',
    title: 'Meu batizado',
    message:
      'O batizado é um momento inesquecivel na vida de um cristão, e foi muito bom ter você comigo nesse momento tão especial. Eu me senti muito feliz e abençoada por ter você ao meu lado, e por poder compartilhar esse momento com você.',
    image: '/nos-dois/batizado.jpg',
    alt: 'Meu batizado',
  },
  {
    date: 'Janeiro de 2025',
    title: 'Nossas viagens',
    message:
      'Nossas viagens conhecendo a Serra do cipó foram muito legais, eu gostei muito de passar esse tempo com você, e de conhecer lugares novos.',
    image: '/nos-dois/serra.jpg',
    alt: 'Nossas viagens',
  },
  {
    date: 'Fevereiro de 2025',
    title: 'Quando você me deu o Poof',
    message:
      'Lembra quando a gente ficou obcecado com padrinhos mágicos e você me deu o Poof? Foi um dos melhores presentes que eu já ganhei, eu amei muitoooo! Além disso nessa foi época que você trocou de curso e veio fazer Engenharia de Software comigo.',
    image: '/nos-dois/poof.jpg',
    alt: 'Quando você me deu o Poof',
  },
  {
    date: 'Junho de 2025',
    title: 'Primeiro dia dos namorados',
    message:
      'Passamos o dia juntos e fomos almoçar no outback com essas blusas combinando, foi brega, mas muito divertido! Eu gostei muito desse dia porque foi a realização de um sonho passar o dia dos namorados namorando com você!',
    image: '/nos-dois/primeiro-n.jpg',
    alt: 'Primeiro dia dos namorados',
  },
  {
    date: 'Setembro de 2025',
    title: 'Um ano de namoro',
    message:
      'Passou tão rápido, mas já parecia que você estava na minha vida há muito tempo. Eu me sinto muito feliz por ter você ao meu lado e por poder compartilhar todos os momentos da minha vida com você. Eu te amo muito e espero que possamos passar muitos anos juntos.',
    image: '/nos-dois/um-ano.jpg',
    alt: 'Um ano de namoro',
  },
  {
    date: 'Outubro de 2025',
    title: 'Devfest',
    message:
      'Você fez um workshop de Docker no Devfest e foi muito legal, me senti muito orgulhosa de ter uma namorado tão inteligente e talentoso. Eu gostei muito de te ver apresentando e compartilhando seu conhecimento com outras pessoas. Além de poder participar de outras atividades do Devfest com você, de longe o meu evento tech preferido.',
    image: '/nos-dois/devfest.jpg',
    alt: 'Devfest',
  },
  {
    date: 'Dezembro de 2025',
    title: 'Primeiro ano novo juntos',
    message:
      'Eu finalmente conheci a cidade que voce tanto falava e eu gostei muito de conhecer Macaé, apesar de que na segunda vez que fomos foi muito mais divertido. Eu gostei muito de passar o ano novo com você, e eu espero que possamos passar muitos anos novos juntos.',
    image: '/nos-dois/macae.jpg',
    alt: 'Nosso primeiro ano novo juntos',
  },
  {
    date: 'Fevereiro de 2026',
    title: 'Vox Conference 2026',
    message:
      'Fomos pela primeira vez na Vox Conference juntos e foi muito legal, eu gostei muito de conhecer o evento e de poder participar das atividades com você. Estar com a igreja foi bem legal, acredito que aproveitamos muito esses dias!',
    image: '/nos-dois/vox.jpg',
    alt: 'Vox Conference 2026',
  },
  {
    date: 'Junho de 2026',
    title: 'Festa Junina da DTI',
    message:
      'Foi muito bom ir na festa junina da DTI com você, eu gostei muito de dançar quadrilha com você e de comer comidas típicas. Valeu muito a pena ter ido, e eu espero que possamos ir em muitas outras festas juninas juntos.',
    image: '/nos-dois/dti.jpg',
    alt: 'Festa Junina da DTI',
  },
  {
    date: 'Junho de 2026',
    title: 'Segundo dia dos namorados',
    message:
      'Dessa vez fomos no FoodHouse, o lugar onde nós dois comemoramos nossos aniversários. Foi muito legal esse dia, sua companhia sempre faz tudo. ficar melhor!',
    image: '/nos-dois/segundo-n.jpg',
    alt: 'Segundo dia dos namorados',
  },
  {
    date: 'Julho de 2026',
    title: 'Rio de Janeiro',
    message:
      'Viajamos para o Rio de Janeiro e foi inesquecível assistir ao por do sol no Arpoador, as caminhadas na praia e o passeio no bondinho Santa Teresa. Eu gostei muito de conhecer mais o Rio de Janeiro com você, e eu espero que possamos conhecer muitas outras cidades juntos.',
    image: '/nos-dois/rj.jpg',
    alt: 'Rio de Janeiro',
  },
  {
    date: 'Setembro de 2026',
    title: 'Primeiro casamento que fomos juntos',
    message:
      'Gostei muito de ir no casamento da Cassi e poder compartilhar esse momento com você. Foi muito bom ter a sua companhia e pensar que um dia será nós dois no altar celebrando o que já de mais precioso que temos: o nosso amor. Eu espero que possamos ir em muitos outros casamentos juntos, e que um dia possamos celebrar o nosso casamento.',
    image: '/nos-dois/casamento.jpg',
    alt: 'Primeiro casamento que fomos juntos',
  },
  {
    date: 'Maio de 2025',
    title: 'Um novo capítulo',
    message:
      'Uma foto simbolica de algo que tem um grande signficado pra nós dois nesse momento. A primeira vez que visitamos essa empresa foi em um evento do Devfest e eu ganhei um mousepad do primo.dev no sorteio. E agora estamos cada dia mais perto do nosso primeiro dia na Hotmart como estagiarios. Meu primeiro estágio da vida e o seu na empresa que tanto admira! Não poderia ser melhor, que esse seja um tempo muito bom nas nossas vidas e carreiras! ',
    image: '/nos-dois/hotmart.jpg',
    alt: 'Hotmart, onde as coisas acontecem',
  },
]

export default function StorySection() {
  const [startIndex, setStartIndex] = useState(0)
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  const activeStory = stories[startIndex]
  const changeStory = (direction: number) => {
    setStartIndex((current) => (current + direction + stories.length) % stories.length)
  }

  useEffect(() => {
    if (!selectedStory) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedStory(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [selectedStory])

  return (
    <section id="historia" className="relative z-10 scroll-mt-24 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid min-w-0 items-center gap-10 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
          <div className="min-w-0 max-w-xl text-white">
            <p className="mb-3 text-sm font-medium tracking-[0.22em] text-rose-200/70 uppercase">
              Nossa história
            </p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Alguns dos nossos momento mais marcantes
            </h2>
            <p className="mt-5 text-lg leading-8 text-rose-100/70">
              Memórias que colecionamos ao longo dos dois anos que passamos juntos até aqui.
            </p>
          </div>

          <div className="relative min-w-0 border border-white/15 bg-[#190b14]/55 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-md sm:p-4">
            <button
              type="button"
              className="group relative block aspect-16/10 min-w-0 w-full overflow-hidden border border-white/15 text-left"
              onClick={() => setSelectedStory(activeStory)}
              aria-label={`Abrir detalhe: ${activeStory.title}`}
            >
              <img
                src={activeStory.image}
                alt={activeStory.alt}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#120710] via-[#120710]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="mb-2 flex items-center gap-2 text-xs text-rose-200/75">
                  <HugeiconsIcon icon={Calendar02Icon} size={15} />
                  {activeStory.date}
                </p>
                <h3 className="text-2xl font-bold sm:text-3xl">{activeStory.title}</h3>
                <p className="mt-2 text-xs text-rose-100/70">Clique para ler esta lembrança</p>
              </div>
            </button>
            <div className="mt-4 flex min-w-0 items-center gap-4">
              <div
                className="flex min-w-0 flex-1 items-center gap-3"
                aria-label="Posição do carrossel"
              >
                <div className="h-1.5 min-w-0 flex-1 bg-white/15" aria-hidden="true">
                  <span
                    className="block h-full bg-rose-300 transition-[width] duration-300"
                    style={{ width: `${((startIndex + 1) / stories.length) * 100}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs tabular-nums text-rose-100/60">
                  {startIndex + 1}/{stories.length}
                </span>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  className="grid size-10 place-items-center border border-white/15 text-white hover:bg-white/10 rounded-full rotate-180"
                  aria-label="Fotos anteriores"
                  onClick={() => changeStory(-1)}
                >
                  <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
                </button>
                <button
                  type="button"
                  className="grid size-10 place-items-center border border-white/15 text-white hover:bg-white/10 rounded-full"
                  aria-label="Próximas fotos"
                  onClick={() => changeStory(1)}
                >
                  <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedStory &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-60 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
            role="presentation"
            onClick={() => setSelectedStory(null)}
          >
            <div
              className="relative grid max-h-[88vh] max-w-[calc(100vw-2rem)] overflow-y-auto border border-white/20 bg-[#1a0b15] text-white shadow-2xl md:w-[min(56rem,calc(100vw-3rem))] md:grid-cols-[1fr_0.9fr]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="story-dialog-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex max-h-[72vh] min-h-0 items-center justify-center overflow-hidden bg-black/15 md:max-h-[78vh]">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.alt}
                  className="max-h-[72vh] w-full object-contain md:max-h-[78vh]"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <button
                  type="button"
                  className="absolute right-4 top-4 grid size-9 place-items-center  bg-black/30 text-white hover:bg-black/60"
                  aria-label="Fechar lembrança"
                  onClick={() => setSelectedStory(null)}
                >
                  <HugeiconsIcon icon={CancelCircleIcon} size={22} />
                </button>
                <p className="mb-3 flex items-center gap-2 text-sm text-rose-200/70">
                  <HugeiconsIcon icon={Calendar02Icon} size={17} />
                  {selectedStory.date}
                </p>
                <h3 id="story-dialog-title" className="text-3xl font-bold">
                  {selectedStory.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-rose-100/75">{selectedStory.message}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
