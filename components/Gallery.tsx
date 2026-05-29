import Image from "next/image";

const photos = [
  { src: "/images/Insta/tu-mejor-version.jpeg",   alt: "Tu mejor versión CEEMI" },
  { src: "/images/Cuerpo/facial-serum.jpeg",       alt: "Tratamiento facial con sérum" },
  { src: "/images/Inmobiliario/recepcion.jpeg",    alt: "Recepción CEEMI Clínica Estética" },
  { src: "/images/Cuerpo/cuello-glow.jpeg",        alt: "Piel radiante resultado tratamiento" },
  { src: "/images/Inmobiliario/cabina.jpeg",       alt: "Cabina de tratamiento CEEMI" },
  { src: "/images/Cuerpo/corporales.jpeg",         alt: "Tratamiento corporal CEEMI" },
  { src: "/images/Inmobiliario/sala-1.jpeg",       alt: "Instalaciones CEEMI Clínica Estética" },
  { src: "/images/Insta/dia-madres.jpeg",          alt: "Experiencia CEEMI Spa" },
  { src: "/images/Inmobiliario/recepcion-2.jpeg",  alt: "Área de recepción CEEMI" },
  { src: "/images/Cuerpo/hombro-glow.jpeg",        alt: "Resultado reafirmante corporal" },
  { src: "/images/Inmobiliario/arco-marmol.jpeg",  alt: "Detalle arquitectónico CEEMI" },
  { src: "/images/Inmobiliario/cabina-2.jpeg",     alt: "Cabina premium CEEMI" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-ceemi-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 px-5">
          <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-3 font-sans">
            Nuestro espacio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ceemi-dark mb-4">
            Tu Experiencia CEEMI
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-ceemi-beige/40" />
            <span className="text-ceemi-beige text-sm">+</span>
            <div className="w-10 h-px bg-ceemi-beige/40" />
          </div>
          <p className="text-ceemi-brown/60 text-sm leading-loose max-w-lg mx-auto">
            Cada detalle está pensado para que vivas un momento de bienestar único,
            con resultados visibles y acompañamiento personalizado.
          </p>
        </div>

        {/* MÓVIL: carrusel horizontal */}
        <div className="md:hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 pb-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-[78vw] aspect-square rounded-2xl overflow-hidden relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="78vw"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ceemi-dark/40 via-transparent to-transparent" />
              </div>
            ))}
            <div className="flex-shrink-0 w-5" aria-hidden="true" />
          </div>
          <p className="text-center text-ceemi-brown/35 text-xs tracking-widest uppercase mt-4 px-5">
            Desliza para ver más
          </p>
        </div>

        {/* DESKTOP: grid 4 columnas */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-3 px-5">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 33vw, 25vw"
                loading={i < 4 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-ceemi-dark/0 group-hover:bg-ceemi-dark/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10 md:mt-12 px-5">
          <p className="text-ceemi-brown/55 text-sm mb-5">
            Síguenos en Instagram para ver más resultados
          </p>
          <a
            href="https://www.instagram.com/ceemi_spa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ceemi-dark text-white px-8 py-3 rounded-full
                       hover:bg-ceemi-brown transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @ceemi_spa
          </a>
        </div>
      </div>
    </section>
  );
}
