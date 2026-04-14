import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impactus-visio-studio-web.vercel.app"),
  title: "Impactus Visio Studio",
  description:
    "Producción audiovisual con dron, edición de video, voz en off y contenido visual de alto impacto para marcas, negocios y eventos.",
  openGraph: {
    title: "Impactus Visio Studio",
    description:
      "Producción audiovisual con dron, edición de video, voz en off y contenido visual de alto impacto para marcas, negocios y eventos.",
    url: "https://impactus-visio-studio-web.vercel.app",
    siteName: "Impactus Visio Studio",
    images: [
      {
        url: "https://impactus-visio-studio-web.vercel.app/og-impactus.jpg",
        width: 1200,
        height: 630,
        alt: "Impactus Visio Studio",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impactus Visio Studio",
    description:
      "Producción audiovisual con dron, edición de video, voz en off y contenido visual de alto impacto para marcas, negocios y eventos.",
    images: ["https://impactus-visio-studio-web.vercel.app/og-impactus.jpg"],
  },
  icons: {
    icon: "/logo-impactus.png",
    shortcut: "/logo-impactus.png",
    apple: "/logo-impactus.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}