"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MessageCircle as WhatsappIcon } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useServiceFilter } from "@/hooks/use-service-filter";
import MsnrLogo from "./ui/msnr-logo";

export default function Header() {
  const { openServiceFilter } = useServiceFilter();
  const headerRef = useRef<HTMLElement>(null);

  // Estado para controlar la transparencia del header basado en scroll
  const [scrolled, setScrolled] = useState(false);

  // Para sincronizar el header con el scroll
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    // Ya no necesitamos el efecto pulsante, ya que utilizaremos el modal

    // Manejo del scroll para la transparencia y visibilidad del header
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      className={`w-full font-mundial fixed top-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E9FC87]/20 bg-[#262626]/90 backdrop-blur-lg"
          : "bg-transparent"
      }`}
      style={{ opacity: scrolled ? 1 : headerOpacity }}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 font-mundial" role="navigation" aria-label="Menú principal">
        <Link 
          href="/" 
          className="flex items-center gap-3 group font-mundial"
          aria-label="Inicio - Misionary"
        >
          {/* Logo inlined para mejorar el LCP */}
          <div className="flex items-center">
            <MsnrLogo
              width={44}
              height={44}
              className="w-11 h-11"
            />
          </div>
          <span className="font-mundial font-extrabold text-xl text-[#ffffffd5] group-hover:text-[#E9FC87] transition-colors">
            MSNR®
          </span>
        </Link>
        <ul className="flex gap-6 items-center text-sm font-semibold font-mundial" role="menubar">
          <li role="none">
            <a
              href="#servicios"
              className="font-mundial text-[#F2F2F2] hover:text-[#E9FC87] transition-colors px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 rounded-lg"
              role="menuitem"
            >
              Servicios
            </a>
          </li>
          <li role="none">
            <a
              href="#como-trabajamos"
              className="font-mundial text-[#F2F2F2] hover:text-[#E9FC87] transition-colors px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 rounded-lg"
              role="menuitem"
            >
              Método
            </a>
          </li>
          <li role="none">
            <motion.button
              type="button"
              onClick={openServiceFilter}
              className="flex items-center font-mundial bg-[#E9FC87] text-[#262626] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#DDED7E] focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 focus-visible:ring-2 focus-visible:ring-[#E9FC87]/60 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Contactar por WhatsApp"
              role="menuitem"
            >
              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "0 0 24px 4px #E9FC8755",
                  opacity: 0.5,
                }}
                aria-hidden="true"
              />
              <WhatsappIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              <span>WhatsApp</span>
            </motion.button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
