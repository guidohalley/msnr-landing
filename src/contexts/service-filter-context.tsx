"use client";

import React, { createContext, useContext, useState } from "react";
import { Service } from "@/lib/whatsapp";

type ServiceFilterContextType = {
  isOpen: boolean;
  selectedService: Service;
  openServiceFilter: () => void;
  closeServiceFilter: () => void;
  selectService: (service: Service) => void;
};

export const ServiceFilterContext = createContext<ServiceFilterContextType | undefined>(undefined);

export function ServiceFilterProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service>("web");

  const openServiceFilter = () => {
    setIsOpen(true);
  };

  const closeServiceFilter = () => {
    setIsOpen(false);
  };

  const selectService = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <ServiceFilterContext.Provider value={{
      isOpen,
      selectedService,
      openServiceFilter,
      closeServiceFilter,
      selectService,
    }}>
      {children}
    </ServiceFilterContext.Provider>
  );
}

export function useServiceFilter() {
  const context = useContext(ServiceFilterContext);
  if (context === undefined) {
    throw new Error("useServiceFilter must be used within a ServiceFilterProvider");
  }
  return context;
}
