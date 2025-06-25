import { Service } from "@/lib/whatsapp";

// Tipos para definir la estructura de datos de especialistas
export type Specialist = {
  id: string;
  name: string;
  initials: string;
  role: string;
  title: string;
  message: string;
  colorGradient: string;
  whatsappNumber: string;
  services: Service[];
};

// Datos de especialistas con información más detallada
export const specialists: Specialist[] = [
  {
    id: "guido-halley",
    name: "Guido Halley",
    initials: "GH",
    role: "Sistemas Web",
    title: "Desarrollador Web",
    message: "Especialista en desarrollo web y aplicaciones",
    colorGradient: "from-[#E9FC87]/20 to-[#BCB4FF]/20",
    whatsappNumber: "5493764609701",
    services: ["web"],
  },
  {
    id: "jimena-romero",
    name: "Jimena Romero",
    initials: "JR",
    role: "Marketing Digital",
    title: "Especialista en Marketing",
    message: "Estrategias de marketing digital y gestión de redes",
    colorGradient: "from-[#E9FC87]/20 to-[#FFBC84]/20",
    whatsappNumber: "5493764189737",
    services: ["mkt"],
  },
  {
    id: "nicole-marinoff",
    name: "Nicole Marinoff",
    initials: "NM",
    role: "Diseño y Branding",
    title: "Diseñadora Gráfica",
    message: "Especialista en branding e identidad corporativa",
    colorGradient: "from-[#E9FC87]/20 to-[#FF84BC]/20",
    whatsappNumber: "5493764391353",
    services: ["design"],
  },
  {
    id: "ivan-gomez",
    name: "Iván Gomez",
    initials: "IG",
    role: "Diseño y Branding",
    title: "Diseñador Gráfico",
    message: "Especialista en diseño gráfico e identidad visual",
    colorGradient: "from-[#E9FC87]/20 to-[#FF84BC]/20",
    whatsappNumber: "5493764200915",
    services: ["design"],
  },
  {
    id: "lucas-cabrera",
    name: "Lucas Cabrera Milde",
    initials: "LC",
    role: "Producción Audiovisual",
    title: "Productor Audiovisual",
    message: "Especialista en fotografía y producción de video",
    colorGradient: "from-[#E9FC87]/20 to-[#84FFBC]/20", 
    whatsappNumber: "5493764391353",
    services: ["audiovisual"],
  },
  {
    id: "evelyn-lopez",
    name: "Evelyn López Chapedi",
    initials: "EL",
    role: "Producción Audiovisual",
    title: "Productora Audiovisual",
    message: "Especialista en producción y edición audiovisual",
    colorGradient: "from-[#E9FC87]/20 to-[#84FFBC]/20", 
    whatsappNumber: "5493764336387",
    services: ["audiovisual"],
  },
  {
    id: "santiago-feltan",
    name: "Santiago Feltan",
    initials: "SF",
    role: "Campañas Publicitarias",
    title: "Director de Campañas",
    message: "Coordinación de campañas y estrategias publicitarias",
    colorGradient: "from-[#E9FC87]/20 to-[#84BCFF]/20",
    whatsappNumber: "5493764604322",
    services: ["campaigns"],
  },
  {
    id: "gimena-rippel",
    name: "Gimena Rippel",
    initials: "GR",
    role: "Coordinación de Servicios",
    title: "Coordinadora de Proyectos Web",
    message: "Especialista en desarrollo web y consultoría",
    colorGradient: "from-[#E9FC87]/20 to-[#BCB4FF]/20",
    whatsappNumber: "5493764123717",
    services: ["websites", "other"],
  },
];

// Función auxiliar para obtener especialistas según el servicio
export function getSpecialistByService(service: Service): Specialist[] {
  const serviceSpecialists = specialists.filter(s => s.services.includes(service));
  
  if (serviceSpecialists.length === 0) {
    // Fallback a Gimena Rippel (para otros servicios)
    return [specialists.find(s => s.id === "gimena-rippel")!];
  }
  
  return serviceSpecialists;
}

// Función para obtener el primer especialista (para compatibilidad con código existente)
export function getFirstSpecialistByService(service: Service): Specialist {
  const serviceSpecialists = getSpecialistByService(service);
  return serviceSpecialists[0];
}
