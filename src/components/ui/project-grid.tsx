import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { projects, type Project } from "../../data/projects"
import Lightbox, { type LightboxImage } from "./lightbox"

export default function ProjectGrid() {
  const [active, setActive] = useState<Project | null>(null)
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null)

  // Lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [active])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightbox) setActive(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox])

  return (
    <>
      {/* Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))]">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="glass group text-left rounded-[22px] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_26px_54px_rgba(5,150,105,.24)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b" style={{ borderColor: "var(--hair)" }}>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="absolute top-3 left-3 glass rounded-lg px-2.5 py-1 font-mono text-[10px]"
                style={{ color: "var(--fg-2)" }}
              >
                {p.year}
              </span>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2.5 flex-1">
              <h3 className="font-bold text-[17px] tracking-[-0.02em]" style={{ color: "var(--fg)" }}>
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed flex-1" style={{ color: "var(--fg-3)" }}>
                {p.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {p.cardTags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10.5px] px-2.5 py-1 rounded-full border"
                    style={{ background: "rgba(13,148,136,.12)", color: "#0d9488", borderColor: "rgba(13,148,136,.22)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto p-4 sm:p-8 lg:p-12"
            style={{ background: "rgba(3,7,18,.62)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.2, 0.7, 0.3, 1] }}
              className="glass w-full max-w-[920px] rounded-[26px] overflow-hidden shadow-2xl"
              style={{ color: "var(--fg)" }}
            >
              {/* Cover */}
              <div className="relative aspect-[16/8] border-b overflow-hidden" style={{ borderColor: "var(--hair)" }}>
                <img
                  src={active.image}
                  alt={active.title}
                  onClick={() => setLightbox({ src: active.image, label: active.title })}
                  className="w-full h-full object-cover cursor-zoom-in"
                />
                <button
                  onClick={() => setActive(null)}
                  className="glass absolute top-3.5 right-3.5 grid place-items-center w-9 h-9 rounded-full hover:text-emerald-600"
                  style={{ color: "var(--fg-2)" }}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-5 sm:p-8 flex flex-col gap-5">
                <div className="flex flex-wrap gap-3 items-baseline justify-between">
                  <h3 className="grad-text font-extrabold tracking-[-0.03em] text-[clamp(22px,3.4vw,30px)]">
                    {active.title}
                  </h3>
                  <span
                    className="font-mono text-[11px] px-2.5 py-1.5 rounded-full border"
                    style={{ background: "var(--surface-2)", borderColor: "var(--border-c)", color: "var(--fg-3)" }}
                  >
                    {active.year}
                  </span>
                </div>

                <p className="text-[15px] leading-[1.8] max-w-[70ch]" style={{ color: "var(--fg-2)" }}>
                  {active.description}
                </p>

                {/* Gallery (extra images, if any) */}
                {active.gallery && active.gallery.length > 0 && (
                  <div className="flex gap-2.5 flex-wrap">
                    {active.gallery.map((g, idx) => (
                      <button
                        key={idx}
                        onClick={() => setLightbox({ src: g, label: `${active.title} — ${idx + 1}` })}
                        className="flex-1 min-w-[150px] max-w-[220px] aspect-[4/3] rounded-[14px] overflow-hidden border transition-transform hover:scale-[1.03]"
                        style={{ borderColor: "var(--border-c)" }}
                      >
                        <img src={g} alt={`${active.title} ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-col gap-2.5">
                  <span className="section-label" style={{ color: "var(--fg-3)" }}>
                    Tech stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1.5 rounded-full border"
                        style={{ background: "rgba(13,148,136,.12)", color: "#0d9488", borderColor: "rgba(13,148,136,.22)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {active.links && active.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-5 border-t" style={{ borderColor: "var(--hair)" }}>
                    {active.links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-2 font-bold text-[13.5px] px-5 py-3 rounded-full transition-colors ${
                          link.type === "github"
                            ? "bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600"
                            : "grad-bg text-white"
                        }`}
                      >
                        {link.type === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
