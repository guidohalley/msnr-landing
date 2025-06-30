// Utilidades para tracking de eventos en múltiples plataformas
// Este archivo proporciona funciones para trackear eventos específicos
// de marketing digital en Facebook, LinkedIn y TikTok

declare global {
  interface Window {
    fbq: (action: string, event: string, data?: Record<string, unknown>) => void;
    lintrk: (action: string, data?: Record<string, unknown>) => void;
    ttq: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

// Tipos de eventos comunes para agencias de marketing
export type TrackingEvent = 
  | 'contact_form_submitted'
  | 'service_inquiry'
  | 'phone_call_initiated'
  | 'whatsapp_opened'
  | 'portfolio_viewed'
  | 'service_filter_opened'
  | 'quote_requested';

// Función principal de tracking que envía a todos los pixels
export const trackEvent = (event: TrackingEvent, data?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  
  const eventData = {
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    ...data
  };

  // Facebook Pixel tracking
  if (window.fbq) {
    const fbEvent = getFacebookEvent(event);
    if (fbEvent) {
      window.fbq('track', fbEvent, eventData);
    }
  }

  // LinkedIn Insight Tag tracking
  if (window.lintrk) {
    window.lintrk('track', { conversion_id: getLinkedInConversionId(event) });
  }

  // TikTok Pixel tracking
  if (window.ttq) {
    const ttEvent = getTikTokEvent(event);
    if (ttEvent) {
      window.ttq.track(ttEvent, eventData);
    }
  }

  // Log para debugging en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Tracking Event:', event, eventData);
  }
};

// Mapeo de eventos a Facebook Pixel
const getFacebookEvent = (event: TrackingEvent): string | null => {
  const eventMap: Record<TrackingEvent, string> = {
    'contact_form_submitted': 'Contact',
    'service_inquiry': 'Lead',
    'phone_call_initiated': 'Contact',
    'whatsapp_opened': 'Contact',
    'portfolio_viewed': 'ViewContent',
    'service_filter_opened': 'ViewContent',
    'quote_requested': 'Lead'
  };
  
  return eventMap[event] || null;
};

// Mapeo de eventos a TikTok Pixel
const getTikTokEvent = (event: TrackingEvent): string | null => {
  const eventMap: Record<TrackingEvent, string> = {
    'contact_form_submitted': 'SubmitForm',
    'service_inquiry': 'GenerateLead',
    'phone_call_initiated': 'Contact',
    'whatsapp_opened': 'Contact',
    'portfolio_viewed': 'ViewContent',
    'service_filter_opened': 'ViewContent',
    'quote_requested': 'GenerateLead'
  };
  
  return eventMap[event] || null;
};

// LinkedIn usa conversion IDs específicos (deberás configurarlos en LinkedIn)
const getLinkedInConversionId = (event: TrackingEvent): number => {
  const conversionMap: Record<TrackingEvent, number> = {
    'contact_form_submitted': 1234567, // Reemplazar con tu conversion ID real
    'service_inquiry': 1234568,
    'phone_call_initiated': 1234569,
    'whatsapp_opened': 1234570,
    'portfolio_viewed': 1234571,
    'service_filter_opened': 1234572,
    'quote_requested': 1234573
  };
  
  return conversionMap[event] || 0;
};

// Funciones específicas para eventos comunes
export const trackContactFormSubmission = (formData: {
  service?: string;
  source?: string;
}) => {
  trackEvent('contact_form_submitted', {
    service: formData.service || 'general',
    source: formData.source || 'contact_form',
    value: 100, // Valor estimado del lead
    currency: 'ARS'
  });
};

export const trackServiceInquiry = (service: string, specialist?: string) => {
  trackEvent('service_inquiry', {
    service,
    specialist,
    value: 150,
    currency: 'ARS'
  });
};

export const trackWhatsAppOpen = (service?: string, specialist?: string) => {
  trackEvent('whatsapp_opened', {
    service: service || 'general',
    specialist: specialist || 'general',
    contact_method: 'whatsapp'
  });
};

export const trackPhoneCall = () => {
  trackEvent('phone_call_initiated', {
    contact_method: 'phone'
  });
};

export const trackPortfolioView = (projectType?: string) => {
  trackEvent('portfolio_viewed', {
    content_type: 'portfolio',
    project_type: projectType || 'general'
  });
};

export const trackQuoteRequest = (services: string[]) => {
  trackEvent('quote_requested', {
    services: services.join(','),
    num_services: services.length,
    value: 200,
    currency: 'ARS'
  });
};
