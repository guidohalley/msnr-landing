"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { services } from "@/components/ServiceCard";
import React, { useRef } from "react";
import Image from "next/image";
// No necesitamos importar los iconos ya que estamos usando SVG inline

const serviceKeys = [
  "estrategia",
  "produccionAudiovisual",
  "disenoGrafico",
  "patentamiento",
  "sistemasWeb",
  "paginasWeb",
] as const;

type ServiceKey = keyof typeof services;

// Mapeo de imágenes 3D custom para cada servicio
const serviceImages: Partial<Record<ServiceKey, string>> = {
  paginasWeb: "/web.png",
  sistemasWeb: "/sistemas.png",
  disenoGrafico: "/diseño.png",
  estrategia: "/redes.png",
  produccionAudiovisual: "/produccion.png",
  patentamiento: "/patentamiento.png",
};

// Elementos decorativos flotantes para mantener coherencia con el Hero3
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid flotante */}
      <motion.div
        className="absolute w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-[#262626]/80 to-[#262626]/40 backdrop-blur-sm grid right-10 bottom-20"
        style={{ gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(6, 1fr)" }}
        initial={{ opacity: 0, x: 30, rotate: -10, scale: 0.8 }}
        animate={{ 
          opacity: 0.6, 
          x: 0,  
          rotate: -5,
          scale: 0.9,
          transition: { 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          } 
        }}
      >
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 gap-0">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="w-full h-full border-r border-[#E9FC87]/20 col-span-1" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-0">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="w-full h-full border-b border-[#E9FC87]/20 row-span-1" />
          ))}
        </div>
      </motion.div>
      
      {/* Línea luminosa animada */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M100,600 Q400,550 800,650 T1500,600"
          stroke="url(#service-gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.7,
            transition: { duration: 3.5, ease: "easeOut" } 
          }}
        />
        <defs>
          <linearGradient id="service-gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#262626" stopOpacity="0" />
            <stop offset="50%" stopColor="#E9FC87" stopOpacity="1" />
            <stop offset="100%" stopColor="#262626" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function ServiceSlider() {
  // Tilt 3D effect handler con motion values y spring
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 200, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 200, damping: 20 });
  const boxShadow = useTransform(
    springY, 
    y => `0 ${y * 2}px 36px 0 rgba(233, 252, 135, 0.2), 0 ${y * 2}px 8px 0 rgba(233, 252, 135, 0.1)`
  );
  
  // Ref para el Splide
  const splideRef = useRef<{ splide: { go: (direction: string) => void } } | null>(null);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 10;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    tiltX.set(rotateX);
    tiltY.set(rotateY);
  }
  
  function handlePointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }
  
  // Controles de navegación personalizados
  const goNext = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go('+1');
    }
  };
  
  const goPrev = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go('-1');
    }
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Fondo con gradientes sutiles (mejorado para cubrir toda la pantalla) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#212121] to-[#1a1a1a]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E9FC87]/3 blur-[120px]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#BCB4FF]/3 blur-[100px]" />
      </div>
      
      {/* Elementos decorativos flotantes */}
      <FloatingElements />
      
      {/* Overlay sutil para evitar conflicto visual */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-transparent to-[#1a1a1a]/90 z-[1]"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Encabezado de sección */}
        <motion.div 
          className="relative z-10 mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-[#262626]/90 border border-[#E9FC87]/30 text-[#F2F2F2]/90 text-xs font-semibold tracking-widest uppercase shadow-xl backdrop-blur-sm">
            Servicios
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F2F2F2] mb-6 font-mundial">
            Todo tu marketing <span className="text-[#E9FC87]">bajo un mismo techo</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#F2F2F2]/80 mb-8">
            Ofrecemos soluciones integrales para potenciar la identidad de tu marca
          </p>
        </motion.div>
        
        {/* Slider de servicios */}
        <div className="relative">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 1,
              gap: "1.5rem",
              padding: { left: '5%', right: '5%' },
              focus: "center",
              pagination: true,
              autoplay: false,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              drag: true,
              speed: 1000,
              height: "auto",
              direction: "ltr", // horizontal (por defecto)
              wheel: false, // Desactivamos el wheel para evitar problemas de usabilidad
              classes: {
                pagination: 'splide__pagination service-dots',
                page: 'splide__pagination__page service-dot',
              },
            }}
            className="relative z-10 service-splide"
            aria-label="Servicios"
          >
            {serviceKeys.map((key) => {
              const S = services[key];
              return (
                <SplideSlide key={key} aria-label={S.title}>
                  <motion.div 
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center h-full py-10 px-4 md:px-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Card de servicio */}
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <motion.div
                        whileHover={{
                          y: -10,
                          scale: 1.03,
                          boxShadow: "0 30px 60px -12px rgba(233, 252, 135, 0.15)",
                        }}
                        style={{
                          rotateX: springX,
                          rotateY: springY,
                          boxShadow,
                        }}
                        onPointerMove={handlePointerMove}
                        onPointerLeave={handlePointerLeave}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        className="bg-gradient-to-br from-[#262626] to-[#1a1a1a] rounded-2xl border border-[#E9FC87]/30 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm px-8 py-10 md:px-12 md:py-14 min-h-[280px] w-full max-w-lg mx-auto flex flex-col items-start gap-5 relative overflow-visible group transition-all duration-200"
                        tabIndex={0}
                        aria-label={S.title}
                      >
                        <div className="p-3 rounded-xl bg-[#262626]/70 border border-[#E9FC87]/10 mb-2 backdrop-blur-md">
                          <S.icon className="w-12 h-12 text-[#E9FC87]" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-[#F2F2F2] mb-3 font-mundial">
                          {S.title}
                        </h3>
                        <p className="text-base md:text-lg text-[#F2F2F2]/80">
                          {S.desc}
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Asset visual */}
                    <motion.div 
                      className="hidden md:flex flex-col justify-center items-center h-full"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      <div className="relative w-full max-w-md h-[280px] flex justify-center items-center">
                        {serviceImages[key] ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={serviceImages[key]!}
                              alt={S.title}
                              fill
                              className="object-contain"
                              priority={key === 'paginasWeb'}
                            />
                            {/* Reflejo sutil */}
                            <div className="absolute -bottom-16 left-0 w-full h-16 bg-gradient-to-b from-[#E9FC87]/5 to-transparent blur-sm opacity-40 scale-y-[-0.3] scale-x-[0.8] transform translate-y-2"></div>
                          </div>
                        ) : (
                          <S.icon className="w-32 h-32 text-[#E9FC87]/50" aria-hidden="true" />
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </SplideSlide>
              );
            })}
          </Splide>
          
          {/* Controles personalizados */}
          <div className="absolute z-20 w-full top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <motion.button
              onClick={goPrev}
              className="p-4 rounded-full bg-[#262626]/90 border border-[#E9FC87]/30 text-[#F2F2F2] 
                      hover:bg-[#E9FC87]/20 transition-all duration-300 shadow-xl backdrop-blur-sm pointer-events-auto
                      ml-2 md:ml-10 lg:ml-20 relative z-30"
              whileHover={{ scale: 1.15, x: -5, boxShadow: "0 0 20px rgba(233, 252, 135, 0.3)" }}
              whileTap={{ scale: 0.92 }}
              aria-label="Servicio anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </motion.button>
            <motion.button
              onClick={goNext}
              className="p-4 rounded-full bg-[#262626]/90 border border-[#E9FC87]/30 text-[#F2F2F2] 
                      hover:bg-[#E9FC87]/20 transition-all duration-300 shadow-xl backdrop-blur-sm pointer-events-auto
                      mr-2 md:mr-10 lg:mr-20 relative z-30"
              whileHover={{ scale: 1.15, x: 5, boxShadow: "0 0 20px rgba(233, 252, 135, 0.3)" }}
              whileTap={{ scale: 0.92 }}
              aria-label="Siguiente servicio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Estilos personalizados */}
      <style jsx global>{`
        .service-splide .splide__pagination {
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
        }
        .service-splide .splide__pagination__page {
          width: 2.5rem;
          height: 0.3rem;
          border-radius: 0.15rem;
          background: rgba(233, 252, 135, 0.15);
          opacity: 0.8;
          transition: all 0.4s ease;
        }
        .service-splide .splide__pagination__page.is-active {
          transform: scaleX(1.5);
          background: rgba(233, 252, 135, 1);
        }
        .service-splide .splide__pagination__page:hover {
          background: rgba(233, 252, 135, 0.5);
        }
      `}</style>
    </section>
  );
}
