import Header from '@/components/Header'
import HeroIlustracion from '@/components/HeroIlustracion'
import BotonWhatsApp from '@/components/BotonWhatsApp'
import Logo from '@/components/Logo'
import Icon, { WhatsAppIcon } from '@/components/Icon'
import { EMAIL, INSTAGRAM, PROVINCIAS, WHATSAPP, linkWhatsApp } from '@/lib/config'

const BENEFICIOS = [
  { icon: 'bolt', titulo: 'Energía sin cortes', texto: 'Cuando se corta la luz, el equipo pasa a batería al instante y tu casa o negocio sigue funcionando.' },
  { icon: 'shield', titulo: 'Protección de tus equipos', texto: 'Te protege de las variaciones de tensión de la red que dañan electrodomésticos y equipos sensibles.' },
  { icon: 'volume', titulo: 'Sin ruido ni gases', texto: 'Una alternativa al grupo electrógeno: no hace ruido, no usa combustible y no necesita mantenimiento.' },
  { icon: 'sun', titulo: 'Listo para paneles solares', texto: 'Funciona con paneles solares para cargar las baterías con el sol y bajar tu factura de luz.' },
]

const PASOS = [
  { n: '01', icon: 'chat', titulo: 'Nos contás qué necesitás', texto: 'Nos escribís por WhatsApp y coordinamos una visita. ¿Respaldo ante cortes? ¿Bajar la factura? ¿Funcionar las 24 horas?' },
  { n: '02', icon: 'gauge', titulo: 'Relevamos tu consumo real', texto: 'Un técnico va al lugar, mide la instalación, analiza tu factura y releva tus consumos con nuestra app. Lleva de 1 a 2 horas y media.' },
  { n: '03', icon: 'clipboard', titulo: 'Te proponemos el equipo justo', texto: 'Con esos datos calculamos el inversor y las baterías que cubren las horas que necesitás. Ni de más, ni de menos.' },
  { n: '04', icon: 'tools', titulo: 'Instalamos y te acompañamos', texto: 'Instalamos, programamos según tu uso y lo vinculamos con la app para que lo controles desde el celular.' },
]

const SOLUCIONES = [
  { icon: 'home', titulo: 'Hogares', texto: 'Heladera, luces, bomba de agua, internet y calefacción funcionando aunque se corte la luz.' },
  { icon: 'store', titulo: 'Comercios', texto: 'Que un corte no te frene la caja, la cámara de frío ni la atención al público.' },
  { icon: 'heart', titulo: 'Salud', texto: 'Consultorios y centros de salud con respaldo para los equipos que no pueden apagarse.' },
  { icon: 'building', titulo: 'Edificios y consorcios', texto: 'Respaldo para bombas, ascensores y espacios comunes, donde muchas veces no se puede instalar un grupo a combustible.' },
  { icon: 'tractor', titulo: 'Campo y zonas rurales', texto: 'Para lugares con cortes frecuentes o con la red lejos. Con paneles solares, más autonomía.' },
  { icon: 'factory', titulo: 'Empresas e industria', texto: 'Equipos trifásicos de hasta 15 kW con baterías de alta tensión, ampliables según la demanda.' },
]

