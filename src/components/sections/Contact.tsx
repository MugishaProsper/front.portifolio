"use client"

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/data";

const Contact = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: contactInfo.github },
    { name: "LinkedIn", icon: Linkedin, href: contactInfo.linkedin },
    { name: "Email", icon: Mail, href: `mailto:${contactInfo.email}` }
  ];

  return (
    <section id="contact" className="relative py-24 md:py-28">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className={`text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-3 ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Contact
            </p>
            <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Let&apos;s work together
            </h2>
            <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={`flex items-center gap-3 group ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>

                <div className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">{contactInfo.location}</span>
                </div>
              </div>

              <div className={`h-px ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`} />

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border ${
                      isDark 
                        ? 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-700' 
                        : 'border-gray-200 text-gray-600 hover:text-black hover:border-gray-300'
                    } transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Name"
                      className={`w-full px-4 py-3 rounded-lg border text-sm ${
                        isDark 
                          ? 'bg-black border-gray-800 text-white placeholder-gray-600 focus:border-gray-700' 
                          : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-gray-300'
                      } focus:outline-none transition-colors`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email"
                      className={`w-full px-4 py-3 rounded-lg border text-sm ${
                        isDark 
                          ? 'bg-black border-gray-800 text-white placeholder-gray-600 focus:border-gray-700' 
                          : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-gray-300'
                      } focus:outline-none transition-colors`}
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm resize-none ${
                      isDark 
                        ? 'bg-black border-gray-800 text-white placeholder-gray-600 focus:border-gray-700' 
                        : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-gray-300'
                    } focus:outline-none transition-colors`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="modern-button-primary modern-button-lg w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
