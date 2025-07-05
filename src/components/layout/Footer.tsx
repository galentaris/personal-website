import { motion } from "framer-motion"
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 via-teal-900 to-green-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-white/80 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Copyright © {new Date().getFullYear()} Galen Taris Bariqi. All rights reserved.
          </motion.p>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://instagram.com/galentaris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-white/70 hover:text-lime-400 transition-colors duration-300"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/galentaris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-white/70 hover:text-teal-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/galentaris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-white/70 hover:text-gray-300 transition-colors duration-300"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
