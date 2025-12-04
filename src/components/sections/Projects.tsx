"use client"

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Brain, Globe, Smartphone, X, Calendar } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { projects } from "@/lib/data";
import Image from "next/image";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const { isDark } = useTheme();

  const categories = ["All", ...new Set(projects.flatMap(project => project.categories || []))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.categories && project.categories.includes(selectedCategory));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "text-green-400";
      case "IN_PROGRESS":
        return "text-yellow-400";
      case "PLANNED":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  const getProjectIcon = (categories: string[]) => {
    if (!categories || categories.length === 0) return Code;
    const category = categories[0];
    const iconMap: Record<string, any> = {
      "AI/ML": Brain,
      "Computer Vision": Brain,
      "Mobile": Smartphone,
      "Web Development": Globe,
      "Full-Stack": Code,
      "Backend Development": Code,
    };
    return iconMap[category] || Code;
  };

  const getProjectColor = (categories: string[]) => {
    if (!categories || categories.length === 0) return "text-blue-500";
    const category = categories[0];
    const colorMap: Record<string, string> = {
      "AI/ML": "text-blue-500",
      "Computer Vision": "text-cyan-500",
      "Mobile": "text-green-500",
      "Web Development": "text-purple-500",
      "Full-Stack": "text-yellow-500",
      "Backend Development": "text-indigo-500",
    };
    return colorMap[category] || "text-blue-500";
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl ai-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl ai-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-4`}>
            Featured <span className="text-gradient-ai">Projects</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Explore my latest work showcasing AI integration, modern web development, and innovative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white"
                  : `card-ai hover:bg-white/10 ${isDark ? 'text-gray-200' : 'text-gray-700'}`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const ProjectIcon = getProjectIcon(project.categories);
            const projectColor = getProjectColor(project.categories);

            return (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => { setSelectedProject(project); setActiveImageIdx(0); }}
              >
                <div className="card-ai overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.sampleImages[0]}
                      alt={project.projectName}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium ${projectColor}`}>
                        <ProjectIcon className="w-4 h-4" />
                        {project.categories && project.categories[0]}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full glass text-xs font-medium ${getStatusColor(project.projectStatus)}`}>
                        {project.projectStatus}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-3 group-hover:text-gradient-ai transition-colors duration-300`}>
                      {project.projectName}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                      {project.projectDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies && project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies && project.technologies.length > 3 && (
                        <span className={`px-2 py-1 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded text-xs ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Statistics */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                        {formatDate(project.createdAt)}
                      </div>
                      <motion.a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Project
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            className="btn-ai px-8 py-4 text-lg font-semibold"
            onClick={() => window.open("https://github.com/MugishaProsper")}
          >
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6 w-full">
                    <div className="w-full sm:w-1/3">
                      <Image
                        src={selectedProject.sampleImages[activeImageIdx] || selectedProject.sampleImages[0]}
                        alt={selectedProject.projectName}
                        width={400}
                        height={300}
                        className="w-full h-56 sm:h-64 rounded-lg object-cover"
                      />
                      {selectedProject.sampleImages.length > 1 && (
                        <div className="mt-3 grid grid-cols-5 gap-2">
                          {selectedProject.sampleImages.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIdx(idx)}
                              className={`rounded-md overflow-hidden border ${idx === activeImageIdx ? 'border-blue-500' : 'border-white/10'}`}
                            >
                              <Image src={img} alt={`thumb-${idx}`} width={80} height={60} className="w-full h-14 object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{selectedProject.projectName}</h2>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mb-3">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium ${getProjectColor(selectedProject.categories)}`}>
                          {(() => {
                            const ProjectIcon = getProjectIcon(selectedProject.categories);
                            return <ProjectIcon className="w-4 h-4" />;
                          })()}
                          <span className="hidden sm:inline">{selectedProject.categories?.join(", ")}</span>
                          <span className="sm:hidden">{selectedProject.categories?.[0]}</span>
                        </div>
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full glass text-sm font-medium ${getStatusColor(selectedProject.projectStatus)}`}>
                          {selectedProject.projectStatus}
                        </div>
                      </div>
                      <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Added: {formatDate(selectedProject.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-base sm:text-lg mb-2 sm:mb-3`}>Description</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>{selectedProject.projectDescription}</p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-base sm:text-lg mb-2 sm:mb-3`}>Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 sm:px-3 py-1 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded-lg text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <a
                      href={selectedProject.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm sm:text-base font-medium hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      Visit Live Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
