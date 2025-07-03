"use client";

import { motion, useInView, Variants } from "framer-motion";
import MsnrLogo from "./ui/msnr-logo";
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  FileText, 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Heart, 
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.1 });
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="relative w-full py-20 md:py-28 px-4 bg-[#262626] overflow-hidden"
      id="contacto"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      {/* Elementos decorativos del fondo */}
      <div className="absolute inset-0 z-0 opacity-80" aria-hidden="true">
        {/* Gradientes */}
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[#E9FC87]/5 blur-[120px]" />
        <div className="absolute top-40 -left-10 w-[300px] h-[300px] rounded-full bg-[#BCB4FF]/5 blur-[140px]" />
        
        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#E9FC87_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
      </div>
      
      {/* Línea luminosa superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E9FC87]/30 to-transparent z-10" aria-hidden="true" />
      
      {/* Línea luminosa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E9FC87]/20 to-transparent z-10" aria-hidden="true" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Encabezado del footer */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center mb-6 gap-2 px-3 py-1.5 rounded-full 
                        bg-[#E9FC87]/10 border border-[#E9FC87]/20 text-[#E9FC87]" aria-hidden="true">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span className="text-xs font-medium tracking-wider">TRANSFORMAMOS MARCAS</span>
          </div>
          <h2 id="footer-heading" className="text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-4 font-mundial">
            Nuestra misión es cumplir con <span className="text-[#E9FC87]">tu misión</span>
          </h2>
          <p className="max-w-2xl text-[#F2F2F2]/70 text-lg mb-8">
            Contáctanos hoy para potenciar tu presencia digital con estrategias disruptivas que marcan la diferencia.
          </p>
          <motion.a 
            href="mailto:marketing@misionary.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#E9FC87] text-[#262626] 
                    font-semibold transition-all hover:shadow-lg hover:shadow-[#E9FC87]/20
                    focus:ring-2 focus:ring-[#E9FC87]/50 focus:outline-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Enviar email a Misionary"
          >
            Escríbenos ahora
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" aria-hidden="true" />
          </motion.a>
        </motion.div>
        
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Columna de logo e información */}
          <motion.div 
            className="md:col-span-4 space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-14 h-14 mr-4 relative" aria-hidden="true">
                <MsnrLogo
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F2F2F2] font-mundial tracking-tight">MSNR</h3>
                <p className="text-sm text-[#F2F2F2]/70">Agencia de Marketing Digital</p>
              </div>
            </div>
            <p className="text-base text-center md:text-left text-[#F2F2F2]/80 max-w-sm mx-auto md:mx-0">
              Creamos estrategias disruptivas que potencian la identidad de tu marca. 
              Soluciones integrales en marketing digital, diseño y desarrollo web.
            </p>
            <div className="flex gap-4 items-center justify-center md:justify-start pt-2" role="navigation" aria-label="Redes sociales">
              <motion.a 
                href="mailto:marketing@misionary.com" 
                aria-label="Enviar email a Misionary"
                className="p-2.5 rounded-full bg-[#2A2A2A] border border-[#E9FC87]/20 text-[#F2F2F2] 
                        hover:bg-[#E9FC87]/10 transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a 
                href="https://instagram.com/misionaryok" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram de Misionary" 
                className="p-2.5 rounded-full bg-[#2A2A2A] border border-[#E9FC87]/20 text-[#F2F2F2] 
                        hover:bg-[#E9FC87]/10 transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/misionary" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn de Misionary" 
                className="p-2.5 rounded-full bg-[#2A2A2A] border border-[#E9FC87]/20 text-[#F2F2F2] 
                        hover:bg-[#E9FC87]/10 transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            </div>
            
            <div className="pt-4 flex justify-center md:justify-start">
              <div className="flex items-center gap-3 text-[#F2F2F2]/70">
                <MapPin className="w-4 h-4 text-[#E9FC87]/80 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm">Posadas, Misiones, Argentina</p>
              </div>
            </div>
          </motion.div>
          
          {/* Columna de servicios */}
          <motion.div 
            className="md:col-span-3 md:col-start-6"
            variants={itemVariants}
            role="navigation"
            aria-labelledby="servicios-heading"
          >
            <h4 id="servicios-heading" className="text-sm font-bold text-[#E9FC87] uppercase tracking-wider mb-5 text-center md:text-left">Servicios</h4>
            <ul className="space-y-3.5 flex flex-col items-center md:items-start" role="list">
              {[
                { name: 'Marketing Digital', href: '/#marketing-digital' },
                { name: 'Diseño Gráfico', href: '/#diseno-grafico' },
                { name: 'Producción Audiovisual', href: '/#produccion-audiovisual' },
                { name: 'Sistemas Web', href: '/#sistemas-web' },
                { name: 'Campañas Publicitarias', href: '/#campanas-publicitarias' },
                { name: 'Identidad Visual', href: '/#identidad-visual' }
              ].map((item) => (
                <li key={item.name} role="listitem">
                    <Link 
                    href={item.href}
                    className="text-[#F2F2F2]/80 hover:text-[#E9FC87] transition-all duration-300 text-sm flex items-center group
                             focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 focus:rounded-md focus:px-2 focus:py-1"
                  >
                    {item.name}
                    <motion.span 
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="w-3 h-3 ml-1.5" />
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Columna de contacto y legal */}
          <motion.div 
            className="md:col-span-3 md:col-start-10"
            variants={itemVariants}
            role="navigation" 
            aria-labelledby="contacto-heading"
          >
            <h4 id="contacto-heading" className="text-sm font-bold text-[#E9FC87] uppercase tracking-wider mb-5 text-center md:text-left">Contacto</h4>
            <ul className="space-y-3.5 flex flex-col items-center md:items-start" role="list">
              <li role="listitem">
                <a 
                  href="mailto:marketing@misionary.com"
                  className="text-[#F2F2F2]/80 hover:text-[#E9FC87] transition-all duration-300 text-sm flex items-center group
                           focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 focus:rounded-md focus:px-2 focus:py-1"
                  aria-label="Enviar email a marketing@misionary.com"
                >
                  <Mail className="w-4 h-4 mr-2 text-[#E9FC87]/70 flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    marketing@misionary.com
                  </span>
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="tel:+5493764609701" 
                  className="text-[#F2F2F2]/80 hover:text-[#E9FC87] transition-all duration-300 text-sm flex items-center group
                           focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 focus:rounded-md focus:px-2 focus:py-1"
                  aria-label="Llamar al +54 9 3764 609 701"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#E9FC87]/70 flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    +54 9 3764 609 701
                  </span>
                </a>
              </li>
              <li className="pt-5 w-full text-center md:text-left" aria-hidden="true">
                <h4 id="legal-heading" className="text-xs font-semibold text-[#F2F2F2]/50 uppercase tracking-wider mb-3">Legal</h4>
              </li>
              <li role="listitem">
                <a 
                  href="/terminos" 
                  className="text-[#F2F2F2]/70 hover:text-[#BCB4FF] transition-all duration-300 text-sm flex items-center group
                           focus:outline-none focus:ring-2 focus:ring-[#BCB4FF]/40 focus:rounded-md focus:px-2 focus:py-1"
                >
                  <FileText className="w-4 h-4 mr-2 text-[#BCB4FF]/70 flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Términos y condiciones
                  </span>
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="/privacidad" 
                  className="text-[#F2F2F2]/70 hover:text-[#BCB4FF] transition-all duration-300 text-sm flex items-center group
                           focus:outline-none focus:ring-2 focus:ring-[#BCB4FF]/40 focus:rounded-md focus:px-2 focus:py-1"
                >
                  <FileText className="w-4 h-4 mr-2 text-[#BCB4FF]/70 flex-shrink-0" aria-hidden="true" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Política de privacidad
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright y créditos */}
        <motion.div 
          className="pt-8 border-t border-[#E9FC87]/10 flex flex-col md:flex-row items-center justify-between"
          variants={itemVariants}
          role="contentinfo"
        >
          <p className="text-xs text-center md:text-left text-[#F2F2F2]/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} MISIONARY. Todos los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
            <span className="text-xs text-center text-[#F2F2F2]/50 inline-flex items-center">
              <span>Creado con</span>
              <motion.span 
                className="text-[#E9FC87] mx-1.5 inline-flex"
                animate={{ 
                  scale: [1, 1.2, 1],
                  transition: { 
                    repeat: Infinity,
                    duration: 1.5,
                    repeatDelay: 3 
                  }
                }}
                aria-hidden="true"
              >
                <Heart className="w-3 h-3 fill-current" />
              </motion.span>
              <span>en Argentina</span>
            </span>
            <motion.a
              href="https://www.linkedin.com/company/misionary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de LinkedIn de Misionary"
              className="ml-0 md:ml-3 text-xs text-[#E9FC87]/60 hover:text-[#E9FC87] flex items-center
                       focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/40 focus:rounded-md focus:px-2 focus:py-1"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink className="w-3 h-3 ml-1" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
