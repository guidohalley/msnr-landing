"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
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
          <span className="font-mundial font-extrabold text-xl text-primary group-hover:text-primary-dark transition-colors">Misioary</span>
        </Link>
        <ul className="flex gap-6 items-center text-sm font-medium font-mundial">
          <li><a href="#servicios" className="font-mundial hover:text-primary transition-colors">Servicios</a></li>
          <li><a href="#portfolio" className="font-mundial hover:text-primary transition-colors">Portfolio</a></li>
          <li><a href="#testimonios" className="font-mundial hover:text-primary transition-colors">Testimonios</a></li>
          <li><a href="#contacto" className="font-mundial bg-primary text-white px-4 py-2 rounded-full shadow hover:bg-primary-dark transition-colors">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
