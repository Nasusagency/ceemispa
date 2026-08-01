"use client";

import { useState, useTransition } from "react";
import type { Servicio } from "@/lib/data";
import { actualizarServicio, cambiarActivoServicio, type ResultadoAccion } from "@/app/admin/actions";
import { formatoPrecio } from "@/lib/whatsapp";
import Toggle from "@/app/admin/_ui/Toggle";
import SaveToast from "@/components/SaveToast";

export default function ServicioRow({ servicio }: { servicio: Servicio }) {
  const [editando, setEditando] = useState(false);
  const [activo, setActivo] = useState(servicio.activo);
  const [pending, startTransition] = useTransition();
  const [resultado, setResultado] = useState<ResultadoAccion | null>(null);

  const [nombre, setNombre] = useState(servicio.nombre);
  const [descripcion, setDescripcion] = useState(servicio.descripcion ?? "");
  const [precio, setPrecio] = useState(String(servicio.precio));
  const [precioDesde, setPrecioDesde] = useState(servicio.precio_desde);
  const [precioPaquete, setPrecioPaquete] = useState(
    servicio.precio_paquete != null ? String(servicio.precio_paquete) : ""
  );
  const [duracion, setDuracion] = useState(servicio.duracion ?? "");

  function guardar() {
    startTransition(async () => {
      const r = await actualizarServicio(servicio.id, {
        nombre,
        descripcion,
        precio: Number(precio),
        precio_desde: precioDesde,
        precio_paquete: precioPaquete ? Number(precioPaquete) : null,
        duracion: duracion || null,
      });
      setResultado(r);
      if (r.ok) setEditando(false);
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      {!editando ? (
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-serif font-bold text-ceemi-dark text-sm truncate">
              {servicio.nombre}
              {!activo && (
                <span className="ml-2 text-[10px] font-sans text-ceemi-brown/50 uppercase tracking-wide">
                  (inactivo)
                </span>
              )}
            </p>
            <p className="text-ceemi-brown/60 text-sm mt-0.5">
              {servicio.precio_desde ? "desde " : ""}
              {formatoPrecio(servicio.precio)}
              {servicio.precio_paquete ? ` · paquete ${formatoPrecio(servicio.precio_paquete)}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Toggle
              activo={activo}
              onCambiar={(v) => cambiarActivoServicio(servicio.id, v)}
              onResultado={(r) => {
                setResultado(r);
                if (r.ok) setActivo((prev) => !prev);
              }}
            />
            <button
              type="button"
              onClick={() => setEditando(true)}
              className="text-[11px] tracking-widest uppercase text-ceemi-beige hover:text-ceemi-brown transition-colors font-sans"
            >
              Editar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Campo label="Nombre">
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="admin-input"
            />
          </Campo>
          <Campo label="Descripción">
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows={2}
              className="admin-input resize-none"
            />
          </Campo>
          <div className="flex gap-3">
            <Campo label="Precio" className="flex-1">
              <input
                type="number"
                step="0.01"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="admin-input"
              />
            </Campo>
            <label className="flex items-center gap-2 text-xs text-ceemi-brown/70 font-sans mt-6 flex-shrink-0">
              <input
                type="checkbox"
                checked={precioDesde}
                onChange={(e) => setPrecioDesde(e.target.checked)}
              />
              Nota &quot;desde $&quot;
            </label>
          </div>
          {servicio.categoria === "depilacion" && (
            <Campo label="Precio paquete 5 sesiones (opcional)">
              <input
                type="number"
                step="0.01"
                value={precioPaquete}
                onChange={(e) => setPrecioPaquete(e.target.value)}
                className="admin-input"
              />
            </Campo>
          )}
          <Campo label="Duración / sesiones (opcional)">
            <input
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
              placeholder='Ej. "60 min" o "3 sesiones"'
              className="admin-input"
            />
          </Campo>

          <div className="flex gap-3 mt-1">
            <button
              type="button"
              disabled={pending}
              onClick={guardar}
              className="flex-1 bg-ceemi-beige text-white rounded-full py-2.5 text-xs tracking-widest uppercase hover:bg-ceemi-brown transition-colors disabled:opacity-60"
            >
              {pending ? "Guardando..." : "Guardar"}
            </button>
            <button
              type="button"
              disabled={pending}
              onClick={() => {
                setEditando(false);
                setNombre(servicio.nombre);
                setDescripcion(servicio.descripcion ?? "");
                setPrecio(String(servicio.precio));
                setPrecioDesde(servicio.precio_desde);
              }}
              className="flex-1 border border-ceemi-dark/15 text-ceemi-brown rounded-full py-2.5 text-xs tracking-widest uppercase hover:bg-ceemi-dark/5 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <SaveToast mensaje={resultado?.mensaje ?? null} ok={resultado?.ok} onClose={() => setResultado(null)} />
    </div>
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
