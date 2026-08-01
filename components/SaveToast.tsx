"use client";

import { useEffect } from "react";

type Props = {
  mensaje: string | null;
  ok?: boolean;
  onClose: () => void;
};

export default function SaveToast({ mensaje, ok = true, onClose }: Props) {
  useEffect(() => {
    if (!mensaje) return;
    const t = setTimeout(onClose, 2600);
    return () => clearTimeout(t);
  }, [mensaje, onClose]);

  if (!mensaje) return null;

  return (
    <div
      className={`text-xs font-sans rounded-lg px-3 py-2 mt-2 ${
        ok
          ? "bg-ceemi-beige/15 text-ceemi-brown"
          : "bg-red-50 text-red-700"
      }`}
      role="status"
    >
      {mensaje}
    </div>
  );
}
