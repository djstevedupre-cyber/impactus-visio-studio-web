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

const siteUrl = "https://impactus-visio-studio-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Impactus Visio Studio | Producción Audiovisual, Dron y Contenido Visual",
    template: "%s | Impactus Visio Studio",
  },

  description:
    "Estudio creativo audiovisual en Bogotá especializado en producción de video, tomas profesionales con dron, edición, voz en off, contenido visual y experiencias 360° para marcas, negocios y eventos.",

  keywords: [
    "Impactus Visio Studio",
    "producción audiovisual Bogotá",
    "producción de video Bogotá",
    "drone Bogotá",
    "tomas con dron",
    "fotografía aérea",
    "edición de video",
    "voz en off",
    "contenido audiovisual",
    "contenido para marcas",
    "contenido para redes sociales",
    "video corporativo",
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
    title: "Impactus Visio Studio | Creamos contenido que impacta",
    description:
      "Producción audiovisual, tomas con dron, edición, voz en off y experiencias visuales para marcas, negocios y eventos.",
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

    title: "Impactus Visio Studio | Creamos contenido que impacta",

    description:
      "Producción audiovisual, dron, edición, voz en off y contenido visual para marcas, negocios y eventos.",

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
      "Estudio creativo audiovisual especializado en producción de video, tomas con dron, edición, voz en off, contenido visual y experiencias 360°.",

    url: siteUrl,

    logo: `${siteUrl}/logo-impactus.png`,

    image: `${siteUrl}/og-impactus.jpg`,

    email: "impactusvisio@gmail.com",

    telephone: "+573054247369",

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
      "Producción audiovisual",
      "Tomas con dron",
      "Edición de video",
      "Voz en off",
      "Contenido para marcas",
      "Experiencias 360",
    ],
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