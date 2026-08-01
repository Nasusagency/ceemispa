import { getImagenes } from "@/lib/data";
import ImagenRow from "./ImagenRow";

const NOMBRES: Record<string, string> = {
  hero: "Portada (Inicio)",
  faciales: "Faciales",
  corporales: "Corporales",
  masajes: "Masajes",
  depilacion: "Depilación láser",
};

export default async function ImagenesPage() {
  const imagenes = await getImagenes();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-2xl font-bold text-ceemi-dark mb-1">
          Imágenes del sitio
        </h1>
        <p className="text-ceemi-brown/60 text-sm">
          Estas son las fotos principales de cada sección. Al cambiar una, se publica de inmediato.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {imagenes.map((img) => (
          <ImagenRow key={img.id} imagen={img} titulo={NOMBRES[img.seccion] ?? img.seccion} />
        ))}
      </div>
    </div>
  );
}
