import Image from "next/image";
import type { Categoria, Servicio } from "@/lib/data";
import { formatoPrecio, waMensaje } from "@/lib/whatsapp";

type Props = {
  categoria: Categoria;
  servicios: Servicio[];
};

export default function CategoriaGenerica({ categoria, servicios }: Props) {
  if (servicios.length === 0) return null;

  return (
    <section
      id={categoria.slug}
      className="py-20 md:py-28 px-5 bg-ceemi-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          {categoria.descripcion && (
            <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-3 font-sans">
              {categoria.descripcion}
            </p>
          )}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ceemi-dark">
            {categoria.nombre.toUpperCase()}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-ceemi-beige/40" />
            <span className="text-ceemi-beige text-sm">+</span>
            <div className="w-10 h-px bg-ceemi-beige/40" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {servicios.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {s.imagen_url && (
                <div className="relative aspect-square">
                  <Image
                    src={s.imagen_url}
                    alt={s.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              )}
              <div className="p-4 md:p-5 flex flex-col flex-1">
                <h3 className="font-serif text-sm md:text-[15px] font-bold text-ceemi-dark mb-2 tracking-wide">
                  {s.nombre}
                </h3>
                {s.descripcion && (
                  <p className="text-ceemi-brown/65 text-xs leading-relaxed mb-4 flex-1">
                    {s.descripcion}
                  </p>
                )}
                <div>
                  <p className="font-serif text-lg md:text-xl font-bold text-ceemi-dark">
                    {s.precio_desde ? "desde " : ""}
                    {formatoPrecio(s.precio)}
                  </p>
                  <p className="text-ceemi-brown/45 text-[10px] italic mt-0.5 mb-3">
                    *Precios personalizables según tu valoración
                  </p>
                  <a
                    href={waMensaje(s)}
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
  );
}
