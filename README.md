# NexEnergy · Página web

Página institucional de NexEnergy. Next.js 14 + Tailwind. Todas las consultas van al WhatsApp de la empresa.

## Variables de entorno (Vercel → Settings → Environment Variables)

| Variable | Ejemplo | Para qué |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP` | `5493511234567` | Número de WhatsApp: 549 + característica sin 0 + número sin 15 |
| `NEXT_PUBLIC_INSTAGRAM` | `https://instagram.com/nexenergy` | (Opcional) Link en el pie de página |
| `NEXT_PUBLIC_EMAIL` | `hola@nexenergy.com.ar` | (Opcional) Mail en el pie de página |

Después de cambiar una variable hay que hacer **Redeploy**.

## Dónde se cambian los textos

Todo está en `app/page.tsx`: beneficios, pasos, soluciones, equipos y preguntas frecuentes están en listas al principio del archivo.
