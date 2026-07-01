import { siteData } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

function Services() {
  const { services } = siteData

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#f7f9fb] py-12 lg:py-14"
    >
      <div className="orbit-glow right-[-12rem] top-20 h-72 w-72 bg-[#a1b1cd]/25" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            eyebrow={services.eyebrow}
            title={services.title}
            description={services.description}
          />

          <Reveal delay={100}>
            <div className="mt-1 rounded-[2rem] border border-[#d8dee6] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#546b8c]">
                Nuestro enfoque
              </p>
              <p className="mt-3 leading-7 text-[#5f6b7a]">
                {services.focus}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.capabilities.map((item, index) => (
            <Reveal key={item} delay={index * 50}>
              <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-[#d8dee6] bg-white px-4 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-black text-[#546b8c]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4">
          {services.process.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group rounded-[1.6rem] border border-[#d8dee6] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a1b1cd] hover:shadow-xl">
                <div className="grid gap-4 md:grid-cols-[auto_0.75fr_1.25fr] md:items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ebeef1] text-sm font-black text-[#546b8c] transition group-hover:bg-[#546b8c] group-hover:text-white">
                    {item.number}
                  </span>

                  <h3 className="text-lg font-black text-[#1f2937]">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-[#5f6b7a]">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-[2rem] bg-[#546b8c] p-7 text-white shadow-2xl shadow-[#546b8c]/20">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
                  Servicio técnico integral
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight">
                  Mantención, reparación, puesta en marcha, insumos y equipos.
                </h3>
              </div>

              <Button href="#cotizar" variant="light">
                Consultar servicio
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Services