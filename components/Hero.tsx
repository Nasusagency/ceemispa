const WA = "https://wa.me/523781122322";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ceemi-cream pt-16">
      {/* Blobs sutiles — solo calidez, sin saturar */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-8 w-80 h-80 rounded-full bg-ceemi-beige/8 blur-3xl" />
        <div className="absolute bottom-24 left-8 w-96 h-96 rounded-full bg-ceemi-brown/6 blur-3xl" />
      </div>

      <div className="relative text-center px-5 max-w-xl mx-auto">

        {/* Eyebrow — sans, uppercase, espaciado */}
        <p className="tracking-[0.4em] text-ceemi-beige/80 text-xs uppercase mb-10 font-sans">
          Skin &amp; Wellness Experience
        </p>

        {/* Headline — serif italic, directo, poético */}
        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-ceemi-dark leading-snug mb-8">
          Resultados que se sienten,{" "}
          <span className="text-ceemi-beige">piel que se nota.</span>
        </h1>

        {/* Línea divisora */}
        <div className="w-12 h-px bg-ceemi-beige/60 mx-auto mb-8" />

        {/* Subtítulo — sans limpio, estilo bio de Instagram */}
        <p className="text-ceemi-brown/70 text-sm tracking-[0.08em] font-sans mb-12 leading-loose">
          Faciales &nbsp;·&nbsp; Corporales &nbsp;·&nbsp; Tecnología estética
          <br />
          Tepatitlán de Morelos
        </p>

        {/* CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ceemi-beige text-white px-12 py-4 rounded-full text-sm tracking-wider
                     hover:bg-ceemi-dark transition-all duration-300 shadow-md hover:shadow-lg
                     hover:-translate-y-0.5 transform"
        >
          Agendar mi cita
        </a>

        <p className="mt-6 text-ceemi-brown/35 text-xs tracking-widest uppercase">
          Respuesta inmediata por WhatsApp
        </p>
      </div>

      {/* Flecha scroll — sin texto */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-25">
        <svg
          className="w-5 h-5 text-ceemi-beige animate-bounce"
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
