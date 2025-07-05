import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import {
  Moon,
  Sun,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Brain,
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Calendar,
  Award,
  Users,
  Zap,
} from "lucide-react"
import { useTheme } from "../components/theme-provider"
import Image from "../components/ui/image"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const scrollToSection = (ref: { current: HTMLDivElement | null }) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-950 dark:via-emerald-950 dark:to-teal-950 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-lime-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            galentaris
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {[
              { name: "Home", ref: homeRef },
              { name: "About", ref: aboutRef },
              { name: "Projects", ref: projectsRef },
              { name: "Experience", ref: experienceRef },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="relative text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    GT
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 bg-clip-text text-transparent">
                Galen Taris Bariqi
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-16"
            >
              <TypewriterText
                texts={["Exploring Technology", "Building Solutions", "Creating Impact"]}
                className="text-2xl text-gray-600 dark:text-gray-400"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Data Science",
                icon: Database,
                color: "from-emerald-500 to-green-500",
                delay: 0.8,
              },
              {
                title: "Fullstack Developer",
                icon: Code,
                color: "from-teal-500 to-cyan-500",
                delay: 1.0,
              },
              {
                title: "Machine Learning",
                icon: Brain,
                color: "from-green-500 to-lime-500",
                delay: 1.2,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                />
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-800/20 shadow-xl">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">
                    {item.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">BS Computer Science Student at</p>
            <p className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              University of Indonesia
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <AnimatedSection ref={aboutRef} className="py-20 relative">
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
              { name: "React & Next.js", icon: "⚛️", color: "from-emerald-500 to-teal-500" },
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
                    Initially a Computer Science student at University of Indonesia, my journey in technology began with
                    an early passion that led to winning a robotics competition. While my career aspirations have
                    evolved towards software development and data analytics, this experience cemented my passion for IT.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    I'm currently dedicated to honing my skills in web development, machine learning, and data science,
                    striving to leverage these abilities to create meaningful solutions and grow personally throughout
                    my college journey.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {[
                      { icon: Mail, text: "galen.taris@ui.ac.id" },
                      { icon: MapPin, text: "Jakarta, Indonesia" },
                      { icon: Calendar, text: "Available for internships" },
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

      {/* Projects Section */}
      <AnimatedSection
        ref={projectsRef}
        className="py-20 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>

          <EnhancedProjectCarousel />
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection ref={experienceRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Experience & Achievements
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <EnhancedExperienceTimeline />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-900 via-teal-900 to-green-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-white/80 mb-4 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Copyright © {new Date().getFullYear()} Galen Taris Bariqi. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://instagram.com/galentaris"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white/70 hover:text-lime-400 transition-colors duration-300"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/galentaris"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-white/70 hover:text-teal-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/galentaris"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white/70 hover:text-gray-300 transition-colors duration-300"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Enhanced Components
const TypewriterText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-0.5 h-6 bg-blue-600 ml-1"
      />
    </span>
  )
}

const AnimatedSection = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}

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

const EnhancedExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "TechCorp Indonesia",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      description:
        "Developed responsive web applications using React and Next.js. Collaborated with the design team to implement UI/UX improvements and increased user engagement by 25%.",
      achievements: ["Built 3 major features", "Improved performance by 40%", "Mentored 2 junior developers"],
      icon: Code,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      role: "Data Science Research Assistant",
      company: "UI Machine Learning Lab",
      period: "Jan 2023 - May 2023",
      type: "Research",
      description:
        "Assisted in data collection, cleaning, and analysis for research projects. Implemented machine learning models for predictive analytics with 85% accuracy.",
      achievements: ["Published 1 research paper", "Developed ML models", "Processed 10M+ data points"],
      icon: Brain,
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: 3,
      role: "Robotics Team Leader",
      company: "National Robotics Championship",
      period: "Sep 2022 - Nov 2022",
      type: "Competition",
      description:
        "Led a team of 5 members to victory in the national robotics competition, designing and programming an autonomous robot for complex navigation tasks.",
      achievements: ["1st Place Winner", "Led team of 5", "Autonomous navigation system"],
      icon: Award,
      color: "from-green-500 to-lime-500",
    },
    {
      id: 4,
      role: "Full Stack Developer",
      company: "Freelance Projects",
      period: "Mar 2022 - Present",
      type: "Freelance",
      description:
        "Developed custom web applications for small businesses and startups. Specialized in React, Node.js, and database design with focus on scalable solutions.",
      achievements: ["10+ projects completed", "100% client satisfaction", "Generated $15K+ revenue"],
      icon: Users,
      color: "from-lime-500 to-green-500",
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`relative ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"} md:w-1/2`}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute top-8 w-px h-full bg-gradient-to-b from-emerald-500 to-teal-500 left-1/2 transform -translate-x-1/2" />

          {/* Timeline dot */}
          <motion.div
            className={`hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
            whileHover={{ scale: 1.5 }}
          />

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-2xl opacity-10`} />

            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                  <exp.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Zap size={16} className="text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`} />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
