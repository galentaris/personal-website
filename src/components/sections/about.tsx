import { motion } from "framer-motion"
import { MapPin, Download } from "lucide-react"
import { forwardRef } from "react"
import AnimatedSection from "../ui/animated-section"
import { skills } from "../../data/skills"

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedSection ref={ref} id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Heading */}
        <div className="flex flex-col gap-2">
          <span className="section-label">01 — About</span>
          <h2 className="grad-text font-extrabold tracking-[-0.03em] text-[clamp(28px,5vw,46px)]">
            Technical Skills
          </h2>
          <p className="max-w-[56ch] text-[15px] leading-relaxed" style={{ color: "var(--fg-2)" }}>
            The stack I build with day to day — across AI systems, backend services, and product interfaces.
          </p>
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="glass flex items-center gap-2.5 rounded-[13px] pl-2.5 pr-3.5 py-2"
            >
              <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/70 dark:bg-white/5">
                <img src={skill.icon} alt={skill.name} className={`h-5 w-5 object-contain ${skill.imgClass ?? ""}`} />
              </span>
              <span className="text-[13.5px] font-semibold whitespace-nowrap" style={{ color: "var(--fg-2)" }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Journey */}
        <div className="flex flex-wrap gap-8 sm:gap-14 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-[0_1_320px] min-w-[250px] max-w-[360px] mx-auto"
          >
            <div className="glass rounded-[26px] p-3 sm:p-4">
              <img
                src="foto-galen.jpg"
                alt="Galen Taris Bariqi"
                className="w-full aspect-[4/5] object-cover rounded-[18px] shadow-lg"
              />
            </div>
            <motion.span
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute top-6 -left-4 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold"
              style={{ color: "var(--fg)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              AI Engineer
            </motion.span>
            <motion.span
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass absolute bottom-8 -right-4 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold"
              style={{ color: "var(--fg)" }}
            >
              <span className="w-2 h-2 rounded-[2px] bg-teal-500" />
              Full Stack Dev
            </motion.span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 min-w-[280px] flex flex-col gap-4"
          >
            <h3 className="font-extrabold tracking-[-0.025em] text-[clamp(22px,3.4vw,32px)]" style={{ color: "var(--fg)" }}>
              My Journey
            </h3>
            <p className="text-[15.5px] leading-[1.8] max-w-[62ch]" style={{ color: "var(--fg-2)" }}>
              As an Information Systems student at the University of Indonesia, I specialize in Artificial Intelligence
              (AI) Engineering. My work focuses on the end-to-end development of intelligent applications, including
              hands-on experience building a Retrieval-Augmented Generation (RAG) chatbot from the ground up using Large
              Language Models (LLMs), FastAPI, and full-stack technology.
            </p>
            <p className="text-[15.5px] leading-[1.8] max-w-[62ch]" style={{ color: "var(--fg-2)" }}>
              My foundation in logic and systems engineering began early, evidenced by a win in a national robotics
              competition. This experience has since evolved into a passion for creating software solutions that are not
              only functional but also intelligent and impactful.
            </p>
            <div className="flex flex-wrap gap-4 items-center mt-1">
              <span className="inline-flex items-center gap-2 text-[13.5px] font-semibold" style={{ color: "var(--fg-3)" }}>
                <MapPin size={16} className="text-emerald-600" />
                Jakarta, Indonesia
              </span>
              <motion.a
                href="https://drive.google.com/file/d/1nUBUIJH8QEK3NsubZ1VSxsepzFin1H4U/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 grad-bg text-white font-bold text-sm px-6 py-3 rounded-full shadow-[0_12px_28px_rgba(5,150,105,.32)] transition-shadow hover:shadow-[0_18px_38px_rgba(5,150,105,.42)]"
              >
                <Download size={16} />
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
