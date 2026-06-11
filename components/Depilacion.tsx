const WA_BASE = "https://wa.me/523781122322?text=";

const zones = [
  { name: "Axilas",                 single: "$500",    pack: "$2,200" },
  { name: "Rostro",                 single: "$500",    pack: "$2,200" },
  { name: "Cuello",                 single: "$500",    pack: "$2,200" },
  { name: "Bikini",                 single: "$500",    pack: "$2,200" },
  { name: "Bikini Brasileño",       single: "$800",    pack: "$3,600" },
  { name: "Pecho",                  single: "$800",    pack: "$3,600" },
  { name: "Espalda",                single: "$800",    pack: "$3,600" },
  { name: "Media Pierna",           single: "$800",    pack: "$3,800" },
  { name: "Medio Brazo",            single: "$600",    pack: "$3,800" },
  { name: "Brazo Completo",         single: "$600",    pack: "$3,800" },
  { name: "Piernas Completas",      single: "$1,200",  pack: "$5,000" },
  { name: "Cuerpo Completo Mujer",  single: "$2,800",  pack: "$12,800" },
  { name: "Cuerpo Completo Hombre", single: "$3,500",  pack: "$15,500" },
];

export default function Depilacion() {
  return (
    <section id="depilacion" className="py-20 md:py-28 px-5 bg-ceemi-white">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-3 font-sans">
            Piel suave, libre y saludable
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ceemi-dark">
            DEPILACIÓN LÁSER
          </h2>
          <p className="text-ceemi-brown/60 text-xs tracking-[0.3em] uppercase font-sans mt-2">
            Soprano Ice Platinum
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-ceemi-beige/40" />
            <span className="text-ceemi-beige text-sm">+</span>
            <div className="w-10 h-px bg-ceemi-beige/40" />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">

          {/* Table header */}
          <div className="grid grid-cols-3 bg-ceemi-dark text-white">
            <div className="py-4 px-5 font-serif text-sm font-semibold tracking-wider">
              ZONA
            </div>
            <div className="py-4 px-4 font-sans text-xs font-semibold tracking-widest uppercase text-center border-l border-white/10">
              1 Sesión
            </div>
            <div className="py-4 px-4 bg-ceemi-beige font-sans text-xs font-semibold tracking-widest uppercase text-center">
              Paquete 5 Sesiones
            </div>
          </div>

          {/* Rows */}
          {zones.map((z, i) => (
            <div
              key={z.name}
              className={`grid grid-cols-3 border-b border-ceemi-cream last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-ceemi-white/60"
              }`}
            >
              <div className="py-3.5 px-5 text-ceemi-dark text-sm font-sans">
                {z.name}
              </div>
              <div className="py-3.5 px-4 text-ceemi-dark text-sm font-serif font-semibold text-center border-l border-ceemi-cream">
                {z.single}
              </div>
              <div className="py-3.5 px-4 text-ceemi-dark text-sm font-serif font-bold text-center bg-ceemi-beige/8">
                {z.pack}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-ceemi-brown/45 text-[11px] italic text-center mb-8">
          *Precios personalizables según tu valoración
        </p>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WA_BASE + encodeURIComponent("Hola! Me interesa información sobre depilación láser Soprano Ice Platinum en CEEMI Clínica Estética.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-ceemi-beige text-white
                       px-10 py-4 rounded-full text-sm tracking-wider
                       hover:bg-ceemi-brown transition-all duration-300 shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar zona y precio
          </a>
        </div>
      </div>
    </section>
  );
}
