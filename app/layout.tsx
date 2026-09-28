import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.impactusvisio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Impactus Visio Studio | Video, Dron y Contenido para Negocios",
    template: "%s | Impactus Visio Studio",
  },

  description:
    "Producción audiovisual en Bogotá para empresas, inmobiliarias, restaurantes, eventos y marcas. Video para negocios, producción con dron, contenido para redes y producción completa.",

  keywords: [
    "Impactus Visio Studio",
    "producción audiovisual Bogotá",
    "producción de video Bogotá",
    "dron Bogotá",
    "tomas con dron",
    "fotografía aérea",
    "video para negocios",
    "video para inmobiliarias",
    "video para restaurantes",
    "contenido para redes sociales",
    "Reels para negocios",
    "video corporativo",
    "edición de video",
    "voz en off",
    "producción audiovisual Colombia",
    "experiencias 360",
    "video profesional",
    "estudio audiovisual Bogotá",
  ],

  authors: [
    {
      name: "Impactus Visio Studio",
      url: siteUrl,
    },
  ],

  creator: "Impactus Visio Studio",
  publisher: "Impactus Visio Studio",

  category: "Producción audiovisual",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Impactus Visio Studio | Video, Dron y Contenido para Negocios",

    description:
      "Video para negocios, producción con dron, contenido para redes y producción audiovisual completa desde Bogotá.",

    url: siteUrl,

    siteName: "Impactus Visio Studio",

    images: [
      {
        url: "/og-impactus.jpg",
        width: 1200,
        height: 630,
        alt: "Impactus Visio Studio - Producción audiovisual, dron y contenido visual",
      },
    ],

    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Impactus Visio Studio | Video, Dron y Contenido para Negocios",

    description:
      "Producción audiovisual para empresas, propiedades, eventos y marcas. Cotiza por WhatsApp.",

    images: ["/og-impactus.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/logo-impactus.png",
        type: "image/png",
      },
    ],

    shortcut: "/logo-impactus.png",

    apple: [
      {
        url: "/logo-impactus.png",
      },
    ],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#02040a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "Impactus Visio Studio",

    description:
      "Estudio audiovisual en Bogotá especializado en video para negocios, producción con dron, contenido para redes y producción audiovisual completa.",

    url: siteUrl,

    logo: `${siteUrl}/logo-impactus.png`,

    image: `${siteUrl}/og-impactus.jpg`,

    email: "impactusvisio@gmail.com",

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://wa.me/573054247369",
      availableLanguage: ["Spanish"],
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },

    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },

    sameAs: [
      "https://instagram.com/impactus.visio.studio",
      "https://www.facebook.com/impactusvisiostudio?locale=es_LA",
    ],

    knowsAbout: [
      "Video para negocios",
      "Producción con dron",
      "Contenido para redes",
      "Producción audiovisual",
      "Edición de video",
      "Voz en off",
      "Experiencias 360",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios audiovisuales",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video para negocios" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Producción con dron" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contenido para redes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Producción audiovisual completa" } },
      ],
    },
  };

  return (
    <html
      lang="es-CO"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}