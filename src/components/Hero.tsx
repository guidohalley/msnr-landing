"use client";

import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { Menu as MenuIcon } from "lucide-react";
import Player from "lottie-react";
import msnrLottie from "@/../public/msnr-lottie.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark w-full min-h-[80vh] flex items-center justify-center py-24 md:py-36">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 pointer-events-none select-none">
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
        <motion.div
          initial={{
            boxShadow: "0 0 0 0 #E9FC87",
            scale: 0.98,
            opacity: 0.95,
          }}
          whileHover={{
            boxShadow:
              "0 0 40px 0 #E9FC87, 0 2px 32px 0 #E9FC8755",
            scale: 1,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full max-w-xl px-8 py-14 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg group order-2 md:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="font-mundial text-[11px] md:text-xs text-neon/60 mb-1 tracking-widest uppercase font-semibold letter-spacing-wider"
          >
            Posadas, Misiones
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="font-mundial text-2xl md:text-4xl text-neon mb-2 font-black drop-shadow-lg tracking-tight"
          >
            Agencia de Marketing Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            viewport={{ once: true }}
            className="font-mundial font-light text-white mb-8 text-lg md:text-2xl max-w-xl"
          >
            Hacemos realidad tu visión digital.
          </motion.p>
          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="font-mundial font-bold bg-neon text-dark px-10 py-4 rounded-xl hover:bg-violet transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-violet focus:ring-offset-2 text-lg tracking-wide mt-2 group-hover:opacity-100 opacity-0 pointer-events-auto"
          >
            Comienza tu misión
          </motion.a>
        </motion.div>
        {/* Columna derecha: Logo animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, type: "spring" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center order-1 md:order-2 w-full h-full"
          style={{ minWidth: 0, minHeight: 0 }}
        >
          <div className="w-full h-full md:w-[28rem] md:h-[28rem] aspect-square animate-float rounded-xl overflow-visible bg-transparent">
            <Player
              autoplay
              animationData={msnrLottie}
              style={{ width: "100%", height: "100%" }}
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              {...({ speed: 0.1 } as any)}
            />
          </div>
        </motion.div>
      </div>
      {/* Glow border bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-neon/60 blur-lg rounded-full opacity-70" />
    </section>
  );
}
