"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle as WhatsappIcon } from "lucide-react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Header() {
  const whatsappBtnRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
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
  }, []);

  return (
    <header className="w-full font-mundial bg-background/80 backdrop-blur border-b border-zinc-800 dark:border-black-900 fixed top-0 left-0 z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 font-mundial">
        <Link href="/" className="flex items-center gap-3 group font-mundial">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
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
          <span className="font-mundial font-extrabold text-xl text-primary group-hover:text-primary-dark transition-colors">MSNR</span>
        </Link>
        <ul className="flex gap-6 items-center text-sm font-medium font-mundial">
          <li><a href="#servicios" className="font-mundial hover:text-primary transition-colors">Servicios</a></li>
          <li><a href="#portfolio" className="font-mundial hover:text-primary transition-colors">Portfolio</a></li>
          <li><a href="#testimonios" className="font-mundial hover:text-primary transition-colors">Testimonios</a></li>
          <li>
            <motion.a
              ref={whatsappBtnRef}
              href="https://wa.me/5493764609701"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-mundial bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#128C7E] focus:ring-2 focus:ring-[#25D366] transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.07, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.97 }}
              aria-label="Contactar por WhatsApp"
            >
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: '0 0 24px 4px #25D36655', opacity: 0.5 }} />
              <WhatsappIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              <span>WhatsApp</span>
            </motion.a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
