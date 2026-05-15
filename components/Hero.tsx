const WA = "https://wa.me/523781122322";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ceemi-cream pt-16">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-ceemi-beige/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-ceemi-brown/10 blur-3xl" />
      </div>

      <div className="relative text-center px-5 max-w-2xl mx-auto">
        {/* Eyebrow */}
        <p className="tracking-[0.35em] text-ceemi-beige text-xs uppercase mb-6 font-sans">
          Skin &amp; Wellness Experience
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ceemi-dark leading-tight mb-6">
          Tu ritual de{" "}
          <span className="text-ceemi-beige italic">bienestar</span>
          <br />
          te espera
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-ceemi-beige mx-auto mb-6" />

        {/* Subtitle */}
        <p className="text-ceemi-brown text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Tratamientos estéticos y de bienestar personalizados para revelar tu
          mejor versión, en Tepatitlán de Morelos.
        </p>

        {/* CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ceemi-beige text-white px-10 py-4 rounded-full text-base font-medium
                     hover:bg-ceemi-dark transition-all duration-300 shadow-md hover:shadow-xl
                     hover:-translate-y-0.5 transform"
        >
          Agendar mi cita
        </a>

        <p className="mt-5 text-ceemi-brown/50 text-xs tracking-wide">
          Respuesta inmediata · WhatsApp 378 112 2322
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-ceemi-brown text-xs tracking-widest uppercase">Explorar</span>
        <svg
          className="w-4 h-4 text-ceemi-beige animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
