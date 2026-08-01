"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setCargando(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setCargando(false);

    if (error) {
      setError("Correo o contraseña incorrectos. Intenta de nuevo.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4"
    >
      <div>
        <label className="block text-[11px] tracking-widest uppercase text-ceemi-brown/70 font-sans mb-1.5">
          Correo
        </label>
        <input
          type="email"
          required
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-ceemi-dark/15 px-4 py-3 text-sm text-ceemi-dark focus:outline-none focus:border-ceemi-beige"
          placeholder="tucorreo@ceemispa.com"
        />
      </div>

      <div>
        <label className="block text-[11px] tracking-widest uppercase text-ceemi-brown/70 font-sans mb-1.5">
          Contraseña
        </label>
        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-ceemi-dark/15 px-4 py-3 text-sm text-ceemi-dark focus:outline-none focus:border-ceemi-beige"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={cargando}
        className="mt-2 bg-ceemi-beige text-white rounded-full py-3 text-sm tracking-widest uppercase hover:bg-ceemi-brown transition-colors disabled:opacity-60"
      >
        {cargando ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
