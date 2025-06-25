"use client";

import { ThemeProvider } from "next-themes";
import { ServiceFilterProvider } from "@/contexts/service-filter-context";
import { ServiceFilterModal } from "@/components/ui/service-filter-modal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ServiceFilterProvider>
        {children}
        <ServiceFilterModal />
      </ServiceFilterProvider>
    </ThemeProvider>
  );
}
