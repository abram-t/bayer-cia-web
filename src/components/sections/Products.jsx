import { siteData } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

function Products() {
  const { products } = siteData

  return (
    <section id="productos" className="relative overflow-hidden bg-[#ebeef1] py-14 lg:py-16">
      <div className="absolute inset-0 premium-grid opacity-45" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow={products.eyebrow}
            title={products.title}
            description={products.description}
          />

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#546b8c]">
                Bajo pedido
              </p>
              <p className="mt-3 leading-7 text-[#5f6b7a]">
                {products.note}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.items.map((product, index) => (
            <Reveal key={product.name} delay={index * 80}>
              <article className="premium-hover group h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-xl shadow-[#546b8c]/10 backdrop-blur">S
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f9fb]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f7f9fb] to-[#d8dee6] p-6">
                      <div className="rounded-2xl border border-[#bcc7d4] bg-white/75 px-5 py-6 text-center">
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#546b8c]">
                          Bajo consulta
                        </p>
                        <p className="mt-3 text-sm font-bold text-[#5f6b7a]">
                          Imagen referencial pendiente
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#546b8c] shadow-sm">
                    Producto
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black tracking-tight text-[#1f2937]">
                    {product.name}
                  </h3>

                  <p className="mt-3 leading-7 text-[#5f6b7a]">
                    {product.description}
                  </p>

                  <p className="mt-4 rounded-2xl border border-[#d8dee6] bg-[#f7f9fb] px-4 py-3 text-sm font-bold text-[#546b8c]">
                    {product.measures}
                  </p>

                  <Button href="#cotizar" variant="secondary" className="mt-5 w-full">
                    Consultar producto
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-[2rem] border border-[#d8dee6] bg-white/90 p-7 shadow-sm backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#546b8c]">
                  ¿Necesitas algo diferente?
                </p>
                <p className="mt-3 leading-7 text-[#5f6b7a]">
                  Completa el formulario y revisamos disponibilidad de insumos,
                  equipos u otros requerimientos técnicos.
                </p>
              </div>

              <Button href="#cotizar" variant="primary">
                Completar formulario
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Products