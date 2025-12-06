"use client"

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

const Hero = () => {
  const { isDark } = useTheme();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28">
      {/* Large grid background */}
      <div className="absolute inset-0 grid-background-large" />
      
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]"
            : "bg-gradient-to-b from-white via-white/70 to-white"
        }`}
      />

      <div className="section-container relative z-10 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-10 md:space-y-12">

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight md:leading-tight">
              <span className={isDark ? "text-white" : "text-black"}>
                Building intelligent
              </span>
              <br />
              <span className="gradient-text">
                digital experiences
              </span>
            </h1>
            
            <p
              className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I design and ship AI‑powered products, scalable backend systems, and
              modern web experiences that feel fast, polished, and reliable.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="modern-button-primary modern-button-lg group w-full sm:w-auto"
            >
              View my work
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="modern-button modern-button-lg w-full sm:w-auto"
            >
              Get in touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <a
              href="https://github.com/MugishaProsper"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mugisha-prosper-7a5981297"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nelsonprox92@gmail.com"
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
