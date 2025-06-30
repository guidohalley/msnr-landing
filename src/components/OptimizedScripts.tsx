'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';

// Configuración de tracking pixels - cambiar por los IDs reales
const TRACKING_CONFIG = {
  // Facebook Pixel ID
  FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'YOUR_FACEBOOK_PIXEL_ID',
  
  // LinkedIn Insight Tag Partner ID
  LINKEDIN_PARTNER_ID: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || 'YOUR_LINKEDIN_PARTNER_ID',
  
  // TikTok Pixel ID
  TIKTOK_PIXEL_ID: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || 'YOUR_TIKTOK_PIXEL_ID',
};

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
          {/* Facebook Pixel */}
          <Script
            id="facebook-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${TRACKING_CONFIG.FACEBOOK_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          
          {/* LinkedIn Insight Tag */}
          <Script
            id="linkedin-insight"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "${TRACKING_CONFIG.LINKEDIN_PARTNER_ID}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
              `,
            }}
          />
          
          {/* TikTok Pixel */}
          <Script
            id="tiktok-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function (w, d, t) {
                  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                  ttq.load('${TRACKING_CONFIG.TIKTOK_PIXEL_ID}');
                  ttq.page();
                }(window, document, 'ttq');
              `,
            }}
          />
          
          {/* No-script fallbacks para cuando JavaScript está deshabilitado */}
          <noscript>
            {/* Facebook Pixel noscript */}
            <Image 
              height={1} 
              width={1} 
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${TRACKING_CONFIG.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
              unoptimized
            />
          </noscript>
          
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
