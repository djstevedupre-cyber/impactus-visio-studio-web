export default function Home() {
  const galleryImages = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
  ];

  const showcaseVideos = [
    "/video1.mp4",
    "/video2.mp4",
    "/eventos.mp4",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02040a] text-white">
      <a
        href="https://wa.me/573157790101"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[80] inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(34,211,238,0.35)] transition hover:scale-105"
      >
        WhatsApp
      </a>

      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/45 backdrop-blur-xl">
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
            <a href="#trabajos" className="transition hover:text-cyan-300">
              Trabajos
            </a>
            <a href="#videos" className="transition hover:text-cyan-300">
              Videos
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
          className="relative mx-auto mt-6 max-w-7xl overflow-hidden rounded-[2.6rem] border border-cyan-400/10 px-6 pb-16 pt-14 shadow-[0_0_80px_rgba(0,140,255,0.09)] md:px-10 md:pb-20 md:pt-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,183,255,0.20),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(96,60,255,0.18),transparent_22%),radial-gradient(circle_at_15%_85%,rgba(14,165,233,0.10),transparent_18%),linear-gradient(180deg,rgba(0,0,0,0.52),rgba(0,0,0,0.90))]" />
          <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
                Dron · Video · Voz · Producción visual
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] md:text-7xl">
                Impacto visual que hace que una marca se vea inolvidable.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72 md:text-xl">
                Menos discurso. Más imagen, movimiento y presencia.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/573157790101"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]"
                >
                  Cotizar ahora
                </a>
                <a
                  href="#trabajos"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Ver portafolio
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex justify-center">
                  <img
                    src="/logo-impactus.png"
                    alt="Logo Impactus Visio Studio"
                    className="h-auto w-full max-w-[520px] drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trabajos" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                Portafolio visual
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Imágenes que hablan solas.
              </h2>
            </div>

            <a
              href="https://wa.me/573157790101"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-black md:inline-flex"
            >
              Solicitar propuesta
            </a>
          </div>

          <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25 md:row-span-2">
              <video
                src={galleryImages[0]}
                alt="Trabajo Impactus 1"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25">
              <img
                src={galleryImages[1]}
                alt="Trabajo Impactus 2"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25">
              <video
                src="/eventos.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25">
              <img
                src={galleryImages[2]}
                alt="Trabajo Impactus 3"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25 md:col-span-2">
              <img
                src={galleryImages[3]}
                alt="Trabajo Impactus 4"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            </div>
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Videos
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Movimiento, atmósfera y presencia.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20">
              <video
                controls
                preload="metadata"
                className="h-auto w-full rounded-[1.5rem]"
              >
                <source src={showcaseVideos[0]} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20">
                <video
                  controls
                  preload="metadata"
                  className="h-auto w-full rounded-[1.5rem]"
                >
                  <source src={showcaseVideos[1]} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20">
                <video
                  controls
                  preload="metadata"
                  className="h-auto w-full rounded-[1.5rem]"
                >
                  <source src={showcaseVideos[2]} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Dron
              </p>
              <p className="mt-4 text-2xl font-semibold">Tomas que elevan la percepción visual.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Edición
              </p>
              <p className="mt-4 text-2xl font-semibold">Videos con ritmo, estética y fuerza comercial.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Voz en off
              </p>
              <p className="mt-4 text-2xl font-semibold">Narración profesional para piezas que venden mejor.</p>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="mx-auto max-w-7xl px-6 pb-20 pt-6 md:pb-24"
        >
          <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.05] to-transparent p-8 shadow-2xl shadow-black/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                  Contacto
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
                  Si quieres una imagen que impacte, escríbenos.
                </h2>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 backdrop-blur-sm">
                <div className="space-y-4 text-white/85">
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
        <p>© 2026 Impactus Visio Studio</p>
      </footer>
    </div>
  );
}