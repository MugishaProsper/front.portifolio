import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-white dark:bg-black">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
