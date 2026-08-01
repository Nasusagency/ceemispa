import Image from "next/image";
import type { Servicio } from "@/lib/data";
import { formatoPrecio, waMensaje, waHref } from "@/lib/whatsapp";

type Props = {
  tratamientos: Servicio[];
  programas: Servicio[];
  bannerUrl?: string | null;
};

export default function Faciales({ tratamientos, programas, bannerUrl }: Props) {
  return (
    <>
      {/* ── TRATAMIENTOS FACIALES ── */}
      <section id="faciales" className="py-20 md:py-28 px-5 bg-ceemi-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-3 font-sans">
              Cuidado avanzado para una piel saludable y radiante
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ceemi-dark">
              FACIALES
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-10 h-px bg-ceemi-beige/40" />
              <span className="text-ceemi-beige text-sm">+</span>
              <div className="w-10 h-px bg-ceemi-beige/40" />
            </div>
          </div>

          {bannerUrl && (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-sm">
              <Image
                src={bannerUrl}
                alt="Faciales — CEEMI Clínica Estética"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          )}

          {/* Treatment cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
            {tratamientos.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {t.imagen_url && (
                  <div className="relative aspect-square">
                    <Image
                      src={t.imagen_url}
                      alt={t.nombre}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                )}
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-sm md:text-[15px] font-bold text-ceemi-dark mb-2 tracking-wide">
                    {t.nombre}
                  </h3>
                  <p className="text-ceemi-brown/65 text-xs leading-relaxed mb-4 flex-1">
                    {t.descripcion}
                  </p>
                  <div>
                    <p className="font-serif text-lg md:text-xl font-bold text-ceemi-dark">
                      {t.precio_desde ? "desde " : ""}
                      {formatoPrecio(t.precio)}
                    </p>
                    <p className="text-ceemi-brown/45 text-[10px] italic mt-0.5 mb-3">
                      *Precios personalizables según tu valoración
                    </p>
                    <a
                      href={waMensaje(t)}
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

          {/* "Ver todos" CTA */}
          <div className="text-center">
            <a
              href={waHref("Hola! Me gustaría conocer todos los tratamientos faciales disponibles en CEEMI Clínica Estética.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ceemi-beige text-xs tracking-widest uppercase
                         font-sans hover:text-ceemi-brown transition-colors"
            >
              Ver todos los faciales
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROGRAMAS FACIALES ── */}
      {programas.length > 0 && (
        <section className="py-20 md:py-28 px-5 bg-ceemi-cream">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-3 font-sans">
                Protocolos personalizados para transformar tu piel
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ceemi-dark tracking-wider">
                PROGRAMAS FACIALES
              </h2>
            </div>

            {/* Program cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {programas.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  {p.duracion && (
                    <span className="text-ceemi-beige text-[11px] tracking-widest uppercase font-sans mb-1">
                      {p.duracion}
                    </span>
                  )}
                  <h3 className="font-serif text-xl font-bold text-ceemi-dark mb-3 tracking-wide">
                    {p.nombre}
                  </h3>
                  <p className="text-ceemi-brown/65 text-sm leading-relaxed flex-1 mb-6">
                    {p.descripcion}
                  </p>
                  <div>
                    <p className="font-serif text-3xl font-bold text-ceemi-dark">
                      {p.precio_desde ? "desde " : ""}
                      {formatoPrecio(p.precio)}
                    </p>
                    <p className="text-ceemi-brown/45 text-[10px] italic mt-0.5 mb-4">
                      *Precios personalizables según tu valoración
                    </p>
                    <a
                      href={waMensaje(p)}
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
      )}
    </>
  );
}
