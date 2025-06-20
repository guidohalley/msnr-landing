"use client";

import { CheckCircleIcon, ClipboardDocumentListIcon, RocketLaunchIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const steps = [
	{ title: "Briefing", desc: "Conocemos tu marca y objetivos.", icon: ClipboardDocumentListIcon },
	{ title: "Planificación", desc: "Definimos estrategia y canales.", icon: RocketLaunchIcon },
	{ title: "Ejecución", desc: "Implementamos y optimizamos campañas.", icon: CheckCircleIcon },
	{ title: "Reportes", desc: "Medimos resultados y ajustamos.", icon: ChartBarIcon },
];

export default function Steps() {
	return (
		<motion.ol
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}
			className="flex flex-col md:flex-row items-center justify-center gap-8 w-full"
		>
			{steps.map((step, i) => (
				<li key={step.title} className="flex flex-col items-center text-center max-w-[180px]">
					<span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mb-3">
						<step.icon className="w-7 h-7" aria-hidden="true" />
					</span>
					<span className="font-bold text-base mb-1">{step.title}</span>
					<span className="text-sm text-muted-foreground">{step.desc}</span>
					{i < steps.length - 1 && (
						<span
							className="hidden md:block w-16 h-1 bg-gradient-to-r from-primary to-accent my-4 mx-auto rounded-full"
							aria-hidden="true"
						></span>
					)}
				</li>
			))}
		</motion.ol>
	);
}
