"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle as WhatsappIcon, Menu, X } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useServiceFilter } from "@/hooks/use-service-filter";
import MsnrLogo from "./ui/msnr-logo";

export default function Header() {
  const { openServiceFilter } = useServiceFilter();
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para controlar la transparencia del header basado en scroll
  const [scrolled, setScrolled] = useState(false);

  // Para sincronizar el header con el scroll
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
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

  // Cerrar el menú cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#como-trabajamos", label: "Método" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`w-full font-mundial fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E9FC87]/20 bg-[#262626]/95 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{ opacity: scrolled ? 1 : headerOpacity }}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 font-mundial" role="navigation" aria-label="Menú principal">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group font-mundial z-50"
            aria-label="Inicio - Misionary"
            onClick={handleLinkClick}
          >
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

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-6 items-center text-sm font-semibold font-mundial" role="menubar">
            {menuItems.map((item, index) => (
              <li key={index} role="none">
                <a
                  href={item.href}
                  className="font-mundial text-[#F2F2F2] hover:text-[#E9FC87] transition-colors px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 rounded-lg"
                  role="menuitem"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop WhatsApp Button */}
          <div className="hidden lg:block">
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
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile WhatsApp Button - Always Visible */}
            <motion.button
              type="button"
              onClick={openServiceFilter}
              className="flex items-center justify-center font-mundial bg-[#E9FC87] text-[#262626] font-bold p-2.5 rounded-full shadow-lg hover:bg-[#DDED7E] focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 transition-all duration-300 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contactar por WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5" aria-hidden="true" />
            </motion.button>

            {/* Hamburger Menu Button */}
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2A2A2A]/80 border border-[#E9FC87]/20 text-[#F2F2F2] hover:text-[#E9FC87] hover:bg-[#E9FC87]/10 focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#262626]/90 backdrop-blur-lg z-40 lg:hidden"
              onClick={handleLinkClick}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1A1A1A] border-l border-[#E9FC87]/20 z-50 lg:hidden overflow-y-auto"
              role="dialog"
              aria-label="Menú de navegación móvil"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-[#E9FC87]/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MsnrLogo width={32} height={32} className="w-8 h-8" />
                    <span className="font-mundial font-bold text-lg text-[#E9FC87]">MSNR</span>
                  </div>
                  <button
                    onClick={handleLinkClick}
                    className="p-2 rounded-lg hover:bg-[#E9FC87]/10 text-[#F2F2F2] hover:text-[#E9FC87] transition-colors"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6">
                <nav className="space-y-2" role="navigation">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <a
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center px-4 py-3 rounded-xl text-[#F2F2F2] hover:text-[#E9FC87] hover:bg-[#E9FC87]/10 transition-all duration-300 font-medium group"
                      >
                        <span className="flex-1">{item.label}</span>
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <div className="w-2 h-2 bg-[#E9FC87] rounded-full" />
                        </motion.div>
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile WhatsApp Button in Menu */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-[#E9FC87]/10"
                >
                  <button
                    type="button"
                    onClick={() => {
                      openServiceFilter();
                      handleLinkClick();
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-[#E9FC87] text-[#262626] font-bold px-6 py-4 rounded-xl shadow-lg hover:bg-[#DDED7E] focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 transition-all duration-300"
                  >
                    <WhatsappIcon className="w-5 h-5" />
                    <span>Contactar por WhatsApp</span>
                  </button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 p-4 bg-[#262626]/50 rounded-xl border border-[#E9FC87]/10"
                >
                  <h3 className="text-sm font-semibold text-[#E9FC87] mb-2">Agencia de Marketing Digital</h3>
                  <p className="text-xs text-[#F2F2F2]/70 mb-1">Posadas, Misiones, Argentina</p>
                  <p className="text-xs text-[#F2F2F2]/70">Lunes a Viernes: 9:00 - 18:00</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
