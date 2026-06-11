import Image from "next/image";

const WA_BASE = "https://wa.me/523781122322?text=";

const treatments: { img?: string; name: string; desc: string; price: string; msg: string }[] = [
  {
    img: "/images/Cuerpo/corporales.jpeg",
    name: "MOLDEO CORPORAL",
    desc: "Tratamiento enfocado en ayudar a moldear y definir zonas específicas del cuerpo.",
    price: "$550",
    msg: "Hola! Me interesa información sobre Moldeo Corporal en CEEMI Clínica Estética.",
  },
  {
    img: "/images/Cuerpo/hombro-glow.jpeg",
    name: "REAFIRMANTE CORPORAL",
    desc: "Ayuda a mejorar la firmeza y elasticidad de la piel, mejorando su apariencia.",
    price: "$500",
    msg: "Hola! Me interesa información sobre Reafirmante Corporal en CEEMI Clínica Estética.",
  },
  {
    name: "PRESOTERAPIA",
    desc: "Drenaje corporal que ayuda a disminuir la retención de líquidos e inflamación.",
    price: "$300",
    msg: "Hola! Me interesa información sobre Presoterapia en CEEMI Clínica Estética.",
  },
  {
    name: "HIFU CORPORAL",
    desc: "Tratamiento avanzado que ayuda a tensar, reafirmar y redefinir zonas corporales sin cirugía.",
    price: "$2,500",
    msg: "Hola! Me interesa información sobre HIFU Corporal en CEEMI Clínica Estética.",
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
            {treatments.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {t.img && (
                  <div className="relative aspect-square">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                )}
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-sm md:text-[15px] font-bold text-ceemi-dark mb-2 tracking-wide">
                    {t.name}
                  </h3>
                  <p className="text-ceemi-brown/65 text-xs leading-relaxed mb-4 flex-1">
                    {t.desc}
                  </p>
                  <div>
                    <p className="font-serif text-lg md:text-xl font-bold text-ceemi-dark">
                      desde {t.price}
                    </p>
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
