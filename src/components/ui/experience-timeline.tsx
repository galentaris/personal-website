import { useState } from "react"
import { motion } from "framer-motion"
import { work, organization, type Experience } from "../../data/experience"
import Lightbox, { type LightboxImage } from "./lightbox"

type Tab = "work" | "org"

function TimelineEntry({
  exp,
  index,
  onPhoto,
}: {
  exp: Experience
  index: number
  onPhoto: (img: LightboxImage) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass relative rounded-[20px] p-5 sm:p-7"
    >
      {/* Timeline dot */}
      <span
        className="absolute top-8 w-3.5 h-3.5 rounded-full grad-bg"
        style={{ left: "calc(-1 * clamp(20px,3vw,34px) - 6px)", boxShadow: "0 0 0 4px var(--surface), 0 0 0 5px rgba(13,148,136,.3)" }}
      />

      <div className="flex flex-wrap gap-2.5 items-baseline justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-[18px] tracking-[-0.02em]" style={{ color: "var(--fg)" }}>
            {exp.role}
          </h3>
          <span className="text-[14px] font-semibold" style={{ color: "#0d9488" }}>
            {exp.org}
          </span>
        </div>
        <span
          className="font-mono text-[11px] px-2.5 py-1.5 rounded-full border whitespace-nowrap"
          style={{ background: "var(--surface-2)", borderColor: "var(--border-c)", color: "var(--fg-3)" }}
        >
          {exp.period}
        </span>
      </div>

      <ul className="mt-3.5 flex flex-col gap-2.5">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-[14px] leading-[1.65]" style={{ color: "var(--fg-2)" }}>
            <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full grad-bg" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Photo evidence */}
      {exp.photos.length > 0 && (
        <div className="mt-4 pt-4 border-t border-dashed flex flex-col gap-2.5" style={{ borderColor: "var(--hair)" }}>
          <span className="section-label" style={{ color: "var(--fg-3)" }}>
            Photo evidence
          </span>
          <div className="flex flex-wrap gap-2.5">
            {exp.photos.map((ph, i) => (
              <button
                key={i}
                onClick={() => onPhoto({ src: ph.src, label: ph.label })}
                className="w-[132px] h-[88px] rounded-xl overflow-hidden border transition-transform hover:scale-105"
                style={{ borderColor: "var(--border-c)" }}
              >
                <img src={ph.src} alt={ph.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const [tab, setTab] = useState<Tab>("work")
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null)
  const entries = tab === "work" ? work : organization

  const tabBase =
    "relative rounded-full px-6 py-2.5 text-[13.5px] font-bold transition-colors z-10"

  return (
    <>
      {/* Tabs */}
      <div className="glass inline-flex self-start gap-1 p-1.5 rounded-full mb-8">
        {(["work", "org"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={tabBase}
            style={{ color: tab === t ? "#fff" : "var(--fg-3)" }}
          >
            {tab === t && (
              <motion.span
                layoutId="exp-tab"
                className="absolute inset-0 rounded-full grad-bg shadow-[0_8px_20px_rgba(5,150,105,.34)]"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {t === "work" ? "Work" : "Organization"}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative pl-[clamp(20px,3vw,34px)]">
        <div
          className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full"
          style={{ background: "linear-gradient(180deg,#059669,#0d9488 60%,transparent)" }}
        />
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          {entries.map((exp, index) => (
            <TimelineEntry key={exp.id} exp={exp} index={index} onPhoto={setLightbox} />
          ))}
        </motion.div>
      </div>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
