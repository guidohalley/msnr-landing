"use client";

import React from "react";
import { useServiceFilter } from "@/hooks/use-service-filter";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/whatsapp";
import { trackLinkClick } from "@/utils/analytics";

interface WhatsAppButtonProps {
  service?: Service;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

export function WhatsAppButton({
  service = "web",
  className,
  children = "Contactar por WhatsApp",
  variant = "primary",
  size = "default",
}: WhatsAppButtonProps) {
  const { openServiceFilter, selectService } = useServiceFilter();

  const handleClick = () => {
    selectService(service);
    openServiceFilter();
    // Trackear el clic en el botón de WhatsApp con el servicio seleccionado
    trackLinkClick("WhatsApp Button", `whatsapp-${service}`, "cta");
  };

  const variants = {
    primary: "bg-[#E9FC87] hover:bg-[#DDED7E] text-black font-medium shadow-lg shadow-[#E9FC87]/10",
    secondary: "bg-[#111]/80 hover:bg-[#222] text-[#F2F2F2] border border-[#E9FC87]/20 hover:border-[#E9FC87]/30",
    outline: "bg-transparent hover:bg-[#E9FC87]/5 text-[#E9FC87] border border-[#E9FC87]/50 hover:border-[#E9FC87]",
  };

  const sizes = {
    default: "h-12 px-6 py-3 rounded-xl text-sm",
    sm: "h-10 px-4 py-2 rounded-lg text-xs",
    lg: "h-14 px-8 py-4 rounded-xl text-base",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9FC87]/40",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:scale-[1.03] active:scale-[0.98] transition-transform",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}
