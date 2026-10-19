'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import Icon, { WhatsAppIcon } from './Icon'
import { linkWhatsApp } from '@/lib/config'

const NAV = [
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#equipos', label: 'Equipos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#preguntas', label: 'Preguntas' },
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const f = () => setScroll(window.scrollY > 24)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  const solido = scroll || abierto

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solido ? 'bg-navy-dark/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" aria-label="NexEnergy, inicio">
          <Logo claro />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={linkWhatsApp()} target="_blank" rel="noopener" className="btn-wa hidden px-5 py-2.5 sm:inline-flex">
            <WhatsAppIcon /> Consultanos
          </a>
          <button onClick={() => setAbierto(!abierto)} className="rounded-lg p-2 text-white lg:hidden" aria-label="Abrir menú">
            <Icon name={abierto ? 'x' : 'menu'} />
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="container-x border-t border-white/10 pb-5 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="block py-3 text-base font-medium text-slate-200">
              {n.label}
            </a>
          ))}
          <a href={linkWhatsApp()} target="_blank" rel="noopener" className="btn-wa mt-3 w-full">
            <WhatsAppIcon /> Consultanos por WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
