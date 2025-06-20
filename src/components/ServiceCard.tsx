"use client";

import { LucideTarget, Megaphone, MonitorSmartphone, Video } from "lucide-react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const services = {
  estrategia: {
    icon: AcademicCapIcon,
    title: "Estrategia Digital",
    desc: "Planificamos tu crecimiento online con foco en resultados medibles.",
  },
  publicidad: {
    icon: Megaphone,
    title: "Publicidad en redes",
    desc: "Campañas creativas y segmentadas en Meta, Google y más.",
  },
  web: {
    icon: MonitorSmartphone,
    title: "Diseño Web",
    desc: "Sitios modernos, rápidos y optimizados para SEO y conversión.",
  },
  audiovisual: {
    icon: Video,
    title: "Producción Audiovisual",
    desc: "Videos, reels y fotografía profesional para tu marca.",
  },
};

type ServiceKey = keyof typeof services;

export default function ServiceCard({ service }: { service: ServiceKey }) {
  const S = services[service];
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.10)" }}
      className="bg-white dark:bg-zinc-900 rounded-xl p-6 flex flex-col items-center gap-4 shadow-md border border-zinc-100 dark:border-zinc-800 transition-colors min-h-[220px]"
      tabIndex={0}
      aria-label={S.title}
    >
      <S.icon className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
      <h3 className="text-lg font-bold mb-1 text-center">{S.title}</h3>
      <p className="text-sm text-muted-foreground text-center">{S.desc}</p>
    </motion.article>
  );
}
