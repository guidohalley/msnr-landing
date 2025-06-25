'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Este componente implementa una estrategia de carga optimizada para scripts no críticos
 * Ayuda a mejorar métricas como LCP y FCP sin renunciar a funcionalidades
 */
export default function OptimizedScripts() {
  // Estado para saber si estamos en viewport interactivo
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  
  useEffect(() => {
    // Sólo ejecutamos esto en el cliente
    if (typeof window === 'undefined') return;
    
    // Verificamos que la página haya terminado su carga inicial
    const handleFirstInteraction = () => {
      // Esperamos a que se haya cargado el contenido crítico
      if (document.readyState === 'complete') {
        setUserHasInteracted(true);
        
        // Removemos los event listeners después de la primera interacción
        ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach(event => {
          document.removeEventListener(event, handleFirstInteraction);
        });
      }
    };
    
    // Escuchamos eventos de interacción
    ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { passive: true });
    });
    
    // Alternativamente, cargar después de que el contenido inicial esté visible
    const timer = setTimeout(() => {
      handleFirstInteraction();
    }, 3000); // Esperar 3 segundos como fallback
    
    return () => {
      clearTimeout(timer);
      ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);
  
  return (
    <>
      {userHasInteracted && (
        <>
          {/* Aquí colocamos scripts no críticos que pueden cargarse después */}
          <Script
            id="non-critical-script"
            strategy="lazyOnload"
          />
          
          {/* Precarga de recursos que serán necesarios pronto */}
          <link 
            rel="preload" 
            href="/fonts/MundialRegular.otf" 
            as="font" 
            type="font/otf" 
            crossOrigin="anonymous"
          />
        </>
      )}
    </>
  );
}
