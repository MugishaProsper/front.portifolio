"use client"

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { projects } from "@/lib/data";
import Image from "next/image";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isDark } = useTheme();

  const categories = ["All", ...new Set(projects.flatMap(project => project.categories || []))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.categories && project.categories.includes(selectedCategory));

  return (
    <section id="projects" className="relative py-24 md:py-28">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10 md:mb-12"
        >
          <p className={`text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-3 ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Projects
          </p>
          <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Selected work
          </h2>
          <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of projects showcasing AI integration, modern web development, 
            and scalable backend systems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                selectedCategory === category
                  ? isDark
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                  : isDark
                    ? 'bg-gray-900 text-gray-400 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                  <Image
                    src={project.sampleImages[0]}
                    alt={project.projectName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 ${
                      isDark ? 'bg-black/70' : 'bg-black/40'
                    } opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm`}
                  >
                    <div className="modern-button-primary modern-button-lg">
                      View Project
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`badge ${
                      project.projectStatus === 'COMPLETED' 
                        ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                        : project.projectStatus === 'IN_PROGRESS'
                          ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                    }`}>
                      {project.projectStatus.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'} group-hover:underline`}>
                      {project.projectName}
                    </h3>
                    <ExternalLink className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'} group-hover:text-current transition-colors`} />
                  </div>

                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                    {project.projectDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded ${
                          isDark 
                            ? 'bg-gray-900 text-gray-400' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 4 && (
                      <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/MugishaProsper"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button modern-button-lg group"
          >
            View all projects on GitHub
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
