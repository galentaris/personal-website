import { motion } from "framer-motion"
import { Bot, Code, Brain, ArrowDown } from "lucide-react"
import { forwardRef } from "react"
import TypewriterText from "../ui/typewriter-text"

interface HeroProps {
  scrollToSection: (ref: { current: HTMLDivElement | null }) => void
  aboutRef: { current: HTMLDivElement | null }
}

const roles = [
  { title: "AI Engineer", note: "RAG systems, LLM tooling, evaluation", icon: Bot, glow: "#34d399" },
  { title: "Fullstack Developer", note: "TypeScript, Laravel, SpringBoot", icon: Code, glow: "#2dd4bf" },
  { title: "Machine Learning", note: "Intelligent, impactful solutions", icon: Brain, glow: "#a3e635" },
]

const orbs = [
  { style: "top-[-12%] left-[-6%] w-[44vw] h-[44vw]", color: "#34d399", anim: "animate-orb-a" },
  { style: "top-[8%] right-[-10%] w-[40vw] h-[40vw]", color: "#2dd4bf", anim: "animate-orb-b" },
  { style: "bottom-[-18%] left-[26%] w-[36vw] h-[36vw]", color: "#a3e635", anim: "animate-orb-a" },
  { style: "bottom-[2%] right-[14%] w-[26vw] h-[26vw]", color: "#06b6d4", anim: "animate-orb-b" },
]

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ scrollToSection, aboutRef }, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((o, i) => (
          <div
            key={i}
            className={`orb ${o.style} ${o.anim}`}
            style={{ background: `radial-gradient(circle, ${o.color}, transparent 70%)` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grad3-text font-extrabold leading-[1.02] tracking-[-0.035em] text-balance text-[clamp(40px,9vw,84px)]"
        >
          Galen Taris Bariqi
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="min-h-[1.6em]"
        >
          <TypewriterText
            texts={["Exploring Technology", "Building Solutions", "Creating Impact"]}
            className="font-mono font-medium text-[clamp(15px,2.4vw,22px)]"
          />
        </motion.div>

        {/* Role cards */}
        <div className="flex flex-wrap justify-center gap-3.5 sm:gap-5 w-full mt-1">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass relative overflow-hidden flex-1 min-w-[200px] max-w-[280px] rounded-[20px] px-5 py-6 flex flex-col items-center gap-3"
            >
              <div
                className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-full blur-[34px] opacity-50"
                style={{ background: `radial-gradient(circle, ${role.glow}, transparent 70%)` }}
              />
              <span className="relative grid place-items-center w-[46px] h-[46px] rounded-[14px] grad-bg shadow-[0_8px_22px_rgba(5,150,105,.3)]">
                <role.icon className="text-white" size={22} />
              </span>
              <span className="relative font-bold text-[15.5px]" style={{ color: "var(--fg)" }}>
                {role.title}
              </span>
              <span className="relative text-[12.5px] leading-relaxed" style={{ color: "var(--fg-3)" }}>
                {role.note}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Subtitle + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-5 mt-2"
        >
          <p className="text-[clamp(13.5px,1.8vw,16px)] font-medium" style={{ color: "var(--fg-3)" }}>
            <span className="grad-text font-semibold">Fresh Graduate at Computer Science University of Indonesia</span>
          </p>
          <motion.button
            onClick={() => scrollToSection({ current: aboutRef.current })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 grad-bg text-white font-bold text-[14.5px] px-7 py-3.5 rounded-full shadow-[0_14px_32px_rgba(5,150,105,.35)] transition-shadow hover:shadow-[0_20px_42px_rgba(5,150,105,.45)]"
          >
            Learn More
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"
export default Hero
