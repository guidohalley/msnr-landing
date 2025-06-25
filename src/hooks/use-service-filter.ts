"use client";

import { useContext } from "react";
import { ServiceFilterContext } from "@/contexts/service-filter-context";

export function useServiceFilter() {
  const context = useContext(ServiceFilterContext);
  
  if (!context) {
    throw new Error("useServiceFilter must be used within a ServiceFilterProvider");
  }
  
  return context;
}
