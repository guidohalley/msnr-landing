"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function StarBorder({ 
  active = false, 
  size = 'md',
  children, 
  className,
  ...props 
}: StarBorderProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      {/* Capa del contenido */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animación del borde brillante */}
      {active && (
        <div className="absolute inset-0 -m-[1px] rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E9FC87] to-[#c3d871] opacity-25" />
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{
              background: 
                "linear-gradient(90deg, transparent, transparent, #E9FC87, transparent, transparent)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "200% 0%"],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          
          {/* Partículas de estrella */}
          <div className="absolute inset-0">
            {[...Array(size === 'sm' ? 5 : size === 'md' ? 8 : 12)].map((_, i) => (
              <motion.div
                key={i}
                className={cn(
                  "absolute bg-[#E9FC87]",
                  size === 'sm' ? "w-0.5 h-0.5" : size === 'md' ? "w-1 h-1" : "w-1.5 h-1.5"
                )}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  borderRadius: "50%",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  repeatDelay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
