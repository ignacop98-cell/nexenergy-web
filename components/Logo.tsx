export default function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden>
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#14b8a6" />
            <stop offset="1" stopColor="#0e7490" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="32" fill="url(#lg)" />
        <path d="M21 45V19h4.6l13 17.6V19H43v26h-4.5L25.4 27.4V45z" fill="#fff" />
      </svg>
      <span className={`text-xl font-extrabold tracking-tight ${claro ? 'text-white' : 'text-navy'}`}>
        Nex<span className="text-brand">Energy</span>
      </span>
    </span>
  )
}
