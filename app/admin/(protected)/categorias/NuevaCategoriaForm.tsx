"use client";

import { useRef, useState, useTransition } from "react";
import { crearCategoria, type ResultadoAccion } from "@/app/admin/actions";
import SaveToast from "@/components/SaveToast";

export default function NuevaCategoriaForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, startTransition] = useTransition();
  const [resultado, setResultado] = useState<ResultadoAccion | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    startTransition(async () => {
      const r = await crearCategoria(formData);
      setResultado(r);
      if (r.ok) formRef.current?.reset();
    });
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <label className="block">
        <span className="block text-[10px] tracking-widest uppercase text-ceemi-brown/60 font-sans mb-1">
          Nombre de la categoría
        </span>
        <input name="nombre" required className="admin-input" placeholder="Ej. Tecnología Estética" />
      </label>

      <label className="block">
        <span className="block text-[10px] tracking-widest uppercase text-ceemi-brown/60 font-sans mb-1">
          Descripción corta
        </span>
        <textarea name="descripcion" rows={2} className="admin-input resize-none" />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="mt-1 bg-ceemi-beige text-white rounded-full py-3 text-xs tracking-widest uppercase hover:bg-ceemi-brown transition-colors disabled:opacity-60"
      >
        {pending ? "Creando..." : "Crear categoría"}
      </button>

      <SaveToast mensaje={resultado?.mensaje ?? null} ok={resultado?.ok} onClose={() => setResultado(null)} />
    </form>
  );
}
