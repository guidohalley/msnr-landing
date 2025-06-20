"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
	{
		name: "Sofía G.",
		img: "/file.svg",
		quote:
			"Misionary nos ayudó a crecer en redes y captar nuevos clientes. ¡Súper profesionales!",
	},
	{
		name: "Martín P.",
		img: "/globe.svg",
		quote:
			"El equipo entendió nuestra visión y la llevó a otro nivel. Recomendados 100%.",
	},
	{
		name: "Lucía R.",
		img: "/window.svg",
		quote:
			"El rediseño web mejoró nuestra conversión y presencia online. Excelente experiencia.",
	},
];

export default function TestimonialCarousel() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}
		>
			<Splide
				options={{
					type: "loop",
					perPage: 2,
					gap: "1.5rem",
					autoplay: true,
					pauseOnHover: true,
					arrows: false,
					pagination: true,
					breakpoints: {
						640: { perPage: 1 },
					},
				}}
				aria-label="Testimonios de clientes"
				className="w-full"
			>
				{testimonials.map((t) => (
					<SplideSlide key={t.name}>
						<figure className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-md flex flex-col items-center gap-4 border border-zinc-100 dark:border-zinc-800 min-h-[220px]">
							<Image
								src={t.img}
								alt={`Foto de ${t.name}`}
								width={56}
								height={56}
								className="rounded-full object-cover border-2 border-primary"
								placeholder="blur"
								blurDataURL={t.img}
							/>
							<blockquote className="text-center text-lg font-medium text-foreground">
								“{t.quote}”
							</blockquote>
							<figcaption className="text-primary font-semibold mt-2">
								{t.name}
							</figcaption>
						</figure>
					</SplideSlide>
				))}
			</Splide>
		</motion.div>
	);
}
