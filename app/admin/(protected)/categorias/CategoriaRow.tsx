"use client";

import { useState } from "react";
import type { Categoria } from "@/lib/data";
import { cambiarActivoCategoria, type ResultadoAccion } from "@/app/admin/actions";
import Toggle from "@/app/admin/_ui/Toggle";
import SaveToast from "@/components/SaveToast";

export default function CategoriaRow({ categoria }: { categoria: Categoria }) {
  const [activo, setActivo] = useState(categoria.activo);
  const [resultado, setResultado] = useState<ResultadoAccion | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="font-serif font-bold text-ceemi-dark text-sm">
          {categoria.nombre}
          {!activo && (
            <span className="ml-2 text-[10px] font-sans text-ceemi-brown/50 uppercase tracking-wide">
              (inactiva)
            </span>
          )}
        </p>
        {categoria.descripcion && (
          <p className="text-ceemi-brown/60 text-xs mt-0.5">{categoria.descripcion}</p>
        )}
        <SaveToast mensaje={resultado?.mensaje ?? null} ok={resultado?.ok} onClose={() => setResultado(null)} />
      </div>
      <Toggle
        activo={activo}
        onCambiar={(v) => cambiarActivoCategoria(categoria.id, v)}
        onResultado={(r) => {
          setResultado(r);
          if (r.ok) setActivo((prev) => !prev);
        }}
      />
    </div>
  );
}
