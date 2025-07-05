import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { forwardRef } from "react"
import AnimatedSection from "../ui/animated-section"

import ReactIcon from "../../assets/skills/react.svg"
import VueIcon from "../../assets/skills/vue.svg"
import TypeScriptIcon from "../../assets/skills/typescript.svg"
import JavaScriptIcon from "../../assets/skills/javascript.svg"
import TailwindIcon from "../../assets/skills/tailwind.svg"
import NodeIcon from "../../assets/skills/node.svg"
import PythonIcon from "../../assets/skills/python.svg"
import FastAPIIcon from "../../assets/skills/fastapi.svg"
import JavaIcon from "../../assets/skills/java.svg"
import SpringBootIcon from "../../assets/skills/springboot.svg"
import DjangoIcon from "../../assets/skills/django.svg"
import FlutterIcon from "../../assets/skills/flutter.svg"
import PostgreSQLIcon from "../../assets/skills/postgresql.svg"
import ChromaDBIcon from "../../assets/skills/chromadb.png"
import QDrantIcon from "../../assets/skills/qdrant.svg"
import DockerIcon from "../../assets/skills/docker.svg"
import GitIcon from "../../assets/skills/git.svg"
import FigmaIcon from "../../assets/skills/figma.svg"
import LangchainIcon from "../../assets/skills/langchain.svg"
import LaravelIcon from "../../assets/skills/laravel.svg"
import PHPIcon from "../../assets/skills/php.svg"

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const allSkills = [
    { name: "React", icon: <img src={ReactIcon} alt="React" className="h-8 w-8 mx-auto" /> },
    { name: "Vue.js", icon: <img src={VueIcon} alt="Vue.js" className="h-8 w-8 mx-auto" /> },
    { name: "TypeScript", icon: <img src={TypeScriptIcon} alt="TypeScript" className="h-8 w-8 mx-auto" /> },
    { name: "JavaScript", icon: <img src={JavaScriptIcon} alt="JavaScript" className="h-8 w-8 mx-auto" /> },
    { name: "Tailwind CSS", icon: <img src={TailwindIcon} alt="Tailwind CSS" className="h-8 w-8 mx-auto" /> },
    { name: "Node.js", icon: <img src={NodeIcon} alt="Node.js" className="h-8 w-8 mx-auto" /> },
    { name: "Laravel", icon: <img src={LaravelIcon} alt="Laravel" className="h-8 w-8 mx-auto" /> },
    { name: "PHP", icon: <img src={PHPIcon} alt="PHP" className="h-8 w-8 mx-auto" /> },
    { name: "Python", icon: <img src={PythonIcon} alt="Python" className="h-8 w-8 mx-auto" /> },
    { name: "FastAPI", icon: <img src={FastAPIIcon} alt="FastAPI" className="h-8 w-8 mx-auto" /> },
    { name: "Langchain", icon: <img src={LangchainIcon} alt="Langchain" className="h-8 w-12 mx-auto dark:invert" /> },
    { name: "Java", icon: <img src={JavaIcon} alt="Java" className="h-8 w-8 mx-auto" /> },
    { name: "SpringBoot", icon: <img src={SpringBootIcon} alt="SpringBoot" className="h-8 w-8 mx-auto" /> },
    { name: "Django", icon: <img src={DjangoIcon} alt="Django" className="h-8 w-8 mx-auto dark:invert" /> },
    { name: "Flutter", icon: <img src={FlutterIcon} alt="Flutter" className="h-8 w-8 mx-auto" /> },
    { name: "PostgreSQL", icon: <img src={PostgreSQLIcon} alt="PostgreSQL" className="h-8 w-8 mx-auto" /> },
    { name: "ChromaDB", icon: <img src={ChromaDBIcon} alt="ChromaDB" className="h-8 w-8 mx-auto" /> },
    { name: "QDrant", icon: <img src={QDrantIcon} alt="QDrant" className="h-8 w-10 mx-auto" /> },
    { name: "Docker", icon: <img src={DockerIcon} alt="Docker" className="h-8 w-8 mx-auto" /> },
    { name: "Git", icon: <img src={GitIcon} alt="Git" className="h-8 w-8 mx-auto" /> },
    { name: "Figma", icon: <img src={FigmaIcon} alt="Figma" className="h-8 w-8 mx-auto" /> },
  ]

  return (
    <AnimatedSection ref={ref} className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">About Me</span>
        </motion.h2>

        {/* Skills Section - Always Scrollable */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-200 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>

          {/* Scrollable Skills Container */}
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide scroll-smooth">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="relative group cursor-pointer flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 dark:border-gray-800/20 shadow-lg text-center min-w-[100px] sm:min-w-[120px]">
                    <div className="text-xl sm:text-2xl mb-2">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm leading-tight">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-emerald-50/80 to-transparent dark:from-gray-950/80 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-emerald-50/80 to-transparent dark:from-gray-950/80 pointer-events-none" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-gray-800/20 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  My Journey
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  As an Information Systems student at the University of Indonesia, I specialize in Artificial
                  Intelligence (AI) Engineering. My work focuses on the end-to-end development of intelligent
                  applications, including hands-on experience building a Retrieval-Augmented Generation (RAG) chatbot
                  from the ground up using Large Language Models (LLMs), FastAPI, and a full-stack technology.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  My foundation in logic and systems engineering began early, evidenced by a win in a national robotics
                  competition. This experience has since evolved into a passion for creating software solutions that are
                  not only functional but also intelligent and impactful.
                </p>
                <div className="flex flex-wrap gap-4 mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <MapPin size={16} />
                    <span className="text-sm">Jakarta, Indonesia</span>
                  </motion.div>
                </div>
              </div>

              {/* Profile Image Section */}
              <div className="flex justify-center order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="relative group max-w-xs sm:max-w-sm"
                >
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Image container */}
                  <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 dark:border-gray-800/20 shadow-xl">
                    <img
                      src="foto-galen.jpg"
                      alt="Profile"
                      className="w-48 h-60 sm:w-64 sm:h-80 object-cover rounded-xl shadow-lg"
                    />

                    {/* Floating badges */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium shadow-lg"
                    >
                      AI Engineer
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium shadow-lg"
                    >
                      Full Stack Dev
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <motion.a
                href="https://drive.google.com/file/d/1nUBUIJH8QEK3NsubZ1VSxsepzFin1H4U/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base cursor-pointer"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
})

About.displayName = "About"
export default About
