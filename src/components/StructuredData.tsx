"use client";

import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Cargar datos estructurados de forma asíncrona
    const loadStructuredData = async () => {
      try {
        const response = await fetch('/schema.json');
        const schemaData = await response.json();
        
        // Crear script tag para JSON-LD
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schemaData);
        
        // Agregar al head si no existe ya
        if (!document.querySelector('script[type="application/ld+json"]')) {
          document.head.appendChild(script);
        }
      } catch (error) {
        console.warn('Error loading structured data:', error);
      }
    };

    loadStructuredData();
  }, []);

  return null;
};

export default StructuredData;
