import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect("/admin");

  return (
    <div className="min-h-screen bg-ceemi-cream flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <span className="font-serif text-2xl font-bold text-ceemi-dark tracking-[0.15em]">
            CEEMI
          </span>
          <p className="text-ceemi-beige text-[10px] tracking-[0.32em] uppercase font-sans mt-1">
            Panel de administración
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
