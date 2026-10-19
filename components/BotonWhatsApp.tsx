import { WhatsAppIcon } from './Icon'
import { linkWhatsApp } from '@/lib/config'

export default function BotonWhatsApp() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
