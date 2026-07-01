import { siteData } from '../../data/siteData'

function Footer() {
  const { company, navigation } = siteData
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-[#2f3e52] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                  <img
                    src={company.logoSymbol}
                    alt={`Logo ${company.name}`}
                    className="h-full w-full object-contain"
                  />
                </span>

                <div>
                  <h2 className="text-xl font-black text-white">
                    {company.name}
                  </h2>
                  <p className="mt-1 max-w-md text-sm leading-6 text-white/70">
                    {company.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Mantención, reparación, puesta en marcha e insumos para
                laboratorios mineralógicos y geológicos en Chile y el
                extranjero.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/75">
                  Servicio técnico
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/75">
                  Insumos
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/75">
                  Chile y extranjero
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white/60">
                Navegación
              </h3>

              <div className="mt-5 grid gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-semibold text-white/75 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white/60">
                Contacto
              </h3>

              <div className="mt-5 grid gap-3">
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {company.email}
                </a>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {company.phone}
                </a>

                <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80">
                  {company.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {company.name} © {company.foundedYear}–{currentYear}. Servicio
            técnico de laboratorio.
          </p>

          <p>Chile y extranjero · Bayer y Cía. Ltda</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer