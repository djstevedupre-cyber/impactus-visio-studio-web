export default function Home() {
  const services = [
    {
      title: "Producción audiovisual con dron",
      text: "Tomas aéreas impactantes para marcas, inmobiliarias, turismo, eventos, constructoras y contenido comercial que necesite una imagen poderosa.",
    },
    {
      title: "Edición de video profesional",
      text: "Transformamos tus grabaciones en piezas visuales modernas, dinámicas y orientadas a captar atención, vender y posicionar tu negocio.",
    },
    {
      title: "Voz en off para comerciales",
      text: "Grabación de voz profesional para anuncios, videos empresariales, reels, campañas digitales, presentaciones y piezas promocionales.",
    },
    {
      title: "Videos empresariales",
      text: "Creamos contenido visual para mostrar procesos, instalaciones, testimonios, servicios y el valor real de tu empresa de manera profesional.",
    },
    {
      title: "Contenido para redes sociales",
      text: "Piezas diseñadas para Instagram, TikTok, Facebook y campañas digitales con enfoque visual, emocional y comercial.",
    },
    {
      title: "Cobertura de eventos",
      text: "Registro audiovisual de eventos sociales, corporativos, activaciones, lanzamientos y experiencias en vivo con acabado premium.",
    },
  ];

  const strengths = [
    "Contenido que atrae clientes",
    "Imagen premium y moderna",
    "Tomas aéreas de alto impacto",
    "Entrega rápida de 24 a 48 horas",
    "Producción visual y comercial",
    "Cobertura en Bogotá y alrededores",
  ];

  const process = [
    "Escuchamos tu idea o necesidad",
    "Te proponemos una solución visual clara",
    "Grabamos o producimos el material",
    "Editamos con enfoque comercial",
    "Entregamos una pieza lista para publicar o vender",
  ];

  const contentIdeas = [
    "Videos para negocios y marcas",
    "Reels comerciales",
    "Contenido empresarial",
    "Tomas aéreas con dron",
    "Voz en off para campañas",
    "Cobertura visual de eventos",
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white">
      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-impactus.png"
              alt="Impactus Visio Studio"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-cyan-300/20"
            />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
                Impactus Visio
              </p>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
                Studio
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a href="#inicio" className="transition hover:text-cyan-300">
              Inicio
            </a>
            <a href="#servicios" className="transition hover:text-cyan-300">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-cyan-300">
              Proceso
            </a>
            <a href="#contenido" className="transition hover:text-cyan-300">
              Contenido
            </a>
            <a href="#contacto" className="transition hover:text-cyan-300">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative mx-auto mt-6 max-w-7xl overflow-hidden rounded-[2.5rem] border border-cyan-400/10 px-6 pb-20 pt-14 shadow-[0_0_60px_rgba(0,140,255,0.08)] md:px-10 md:pt-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,183,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(96,60,255,0.20),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.50),rgba(0,0,0,0.88))]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
                Producción visual que impacta y vende
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
                Contenido audiovisual para marcas, negocios y eventos que
                quieren verse realmente profesionales.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                En Impactus Visio Studio creamos contenido con dron, edición de
                video, voz en off y piezas audiovisuales empresariales para
                ayudarte a captar atención, generar confianza y atraer clientes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/573157790101"
                  className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]"
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/82 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex justify-center">
                  <img
                    src="/logo-impactus.png"
                    alt="Logo Impactus Visio Studio"
                    className="h-auto w-full max-w-[460px] drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                  />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-300/10 bg-black/25 p-4">
                    <p className="text-sm text-white/45">Especialidad</p>
                    <p className="mt-1 font-semibold text-white">
                      Contenido comercial y audiovisual
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/10 bg-black/25 p-4">
                    <p className="text-sm text-white/45">Enfoque</p>
                    <p className="mt-1 font-semibold text-white">
                      Imagen que conecta y vende
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/10 bg-black/25 p-4">
                    <p className="text-sm text-white/45">Servicios</p>
                    <p className="mt-1 font-semibold text-white">
                      Dron, edición, voz y video
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/10 bg-black/25 p-4">
                    <p className="text-sm text-white/45">Ubicación</p>
                    <p className="mt-1 font-semibold text-white">
                      Bogotá
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/62">
                  Una marca creada para ayudar a negocios, eventos y empresas a
                  verse más potentes, más confiables y más memorables en redes y
                  en su comunicación visual.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Servicios
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Soluciones visuales para mostrar mejor tu negocio.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Diseñamos contenido orientado a resultados, pensado para generar
              impacto visual, posicionamiento y atracción de clientes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/25 transition hover:-translate-y-1 hover:border-cyan-300/20"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
                  Impactus
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/68">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 md:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                Nuestro proceso
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Hacemos que tu idea se vea profesional y lista para generar
                resultados.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                No se trata solo de grabar. Se trata de construir una pieza
                visual con intención, estética y estrategia para que tu marca
                comunique mejor.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/10 bg-cyan-300/10 p-7">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">
                Cómo trabajamos
              </p>
              <div className="mt-5 space-y-3">
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white/88"
                  >
                    <span className="mr-2 font-bold text-cyan-300">
                      {index + 1}.
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contenido" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                  Contenido ideal
                </p>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Qué tipo de contenido podemos crear para tu marca.
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  Desde piezas rápidas para redes hasta producciones más
                  comerciales o empresariales, adaptamos la idea al objetivo de
                  tu negocio.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contentIdeas.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 text-white/85"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-blue-500/10 p-8 shadow-2xl shadow-black/20 md:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Presencia digital
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-5xl">
              Tu perfil y tu contenido deben trabajar como un vendedor silencioso
              para atraer clientes.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
              Por eso creamos contenido visual que no solo se vea bien, sino que
              también transmita confianza, profesionalismo, emoción y valor
              comercial desde el primer segundo.
            </p>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.05] to-transparent p-8 shadow-2xl shadow-black/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                  Contacto
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
                  Si quieres contenido que haga ver mejor tu negocio, hablemos.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  Escríbenos y te mostramos una idea visual pensada para tu
                  marca, empresa, evento o proyecto.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold">Datos de contacto</h3>
                <div className="mt-6 space-y-4 text-white/85">
                  <p>
                    <span className="text-white/45">WhatsApp:</span> +57 300 000 0000
                  </p>
                  <p>
                    <span className="text-white/45">Instagram:</span> @impactusvisio
                  </p>
                  <p>
                    <span className="text-white/45">Correo:</span> impactusvisio@gmail.com
                  </p>
                  <p>
                    <span className="text-white/45">Ciudad:</span> Bogotá
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/573157790101"
                    className="rounded-2xl bg-cyan-300 px-5 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/impactus.visio.studio"
                    className="rounded-2xl border border-white/15 px-5 py-3 text-center font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Ver Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
        <p>© 2026 Impactus Visio Studio. Producción audiovisual y contenido comercial.</p>
      </footer>
    </div>
  );
}