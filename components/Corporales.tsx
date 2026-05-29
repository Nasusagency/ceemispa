const WA_BASE = "https://wa.me/523781122322?text=";

const treatments = [
  {
    name: "MOLDEO CORPORAL",
    desc: "Tratamiento enfocado en ayudar a moldear y definir zonas específicas del cuerpo.",
    price: "$550",
    msg: "Hola! Me interesa información sobre Moldeo Corporal en CEEMI Clínica Estética.",
    icon: <MoldeoIcon />,
  },
  {
    name: "REAFIRMANTE CORPORAL",
    desc: "Ayuda a mejorar la firmeza y elasticidad de la piel, mejorando su apariencia.",
    price: "$500",
    msg: "Hola! Me interesa información sobre Reafirmante Corporal en CEEMI Clínica Estética.",
    icon: <ReafirmanteIcon />,
  },
  {
    name: "PRESOTERAPIA",
    desc: "Drenaje corporal que ayuda a disminuir la retención de líquidos e inflamación.",
    price: "$300",
    msg: "Hola! Me interesa información sobre Presoterapia en CEEMI Clínica Estética.",
    icon: <PresoterapiaIcon />,
  },
  {
    name: "HIFU CORPORAL",
    desc: "Tratamiento avanzado que ayuda a tensar, reafirmar y redefinir zonas corporales sin cirugía.",
    price: "$2,500",
    msg: "Hola! Me interesa información sobre HIFU Corporal en CEEMI Clínica Estética.",
    icon: <HifuIcon />,
  },
];

const packages = [
  {
    name: "BODY RESET",
    combo: "Presoterapia + drenaje + reafirmante corporal.",
    sessions: "5 sesiones",
    price: "$2,499",
    desde: false,
    msg: "Hola! Me interesa el paquete Body Reset en CEEMI Clínica Estética.",
  },
  {
    name: "BODY SCULPT",
    combo: "Moldeo corporal + reafirmante + presoterapia.",
    sessions: "10 sesiones",
    price: "$5,999",
    desde: false,
    msg: "Hola! Me interesa el paquete Body Sculpt en CEEMI Clínica Estética.",
  },
  {
    name: "BODY CONTOUR",
    combo: "HIFU corporal + moldeo + drenaje corporal.",
    sessions: "Programa premium",
    price: "$12,900",
    desde: true,
    msg: "Hola! Me interesa el paquete Body Contour en CEEMI Clínica Estética.",
  },
];

export default function Corporales() {
  return (
    <>
      {/* ── TRATAMIENTOS CORPORALES ── */}
      <section id="corporales" className="py-20 md:py-28 px-5 bg-ceemi-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-3 font-sans">
              Cuerpo renovado, bienestar total
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ceemi-dark">
              CORPORALES
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-10 h-px bg-ceemi-beige/40" />
              <span className="text-ceemi-beige text-sm">+</span>
              <div className="w-10 h-px bg-ceemi-beige/40" />
            </div>
          </div>

          {/* 4 treatment cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {treatments.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-ceemi-cream flex items-center justify-center text-ceemi-beige mb-4">
                  {t.icon}
                </div>
                <h3 className="font-serif text-[15px] font-bold text-ceemi-dark mb-2 tracking-wide">
                  {t.name}
                </h3>
                <p className="text-ceemi-brown/65 text-xs leading-relaxed flex-1 mb-5">
                  {t.desc}
                </p>
                <div>
                  <p className="font-serif text-xl font-bold text-ceemi-dark">
                    desde {t.price}
                  </p>
                  <p className="text-[11px] text-ceemi-brown/40 font-sans">/sesión</p>
                  <p className="text-ceemi-brown/45 text-[10px] italic mt-0.5 mb-3">
                    *Precios personalizables según tu valoración
                  </p>
                  <a
                    href={WA_BASE + encodeURIComponent(t.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-ceemi-beige border border-ceemi-beige/50
                               rounded-full py-2 hover:bg-ceemi-beige hover:text-white
                               transition-all duration-200 tracking-widest uppercase"
                  >
                    Más información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAQUETES CORPORALES ── */}
      <section className="py-20 md:py-28 px-5 bg-ceemi-cream">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ceemi-dark tracking-wider">
              PAQUETES CORPORALES
            </h2>
          </div>

          {/* 3 package cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <span className="text-ceemi-beige text-[11px] tracking-widest uppercase font-sans mb-1">
                  {p.sessions}
                </span>
                <h3 className="font-serif text-xl font-bold text-ceemi-dark mb-3 tracking-wide">
                  {p.name}
                </h3>
                <p className="text-ceemi-brown/65 text-sm leading-relaxed flex-1 mb-6">
                  {p.combo}
                </p>
                <div>
                  <div className="flex items-baseline gap-1">
                    {p.desde && (
                      <span className="text-ceemi-brown/60 text-sm font-sans">desde</span>
                    )}
                    <p className="font-serif text-3xl font-bold text-ceemi-dark">
                      {p.price}
                    </p>
                  </div>
                  <p className="text-ceemi-brown/45 text-[10px] italic mt-0.5 mb-4">
                    *Precios personalizables según tu valoración
                  </p>
                  <a
                    href={WA_BASE + encodeURIComponent(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-ceemi-beige text-white rounded-full py-3
                               text-[11px] tracking-widest uppercase hover:bg-ceemi-brown
                               transition-colors duration-200"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MoldeoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function ReafirmanteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>
  );
}

function PresoterapiaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function HifuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}
