"use client"

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
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
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: "text-purple-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: contactInfo.location,
      href: "#",
      color: "text-cyan-500"
    }
  ];

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

  return (
    <section id="contact" className="min-h-screen relative flex items-center py-20">
      {/* Background AI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl ai-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl ai-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-4`}>
            Get In <span className="text-gradient-ai">Touch</span>
          </h2>
          <p className={`text-xl max-w-4xl mx-auto p-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="card-ai p-6">
              <h3 className={`text-xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-4`}>Let's Connect</h3>
              <p className={`mb-6 text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactDetails.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-white/5'}`}
                  >
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <info.icon className={`w-4 h-4 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className={`${isDark ? 'text-gray-200' : 'text-gray-700'} font-semibold text-sm`}>{info.title}</h4>
                      <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'} text-sm`}>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className={`mt-6 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex gap-3 flex-row justify-center gap-4">
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
                      className={`p-2 rounded-lg ${isDark ? 'bg-white/10 text-gray-200' : 'bg-gray-200 text-gray-700'} ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-ai p-6">
              <h3 className={`text-xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-600'} mb-4`}>Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={`block ${isDark ? 'text-gray-200' : 'text-gray-600'} font-medium mb-1 text-sm`}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-white/5 border-white/20 text-gray-400' : 'bg-white border-gray-300 text-gray-900'} placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block ${isDark ? 'text-gray-200' : 'text-gray-600'} font-medium mb-1 text-sm`}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-white/5 border-white/20 text-gray-400' : 'bg-white border-gray-300 text-gray-900'} placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block ${isDark ? 'text-gray-200' : 'text-gray-600'} font-medium mb-1 text-sm`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-white/5 border-white/20 text-gray-400' : 'bg-white border-gray-300 text-gray-900'} placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block ${isDark ? 'text-gray-200' : 'text-gray-600'} font-medium mb-1 text-sm`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-white/5 border-white/20 text-gray-400' : 'bg-white border-gray-300 text-gray-900'} placeholder-gray-400 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="btn-ai w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
