import type { Servicio } from "@/lib/data";

export const WA_BASE = "https://wa.me/523781122322?text=";

export function waMensaje(servicio: Pick<Servicio, "nombre" | "tipo">) {
  const texto =
    servicio.tipo === "programa"
      ? `Hola! Me interesa el programa ${servicio.nombre} en CEEMI Clínica Estética.`
      : `Hola! Me interesa información sobre ${servicio.nombre} en CEEMI Clínica Estética.`;
  return WA_BASE + encodeURIComponent(texto);
}

export function waHref(mensaje: string) {
  return WA_BASE + encodeURIComponent(mensaje);
}

export function formatoPrecio(precio: number) {
  return `$${precio.toLocaleString("es-MX", { maximumFractionDigits: 0 })}`;
}
