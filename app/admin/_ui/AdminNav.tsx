"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Inicio", exact: true },
  { href: "/admin/servicios", label: "Servicios" },
  { href: "/admin/imagenes", label: "Imágenes" },
  { href: "/admin/categorias", label: "Categorías" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="max-w-4xl mx-auto px-5 flex gap-5 overflow-x-auto scrollbar-hide">
      {links.map(({ href, label, exact }) => {
        const activo = exact ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`whitespace-nowrap text-xs tracking-widest uppercase font-sans py-3 border-b-2 transition-colors ${
              activo
                ? "text-ceemi-dark border-ceemi-beige"
                : "text-ceemi-brown/50 border-transparent hover:text-ceemi-beige"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
