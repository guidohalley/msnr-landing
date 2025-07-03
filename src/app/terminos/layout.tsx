import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Misionary - Agencia Marketing Digital Posadas",
  description: "Términos y condiciones de Misionary, agencia de marketing digital en Posadas, Misiones. Conoce las condiciones de servicio, pagos, responsabilidades y derechos en Argentina.",
  keywords: [
    // Palabras clave principales
    "terminos condiciones misionary",
    "agencia marketing digital posadas terminos",
    "condiciones servicio misiones argentina",
    "terminos marketing digital posadas",
    
    // Términos legales + localización
    "terminos servicio agencia posadas",
    "condiciones contrato marketing misiones",
    "terminos uso marketing digital",
    "condiciones legales posadas",
    
    // Servicios + términos
    "terminos diseño web posadas",
    "condiciones marketing digital",
    "contrato agencia misiones",
    "terminos legales posadas argentina",
    
    // Términos específicos
    "responsabilidad agencia marketing",
    "condiciones pago marketing digital",
    "terminos propiedad intelectual",
    "condiciones servicio argentina"
  ].join(", "),
  
  // Open Graph para redes sociales
  openGraph: {
    title: "Términos y Condiciones | Misionary Posadas",
    description: "Conoce los términos y condiciones que rigen nuestros servicios de marketing digital en Posadas, Misiones, Argentina.",
    url: "https://misionary.com/terminos",
    siteName: "Misionary",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://misionary.com/og-terminos.jpg",
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones - Misionary Agencia Marketing Digital Posadas"
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | Misionary Posadas",
    description: "Términos y condiciones de servicio de nuestra agencia de marketing digital en Posadas, Misiones.",
    images: ["https://misionary.com/og-terminos.jpg"]
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
    canonical: "https://misionary.com/terminos",
    languages: {
      "es-AR": "https://misionary.com/terminos",
      "es": "https://misionary.com/terminos"
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

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
