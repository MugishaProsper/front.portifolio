import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
      <Navbar />
      
      <main id="main-content">
        <section id="home">
          <Hero />
        </section>

        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
