"use client";

import { useState } from "react";
import Viewer360 from "./components/Viewer360";

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

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    proyecto: "",
    contactoWhatsApp: false,
    contactoCorreo: false,
    contactoLlamada: false,
    autorizacion: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage("");
    setSubmitError("");

    if (
      !formData.nombre.trim() ||
      !formData.correo.trim() ||
      !formData.telefono.trim() ||
      !formData.proyecto.trim()
    ) {
      setSubmitError("Por favor completa los campos obligatorios.");
      return;
    }

    if (!formData.autorizacion) {
      setSubmitError("Debes autorizar el tratamiento de tus datos personales.");
      return;
    }

    const preferencias = [
      formData.contactoWhatsApp ? "WhatsApp" : null,
      formData.contactoCorreo ? "Correo electrónico" : null,
      formData.contactoLlamada ? "Llamada" : null,
    ]
      .filter(Boolean)
      .join(", ");

    const payload = new FormData();
    payload.append("nombre", formData.nombre);
    payload.append("empresa", formData.empresa || "No especificada");
    payload.append("correo", formData.correo);
    payload.append("telefono", formData.telefono);
    payload.append("proyecto", formData.proyecto);
    payload.append(
      "preferencia_de_contacto",
      preferencias || "No especificada"
    );
    payload.append("autorizacion", "Sí");
    payload.append("_subject", "Nuevo contacto desde Impactus Visio Studio");

    try {
      setIsSubmitting(true);

      const response = await fetch(
  "https://formsubmit.co/ajax/28335c14e0a380fe746ac363f11ba124",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: payload,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "No se pudo enviar el formulario.");
      }

      setSubmitMessage(
        "Gracias por contactarnos. Hemos recibido tu solicitud y en breve nos comunicaremos contigo."
      );

      setFormData({
        nombre: "",
        empresa: "",
        correo: "",
        telefono: "",
        proyecto: "",
        contactoWhatsApp: false,
        contactoCorreo: false,
        contactoLlamada: false,
        autorizacion: false,
      });
    } catch {
      setSubmitError(
        "No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente en unos minutos."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-impactus.png"
              alt="Impactus Visio Studio"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-cyan-300/20 shadow-[0_0_18px_rgba(34,211,238,0.18)]"
            />
            <div className="leading-tight">
              <p className="text-[15px] font-black uppercase tracking-[0.28em] text-cyan-200">
                Impactus Visio
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.42em] text-white/50">
                Studio
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-[15px] text-white/75 md:flex">
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
                Impacto visual que hace que tu marca se vea inolvidable.
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
                    className="h-auto w-full max-w-[520px] animate-float drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
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
              <img
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

          <div className="grid items-start gap-6 lg:grid-cols-[0.7fr_1.6fr_0.7fr]">
            <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/20">
              <video
                controls
                preload="metadata"
                poster="/poster-video1.jpg"
                className="h-[390px] w-full rounded-[1.5rem] object-cover"
              >
                <source src={showcaseVideos[0]} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20">
              <video
                controls
                preload="metadata"
                poster="/poster-video2.jpg"
                className="h-auto w-full rounded-[1.5rem]"
              >
                <source src={showcaseVideos[1]} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>

            <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/20">
              <video
                controls
                preload="metadata"
                poster="/poster-video3.jpg"
                className="h-[390px] w-full rounded-[1.5rem] object-cover"
              >
                <source src={showcaseVideos[2]} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Experiencia 360
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Explora tu espacio en 360°
            </h2>
          </div>

          <Viewer360 />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Dron
              </p>
              <p className="mt-4 text-2xl font-semibold">
                Tomas que elevan la percepción visual.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Edición
              </p>
              <p className="mt-4 text-2xl font-semibold">
                Videos con ritmo, estética y fuerza comercial.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Voz en off
              </p>
              <p className="mt-4 text-2xl font-semibold">
                Narración profesional para piezas que venden mejor.
              </p>
            </div>

            <div className="h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20">
              <img
                src="/imagen-izquierda.jpg"
                alt="Imagen izquierda"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20">
              <img
                src="/voz-en-off.jpg"
                alt="Imagen voz en off"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20">
              <img
                src="/imagen-derecha.jpg"
                alt="Imagen derecha"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:pb-16 md:pt-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-transparent p-8 shadow-2xl shadow-black/20 md:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                Contacto
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Hablemos de tu proyecto
              </h2>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:impactusvisio@gmail.com"
                  className="block break-all text-2xl font-semibold text-cyan-300 underline underline-offset-4 transition hover:text-cyan-200 md:text-3xl"
                >
                  impactusvisio@gmail.com
                </a>

                <a
                  href="https://wa.me/573157790101"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-2xl font-semibold text-cyan-300 underline underline-offset-4 transition hover:text-cyan-200 md:text-3xl"
                >
                  +57 315 779 0101
                </a>
              </div>

              <p className="mt-10 text-3xl font-semibold leading-tight text-white md:text-5xl">
                o completa este formulario
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 md:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre *"
                  className="w-full rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-cyan-300/60"
                />

                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Empresa o marca"
                  className="w-full rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-cyan-300/60"
                />

                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico *"
                  className="w-full rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-cyan-300/60"
                />

                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Número de teléfono *"
                  className="w-full rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-cyan-300/60"
                />

                <textarea
                  name="proyecto"
                  value={formData.proyecto}
                  onChange={handleChange}
                  placeholder="Cuéntanos más sobre tu proyecto *"
                  rows={5}
                  className="w-full rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-cyan-300/60"
                />

                <div className="pt-2">
                  <p className="mb-4 text-lg font-medium text-white">
                    Prefiero que me contacten por:
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <label className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/85">
                      <input
                        type="checkbox"
                        name="contactoWhatsApp"
                        checked={formData.contactoWhatsApp}
                        onChange={handleChange}
                        className="h-5 w-5 accent-cyan-300"
                      />
                      <span>WhatsApp</span>
                    </label>

                    <label className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/85">
                      <input
                        type="checkbox"
                        name="contactoCorreo"
                        checked={formData.contactoCorreo}
                        onChange={handleChange}
                        className="h-5 w-5 accent-cyan-300"
                      />
                      <span>Correo</span>
                    </label>

                    <label className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/85">
                      <input
                        type="checkbox"
                        name="contactoLlamada"
                        checked={formData.contactoLlamada}
                        onChange={handleChange}
                        className="h-5 w-5 accent-cyan-300"
                      />
                      <span>Llamada</span>
                    </label>
                  </div>
                </div>

                <label className="flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-white/80">
                  <input
                    type="checkbox"
                    name="autorizacion"
                    checked={formData.autorizacion}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 shrink-0 accent-cyan-300"
                  />
                  <span className="leading-7">
                    Autorizo el tratamiento de mis datos personales.
                  </span>
                </label>

                {submitMessage && (
                  <div className="rounded-[1.2rem] border border-cyan-300/30 bg-cyan-300/10 px-4 py-4 text-base leading-7 text-cyan-100">
                    {submitMessage}
                  </div>
                )}

                {submitError && (
                  <div className="rounded-[1.2rem] border border-red-400/30 bg-red-400/10 px-4 py-4 text-base leading-7 text-red-200">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-[1.5rem] bg-cyan-300 px-6 py-4 text-lg font-bold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-12 text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">
              Impactus Visio Studio
            </p>
            <p className="mt-4 leading-7 text-white/55">
              Producción audiovisual, tomas con dron, edición de video y voz en
              off para marcas, negocios y eventos.
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Contacto</p>
            <div className="mt-4 space-y-3">
              <p>impactusvisio@gmail.com</p>
              <p>+57 315 779 0101</p>
              <p>Bogotá, Colombia</p>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Síguenos</p>
            <div className="mt-4 space-y-3">
              <a
                href="https://instagram.com/impactus.visio.studio"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-cyan-300"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/573157790101"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-cyan-300"
              >
                WhatsApp
              </a>
              <a
                href="mailto:impactusvisio@gmail.com"
                className="block transition hover:text-cyan-300"
              >
                Correo
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/40">
          <p>© 2026 Impactus Visio Studio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}