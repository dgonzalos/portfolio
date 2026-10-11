import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Products } from "@/components/Products/Products";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { getI18n } from "@/i18n/server";

export default async function Home() {
  const { dict } = await getI18n();

  return (
    <>
      <a className="skip-link" href="#content">
        {dict.skipToContent}
      </a>
      <Header />
      <main id="content">
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
