**Estructura de especialistas y servicios de MSNR**

Este documento detalla la estructura de especialistas asignados a cada servicio de Misionary (MSNR) y la implementación del profile card dinámico para el modal de contacto.

## Estructura de servicios y especialistas

| Servicio | Clave | Especialista | WhatsApp | Área |
|----------|-------|--------------|----------|------|
| Sistemas Web | web | Guido Halley | 5493764609701 | Desarrollo web y aplicaciones |
| Marketing Digital | mkt | Jimena Romero | 5493764189737 | Marketing y redes sociales |
| Diseño Gráfico | design | Nicole Marinoff | 5493764391353 | Diseño gráfico y editorial |
| Identidad Visual | identity | Nicole Marinoff | 5493764391353 | Branding e identidad corporativa |
| Producción Audiovisual | audiovisual | Lucas Cabrera Milde | 5493764391353 | Fotografía y video |
| Campañas Publicitarias | campaigns | Santiago Feltan | 5493764604322 | Campañas y estrategias publicitarias |
| Otros Servicios | other | Santiago Feltan | 5493764604322 | Coordinación general |

## Componentes implementados

### 1. ProfileCard
Un componente reutilizable para mostrar la información del especialista asignado a cada servicio:

```tsx
<ProfileCard 
  service="web"            // El servicio seleccionado (determina el especialista)
  animate={true}           // Si el componente tiene animación al montar
  imageType="initials"     // Puede ser "initials" o "avatar" (si hay fotos disponibles)
  showExtraDetails={false} // Mostrar información adicional en hover
/>
```

### 2. Módulo de datos de especialistas
Archivo `specialists.ts` que centraliza toda la información de especialistas y proporciona funciones auxiliares:

```tsx
// Obtener especialista según servicio
const specialist = getSpecialistByService("web");
```

### 3. WhatsApp integrado
Función mejorada en `whatsapp.ts` que usa los datos centralizados para construir mensajes personalizados según el servicio:

```tsx
goToWhatsApp("web"); // Redirige a WhatsApp con mensaje personalizado para Guido Halley
```

## Instrucciones para fotos de perfil

Para añadir fotos reales de perfil:

1. Añade las imágenes en `/public/team/` con nombre `{id-especialista}.jpg` 
   - guido-halley.jpg
   - jimena-romero.jpg
   - nicole-marinoff.jpg
   - lucas-cabrera.jpg
   - santiago-feltan.jpg

2. Cambia `imageType="avatar"` en el componente ProfileCard donde corresponda

## Recomendaciones de mantenimiento

- Si se agrega un nuevo especialista, actualizar `specialists.ts`
- Si se reasigna un servicio a otro especialista, solo modificar `specialists.ts`
- Para cambios en el formato del mensaje de WhatsApp, editar `goToWhatsApp()` en `whatsapp.ts`
- Para cambiar el diseño del profile card, editar el componente `ProfileCard`

## Próximas mejoras sugeridas

- Añadir fotos reales de los especialistas
- Implementar analytics para medir conversiones por especialista
- Expandir el componente ProfileCard para incluir credenciales, portfolio o testimonios
- Crear una página dedicada al equipo mostrando todos los especialistas
