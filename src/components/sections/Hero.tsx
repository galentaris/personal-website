import { motion, useTransform, useScroll } from "framer-motion"
import { Bot, Code, Brain } from "lucide-react"
import { forwardRef } from "react"
import TypewriterText from "../ui/typewriter-text.tsx"
import Logo from "../ui/logo.tsx"

interface HeroProps {
  scrollToSection: (ref: { current: HTMLDivElement | null }) => void
  aboutRef: { current: HTMLDivElement | null }
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ scrollToSection, aboutRef }, ref) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="pt-32 pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="mb-8 item-center justify-center flex">
            <Logo size={32} />
          </div>

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
              title: "AI Engineer",
              icon: Bot,
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
          ].map((item) => (
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
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Computer Science Student at</p>
          <p className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            University of Indonesia
          </p>
          <button 
            onClick={() => scrollToSection({ current: aboutRef.current })}
            className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full hover:shadow-lg transition-shadow"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
})


Hero.displayName = "Hero"
export default Hero
