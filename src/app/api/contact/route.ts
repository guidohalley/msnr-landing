// Mock API endpoint para el formulario de contacto
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Simula un retardo de red
  await new Promise((res) => setTimeout(res, 800));
  const data = await request.json();
  // Validación simple (en producción usar Zod en backend también)
  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ success: false, error: 'Faltan campos requeridos.' }, { status: 400 });
  }
  return NextResponse.json({ success: true });
}
