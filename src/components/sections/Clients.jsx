import { siteData } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

function Clients() {
  const { clients, allies } = siteData

  return (
    <section id="clientes" className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={clients.eyebrow}
          title={clients.title}
          description={clients.description}
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {clients.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="group h-full rounded-[1.8rem] border border-[#d8dee6] bg-[#f7f9fb] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a1b1cd] hover:bg-white hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ebeef1] text-sm font-black text-[#546b8c] ring-1 ring-[#d8dee6] transition group-hover:bg-[#546b8c] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-[#1f2937]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#5f6b7a]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d8dee6] bg-[#546b8c] p-7 text-white shadow-2xl shadow-[#546b8c]/20">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
                  {allies.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                  {allies.title}
                </h3>

                <p className="mt-4 leading-7 text-white/75">
                  {allies.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {allies.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-bold text-white backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Clients