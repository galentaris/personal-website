import { forwardRef } from "react"
import { motion } from "framer-motion"
import AnimatedSection from "../ui/animated-section"
import EnhancedProjectCarousel from "../ui/project-carousel"

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedSection
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 px-4"
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
  )
})

Projects.displayName = "Projects"
export default Projects
