import Image from "next/image";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import ServiceCard from "@/components/ServiceCard";
import Steps from "@/components/Steps";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      <Hero2 />
      {/* Hero */}
      {/* <Hero /> */}
      {/* Servicios */}
      <section id="servicios" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceCard service="estrategia" />
          <ServiceCard service="publicidad" />
          <ServiceCard service="web" />
          <ServiceCard service="audiovisual" />
        </div>
      </section>
      {/* Cómo trabajamos */}
      <section id="como-trabajamos" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Cómo trabajamos</h2>
        <Steps />
      </section>
      {/* Portfolio / Casos de éxito */}
      <section id="portfolio" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Casos de éxito</h2>
        <PortfolioGrid />
      </section>
      {/* Testimonios */}
      <section id="testimonios" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonios</h2>
        <TestimonialCarousel />
      </section>
      {/* Llamada a la acción */}
      <section id="cta" className="py-16 px-4">
        <div className="max-w-2xl mx-auto rounded-xl bg-gradient-to-r from-primary to-accent text-white p-10 flex flex-col items-center gap-4 shadow-lg">
          <h2 className="text-2xl font-bold">¿Listo para impulsar tu marca?</h2>
          <a
            href="#contacto"
            className="mt-2 px-6 py-3 rounded-full bg-white text-primary font-semibold shadow hover:bg-opacity-90 transition"
          >
            Contáctanos
          </a>
        </div>
      </section>
      {/* Formulario de contacto */}
      <section id="contacto" className="py-16 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
        <ContactForm />
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
