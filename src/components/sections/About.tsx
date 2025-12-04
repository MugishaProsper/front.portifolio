"use client"

import { motion } from "framer-motion";
import { User, Award, Clock, Target } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

const About = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const stats = [
    {
      icon: Award,
      value: `${currentYear - 2023}+`,
      label: "Years Experience",
      color: "text-blue-500"
    },
    {
      icon: Target,
      value: `70+`,
      label: "Github Projects Completed",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Availability",
      color: "text-cyan-500"
    },
    {
      icon: User,
      value: "100%",
      label: "Client Satisfaction",
      color: "text-green-500"
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 95, color: "bg-blue-500" },
    { name: "Node.js/Python", level: 90, color: "bg-purple-500" },
    { name: "AI/ML", level: 85, color: "bg-cyan-500" },
    { name: "Cloud/AWS", level: 80, color: "bg-green-500" },
    { name: "DevOps", level: 75, color: "bg-yellow-500" }
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen relative flex items-center justify-center py-20"
    >
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
          className="text-center p-2 pt-4"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} p-4`}>
            About <span className="text-gradient-ai">Me</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} p-2`}>
            Passionate AI developer with expertise in creating intelligent solutions that bridge the gap between cutting-edge technology and real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-6">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-24 h-24 text-white opacity-60" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-ai p-4 text-center"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-1`}>{stat.value}</div>
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-xs`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-ai p-6">
              <h3 className={`text-xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-4`}>My Journey</h3>
              <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                <p>
                  I'm a passionate developer with over 5 years of experience in full-stack development and AI/ML technologies.
                  My journey began with a fascination for how artificial intelligence can solve real-world problems.
                </p>
                <p>
                  I specialize in building intelligent applications using modern technologies like React, Node.js, Python,
                  and various AI/ML frameworks. My approach combines technical expertise with creative problem-solving.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest AI research, contributing to open-source projects,
                  or mentoring aspiring developers in the tech community.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="card-ai p-6">
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-700'} mb-4`}>Technical Skills</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} font-medium text-sm`}>{skill.name}</span>
                      <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'} font-bold text-md`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
