import { getTodosServicios, getTodasCategorias } from "@/lib/data";
import ServicioRow from "./ServicioRow";
import NuevoServicioForm from "./NuevoServicioForm";

export default async function ServiciosPage() {
  const [servicios, categorias] = await Promise.all([
    getTodosServicios(),
    getTodasCategorias(),
  ]);

  const categoriasActivas = categorias.filter((c) => c.activo);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-2xl font-bold text-ceemi-dark mb-1">
          Servicios y precios
        </h1>
        <p className="text-ceemi-brown/60 text-sm">
          Toca "Editar" en cualquier servicio para cambiar su nombre, descripción o precio.
        </p>
      </div>

      {categoriasActivas.map((categoria) => {
        const items = servicios.filter((s) => s.categoria === categoria.slug);
        if (items.length === 0) return null;

        return (
          <div key={categoria.id}>
            <h2 className="text-xs tracking-[0.3em] uppercase text-ceemi-beige font-sans mb-3">
              {categoria.nombre}
            </h2>
            <div className="flex flex-col gap-3">
              {items.map((servicio) => (
                <ServicioRow key={servicio.id} servicio={servicio} />
              ))}
            </div>
          </div>
        );
      })}

      <div className="border-t border-ceemi-dark/10 pt-6">
        <h2 className="font-serif text-lg font-bold text-ceemi-dark mb-3">
          Agregar nuevo servicio
        </h2>
        <NuevoServicioForm categorias={categoriasActivas} />
      </div>
    </div>
  );
}
