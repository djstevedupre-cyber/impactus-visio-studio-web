"use client";

import { useState } from "react";
import Viewer360 from "./components/Viewer360";

const WHATSAPP_NUMBER = "573054247369";

const WHATSAPP_MESSAGES = {
  general:
    "Hola, vi la página de Impactus Visio Studio y quisiera cotizar un proyecto audiovisual.",
  negocios:
    "Hola, vi el servicio de Video para Negocios de Impactus Visio Studio y quisiera cotizar una producción.",
  dron:
    "Hola, vi el servicio de Producción con Dron de Impactus Visio Studio y quisiera cotizar unas tomas aéreas.",
  redes:
    "Hola, vi el servicio de Contenido para Redes de Impactus Visio Studio y quisiera conocer las opciones.",
  completa:
    "Hola, necesito una Producción Completa con Impactus Visio Studio y quisiera contarles sobre mi proyecto.",
};

const whatsappHref = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

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
    "/video3.mp4",
    "/video4.mp4",
    "/video5.mp4",
    "/video6.mp4",
    "/video7.mp4",
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    servicio: "",
    ubicacion: "",
    fecha: "",
    proyecto: "",
    autorizacion: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      !formData.telefono.trim() ||
      !formData.servicio.trim() ||
      !formData.proyecto.trim()
    ) {
      setSubmitError("Por favor completa los campos obligatorios.");
      return;
    }

    if (!formData.autorizacion) {
      setSubmitError(
        "Debes autorizar el tratamiento de tus datos personales."
      );
      return;
    }

    const payload = new FormData();

    payload.append("nombre", formData.nombre);
    payload.append("empresa", formData.empresa || "No especificada");
    payload.append("whatsapp", formData.telefono);
    payload.append("correo", formData.correo || "No especificado");
    payload.append("servicio", formData.servicio);
    payload.append("ubicacion", formData.ubicacion || "No especificada");
    payload.append("fecha", formData.fecha || "No especificada");
    payload.append("proyecto", formData.proyecto);
    payload.append("autorizacion", "Sí");
    payload.append(
      "_subject",
      `Nueva solicitud de ${formData.servicio} - Impactus Visio Studio`
    );

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
        throw new Error(
          result?.message || "No se pudo enviar el formulario."
        );
      }

      setSubmitMessage(
        "Gracias. Recibimos los datos de tu proyecto y te responderemos por WhatsApp."
      );

      setFormData({
        nombre: "",
        empresa: "",
        correo: "",
        telefono: "",
        servicio: "",
        ubicacion: "",
        fecha: "",
        proyecto: "",
        autorizacion: false,
      });
    } catch {
      setSubmitError(
        "No pudimos enviar tu solicitud en este momento. Escríbenos directamente por WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02040a] text-white">
      {/* WHATSAPP FLOTANTE */}
      <a
        href={whatsappHref(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-4 right-4 z-[80] inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300 px-4 py-3 text-xs font-bold text-black shadow-[0_15px_45px_rgba(34,211,238,0.30)] transition duration-300 hover:scale-105 hover:bg-cyan-200 sm:bottom-6 sm:right-6 sm:px-5 sm:py-4 sm:text-sm"
      >
        <span className="h-2 w-2 rounded-full bg-black/70" />
        WhatsApp
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#02040a]/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
          >
            <img
              src="/logo-impactus.png"
              alt="Impactus Visio Studio"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-cyan-300/20 transition duration-300 group-hover:ring-cyan-300/50 sm:h-12 sm:w-12"
            />

            <div className="leading-none">
              <p className="text-[12px] font-black uppercase tracking-[0.23em] text-white sm:text-[14px] sm:tracking-[0.28em]">
                Impactus Visio
              </p>

              <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.42em] text-cyan-300/70 sm:text-[11px] sm:tracking-[0.5em]">
                Studio
              </p>
            </div>
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden items-center gap-3 md:flex">
            <nav className="flex items-center rounded-full border border-white/[0.07] bg-white/[0.035] p-1 text-sm text-white/65">
              <a
                href="#inicio"
                className="rounded-full px-4 py-2.5 transition hover:bg-white/[0.07] hover:text-white lg:px-5"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="rounded-full px-4 py-2.5 transition hover:bg-white/[0.07] hover:text-white lg:px-5"
              >
                Servicios
              </a>

              <a
                href="#trabajos"
                className="rounded-full px-4 py-2.5 transition hover:bg-white/[0.07] hover:text-white lg:px-5"
              >
                Trabajos
              </a>

              <a
                href="#videos"
                className="rounded-full px-4 py-2.5 transition hover:bg-white/[0.07] hover:text-white lg:px-5"
              >
                Videos
              </a>

              <a
                href="#contacto"
                className="rounded-full px-4 py-2.5 transition hover:bg-white/[0.07] hover:text-white lg:px-5"
              >
                Contacto
              </a>
            </nav>

            <a
              href="#contacto"
              className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:scale-[1.03] hover:bg-cyan-200 lg:inline-flex"
            >
              Hablemos
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/[0.09] bg-white/[0.04] transition hover:border-cyan-300/30 md:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-white transition duration-300 ${
                isMobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-5 bg-white transition duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-5 bg-white transition duration-300 ${
                isMobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`overflow-hidden border-t border-white/[0.06] bg-[#02040a]/95 transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "max-h-[520px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 pb-6 pt-4">
            <nav className="flex flex-col">
              <a
                href="#inicio"
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-white/[0.06] py-4 text-lg font-semibold text-white/80"
              >
                Inicio
                <span className="text-white/25">01</span>
              </a>

              <a
                href="#servicios"
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-white/[0.06] py-4 text-lg font-semibold text-white/80"
              >
                Servicios
                <span className="text-white/25">02</span>
              </a>

              <a
                href="#trabajos"
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-white/[0.06] py-4 text-lg font-semibold text-white/80"
              >
                Trabajos
                <span className="text-white/25">03</span>
              </a>

              <a
                href="#videos"
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-white/[0.06] py-4 text-lg font-semibold text-white/80"
              >
                Videos
                <span className="text-white/25">04</span>
              </a>

              <a
                href="#contacto"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-4 text-lg font-semibold text-white/80"
              >
                Contacto
                <span className="text-white/25">05</span>
              </a>
            </nav>

            <a
              href={whatsappHref(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-4 font-bold text-black"
            >
              Hablemos por WhatsApp
              <span>→</span>
            </a>

            <div className="mt-5 flex items-center justify-between text-xs text-white/30">
              <span>Bogotá · Colombia</span>
              <span>Impactus Visio Studio</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="relative mx-3 mt-3 overflow-hidden rounded-[2rem] border border-white/[0.07] px-5 py-8 shadow-[0_40px_140px_rgba(0,0,0,0.55)] sm:mx-5 sm:px-7 sm:py-10 md:mx-auto md:mt-4 md:max-w-7xl md:rounded-[2.8rem] md:px-10 md:py-12 lg:px-14 lg:py-14"
        >
          <div className="absolute inset-0 bg-[#02050b]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.17),transparent_32%),radial-gradient(circle_at_70%_90%,rgba(99,102,241,0.12),transparent_32%)]" />

          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[90px]" />

          <div className="absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-blue-600/[0.10] blur-[120px]" />

          <div className="relative z-10 grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            {/* HERO TEXTO */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-2 backdrop-blur-xl sm:gap-3 sm:px-4">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
                  Producción audiovisual para empresas y propiedades
                </span>
              </div>

              <h1 className="mt-7 max-w-[760px] text-[2.45rem] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-[3.65rem] lg:mt-7 lg:text-[4.15rem]">
                Video, dron y contenido para hacer destacar{" "}
                <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  tu negocio o propiedad.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8 md:text-xl">
                Producción audiovisual en Bogotá para empresas, inmobiliarias,
                restaurantes, eventos y marcas que necesitan verse profesionales.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-9 sm:gap-3">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-white/55 sm:px-4 sm:text-sm">
                  Video para negocios
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-white/55 sm:px-4 sm:text-sm">
                  Producción con dron
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-white/55 sm:px-4 sm:text-sm">
                  Contenido para redes
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-white/55 sm:px-4 sm:text-sm">
                  Producción completa
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#trabajos"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-4 font-bold text-black shadow-[0_12px_40px_rgba(34,211,238,0.18)] transition duration-300 hover:scale-[1.025] hover:bg-cyan-200 sm:px-7"
                >
                  Ver nuestro trabajo

                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-4 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.07] sm:px-7"
                >
                  Cotizar por WhatsApp
                </a>
              </div>

              <div className="mt-7 flex flex-col gap-2 border-t border-white/[0.07] pt-5 text-xs text-white/40 sm:mt-8 sm:flex-row sm:items-center sm:gap-5 sm:pt-6 sm:text-sm">
                <span>Bogotá · Colombia</span>

                <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

                <span>Empresas · Propiedades · Eventos · Redes</span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-indigo-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-transparent p-[1px] shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[2.5rem]">
                <div className="relative overflow-hidden rounded-[1.95rem] bg-[#050811]/80 px-5 py-8 sm:rounded-[2.45rem] sm:px-7 sm:py-8 md:px-8 md:py-10">
                  <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                  <img
                    src="/logo-impactus.png"
                    alt="Impactus Visio Studio"
                    className="relative z-10 mx-auto h-auto w-full max-w-[390px] drop-shadow-[0_0_40px_rgba(34,211,238,0.22)]"
                  />

                  <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4 sm:mt-6 sm:pt-5">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300/70 sm:text-[11px] sm:tracking-[0.28em]">
                        Impactus Visio
                      </p>

                      <p className="mt-1 text-xs text-white/45 sm:text-sm">
                        Visual Content Studio
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] text-base text-cyan-200 sm:h-11 sm:w-11 sm:text-lg">
                      ✦
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/[0.09] bg-black/60 px-5 py-4 shadow-2xl backdrop-blur-xl md:block">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35">
                  Creamos
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Imagen · Movimiento · Impacto
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section
          id="servicios"
          className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20"
        >
          <div className="absolute left-1/2 top-24 h-72 w-[65%] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[110px]" />

          <div className="relative">
            <div className="mb-8 grid gap-5 lg:mb-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-cyan-300/60 sm:w-10" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-200 sm:text-xs sm:tracking-[0.38em]">
                    Servicios principales
                  </p>
                </div>

                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                  Elige cómo quieres mostrar
                  <span className="block text-white/40">tu negocio o proyecto.</span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8 lg:justify-self-end">
                Cuatro formas claras de trabajar con Impactus. Elige una opción y empieza la cotización directamente por WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {/* VIDEO PARA NEGOCIOS */}
              <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-cyan-300/[0.09] via-white/[0.035] to-transparent p-5 shadow-[0_24px_65px_rgba(0,0,0,0.24)] sm:rounded-[2.2rem] sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] px-3 text-[11px] font-black tracking-[0.18em] text-cyan-100">
                    VIDEO
                  </div>
                  <span className="text-xs font-bold tracking-[0.25em] text-white/20">01</span>
                </div>

                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
                  Video para negocios
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl xl:text-[1.7rem]">
                  Presenta tu negocio con una imagen más profesional.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/48 sm:text-base sm:leading-7">
                  Grabación y edición de videos promocionales para empresas,
                  restaurantes, comercios, marcas y servicios.
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/65">
                  Ideal para: empresas · restaurantes · negocios · marcas
                </p>

                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.negocios)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-200"
                >
                  Cotizar video para negocio <span>→</span>
                </a>
              </article>

              {/* PRODUCCION CON DRON */}
              <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_24px_65px_rgba(0,0,0,0.24)] sm:rounded-[2.2rem] sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] px-3 text-[11px] font-black tracking-[0.18em] text-cyan-100">
                    DRON
                  </div>
                  <span className="text-xs font-bold tracking-[0.25em] text-white/20">02</span>
                </div>

                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
                  Producción con dron
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl xl:text-[1.7rem]">
                  Muestra la escala, ubicación y entorno desde otra perspectiva.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/48 sm:text-base sm:leading-7">
                  Tomas aéreas para fincas, inmuebles, proyectos, empresas, turismo
                  y eventos, con entrega pensada para web, redes o video final.
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/65">
                  Ideal para: inmobiliarias · constructoras · propiedades · eventos
                </p>

                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.dron)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
                >
                  Cotizar producción con dron <span>→</span>
                </a>
              </article>

              {/* CONTENIDO PARA REDES */}
              <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_24px_65px_rgba(0,0,0,0.24)] sm:rounded-[2.2rem] sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] px-3 text-[11px] font-black tracking-[0.18em] text-cyan-100">
                    SOCIAL
                  </div>
                  <span className="text-xs font-bold tracking-[0.25em] text-white/20">03</span>
                </div>

                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
                  Contenido para redes
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl xl:text-[1.7rem]">
                  Piezas verticales listas para publicar y comunicar mejor.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/48 sm:text-base sm:leading-7">
                  Reels, Shorts y contenido vertical para negocios y marcas que
                  necesitan mantener una presencia visual consistente.
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/65">
                  Ideal para: restaurantes · negocios · servicios · marcas
                </p>

                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.redes)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
                >
                  Cotizar contenido para redes <span>→</span>
                </a>
              </article>

              {/* PRODUCCION COMPLETA */}
              <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.09] via-white/[0.035] to-transparent p-5 shadow-[0_24px_65px_rgba(0,0,0,0.24)] sm:rounded-[2.2rem] sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] px-3 text-[11px] font-black tracking-[0.18em] text-cyan-100">
                    FULL
                  </div>
                  <span className="text-xs font-bold tracking-[0.25em] text-white/20">04</span>
                </div>

                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
                  Producción completa
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl xl:text-[1.7rem]">
                  De la grabación a la pieza final, en un solo proceso.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/48 sm:text-base sm:leading-7">
                  Cámara, dron, edición, voz en off cuando el proyecto lo requiera
                  y entrega final adaptada al formato donde se va a publicar.
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/65">
                  Ideal para: empresas · eventos · campañas · proyectos especiales
                </p>

                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.completa)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-200"
                >
                  Cotizar producción completa <span>→</span>
                </a>
              </article>
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/[0.07] bg-white/[0.025] px-6 py-6 sm:rounded-[2.3rem] md:flex md:items-center md:justify-between md:px-8 md:py-7">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/30 sm:text-xs">
                  Servicios complementarios
                </p>
                <p className="mt-2 text-lg font-semibold text-white/75">
                  Edición · Voz en off · Experiencias 360°
                </p>
              </div>

              <a
                href={whatsappHref(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-cyan-200 md:mt-0"
              >
                Consultar otro proyecto <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* PORTAFOLIO */}
        <section
          id="trabajos"
          className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20"
        >
          <div className="absolute left-1/2 top-16 h-72 w-[60%] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[100px]" />

          <div className="relative">
            <div className="mb-8 grid items-end gap-6 md:mb-10 md:grid-cols-[1fr_auto] md:gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-cyan-300/60 sm:w-10" />

                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-200 sm:text-xs sm:tracking-[0.38em]">
                    Portafolio seleccionado
                  </p>
                </div>

                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                  Trabajos seleccionados
                  <span className="block text-white/40">de Impactus.</span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 sm:mt-6 sm:text-lg sm:leading-8">
                  Una muestra de fotografía, video y tomas aéreas para empresas, propiedades y eventos.
                </p>
              </div>

              <a
                href={whatsappHref(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-black"
              >
                Solicitar propuesta
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="grid gap-4 sm:gap-5 md:auto-rows-[220px] md:grid-cols-12">
              {/* PROYECTO 1 */}
              <div className="group relative min-h-[410px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[2.3rem] md:col-span-7 md:row-span-2 md:min-h-[440px]">
                <img
                  src={galleryImages[0]}
                  loading="lazy" decoding="async"
                  alt="Proyecto destacado Impactus Visio"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-xl sm:px-4 sm:text-[11px] sm:tracking-[0.25em]">
                    Proyecto destacado
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200 sm:text-xs sm:tracking-[0.28em]">
                    Impactus Visio Studio
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h3 className="max-w-md text-2xl font-bold leading-tight md:text-3xl">
                      Historias construidas a través de la imagen.
                    </h3>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl backdrop-blur-xl transition duration-300 group-hover:bg-cyan-300 group-hover:text-black sm:flex">
                      ↗
                    </div>
                  </div>
                </div>
              </div>

              {/* PROYECTO 2 */}
              <div className="group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] sm:rounded-[2.3rem] md:col-span-5 md:min-h-[220px]">
                <img
                  src={galleryImages[1]}
                  loading="lazy" decoding="async"
                  alt="Selección visual Impactus Visio"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-200 sm:text-[11px] sm:tracking-[0.28em]">
                    Selección visual 02
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Detalle · Atmósfera · Presencia
                  </p>
                </div>
              </div>

              {/* PROYECTO 3 */}
              <div className="group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] sm:rounded-[2.3rem] md:col-span-5 md:min-h-[220px]">
                <img
                  src={galleryImages[2]}
                  loading="lazy" decoding="async"
                  alt="Selección de trabajo Impactus Visio"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-200 sm:text-[11px] sm:tracking-[0.28em]">
                    Selección visual 03
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Imagen que comunica sin palabras
                  </p>
                </div>
              </div>

              {/* PROYECTO 4 */}
              <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] sm:rounded-[2.3rem] md:col-span-12 md:min-h-[360px]">
                <img
                  src={galleryImages[3]}
                  loading="lazy" decoding="async"
                  alt="Portafolio Impactus Visio Studio"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/10 md:via-black/25 md:to-transparent" />

                <div className="absolute inset-y-0 left-0 flex max-w-xl items-end p-5 sm:p-7 md:p-10">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-200 sm:text-xs sm:tracking-[0.3em]">
                      Selección visual 04
                    </p>

                    <h3 className="mt-3 text-3xl font-black leading-tight sm:mt-4 md:text-5xl">
                      Cada encuadre tiene
                      <span className="block text-white/55">una intención.</span>
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                      Creamos piezas pensadas para que tu marca tenga una
                      presencia visual más fuerte, profesional y memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section
          id="videos"
          className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20"
        >
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-600/[0.05] blur-[120px]" />

          <div className="relative">
            <div className="mb-8 grid gap-5 lg:mb-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-cyan-300/60 sm:w-10" />

                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-200 sm:text-xs sm:tracking-[0.38em]">
                    Producción en video
                  </p>
                </div>

                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                  Video y dron
                  <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                    en acción.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8 lg:justify-self-end">
                Cuatro muestras para ver cómo trabajamos piezas horizontales, verticales y producción aérea.
              </p>
            </div>

            {/* VIDEOS DESTACADOS */}
            <div className="grid items-start gap-5 lg:grid-cols-[0.75fr_1.6fr_0.75fr]">
              {/* VIDEO 1 */}
              <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#060910] p-2.5 sm:rounded-[2.2rem] lg:max-w-[270px]">
                <div className="mb-2 px-3 py-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300/70">
                    Vertical · Redes
                  </p>
                </div>

                <video
                  controls
                  preload="none"
                  poster="/poster-video1.jpg"
                  className="h-[520px] w-full rounded-[1.6rem] object-cover sm:rounded-[1.7rem] lg:h-[430px]"
                >
                  <source src={showcaseVideos[0]} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              {/* VIDEO PRINCIPAL */}
              <div className="relative order-first overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.03] p-2.5 sm:rounded-[2.4rem] sm:p-3 lg:order-none">
                <div className="px-3 pb-4 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />

                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-[11px] sm:tracking-[0.3em]">
                      Video destacado
                    </p>
                  </div>

                  <p className="mt-2 text-base font-semibold sm:text-lg">
                    Producción audiovisual
                  </p>
                </div>

                <video
                  controls
                  preload="none"
                  poster="/poster-video2.jpg"
                  className="aspect-video w-full rounded-[1.6rem] bg-black object-cover sm:rounded-[1.8rem]"
                >
                  <source src={showcaseVideos[1]} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>

                <div className="px-3 pb-2 pt-4">
                  <p className="text-sm leading-6 text-white/40">
                    Imagen, sonido y edición trabajando juntos para crear una
                    pieza con presencia visual.
                  </p>
                </div>
              </div>

              {/* VIDEO 3 */}
              <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#060910] p-2.5 sm:rounded-[2.2rem] lg:max-w-[270px]">
                <div className="mb-2 px-3 py-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300/70">
                    Vertical · Redes
                  </p>
                </div>

                <video
                  controls
                  preload="none"
                  poster="/poster-video3.jpg"
                  className="h-[520px] w-full rounded-[1.6rem] object-cover sm:rounded-[1.7rem] lg:h-[430px]"
                >
                  <source src={showcaseVideos[2]} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>
            </div>

            {/* CUARTA MUESTRA: PRODUCCIÓN AÉREA */}
            <div className="mt-6 mx-auto max-w-[900px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-2.5 sm:rounded-[2.2rem]">
              <div className="px-4 pb-4 pt-2 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300/70">
                  Producción aérea
                </p>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Tomas aéreas para propiedades e inmuebles
                </h3>
              </div>

              <video
                controls
                preload="none"
                poster="/poster-video7.jpg"
                className="aspect-video w-full rounded-[1.6rem] bg-black object-contain sm:rounded-[1.7rem]"
              >
                <source src={showcaseVideos[6]} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>

            <div className="mt-7 flex flex-col gap-4 rounded-[1.8rem] border border-white/[0.07] bg-white/[0.025] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:rounded-[2rem] sm:px-6">
              <div>
                <p className="text-sm font-semibold text-white/75">
                  ¿Quieres ver más trabajos?
                </p>
                <p className="mt-1 text-sm leading-6 text-white/35">
                  Encuentra más piezas de Impactus en Instagram o cuéntanos qué quieres producir.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/impactus.visio.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300/35"
                >
                  Ver Instagram ↗
                </a>
                <a
                  href="#contacto"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-5 py-3 text-sm font-semibold text-cyan-200"
                >
                  Hablemos del proyecto <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA 360 */}
        <section
          id="experiencia-360"
          className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20"
        >
          <div className="mb-8 grid gap-5 lg:mb-9 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-cyan-300/60 sm:w-10" />

                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-200 sm:text-xs sm:tracking-[0.38em]">
                  Experiencias inmersivas
                </p>
              </div>

              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Experiencias 360°
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                  para recorrer espacios.
                </span>
              </h2>
            </div>

            <p className="text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
              Un complemento para propiedades, espacios comerciales y proyectos que necesitan una visita visual más inmersiva.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
            {/* INFO 360 */}
            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-5 sm:rounded-[2.2rem] sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-lg font-bold text-cyan-200">
                360°
              </div>

              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs sm:tracking-[0.3em]">
                Experiencia interactiva
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight">
                Una nueva forma de recorrer tus espacios.
              </h3>

              <p className="mt-4 leading-7 text-white/45">
                Ideal para propiedades, espacios comerciales, hoteles, proyectos
                arquitectónicos, eventos y experiencias.
              </p>

              <div className="mt-5 space-y-2">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm text-white/55">
                  ● Navegación interactiva
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm text-white/55">
                  ● Visualización inmersiva
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm text-white/55">
                  ● Múltiples dispositivos
                </div>
              </div>
            </div>

            {/* VIEWER */}
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#050811] p-2.5 sm:rounded-[2.5rem] sm:p-3">
              <div className="px-3 pb-4 pt-2 sm:px-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-[11px] sm:tracking-[0.3em]">
                  Vista interactiva
                </p>

                <p className="mt-2 text-lg font-semibold">
                  Explora en 360°
                </p>

                <p className="mt-1 text-xs text-white/30">
                  Arrastra la imagen para recorrer el espacio
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.7rem] sm:rounded-[2rem]">
                <Viewer360 />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20"
        >
          <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[120px]" />

          <div className="relative">
            <div className="mb-8 max-w-4xl sm:mb-10">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-cyan-300/60 sm:w-10" />

                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-200 sm:text-xs sm:tracking-[0.38em]">
                  Empecemos un proyecto
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                ¿Tienes una idea?
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                  Hagámosla visible.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 sm:mt-6 sm:text-lg sm:leading-8">
                Cuéntanos qué necesitas, dónde será el proyecto y para qué fecha.
                Te responderemos por WhatsApp para revisar el alcance y cotizarlo.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.82fr_1.18fr]">
              {/* DATOS CONTACTO */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.035] to-transparent p-6 shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:rounded-[2.6rem] sm:p-8 md:p-10">
                <div className="relative">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs sm:tracking-[0.3em]">
                    Contacto directo
                  </p>

                  <h3 className="mt-4 max-w-md text-3xl font-black leading-tight sm:mt-5 md:text-4xl">
                    Hablemos de lo que tienes en mente.
                  </h3>

                  <p className="mt-5 max-w-md leading-7 text-white/45">
                    Escríbenos por WhatsApp o completa el formulario. Revisaremos
                    tu solicitud y te responderemos por el mismo canal.
                  </p>

                  <a
                    href={whatsappHref(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/[0.08] bg-black/20 px-4 py-4 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] sm:mt-10 sm:rounded-[1.7rem] sm:px-5 sm:py-5"
                  >
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[11px] sm:tracking-[0.28em]">
                        WhatsApp
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
                        +57 305 424 7369
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-bold text-black sm:h-11 sm:w-11">
                      →
                    </span>
                  </a>

                  <a
                    href="mailto:impactusvisio@gmail.com"
                    className="group mt-3 flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/[0.08] bg-black/20 px-4 py-4 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] sm:rounded-[1.7rem] sm:px-5 sm:py-5"
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[11px] sm:tracking-[0.28em]">
                        Correo
                      </p>

                      <p className="mt-2 break-all text-base font-semibold text-white sm:text-lg">
                        impactusvisio@gmail.com
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] sm:h-11 sm:w-11">
                      ↗
                    </span>
                  </a>

                  <div className="mt-7 border-t border-white/[0.08] pt-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[11px]">
                      Base
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Bogotá · Colombia
                    </p>
                  </div>
                </div>
              </div>

              {/* FORMULARIO */}
              <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:rounded-[2.6rem] sm:p-7 md:p-9">
                <div className="mb-7 sm:mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs sm:tracking-[0.3em]">
                    Brief inicial
                  </p>

                  <h3 className="mt-3 text-2xl font-black md:text-3xl">
                    Cuéntanos sobre tu proyecto.
                  </h3>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className="w-full rounded-[1.2rem] border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50 sm:px-5"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="Ej. 305 424 7369"
                        className="w-full rounded-[1.2rem] border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50 sm:px-5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                      ¿Qué necesitas? *
                    </label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[1.2rem] border border-white/[0.08] bg-[#080b12] px-4 py-4 text-base text-white outline-none transition focus:border-cyan-300/50 sm:px-5"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Video para negocios">Video para negocios</option>
                      <option value="Producción con dron">Producción con dron</option>
                      <option value="Contenido para redes">Contenido para redes</option>
                      <option value="Producción completa">Producción completa</option>
                      <option value="Experiencia 360">Experiencia 360°</option>
                      <option value="Otro">Otro proyecto</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                      Cuéntanos qué quieres producir *
                    </label>
                    <textarea
                      name="proyecto"
                      value={formData.proyecto}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Necesito un video de una propiedad para redes y tomas aéreas..."
                      rows={4}
                      className="w-full resize-none rounded-[1.2rem] border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50 sm:px-5"
                    />
                  </div>

                  <details className="group rounded-[1.2rem] border border-white/[0.07] bg-white/[0.02]">
                    <summary className="cursor-pointer list-none px-4 py-4 text-sm font-semibold text-white/65 sm:px-5">
                      + Agregar datos opcionales: empresa, correo, ubicación y fecha
                    </summary>
                    <div className="grid gap-4 border-t border-white/[0.06] p-4 sm:grid-cols-2 sm:p-5">
                      <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} autoComplete="organization" placeholder="Empresa / marca" className="w-full rounded-[1rem] border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-base text-white outline-none placeholder:text-white/25 focus:border-cyan-300/50" />
                      <input type="email" name="correo" value={formData.correo} onChange={handleChange} autoComplete="email" placeholder="Correo" className="w-full rounded-[1rem] border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-base text-white outline-none placeholder:text-white/25 focus:border-cyan-300/50" />
                      <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} placeholder="Ubicación del proyecto" className="w-full rounded-[1rem] border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-base text-white outline-none placeholder:text-white/25 focus:border-cyan-300/50" />
                      <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} className="w-full rounded-[1rem] border border-white/[0.08] bg-[#080b12] px-4 py-3.5 text-base text-white outline-none focus:border-cyan-300/50" />
                    </div>
                  </details>

                  <div className="rounded-[1.1rem] border border-cyan-300/10 bg-cyan-300/[0.045] px-4 py-3 text-sm leading-6 text-white/50">
                    Usaremos tus datos únicamente para responder esta solicitud.
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-[1.1rem] border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-sm leading-6 text-white/45">
                    <input type="checkbox" name="autorizacion" checked={formData.autorizacion} onChange={handleChange} required className="mt-1 h-4 w-4 shrink-0 accent-cyan-300" />
                    <span>Autorizo el tratamiento de mis datos personales para ser contactado respecto a esta solicitud.</span>
                  </label>

                  {submitMessage && (
                    <div className="rounded-[1.3rem] border border-cyan-300/30 bg-cyan-300/[0.08] px-5 py-5 font-medium leading-7 text-cyan-50">
                      ✓ {submitMessage}
                    </div>
                  )}
                  {submitError && (
                    <div className="rounded-[1.3rem] border border-red-400/30 bg-red-400/[0.08] px-5 py-4 leading-7 text-red-200">
                      {submitError}
                    </div>
                  )}
                  {!submitMessage && (
                    <button type="submit" disabled={isSubmitting} className="group flex w-full items-center justify-center gap-3 rounded-[1.3rem] bg-cyan-300 px-6 py-4 font-bold text-black shadow-[0_12px_35px_rgba(34,211,238,0.16)] transition duration-300 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
                      {isSubmitting ? "Enviando solicitud..." : "Solicitar cotización"}
                      {!isSubmitting && <span>→</span>}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#010308]">
        <div className="absolute left-1/2 top-0 h-72 w-[60%] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-6 md:pt-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
            {/* MARCA */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#inicio" className="inline-flex items-center gap-4">
                <img
                  src="/logo-impactus.png"
                  alt="Impactus Visio Studio"
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-cyan-300/20"
                />

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.28em]">
                    Impactus Visio
                  </p>

                  <p className="mt-2 text-[11px] uppercase tracking-[0.5em] text-cyan-300/60">
                    Studio
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-sm leading-7 text-white/40">
                Video para negocios, producción con dron, contenido para redes y
                producción audiovisual completa desde Bogotá.
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/25">
                Bogotá · Colombia
              </p>
            </div>

            {/* EXPLORAR */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/30">
                Explorar
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a href="#inicio" className="block hover:text-cyan-200">
                  Inicio
                </a>

                <a href="#servicios" className="block hover:text-cyan-200">
                  Servicios
                </a>

                <a href="#trabajos" className="block hover:text-cyan-200">
                  Trabajos
                </a>

                <a href="#videos" className="block hover:text-cyan-200">
                  Videos
                </a>

                <a href="#contacto" className="block hover:text-cyan-200">
                  Contacto
                </a>
              </div>
            </div>

            {/* CONTACTO */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/30">
                Contacto
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-cyan-200"
                >
                  +57 305 424 7369
                </a>

                <a
                  href="mailto:impactusvisio@gmail.com"
                  className="block break-all hover:text-cyan-200"
                >
                  impactusvisio@gmail.com
                </a>
              </div>
            </div>

            {/* REDES */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/30">
                Síguenos
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a
                  href="https://instagram.com/impactus.visio.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-cyan-200"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://www.facebook.com/impactusvisiostudio?locale=es_LA"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-cyan-200"
                >
                  Facebook ↗
                </a>

                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-cyan-200"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-r from-cyan-300/[0.07] via-blue-500/[0.035] to-transparent px-6 py-7 sm:mt-12 sm:rounded-[2.3rem] md:flex md:items-center md:justify-between md:px-9 md:py-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs sm:tracking-[0.3em]">
                Próximo proyecto
              </p>

              <p className="mt-3 text-2xl font-black sm:text-3xl">
                Hagamos algo que valga la pena mirar.
              </p>
            </div>

            <a
              href={whatsappHref(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-black md:mt-0"
            >
              Iniciar conversación
              <span>→</span>
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-7 text-xs leading-6 text-white/25 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Impactus Visio Studio. Todos los derechos reservados.
            </p>

            <p>Imagen · Movimiento · Impacto</p>
          </div>
        </div>
      </footer>
    </div>
  );
}