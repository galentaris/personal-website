import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "../theme-provider"

interface NavbarProps {
  scrollToSection: (ref: { current: HTMLDivElement | null }) => void
  homeRef: React.RefObject<HTMLDivElement>
  aboutRef: React.RefObject<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement>
  experienceRef: React.RefObject<HTMLDivElement>
}

export default function Navbar({ scrollToSection, homeRef, aboutRef, projectsRef, experienceRef }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [active, setActive] = useState("Home")

  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Projects", ref: projectsRef },
    { name: "Experience", ref: experienceRef },
  ]

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navItems.find((n) => n.ref.current === entry.target)
            if (match) setActive(match.name)
          }
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    navItems.forEach((n) => n.ref.current && observer.observe(n.ref.current))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[60] border-b"
      style={{ background: "var(--nav)", borderColor: "var(--hair)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center gap-4">
        {/* Brand */}
        <motion.button
          onClick={() => scrollToSection(homeRef)}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.02 }}
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl grad-bg text-white font-extrabold text-sm tracking-wider shadow-[0_6px_18px_rgba(5,150,105,.35)]">
            GT
          </span>
          <span className="hidden sm:block font-bold text-[14.5px] tracking-tight" style={{ color: "var(--fg)" }}>
            Galen Taris Bariqi
          </span>
        </motion.button>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden md:flex items-center gap-1"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="relative px-3 py-2 text-[13.5px] font-semibold transition-colors"
                style={{ color: active === item.name ? "#0d9488" : "var(--fg-2)" }}
              >
                {item.name}
                {active === item.name && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full grad-bg"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Theme toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="glass flex items-center gap-2 rounded-full pl-2.5 pr-3.5 py-2 text-xs font-semibold"
            style={{ color: "var(--fg-2)" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <span className="grid place-items-center w-5 h-5">
              {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-emerald-600" />}
            </span>
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass p-2 rounded-full text-emerald-600 dark:text-emerald-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-b"
            style={{ background: "var(--nav)", borderColor: "var(--hair)" }}
          >
            <div className="max-w-[1180px] mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => scrollToSection(item.ref), 250)
                  }}
                  className="flex w-full py-2.5 px-3 text-left font-semibold rounded-lg transition-colors"
                  style={{ color: active === item.name ? "#0d9488" : "var(--fg-2)" }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
