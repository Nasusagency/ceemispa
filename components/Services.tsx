const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Faciales",
    desc: "Tu piel tiene su propia historia. La escuchamos, la entendemos, la cuidamos. Cada facial, un ritual diseñado solo para ti.",
    msg: "Hola! Me interesa información sobre los tratamientos faciales de CEEMI SPA.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Corporales",
    desc: "Tu cuello también envejece. Tu espalda también merece cuidado. Envolturas y rituales que nutren tu piel de pies a cabeza.",
    msg: "Hola! Me interesa información sobre los tratamientos corporales de CEEMI SPA.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Masajes",
    desc: "La tensión tiene nombre y lugar en el cuerpo. Nuestras manos los encuentran. Bienestar profundo que va más allá del músculo.",
    msg: "Hola! Me interesa información sobre los masajes de CEEMI SPA.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Tecnología Estética",
    desc: "La constancia se nota. Tu piel, también. Equipos de última generación para resultados que se sienten desde la primera sesión.",
    msg: "Hola! Me interesa información sobre los tratamientos con tecnología estética de CEEMI SPA.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Gift Cards",
    desc: "Porque hay personas en tu vida que merecen sentirse bien. Regala una experiencia que cuida. Un regalo que no se olvida.",
    msg: "Hola! Me interesa información sobre las Gift Cards de CEEMI SPA.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 px-5 bg-ceemi-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-ceemi-beige tracking-[0.3em] text-xs uppercase mb-4 font-sans">
            Tu piel, nuestro cuidado
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-ceemi-dark mb-5">
            Nuestros Servicios
          </h2>
          <p className="text-ceemi-brown/70 max-w-sm mx-auto text-sm leading-loose tracking-wide">
            Tratamientos que reconocen tu piel —<br className="hidden md:block" />
            no solo la atienden.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-ceemi-cream rounded-2xl p-8 flex flex-col gap-5
                         hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-ceemi-beige/80">{s.icon}</div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-ceemi-dark mb-3">
                  {s.title}
                </h3>
                <p className="text-ceemi-brown/80 text-sm leading-loose">
                  {s.desc}
                </p>
              </div>

              <a
                href={`https://wa.me/523781122322?text=${encodeURIComponent(s.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center border border-ceemi-beige/60 text-ceemi-beige
                           px-5 py-2.5 rounded-full text-xs tracking-wider uppercase mt-auto
                           hover:bg-ceemi-beige hover:text-white hover:border-ceemi-beige transition-all duration-200"
              >
                Más información
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
