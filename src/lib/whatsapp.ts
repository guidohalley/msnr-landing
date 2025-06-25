"use client";

export type Service = "web" | "mkt" | "identity" | "design" | "audiovisual" | "campaigns" | "other";

export function goToWhatsApp(service: Service) {
  const numbers = {
    web: "5493764609701", // Guido Halley
    mkt: "5493764189737", // Jimena Romero
    identity: "5493764391353", // Nicole Marinoff
    design: "5493764391353", // Nicole Marinoff
    audiovisual: "5493764391353", // Lucas Cabrera Milde (mismo número que Nicole)
    campaigns: "5493764604322", // Santiago Feltan
    other: "5493764604322", // Santiago Feltan
  };
  
  const labels = {
    web: "Sistemas Web / Página web",
    mkt: "Marketing Digital",
    identity: "Identidad Visual",
    design: "Diseño Gráfico",
    audiovisual: "Producción Audiovisual",
    campaigns: "Campañas Publicitarias",
    other: "otro servicio",
  };
  
  const contacts = {
    web: "con Guido Halley",
    mkt: "con Jimena Romero",
    identity: "con Nicole Marinoff",
    design: "con Nicole Marinoff",
    audiovisual: "con Lucas Cabrera Milde",
    campaigns: "con Santiago Feltan",
    other: "con nuestro equipo",
  };

  const text = encodeURIComponent(
    `Hola, vengo desde misionary.com y me interesa ${labels[service]} ${contacts[service]}.`
  );
  window.open(`https://wa.me/${numbers[service]}?text=${text}`, "_blank");
}
