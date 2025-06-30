import React from "react";
import Header from "@/components/Header";
import Hero3, { Hero3Skeleton } from "@/components/Hero3";
import Steps from "@/components/Steps";
// import StatusTable from "@/components/StatusTable";
import Footer from "@/components/Footer";
import ServiceSlider from "@/components/ServiceSlider";
import SkipLink from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex flex-col min-h-screen bg-[#262626] text-[#F2F2F2] transition-colors" tabIndex={-1}>
        {/* Hero Section - Agencia de Marketing Digital en Posadas */}
        <React.Suspense fallback={<Hero3Skeleton />}>
          <Hero3 />
        </React.Suspense>      

        {/* Servicios de Marketing Digital */}
        <section id="servicios" aria-labelledby="servicios-heading">
          <h2 id="servicios-heading" className="sr-only">
            Servicios de Marketing Digital en Posadas, Misiones
          </h2>
          <ServiceSlider />
        </section>        
        
        {/* Proceso de Trabajo */}
        <section id="como-trabajamos" aria-labelledby="proceso-heading">
          <h2 id="proceso-heading" className="sr-only">
            Cómo trabajamos en Misionary - Proceso de Marketing Digital
          </h2>
          <Steps />
        </section>        
        
        <Footer />
      </main>
    </>
  );
}
