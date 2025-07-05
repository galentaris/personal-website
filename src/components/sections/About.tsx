import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { forwardRef } from "react"
import AnimatedSection from "../ui/animated-section.tsx"

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedSection ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {[
            { name: "React & Node.js", icon: "⚛️", color: "from-emerald-500 to-teal-500" },
            { name: "Python & ML", icon: "🐍", color: "from-green-500 to-lime-500" },
            { name: "Database Design", icon: "🗄️", color: "from-teal-500 to-cyan-500" },
            { name: "UI/UX Design", icon: "🎨", color: "from-lime-500 to-green-500" },
            { name: "Cloud Computing", icon: "☁️", color: "from-cyan-500 to-emerald-500" },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                rotateZ: 5,
                transition: { duration: 0.3 },
              }}
              className="relative group cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-300`}
              />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-800/20 shadow-lg text-center">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-800/20 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  My Journey
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  As an Information Systems student at the University of Indonesia, I specialize in Artificial Intelligence 
                  (AI) Engineering. My work focuses on the end-to-end development of intelligent applications, including 
                  hands-on experience building a Retrieval-Augmented Generation (RAG) chatbot from the ground up using Large 
                  Language Models (LLMs), FastAPI, and a full-stack technology.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  My foundation in logic and systems engineering began early, evidenced by a win in a national 
                  robotics competition. This experience has since evolved into a passion for creating software 
                  solutions that are not only functional but also intelligent and impactful.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    { icon: MapPin, text: "Jakarta, Indonesia" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <item.icon size={16} />
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { skill: "Frontend Development", level: 90 },
                  { skill: "Backend Development", level: 85 },
                  { skill: "Data Science", level: 80 },
                  { skill: "Machine Learning", level: 75 },
                  { skill: "UI/UX Design", level: 70 },
                ].map((item, index) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
})

About.displayName = "About"
export default About
