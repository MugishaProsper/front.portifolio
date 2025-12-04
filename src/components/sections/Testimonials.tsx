"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X, Calendar, Brain, Code } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { testimonials } from "@/lib/data";
import Image from "next/image";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const { isDark } = useTheme();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getProjectIcon = (project: string) => {
    const projectIcons: Record<string, any> = {
      "AI Recommendation Engine": Brain,
      "E-commerce Platform": Code,
      "Computer Vision": Brain,
      "Microservices Platform": Code,
      "Mobile App": Code,
      "Content Moderation AI": Brain,
    };
    return projectIcons[project] || Code;
  };

  const getProjectColor = (project: string) => {
    const projectColors: Record<string, string> = {
      "AI Recommendation Engine": "text-blue-500",
      "E-commerce Platform": "text-purple-500",
      "Computer Vision": "text-cyan-500",
      "Microservices Platform": "text-green-500",
      "Mobile App": "text-yellow-500",
      "Content Moderation AI": "text-red-500",
    };
    return projectColors[project] || "text-blue-500";
  };

  const getShortMessage = (message: string) => {
    return message.length > 150 ? message.substring(0, 150) + "..." : message;
  };

  return (
    <section id="testimonials" className="min-h-screen relative flex items-center py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl ai-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl ai-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-4`}>
            Client <span className="text-gradient-ai">Testimonials</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Hear from clients who have experienced the quality and professionalism of my work
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
          {testimonials.map((testimonial, index) => {
            const ProjectIcon = getProjectIcon(testimonial.project);
            const projectColor = getProjectColor(testimonial.project);

            return (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="card-ai p-6 h-full relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-8 h-8 text-blue-500" />
                  </div>

                  {/* Project Badge */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium ${projectColor}`}>
                      <ProjectIcon className="w-3 h-3" />
                      {testimonial.project}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 0)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed mb-6 line-clamp-4`}>
                    "{getShortMessage(testimonial.message || '')}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.clientName || 'User')}`}
                      alt={testimonial.clientName || 'Client'}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border-2 border-white/20"
                    />
                    <div className="flex-1">
                      <h4 className={`${isDark ? 'text-gray-200' : 'text-gray-700'} font-semibold text-sm`}>{testimonial.clientName || 'Anonymous'}</h4>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs capitalize`}>{testimonial.clientRole || 'Client'}</p>
                      <p className="text-blue-500 text-xs font-medium">{testimonial.project || 'Project'}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-xs`}>{formatDate(testimonial.createdAt)}</p>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute bottom-2 right-2 opacity-50">
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Click to read more</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="card-ai p-6 max-w-2xl mx-auto">
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-700'} mb-3`}>
              Ready to join these satisfied clients?
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>
              Let's discuss how I can help bring your AI and backend projects to life
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ai px-6 py-3 text-base font-semibold"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* Custom Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <Image
                    src={selectedTestimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedTestimonial.clientName || 'User')}`}
                    alt={selectedTestimonial.clientName || 'Client'}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-white/20 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold text-lg sm:text-xl mb-1`}>{selectedTestimonial.clientName || 'Anonymous'}</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-1 capitalize`}>{selectedTestimonial.clientRole || 'Client'}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                      {[...Array(selectedTestimonial.rating || 0)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium ${getProjectColor(selectedTestimonial.project)} mb-3`}>
                    {(() => {
                      const ProjectIcon = getProjectIcon(selectedTestimonial.project);
                      return <ProjectIcon className="w-4 h-4" />;
                    })()}
                    {selectedTestimonial.project || 'Project'}
                  </div>
                </div>

                <div className={`mb-6 p-4 ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded-lg`}>
                  <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    <Calendar className="w-4 h-4" />
                    <span>Testimonial Date: {formatDate(selectedTestimonial.createdAt)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-sm mb-3`}>Full Testimonial:</h5>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-500 opacity-30" />
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm leading-relaxed pl-6`}>
                      "{selectedTestimonial.message || 'No message available'}"
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setSelectedTestimonial(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-ai px-6 py-3 text-sm font-semibold"
                  >
                    Start Your Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
