"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 bg-background border-t border-zinc-100 dark:border-zinc-800 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-bold text-primary text-lg">Misionary</span>
          <span className="text-xs text-muted-foreground">Agencia de Marketing Digital</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="mailto:hola@misionary.agency" aria-label="Email" className="hover:text-primary transition"><Mail className="w-5 h-5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition"><Linkedin className="w-5 h-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-primary transition"><Github className="w-5 h-5" /></a>
        </div>
        <div className="text-xs text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Misionary. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
