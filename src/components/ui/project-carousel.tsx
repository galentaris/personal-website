import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Image from "./image"

const EnhancedProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = [
    {
      id: 1,
      title: "KALILINK - Social Platform",
      description:
        "A comprehensive social media platform built with React Native and Node.js, featuring real-time messaging, post sharing, and user authentication.",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Firebase"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/galentaris/kalilink",
      demo: "https://kalilink-demo.vercel.app",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description:
        "An intelligent dashboard that uses machine learning to analyze business data and provide actionable insights with beautiful visualizations.",
      tech: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/galentaris/ai-dashboard",
      demo: "https://ai-dashboard-demo.vercel.app",
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Smart Campus System",
      description:
        "A comprehensive campus management system with features for student enrollment, course management, and academic tracking.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/galentaris/smart-campus",
      demo: "https://smart-campus-demo.vercel.app",
      color: "from-green-500 to-lime-500",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative">
      <div className="relative max-w-6xl mx-auto">
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-xl backdrop-blur-sm"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="text-gray-700 dark:text-gray-300" size={24} />
        </motion.button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-800/20 shadow-2xl mx-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {projects[currentIndex].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className={`px-3 py-1 bg-gradient-to-r ${projects[currentIndex].color} text-white text-sm rounded-full font-medium`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={projects[currentIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${projects[currentIndex].color} text-white rounded-lg font-medium`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${projects[currentIndex].color} rounded-xl blur-2xl opacity-25`}
              />
              <Image
                src={projects[currentIndex].image || "/placeholder.svg"}
                width={600}
                height={400}
                alt={projects[currentIndex].title}
                className="relative rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-xl backdrop-blur-sm"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="text-gray-700 dark:text-gray-300" size={24} />
        </motion.button>
      </div>

      <div className="flex justify-center mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default EnhancedProjectCarousel
