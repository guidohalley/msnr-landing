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
        <React.Suspense fallback={<Hero3Skeleton />}>
          <Hero3 />
        </React.Suspense>      

        <div id="servicios">
          <ServiceSlider />
        </div>        
        <div id="como-trabajamos">
          <Steps />
        </div>        
        <Footer />
      </main>
    </>
  );
}
