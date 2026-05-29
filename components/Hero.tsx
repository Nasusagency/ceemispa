import Image from "next/image";
import type { ReactNode } from "react";

const WA = "https://wa.me/523781122322";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-ceemi-cream min-h-screen pt-16 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 py-16 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 xl:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <p className="text-ceemi-beige tracking-[0.35em] text-xs uppercase mb-6 font-sans">
              CEEMI &nbsp;·&nbsp; Clínica Estética
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-ceemi-dark leading-[1.1] mb-7">
              Tu mejor versión<br />
              empieza{" "}
              <em className="text-ceemi-beige">aquí.</em>
            </h1>

            <div className="w-12 h-px bg-ceemi-beige/50 mx-auto lg:mx-0 mb-7" />

            <p className="text-ceemi-brown/65 text-sm font-sans tracking-wide mb-10 leading-loose">
              Tecnología avanzada &nbsp;·&nbsp; Resultados visibles &nbsp;·&nbsp; Bienestar integral
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-ceemi-beige text-white
                         px-10 py-4 rounded-full text-sm tracking-wider
                         hover:bg-ceemi-brown transition-all duration-300
                         shadow-md hover:shadow-lg hover:-translate-y-0.5 transform mb-14"
            >
              <WhatsAppIcon />
              Agenda tu valoración
            </a>

            {/* 3 pillars */}
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto lg:mx-0">
              <Pillar icon={<SparkleIcon />} label="Tecnología Avanzada" />
              <Pillar icon={<EyeIcon />}     label="Resultados Visibles" />
              <Pillar icon={<HeartIcon />}   label="Atención Personalizada" />
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-72 sm:w-80 lg:w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Cuerpo/rostro-glow.jpeg"
                alt="CEEMI Clínica Estética — Tratamiento facial"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ceemi-cream/15 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Pillar({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="w-11 h-11 rounded-full border border-ceemi-beige/35 flex items-center justify-center text-ceemi-beige/80">
        {icon}
      </div>
      <p className="text-ceemi-dark/55 text-[9px] tracking-[0.1em] uppercase text-center font-sans leading-snug">
        {label}
      </p>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}
