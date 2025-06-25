"use client";

import useSWR from "swr";
import { PageSpeedBadge } from "@/components/widgets/PageSpeedBadge";
import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

const fetcher = (url: string) => fetch(url).then(res => res.json());

type Status = {
  url: string;
  ok: boolean;
  status: number;
  responseTime?: number;
  name?: string;
  year?: number;
};

export default function StatusTable() {
  // Hooks siempre al inicio
  const { data, error, isLoading } = useSWR<Status[]>("/api/status", fetcher, {
    refreshInterval: 30000,
  });
  // Paginación local
  const [page, setPage] = useState(1);
  const perPage = 5;

  // Efecto 3D tilt interactivo para la tabla
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 200, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 200, damping: 20 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Limitar el ángulo máximo
    const maxTilt = 12;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    tiltX.set(rotateX);
    tiltY.set(rotateY);
  }
  function handlePointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  // Procesamiento de datos después de hooks
  if (isLoading) {
    return (
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Páginas Web Realizadas</h2>
        <div className="text-center text-zinc-500 py-12">Cargando…</div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Páginas Web Realizadas</h2>
        <div className="text-center text-rose-500 py-12">Error al cargar estados</div>
      </section>
    );
  }

  const online = data?.filter(site => site.ok) ?? [];
  const totalPages = Math.ceil(online.length / perPage);
  const paginated = online.slice((page - 1) * perPage, page * perPage);

  return (
    <section id="paginas-web" className="py-16 px-4 max-w-6xl mx-auto relative overflow-hidden">
      {/* Grid SVG trendy background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none select-none z-0"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-status"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#E9FC87"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-status)" />
      </svg>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start relative z-10">
        {/* Columna izquierda: texto y CTA */}
        <div className="flex flex-col gap-6 justify-between h-full max-w-sm grow-0 md:col-span-2">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-left md:text-4xl text-primary">¿Querés una web profesional?</h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 max-w-md">
              Creamos sitios web modernos, rápidos y optimizados para tu negocio. 
              <span className="font-semibold text-primary">Mostramos resultados reales</span> y acompañamos a nuestros clientes en cada etapa digital.
              <br /><br />
              <span className="italic text-zinc-500">&quot;Tu web es tu carta de presentación. Hagamos que impacte.&quot;</span>
            </p>
            <p className="text-zinc-700 dark:text-zinc-200 text-lg leading-relaxed">
              Si tu web no aparece aquí, consultanos por WhatsApp y te la sumamos en minutos.
            </p>
          </div>
          <a
            href="https://wa.me/5493764609701?text=Hola%2C%20vengo%20desde%20misionary.com%20y%20me%20interesa%20una%20p%C3%A1gina%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-10 py-4 rounded-full bg-neon text-dark font-mundial font-black border border-neon hover:bg-white hover:text-neon hover:shadow-[0_0_32px_0_#E9FC87AA] transition-all duration-300 text-lg text-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2"
          >
            <span className="relative z-10">Quiero un presupuesto</span>
            <span className="absolute inset-0 rounded-full bg-neon/30 blur-lg opacity-0 hover:opacity-40 transition-opacity duration-300" />
          </a>
        </div>
        {/* Columna derecha: tabla de sitios con efecto 3D tilt */}
        <motion.div
          className="overflow-x-auto rounded-xl shadow border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 md:col-span-3 grow"
          style={{
            rotateX: springX,
            rotateY: springY,
            willChange: "transform",
            perspective: 900,
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          tabIndex={0}
          aria-label="Tabla de sitios web realizados"
        >
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Sitio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">PageSpeed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Visitar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {paginated.length === 0 ? (
                <tr><td colSpan={4} className="px-6 py-4 text-zinc-400">No hay sitios online.</td></tr>
              ) : (
                paginated.map((site, idx) => (
                  <tr key={site.url} className={idx % 2 === 1 ? "even:bg-gray-50 dark:even:bg-zinc-800/40" : ""}>
                    <td className="px-6 py-4 font-mono text-sm">{site.url.replace(/^https?:\/\//, "")}</td>
                    <td className="px-6 py-4 text-emerald-600 font-semibold">Up</td>
                    <td className="px-6 py-4"><PageSpeedBadge url={site.url} /></td>
                    <td className="px-6 py-4">
                      <Link href={site.url} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark transition-colors">Visitar</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {/* Controles de paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 py-4">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 disabled:opacity-50"
              >
                Anterior
              </button>
              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                Página {page} de {totalPages}
              </span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
