import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Faciales from "@/components/Faciales";
import Corporales from "@/components/Corporales";
import Depilacion from "@/components/Depilacion";
import Masajes from "@/components/Masajes";
import CategoriaGenerica from "@/components/CategoriaGenerica";
import Footer from "@/components/Footer";
import { getCategorias, getServicios, getImagenes, esCategoriaGenerica } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [categorias, servicios, imagenes] = await Promise.all([
    getCategorias(),
    getServicios(),
    getImagenes(),
  ]);

  const imagenPorSeccion = new Map(imagenes.map((img) => [img.seccion, img.url]));
  const porCategoria = (slug: string) => servicios.filter((s) => s.categoria === slug);

  const faciales = porCategoria("faciales");
  const corporales = porCategoria("corporales");
  const masajes = porCategoria("masajes");
  const complementos = porCategoria("complementos");
  const depilacion = porCategoria("depilacion");

  const categoriasGenericas = categorias.filter((c) => esCategoriaGenerica(c.slug));

  return (
    <main>
      <Navbar />
      <Hero imagenUrl={imagenPorSeccion.get("hero")} />
      <Faciales
        tratamientos={faciales.filter((s) => s.tipo === "tratamiento")}
        programas={faciales.filter((s) => s.tipo === "programa")}
        bannerUrl={imagenPorSeccion.get("faciales")}
      />
      <Corporales
        tratamientos={corporales.filter((s) => s.tipo === "tratamiento")}
        paquetes={corporales.filter((s) => s.tipo === "programa")}
        bannerUrl={imagenPorSeccion.get("corporales")}
      />
      <Depilacion zonas={depilacion} bannerUrl={imagenPorSeccion.get("depilacion")} />
      <Masajes
        masajes={masajes}
        complementos={complementos}
        bannerUrl={imagenPorSeccion.get("masajes")}
      />
      {categoriasGenericas.map((categoria) => (
        <CategoriaGenerica
          key={categoria.id}
          categoria={categoria}
          servicios={servicios.filter((s) => s.categoria === categoria.slug)}
        />
      ))}
      <Footer />
    </main>
  );
}
