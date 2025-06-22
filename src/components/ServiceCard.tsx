"use client";

import { Video, Palette, Database, Monitor } from "lucide-react";
import { AcademicCapIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export const services = {
	estrategia: {
		icon: AcademicCapIcon,
		title: "Administración de Redes Sociales",
		desc: "Desarrollamos estrategias personalizadas para tu presencia online y objetivos de negocio.",
	},
	produccionAudiovisual: {
		icon: Video,
		title: "Producción Audiovisual",
		desc: "Videos, reels y fotografía profesional para comunicar tu marca.",
	},
	disenoGrafico: {
		icon: Palette,
		title: "Diseño Gráfico",
		desc: "Creación de identidad visual y piezas gráficas con estilo y coherencia.",
	},
	patentamiento: {
		icon: ShieldCheckIcon,
		title: "Patentamiento de Marca",
		desc: "Protege tu marca con registros y asesoría legal especializada.",
	},
	sistemasWeb: {
		icon: Database,
		title: "Sistemas Web",
		desc: "Desarrollo de arquitecturas backend robustas y escalables.",
	},
	paginasWeb: {
		icon: Monitor,
		title: "Páginas Web",
		desc: "Sitios web responsivos, rápidos y optimizados para SEO.",
	},
};

type ServiceKey = keyof typeof services;

export default function ServiceCard({ service }: { service: ServiceKey }) {
	const S = services[service];
	// Hooks siempre al inicio
	const cardRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!S) {
			console.warn(`Servicio desconocido: ${service}`);
			return;
		}
		if (cardRef.current) {
			gsap.fromTo(
				cardRef.current,
				{ opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					filter: "blur(0px)",
					duration: 1.1,
					ease: "power3.out",
					delay: 0.15 + Math.random() * 0.2,
				}
			);
		}
	}, [S, service]);

	if (!S) {
		return null;
	}

	return (
		<motion.article
			ref={cardRef}
			whileHover={{
				y: -6,
				boxShadow: "0 8px 32px 0 rgba(37,99,235,0.10)",
				scale: 1.04,
				filter: "brightness(1.08) blur(0px)",
			}}
			className="bg-white dark:bg-zinc-900 rounded-xl p-6 flex flex-col items-center gap-4 shadow-md border border-zinc-100 dark:border-zinc-800 transition-colors min-h-[220px] will-change-transform"
			tabIndex={0}
			aria-label={S.title}
		>
			<S.icon
				className="w-10 h-10 text-primary mb-2"
				aria-hidden="true"
			/>
			<h3 className="text-lg font-bold mb-1 text-center">
				{S.title}
			</h3>
			<p className="text-sm text-muted-foreground text-center">
				{S.desc}
			</p>
		</motion.article>
	);
}
