"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin,
  FileText,
  Calendar,
  Globe
} from "lucide-react";
import Link from "next/link";
import PoliticasStructuredData from "@/components/PoliticasStructuredData";

export default function PoliticasPrivacidad() {
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
      id: "informacion-general",
      title: "Información General",
      icon: FileText,
      content: `Esta Política de Privacidad describe cómo Misionary ("nosotros", "nuestro" o "la empresa"), agencia de marketing digital con sede en Posadas, Misiones, Argentina, recopila, utiliza, protege y divulga su información personal cuando utiliza nuestro sitio web misionary.com y nuestros servicios de marketing digital.`
    },
    {
      id: "informacion-recopilada",
      title: "Información que Recopilamos",
      icon: Database,
      content: `Recopilamos diferentes tipos de información para brindarle y mejorar nuestros servicios de marketing digital en Posadas, Misiones y toda Argentina.`
    },
    {
      id: "uso-informacion",
      title: "Cómo Utilizamos su Información",
      icon: UserCheck,
      content: `Utilizamos la información recopilada para diversos fines relacionados con nuestros servicios de marketing digital, diseño web y producción audiovisual.`
    },
    {
      id: "compartir-informacion",
      title: "Compartir y Divulgar Información",
      icon: Eye,
      content: `Nos comprometemos a proteger su privacidad. No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento.`
    },
    {
      id: "seguridad",
      title: "Seguridad de Datos",
      icon: Lock,
      content: `Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.`
    },
    {
      id: "derechos",
      title: "Sus Derechos",
      icon: Shield,
      content: `Como usuario de nuestros servicios en Argentina, usted tiene ciertos derechos con respecto a su información personal bajo la legislación de protección de datos.`
    }
  ];

  return (
    <>
      <PoliticasStructuredData />
      <div className="min-h-screen bg-[#262626] text-[#F2F2F2]">
        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 z-0 opacity-60" aria-hidden="true">
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-[#E9FC87]/3 blur-[150px]" />
          <div className="absolute bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-[#BCB4FF]/3 blur-[120px]" />
          
          {/* Patrón de puntos */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[radial-gradient(#E9FC87_1px,transparent_1px)] [background-size:32px_32px]"></div>
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
                        bg-[#E9FC87]/10 border border-[#E9FC87]/20 text-[#E9FC87]"
              variants={itemVariants}
              aria-hidden="true"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider">POLÍTICAS DE PRIVACIDAD</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2F2F2] mb-6 font-mundial"
              variants={itemVariants}
            >
              Protegemos tu{" "}
              <span className="text-[#E9FC87]">Privacidad</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-[#F2F2F2]/80 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              En Misionary, agencia de marketing digital en Posadas, Misiones, nos comprometemos a proteger 
              y respetar tu privacidad. Conoce cómo recopilamos, utilizamos y protegemos tu información personal.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-[#F2F2F2]/70">
                <Calendar className="w-5 h-5 text-[#E9FC87]/80" />
                <span className="text-sm">Última actualización: Julio 2025</span>
              </div>
              <div className="flex items-center gap-2 text-[#F2F2F2]/70">
                <MapPin className="w-5 h-5 text-[#E9FC87]/80" />
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
              className="mb-12 p-6 rounded-2xl bg-[#2A2A2A]/50 backdrop-blur-sm border border-[#E9FC87]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              aria-label="Navegación de contenidos"
            >
              <h2 className="text-lg font-semibold text-[#E9FC87] mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Contenidos de esta Política
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#262626]/40 hover:bg-[#E9FC87]/5 
                               transition-all duration-300 text-[#F2F2F2]/80 hover:text-[#E9FC87]
                               focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50"
                    >
                      <section.icon className="w-4 h-4 text-[#E9FC87]/70 flex-shrink-0" />
                      <span className="text-sm">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Sección 1: Información General */}
            <motion.section 
              id="informacion-general"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#E9FC87]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E9FC87]/10 border border-[#E9FC87]/20">
                  <FileText className="w-6 h-6 text-[#E9FC87]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Información General</h2>
              </div>
              
              <div className="space-y-4 text-[#F2F2F2]/80">
                <p>
                  Esta Política de Privacidad describe cómo <strong className="text-[#F2F2F2]">Misionary</strong> (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la empresa&quot;), 
                  agencia de marketing digital con sede en <strong className="text-[#E9FC87]">Posadas, Misiones, Argentina</strong>, 
                  recopila, utiliza, protege y divulga su información personal cuando utiliza nuestro sitio web 
                  <strong className="text-[#E9FC87]"> misionary.com</strong> y nuestros servicios de marketing digital.
                </p>
                
                <div className="bg-[#262626]/60 p-4 rounded-xl border-l-4 border-[#E9FC87]/50">
                  <h3 className="font-semibold text-[#F2F2F2] mb-2">Datos de la Empresa:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-[#E9FC87]">•</span>
                      <span><strong>Razón Social:</strong> Misionary - Agencia de Marketing Digital</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#E9FC87]">•</span>
                      <span><strong>Ubicación:</strong> Posadas, Misiones, Argentina</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#E9FC87]">•</span>
                      <span><strong>Sitio web:</strong> misionary.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#E9FC87]">•</span>
                      <span><strong>Email de contacto:</strong> marketing@misionary.com</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Al acceder y utilizar nuestros servicios de <strong className="text-[#E9FC87]">marketing digital, diseño web, 
                  producción audiovisual y campañas publicitarias</strong>, usted acepta las prácticas descritas en esta política.
                </p>
              </div>
            </motion.section>

            {/* Sección 2: Información que Recopilamos */}
            <motion.section 
              id="informacion-recopilada"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#BCB4FF]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#BCB4FF]/10 border border-[#BCB4FF]/20">
                  <Database className="w-6 h-6 text-[#BCB4FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Información que Recopilamos</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Recopilamos diferentes tipos de información para brindarle y mejorar nuestros servicios de 
                  <strong className="text-[#BCB4FF]"> marketing digital en Posadas, Misiones</strong> y toda Argentina.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#F2F2F2] mb-3 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-[#E9FC87]" />
                      Información Personal
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span>Nombre completo y datos de contacto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span>Dirección de email y teléfono</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span>Información de la empresa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span>Preferencias de servicios</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#F2F2F2] mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-[#BCB4FF]" />
                      Información Técnica
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Dirección IP y ubicación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Tipo de navegador y dispositivo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Páginas visitadas y tiempo de navegación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Cookies y tecnologías similares</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#E9FC87]/5 p-4 rounded-xl border border-[#E9FC87]/20">
                  <h4 className="font-semibold text-[#E9FC87] mb-2">Cookies y Tecnologías de Seguimiento</h4>
                  <p className="text-sm">
                    Utilizamos cookies y tecnologías similares (Google Analytics, Facebook Pixel, LinkedIn Insight Tag) 
                    para mejorar su experiencia, analizar el tráfico del sitio web y personalizar nuestros servicios de 
                    marketing digital para empresas en Misiones y Argentina.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Sección 3: Cómo Utilizamos su Información */}
            <motion.section 
              id="uso-informacion"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#E9FC87]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E9FC87]/10 border border-[#E9FC87]/20">
                  <UserCheck className="w-6 h-6 text-[#E9FC87]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Cómo Utilizamos su Información</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Utilizamos la información recopilada para diversos fines relacionados con nuestros servicios de 
                  <strong className="text-[#E9FC87]"> marketing digital, diseño web y producción audiovisual</strong> en Posadas, Misiones.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#E9FC87] mb-3">Prestación de Servicios</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Desarrollo de estrategias de marketing</li>
                      <li>• Creación de páginas web</li>
                      <li>• Gestión de redes sociales</li>
                      <li>• Producción audiovisual</li>
                      <li>• Campañas publicitarias</li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#BCB4FF] mb-3">Comunicación</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Respuesta a consultas</li>
                      <li>• Envío de presupuestos</li>
                      <li>• Actualizaciones de proyectos</li>
                      <li>• Newsletter informativo</li>
                      <li>• Soporte técnico</li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#E9FC87] mb-3">Mejora Continua</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Análisis de sitio web</li>
                      <li>• Optimización de servicios</li>
                      <li>• Investigación de mercado</li>
                      <li>• Desarrollo de productos</li>
                      <li>• Cumplimiento legal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Sección 4: Compartir y Divulgar Información */}
            <motion.section 
              id="compartir-informacion"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#BCB4FF]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#BCB4FF]/10 border border-[#BCB4FF]/20">
                  <Eye className="w-6 h-6 text-[#BCB4FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Compartir y Divulgar Información</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <div className="bg-[#E9FC87]/5 p-6 rounded-xl border border-[#E9FC87]/20">
                  <h3 className="font-semibold text-[#E9FC87] mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Compromiso de Privacidad
                  </h3>
                  <p>
                    <strong className="text-[#F2F2F2]">No vendemos, intercambiamos ni transferimos</strong> su información personal 
                    a terceros sin su consentimiento expreso, excepto en las circunstancias limitadas descritas a continuación.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#F2F2F2] mb-3">Compartimos información con:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span><strong>Proveedores de servicios:</strong> Herramientas necesarias para nuestros servicios de marketing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span><strong>Plataformas publicitarias:</strong> Google Ads, Meta Ads (con datos anonimizados)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#E9FC87] mt-1">•</span>
                        <span><strong>Autoridades legales:</strong> Cuando sea requerido por ley argentina</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl">
                    <h3 className="font-semibold text-[#F2F2F2] mb-3">Nunca compartimos:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Información personal con fines comerciales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Datos sensibles de su empresa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#BCB4FF] mt-1">•</span>
                        <span>Listas de contactos con terceros</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Sección 5: Seguridad de Datos */}
            <motion.section 
              id="seguridad"
              className="mb-12 p-8 rounded-2xl bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#E9FC87]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E9FC87]/10 border border-[#E9FC87]/20">
                  <Lock className="w-6 h-6 text-[#E9FC87]" />
                </div>
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Seguridad de Datos</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal 
                  contra acceso no autorizado, alteración, divulgación o destrucción en nuestras operaciones desde 
                  <strong className="text-[#E9FC87]"> Posadas, Misiones</strong>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#262626]/60 p-5 rounded-xl text-center">
                    <div className="w-12 h-12 bg-[#E9FC87]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-6 h-6 text-[#E9FC87]" />
                    </div>
                    <h3 className="font-semibold text-[#F2F2F2] mb-2">Encriptación SSL</h3>
                    <p className="text-sm">Conexiones seguras para proteger datos en tránsito</p>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl text-center">
                    <div className="w-12 h-12 bg-[#BCB4FF]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Database className="w-6 h-6 text-[#BCB4FF]" />
                    </div>
                    <h3 className="font-semibold text-[#F2F2F2] mb-2">Almacenamiento Seguro</h3>
                    <p className="text-sm">Servidores protegidos con acceso restringido</p>
                  </div>

                  <div className="bg-[#262626]/60 p-5 rounded-xl text-center">
                    <div className="w-12 h-12 bg-[#E9FC87]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <UserCheck className="w-6 h-6 text-[#E9FC87]" />
                    </div>
                    <h3 className="font-semibold text-[#F2F2F2] mb-2">Acceso Controlado</h3>
                    <p className="text-sm">Solo personal autorizado accede a información personal</p>
                  </div>
                </div>

                <div className="bg-[#BCB4FF]/5 p-4 rounded-xl border border-[#BCB4FF]/20">
                  <h4 className="font-semibold text-[#BCB4FF] mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Importante sobre la Seguridad
                  </h4>
                  <p className="text-sm">
                    Aunque implementamos las mejores prácticas de seguridad, ningún método de transmisión por internet es 100% seguro. 
                    Recomendamos mantener la confidencialidad de sus credenciales y contactarnos inmediatamente si sospecha algún acceso no autorizado.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Sección 6: Sus Derechos */}
            <motion.section 
              id="derechos"
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
                <h2 className="text-2xl font-bold text-[#F2F2F2] font-mundial">Sus Derechos</h2>
              </div>
              
              <div className="space-y-6 text-[#F2F2F2]/80">
                <p>
                  Como usuario de nuestros servicios en <strong className="text-[#BCB4FF]">Argentina</strong>, usted tiene ciertos 
                  derechos con respecto a su información personal bajo la legislación de protección de datos.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-[#262626]/60 p-5 rounded-xl">
                      <h3 className="font-semibold text-[#E9FC87] mb-3">Derechos de Acceso y Control</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-[#E9FC87] mt-1">•</span>
                          <span><strong>Acceso:</strong> Solicitar información sobre datos que tenemos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E9FC87] mt-1">•</span>
                          <span><strong>Rectificación:</strong> Corregir información inexacta</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#E9FC87] mt-1">•</span>
                          <span><strong>Eliminación:</strong> Solicitar borrado de datos</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#262626]/60 p-5 rounded-xl">
                      <h3 className="font-semibold text-[#BCB4FF] mb-3">Derechos de Comunicación</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-[#BCB4FF] mt-1">•</span>
                          <span><strong>Oposición:</strong> Oponerse al procesamiento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#BCB4FF] mt-1">•</span>
                          <span><strong>Portabilidad:</strong> Transferir datos a otro proveedor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#BCB4FF] mt-1">•</span>
                          <span><strong>Desuscripción:</strong> Cancelar comunicaciones</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#E9FC87]/5 p-6 rounded-xl border border-[#E9FC87]/20">
                  <h3 className="font-semibold text-[#E9FC87] mb-4">Cómo Ejercer sus Derechos</h3>
                  <p className="mb-4">
                    Para ejercer cualquiera de estos derechos, puede contactarnos a través de cualquiera de estos medios:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a 
                      href="mailto:marketing@misionary.com" 
                      className="flex items-center gap-3 p-3 bg-[#262626]/60 rounded-lg hover:bg-[#E9FC87]/10 transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50"
                    >
                      <Mail className="w-5 h-5 text-[#E9FC87]" />
                      <div>
                        <div className="font-medium text-[#F2F2F2]">Email</div>
                        <div className="text-xs text-[#F2F2F2]/70">marketing@misionary.com</div>
                      </div>
                    </a>
                    <a 
                      href="tel:+5493764609701" 
                      className="flex items-center gap-3 p-3 bg-[#262626]/60 rounded-lg hover:bg-[#E9FC87]/10 transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50"
                    >
                      <Phone className="w-5 h-5 text-[#E9FC87]" />
                      <div>
                        <div className="font-medium text-[#F2F2F2]">Teléfono</div>
                        <div className="text-xs text-[#F2F2F2]/70">+54 9 3764 609 701</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 p-3 bg-[#262626]/60 rounded-lg">
                      <MapPin className="w-5 h-5 text-[#E9FC87]" />
                      <div>
                        <div className="font-medium text-[#F2F2F2]">Oficina</div>
                        <div className="text-xs text-[#F2F2F2]/70">Posadas, Misiones</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Sección de Contacto y Actualizaciones */}
            <motion.section 
              className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#E9FC87]/5 to-[#BCB4FF]/5 border border-[#E9FC87]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#F2F2F2] mb-4 font-mundial">
                  Contacto y Actualizaciones
                </h2>
                <p className="text-[#F2F2F2]/80 max-w-2xl mx-auto">
                  Esta política puede actualizarse periódicamente. Le notificaremos sobre cambios importantes 
                  a través de nuestro sitio web o por email.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-[#E9FC87] mb-4">Información de Contacto</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#F2F2F2]/80">
                      <Mail className="w-5 h-5 text-[#E9FC87]" />
                      <span>marketing@misionary.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2F2F2]/80">
                      <Phone className="w-5 h-5 text-[#E9FC87]" />
                      <span>+54 9 3764 609 701</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2F2F2]/80">
                      <MapPin className="w-5 h-5 text-[#E9FC87]" />
                      <span>Posadas, Misiones, Argentina</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-[#BCB4FF] mb-4">Horarios de Atención</h3>
                  <div className="space-y-2 text-[#F2F2F2]/80">
                    <p>Lunes a Viernes: 9:00 - 18:00 (GMT-3)</p>
                    <p>Respuesta por email: Dentro de 24 horas</p>
                    <p>Consultas urgentes: WhatsApp disponible</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E9FC87]/20 text-center">
                <p className="text-sm text-[#F2F2F2]/60">
                  Última actualización: Julio 2025 | 
                  <Link 
                    href="/" 
                    className="text-[#E9FC87] hover:text-[#E9FC87]/80 transition-colors duration-300 ml-2
                             focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50 focus:rounded-md focus:px-1"
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
