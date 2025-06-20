import { NextResponse } from "next/server";
import { websites } from "@/data/websites";

export async function GET() {
  // Simulación de chequeo de estado (en real, deberías hacer fetch a cada sitio)
  // Aquí todos los sitios de websites.ts se marcan como ok si status === 'online'
  const data = websites.map(site => ({
    url: site.url,
    ok: site.status === "online",
    status: site.status === "online" ? 200 : 500,
    name: site.name,
    year: site.year,
  }));
  return NextResponse.json(data);
}
