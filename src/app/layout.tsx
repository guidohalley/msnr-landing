import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import OptimizedScripts from "@/components/OptimizedScripts";
import StructuredData from "@/components/StructuredData";
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
  metadataBase: new URL('https://misionary.com'),
  title: "Agencia de Marketing Digital en Posadas, Misiones | Misionary",
  description:
    "Agencia de marketing digital líder en Posadas, Misiones. Diseño web, publicidad digital, redes sociales y producción audiovisual. Potenciamos tu marca en Argentina y el mundo.",
  keywords: [
    // Palabras clave locales primarias
    "agencia marketing digital posadas",
    "marketing digital misiones argentina", 
    "diseño web posadas misiones",
    "publicidad digital posadas",
    "agencia publicidad misiones",
    
    // Servicios específicos + localización
    "diseño paginas web posadas",
    "manejo redes sociales misiones",
    "produccion audiovisual posadas",
    "campañas publicitarias misiones",
    "seo posadas misiones",
    
    // Variaciones locales
    "agencia marketing posadas misiones",
    "marketing digital nordeste argentino",
    "publicidad online misiones",
    "diseño grafico posadas",
    
    // Palabras clave comerciales
    "crear pagina web posadas",
    "agencia digital misiones",
    "marketing empresas posadas"
  ].join(", "),
  authors: [{ name: "Misionary - Agencia de Marketing Digital" }],
  applicationName: "Misionary Agency",
  creator: "Misionary Agency - Posadas, Misiones",
  publisher: "Misionary Agency",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here", // Agregar cuando tengas Google Search Console
  },
  alternates: {
    canonical: "https://misionary.com",
  },
  openGraph: {
    title: "Misionary | Agencia de Marketing Digital en Posadas, Misiones",
    description:
      "Agencia de marketing digital líder en Posadas, Misiones. Diseño web, publicidad digital, redes sociales y producción audiovisual para empresas de Argentina.",
    url: "https://misionary.com",
    siteName: "Misionary - Marketing Digital Posadas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Misionary - Agencia de Marketing Digital en Posadas, Misiones, Argentina",
        type: "image/png",
      },
    ],
    locale: "es_AR",
    type: "website",
    countryName: "Argentina",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misionary | Agencia de Marketing Digital en Posadas, Misiones",
    description: "Diseño web, publicidad digital, redes sociales y producción audiovisual para empresas de Posadas, Misiones y toda Argentina.",
    images: ["/twitter-image.png"], // Imagen optimizada para Twitter
  },
  category: "Marketing Digital",
  other: {
    "geo.region": "AR-N",
    "geo.placename": "Posadas, Misiones",
    "geo.position": "-27.3887448;-55.8911429", // Coordenadas exactas de GMB
    "ICBM": "-27.3887448, -55.8911429",
  },
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
        <meta name="msvalidate.01" content="815A6F365E2FFBD049481099FCBB74C7" />
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
          <StructuredData />
          {children}
        </Providers>
        <OptimizedScripts />
      </body>
    </html>
  );
}
