import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Faciales from "@/components/Faciales";
import Corporales from "@/components/Corporales";
import Depilacion from "@/components/Depilacion";
import Masajes from "@/components/Masajes";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Faciales />
      <Corporales />
      <Depilacion />
      <Masajes />
      <Gallery />
      <Footer />
    </main>
  );
}
