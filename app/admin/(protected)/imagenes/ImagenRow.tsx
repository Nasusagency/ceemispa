"use client";

import { useRef, useState, useTransition } from "react";
import Image from "next/image";
import type { Imagen } from "@/lib/data";
import { cambiarImagenSeccion, type ResultadoAccion } from "@/app/admin/actions";
import SaveToast from "@/components/SaveToast";

export default function ImagenRow({ imagen, titulo }: { imagen: Imagen; titulo: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [resultado, setResultado] = useState<ResultadoAccion | null>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const archivo = e.target.files?.[0];
    if (!archivo) return;

    setPreview(URL.createObjectURL(archivo));

    const formData = new FormData();
    formData.set("imagen", archivo);

    startTransition(async () => {
      const r = await cambiarImagenSeccion(imagen.seccion, formData);
      setResultado(r);
      if (inputRef.current) inputRef.current.value = "";
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-ceemi-cream">
        <Image src={preview ?? imagen.url} alt={titulo} fill className="object-cover" sizes="80px" />
        {pending && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center text-[10px] text-ceemi-brown">
            Subiendo...
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-serif font-bold text-ceemi-dark text-sm mb-2">{titulo}</p>
        <label className="inline-block text-[11px] tracking-widest uppercase text-ceemi-beige border border-ceemi-beige/50 rounded-full px-4 py-2 hover:bg-ceemi-beige hover:text-white transition-all duration-200 cursor-pointer">
          Cambiar imagen
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onFileChange}
            disabled={pending}
            className="hidden"
          />
        </label>
        <SaveToast mensaje={resultado?.mensaje ?? null} ok={resultado?.ok} onClose={() => setResultado(null)} />
      </div>
    </div>
  );
}
