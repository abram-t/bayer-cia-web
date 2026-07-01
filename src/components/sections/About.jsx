import { siteData } from '../../data/siteData'
import Reveal from '../ui/Reveal'

function About() {
  const { about } = siteData

  return (
    <section id="nosotros" className="bg-white py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div>
              <p className="section-eyebrow">{about.eyebrow}</p>
              <h2 className="section-title mt-3">{about.title}</h2>

              <p className="mt-5 text-base leading-7 text-[#5f6b7a]">
                {about.description}
              </p>

              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] border border-[#d8dee6] bg-[#f7f9fb] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#546b8c]">
                    Nuestra misión
                  </p>
                  <p className="mt-3 leading-7 text-[#5f6b7a]">
                    {about.mission}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[#d8dee6] bg-[#f7f9fb] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#546b8c]">
                    Nuestra visión
                  </p>
                  <p className="mt-3 leading-7 text-[#5f6b7a]">
                    {about.vision}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#d8dee6] bg-white p-4 text-sm font-bold text-[#546b8c] shadow-sm"
                  >
                    <span className="mr-2">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-[#d8dee6] bg-[#f7f9fb] p-5 shadow-sm">
              <div className="rounded-[1.5rem] bg-[#546b8c] p-6 text-white shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-white/75">
                  Equipo
                </p>

                <div className="mt-5 grid gap-4">
                  {about.team.map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#546b8c]">
                        {member.initials}
                      </div>

                      <div>
                        <h3 className="font-black text-white">{member.name}</h3>
                        <p className="mt-1 text-sm text-white/75">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-dashed border-white/25 bg-white/10 p-5 text-center">
                  <p className="text-sm font-bold text-white">
                    Equipo especializado para atención técnica directa
                  </p>
                  <p className="mt-2 text-xs text-white/65">
                    Se puede reemplazar por una fotografía corporativa oficial.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About