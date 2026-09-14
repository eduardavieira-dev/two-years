import { Baby02Icon, ChurchIcon, HeartAddIcon, WeddingIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

const purposes = [
  {
    icon: ChurchIcon,
    title: 'Seguir a Jesus',
    text: 'Caminhar lado a lado na fé, aprendendo a amar com paciência, servir com alegria e colocar Deus no centro da nossa casa.',
  },
  {
    icon: WeddingIcon,
    title: 'Construir um casamento',
    text: 'Transformar o nosso amor em aliança, escolhendo um ao outro todos os dias e criando um lar cheio de respeito, cuidado e verdade.',
  },
  {
    icon: Baby02Icon,
    title: 'Ter uma família',
    text: 'Quando chegar o momento, compartilhar a vida com filhos e ensinar a eles o amor, a fé e a ternura que hoje estamos construindo.',
  },
]

export default function PurposeSection() {
  return (
    <section id="proposito" className="relative z-10 scroll-mt-24 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center text-white">
          <p className="mb-3 text-sm font-medium tracking-[0.22em] text-rose-200/70 uppercase">
            Nosso propósito
          </p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Um amor que florece
          </h2>
          <p className="mt-5 text-lg leading-8 text-rose-100/70">
            Mais do que sonhar juntos, queremos viver com significado e construir uma história que
            honre aquilo em que acreditamos.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {purposes.map((purpose) => (
            <article
              key={purpose.title}
              className="group border border-white/15 bg-[#190b14]/55 p-7 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 rounded-2xl"
            >
              <div className="mb-8 grid size-12 place-items-center border border-rose-200/20 bg-rose-300/10 text-rose-200 transition-colors group-hover:bg-rose-300/20 rounded-md">
                <HugeiconsIcon icon={purpose.icon} size={25} />
              </div>
              <h3 className="text-2xl font-bold">{purpose.title}</h3>
              <p className="mt-4 text-base leading-7 text-rose-100/70">{purpose.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
