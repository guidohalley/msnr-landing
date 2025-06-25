"use client";

import React, { useState, useEffect } from "react";
import { useServiceFilter } from "@/hooks/use-service-filter";
import { goToWhatsApp, Service } from "@/lib/whatsapp";
import { FormItem } from "@/components/ui/form-item";
import { RadioGroup } from "@/components/ui/radio-group";
import { ProfileCard } from "@/components/ui/profile-card";
import { getSpecialistByService } from "@/data/specialists";
import { motion, AnimatePresence } from "framer-motion";

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
  PenTool, 
  Video, 
  Megaphone,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceFilterModal() {
  const { isOpen, selectedService, closeServiceFilter, selectService } = useServiceFilter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showSuccessIndicator, setShowSuccessIndicator] = useState(false);

  // Resetear estados cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setIsRedirecting(false);
      setShowSuccessIndicator(false);
    }
  }, [isOpen]);

  // Esta función solo se usa cuando hay un solo especialista y
  // el usuario hace clic en el botón "Contactar especialista"
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRedirecting(true);
    
    // Mostrar feedback visual de éxito
    setTimeout(() => {
      setShowSuccessIndicator(true);
      
      // Redirigir a WhatsApp después de mostrar el indicador de éxito
      setTimeout(() => {
        goToWhatsApp(selectedService);
        
        // Resetear estado después de redirigir
        setTimeout(() => {
          setIsRedirecting(false);
          setShowSuccessIndicator(false);
          closeServiceFilter();
        }, 500);
      }, 400);
    }, 600);
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
            className="grid gap-3 max-h-[45vh] overflow-y-auto pr-2 styled-scrollbar"
          >
            
            <FormItem
              value="websites"
              label="Quiero una página web"
              icon={Globe}
              checked={selectedService === "websites"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="mkt"
              label="Quiero administrar mis redes sociales"
              icon={Smartphone}
              checked={selectedService === "mkt"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="design"
              label="Quiero un logo e identidad visual"
              icon={PenTool}
              checked={selectedService === "design"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="audiovisual"
              label="Quiero producir videos para mi empresa"
              icon={Video}
              checked={selectedService === "audiovisual"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="web"
              label="Quiero un Sistema Web"
              icon={Globe}
              checked={selectedService === "web"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="campaigns"
              label="Quiero publicitar mi empresa"
              icon={Megaphone}
              checked={selectedService === "campaigns"}
              onChange={(value) => selectService(value as Service)}
            />
            <FormItem
              value="other"
              label="Quiero consultar por otros servicios"
              icon={MessageSquare}
              checked={selectedService === "other"}
              onChange={(value) => selectService(value as Service)}
            />
          </RadioGroup>
          
          <div className="flex flex-col gap-4">
            {getSpecialistByService(selectedService).length === 1 ? (
              <Button
                type="submit"
                disabled={isRedirecting}
                isLoading={isRedirecting}
                className={cn(
                  "w-full h-14 font-medium transition-all",
                  "bg-gradient-to-r from-[#E9FC87] to-[#c3d871]",
                  "hover:shadow-lg hover:shadow-[#E9FC87]/20",
                  showSuccessIndicator && "bg-[#E9FC87]"
                )}
              >
                {showSuccessIndicator ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle size={18} className="text-[#262626]" />
                    <span className="text-[#262626]">Conectando...</span>
                  </motion.div>
                ) : (
                  "Contactar a nuestra coordinadora"
                )}
              </Button>
            ) : (
              <div className="text-center text-sm text-[#E9FC87]">
                Te conectaremos con nuestra coordinadora:
              </div>
            )}
            
            <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="mt-2"
            >
              {/* Especialistas para el servicio seleccionado */}
              {(() => {
                const specialists = getSpecialistByService(selectedService);
                
                return (
                  <div className="space-y-2">
                    {specialists.map((specialist, index) => (
                      <ProfileCard 
                        key={specialist.id}
                        service={selectedService}
                        specialistIndex={index}
                        animate={false}
                        className="relative overflow-hidden cursor-pointer hover:bg-[#363636]/50 transition-colors duration-200"
                        onClick={() => {
                          // Efecto de clic visual
                          const profileCard = document.querySelector(`[data-specialist-id="${specialist.id}"]`);
                          if (profileCard) {
                            profileCard.classList.add("scale-95");
                            setTimeout(() => profileCard.classList.remove("scale-95"), 200);
                          }
                          
                          setIsRedirecting(true);
                          setTimeout(() => {
                            setShowSuccessIndicator(true);
                            setTimeout(() => {
                              goToWhatsApp(selectedService, index);
                              setTimeout(() => {
                                setIsRedirecting(false);
                                setShowSuccessIndicator(false);
                                closeServiceFilter();
                              }, 500);
                            }, 400);
                          }, 600);
                        }}
                      />
                    ))}
                  </div>
                );
              })()}

              {/* Indicador de conexión segura */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 mt-2 text-xs text-[#E9FC87]/70 px-2"
              >
                <CheckCircle size={12} />
                <span>Conexión segura por WhatsApp</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          </div>
        </form>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#E9FC87]/30"
          initial={{ width: "0%" }}
          animate={{ width: isRedirecting ? "100%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
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
