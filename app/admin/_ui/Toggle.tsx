"use client";

import { useTransition } from "react";
import type { ResultadoAccion } from "@/app/admin/actions";

type Props = {
  activo: boolean;
  onCambiar: (activo: boolean) => Promise<ResultadoAccion>;
  onResultado: (r: ResultadoAccion) => void;
};

export default function Toggle({ activo, onCambiar, onResultado }: Props) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          const r = await onCambiar(!activo);
          onResultado(r);
        })
      }
      aria-pressed={activo}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors disabled:opacity-50 ${
        activo ? "bg-ceemi-beige" : "bg-ceemi-dark/20"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          activo ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
