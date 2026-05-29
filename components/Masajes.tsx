const WA_BASE = "https://wa.me/523781122322?text=";

const massages = [
  {
    name: "MASAJE RELAJANTE",
    duration: "90 min",
    price: "$1,200",
    msg: "Hola! Me interesa información sobre el Masaje Relajante en CEEMI Clínica Estética.",
    icon: <RelaxIcon />,
  },
  {
    name: "MASAJE DESCONTRACTURANTE",
    duration: "60 min",
    price: "$800",
    msg: "Hola! Me interesa información sobre el Masaje Descontracturante en CEEMI Clínica Estética.",
    icon: <DesconIcon />,
  },
  {
    name: "MASAJE REDUCTIVO",
    duration: "60 min",
    price: "$900",
    msg: "Hola! Me interesa información sobre el Masaje Reductivo en CEEMI Clínica Estética.",
    icon: <ReductIcon />,
  },
  {
    name: "MASAJE DRENANTE",
    duration: "60 min",
    price: "$800",
    msg: "Hola! Me interesa información sobre el Masaje Drenante en CEEMI Clínica Estética.",
    icon: <DrenIcon />,
  },
];

const complements = [
  {
    name: "DRENAJE LINFÁTICO",
    desc: "Favorece la eliminación de toxinas, reduce inflamación y mejora la circulación.",
    price: "$700",
    msg: "Hola! Me interesa información sobre Drenaje Linfático en CEEMI Clínica Estética.",
    icon: <DrenajeIcon />,
  },
  {
    name: "ENVOLTURAS CORPORALES",
    desc: "Tratamientos complementarios que ayudan a desintoxicar, hidratar y reafirmar la piel.",
    price: "$800",
    msg: "Hola! Me interesa información sobre Envolturas Corporales en CEEMI Clínica Estética.",
    icon: <EnvolturaIcon />,
  },
  {
    name: "EXFOLIACIÓN CORPORAL",
    desc: "Renueva tu piel, elimina células muertas y mejora la absorción de activos.",
    price: "$500",
    msg: "Hola! Me interesa información sobre Exfoliación Corporal en CEEMI Clínica Estética.",
    icon: <ExfoliacionIcon />,
  },
];

export default function Masajes() {
  return (
    <>
      {/* ── MASAJES CORPORALES ── */}
      <section id="masajes" className="py-20 md:py-28 px-5 bg-ceemi-cream">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-3 font-sans">
              Relajación que se siente
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ceemi-dark">
              MASAJES
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-10 h-px bg-ceemi-beige/40" />
              <span className="text-ceemi-beige text-sm">+</span>
              <div className="w-10 h-px bg-ceemi-beige/40" />
            </div>
          </div>

          {/* 4 massage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {massages.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-ceemi-cream flex items-center justify-center text-ceemi-beige mb-4">
                  {m.icon}
                </div>
                <h3 className="font-serif text-sm font-bold text-ceemi-dark mb-1 tracking-wide">
                  {m.name}
                </h3>
                <p className="text-ceemi-brown/50 text-xs font-sans mb-4 flex-1">
                  {m.duration}
                </p>
                <div>
                  <p className="font-serif text-2xl font-bold text-ceemi-dark">
                    {m.price}
                  </p>
                  <p className="text-ceemi-brown/45 text-[10px] italic mt-0.5 mb-3">
                    *Precios personalizables según tu valoración
                  </p>
                  <a
                    href={WA_BASE + encodeURIComponent(m.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-ceemi-beige border border-ceemi-beige/50
                               rounded-full py-2 hover:bg-ceemi-beige hover:text-white
                               transition-all duration-200 tracking-widest uppercase"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLEMENTA TU BIENESTAR ── */}
      <section className="py-20 md:py-28 px-5 bg-ceemi-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ceemi-dark tracking-wider">
              COMPLEMENTA TU BIENESTAR
            </h2>
          </div>

          {/* 3 complement cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {complements.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-ceemi-cream flex items-center justify-center text-ceemi-beige mb-4">
                  {c.icon}
                </div>
                <h3 className="font-serif text-base font-bold text-ceemi-dark mb-3 tracking-wide">
                  {c.name}
                </h3>
                <p className="text-ceemi-brown/65 text-sm leading-relaxed flex-1 mb-5">
                  {c.desc}
                </p>
                <div>
                  <p className="font-serif text-2xl font-bold text-ceemi-dark">
                    desde {c.price}
                  </p>
                  <p className="text-ceemi-brown/45 text-[10px] italic mt-0.5 mb-4">
                    *Precios personalizables según tu valoración
                  </p>
                  <a
                    href={WA_BASE + encodeURIComponent(c.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-ceemi-beige text-white rounded-full py-3
                               text-[11px] tracking-widest uppercase hover:bg-ceemi-brown
                               transition-colors duration-200"
                  >
                    Más información
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

function RelaxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function DesconIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
  );
}

function ReductIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  );
}

function DrenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function DrenajeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

function EnvolturaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  );
}

function ExfoliacionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  );
}
