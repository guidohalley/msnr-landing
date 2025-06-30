"use client";

import { useState, useEffect } from "react";
import Hero3 from "./Hero3";
import HeroMobile from "./HeroMobile";

// Componente selector simple entre Hero3 (desktop) y HeroMobile
export default function HeroSelector() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      return window.innerWidth < 768;
    };

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    // Establecer estado inicial
    setIsMobile(checkIsMobile());
    
    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Skeleton mientras se determina el tipo de dispositivo
  if (isMobile === null) {
    return (
      <div className="min-h-screen bg-[#262626] flex items-center justify-center">
        <div className="w-16 h-16 animate-spin rounded-full border-4 border-[#E9FC87] border-t-transparent"></div>
      </div>
    );
  }

  return isMobile ? <HeroMobile /> : <Hero3 />;
}

// Skeleton para el Suspense
export function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-[#262626] flex items-center justify-center">
      <div className="w-16 h-16 animate-spin rounded-full border-4 border-[#E9FC87] border-t-transparent"></div>
    </div>
  );
}
