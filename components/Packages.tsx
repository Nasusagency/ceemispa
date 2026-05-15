const WA_PAQUETES =
  "https://wa.me/523781122322?text=Hola!%20Me%20gustar%C3%ADa%20conocer%20los%20paquetes%20y%20precios%20de%20CEEMI%20SPA.";

export default function Packages() {
  return (
    <section id="paquetes" className="py-24 md:py-32 px-5 bg-ceemi-dark">
      <div className="max-w-3xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="text-ceemi-beige/70 tracking-[0.3em] text-xs uppercase mb-4 font-sans">
          Diseñados para ti
        </p>

        {/* Headline */}
        <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-white mb-5">
          Paquetes &amp; Precios
        </h2>

        <p className="text-white/40 text-xs tracking-widest uppercase mb-16">
          Cada experiencia, a tu medida
        </p>

        {/* Placeholder card */}
        <div className="relative rounded-2xl border border-ceemi-beige/20 bg-white/4 p-12 mb-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-ceemi-beige/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-ceemi-beige/6 blur-3xl pointer-events-none" />

          <div className="relative">
            <p className="font-serif italic text-2xl md:text-3xl text-ceemi-beige/90 mb-5 leading-snug">
              La constancia se nota.<br />Tu piel, nuestro cuidado.
            </p>
            <div className="w-8 h-px bg-ceemi-beige/30 mx-auto mb-5" />
            <p className="text-white/50 text-sm leading-loose max-w-sm mx-auto">
              Cada paquete se diseña según tu piel, tu ritmo y tus metas.
              Escríbenos — la conversación es el primer paso.
            </p>
          </div>
        </div>

        {/* USD → MXN */}
        <div className="inline-flex items-center gap-4 bg-ceemi-beige/10 border border-ceemi-beige/20 rounded-xl px-7 py-5 mb-12">
          <svg className="w-4 h-4 text-ceemi-beige flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 14.5v.75a.75.75 0 01-1.5 0v-.75a3.751 3.751 0 01-3-3.675.75.75 0 011.5 0 2.25 2.25 0 002.25 2.25 2.25 2.25 0 100-4.5 3.75 3.75 0 010-7.5V6.75a.75.75 0 011.5 0v.75a3.751 3.751 0 013 3.675.75.75 0 01-1.5 0 2.25 2.25 0 00-2.25-2.25 2.25 2.25 0 100 4.5 3.75 3.75 0 010 7.5z"/>
          </svg>
          <div className="text-left">
            <p className="text-ceemi-beige font-semibold text-sm tracking-wide">
              1 USD = $20 MXN
            </p>
            <p className="text-white/40 text-xs mt-0.5 tracking-wider">
              Efectivo en pesos mexicanos
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href={WA_PAQUETES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ceemi-beige text-white px-12 py-4 rounded-full text-sm tracking-wider
                       hover:bg-white hover:text-ceemi-dark transition-all duration-300 shadow-lg"
          >
            Consultar paquetes
          </a>
        </div>
      </div>
    </section>
  );
}
