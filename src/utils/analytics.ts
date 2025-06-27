'use client';

// Este archivo contiene funciones de utilidad para el seguimiento de eventos de GA4

/**
 * Envía un evento personalizado a Google Analytics 4
 * @param eventName Nombre del evento
 * @param eventParams Parámetros adicionales del evento
 */
export const trackEvent = (eventName: string, eventParams = {}) => {
  if (!window.gtag) {
    console.warn('Google Analytics no está disponible');
    return;
  }

  // Enviar el evento a GA4
  window.gtag('event', eventName, eventParams);
};

/**
 * Envía un evento de clic en enlace
 * @param linkText Texto del enlace
 * @param linkUrl URL del enlace
 * @param linkCategory Categoría del enlace (ej: "navegación", "footer", "cta")
 */
export const trackLinkClick = (linkText: string, linkUrl: string, linkCategory: string = 'link') => {
  trackEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl,
    link_category: linkCategory
  });
};

/**
 * Envía un evento de envío de formulario
 * @param formName Nombre del formulario
 * @param formSuccess Indica si el envío fue exitoso
 */
export const trackFormSubmit = (formName: string, formSuccess: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_success: formSuccess
  });
};

/**
 * Envía un evento cuando el usuario mira un servicio
 * @param serviceName Nombre del servicio visualizado
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName
  });
};

/**
 * Envía un evento cuando el usuario ve un cierto porcentaje de la página
 * @param scrollPercentage Porcentaje de scroll
 */
export const trackScroll = (scrollPercentage: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: scrollPercentage
  });
};
