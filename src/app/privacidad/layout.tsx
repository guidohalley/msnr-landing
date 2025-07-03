import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Misionary - Agencia Marketing Digital Posadas",
  description: "Conoce cómo Misionary, agencia de marketing digital en Posadas, Misiones, protege tu información personal. Política de privacidad, tratamiento de datos y derechos del usuario en Argentina.",
  keywords: [
    // Palabras clave principales
    "politica privacidad misionary",
    "agencia marketing digital posadas privacidad",
    "proteccion datos misiones argentina",
    "privacidad marketing digital posadas",
    
    // Términos legales + localización
    "politica privacidad agencia posadas",
    "tratamiento datos personales misiones",
    "derechos usuario marketing digital",
    "proteccion informacion posadas",
    
    // Servicios + privacidad
    "privacidad diseño web posadas",
    "datos seguros marketing digital",
    "confidencialidad agencia misiones",
    "politica datos posadas argentina",
    
    // Términos específicos
    "gdpr argentina marketing",
    "ley proteccion datos personales",
    "privacidad redes sociales",
    "seguridad datos empresa"
  ].join(", "),
  
  // Open Graph para redes sociales
  openGraph: {
    title: "Política de Privacidad | Misionary Posadas",
    description: "Tu privacidad es nuestra prioridad. Conoce cómo protegemos tu información en nuestra agencia de marketing digital en Posadas, Misiones.",
    url: "https://misionary.com/privacidad",
    siteName: "Misionary",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://misionary.com/og-privacidad.jpg",
        width: 1200,
        height: 630,
        alt: "Política de Privacidad - Misionary Agencia Marketing Digital Posadas"
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | Misionary Posadas",
    description: "Protegemos tu información personal. Conoce nuestra política de privacidad y tratamiento de datos.",
    images: ["https://misionary.com/og-privacidad.jpg"]
  },

  // Metadatos adicionales
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Información adicional
  authors: [{ name: "Misionary" }],
  creator: "Misionary",
  publisher: "Misionary",
  category: "Legal",
  
  // Localización
  alternates: {
    canonical: "https://misionary.com/privacidad",
    languages: {
      "es-AR": "https://misionary.com/privacidad",
      "es": "https://misionary.com/privacidad"
    }
  },

  // Datos estructurados adicionales
  other: {
    "geo.region": "AR-N",
    "geo.placename": "Posadas",
    "geo.position": "-27.3621;-55.9006",
    "ICBM": "-27.3621, -55.9006"
  }
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
