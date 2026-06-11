import Image from "next/image";

const WA_BASE = "https://wa.me/523781122322?text=";

const massages = [
  {
    img: "/images/Inmobiliario/sala-1.jpeg",
    name: "MASAJE RELAJANTE",
    duration: "90 min",
    price: "$1,200",
    msg: "Hola! Me interesa información sobre el Masaje Relajante en CEEMI Clínica Estética.",
  },
  {
    img: "/images/Inmobiliario/sala-2.jpeg",
    name: "MASAJE DESCONTRACTURANTE",
    duration: "60 min",
    price: "$800",
    msg: "Hola! Me interesa información sobre el Masaje Descontracturante en CEEMI Clínica Estética.",
  },
  {
    img: "/images/Inmobiliario/sala-3.jpeg",
    name: "MASAJE REDUCTIVO",
    duration: "60 min",
    price: "$900",
    msg: "Hola! Me interesa información sobre el Masaje Reductivo en CEEMI Clínica Estética.",
  },
  {
    img: "/images/Inmobiliario/sala-4.jpeg",
    name: "MASAJE DRENANTE",
    duration: "60 min",
    price: "$800",
    msg: "Hola! Me interesa información sobre el Masaje Drenante en CEEMI Clínica Estética.",
  },
];

const complements = [
  {
    img: "/images/Inmobiliario/detalle-1.jpeg",
    name: "DRENAJE LINFÁTICO",
    desc: "Favorece la eliminación de toxinas, reduce inflamación y mejora la circulación.",
    price: "$700",
    msg: "Hola! Me interesa información sobre Drenaje Linfático en CEEMI Clínica Estética.",
  },
  {
    img: "/images/Inmobiliario/detalle-2.jpeg",
    name: "ENVOLTURAS CORPORALES",
    desc: "Tratamientos complementarios que ayudan a desintoxicar, hidratar y reafirmar la piel.",
    price: "$800",
    msg: "Hola! Me interesa información sobre Envolturas Corporales en CEEMI Clínica Estética.",
  },
  {
    img: "/images/Inmobiliario/detalle-3.jpeg",
    name: "EXFOLIACIÓN CORPORAL",
    desc: "Renueva tu piel, elimina células muertas y mejora la absorción de activos.",
    price: "$500",
    msg: "Hola! Me interesa información sobre Exfoliación Corporal en CEEMI Clínica Estética.",
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
            {massages.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="relative aspect-square">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-sm md:text-[15px] font-bold text-ceemi-dark mb-1 tracking-wide">
                    {m.name}
                  </h3>
                  <p className="text-ceemi-brown/50 text-xs font-sans mb-4 flex-1">
                    {m.duration}
                  </p>
                  <div>
                    <p className="font-serif text-lg md:text-xl font-bold text-ceemi-dark">
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="relative aspect-video">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
