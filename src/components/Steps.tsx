"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { 
  ClipboardList, 
  FileSpreadsheet, 
  Rocket, 
  BarChart3, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const steps = [
	{
		title: "Reunión inicial",
		desc: "Nos reunimos con tu empresa para analizar objetivos y requerimientos específicos.",
		icon: ClipboardList,
	},
	{
		title: "Briefing & Estrategia",
		desc: "Creamos una estrategia integral de marketing y contenido adaptada a tus necesidades.",
		icon: FileSpreadsheet,
	},
	{
		title: "Planificación & Ejecución",
		desc: "Implementamos la estrategia en todos los canales con un enfoque omnicanal.",
		icon: Rocket,
	},
	{
		title: "Reportes & Resultados",
		desc: "Presentamos informes detallados de rendimiento y resultados obtenidos.",
		icon: BarChart3,
	},
];

export default function Steps() {
	const stepsRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(stepsRef, { once: true, amount: 0.2 });

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
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

	// Efecto de líneas conectoras
	const lineVariants: Variants = {
		hidden: { pathLength: 0, opacity: 0.3 },
		visible: { 
			pathLength: 1, 
			opacity: 1,
			transition: { duration: 1.5, ease: "easeInOut" } 
		}
	};

	return (
		<section 
			ref={stepsRef} 
			className="relative w-full py-24 px-4 overflow-hidden bg-gradient-to-b from-background to-background/90"
			id="como-trabajamos"
		>
			{/* Elementos decorativos de fondo */}
			<div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
				<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E9FC87]/30 to-transparent" />
				<div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E9FC87]/5 blur-[120px]" />
				<div className="absolute bottom-40 -left-10 w-[400px] h-[400px] rounded-full bg-[#BCB4FF]/5 blur-[140px]" />
				
				{/* Patrón de puntos en el fondo para más textura */}
				<div className="absolute inset-0 opacity-10">
					<div className="h-full w-full bg-[radial-gradient(#E9FC87_1px,transparent_1px)] [background-size:20px_20px]"></div>
				</div>
			</div>

			{/* Contenido principal */}
			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Encabezado */}
				<motion.div 
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<div className="inline-flex items-center justify-center mb-4 gap-2 px-3 py-1.5 rounded-full 
									bg-[#E9FC87]/10 border border-[#E9FC87]/20 text-[#E9FC87] shadow-lg shadow-[#E9FC87]/5">
						<Sparkles className="w-3.5 h-3.5 mr-1" />
						<span className="text-xs font-medium tracking-wider">NUESTRO PROCESO</span>
					</div>
					<h2 className="text-3xl md:text-5xl font-bold mb-6 font-mundial">
						Cómo <span className="text-[#E9FC87] relative inline-block">
							trabajamos
							<motion.span 
								className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#E9FC87]/30"
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								viewport={{ once: true }}
								transition={{ delay: 0.5, duration: 0.7 }}
							/>
						</span>
					</h2>
					<p className="max-w-2xl mx-auto text-[#F2F2F2]/80 text-lg">
						Un enfoque estructurado y eficiente para transformar tu presencia digital
						y potenciar tu marca.
					</p>
				</motion.div>

				{/* Pasos */}
				<motion.div
					className="relative"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					{/* Línea de conexión horizontal en desktop */}
					<div className="hidden md:block absolute top-[90px] left-1/2 -translate-x-1/2 w-[80%] h-1 z-0">
						<svg 
							width="100%" 
							height="4" 
							viewBox={`0 0 1000 4`} 
							fill="none" 
							preserveAspectRatio="none"
							className="w-full"
						>
							<motion.path
								d="M0,2 L1000,2"
								stroke="url(#steps-gradient)"
								strokeWidth="3"
								strokeLinecap="round"
								strokeDasharray="8 8"
								variants={lineVariants}
							/>
							<defs>
								<linearGradient id="steps-gradient" x1="0" y1="0" x2="100%" y2="0">
									<stop stopColor="#E9FC87" />
									<stop offset="0.5" stopColor="#BCB4FF" />
									<stop offset="1" stopColor="#E9FC87" />
								</linearGradient>
							</defs>
						</svg>
					</div>

					{/* Pasos en grid */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">
						{steps.map((step, i) => (
							<motion.div
								key={step.title}
								className="flex flex-col items-center text-center relative"
								variants={itemVariants}
							>
								{/* Línea conectora vertical en mobile */}
								{i < steps.length - 1 && (
									<div className="md:hidden absolute -bottom-16 left-1/2 transform -translate-x-1/2 h-20 w-px bg-gradient-to-b from-[#E9FC87]/70 to-transparent z-0" />
								)}

								{/* Contenedor numerado con borde */}
								<div className="relative w-[170px] md:w-full">
									{/* Número del paso */}
									<div className="absolute -top-3 -left-3 md:top-0 md:-left-1 bg-[#E9FC87] w-6 h-6 rounded-full 
											flex items-center justify-center text-xs font-bold text-[#262626] z-10 shadow-lg shadow-[#E9FC87]/10">
										{i + 1}
									</div>
									
									{/* Icono con efecto de brillo */}
									<motion.div
										className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-2xl 
												bg-[#262626] border border-[#E9FC87]/30 shadow-lg shadow-[#E9FC87]/5 z-10"
										whileHover={{ 
											scale: 1.05, 
											boxShadow: "0 0 30px 0 rgba(233, 252, 135, 0.2)"
										}}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<step.icon className="w-8 h-8 text-[#E9FC87]" aria-hidden="true" />
										
										{/* Destellos de fondo */}
										<div className="absolute inset-0 overflow-hidden rounded-2xl">
											<div className="absolute -inset-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
													w-full h-full rotate-45 bg-gradient-to-r from-transparent via-[#E9FC87]/10 to-transparent 
													opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
										</div>
									</motion.div>

									{/* Título y descripción */}
									<div className="bg-[#262626]/50 backdrop-blur-sm rounded-xl px-4 py-5 border border-[#E9FC87]/10">
										<h3 className="text-lg font-bold mb-2 font-mundial text-[#E9FC87]">
											{step.title}
										</h3>
										<p className="text-sm text-[#F2F2F2]/80 mx-auto">
											{step.desc}
										</p>
									</div>
								</div>

								{/* Flecha hacia el siguiente paso (solo para desktop) */}
								{i < steps.length - 1 && (
									<div className="hidden md:flex absolute -right-5 top-[58px] z-10">
										<ArrowRight className="w-5 h-5 text-[#E9FC87]/60" />
									</div>
								)}
							</motion.div>
						))}
					</div>

					{/* CTA reactivado con diseño mejorado */}
					<motion.div 
						className="flex justify-center mt-16"
						variants={itemVariants}
					>
						<motion.a 
							href="#contacto"
							className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#E9FC87] to-[#E9FC87]/90 
                                 text-[#262626] font-semibold transition-all hover:shadow-lg hover:shadow-[#E9FC87]/20
                                 focus:ring-2 focus:ring-[#E9FC87]/50 focus:outline-none"
							whileHover={{ scale: 1.03, boxShadow: "0 0 30px 0 rgba(233, 252, 135, 0.2)" }}
							whileTap={{ scale: 0.98 }}
						>
							Comienza tu proyecto
							<ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
						</motion.a>
					</motion.div>
					
					{/* Línea decorativa final */}
					<div className="mt-24 flex justify-center">
						<div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#E9FC87]/20 via-[#E9FC87] to-[#E9FC87]/20"></div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
