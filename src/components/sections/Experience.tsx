import { forwardRef } from "react"
import { motion } from "framer-motion"
import AnimatedSection from "../ui/animated-section.tsx"
import EnhancedExperienceTimeline from "../ui/experience-timeline.tsx"

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedSection ref={ref} className="py-20">
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
  )
})

Experience.displayName = "Experience"
export default Experience
