const placeholders = [
  { from: "from-amber-100", to: "to-orange-100" },
  { from: "from-rose-50", to: "to-amber-100" },
  { from: "from-amber-200", to: "to-yellow-100" },
  { from: "from-stone-100", to: "to-amber-100" },
  { from: "from-amber-100", to: "to-rose-50" },
  { from: "from-orange-100", to: "to-amber-50" },
  { from: "from-yellow-50", to: "to-stone-100" },
  { from: "from-rose-100", to: "to-orange-50" },
  { from: "from-amber-50", to: "to-amber-200" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 px-5 bg-ceemi-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-ceemi-beige tracking-[0.25em] text-xs uppercase mb-3">
            Conoce el spa
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ceemi-dark mb-4">
            Galería
          </h2>
          <p className="text-ceemi-brown/60 text-sm max-w-sm mx-auto">
            Fotos reales del spa se agregarán próximamente
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {placeholders.map((g, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl bg-gradient-to-br ${g.from} ${g.to}
                          flex items-center justify-center overflow-hidden`}
            >
              <div className="text-center opacity-25 select-none">
                <svg
                  className="w-8 h-8 mx-auto text-ceemi-brown"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="text-xs text-ceemi-brown mt-2 font-serif">
                  Próximamente
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-ceemi-brown/60 text-sm mb-4">
            Mientras tanto, síguenos en Instagram para ver nuestros resultados
          </p>
          <a
            href="https://www.instagram.com/ceemi_spa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ceemi-dark text-white px-8 py-3 rounded-full
                       hover:bg-ceemi-brown transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @ceemi_spa en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
