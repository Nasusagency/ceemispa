"use client";

import { useRef, useState, useTransition } from "react";
import type { Categoria } from "@/lib/data";
import { crearServicio, type ResultadoAccion } from "@/app/admin/actions";
import SaveToast from "@/components/SaveToast";

export default function NuevoServicioForm({ categorias }: { categorias: Categoria[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, startTransition] = useTransition();
  const [resultado, setResultado] = useState<ResultadoAccion | null>(null);
  const [tipo, setTipo] = useState<"tratamiento" | "programa">("tratamiento");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    startTransition(async () => {
      const r = await crearServicio(formData);
      setResultado(r);
      if (r.ok) {
        formRef.current?.reset();
        setTipo("tratamiento");
      }
    });
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <Campo label="Categoría">
        <select name="categoria" required className="admin-input" defaultValue="">
          <option value="" disabled>
            Elige una categoría
          </option>
          {categorias.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.nombre}
            </option>
          ))}
        </select>
      </Campo>

      <Campo label="Tipo">
        <select
          name="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value as "tratamiento" | "programa")}
          className="admin-input"
        >
          <option value="tratamiento">Tratamiento individual</option>
          <option value="programa">Programa / paquete</option>
        </select>
      </Campo>

      <Campo label="Nombre">
        <input name="nombre" required className="admin-input" placeholder="Ej. Hydrafacial" />
      </Campo>

      <Campo label="Descripción">
        <textarea name="descripcion" rows={2} className="admin-input resize-none" />
      </Campo>

      <div className="flex gap-3">
        <Campo label="Precio" className="flex-1">
          <input name="precio" type="number" step="0.01" required className="admin-input" />
        </Campo>
        <label className="flex items-center gap-2 text-xs text-ceemi-brown/70 font-sans mt-6 flex-shrink-0">
          <input type="checkbox" name="precio_desde" />
          Nota &quot;desde $&quot;
        </label>
      </div>

      <Campo label={tipo === "programa" ? "Duración / sesiones" : "Duración (opcional)"}>
        <input
          name="duracion"
          className="admin-input"
          placeholder='Ej. "60 min" o "3 sesiones"'
        />
      </Campo>

      <Campo label="Imagen (opcional)">
        <input name="imagen" type="file" accept="image/*" className="admin-input" />
      </Campo>

      <button
        type="submit"
        disabled={pending}
        className="mt-1 bg-ceemi-beige text-white rounded-full py-3 text-xs tracking-widest uppercase hover:bg-ceemi-brown transition-colors disabled:opacity-60"
      >
        {pending ? "Guardando..." : "Agregar servicio"}
      </button>

      <SaveToast mensaje={resultado?.mensaje ?? null} ok={resultado?.ok} onClose={() => setResultado(null)} />
    </form>
  );
}

function Campo({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] tracking-widest uppercase text-ceemi-brown/60 font-sans mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
