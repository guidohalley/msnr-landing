import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import OptimizedScripts from "@/components/OptimizedScripts";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impulsa tu marca con Misionary | Agencia de Marketing Digital",
  description:
    "Estrategia digital, publicidad, diseño web y producción audiovisual para marcas que quieren crecer. Agencia Misionary.",
  keywords: "marketing digital, diseño web, producción audiovisual, agencia de marketing, misiones, posadas, argentina, publicidad, seo, sem, redes sociales",
  authors: [{ name: "Misionary Agency" }],
  applicationName: "Misionary Agency",
  creator: "Misionary Agency",
  publisher: "Misionary Agency",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Agencia de Marketing en Posadas Misiones | Misionary",
    description:
      "Estrategia digital, publicidad, diseño web y producción audiovisual para marcas que quieren crecer. Agencia Misionary.",
    url: "https://misionary.com",
    siteName: "Misionary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agencia de Marketing Digital en Posadas Misiones | Misionary",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulsa tu marca con Misionary | Agencia de Marketing Digital",
    description: "Sitios Web, Publicidad, Administracion de Redes Sociales, Diseño Grafico y producción audiovisual para marcas que quieren crecer. Agencia Misionary.",
    images: ["/og-image.png"],
  },
  category: "Marketing Digital",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html 
      lang="es" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#262626" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/fonts/MundialRegular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/MundialBold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
        <OptimizedScripts />
      </body>
    </html>
  );
}
