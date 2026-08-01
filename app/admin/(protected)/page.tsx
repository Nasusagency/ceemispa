import Link from "next/link";

const secciones = [
  {
    href: "/admin/servicios",
    titulo: "Servicios y precios",
    desc: "Edita nombres, descripciones, precios y activa o desactiva servicios.",
  },
  {
    href: "/admin/imagenes",
    titulo: "Imágenes",
    desc: "Cambia las fotos principales del sitio por sección.",
  },
  {
    href: "/admin/categorias",
    titulo: "Categorías",
    desc: "Crea nuevas categorías de servicios para el sitio.",
  },
];

export default function AdminHomePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-serif text-2xl font-bold text-ceemi-dark mb-2">
        ¿Qué quieres editar hoy?
      </h1>
      {secciones.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5"
        >
          <h2 className="font-serif text-lg font-bold text-ceemi-dark mb-1">
            {s.titulo}
          </h2>
          <p className="text-ceemi-brown/60 text-sm">{s.desc}</p>
        </Link>
      ))}
    </div>
  );
}
