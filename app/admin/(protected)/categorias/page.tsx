import { getTodasCategorias } from "@/lib/data";
import CategoriaRow from "./CategoriaRow";
import NuevaCategoriaForm from "./NuevaCategoriaForm";

export default async function CategoriasPage() {
  const categorias = await getTodasCategorias();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-2xl font-bold text-ceemi-dark mb-1">
          Categorías
        </h1>
        <p className="text-ceemi-brown/60 text-sm">
          Crea una categoría nueva y luego ve a "Servicios" para agregarle tratamientos.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {categorias.map((categoria) => (
          <CategoriaRow key={categoria.id} categoria={categoria} />
        ))}
      </div>

      <div className="border-t border-ceemi-dark/10 pt-6">
        <h2 className="font-serif text-lg font-bold text-ceemi-dark mb-3">
          Nueva categoría
        </h2>
        <NuevaCategoriaForm />
      </div>
    </div>
  );
}
