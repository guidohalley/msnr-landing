"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import MsnrImage from "./ui/msnr-image";
import { 
  ChevronDown, 
  MapPin, 
  BarChart3, 
  Video, 
  PenTool, 
  Megaphone,
  Globe, 
  Code
} from "lucide-react";

// Componente de partículas flotantes 3D - Optimizado para rendimiento en dispositivos móviles
function FloatingElements() {
  // Detectamos si estamos en un dispositivo móvil para reducir elementos animados
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    // Comprobamos si el ancho es menor a 768px o si el usuario prefiere reducir el movimiento
    const checkPerformance = () => {
      const isSmallDevice = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setReducedMotion(isSmallDevice || prefersReducedMotion);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Elementos flotantes inspirados en ReactBits - Con animaciones reducidas en móvil */}
      <motion.div
        className="absolute w-44 h-44 md:w-64 md:h-64 rounded-2xl border border-[#E9FC87]/30 bg-gradient-to-br from-[#262626]/80 to-transparent backdrop-blur-md"
        initial={{ opacity: 0, x: "70vw", y: "10vh", rotate: -20, scale: 0.8 }}
        animate={{ 
          opacity: reducedMotion ? 0.5 : 0.7, 
          x: reducedMotion ? "68vw" : "65vw", 
          y: "15vh", 
          rotate: reducedMotion ? 0 : -5,
          scale: 1,
          transition: { 
            duration: reducedMotion ? 15 : 10, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          } 
        }}
      >
        {/* Patrón de puntos */}
        <div className="absolute inset-4 grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-[#E9FC87]/70"
            />
          ))}
        </div>
      </motion.div>
      
      {/* Segundo elemento flotante - completamente oculto en móviles */}
      <motion.div
        className={`absolute ${reducedMotion ? "hidden" : "hidden md:block"} w-52 h-52 rounded-2xl bg-gradient-to-br from-[#BCB4FF]/30 to-transparent border border-[#BCB4FF]/20 backdrop-blur-sm`}
        style={{ fontFamily: "monospace" }}
        initial={{ opacity: 0, x: "15vw", y: "60vh", rotate: 10, scale: 0.9 }}
        animate={{ 
          opacity: 0.6, 
          x: "12vw", 
          y: "65vh", 
          rotate: 15,
          scale: 1,
          transition: { 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          } 
        }}
      >
        <div className="p-3 text-[9px] text-[#F2F2F2]/80 overflow-hidden">
          <pre>
            {`function createMagic() {
  const vision = transform(
    ideas.map(i => i.innovative)
  );
  return new Digital(vision);
}`}
          </pre>
        </div>
      </motion.div>
      
      {/* Tercer elemento flotante - simplificado en móviles */}
      <motion.div
        className={`absolute ${reducedMotion ? "w-32 h-32" : "w-40 h-40 md:w-56 md:h-56"} rounded-2xl bg-gradient-to-br from-[#262626]/80 to-[#262626]/40 backdrop-blur-sm grid`}
        style={{ gridTemplateColumns: "repeat(8, 1fr)", gridTemplateRows: "repeat(8, 1fr)" }}
        initial={{ opacity: 0, x: "65vw", y: "65vh", rotate: -15, scale: 0.8 }}
        animate={{ 
          opacity: reducedMotion ? 0.5 : 0.7, 
          x: reducedMotion ? "70vw" : "60vw", 
          y: reducedMotion ? "70vh" : "60vh", 
          rotate: reducedMotion ? 0 : -10,
          scale: reducedMotion ? 0.8 : 0.9,
          transition: { 
            duration: reducedMotion ? 20 : 12, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: reducedMotion ? 0 : 2
          } 
        }}
      >
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-8 gap-0">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i} 
              className="w-full h-full border-r border-[#E9FC87]/20 col-span-1"
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8 gap-0">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i} 
              className="w-full h-full border-b border-[#E9FC87]/20 row-span-1"
            />
          ))}
        </div>
      </motion.div>
      
      {/* Líneas luminosas animadas - Performance optimizada */}
      <svg className={`absolute inset-0 w-full h-full ${reducedMotion ? 'opacity-20' : 'opacity-40'}`} xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,400 Q300,350 600,450 T1200,400 T1800,450"
          stroke="url(#gradient1)"
          strokeWidth={reducedMotion ? 1 : 1.5}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: reducedMotion ? 0.3 : 0.5,
            transition: { duration: reducedMotion ? 3.5 : 2.5, ease: "easeOut" } 
          }}
        />
        <motion.path
          d="M0,500 Q450,400 900,550 T1800,450" 
          stroke="url(#gradient2)"
          strokeWidth={reducedMotion ? 1 : 2}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: reducedMotion ? 0.2 : 0.5,
            transition: { 
              duration: reducedMotion ? 4 : 3, 
              delay: reducedMotion ? 0 : 0.5, 
              ease: "easeOut" 
            } 
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#262626" stopOpacity="0" />
            <stop offset="50%" stopColor="#E9FC87" stopOpacity="1" />
            <stop offset="100%" stopColor="#262626" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E9FC87" stopOpacity="0" />
            <stop offset="50%" stopColor="#BCB4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E9FC87" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Hero3() {
  // Referencias con tipos correctos para React 19
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Estado para almacenar las dimensiones iniciales y actuales
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [contentLoaded, setContentLoaded] = useState(false);
  
  // Efectos de scroll con valores optimizados según dispositivo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transformaciones basadas en scroll con valores responsivos
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, dimensions.height * 0.15]);
  
  // Para detectar cuando el usuario scrollea
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasTrackedScroll, setHasTrackedScroll] = useState({
    fifty: false,
    seventyFive: false,
    ninety: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      // Para el indicador visual de scroll
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
      
      // Para el tracking de scroll depth
      const scrollPercentage = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      // Trackear diferentes puntos de scroll una sola vez por sesión
      if (scrollPercentage >= 50 && !hasTrackedScroll.fifty) {
        import("@/utils/analytics").then(({ trackScroll }) => {
          trackScroll(50);
          setHasTrackedScroll(prev => ({ ...prev, fifty: true }));
        });
      }
      
      if (scrollPercentage >= 75 && !hasTrackedScroll.seventyFive) {
        import("@/utils/analytics").then(({ trackScroll }) => {
          trackScroll(75);
          setHasTrackedScroll(prev => ({ ...prev, seventyFive: true }));
        });
      }
      
      if (scrollPercentage >= 90 && !hasTrackedScroll.ninety) {
        import("@/utils/analytics").then(({ trackScroll }) => {
          trackScroll(90);
          setHasTrackedScroll(prev => ({ ...prev, ninety: true }));
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTrackedScroll]);

  // Función para hacer scroll a la siguiente sección
  const scrollToNextSection = () => {
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    });
  };

  // Sistema avanzado de detección de dispositivos y ajuste optimizado
  const [screenSize, setScreenSize] = useState({
    isMobile: false,          // Teléfonos móviles (hasta 640px)
    isSmallScreen: false,     // Tablets y pantallas pequeñas (hasta 1024px)
    isPortrait: false,        // Orientación vertical
    viewportHeight: 0,        // Altura de la ventana
    viewportWidth: 0          // Ancho de la ventana
  });
  
  // Efecto para medir dimensiones exactas del contenedor
  useEffect(() => {
    const updateDimensions = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize({
        isMobile: width < 640,
        isSmallScreen: width < 1024,
        isPortrait: height > width,
        viewportHeight: height,
        viewportWidth: width
      });
      
      // Marcamos el contenido como cargado después de un breve delay
      setTimeout(() => setContentLoaded(true), 100);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('orientationchange', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('orientationchange', updateDimensions);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col justify-center items-center min-h-screen h-screen 
                 py-8 xs:py-10 px-3 xs:px-4 md:px-16 overflow-hidden bg-[#262626]
                 ${contentLoaded ? 'transition-opacity duration-500 opacity-100' : 'opacity-0'}`}
      aria-label="Hero principal de MISIONARY"
      tabIndex={-1}
      style={{ 
        height: screenSize.viewportHeight > 0 ? `${screenSize.viewportHeight}px` : '100vh',
      }}
    >
      {/* Fondo con gradientes sutiles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#262626]/90 via-[#262626] to-[#1a1a1a]" />
        <div className="absolute bottom-0 left-20 w-[500px] h-[500px] rounded-full bg-[#E9FC87]/5 blur-3xl" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-[#BCB4FF]/5 blur-3xl" />
      </div>
      
      {/* Elementos flotantes 3D */}
      <FloatingElements />
      
      {/* Logo prominente superior - Más grande en mobile con posicionamiento dinámico */}
      <motion.div
        className={`absolute ${
          screenSize.isPortrait 
            ? "top-[22%] xs:top-[25%]" 
            : screenSize.isMobile 
              ? "top-[18%]" 
              : "top-16 md:top-20"
        } left-1/2 -translate-x-1/2 z-30 ${
          screenSize.isMobile 
            ? "w-[85%] xs:w-[75%] max-w-[320px]" 
            : "w-72 md:w-[28rem]"
        } ${
          screenSize.isMobile 
            ? "h-28 xs:h-32" 
            : "h-24 sm:h-28 md:h-36"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MsnrImage
          fill
          alt="MISIONARY"
          className="object-contain"
        />
      </motion.div>
      
      {/* Contenido central - Espaciado optimizado para adaptarse al logo más grande */}
      <motion.div 
        ref={contentRef}
        className={`relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto ${
          screenSize.isPortrait
            ? "mt-[42vh] xs:mt-[38vh]" 
            : screenSize.isMobile
              ? "mt-[34vh]"
              : screenSize.isSmallScreen 
                ? "mt-40 sm:mt-36" 
                : "md:mt-16"
        } pt-10 sm:pt-8 md:pt-0`}
        style={{ opacity, scale, y }}
      >
        {/* Multiple badges con iconos específicos - Layout optimizado para todas las pantallas */}
        <div className={`${
          screenSize.viewportWidth < 400
            ? "grid grid-cols-1"
            : screenSize.isMobile
              ? "grid grid-cols-2" 
              : "flex flex-wrap"
        } justify-center gap-1.5 xs:gap-2 sm:gap-3 mb-4 xs:mb-5 sm:mb-8 max-w-4xl`} aria-label="Servicios principales" role="list">
          <motion.div
            className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.95)" }}
            role="listitem"
          >
            <MapPin className="inline-block w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 text-[#E9FC87]" strokeWidth={2.5} aria-hidden="true" />
            <span>Posadas, Misiones</span>
          </motion.div>

          <motion.div
            className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.95)" }}
            role="listitem"
          >
            <BarChart3 className="inline-block w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 text-[#BCB4FF]" strokeWidth={2.5} aria-hidden="true" />
            <span>Marketing Digital</span>
          </motion.div>

          <motion.div
            className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.95)" }}
            role="listitem"
          >
            <Video className="inline-block w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 text-[#E9FC87]" strokeWidth={2.5} aria-hidden="true" />
            <span>Producción Audiovisual</span>
          </motion.div>

          <motion.div
            className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.95)" }}
            role="listitem"
          >
            <PenTool className="inline-block w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 text-[#BCB4FF]" strokeWidth={2.5} aria-hidden="true" />
            <span>Diseño Gráfico</span>
          </motion.div>

          <motion.div
            className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.95)" }}
            role="listitem"
          >
            <Megaphone className="inline-block w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 text-[#E9FC87]" strokeWidth={2.5} aria-hidden="true" />
            <span>Campañas Publicitarias</span>
          </motion.div>

          <motion.div
            className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.95)" }}
            role="listitem"
          >
            <Code className="inline-block w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 text-[#BCB4FF]" strokeWidth={2.5} aria-hidden="true" />
            <span>Sistemas Web</span>
          </motion.div>

          <motion.div
            className="px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(38, 38, 38, 0.95)" }}
            role="listitem"
          >
            <Globe className="inline-block w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 text-[#E9FC87]" strokeWidth={2.5} aria-hidden="true" />
            <span>Páginas Web</span>
          </motion.div>
        </div>
        
        {/* Título principal con animación de caracteres - Adaptativo a mobile */}
        <motion.div 
          className="relative"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl xs:text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-mundial text-[#F2F2F2] tracking-tighter mb-3 xs:mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label={screenSize.isMobile ? "MSNR" : "MISIONARY"}
          >
            {(screenSize.isMobile ? "MSNR®" : (screenSize.isSmallScreen ? "MSNR®" : "MISIONARY")).split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: 1, 
                  y: 0 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.05,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="inline-block relative hover:text-[#E9FC87] transition-colors duration-300"
                aria-hidden="true"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Mensaje principal (tagline) con fondo mejorado para legibilidad */}
          <motion.div
            className={`relative ${screenSize.isPortrait ? "px-4 py-2" : "px-6 py-3"} 
                        `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.p
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-[#F2F2F2]/90 max-w-2xl font-mundial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Hacemos realidad tu visión digital.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Botón de scroll down - Posicionamiento dinámico según dispositivo */}
        <motion.button
          onClick={scrollToNextSection}
          className={` ${
            screenSize.viewportHeight < 700 
              ? "bottom-4" 
              : screenSize.isMobile 
                ? "bottom-6"
                : "bottom-8 sm:bottom-10 md:bottom-12"
          } p-2 xs:p-3 sm:p-4 rounded-full 
             bg-[#262626]/80 border border-[#E9FC87]/20 hover:bg-[#E9FC87]/10 
             transition-all duration-300 group shadow-xl backdrop-blur-sm
             focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50 focus:ring-offset-2 
             focus:ring-offset-[#262626]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1],
            y: [20, 0, 0],
            transition: { 
              duration: 2,
              times: [0, 0.5, 1],
              delay: 1.2,
              repeat: Infinity,
              repeatDelay: 1
            }
          }}
          aria-label="Deslizar hacia la siguiente sección"
          tabIndex={0}
        >
          <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#F2F2F2] group-hover:text-[#E9FC87] transition-colors duration-300" aria-hidden="true" />
        </motion.button>
      </motion.div>
      
      {/* Logo flotante pequeño */}
      <motion.div
        className="fixed top-5 left-5 z-30 w-10 h-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hasScrolled ? 0.9 : 0, scale: hasScrolled ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <MsnrImage
          fill
          alt="MISIONARY"
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}

// Skeleton mejorado para carga con vista adaptada a móvil/desktop
export function Hero3Skeleton() {
  // Detectamos si estamos en móvil para adaptar el skeleton
  const [isMobileView, setIsMobileView] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section className="flex flex-col items-center justify-between min-h-screen h-screen py-10 px-4 bg-[#262626]">
      {/* Fondo skeleton */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-20 w-[500px] h-[500px] rounded-full bg-[#F2F2F2]/5 blur-3xl animate-pulse" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-[#F2F2F2]/5 blur-3xl animate-pulse" />
      </div>

      {/* Contenido skeleton - Ajustado para reflejar el logo más grande en móviles */}
      <div className="w-full flex justify-center mt-20 md:mt-16">
        <div className="w-[85%] max-w-[320px] xs:w-[75%] sm:w-72 h-28 xs:h-32 sm:h-28 rounded-lg bg-[#F2F2F2]/20 animate-pulse" />
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Badges skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {Array.from({ length: isMobileView ? 4 : 7 }).map((_, i) => (
            <div key={i} className="h-8 w-28 rounded-full bg-[#F2F2F2]/10 animate-pulse" />
          ))}
        </div>
        
        {/* Título skeleton */}
        <div className="w-[80%] sm:w-[70%] md:w-[60%] h-16 sm:h-20 rounded-lg bg-[#F2F2F2]/20 animate-pulse mb-4" />
        
        {/* Tagline skeleton */}
        <div className="w-[60%] sm:w-[50%] md:w-[40%] h-10 rounded-lg bg-[#F2F2F2]/15 animate-pulse" />
      </div>
      
      {/* Botón skeleton */}
      <div className="w-12 h-12 mb-8 rounded-full bg-[#F2F2F2]/10 animate-pulse" />
    </section>
  );
}