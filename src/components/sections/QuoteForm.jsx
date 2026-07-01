import { siteData } from '../../data/siteData'
import Reveal from '../ui/Reveal'

function QuoteForm() {
  const { quote, company } = siteData

  const contactItems = [
    {
      label: 'Correo directo',
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      label: 'WhatsApp',
      value: company.phone,
      href: `https://wa.me/${company.whatsapp}`,
    },
    {
      label: 'Cobertura',
      value: company.location,
      href: null,
    },
  ]

  return (
    <section
      id="cotizar"
      className="relative overflow-hidden bg-[#ebeef1] py-10 lg:py-12"
    >
      <div className="absolute inset-0 premium-grid opacity-25" />
      <div className="orbit-glow left-[-10rem] top-10 h-64 w-64 bg-[#a1b1cd]/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-7 max-w-3xl">
            <p className="section-eyebrow">{quote.eyebrow}</p>

            <h2 className="section-title mt-3">
              {quote.title}
            </h2>

            <p className="section-description mt-4">
              {quote.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/95 shadow-2xl shadow-[#546b8c]/15 backdrop-blur">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <form
                action={quote.formspreeEndpoint}
                method="POST"
                className="p-6 lg:p-8"
              >
                <div className="mb-6 rounded-[1.5rem] border border-[#d8dee6] bg-[#f7f9fb] px-5 py-4">
                  <p className="text-sm font-black text-[#546b8c]">
                    Completa los datos y describe tu requerimiento técnico. Con
                    esta información podremos orientar mejor la evaluación
                    inicial.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="name">
                      Nombre completo *
                    </label>
                    <input
                      className="form-input"
                      id="name"
                      name="Nombre completo"
                      type="text"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="company">
                      Empresa / Institución *
                    </label>
                    <input
                      className="form-input"
                      id="company"
                      name="Empresa o institución"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="email">
                      Correo electrónico *
                    </label>
                    <input
                      className="form-input"
                      id="email"
                      name="Correo electrónico"
                      type="email"
                      placeholder="juan@empresa.cl"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="country">
                      País / Ubicación *
                    </label>
                    <input
                      className="form-input"
                      id="country"
                      name="País o ubicación"
                      type="text"
                      placeholder="Chile"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="equipment">
                      Equipo, insumo o modelo *
                    </label>
                    <input
                      className="form-input"
                      id="equipment"
                      name="Equipo, insumo o modelo"
                      type="text"
                      placeholder="Ej: equipo con falla, insumo requerido..."
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="message">
                      Descripción del requerimiento *
                    </label>
                    <textarea
                      className="form-input min-h-28 resize-y"
                      id="message"
                      name="Descripción del requerimiento"
                      placeholder="Describe el problema, la necesidad técnica o el insumo que buscas..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-full bg-[#546b8c] px-7 py-4 text-sm font-black text-white shadow-lg shadow-[#546b8c]/20 transition hover:-translate-y-0.5 hover:bg-[#435772]"
                >
                  Enviar solicitud →
                </button>

                <p className="mt-3 text-center text-xs text-[#7b8b94]">
                  El formulario quedará activo cuando se reemplace el endpoint
                  de Formspree.
                </p>
              </form>

              <aside className="border-t border-[#d8dee6] bg-[#546b8c] p-6 text-white lg:border-l lg:border-t-0 lg:p-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
                  Contacto directo
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em]">
                  Hablemos de tu requerimiento técnico
                </h3>

                <p className="mt-4 leading-7 text-white/75">
                  También puedes escribir directamente por correo o WhatsApp
                  para explicar tu caso antes de completar una cotización.
                </p>

                <div className="mt-6 grid gap-3">
                  {contactItems.map((item) =>
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={item.label === 'WhatsApp' ? 'noreferrer' : undefined}
                        className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 transition hover:bg-white/15"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-black text-white">
                          {item.value}
                        </p>
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-black text-white">
                          {item.value}
                        </p>
                      </div>
                    ),
                  )}
                </div>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#546b8c] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#ebeef1]"
                >
                  Escribir por WhatsApp →
                </a>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default QuoteForm