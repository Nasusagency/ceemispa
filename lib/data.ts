import { createClient } from "@/lib/supabase/server";

export type Categoria = {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string | null;
  activo: boolean;
  orden: number;
};

export type Servicio = {
  id: string;
  categoria: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  precio_desde: boolean;
  precio_paquete: number | null;
  duracion: string | null;
  tipo: "tratamiento" | "programa";
  activo: boolean;
  imagen_url: string | null;
  orden: number;
};

export type Imagen = {
  id: string;
  seccion: string;
  url: string;
  updated_at: string;
};

const CATEGORIAS_CONOCIDAS = [
  "faciales",
  "corporales",
  "masajes",
  "depilacion",
  "complementos",
];

/** Categorías activas, ordenadas para mostrarse en el sitio público. */
export async function getCategorias(): Promise<Categoria[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("categorias")
    .select("*")
    .eq("activo", true)
    .order("orden", { ascending: true });
  return data ?? [];
}

/** Todas las categorías (activas e inactivas), para el panel admin. */
export async function getTodasCategorias(): Promise<Categoria[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("categorias")
    .select("*")
    .order("orden", { ascending: true });
  return data ?? [];
}

/** Servicios activos, ordenados, para el sitio público. */
export async function getServicios(): Promise<Servicio[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("servicios")
    .select("*")
    .eq("activo", true)
    .order("orden", { ascending: true });
  return data ?? [];
}

/** Todos los servicios (activos e inactivos), para el panel admin. */
export async function getTodosServicios(): Promise<Servicio[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("servicios")
    .select("*")
    .order("orden", { ascending: true });
  return data ?? [];
}

export async function getImagenes(): Promise<Imagen[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("imagenes")
    .select("*")
    .order("seccion", { ascending: true });
  return data ?? [];
}

/** Categorías nuevas creadas desde el panel, fuera de las 5 secciones con diseño propio. */
export function esCategoriaGenerica(slug: string) {
  return !CATEGORIAS_CONOCIDAS.includes(slug);
}
