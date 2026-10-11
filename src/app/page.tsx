import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Products } from "@/components/Products/Products";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
