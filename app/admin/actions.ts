"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/slug";

export type ResultadoAccion = { ok: boolean; mensaje: string };

const BUCKET = "ceemi-images";

async function subirArchivo(
  supabase: ReturnType<typeof createClient>,
  archivo: File,
  carpeta: string
) {
  const extension = archivo.name.split(".").pop() || "jpg";
  const ruta = `${carpeta}/${randomUUID()}.${extension}`;

  const { error } = await supabase.storage.from(BUCKET).upload(ruta, archivo, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(ruta);
  return data.publicUrl;
}

export async function cerrarSesion() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

// ── Servicios ──────────────────────────────────────────────

export async function actualizarServicio(
  id: string,
  cambios: {
    nombre: string;
    descripcion: string;
    precio: number;
    precio_desde: boolean;
    precio_paquete: number | null;
    duracion: string | null;
  }
): Promise<ResultadoAccion> {
  if (!cambios.nombre.trim() || !Number.isFinite(cambios.precio)) {
    return { ok: false, mensaje: "Revisa el nombre y el precio." };
  }

  const supabase = createClient();
  const { error } = await supabase.from("servicios").update(cambios).eq("id", id);
  if (error) return { ok: false, mensaje: error.message };

  revalidatePath("/");
  revalidatePath("/admin/servicios");
  return { ok: true, mensaje: "✓ Servicio actualizado" };
}

export async function cambiarActivoServicio(
  id: string,
  activo: boolean
): Promise<ResultadoAccion> {
  const supabase = createClient();
  const { error } = await supabase.from("servicios").update({ activo }).eq("id", id);
  if (error) return { ok: false, mensaje: error.message };

  revalidatePath("/");
  revalidatePath("/admin/servicios");
  return { ok: true, mensaje: activo ? "✓ Servicio activado" : "✓ Servicio desactivado" };
}

export async function crearServicio(formData: FormData): Promise<ResultadoAccion> {
  const categoria = String(formData.get("categoria") || "");
  const nombre = String(formData.get("nombre") || "").trim();
  const descripcion = String(formData.get("descripcion") || "").trim();
  const precio = Number(formData.get("precio"));
  const precio_desde = formData.get("precio_desde") === "on";
  const tipo = String(formData.get("tipo") || "tratamiento");
  const duracion = String(formData.get("duracion") || "").trim() || null;
  const precioPaqueteRaw = String(formData.get("precio_paquete") || "").trim();
  const precio_paquete = precioPaqueteRaw ? Number(precioPaqueteRaw) : null;
  const archivo = formData.get("imagen") as File | null;

  if (!categoria || !nombre || !Number.isFinite(precio)) {
    return { ok: false, mensaje: "Completa nombre, categoría y precio." };
  }

  const supabase = createClient();

  let imagen_url: string | null = null;
  if (archivo && archivo.size > 0) {
    try {
      imagen_url = await subirArchivo(supabase, archivo, "servicios");
    } catch (e) {
      return { ok: false, mensaje: "No se pudo subir la foto. Intenta de nuevo." };
    }
  }

  const { error } = await supabase.from("servicios").insert({
    categoria,
    nombre,
    descripcion: descripcion || null,
    precio,
    precio_desde,
    tipo,
    duracion,
    precio_paquete,
    imagen_url,
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: false, mensaje: "Ya existe un servicio con ese nombre en esa categoría." };
    }
    return { ok: false, mensaje: error.message };
  }

  revalidatePath("/");
  revalidatePath("/admin/servicios");
  return { ok: true, mensaje: "✓ Servicio agregado" };
}

// ── Categorías ─────────────────────────────────────────────

export async function crearCategoria(formData: FormData): Promise<ResultadoAccion> {
  const nombre = String(formData.get("nombre") || "").trim();
  const descripcion = String(formData.get("descripcion") || "").trim();

  if (!nombre) return { ok: false, mensaje: "Escribe un nombre para la categoría." };

  const slug = slugify(nombre);
  if (!slug) return { ok: false, mensaje: "Ese nombre no es válido, intenta con otro." };

  const supabase = createClient();

  const { count } = await supabase
    .from("categorias")
    .select("id", { count: "exact", head: true });

  const { error } = await supabase.from("categorias").insert({
    slug,
    nombre,
    descripcion: descripcion || null,
    orden: (count ?? 0) + 1,
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: false, mensaje: "Ya existe una categoría con ese nombre." };
    }
    return { ok: false, mensaje: error.message };
  }

  revalidatePath("/");
  revalidatePath("/admin/categorias");
  revalidatePath("/admin/servicios");
  return { ok: true, mensaje: "✓ Categoría creada" };
}

export async function cambiarActivoCategoria(
  id: string,
  activo: boolean
): Promise<ResultadoAccion> {
  const supabase = createClient();
  const { error } = await supabase.from("categorias").update({ activo }).eq("id", id);
  if (error) return { ok: false, mensaje: error.message };

  revalidatePath("/");
  revalidatePath("/admin/categorias");
  return { ok: true, mensaje: activo ? "✓ Categoría activada" : "✓ Categoría desactivada" };
}

// ── Imágenes ───────────────────────────────────────────────

export async function cambiarImagenSeccion(
  seccion: string,
  formData: FormData
): Promise<ResultadoAccion> {
  const archivo = formData.get("imagen") as File | null;
  if (!archivo || archivo.size === 0) {
    return { ok: false, mensaje: "Elige una foto primero." };
  }

  const supabase = createClient();

  let url: string;
  try {
    url = await subirArchivo(supabase, archivo, "secciones");
  } catch (e) {
    return { ok: false, mensaje: "No se pudo subir la foto. Intenta de nuevo." };
  }

  const { error } = await supabase
    .from("imagenes")
    .upsert(
      { seccion, url, updated_at: new Date().toISOString() },
      { onConflict: "seccion" }
    );

  if (error) return { ok: false, mensaje: error.message };

  revalidatePath("/");
  revalidatePath("/admin/imagenes");
  return { ok: true, mensaje: "✓ Imagen publicada" };
}
