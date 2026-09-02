import { motion } from "framer-motion"
import { Instagram, Linkedin, Github } from "lucide-react"

const socials = [
  { name: "Instagram", href: "https://instagram.com/galentaris", Icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/galen-taris-bariqi/", Icon: Linkedin },
  { name: "GitHub", href: "https://github.com/galentaris", Icon: Github },
]

export default function Footer() {
  return (
    <footer
      className="mt-12 sm:mt-20 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8"
      style={{ background: "linear-gradient(120deg,#022c22,#065f46 45%,#0f766e)", color: "#d1fae5" }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-wrap gap-6 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <span className="flex items-center gap-2.5 font-extrabold text-base text-white">
            <span
              className="grid place-items-center w-8 h-8 rounded-[10px] text-[13px]"
              style={{ background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.22)" }}
            >
              GT
            </span>
            Galen Taris Bariqi
          </span>
          <span className="text-[13px] text-emerald-100/75">
            AI Engineer · Fullstack Developer · Jakarta, Indonesia
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-2.5"
        >
          {socials.map(({ name, href, Icon }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="grid place-items-center w-11 h-11 rounded-[14px] text-emerald-50 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)" }}
            >
              <Icon size={20} />
              <span className="sr-only">{name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div
        className="max-w-[1180px] mx-auto mt-10 pt-5 border-t flex flex-wrap gap-3 justify-between text-[12.5px] text-emerald-100/70"
        style={{ borderColor: "rgba(255,255,255,.14)" }}
      >
        <span>© {new Date().getFullYear()} Galen Taris Bariqi. All rights reserved.</span>
        <span className="font-mono">Built with React · Tailwind · Framer Motion</span>
      </div>
    </footer>
  )
}
