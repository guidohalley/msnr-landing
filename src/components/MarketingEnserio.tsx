"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { SiAdobeaftereffects, SiAdobepremierepro, SiDavinciresolve, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiCanva, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiAmazonwebservices , SiVercel, SiFacebook, SiGoogleads, SiGoogleanalytics, SiMailchimp, SiZapier, SiNotion, SiSlack, SiTrello, SiWordpress,SiN8N  } from "react-icons/si";
import TechStackIcons from "@/components/TechStackIcons";

let anime: any;

const frases = [
  "          HACEMOS MARKETING ENSERIO",
];

export default function MarketingEnserio() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Framer Motion: marquee horizontal infinito
  const marqueeText = frases.join("  •  ");
  // Framer Motion: sincronizar x con scroll
  const { scrollYProgress } = useScroll();
  // El rango de movimiento horizontal: 0 a -50% (loop visual)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mod = require("animejs");
      anime = mod.default ? mod.default : mod;
    }
    // GSAP: entrada fade+up
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" }
      );
    }
    // Anime.js: animación de trazo de texto
    if (textRef.current && typeof anime === "function") {
      anime({
        targets: textRef.current.querySelectorAll(".char"),
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(40),
        duration: 900,
        easing: "easeOutExpo",
      });
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
  }, []);

  // Framer Motion: microinteracción hover
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <motion.div
        ref={glowRef}
        whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
        whileTap={{ scale: 0.97 }}
        className="relative px-8 py-4 rounded-2xl bg-black/80 border border-neon/40 shadow-lg backdrop-blur-lg min-h-[80px] h-[80px] flex items-center justify-center overflow-hidden"
        tabIndex={0}
        aria-label="MARKETING ENSERIO"
      >
        <div className="w-full max-w-7xl overflow-hidden flex items-center">
          <motion.div
            style={{ x, width: '200%' }}
            className="flex whitespace-nowrap will-change-transform"
          >
            <h2
              ref={textRef}
              className="font-mundial text-4xl md:text-6xl font-black text-neon tracking-tight text-center select-none px-2 md:px-4"
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

      <div className="w-full max-w-7xl overflow-hidden flex flex-col items-center gap-6 mt-8">
        <TechStackIcons />
      </div>
    </section>
  );
}
