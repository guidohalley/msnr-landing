"use client";

import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ServiceCard from "@/components/ServiceCard";
import ScrambleTextEffect from "@/components/ScrambleTextEffect";
import { services } from "@/components/ServiceCard";

const serviceKeys = [
  "estrategia",
  "produccionAudiovisual",
  "disenoGrafico",
  "patentamiento",
  "sistemasWeb",
  "paginasWeb",
] as const;

type ServiceKey = typeof serviceKeys[number];

export default function ServiceSlider() {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        gap: "3rem",
        focus: "center",
        pagination: false,
        arrows: true,
        drag: true,
        speed: 700,
        height: "440px",
        breakpoints: {
          1024: { height: "auto", gap: "1.5rem" },
        },
        classes: {
          slide: "splide__slide service-3d-slide",
        },
      }}
      className="w-full max-w-6xl mx-auto py-12"
      aria-label="Servicios"
    >
      {serviceKeys.map((key) => {
        const S = services[key];
        return (
          <SplideSlide key={key}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
              {/* Card animada a la izquierda */}
              <motion.div
                initial={{ rotateY: 60, opacity: 0, scale: 0.92 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 8px 32px 0 #E9FC87AA, 0 0 0 4px #E9FC8733",
                  rotateZ: 1.5,
                  y: -8,
                  filter: "brightness(1.08) blur(0px)",
                }}
                whileTap={{ scale: 0.98, rotateZ: -1 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="flex flex-col items-center gap-8 bg-white/90 dark:bg-zinc-900/90 rounded-3xl shadow-2xl border border-neon/40 px-10 py-12 md:px-16 md:py-16 min-h-[340px] max-w-2xl mx-auto relative overflow-visible group"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neon/80 rounded-full shadow-lg p-3 group-hover:scale-110 transition-transform">
                  <S.icon
                    className="w-16 h-16 text-primary drop-shadow-lg"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-center text-primary mb-2 tracking-tight font-mundial">
                  {S.title}
                </h3>
                <div className="w-full flex flex-col items-center">
                  <ScrambleTextEffect text={S.desc || "Servicio destacado"} />
                </div>
              </motion.div>
              {/* Texto informativo a la derecha */}
              <div className="hidden md:flex flex-col justify-center h-full pl-4">
                <div className="bg-gradient-to-br from-neon/10 to-primary/5 rounded-2xl p-8 shadow-inner border border-neon/10">
                  <h4 className="text-xl font-bold mb-2 text-primary">
                    ¿Por qué elegir este servicio?
                  </h4>
                  <p className="text-zinc-700 dark:text-zinc-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse potenti. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas. Proin
                    dictum, urna at cursus dictum, enim erat facilisis urna, nec
                    dictum ex enim nec urna.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
