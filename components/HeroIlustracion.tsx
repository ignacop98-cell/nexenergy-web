// Ilustración: casa iluminada durante un corte, con paneles, inversor y baterías
export default function HeroIlustracion() {
  return (
    <svg viewBox="0 0 480 400" className="h-auto w-full" role="img" aria-label="Casa con paneles solares, inversor y baterías funcionando durante un corte de luz">
      <defs>
        <linearGradient id="hz" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f766e" stopOpacity=".35" />
          <stop offset="1" stopColor="#0f172a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="win" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="pan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#0c4a6e" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* halo */}
      <circle cx="240" cy="210" r="180" fill="url(#hz)" />

      {/* poste de luz cortado */}
      <g opacity=".55">
        <rect x="34" y="120" width="6" height="230" rx="2" fill="#475569" />
        <rect x="14" y="128" width="46" height="5" rx="2" fill="#475569" />
        <path d="M60 131 Q 110 160 150 175" stroke="#475569" strokeWidth="2" fill="none" strokeDasharray="4 6" />
        <path d="M70 150 l10 -12 m0 12 l-10 -12" stroke="#f87171" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* suelo */}
      <rect x="20" y="348" width="440" height="4" rx="2" fill="#334155" />

      {/* casa */}
      <path d="M150 190 L270 110 L390 190 Z" fill="#334155" />
      {/* paneles en el techo */}
      <g transform="translate(222 128) skewX(-34)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 34} 0)`}>
            <rect width="30" height="44" rx="2" fill="url(#pan)" stroke="#38bdf8" strokeOpacity=".5" />
            <path d="M0 15h30M0 29h30M15 0v44" stroke="#38bdf8" strokeOpacity=".35" />
          </g>
        ))}
      </g>
      <rect x="166" y="190" width="208" height="158" fill="#1e293b" />
      {/* ventanas encendidas */}
      <g filter="url(#glow)">
        <rect x="186" y="214" width="46" height="40" rx="3" fill="url(#win)" />
        <rect x="308" y="214" width="46" height="40" rx="3" fill="url(#win)" />
      </g>
      <path d="M209 214v40M186 234h46M331 214v40M308 234h46" stroke="#92400e" strokeOpacity=".35" />
      {/* puerta */}
      <rect x="250" y="276" width="40" height="72" rx="3" fill="#0f172a" />
      <circle cx="282" cy="314" r="2.5" fill="#14b8a6" />

      {/* equipo de respaldo en la pared lateral */}
      <g transform="translate(398 238)">
        {/* inversor */}
        <rect width="44" height="54" rx="6" fill="#f8fafc" />
        <rect x="0" y="0" width="7" height="54" rx="3" fill="#0d9488" />
        <rect x="14" y="10" width="22" height="12" rx="2" fill="#0f172a" />
        <circle cx="25" cy="38" r="3" fill="#22c55e" filter="url(#glow)" />
        {/* batería */}
        <rect x="0" y="62" width="44" height="48" rx="6" fill="#e2e8f0" />
        <rect x="10" y="74" width="24" height="7" rx="2" fill="#0f172a" />
        <g fill="#14b8a6">
          <rect x="11" y="75" width="5" height="5" rx="1" />
          <rect x="17" y="75" width="5" height="5" rx="1" />
          <rect x="23" y="75" width="5" height="5" rx="1" />
        </g>
      </g>
      {/* flujo de energía hacia la casa */}
      <path d="M398 265 C 380 265 380 234 354 234" stroke="#2dd4bf" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 9" filter="url(#glow)">
        <animate attributeName="stroke-dashoffset" from="22" to="0" dur="1.2s" repeatCount="indefinite" />
      </path>
      <path d="M300 150 C 360 160 400 190 420 238" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="2 9" opacity=".8">
        <animate attributeName="stroke-dashoffset" from="22" to="0" dur="1.6s" repeatCount="indefinite" />
      </path>

      {/* etiqueta */}
      <g transform="translate(300 52)">
        <rect width="150" height="40" rx="20" fill="#0f172a" stroke="#14b8a6" strokeOpacity=".6" />
        <circle cx="22" cy="20" r="6" fill="#22c55e" />
        <text x="36" y="25" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">
          Respaldo activo
        </text>
      </g>
    </svg>
  )
}
