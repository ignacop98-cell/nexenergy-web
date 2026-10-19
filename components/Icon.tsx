// Íconos simples en línea (sin librerías externas)
const PATHS: Record<string, string> = {
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8z',
  shield: 'M12 3 5 6v6c0 4.4 3 8.3 7 9 4-.7 7-4.6 7-9V6l-7-3z',
  leaf: 'M5 19c8 0 14-6 14-14-8 0-14 6-14 14zm0 0 7-7',
  sun: 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v2m0 18v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  phone: 'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm4 17h2',
  chat: 'M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z',
  clipboard: 'M9 4h6v3H9zM7 5H5v16h14V5h-2M8 12h8M8 16h5',
  gauge: 'M12 14l4-4M3 14a9 9 0 1 1 18 0M5.6 18h12.8',
  tools: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-.6-.6-2.1 2.2-2.8z',
  home: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  store: 'M4 9l1.5-5h13L20 9M4 9h16M4 9v11h16V9M9 20v-6h6v6',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10zM8 12h2l1-2 2 4 1-2h2',
  building: 'M5 21V4h10v17M15 9h4v12M8 7h2m-2 4h2m-2 4h2m-2 4h2',
  tractor: 'M3 15V9h7l2 4h6a2 2 0 0 1 2 2v1M7 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 9V6h4',
  factory: 'M3 21V10l6 4V10l6 4V6h6v15zM7 18h2m4 0h2',
  check: 'M5 12l5 5 9-10',
  pin: 'M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  battery: 'M3 8h15v8H3zM18 11h3v2h-3M6 11v2m3-2v2m3-2v2',
  plug: 'M9 2v5m6-5v5M7 7h10v4a5 5 0 0 1-10 0V7zm5 9v6',
  volume: 'M4 9v6h4l5 4V5L8 9zm13-1 4 8m0-8-4 8',
  wrench: 'M12 6l6 6M4 20l8-8',
  menu: 'M4 6h16M4 12h16M4 18h16',
  x: 'M6 6l12 12M18 6 6 18',
}

export default function Icon({ name, className = 'h-6 w-6' }: { name: keyof typeof PATHS | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={PATHS[name] ?? PATHS.bolt} />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.5 1.5.6 2.1.7 2.8.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3z" />
    </svg>
  )
}
