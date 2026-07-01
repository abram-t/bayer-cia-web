import { siteData } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

function Coverage() {
  const { coverage } = siteData

  return (
    <section id="cobertura" className="relative overflow-hidden bg-[#f7f9fb] py-14 lg:py-16">
      <div className="orbit-glow right-[-10rem] top-20 h-72 w-72 bg-[#a1b1cd]/30" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <SectionHeader
              eyebrow={coverage.eyebrow}
              title={coverage.title}
              description={coverage.description}
            />

            <div className="mt-7 flex flex-wrap gap-3">
              {coverage.countries.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-[#d8dee6] bg-white px-5 py-2.5 text-sm font-black text-[#546b8c] shadow-sm"
                >
                  {country}
                </span>
              ))}
            </div>

            <Button href={coverage.cta.href} variant="primary" className="mt-7">
              {coverage.cta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] border border-[#d8dee6] bg-white p-5 shadow-xl shadow-[#546b8c]/10">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#546b8c] p-7 text-white">
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
              <div className="absolute bottom-6 right-6 h-32 w-32 rounded-full bg-[#a1b1cd]/25 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-white/75">
                  Mapa de cobertura
                </p>

                <div className="mt-6 rounded-[1.4rem] border border-white/15 bg-white/10 p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {coverage.countries.map((country) => (
                      <div
                        key={country}
                        className="rounded-2xl bg-white px-5 py-5 text-[#546b8c] shadow-sm"
                      >
                        <p className="text-sm font-black uppercase tracking-[0.2em]">
                          País
                        </p>
                        <p className="mt-2 text-2xl font-black text-[#1f2937]">
                          {country}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-sm leading-6 text-white/75">
                  Más adelante este bloque puede reemplazarse por una imagen de
                  mapa o una gráfica oficial de cobertura.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Coverage