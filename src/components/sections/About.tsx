"use client"

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/theme-context";

const About = () => {
  const { isDark } = useTheme();

  const skills = [
    { category: "AI & ML", items: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"] },
    { category: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { category: "DevOps", items: ["Docker", "AWS", "Kubernetes", "CI/CD"] }
  ];

  return (
    <section id="about" className="relative py-24 md:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className={`text-xs md:text-sm font-medium tracking-[0.22em] uppercase ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                About
              </p>
              <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                About me
              </h2>
            </div>

            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                I'm a full-stack developer and AI engineer with over 5 years of experience 
                building intelligent applications that solve real-world problems. My work 
                spans from machine learning models to scalable backend systems.
              </p>

              <p>
                I specialize in creating seamless integrations between AI technologies and 
                modern web applications, with a focus on performance, scalability, and user 
                experience.
              </p>

              <p>
                Currently based in Kigali, Rwanda, I work with clients worldwide to bring 
                their ideas to life through clean code and innovative solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className={`text-2xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  5+ Years
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Experience
                </div>
              </div>
              <div>
                <div className={`text-2xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  70+ Projects
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Completed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
              Skills & Technologies
            </h3>

            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skillGroup.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-sm rounded-lg border ${
                          isDark 
                            ? 'bg-gray-900 border-gray-800 text-gray-300' 
                            : 'bg-gray-50 border-gray-200 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
