import React from "react";
import Header from "@/components/Header";
import Hero3, { Hero3Skeleton } from "@/components/Hero3";
import Steps from "@/components/Steps";
import StatusTable from "@/components/StatusTable";
import Footer from "@/components/Footer";
import ServiceSlider from "@/components/ServiceSlider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-[#262626] text-[#F2F2F2] transition-colors">
        <React.Suspense fallback={<Hero3Skeleton />}>
          <Hero3 />
        </React.Suspense>
        
        {/* Servicios - ahora incorpora su propio container */}
        <div id="servicios">
          <ServiceSlider />
        </div>
        
        <section id="como-trabajamos" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Cómo trabajamos</h2>
          <Steps />
        </section>
        
        <StatusTable />
        <Footer />
      </main>
    </>
  );
}
