import { siteData } from '../../data/siteData'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

function Hero() {
  const { company, hero } = siteData

  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] pt-24">
      <div className="absolute inset-0 premium-grid opacity-60" />
      <div className="orbit-glow right-[-10rem] top-20 h-80 w-80 bg-[#a1b1cd]/40" />
      <div className="orbit-glow left-[-12rem] bottom-[-8rem] h-80 w-80 bg-[#546b8c]/20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_0.9fr] lg:py-14">
        <Reveal>
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d8dee6] bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[#546b8c]" />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#546b8c]">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.055em] text-[#1f2937] sm:text-5xl lg:text-[3.35rem]">
            {hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6b7a]">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Button href={hero.primaryButton.href} variant="primary">
              {hero.primaryButton.label}
            </Button>

            <Button href={hero.secondaryButton.href} variant="secondary">
              {hero.secondaryButton.label}
            </Button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hero.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="h-full rounded-2xl border border-[#d8dee6] bg-white/90 px-4 py-3 text-sm font-bold text-[#546b8c] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-[#1f2937]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#7b8b94]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.4rem] bg-white/75 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/80 bg-white/90 p-5 shadow-2xl shadow-[#546b8c]/15 backdrop-blur-xl">
              <div className="rounded-[1.9rem] border border-[#d8dee6] bg-[#ebeef1] p-5">
                <div className="rounded-[1.5rem] bg-white px-6 py-6 shadow-sm">
                <img
                  src={company.logoFull}
                  alt={`Logo ${company.name}`}
                  className="logo-breathe mx-auto h-36 w-full max-w-md object-contain"
                />
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-[#546b8c] p-6 text-white shadow-xl">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
                    {hero.flowTitle}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {hero.flow.map((item, index) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#546b8c]">
                            {index + 1}
                          </span>

                          <div>
                            <p className="text-sm font-black text-white">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-white/75">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero