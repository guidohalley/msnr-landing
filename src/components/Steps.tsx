"use client";

import { CheckCircleIcon, ClipboardDocumentListIcon, RocketLaunchIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Reunión inicial",
		desc: "Nos reunimos con tu empresa para analizar lo que se requiere y entender tus objetivos.",
		icon: ClipboardDocumentListIcon,
	},
	{
		title: "Briefing & Estrategia",
		desc: "Realizamos un briefing, comunicamos al equipo y creamos la estrategia de marketing y contenido.",
		icon: RocketLaunchIcon,
	},
	{
		title: "Planificación & Ejecución",
		desc: "Presentamos la planificación y llevamos a cabo la estrategia en todos los canales.",
		icon: CheckCircleIcon,
	},
	{
		title: "Reportes & Resultados",
		desc: "Presentamos reportes claros sobre lo realizado y los resultados obtenidos.",
		icon: ChartBarIcon,
	},
];

export default function Steps() {
	return (
		<div className="relative w-full flex flex-col items-center justify-center">
			<motion.ol
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="flex flex-col md:flex-row items-center justify-center gap-8 w-full relative z-10"
			>
				{steps.map((step, i) => (
					<li key={step.title} className="flex flex-col items-center text-center max-w-[220px] relative">
						{/* Línea SVG curva animada sobre cada step en desktop */}
						<motion.svg
							className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-8 pointer-events-none z-0"
							width="128"
							height="32"
							viewBox="0 0 128 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							initial={{ pathLength: 0, opacity: 0.5 }}
							whileInView={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1.2, delay: i * 0.2, type: 'spring' }}
						>
							<motion.path
								d="M 8 24 Q 64 0 120 24"
								stroke="url(#step-gradient)"
								strokeWidth="5"
								strokeLinecap="round"
								fill="none"
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								transition={{ duration: 1.2, delay: i * 0.2, type: 'spring' }}
							/>
							<defs>
								<linearGradient id="step-gradient" x1="0" y1="0" x2="128" y2="0" gradientUnits="userSpaceOnUse">
									<stop stopColor="#E9FC87" />
									<stop offset="1" stopColor="#38BDF8" />
								</linearGradient>
							</defs>
						</motion.svg>
						{/* Glow animado con GSAP */}
						<span
							className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white mb-3 shadow-lg border-4 border-white dark:border-zinc-900 z-10 relative step-glow"
							style={{ boxShadow: '0 0 0 0 #E9FC87' }}
							id={`step-glow-${i}`}
						>
							<step.icon className="w-8 h-8" aria-hidden="true" />
						</span>
						<span className="font-bold text-base mb-1 text-primary">{step.title}</span>
						<span className="text-sm text-muted-foreground mb-2">{step.desc}</span>
					</li>
				))}
			</motion.ol>
			{/* GSAP glow effect para cada icono */}
			<script dangerouslySetInnerHTML={{
				__html: `
          if (typeof window !== 'undefined' && window.gsap) {
            document.querySelectorAll('.step-glow').forEach((el, idx) => {
              window.gsap.to(el, {
                boxShadow: '0 0 32px 0 #E9FC87AA',
                repeat: -1,
                yoyo: true,
                duration: 1.6,
                ease: 'power1.inOut',
                delay: idx * 0.15
              });
            });
          }
        `
			}} />
		</div>
	);
}
