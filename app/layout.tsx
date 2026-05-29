import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "CEEMI Clínica Estética — Tu mejor versión empieza aquí",
  description:
    "Faciales, corporales, depilación láser Soprano Ice Platinum y masajes con tecnología avanzada en Tepatitlán de Morelos, Jalisco. Agenda tu cita por WhatsApp.",
  openGraph: {
    title: "CEEMI Clínica Estética — Tu mejor versión empieza aquí",
    description:
      "Faciales, corporales, depilación láser Soprano Ice Platinum y masajes con tecnología avanzada en Tepatitlán de Morelos, Jalisco.",
    type: "website",
    locale: "es_MX",
  },
  keywords: [
    "clínica estética",
    "Tepatitlán",
    "faciales",
    "masajes",
    "corporales",
    "depilación láser",
    "Soprano Ice Platinum",
    "HIFU",
    "tecnología estética",
    "bienestar",
    "Jalisco",
    "CEEMI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
