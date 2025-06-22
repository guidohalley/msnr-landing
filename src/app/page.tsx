import React from "react";
import Hero2, { Hero2Skeleton } from "@/components/Hero2";
import Steps from "@/components/Steps";
import StatusTable from "@/components/StatusTable";
import Footer from "@/components/Footer";
import ServiceSlider from "@/components/ServiceSlider";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      <React.Suspense fallback={<Hero2Skeleton />}>
        <Hero2 />
      </React.Suspense>
      {/* Servicios */}
      <section id="servicios" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
        <ServiceSlider />
      </section>
      <MarketingEnserio />
      {/* Cómo trabajamos */}
      <section id="como-trabajamos" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Cómo trabajamos</h2>
        <Steps />
      </section>
      <StatusTable />
      <Footer />
    </main>
  );
}
