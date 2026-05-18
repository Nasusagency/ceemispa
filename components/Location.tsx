import type { ReactNode } from "react";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 md:py-32 px-5 bg-ceemi-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-ceemi-beige tracking-[0.3em] text-xs uppercase mb-4 font-sans">
            Encuéntranos
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-ceemi-dark mb-4">
            Ubicación
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="space-y-7">
            <InfoRow
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              }
              label="Dirección"
            >
              <p className="text-ceemi-brown leading-relaxed text-sm">
                Hospital Real San Lucas
                <br />
                Torre de Especialidades, Piso 1
                <br />
                Tepatitlán de Morelos, Jalisco, México
              </p>
            </InfoRow>

            <InfoRow
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
              }
              label="Horarios"
            >
              <div className="text-ceemi-brown text-sm leading-relaxed">
                <p>Lunes — Viernes: 9:00 am – 2:00 pm y 4:00 pm – 7:00 pm</p>
                <p>Sábados: 9:00 am – 2:00 pm</p>
                <p>Domingos: Cerrado</p>
              </div>
            </InfoRow>

            <InfoRow
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              }
              label="WhatsApp"
            >
              <a
                href="https://wa.me/523781122322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ceemi-brown text-sm hover:text-ceemi-beige transition-colors"
              >
                378 112 2322
              </a>
            </InfoRow>

            <a
              href="https://maps.google.com/?q=Hospital+Real+San+Lucas+Tepatitlan+de+Morelos+Jalisco+Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ceemi-beige text-white px-8 py-3 rounded-full
                         hover:bg-ceemi-dark transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                <path fillRule="evenodd" d="M12 2.25c-4.16 0-7.5 3.36-7.5 7.5 0 3.978 3.057 9.002 6.773 12.26a1.125 1.125 0 001.454 0C16.443 18.752 19.5 13.728 19.5 9.75c0-4.14-3.34-7.5-7.5-7.5zM6.75 9.75a5.25 5.25 0 1110.5 0c0 3.153-2.526 7.585-5.25 10.583C9.276 17.335 6.75 12.903 6.75 9.75z" clipRule="evenodd" />
              </svg>
              Cómo llegar
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-full md:min-h-[420px]">
            <iframe
              title="Ubicación CEEMI SPA — Hospital Real San Lucas"
              src="https://maps.google.com/maps?q=Hospital+Real+San+Lucas,Tepatitl%C3%A1n+de+Morelos,+Jalisco,+M%C3%A9xico&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-ceemi-cream flex items-center justify-center text-ceemi-beige">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-sm font-semibold text-ceemi-dark mb-1">
          {label}
        </h3>
        {children}
      </div>
    </div>
  );
}
