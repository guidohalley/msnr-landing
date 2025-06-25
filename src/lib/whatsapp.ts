"use client";

export type Service = "web" | "mkt" | "design" | "audiovisual" | "campaigns" | "websites" | "other";

// Las etiquetas para cada servicio
export const serviceLabels: Record<Service, string> = {
  web: "Sistemas Web",
  websites: "Crear una página web",
  mkt: "Marketing Digital",
  design: "Diseño Gráfico e Identidad Visual",
  audiovisual: "Producción Audiovisual",
  campaigns: "Campañas Publicitarias",
  other: "consultar por otros servicios de Misionary",
};

// Importamos la función de especialistas al principio del archivo
import { getSpecialistByService } from "@/data/specialists";

// Función para ir a WhatsApp que será llamada desde la UI
export function goToWhatsApp(service: Service, specialistIndex: number = 0) {
  // NOTA TEMPORAL: Actualmente todos los servicios están dirigidos a Gimena Rippel
  // hasta nuevo aviso. La lógica de especialistas por servicio está temporalmente desactivada.
  
  // Obtenemos los datos de especialistas para este servicio
  const specialists = getSpecialistByService(service);
  
  // Seleccionamos el especialista según el índice proporcionado
  // Si el índice está fuera de rango, usamos el primero
  const specialist = specialists[specialistIndex] || specialists[0];
  
  // Construimos el mensaje personalizado
  const text = encodeURIComponent(
    `Hola, vengo desde misionary.com y me interesa ${serviceLabels[service]} con ${specialist.name}.`
  );
  
  // Abrimos WhatsApp en una nueva pestaña
  window.open(`https://wa.me/${specialist.whatsappNumber}?text=${text}`, "_blank");
}
