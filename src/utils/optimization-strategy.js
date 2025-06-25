// Este es un archivo que contiene la estrategia de optimización para la landing page.

/**
 * ESTRATEGIA DE OPTIMIZACIÓN DE RENDIMIENTO WEB
 * 
 * 1. Optimización de JavaScript
 * - Utilizar dynamic imports para cargas tardías de componentes no críticos
 * - Desactivar polyfills innecesarios mediante actualización del browserslist
 * - Utilizar el modo de producción optimizado de Next.js
 * 
 * 2. Optimización de CSS
 * - Purgar CSS no utilizado con PurgeCSS
 * - Implementar critical CSS para el contenido visible inicialmente
 * - Cargar estilos no críticos de forma asíncrona
 * 
 * 3. Optimización de imágenes
 * - Utilizar formatos modernos (AVIF, WebP) con fallbacks
 * - Implementar lazy loading para imágenes bajo la vista inicial
 * - Utilizar dimensiones específicas y evitar cambios de layout
 * 
 * 4. Optimización de fuentes
 * - Precargar fuentes críticas
 * - Utilizar font-display: swap para evitar texto invisible
 * - Aplicar subsetting de fuentes para reducir tamaño
 * 
 * 5. Mejoras de accesibilidad
 * - Mantener ratio de contraste WCAG 2.1 AA (4.5:1 para texto normal, 3:1 para texto grande)
 * - Implementar ARIA correctamente sin duplicidades
 * - Asegurar navegación completa por teclado
 */

// Valores de contraste recomendados para la paleta de colores
const contrastRatios = {
  // Texto claro sobre fondo oscuro
  lightOnDark: {
    background: '#1a1a1a',
    text: '#F2F2F2',       // Ratio: 13.7:1 (Excelente)
    subtleText: '#E5E5E5', // Ratio: 12.6:1 (Excelente)
  },
  // Texto oscuro sobre fondo claro
  darkOnLight: {
    background: '#F2F2F2',
    text: '#262626',       // Ratio: 12.4:1 (Excelente)
    subtleText: '#333333', // Ratio: 10.8:1 (Excelente)
  },
  // Acentos de color con suficiente contraste
  accents: {
    lime: '#E9FC87',       // Ratio con fondo oscuro: 15.6:1 (Excelente)
    purple: '#BCB4FF',     // Ratio con fondo oscuro: 8.3:1 (Excelente)
  }
};

module.exports = {
  contrastRatios
};
