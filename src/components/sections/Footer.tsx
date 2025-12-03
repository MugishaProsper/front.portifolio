"use client"

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { contactInfo } from "@/lib/data";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: contactInfo.github,
      color: "hover:text-blue-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: contactInfo.linkedin,
      color: "hover:text-purple-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: contactInfo.instagram,
      color: "hover:text-cyan-500"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const contactDetails = [
    {
      title: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "text-blue-500",
      icon: Mail
    },
    {
      title: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: "text-purple-500",
      icon: Phone
    },
    {
      title: "Location",
      value: contactInfo.location,
      href: "#",
      color: "text-cyan-500",
      icon: MapPin
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative">
      {/* Background AI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl ai-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl ai-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gradient-ai mb-4">Mugisha Prosper</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-md`}>
              AI-powered developer passionate about creating intelligent solutions that make a difference.
              Let's build the future together with cutting-edge technology.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg ${isDark ? 'bg-gray-800/10 text-gray-300' : 'bg-white/10 text-gray-600'} ${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`${isDark ? 'text-gray-300' : 'text-gray-600'} font-semibold mb-4`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`${isDark ? 'text-gray-300 hover:text-gray-200' : 'text-gray-600 hover:text-gray-300'} transition-colors duration-200`}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className={`${isDark ? 'text-gray-300' : 'text-gray-600'} font-semibold mb-4`}>Contacts</h4>
            <ul className="space-y-3">
              {contactDetails.map((contact, index) => (
                <motion.li
                  key={contact.value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => window.open(contact.href)}
                    className={`${isDark ? 'text-gray-300 hover:text-gray-200' : 'text-gray-600 hover:text-gray-300'} transition-colors duration-200 text-sm`}
                  >
                    {contact.value}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className={`border-t ${isDark ? 'border-white/10' : 'border-gray-200'} mt-12 pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
              © {currentYear} Mugisha Prosper. All rights reserved.
            </p>
            <div className={`flex items-center gap-2 ${isDark ? 'text-gray-200' : 'text-gray-600'} text-sm`}>
              <span>Made by <span className="text-gradient-ai">Mugisha Prosper</span></span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full opacity-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
