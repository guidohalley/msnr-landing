"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MessageCircle as WhatsappIcon } from "lucide-react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

export default function Header() {
  const whatsappBtnRef = useRef<HTMLAnchorElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Estado para controlar la transparencia del header basado en scroll
  const [scrolled, setScrolled] = useState(false);

  // Para sincronizar el header con el scroll
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    // Efecto pulsante para el botón de WhatsApp
    if (whatsappBtnRef.current) {
      gsap.fromTo(
        whatsappBtnRef.current,
        { boxShadow: "0 0 0 0 #25D366" },
        {
          boxShadow: "0 0 16px 4px #25D36680",
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "power1.inOut",
        }
      );
    }

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
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 font-mundial">
        <Link href="/" className="flex items-center gap-3 group font-mundial">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 22,
              mass: 1.2,
            }}
            className="flex items-center"
          >
            <Image
              src="/msnr.svg"
              alt="Logo Misionary"
              width={44}
              height={44}
              className="w-11 h-11 drop-shadow-md"
              priority
            />
          </motion.div>
          <span className="font-mundial font-extrabold text-xl text-[#E9FC87] group-hover:text-[#F2F2F2] transition-colors">
            MSNR®
          </span>
        </Link>
        <ul className="flex gap-6 items-center text-sm font-medium font-mundial">
          <li>
            <a
              href="#servicios"
              className="font-mundial text-[#F2F2F2] hover:text-[#E9FC87] transition-colors"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#como-trabajamos"
              className="font-mundial text-[#F2F2F2] hover:text-[#E9FC87] transition-colors"
            >
              Método
            </a>
          </li>
          <li>
            <motion.a
              ref={whatsappBtnRef}
              href="https://wa.me/5493764609701"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-mundial bg-[#25D366] text-[#262626] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#128C7E] hover:text-white focus:ring-2 focus:ring-[#E9FC87]/50 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Contactar por WhatsApp"
            >
              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "0 0 24px 4px #25D36655",
                  opacity: 0.5,
                }}
              />
              <WhatsappIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              <span>WhatsApp</span>
            </motion.a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
