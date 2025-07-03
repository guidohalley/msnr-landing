"use client";

export default function PoliticasStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Políticas de Privacidad",
    "description": "Políticas de privacidad y tratamiento de datos de Misionary, agencia de marketing digital en Posadas, Misiones, Argentina",
    "url": "https://misionary.com/privacidad",
    "inLanguage": "es-AR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Misionary",
      "url": "https://misionary.com"
    },
    "about": {
      "@type": "Organization",
      "name": "Misionary",
      "alternateName": "MSNR",
      "description": "Agencia de marketing digital en Posadas, Misiones, Argentina",
      "url": "https://misionary.com",
      "email": "marketing@misionary.com",
      "telephone": "+5493764609701",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Posadas",
        "addressRegion": "Misiones",
        "addressCountry": "AR"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Argentina"
      },
      "serviceType": [
        "Marketing Digital",
        "Diseño Web",
        "Producción Audiovisual",
        "Campañas Publicitarias",
        "Gestión de Redes Sociales",
        "Identidad Visual"
      ]
    },
    "mainEntity": {
      "@type": "Article",
      "name": "Políticas de Privacidad",
      "headline": "Políticas de Privacidad - Misionary",
      "description": "Información detallada sobre cómo Misionary protege y maneja la información personal de sus clientes y usuarios",
      "author": {
        "@type": "Organization",
        "name": "Misionary"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Misionary",
        "logo": {
          "@type": "ImageObject",
          "url": "https://misionary.com/msnr.svg"
        }
      },
      "datePublished": "2025-07-01",
      "dateModified": "2025-07-03",
      "articleSection": "Legal"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://misionary.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Políticas de Privacidad",
          "item": "https://misionary.com/privacidad"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
