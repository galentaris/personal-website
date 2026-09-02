import { forwardRef } from "react"
import AnimatedSection from "../ui/animated-section"
import ExperienceTimeline from "../ui/experience-timeline"

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedSection ref={ref} id="experience" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-2">
          <span className="section-label">03 — Track record</span>
          <h2 className="grad-text font-extrabold tracking-[-0.03em] text-[clamp(28px,5vw,46px)]">
            Experience
          </h2>
        </div>
        <ExperienceTimeline />
      </div>
    </AnimatedSection>
  )
})

Experience.displayName = "Experience"
export default Experience
