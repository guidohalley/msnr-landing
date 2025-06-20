"use client";

import { motion } from "framer-motion";
import Player from "lottie-react";
import msnrLottie from "@/../public/msnr-lottie.json";
import HeroVerticalSlider from "./HeroVerticalSlider";
import ClientsSlider from "./ClientsSlider";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP: animación de entrada general del Hero
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 60, filter: "blur(12px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.1,
                    ease: "power3.out",
                }
            );
        }
        // GSAP: animación de fondo SVG y blob
        if (overlayRef.current) {
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0, scale: 1.08 },
                { opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: "power2.out" }
            );
        }
        // GSAP: animación de columnas (stagger)
        if (leftColRef.current && rightColRef.current) {
            gsap.fromTo(
                [leftColRef.current, rightColRef.current],
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    delay: 0.4,
                    stagger: 0.18,
                    ease: "power3.out",
                }
            );
        }
        // GSAP: ScrollTrigger para columna izquierda
        if (leftColRef.current) {
            gsap.fromTo(
                leftColRef.current,
                { opacity: 0.7, y: 80, filter: "blur(0px)" }, // blur inicial 0
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)", // blur final 0
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: leftColRef.current,
                        start: "top 80%",
                        end: "bottom 40%",
                        toggleActions: "play none none reverse",
                        scrub: 0.5,
                    },
                }
            );
        }
    }, []);

    // Framer Motion: variantes para animación secuencial de textos y botón
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.13,
                delayChildren: 0.7,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <>
            <section ref={heroRef} className="relative overflow-hidden bg-dark w-full min-h-[80vh] flex items-center justify-center py-24 md:py-36">
                {/* Glassmorphism overlay + fondo animado */}
                <div ref={overlayRef} className="absolute inset-0 pointer-events-none select-none">
                    {/* Grid trendy background */}
                    <svg
                        className="absolute inset-0 w-full h-full opacity-10"
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="#E9FC87"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                    {/* Blob SVG animado */}
                    <motion.img
                        src="/background-blob.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute top-0 right-0 w-2/3 opacity-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10">
                    {/* Columna izquierda: Card Glassmorphism principal */}
                    <div ref={leftColRef} className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full max-w-xl px-0 md:px-8 py-0 md:py-14 bg-black/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg group order-2 md:order-1 overflow-hidden">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="w-full"
                        >
                            <HeroVerticalSlider
                                slides={[
                                    // Slide 1: Info principal
                                    <motion.div key="info" variants={itemVariants} className="flex flex-col items-center md:items-start justify-center h-full py-12 px-6 md:px-10">
                                        <motion.span variants={itemVariants} className="font-mundial text-[11px] md:text-xs text-neon/60 mb-1 tracking-widest uppercase font-semibold letter-spacing-wider">Posadas, Misiones</motion.span>
                                        <motion.h1 variants={itemVariants} className="font-mundial text-2xl md:text-4xl text-neon mb-2 font-black drop-shadow-lg tracking-tight">Agencia de Marketing Digital</motion.h1>
                                        <motion.p variants={itemVariants} className="font-mundial font-light text-white mb-8 text-lg md:text-2xl max-w-xl">Hacemos realidad tu visión digital.</motion.p>
                                        <motion.a
                                            variants={itemVariants}
                                            href="#contacto"
                                            className="font-mundial font-bold bg-white/10 text-neon px-10 py-4 rounded-xl border-2 border-neon shadow-[0_0_24px_4px_theme('colors.neon/60')] backdrop-blur-md hover:bg-neon/20 hover:text-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 text-lg tracking-wide mt-2 group-hover:opacity-100 opacity-100 pointer-events-auto relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-neon/30 before:blur-lg before:opacity-0 hover:before:opacity-40 before:transition-opacity before:duration-300 after:content-[''] after:absolute after:inset-0 after:rounded-xl after:border after:border-white/20 after:pointer-events-none"
                                            whileHover={{ scale: 1.06, boxShadow: "0 0 32px 0 #E9FC87AA" }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="relative z-10">Comienza tu misión</span>
                                        </motion.a>
                                    </motion.div>,
                                    // Slide 2: Mini testimonios
                                    <motion.div key="testimonios" variants={itemVariants} className="flex flex-col items-center justify-center h-full py-12 px-6 md:px-10 gap-4">
                                        <h2 className="font-mundial text-neon text-xl md:text-2xl font-bold mb-2">Lo que dicen de nosotros</h2>
                                        <div className="w-full flex flex-col gap-2">
                                            <blockquote className="text-white/90 italic text-base md:text-lg">“Transformaron mi marca en digital.”</blockquote>
                                            <blockquote className="text-white/90 italic text-base md:text-lg">“Creatividad y resultados, 100% recomendados.”</blockquote>
                                            <blockquote className="text-white/90 italic text-base md:text-lg">“El equipo más innovador de Misiones.”</blockquote>
                                        </div>
                                    </motion.div>,
                                    // Slide 3: Mapa
                                    <motion.div key="mapa" variants={itemVariants} className="flex flex-col items-center justify-center h-full py-12 px-6 md:px-10 gap-4">
                                        <h2 className="font-mundial text-neon text-xl md:text-2xl font-bold mb-2">¿Dónde estamos?</h2>
                                        <div className="w-full flex justify-center">
                                            <iframe
                                                title="Mapa Agencia Misionary"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14170.330894335139!2d-55.90144157409664!3d-27.38874428361207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457975824337b1d%3A0x9c314bf054dfc35a!2sAgencia%20de%20Marketing%20%7C%20MISIONARY!5e0!3m2!1ses-419!2sar!4v1750427163672!5m2!1ses-419!2sar"
                                                width="100%"
                                                height="200"
                                                style={{ border: 0, borderRadius: '1rem', minHeight: '180px', maxWidth: '100%' }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </motion.div>,
                                ]}
                            />
                        </motion.div>
                    </div>
                    {/* Columna derecha: Logo animado */}
                    <div ref={rightColRef} className="flex-1 flex justify-center items-center order-1 md:order-2 w-full h-full" style={{ minWidth: 0, minHeight: 0 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1, type: "spring" }}
                            className="w-full h-full md:w-[28rem] md:h-[28rem] aspect-square animate-float rounded-xl overflow-visible bg-transparent"
                        >
                            <Player
                                autoplay
                                animationData={msnrLottie}
                                style={{ width: "100%", height: "100%" }}
                                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                                {...({ speed: 0.1 } as any)} // @ts-expect-error: Lottie Player speed prop acepta any por compatibilidad
                            />
                        </motion.div>
                    </div>
                </div>
                {/* Glow border bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-neon/60 blur-lg rounded-full opacity-70" />
            </section>
            {/* Sección de clientes (slider) */}
            <ClientsSlider />
        </>
    );
}
