"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { services } from "@/components/ServiceCard";
import ScrambleTextEffect from "@/components/ScrambleTextEffect";
import React, { useRef } from "react";
import Image from "next/image";

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

export default function ServiceSlider() {
  // Tilt 3D effect handler con motion values y spring (como StatusTable)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 200, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 200, damping: 20 });
  const boxShadow = useTransform(springY, y => `0 ${y * 2}px 36px 0 #E9FC87aa, 0 ${y * 2}px 0 4px #E9FC8733, 0 2px 16px 0 #0002`);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 12;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    tiltX.set(rotateX);
    tiltY.set(rotateY);
  }
  function handlePointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section className="relative w-full max-w-6xl mx-auto py-12">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] max-w-5xl max-h-[500px] z-0 pointer-events-none rounded-3xl overflow-hidden shadow-xl">
    </div>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          gap: "3rem",
          focus: "center",
          pagination: true,
          autoplay: true,
          interval: 2000,
          pauseOnHover: false,
          arrows: false,
          drag: true,
          speed: 1000,
          height: "440px",
          direction: "ttb", // vertical
          wheel: false, // Desactiva scroll con rueda para no bloquear el scroll de la página
          breakpoints: {
            1024: { height: "auto", gap: "1.5rem" },
          },
          classes: {
            slide: "splide__slide service-3d-slide",
          },
        }}
        className="relative z-10 splide-vertical"
        aria-label="Servicios"
      >
        {serviceKeys.map((key) => {
          const S = services[key];
          return (
            <SplideSlide key={key} aria-label={S.title}>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full z-10">
                {/* Servicio a la izquierda, ahora como card similar a StatusTable */}
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <motion.div
                    whileHover={{
                      y: -8,
                      filter: "brightness(1.08) blur(0px)",
                    }}
                    style={{
                      rotateX: springX,
                      rotateY: springY,
                      willChange: "transform, box-shadow",
                      boxShadow,
                    }}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={handlePointerLeave}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-neon/40 px-10 py-12 md:px-12 md:py-14 min-h-[260px] max-w-xl mx-auto flex flex-col items-center gap-4 relative overflow-visible group transition-colors focus-within:ring-2 focus-within:ring-neon/60 card-glow-animated"
                    tabIndex={0}
                    aria-label={S.title}
                  >
                    <h3
                      className="text-5xl md:text-6xl font-black text-center mb-2 tracking-tight font-mundial bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent relative group-hover:animate-rgb-glitch"
                      style={{
                        textShadow:
                          "2px 0 4px #ff00cc88, -2px 0 4px #00fff788, 0 2px 4px #00c3ff88",
                        transition: "text-shadow 0.2s cubic-bezier(.4,2,.6,1)",
                      }}
                    >
                      {S.title}
                    </h3>
                    <ScrambleTextEffect text={S.desc} />
                  </motion.div>
                </div>
                {/* Asset visual a la derecha */}
                <div className="hidden md:flex flex-col justify-center h-full pl-4">
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full flex justify-center items-center mb-6 min-h-[200px]">
                      {serviceImages[key] ? (
                        <Image
                          src={serviceImages[key]!}
                          alt={S.title}
                          width={400} // Cambié el ancho a 400 para que las imágenes sean más grandes
                          height={200} // Cambié la altura a 200 para que las imágenes sean más grandes
                          className="object-contain" // Eliminé max-h-40 para evitar restricciones de altura
                          priority={key === 'paginasWeb'}
                        />
                      ) : (
                        <S.icon className="w-16 h-16 text-primary" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
