"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

const clients = [
	{ name: "LOWE S.A.", logo: "/logos/lowe.png" },
	{ name: "PETROVALLE", logo: "/logos/petrovalle.png" },
	{ name: "FENIX INMOBILIARIA", logo: "/logos/fenix.png" },
	{ name: "AUTOVALLE", logo: "/logos/autovalle.png" },
	// Puedes agregar más clientes aquí
];

export default function ClientsSlider() {
	return (
		<section className="w-full py-0 md:py-16 bg-dark/80 flex flex-col items-center relative overflow-hidden">
			{/* Fondo Spline 3D */}
			<div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
				<iframe
					src="https://my.spline.design/untitled-6217a740e713536b7272ab5ddfaf3442"
					title="Spline 3D Clientes"
					className="w-full h-full min-h-[320px] md:min-h-[420px] scale-[2.25] md:scale-[5.5] origin-center opacity-60"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					aria-hidden="true"
					tabIndex={-1}
				/>
			</div>
			<div className="relative z-10 w-full flex flex-col items-center">
				<h2 className="font-mundial text-2xl md:text-3xl font-bold text-neon mb-8 text-center tracking-tight drop-shadow-lg">
					Confían en nosotros
				</h2>
				<Splide
					options={{
						type: "loop",
						perPage: 4,
						perMove: 1,
						gap: "2rem",
						autoplay: true,
						interval: 2200,
						pauseOnHover: false,
						arrows: false,
						pagination: false,
						drag: "free",
						breakpoints: {
							1024: { perPage: 3 },
							640: { perPage: 2 },
						},
					}}
					className="w-full max-w-5xl"
					aria-label="Clientes de Misionary"
				>
					{clients.map((client) => (
						<SplideSlide
							key={client.name}
							className="flex items-center justify-center"
						>
							<div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-md px-6 py-4 flex items-center justify-center h-28 w-48 md:w-56 transition-transform hover:scale-105">
								<Image
									src={client.logo}
									alt={`Logo ${client.name}`}
									width={180}
									height={60}
									className="object-contain h-16 w-auto mx-auto"
									loading="lazy"
									draggable={false}
								/>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	);
}
