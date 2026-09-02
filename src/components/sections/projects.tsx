import { forwardRef } from "react"
import AnimatedSection from "../ui/animated-section"
import ProjectGrid from "../ui/project-grid"

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedSection ref={ref} id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient orb */}
      <div
        className="orb animate-orb-b top-[10%] right-[-14%] w-[40vw] h-[40vw]"
        style={{ background: "radial-gradient(circle, #2dd4bf, transparent 70%)" }}
      />
      <div className="relative max-w-[1180px] mx-auto flex flex-col gap-8 sm:gap-11">
        <div className="flex flex-col gap-2">
          <span className="section-label">02 — Work</span>
          <h2 className="grad-text font-extrabold tracking-[-0.03em] text-[clamp(28px,5vw,46px)]">
            Featured Projects
          </h2>
          <p className="max-w-[56ch] text-[15px] leading-relaxed" style={{ color: "var(--fg-2)" }}>
            Select a project to see the full case, stack, and links.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </AnimatedSection>
  )
})

Projects.displayName = "Projects"
export default Projects
