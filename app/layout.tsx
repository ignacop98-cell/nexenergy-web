import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/plus-jakarta-sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexEnergy · Del consumo real al equipo justo',
  description:
    'Equipos de respaldo de energía con inversores híbridos y baterías de litio. Relevamos tu consumo real en el lugar, te proponemos el equipo justo, lo instalamos y te acompañamos después.',
  openGraph: {
    title: 'NexEnergy · Del consumo real al equipo justo',
    description: 'Respaldo de energía sin ruido ni combustible, dimensionado según tu consumo real.',
    locale: 'es_AR',
    type: 'website',
  },
}

export const viewport: Viewport = { themeColor: '#0f172a' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white font-sans text-slate-800 antialiased">{children}</body>
    </html>
  )
}
