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
                <div