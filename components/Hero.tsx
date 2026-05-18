import Image from "next/image";

const WA = "https://wa.me/523781122322";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Foto de fondo */}
      <Image
        src="/images/Cuerpo/hero.jpeg"
        alt="Tratamiento facial CEEMI SPA"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-ceemi-dark/55" />

      <div className="relative z-10 text-center px-5 max-w-xl mx-auto">

        <p className="tracking-[0.4em] text-white/70 text-xs uppercase mb-10 font-sans">
          Skin &amp; Wellness Experience
        </p>

        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white leading-snug mb-8">
          Resultados que se sienten,{" "}
          <span className="text-ceemi-beige">piel que se nota.</span>
        </h1>

        <div className="w-12 h-px bg-ceemi-beige/60 mx-auto mb-8" />

        <p className="text-white/65 text-sm tracking-[0.08em] font-sans mb-12 leading-loose">
          Faciales &nbsp;·&nbsp; Corporales &nbsp;·&nbsp; Tecnología estética
          <br />
          Tepatitlán de Morelos
        </p>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ceemi-beige text-white px-12 py-4 rounded-full text-sm tracking-wider
                     hover:bg-white hover:text-ceemi-dark transition-all duration-300 shadow-md hover:shadow-lg
                     hover:-translate-y-0.5 transform"
        >
          Agendar mi cita
        </a>

        <p className="mt-6 text-white/35 text-xs tracking-widest uppercase">
          Respuesta inmediata por WhatsApp
        </p>
      </div>

      {/* Flecha scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <svg
          className="w-5 h-5 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
