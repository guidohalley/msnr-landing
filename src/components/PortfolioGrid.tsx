"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
	{
		title: "Lanzamiento App X",
		desc: "Campaña 360° para lanzamiento de app fintech en LATAM.",
		img: "/file.svg",
		link: "#",
	},
	{
		title: "E-commerce Moda",
		desc: "Rediseño web y performance ads para tienda de moda.",
		img: "/window.svg",
		link: "#",
	},
	{
		title: "Marca Personal Coach",
		desc: "Branding digital y video reels para influencer.",
		img: "/globe.svg",
		link: "#",
	},
	{
		title: "Restaurante Gourmet",
		desc: "Gestión de redes y fotografía profesional.",
		img: "/vercel.svg",
		link: "#",
	},
];

export default function PortfolioGrid() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
			{projects.map(p => (
				<motion.a
					key={p.title}
					href={p.link}
					className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-colors"
					whileHover={{ scale: 1.03 }}
					tabIndex={0}
				>
					<Image
						src={p.img}
						alt={p.title}
						width={320}
						height={200}
						className="object-cover w-full h-40"
						placeholder="blur"
						blurDataURL={p.img}
					/>
					<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
						<h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
						<p className="text-sm text-white/80">{p.desc}</p>
						<span className="mt-2 text-xs underline text-accent-light">
							Ver caso
						</span>
					</div>
				</motion.a>
			))}
		</div>
	);
}
