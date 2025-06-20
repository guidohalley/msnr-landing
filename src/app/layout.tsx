import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

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
  openGraph: {
    title: "Impulsa tu marca con Misionary | Agencia de Marketing Digital",
    description:
      "Estrategia digital, publicidad, diseño web y producción audiovisual para marcas que quieren crecer. Agencia Misionary.",
    url: "https://misionary.agency/",
    siteName: "Misionary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Impulsa tu marca con Misionary",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors`}
      >
        <a href="#main" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-primary text-white px-4 py-2 rounded">Saltar al contenido principal</a>
        <Header />
        {/* Header global, toggle dark mode y skip link se agregan aquí */}
        {children}
      </body>
    </html>
  );
}
