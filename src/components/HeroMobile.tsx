"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import MsnrImage from "./ui/msnr-image";
import { ChevronDown, MapPin, BarChart3, PenTool, Code } from "lucide-react";

// HeroMobile optimizado para LCP - Sin elementos flotantes pesados
export default function HeroMobile() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [screenSize, setScreenSize] = useState({
    viewportHeight: 0,
    viewportWidth: 0,
    isPortrait: false
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize({
        viewportHeight: height,
        viewportWidth: width,
        isPortrait: height > width
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('orientationchange', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('orientationchange', updateDimensions);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-center min-h-screen h-screen py-8 px-3 overflow-hidden bg-[#262626]"
      aria-label="Hero principal de MISIONARY"
      style={{ 
        height: screenSize.viewportHeight > 0 ? `${screenSize.viewportHeight}px` : '100vh',
      }}
    >
      {/* Fondo simplificado para móviles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#262626]/95 via-[#262626] to-[#1a1a1a]" />
        {/* Gradientes mínimos */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[#E9FC87]/3 blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-[#BCB4FF]/3 blur-2xl" />
      </div>

      {/* Logo prominente - Optimizado para LCP */}
      <motion.div
        className={`absolute ${
          screenSize.isPortrait 
            ? "top-[22%]" 
            : "top-[18%]"
        } left-1/2 -translate-x-1/2 z-30 w-[85%] max-w-[280px] h-28`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <MsnrImage
          fill
          alt="MISIONARY"
          className="object-contain"
        />
      </motion.div>

      {/* Contenido central optimizado */}
      <motion.div 
        className={`relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto ${
          screenSize.isPortrait ? "mt-[42vh]" : "mt-[34vh]"
        } pt-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Badges simplificados para móviles */}
        <div className={`${
          screenSize.viewportWidth < 400
            ? "grid grid-cols-1 gap-2"
            : "grid grid-cols-2 gap-2"
        } justify-center mb-6 max-w-xs`} aria-label="Servicios principales">
          
          <motion.div
            className="px-3 py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-xs font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <MapPin className="w-3 h-3 text-[#E9FC87]" strokeWidth={2.5} />
            <span>Posadas, Misiones</span>
          </motion.div>

          <motion.div
            className="px-3 py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-xs font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <BarChart3 className="w-3 h-3 text-[#BCB4FF]" strokeWidth={2.5} />
            <span>Marketing Digital</span>
          </motion.div>

          <motion.div
            className="px-3 py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-xs font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Code className="w-3 h-3 text-[#E9FC87]" strokeWidth={2.5} />
            <span>Desarrollo Web</span>
          </motion.div>

          <motion.div
            className="px-3 py-2 rounded-full bg-[#262626]/90 border border-[#E9FC87]/20 text-[#F2F2F2]/90 text-xs font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <PenTool className="w-3 h-3 text-[#BCB4FF]" strokeWidth={2.5} />
            <span>Diseño Gráfico</span>
          </motion.div>
        </div>
        
        {/* Título principal simplificado */}
        <motion.h1
          className="text-5xl font-black font-mundial text-[#F2F2F2] tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          MSNR®
        </motion.h1>
        
        {/* Tagline estático para móviles */}
        <motion.div
          className="relative px-4 py-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.p
            className="text-base text-[#F2F2F2]/90 max-w-xs font-mundial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            Hacemos realidad tu visión digital.
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Botón de scroll simplificado */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-[#262626]/80 border border-[#E9FC87]/20 hover:bg-[#E9FC87]/10 transition-all duration-300 shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: [0, -5, 0],
          transition: { 
            opacity: { duration: 0.5, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        }}
        aria-label="Deslizar hacia la siguiente sección"
      >
        <ChevronDown className="w-5 h-5 text-[#F2F2F2] transition-colors duration-300" />
      </motion.button>
      
      {/* Logo flotante simplificado */}
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
