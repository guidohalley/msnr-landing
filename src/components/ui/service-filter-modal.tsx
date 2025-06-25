"use client";

import React, { useState } from "react";
import { useServiceFilter } from "@/hooks/use-service-filter";
import { goToWhatsApp, Service } from "@/lib/whatsapp";
import { FormItem } from "@/components/ui/form-item";
import { RadioGroup } from "@/components/ui/radio-group";

import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  MessageSquare, 
  Smartphone, 
  Palette, 
  PenTool, 
  Video, 
  Megaphone
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceFilterModal() {
  const { isOpen, selectedService, closeServiceFilter, selectService } = useServiceFilter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRedirecting(true);
    
    // Agregar un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      goToWhatsApp(selectedService);
      
      // Resetear estado después de redirigir
      setTimeout(() => {
        setIsRedirecting(false);
        closeServiceFilter();
      }, 500);
    }, 800);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeServiceFilter()}>
      <DialogContent className="max-w-md w-[90vw] sm:w-full overflow-hidden">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E9FC87] to-[#c3d871]">
              Elegí tu servicio
            </span>
          </DialogTitle>
          <DialogDescription className="text-base">
            Te conectaremos con un especialista según tu necesidad
          </DialogDescription>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E9FC87]/20 to-transparent my-1"></div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="grid gap-6 pt-2">
          <RadioGroup
            defaultValue={selectedService}
            value={selectedService}
            onValueChange={(value) => selectService(value as Service)}
            className="grid gap-3 max-h-[50vh] overflow-y-auto pr-2 styled-scrollbar"
          >
            <FormItem
              value="web"
              label="Sistemas Web"
              icon={Globe}
              checked={selectedService === "web"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="mkt"
              label="Marketing Digital"
              icon={Smartphone}
              checked={selectedService === "mkt"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="design"
              label="Diseño Gráfico"
              icon={PenTool}
              checked={selectedService === "design"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="identity"
              label="Identidad Visual"
              icon={Palette}
              checked={selectedService === "identity"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="audiovisual"
              label="Producción Audiovisual"
              icon={Video}
              checked={selectedService === "audiovisual"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="campaigns"
              label="Campañas Publicitarias"
              icon={Megaphone}
              checked={selectedService === "campaigns"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="other"
              label="Otro servicio"
              icon={MessageSquare}
              checked={selectedService === "other"}
              onChange={(value) => selectService(value as Service)}
            />
          </RadioGroup>
          
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              disabled={isRedirecting}
              isLoading={isRedirecting}
              className={cn(
                "w-full h-14 font-medium transition-all",
                "bg-gradient-to-r from-[#E9FC87] to-[#c3d871]",
                "hover:shadow-lg hover:shadow-[#E9FC87]/20"
              )}
            >
              Contactar especialista
            </Button>
            
            <div className="text-xs text-center text-[#F2F2F2]/70">
              Te redirigiremos a WhatsApp con el especialista en {selectedService === "web" ? "Sistemas Web" : 
                selectedService === "mkt" ? "Marketing Digital" :
                selectedService === "design" ? "Diseño Gráfico" :
                selectedService === "identity" ? "Identidad Visual" :
                selectedService === "audiovisual" ? "Producción Audiovisual" :
                selectedService === "campaigns" ? "Campañas Publicitarias" : "otros servicios"}
            </div>
          </div>
        </form>
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#E9FC87]/30" 
          style={{ 
            width: isRedirecting ? "100%" : "0%",
            transition: "width 0.8s ease-in-out" 
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export function ServiceFilterProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceFilterModal />
    </>
  );
}

export function ServiceFilterTrigger({ className }: { className?: string }) {
  const { openServiceFilter } = useServiceFilter();
  
  return (
    <Button
      onClick={openServiceFilter}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all",
        "bg-gradient-to-r from-[#E9FC87] to-[#c3d871] text-black",
        "hover:shadow-lg hover:shadow-[#E9FC87]/20",
        className
      )}
    >
      Contactar
    </Button>
  );
}
