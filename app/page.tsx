export default function Home() {
  const services = [
    {
      title: "Producción audiovisual con dron",
      text: "Tomas aéreas impactantes para marcas, constructoras, inmobiliarias, turismo, eventos y negocios que quieren una imagen poderosa y profesional.",
    },
    {
      title: "Edición de video profesional",
      text: "Convertimos grabaciones comunes en piezas visuales modernas, ágiles y atractivas para vender, posicionar y generar recordación.",
    },
    {
      title: "Voz en off comercial",
      text: "Locución para anuncios, reels, videos empresariales, campañas, presentaciones y contenido promocional con tono profesional y persuasivo.",
    },
    {
      title: "Videos empresariales",
      text: "Contenido audiovisual para mostrar procesos, instalaciones, servicios, testimonios y el valor real de tu empresa con una imagen sólida.",
    },
    {
      title: "Contenido para redes sociales",
      text: "Piezas pensadas para Instagram, TikTok, Facebook y campañas digitales con enfoque visual, emocional y orientado a resultados.",
    },
    {
      title: "Cobertura de eventos",
      text: "Registro audiovisual premium de lanzamientos, activaciones, celebraciones, experiencias en vivo y eventos corporativos.",
    },
  ];

  const strengths = [
    "Contenido que atrae clientes",
    "Imagen premium y moderna",
    "Tomas aéreas de alto impacto",
    "Edición con intención comercial",
    "Entrega rápida de 24 a 48 horas",
    "Cobertura en Bogotá y alrededores",
  ];

  const process = [
    "Analizamos tu idea, marca o necesidad",
    "Diseñamos un enfoque visual claro",
    "Grabamos o producimos el material",
    "Editamos con intención comercial",
    "Entregamos una pieza lista para publicar o vender",
  ];

  const galleryItems = [
    {
      image: "/galeria1.jpg",
      title: "Contenido comercial",
      text: "Piezas visuales para mostrar tu negocio con fuerza y estilo.",
    },
    {
      image: "/galeria2.jpg",
      title: "Tomas aéreas",
      text: "Perspectivas impactantes para elevar la imagen de tu marca.",
    },
    {
      image: "/galeria3.jpg",
      title: "Producción empresarial",
      text: "Videos que transmiten orden, valor y profesionalismo.",
    },
    {
      video: "/eventos.mp4",
      title: "Eventos y experiencias",
      text: "Registro visual de momentos que merecen verse memorables.",
    },
  ];

  const contentIdeas = [
    "Videos para negocios y marcas",
    "Reels comerciales",
    "Contenido empresarial",
    "Tomas aéreas con dron",
    "Voz en off para campañas",
    "Cobertura visual de eventos",
    "Presentaciones visuales",
    "Contenido de alto impacto para redes",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02040a] text-white">
      <a
        href="https://wa.me/573157790101"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(34,211,238,0.35)] transition hover:scale-105"
      >
        WhatsApp
      </a>

      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/50 backdrop-blur-xl">
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
            <a href="#galeria" className="transition hover:text-cyan-300">
              Galería
            </a>
            <a href="#videos" className="transition hover:text-cyan-300">
              Videos
            </a>
            <a href="#proceso" className="transition hover:text-cyan-300">
              Proceso
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
          className="relative mx-auto mt-6 max-w-7xl overflow-hidden rounded-[2.6rem] border border-cyan-400/10 px-6 pb-20 pt-14 shadow-[0_0_80px_rgba(0,140,255,0.09)] md:px-10 md:pb-24 md:pt-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,183,255,0.22),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(96,60,255,0.20),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_20%),linear-gradient(180deg,rgba(0,0,0,0.58),rgba(0,0,0,0.90))]" />
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
                Contenido audiovisual que impacta, conecta y vende
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.93] md:text-7xl">
                Hacemos que tu negocio se vea más potente, más profesional y
                mucho más memorable.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                En Impactus Visio Studio creamos contenido con dron, edición de
                video, voz en off y producción visual para marcas, negocios,
                eventos y empresas que quieren atraer más atención y generar
                mayor confianza.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/573157790101"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]"
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#galeria"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Ver trabajos
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/82 shadow-xl shadow-black/20 backdrop-blur-sm"
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
                    className="h-auto w-full max-w-[480px] drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                  />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-300/10 bg-black/25 p-4">
                    <p className="text-sm text-white/45">Especialidad</p>
                    <p className="mt-1 font-semibold text-white">
                      Producción audiovisual comercial
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/10 bg-black/25 p-4">
                    <p className="text-sm text-white/45">Enfoque</p>
                    <p className="mt-1 font-semibold text-white">
                      Imagen que conecta y convierte
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
                  Creamos piezas visuales para que tu marca no solo se vea bien,
                  sino que proyecte valor, confianza y un nivel claramente más
                  profesional.
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
              Soluciones visuales para marcas que quieren destacar de verdad.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Diseñamos contenido con intención comercial, estética premium y un
              enfoque pensado para captar atención y generar resultados.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 shadow-xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_0_35px_rgba(34,211,238,0.10)]"
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

        <section id="galeria" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Galería
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Una imagen poderosa cambia la manera en que te perciben.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Estas piezas representan el tipo de presencia visual que ayudamos
              a construir para marcas, negocios, empresas y eventos.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {"video" in item ? (
                    <video
                      src={item.video}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Videos
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Movimiento, energía y presencia visual en acción.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              El video transmite ritmo, confianza y una percepción mucho más
              fuerte de marca. Aquí puedes mostrar reels, comerciales y
              contenido empresarial.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20">
              <video
                controls
                preload="metadata"
                className="h-auto w-full rounded-[1.5rem]"
              >
                <source src="/video1.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20">
              <video
                controls
                preload="metadata"
                className="h-auto w-full rounded-[1.5rem]"
              >
                <source src="/video2.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 md:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                Nuestro proceso
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Convertimos una idea en una pieza visual lista para impactar.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                No se trata solo de grabar o editar. Se trata de construir una
                pieza con intención, estética, claridad y valor comercial para
                que tu marca comunique mejor y se vea más profesional.
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

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                  Contenido ideal
                </p>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Qué tipo de piezas podemos crear para tu negocio.
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  Desde reels y piezas para redes hasta videos corporativos o
                  comerciales más elaborados, adaptamos el contenido al objetivo
                  real de tu marca.
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
              Tu contenido debe trabajar como un vendedor silencioso que genera
              confianza desde el primer segundo.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
              Por eso construimos piezas visuales que no solo se ven bien, sino
              que también transmiten profesionalismo, emoción, valor y una
              imagen capaz de atraer clientes.
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
                  Si quieres que tu negocio se vea mejor, hablemos.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  Escríbenos y te mostramos una idea visual pensada para tu
                  marca, empresa, evento o proyecto. Una buena imagen puede
                  cambiar por completo la forma en que te perciben.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold">Datos de contacto</h3>
                <div className="mt-6 space-y-4 text-white/85">
                  <p>
                    <span className="text-white/45">WhatsApp:</span> +57 315 779 0101
                  </p>
                  <p>
                    <span className="text-white/45">Instagram:</span> @impactus.visio.studio
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
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-cyan-300 px-5 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/impactus.visio.studio"
                    target="_blank"
                    rel="noreferrer"
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