const PREGUNTAS = [
  {
    p: '¿Cuántas horas me dura el equipo?',
    r: 'Depende de tu consumo. Con tu factura de luz calculamos cuánta energía usás en promedio por hora y con eso te decimos las horas. Por ejemplo, una casa que consume unos 13 kWh por día, con un equipo de 6 kW y una batería de 6,14 kWh, tiene unas 9 horas de respaldo sin desconectar nada. Si apagás equipos que no necesitás, dura más.',
  },
  {
    p: '¿Necesito un equipo monofásico o trifásico?',
    r: 'Tiene que coincidir con tu instalación eléctrica. La mayoría de las casas son monofásicas; muchos comercios, edificios e industrias son trifásicos. Lo verificamos en el relevamiento.',
  },
  { p: '¿Hace ruido o necesita mantenimiento?', r: 'No. A diferencia de un grupo electrógeno, no tiene motor ni usa combustible: no hace ruido, no larga gases y no necesita mantenimiento.' },
  { p: '¿Puedo sumar paneles solares o más baterías después?', r: 'Sí. Los equipos trabajan con paneles solares y se les pueden agregar baterías más adelante para tener más horas de respaldo.' },
  { p: '¿Qué garantía tiene?', r: '24 meses o 2.000 ciclos de carga desde la instalación, lo que ocurra primero.' },
  { p: '¿Cuánto tarda la instalación?', r: 'Entre 1 hora y media y 4 horas, según el equipo. Incluye la conexión eléctrica, la programación según tu uso y la vinculación con la app.' },
  { p: '¿Cuánto cuesta?', r: 'Depende de lo que necesites cubrir y de cuántas horas. Por eso primero relevamos tu consumo real y después te pasamos un presupuesto con el equipo justo. Escribinos y lo coordinamos.' },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* INICIO */}
        <section id="inicio" className="relative overflow-hidden bg-navy-dark pt-28 text-white md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.22),transparent_55%)]" />
          <div className="container-x relative grid items-center gap-10 pb-16 md:grid-cols-2 md:pb-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" /> Baterías de respaldo · Inversores híbridos
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
                Del consumo real <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">al equipo justo.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Energía de respaldo para tu casa o negocio, sin ruido ni combustible. Medimos lo que realmente consumís y te proponemos el equipo que lo cubre.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={linkWhatsApp('Hola NexEnergy! Quiero coordinar un relevamiento.')} target="_blank" rel="noopener" className="btn-wa">
                  <WhatsAppIcon /> Pedí tu relevamiento
                </a>
                <a href="#como-trabajamos" className="btn-ghost">
                  Cómo trabajamos
                </a>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t border-white/10 pt-6 text-xs sm:gap-4 sm:text-sm">
                <div>
                  <p className="whitespace-nowrap text-xl font-extrabold text-white sm:text-2xl">4–15 kW</p>
                  <p className="text-slate-400">Mono y trifásicos</p>
                </div>
                <div>
                  <p className="whitespace-nowrap text-xl font-extrabold text-white sm:text-2xl">24 meses</p>
                  <p className="text-slate-400">De garantía</p>
                </div>
                <div>
                  <p className="whitespace-nowrap text-xl font-extrabold text-white sm:text-2xl">0</p>
                  <p className="text-slate-400">Ruido y combustible</p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <HeroIlustracion />
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="py-20 md:py-28">
          <div className="container-x">
            <p className="eyebrow">¿Qué es una batería de respaldo?</p>
            <h2 className="h2">Un inversor inteligente + baterías de litio.</h2>
            <p className="lead">
              El inversor toma la energía de la red (o de tus paneles) y la guarda en las baterías. Cuando se corta la luz, tu instalación sigue funcionando con esa energía, sin que te des cuenta.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFICIOS.map((b) => (
                <div key={b.titulo} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon name={b.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{b.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section id="como-trabajamos" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <p className="eyebrow">Cómo trabajamos</p>
              <h2 className="h2">No vendemos un catálogo. Calculamos tu solución.</h2>
              <p className="lead">
                Cada lugar consume distinto. Por eso antes de recomendarte un equipo vamos, medimos y calculamos. Así no pagás de más ni te quedás corto.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {PASOS.map((p) => (
                <div key={p.n} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <span className="absolute right-5 top-4 text-4xl font-extrabold text-slate-100">{p.n}</span>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-teal-300">
                    <Icon name={p.icon} />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-navy">{p.titulo}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{p.texto}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-navy p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="text-lg font-bold">Relevamos con nuestra propia app</p>
                <p className="mt-1 max-w-2xl text-sm text-slate-300">
                  El técnico carga en el lugar las mediciones, tus consumos, la factura y fotos de la instalación. Todo queda registrado y el cálculo se hace con datos reales.
                </p>
              </div>
              <a href={linkWhatsApp('Hola NexEnergy! Quiero coordinar un relevamiento.')} target="_blank" rel="noopener" className="btn-wa shrink-0">
                <WhatsAppIcon /> Coordinar visita
              </a>
            </div>
          </div>
        </section>

        {/* SOLUCIONES */}
        <section id="soluciones" className="scroll-mt-20 py-20 md:py-28">
          <div className="container-x">
            <p className="eyebrow">Soluciones</p>
            <h2 className="h2">Para cada lugar, el respaldo que necesita.</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SOLUCIONES.map((s) => (
                <div key={s.titulo} className="flex gap-4 rounded-2xl border border-slate-200 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{s.titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPOS */}
        <section id="equipos" className="scroll-mt-20 bg-navy-dark py-20 text-white md:py-28">
          <div className="container-x">
            <p className="eyebrow text-teal-300">Equipos</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Inversores híbridos y baterías de litio.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Trabajamos con equipos EasyCharge. Un inversor más una o varias baterías: la combinación se arma según tu consumo y las horas que necesitás.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Equipo
                etiqueta="Monofásicos"
                titulo="Para casas y comercios"
                inversores={['4 kW', '6 kW']}
                baterias={['51,2 V · 90 Ah (4,6 kWh)', '51,2 V · 120 Ah (6,1 kWh)']}
                extra="Instalación de pared o apilable."
              />
              <Equipo
                etiqueta="Trifásicos"
                titulo="Para empresas, edificios e industria"
                inversores={['8 kW', '12 kW', '15 kW']}
                baterias={['192 V · 60 Ah (11,5 kWh)', '192 V · 100 Ah (19,2 kWh)', '192 V · 150 Ah (28,8 kWh)']}
                extra="Baterías apilables, ampliables según la demanda."
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Mini icon="sun" titulo="Paneles solares" texto="Cargan las baterías con el sol y te ayudan a ahorrar en la factura." />
              <Mini icon="phone" titulo="Control desde la app" texto="Mirás el consumo, la carga de las baterías y lo que generan los paneles desde el celular." />
              <Mini icon="shield" titulo="Garantía" texto="24 meses o 2.000 ciclos desde la instalación, lo que ocurra primero." />
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="scroll-mt-20 py-20 md:py-28">
          <div className="container-x grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Nosotros</p>
              <h2 className="h2">Asesoramiento de verdad, antes y después de la venta.</h2>
              <p className="lead">
                Somos NexEnergy, un equipo que nació para que tener energía de respaldo sea simple. No te vendemos un equipo y desaparecemos: relevamos, calculamos, instalamos y te seguimos acompañando.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Relevamiento técnico en tu casa o negocio antes de presupuestar.',
                  'Cálculo con tu consumo real, no con estimaciones genéricas.',
                  'Instalación, programación y puesta en marcha.',
                  'Seguimiento y soporte después de la instalación.',
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {/* Lugar para una foto del equipo o de una instalación */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-cyan-800 p-8 text-white">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
              <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10" />
              <div className="relative flex h-full flex-col justify-between">
                <Icon name="pin" className="h-8 w-8" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-teal-100">Dónde estamos</p>
                  <p className="mt-2 text-2xl font-extrabold leading-snug">{PROVINCIAS.join(' · ')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREGUNTAS */}
        <section id="preguntas" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
          <div className="container-x max-w-3xl">
            <p className="eyebrow text-center">Preguntas frecuentes</p>
            <h2 className="h2 text-center">Lo que más nos preguntan.</h2>
            <div className="mt-10 space-y-3">
              {PREGUNTAS.map((q) => (
                <details key={q.p} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 open:ring-brand/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                    {q.p}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{q.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-20 py-20 md:py-28">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl bg-navy-dark px-6 py-14 text-center text-white md:px-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(20,184,166,0.3),transparent_60%)]" />
              <div className="relative">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">¿Coordinamos tu relevamiento?</h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-300">
                  Escribinos por WhatsApp, contanos qué necesitás cubrir y coordinamos la visita.
                </p>
                <a href={linkWhatsApp('Hola NexEnergy! Quiero coordinar un relevamiento.')} target="_blank" rel="noopener" className="btn-wa mt-8 px-8 py-4 text-base">
                  <WhatsAppIcon className="h-6 w-6" /> Escribinos por WhatsApp
                </a>
                {!WHATSAPP && <p className="mt-4 text-xs text-amber-300">Falta configurar el número de WhatsApp (variable NEXT_PUBLIC_WHATSAPP).</p>}
                <p className="mt-6 text-sm text-slate-400">Atendemos en {PROVINCIAS.slice(0, -1).join(', ')} y {PROVINCIAS[PROVINCIAS.length - 1]}.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10">
        <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <Logo />
          <p>Del consumo real al equipo justo.</p>
          <div className="flex items-center gap-4">
            {INSTAGRAM && (
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-brand">
                Instagram
              </a>
            )}
            {EMAIL && (
              <a href={`mailto:${EMAIL}`} className="hover:text-brand">
                {EMAIL}
              </a>
            )}
            <span>© {new Date().getFullYear()} NexEnergy</span>
          </div>
        </div>
      </footer>

      <BotonWhatsApp />
    </>
  )
}

function Equipo({ etiqueta, titulo, inversores, baterias, extra }: { etiqueta: string; titulo: string; inversores: string[]; baterias: string[]; extra: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
      <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider">{etiqueta}</span>
      <h3 className="mt-4 text-2xl font-bold">{titulo}</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-teal-300">
            <Icon name="bolt" className="h-4 w-4" /> Inversor
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {inversores.map((i) => (
              <span key={i} className="rounded-xl bg-white/10 px-3 py-2 text-lg font-extrabold">
                {i}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-teal-300">
            <Icon name="battery" className="h-4 w-4" /> Baterías de litio
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
            {baterias.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-400">{extra}</p>
    </div>
  )
}

function Mini({ icon, titulo, texto }: { icon: string; titulo: string; texto: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <Icon name={icon} className="h-6 w-6 text-teal-300" />
      <h3 className="mt-3 font-bold">{titulo}</h3>
      <p className="mt-1 text-sm text-slate-400">{texto}</p>
    </div>
  )
}
