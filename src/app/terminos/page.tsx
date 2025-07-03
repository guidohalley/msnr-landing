"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Scale, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Globe,
  Users,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import TerminosStructuredData from "@/components/TerminosStructuredData";

export default function TerminosCondiciones() {
  const headerRef = useRef<HTMLElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  const sections = [
    {
      id: "aceptacion-terminos",
      title: "Aceptación de Términos",
      icon: CheckCircle,
    },
    {
      id: "servicios-ofrecidos",
      title: "Servicios Ofrecidos",
      icon: Users,
    },
    {
      id: "obligaciones-cliente",
      title: "Obligaciones del Cliente",
      icon: FileText,
    },
    {
      id: "pagos-facturacion",
      title: "Pagos y Facturación",
      icon: CreditCard,
    },
    {
      id: "propiedad-intelectual",
      title: "Propiedad Intelectual",
      icon: Shield,
    },
    {
      id: "limitacion-responsabilidad",
      title: "Limitación de Responsabilidad",
      icon: Scale,
    }
  ];

  return (
    <>
      <TerminosStructuredData />
      <div className="min-h-screen bg-[#262626] text-[#F2F2F2]">
        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 z-0 opacity-60" aria-hidden="true">
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-[#BCB4FF]/3 blur-[150px]" />
          <div className="absolute bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-[#E9FC87]/3 blur-[120px]" />
          
          {/* Patrón de puntos */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[radial-gradient(#BCB4FF_1px,transparent_1px)] [background-size:32px_32px]"></div>
          </div>
        </div>

        {/* Header de la página */}
        <header 
          ref={headerRef}
          className="relative z-10 pt-20 pb-16 px-4"
          role="banner"
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-6 gap-2 px-4 py-2 rounded-full 
                        bg-[#BCB4FF]/10 border border-[#BCB4FF]/20 text-[#BCB4FF]"
              variants={itemVariants}
              aria-hidden="true"
            >
              <Scale className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider">TÉRMINOS Y CONDICIONES</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2F2F2] mb-6 font-mundial"
              variants={itemVariants}
            >
              Términos de{" "}
              <span className="text-[#BCB4FF]">Servicio</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-[#F2F2F2]/80 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Términos y condiciones que rigen el uso de los servicios de Misionary, 
              agencia de marketing digital en Posadas, Misiones, Argentina.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-[#F2F2F2]/70">
                <Calendar className="w-5 h-5 text-[#BCB4FF]/80" />
                <span className="text-sm">Última actualización: Julio 2025</span>
              </div>
              <div className="flex items-center gap-2 text-[#F2F2F2]/70">
                <MapPin className="w-5 h-5 text-[#BCB4FF]/80" />
                <span className="text-sm">Posadas, Misiones, Argentina</span>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* Contenido principal */}
        <main className="relative z-10 px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Navegación de contenidos */}
            <motion.nav 
              className="mb-12 p-6 rounded-2xl bg-[#2A2A2A]/50 backdrop-blur-sm border border-[#BCB4FF]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              aria-label="Navegación de contenidos"
            >
              <h2 className="text-lg font-semibold text-[#BCB4FF] mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Contenidos de estos Términos
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#262626]/40 hover:bg-[#BCB4FF]/5 
                               transition-all duration-300 text-[#F2F2F2]/80 hover:text-[#BCB4FF]
                               focus:outline-none focus:ring-2 focus:ring-[#BCB4FF]/50"
                    >
                      <section.icon className="w-4 h-4 text-[#BCB4FF]/70 flex-shrink-0" />
                      <span className="text-sm">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Sección 1: Aceptación de Términos */}
            <motion.section 
              id="aceptacion-terminos"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#BCB4FF]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#BCB4FF]/10 border border-[#BCB4FF]/20">
                  <CheckCircle className="w-6 h-6 text-[#BCB4FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Aceptación de Términos</h2>
              </div>
              
              <div className="space-y-4 text-[#F2F2F2]/80">
                <p>
                  Al acceder y utilizar los servicios de <strong className="text-[#F2F2F2]">Misionary</strong>, 
                  agencia de marketing digital con sede en <strong className="text-[#BCB4FF]">Posadas, Misiones, Argentina</strong>, 
                  usted acepta estar legalmente vinculado por estos términos y condiciones.
                </p>
                
                <div className="bg-[#262626]/60 p-4 rounded-xl border-l-4 border-[#BCB4FF]/50">
                  <h3 className="font-semibold text-[#F2F2F2] mb-2">Condiciones de Aceptación:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-[#BCB4FF]">•</span>
                      <span>Debe ser mayor de 18 años o representar legalmente a una empresa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#BCB4FF]">•</span>
                      <span>Debe tener capacidad legal para contratar en Argentina</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#BCB4FF]">•</span>
                      <span>Acepta cumplir con todas las leyes aplicables</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Si no está de acuerdo con algún término, debe discontinuar el uso de nuestros servicios inmediatamente.
                </p>
              </div>
            </motion.section>

            {/* Sección 2: Servicios Ofrecidos */}
            <motion.section 
              id="servicios-ofrecidos"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#E9FC87]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E9FC87]/10 border border-[#E9FC87]/20">
                  <Users className="w-6 h-6 text-[#E9FC87]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Servicios Ofrecidos</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Misionary ofrece servicios integrales de <strong className="text-[#E9FC87]">marketing digital</strong> 
                  para empresas y emprendedores en Posadas, Misiones y toda Argentina.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#E9FC87] mb-3">Servicios Principales</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Marketing Digital y estrategias</li>
                      <li>• Diseño y desarrollo web</li>
                      <li>• Gestión de redes sociales</li>
                      <li>• Producción audiovisual</li>
                      <li>• Campañas publicitarias digitales</li>
                      <li>• Identidad visual y branding</li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#BCB4FF] mb-3">Modalidad de Trabajo</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Suscripción mensual personalizada</li>
                      <li>• Equipo exclusivo asignado</li>
                      <li>• Gestión en Notion 24/7</li>
                      <li>• Comunicación L-V 9-18hs</li>
                      <li>• Revisiones ilimitadas</li>
                      <li>• Foco en resultados medibles</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#E9FC87]/5 p-4 rounded-xl border border-[#E9FC87]/20">
                  <h4 className="font-semibold text-[#E9FC87] mb-2">Importante sobre los Servicios</h4>
                  <p className="text-sm">
                    Los servicios se prestan bajo metodología ágil, con entregas incrementales y comunicación constante. 
                    Los plazos pueden variar según la complejidad y los requerimientos específicos de cada proyecto.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Sección 3: Obligaciones del Cliente */}
            <motion.section 
              id="obligaciones-cliente"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#BCB4FF]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#BCB4FF]/10 border border-[#BCB4FF]/20">
                  <FileText className="w-6 h-6 text-[#BCB4FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Obligaciones del Cliente</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Para garantizar la calidad y efectividad de nuestros servicios de marketing digital, 
                  el cliente debe cumplir con las siguientes obligaciones:
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#BCB4FF] mb-3">Información y Contenido</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Proporcionar información veraz y actualizada</li>
                      <li>• Entregar contenido y materiales necesarios</li>
                      <li>• Respetar plazos de feedback acordados</li>
                      <li>• Validar y aprobar entregas en tiempo</li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#E9FC87] mb-3">Comunicación</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Mantener canales de comunicación activos</li>
                      <li>• Designar responsable de comunicación</li>
                      <li>• Responder consultas en tiempo acordado</li>
                      <li>• Participar en reuniones programadas</li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#BCB4FF] mb-3">Cumplimiento</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Cumplir con pagos según cronograma</li>
                      <li>• Respetar derechos de propiedad intelectual</li>
                      <li>• No usar servicios para fines ilegales</li>
                      <li>• Mantener confidencialidad acordada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Sección 4: Pagos y Facturación */}
            <motion.section 
              id="pagos-facturacion"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#E9FC87]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E9FC87]/10 border border-[#E9FC87]/20">
                  <CreditCard className="w-6 h-6 text-[#E9FC87]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Pagos y Facturación</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Los servicios de Misionary funcionan bajo modalidad de <strong className="text-[#E9FC87]">suscripción mensual</strong>, 
                  con planes personalizados según las necesidades de cada cliente.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#E9FC87] mb-3">Condiciones de Pago</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span><strong>Frecuencia:</strong> Mensual, por adelantado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span><strong>Vencimiento:</strong> Primeros 5 días del mes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span><strong>Moneda:</strong> Pesos argentinos (ARS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span><strong>Métodos:</strong> Transferencia, MercadoPago</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#BCB4FF] mb-3">Políticas Importantes</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Mora: Interés según normativa argentina</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Suspensión por falta de pago a los 10 días</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Facturación según normativa AFIP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>No reembolsos por servicios ya prestados</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#E9FC87]/5 p-4 rounded-xl border border-[#E9FC87]/20">
                  <h4 className="font-semibold text-[#E9FC87] mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Importante sobre Cancelaciones
                  </h4>
                  <p className="text-sm">
                    Las cancelaciones deben comunicarse con 30 días de anticipación. Los servicios se mantienen activos 
                    hasta el final del período ya abonado. No se procesan reembolsos proporcionales.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Sección 5: Propiedad Intelectual */}
            <motion.section 
              id="propiedad-intelectual"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#BCB4FF]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#BCB4FF]/10 border border-[#BCB4FF]/20">
                  <Shield className="w-6 h-6 text-[#BCB4FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Propiedad Intelectual</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <div className="bg-[#BCB4FF]/5 p-6 rounded-xl border border-[#BCB4FF]/20">
                  <h3 className="font-semibold text-[#BCB4FF] mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Derechos y Licencias
                  </h3>
                  <p>
                    Los trabajos desarrollados por Misionary son propiedad del cliente una vez completado el pago total. 
                    Misionary retiene el derecho de usar los trabajos como referencia en su portafolio.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#F2F2F2] mb-3">Derechos del Cliente</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span>Propiedad total sobre trabajos pagados completamente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span>Uso comercial sin restricciones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span>Modificación y adaptación permitida</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#F2F2F2] mb-3">Derechos de Misionary</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Uso en portafolio y casos de estudio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Referencias en presentaciones comerciales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Metodología y procesos propietarios</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Sección 6: Limitación de Responsabilidad */}
            <motion.section 
              id="limitacion-responsabilidad"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#E9FC87]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E9FC87]/10 border border-[#E9FC87]/20">
                  <Scale className="w-6 h-6 text-[#E9FC87]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Limitación de Responsabilidad</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Misionary se compromete a prestar servicios de marketing digital con la máxima profesionalidad, 
                  bajo las siguientes limitaciones de responsabilidad:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl text-center">
                    <div className="w-12 h-12 bg-[#E9FC87]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="w-6 h-6 text-[#E9FC87]" />
                    </div>
                    <h3 className="font-semibold text-[#F2F2F2] mb-2">Resultados</h3>
                    <p className="text-sm">No garantizamos resultados específicos en ventas o conversiones</p>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl text-center">
                    <div className="w-12 h-12 bg-[#BCB4FF]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-[#BCB4FF]" />
                    </div>
                    <h3 className="font-semibold text-[#F2F2F2] mb-2">Plataformas</h3>
                    <p className="text-sm">No somos responsables por cambios en plataformas de terceros</p>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl text-center">
                    <div className="w-12 h-12 bg-[#E9FC87]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Scale className="w-6 h-6 text-[#E9FC87]" />
                    </div>
                    <h3 className="font-semibold text-[#F2F2F2] mb-2">Límite Legal</h3>
                    <p className="text-sm">Responsabilidad limitada al monto del contrato mensual</p>
                  </div>
                </div>

                <div className="bg-[#BCB4FF]/5 p-4 rounded-xl border border-[#BCB4FF]/20">
                  <h4 className="font-semibold text-[#BCB4FF] mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Marco Legal
                  </h4>
                  <p className="text-sm">
                    Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta 
                    por los tribunales competentes de Posadas, Misiones.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Sección de Contacto */}
            <motion.section 
              className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#BCB4FF]/5 to-[#E9FC87]/5 border border-[#BCB4FF]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#F2F2F2] mb-4 font-mundial">
                  Contacto Legal
                </h2>
                <p className="text-[#F2F2F2]/80 max-w-2xl mx-auto">
                  Para consultas sobre estos términos y condiciones, puede contactarnos a través de los siguientes medios.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a 
                  href="mailto:marketing@misionary.com" 
                  className="flex items-center gap-3 p-4 bg-[#262626]/60 rounded-xl hover:bg-[#BCB4FF]/10 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-[#BCB4FF]/50"
                >
                  <Mail className="w-6 h-6 text-[#BCB4FF]" />
                  <div>
                    <div className="font-medium text-[#F2F2F2]">Email Legal</div>
                    <div className="text-sm text-[#F2F2F2]/70">marketing@misionary.com</div>
                  </div>
                </a>
                <a 
                  href="tel:+5493764609701" 
                  className="flex items-center gap-3 p-4 bg-[#262626]/60 rounded-xl hover:bg-[#BCB4FF]/10 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-[#BCB4FF]/50"
                >
                  <Phone className="w-6 h-6 text-[#BCB4FF]" />
                  <div>
                    <div className="font-medium text-[#F2F2F2]">Teléfono</div>
                    <div className="text-sm text-[#F2F2F2]/70">+54 9 3764 609 701</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 bg-[#262626]/60 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#BCB4FF]" />
                  <div>
                    <div className="font-medium text-[#F2F2F2]">Oficina Legal</div>
                    <div className="text-sm text-[#F2F2F2]/70">Posadas, Misiones, Argentina</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#BCB4FF]/20 text-center">
                <p className="text-sm text-[#F2F2F2]/60">
                  Última actualización: Julio 2025 | 
                  <Link 
                    href="/" 
                    className="text-[#BCB4FF] hover:text-[#BCB4FF]/80 transition-colors duration-300 ml-2
                             focus:outline-none focus:ring-2 focus:ring-[#BCB4FF]/50 focus:rounded-md focus:px-1"
                  >
                    Volver al inicio
                  </Link>
                </p>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
    </>
  );
}
