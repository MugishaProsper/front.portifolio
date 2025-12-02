"use client"

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

const Hero = () => {
  const { isDark } = useTheme();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-black/50 to-black' : 'bg-gradient-to-b from-transparent via-white/50 to-white'}`} />

      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="badge">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="heading-1">
              <span className={isDark ? 'text-white' : 'text-black'}>
                Building intelligent
              </span>
              <br />
              <span className="gradient-text">
                digital experiences
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              AI Engineer & Full-Stack Developer specializing in machine learning, 
              backend systems, and modern web applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="modern-button-primary group"
            >
              View my work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="modern-button"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className={`text-3xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                70+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                5+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Years Exp
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                100%
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 ${isDark ? 'border-gray-700' : 'border-gray-300'} flex items-start justify-center p-2`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1 h-2 rounded-full ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
