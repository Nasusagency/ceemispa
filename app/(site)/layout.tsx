import WhatsAppButton from "@/components/WhatsAppButton";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  );
}
