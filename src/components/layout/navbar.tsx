import { useState } from "react"
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

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Project", ref: projectsRef },
    { name: "Experience", ref: experienceRef },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
        >
          galentaris
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="relative text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

          {/* Theme Toggle Button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-white/20 dark:border-gray-800/20"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      // Add a slight delay to ensure the menu closes first
                      setTimeout(() => scrollToSection(item.ref), 300)
                    }}
                    className="flex w-full py-2 pl-2 text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
