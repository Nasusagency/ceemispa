import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { cerrarSesion } from "@/app/admin/actions";
import AdminNav from "@/app/admin/_ui/AdminNav";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-ceemi-cream">
      <header className="sticky top-0 z-40 bg-ceemi-cream/97 backdrop-blur-sm border-b border-ceemi-dark/8">
        <div className="max-w-4xl mx-auto px-5 py-3 flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-ceemi-dark tracking-[0.1em]">
            CEEMI · Admin
          </span>
          <form action={cerrarSesion}>
            <button
              type="submit"
              className="text-[11px] tracking-widest uppercase text-ceemi-brown/70 hover:text-ceemi-beige transition-colors font-sans"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
        <AdminNav />
      </header>

      <main className="max-w-4xl mx-auto px-5 py-6 pb-16">{children}</main>
    </div>
  );
}
