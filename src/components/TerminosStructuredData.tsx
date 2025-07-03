"use client";

export default function TerminosStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Términos y Condiciones",
    "description": "Términos y condiciones de servicio de Misionary, agencia de marketing digital en Posadas, Misiones, Argentina",
    "url": "https://misionary.com/terminos",
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
      "name": "Términos y Condiciones",
      "headline": "Términos y Condiciones - Misionary",
      "description": "Condiciones de servicio, obligaciones, responsabilidades y derechos que rigen la relación contractual con Misionary",
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
          "name": "Términos y Condiciones",
          "item": "https://misionary.com/terminos"
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
