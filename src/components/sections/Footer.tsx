"use client"

import { useTheme } from "@/contexts/theme-context";
import { Github, Linkedin, Instagram } from "lucide-react";
import { contactInfo } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: contactInfo.github },
    { name: "LinkedIn", icon: Linkedin, href: contactInfo.linkedin },
    { name: "Instagram", icon: Instagram, href: contactInfo.instagram }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`border-t ${isDark ? 'border-gray-900' : 'border-gray-200'} py-12`}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Mugisha Prosper. All rights reserved.
          </div>

          {/* Center - Navigation */}
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('#projects')}
              className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              Contact
            </button>
          </div>

          {/* Right - Social */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
