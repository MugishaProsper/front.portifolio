"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/theme-context";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <> 
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-2 left-2 right-2 z-50 transition-all duration-200 rounded-lg ${
          isDark
            ? 'bg-black/85 border-gray-900/80'
            : 'bg-white/85 border-gray-200/80'
        } backdrop-blur-sm border-1.5`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-base md:text-lg font-semibold tracking-tight ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              Mugisha Prosper
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium transition-all relative group ${
                      isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all group-hover:w-full ${
                      isDark ? 'bg-white' : 'bg-black'
                    }`} />
                  </button>
                ))}
              </div>
              
              <div className={`w-px h-6 ${isDark ? 'bg-gray-800/80' : 'bg-gray-200'} mx-1`} />
              
              <a
                href="/cv/MugishaProsperResume.pdf"
                download
                className="modern-button-primary modern-button-sm hidden lg:inline-flex"
              >
                Resume
              </a>
            </div>

            {/* Mobile actions */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg border ${
                  isDark
                    ? 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 bg-black/40'
                    : 'border-gray-200 text-gray-600 hover:text-black hover:border-gray-300 bg-white/60'
                } transition-colors`}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-16 left-0 right-0 z-40 md:hidden border-b ${
              isDark
                ? 'bg-black/95 border-gray-900/80'
                : 'bg-white/95 border-gray-200/80'
            } backdrop-blur-modern`}
          >
            <div className="section-container py-6 space-y-4">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left text-lg font-medium transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className={`h-px ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`} />
              
              <a
                href="/cv/MugishaProsperResume.pdf"
                download
                className="modern-button-primary modern-button-lg w-full text-center justify-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
