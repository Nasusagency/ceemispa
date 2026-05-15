import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "CEEMI SPA — Skin & Wellness en Tepatitlán de Morelos",
  description:
    "Faciales, masajes, corporales y tecnología estética en Tepatitlán. Agenda tu cita por WhatsApp.",
  openGraph: {
    title: "CEEMI SPA — Skin & Wellness en Tepatitlán de Morelos",
    description:
      "Faciales, masajes, corporales y tecnología estética en Tepatitlán. Agenda tu cita por WhatsApp.",
    type: "website",
    locale: "es_MX",
  },
  keywords: [
    "spa",
    "Tepatitlán",
    "faciales",
    "masajes",
    "corporales",
    "tecnología estética",
    "bienestar",
    "Jalisco",
    "CEEMI SPA",
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
