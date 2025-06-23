"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronDown, Code2 } from "lucide-react";

// Componente de partículas flotantes 3D
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Elementos flotantes inspirados en ReactBits */}
      <motion.div
        className="absolute w-44 h-44 md:w-64 md:h-64 rounded-2xl border border-[#E9FC87]/30 bg-gradient-to-br from-[#262626]/80 to-transparent backdrop-blur-md"
        initial={{ opacity: 0, x: "70vw", y: "10vh", rotate: -20, scale: 0.8 }}
        animate={{ 
          opacity: 0.7, 
          x: "65vw", 
          y: "15vh", 
          rotate: -5,
          scale: 1,
          transition: { 
            duration: 10, 
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
      
      <motion.div
        className="absolute hidden md:block w-52 h-52 rounded-2xl bg-gradient-to-br from-[#BCB4FF]/30 to-transparent border border-[#BCB4FF]/20 backdrop-blur-sm"
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
      
      <motion.div
        className="absolute w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-[#262626]/80 to-[#262626]/40 backdrop-blur-sm grid"
        style={{ gridTemplateColumns: "repeat(8, 1fr)", gridTemplateRows: "repeat(8, 1fr)" }}
        initial={{ opacity: 0, x: "65vw", y: "65vh", rotate: -15, scale: 0.8 }}
        animate={{ 
          opacity: 0.7, 
          x: "60vw", 
          y: "60vh", 
          rotate: -10,
          scale: 0.9,
          transition: { 
            duration: 12, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
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
      
      {/* Líneas luminosas animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,400 Q300,350 600,450 T1200,400 T1800,450"
          stroke="url(#gradient1)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            transition: { duration: 2.5, ease: "easeOut" } 
          }}
        />
        <motion.path
          d="M0,500 Q450,400 900,550 T1800,450" 
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            transition: { duration: 3, delay: 0.5, ease: "easeOut" } 
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
  // Ref para el scroll hacia abajo
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  // Efectos de scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transformaciones basadas en scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Para detectar cuando el usuario scrollea
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para hacer scroll a la siguiente sección
  const scrollToNextSection = () => {
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    });
  };

  // Detección de ancho para móviles
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-center h-screen py-10 px-4 md:px-16 overflow-hidden bg-[#262626]"
      aria-label="Hero principal de MISIONARY"
      tabIndex={-1}
    >
      {/* Fondo con gradientes sutiles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#262626]/90 via-[#262626] to-[#1a1a1a]" />
        <div className="absolute bottom-0 left-20 w-[500px] h-[500px] rounded-full bg-[#E9FC87]/5 blur-3xl" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-[#BCB4FF]/5 blur-3xl" />
      </div>
      
      {/* Elementos flotantes 3D */}
      <FloatingElements />
      
      {/* Logo prominente superior */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 z-30 w-80 md:w-[28rem] h-28 md:h-36"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/msnr.svg"
          alt="MISIONARY"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
      
      {/* Contenido central */}
      <motion.div 
        ref={contentRef}
        className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto mt-16 md:mt-0"
        style={{ opacity, scale, y }}
      >
        {/* Badge superior */}
        <motion.div
          className="mb-8 px-5 py-2 rounded-full bg-[#262626]/80 border border-[#E9FC87]/20 text-[#F2F2F2]/80 text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Sparkles className="inline-block w-4 h-4 text-[#E9FC87]" />
          <span>Posadas, Misiones</span>
          <span className="px-1.5">•</span>
          <Code2 className="inline-block w-4 h-4 text-[#BCB4FF]" />
          <span>Agencia de Marketing Digital</span>
        </motion.div>
        
        {/* Título principal con animación de caracteres - Adaptativo a mobile */}
        <motion.div 
          className="relative"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black font-mundial text-[#F2F2F2] tracking-tighter mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {(isMobile ? "MSNR" : "MISIONARY").split("").map((char, index) => (
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
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Mensaje principal (tagline) */}
          <motion.p
            className="text-xl md:text-2xl text-[#F2F2F2]/80 max-w-2xl mb-10 font-mundial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Hacemos realidad tu visión digital.
          </motion.p>
        </motion.div>
        
        {/* Botón de scroll down */}
        <motion.button
          onClick={scrollToNextSection}
          className="mt-12 p-4 rounded-full bg-[#262626]/80 border border-[#E9FC87]/20 hover:bg-[#E9FC87]/10 transition-all duration-300 group shadow-xl backdrop-blur-sm"
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
          aria-label="Deslizar hacia abajo"
        >
          <ChevronDown className="w-6 h-6 text-[#F2F2F2] group-hover:text-[#E9FC87] transition-colors duration-300" />
        </motion.button>
      </motion.div>
      
      {/* Logo flotante pequeño */}
      <motion.div
        className="fixed top-6 left-6 z-30 w-12 h-12 opacity-0 md:opacity-100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hasScrolled ? 0.9 : 0, scale: hasScrolled ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/msnr.svg"
          alt="MISIONARY"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}

// Skeleton para carga
export function Hero3Skeleton() {
  return (
    <section className="flex flex-col items-center justify-center h-screen py-10 px-4 bg-[#262626] animate-pulse">
      <div className="w-40 h-4 mb-8 rounded-full bg-[#F2F2F2]/10" />
      <div className="w-72 h-16 mb-2 rounded-lg bg-[#F2F2F2]/20" />
      <div className="w-64 h-16 mb-10 rounded-lg bg-[#F2F2F2]/15" />
      <div className="w-64 h-5 mb-2 rounded-lg bg-[#F2F2F2]/10" />
      <div className="w-48 h-5 mb-12 rounded-lg bg-[#F2F2F2]/5" />
      <div className="w-12 h-12 rounded-full bg-[#F2F2F2]/10" />
    </section>
  );
}