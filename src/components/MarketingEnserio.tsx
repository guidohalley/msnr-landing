"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import TechStackIcons from "@/components/TechStackIcons";
import * as anime from "animejs";

// animejs: tipado any para compatibilidad con import dinámico
let animeAny: any;

const frases = [
  "MARKETING ENSERIO",
];

export default function MarketingEnserio() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Framer Motion: marquee horizontal infinito
  const marqueeText = frases.join("  \u2022  ");
  // Framer Motion: sincronizar x con scroll
  const { scrollYProgress } = useScroll();
  // El rango de movimiento horizontal: 0 a -50% (loop visual)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    let isMounted = true;
    import("animejs").then((mod) => {
      if (isMounted) {
        animeAny = mod;
        // Anime.js: animación de trazo de texto
        if (textRef.current && typeof animeAny === "function") {
          anime({
            targets: textRef.current.querySelectorAll(".char"),
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(40),
            duration: 900,
            easing: "easeOutExpo",
          });
        }
      }
    });
    // GSAP: entrada fade+up
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" }
      );
    }
    // GSAP: glow animado
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        boxShadow: "0 0 48px 8px #E9FC87AA",
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "power1.inOut",
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  // Framer Motion: microinteracción hover
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <motion.div
        ref={glowRef}
        whileHover={{ scale: 1.04, filter: "brightness(1.1)", rotateX: 7, rotateY: -7 }}
        whileTap={{ scale: 0.97, rotateX: 0, rotateY: 0 }}
        className="relative px-8 py-4 rounded-2xl bg-black/80 border border-neon/40 shadow-lg backdrop-blur-lg min-h-[80px] h-[80px] flex items-center justify-center overflow-hidden card-glow-animated"
        tabIndex={0}
        aria-label="MARKETING ENSERIO"
        style={{ willChange: "transform, filter" }}
        onPointerMove={e => {
          const div = e.currentTarget;
          const rect = div.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const maxTilt = 10;
          const rotateY = ((x - centerX) / centerX) * maxTilt;
          const rotateX = -((y - centerY) / centerY) * maxTilt;
          div.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        }}
        onPointerLeave={e => {
          const div = e.currentTarget;
          div.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
        }}
      >
        <div className="w-full max-w-7xl overflow-hidden flex items-center">
          <motion.div
            style={{ x, width: '200%' }}
            className="flex whitespace-nowrap will-change-transform"
          >
            <h2
              ref={textRef}
              className="font-mundial text-4xl md:text-6xl font-black text-neon tracking-tight text-center select-none px-2 md:px-4 relative group-hover:animate-rgb-glitch"
              style={{
                textShadow:
                  "2px 0 4px #ff00cc88, -2px 0 4px #00fff788, 0 2px 4px #00c3ff88",
                transition: "text-shadow 0.2s cubic-bezier(.4,2,.6,1)",
              }}
            >
              {marqueeText.split("").map((char, i) => (
                <span key={i} className="char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <h2
              aria-hidden
              className="font-mundial text-4xl md:text-6xl font-black text-neon tracking-tight text-center select-none px-2 md:px-4"
            >
              {marqueeText.split("").map((char, i) => (
                <span key={"b"+i} className="char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
          </motion.div>
        </div>
      </motion.div>
      {/* Stack de tecnologías */}
      <div className="mt-10 w-full max-w-5xl mx-auto">
        {/* <TechStackIcons /> */}
      </div>
    </section>
  );
}
