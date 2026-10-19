// Datos de contacto. El número de WhatsApp se carga en Vercel como variable
// NEXT_PUBLIC_WHATSAPP (solo números, con código de país: 549 + característica + número).
// Ejemplo: 5493511234567
export const WHATSAPP = (process.env.NEXT_PUBLIC_WHATSAPP || '').replace(/\D/g, '')

export const MENSAJE_WHATSAPP = 'Hola NexEnergy! Quiero consultar por un equipo de respaldo de energía.'

export function linkWhatsApp(mensaje: string = MENSAJE_WHATSAPP) {
  return WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}` : '#contacto'
}

export const INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM || '' // ej: https://instagram.com/nexenergy
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || ''

export const PROVINCIAS = ['Buenos Aires', 'Córdoba', 'Jujuy', 'Salta', 'Tucumán']
