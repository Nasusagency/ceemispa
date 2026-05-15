const WA_PAQUETES =
  "https://wa.me/523781122322?text=Hola!%20Me%20gustar%C3%ADa%20conocer%20los%20paquetes%20y%20precios%20de%20CEEMI%20SPA.";

export default function Packages() {
  return (
    <section id="paquetes" className="py-20 px-5 bg-ceemi-dark">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-ceemi-beige tracking-[0.25em] text-xs uppercase mb-3">
          Exclusivo para ti
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Paquetes &amp; Precios
        </h2>
        <p className="text-white/50 text-sm mb-12 max-w-sm mx-auto">
          Diseñamos cada experiencia a tu medida.
        </p>

        {/* Placeholder card */}
        <div className="relative rounded-2xl border border-ceemi-beige/30 bg-white/5 backdrop-blur p-10 mb-8 overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-ceemi-beige/10 blur-2xl pointer-events-none" />

          <div className="relative">
            <p className="font-serif text-2xl md:text-3xl text-ceemi-beige mb-4">
              Nuestros paquetes se personalizan para ti
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto">
              Cada tratamiento es único. Contáctanos para diseñar el paquete
              perfecto según tus necesidades, objetivos y presupuesto.
            </p>
          </div>
        </div>

        {/* USD → MXN */}
        <div className="inline-flex items-center gap-3 bg-ceemi-beige/15 border border-ceemi-beige/30 rounded-xl px-6 py-4 mb-10">
          <svg className="w-5 h-5 text-ceemi-beige flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 14.5v.75a.75.75 0 01-1.5 0v-.75a3.751 3.751 0 01-3-3.675.75.75 0 011.5 0 2.25 2.25 0 002.25 2.25 2.25 2.25 0 100-4.5 3.75 3.75 0 010-7.5V6.75a.75.75 0 011.5 0v.75a3.751 3.751 0 013 3.675.75.75 0 01-1.5 0 2.25 2.25 0 00-2.25-2.25 2.25 2.25 0 100 4.5 3.75 3.75 0 010 7.5z"/>
          </svg>
          <div className="text-left">
            <p className="text-ceemi-beige font-semibold text-base">
              1 USD = $20 MXN
            </p>
            <p className="text-white/50 text-xs mt-0.5">
              Aceptamos efectivo en pesos mexicanos
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href={WA_PAQUETES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ceemi-beige text-white px-10 py-4 rounded-full text-base font-medium
                       hover:bg-white hover:text-ceemi-dark transition-all duration-300 shadow-lg"
          >
            Consultar paquetes
          </a>
        </div>
      </div>
    </section>
  );
}
