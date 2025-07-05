import type React from "react"

import { motion } from "framer-motion"
import { type ReactNode, useRef } from "react"
import Navbar from "./navbar"
import Footer from "./footer"

interface LayoutProps {
  children: (props: {
    homeRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    experienceRef: React.RefObject<HTMLDivElement>
    scrollToSection: (ref: { current: HTMLDivElement | null }) => void
  }) => ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: { current: HTMLDivElement | null }) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-950 dark:via-emerald-950 dark:to-teal-950 transition-all duration-500 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-400/10 to-lime-400/10 rounded-full blur-3xl"
        />
      </div>

      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef as React.RefObject<HTMLDivElement>}
        aboutRef={aboutRef as React.RefObject<HTMLDivElement>}
        projectsRef={projectsRef as React.RefObject<HTMLDivElement>}
        experienceRef={experienceRef as React.RefObject<HTMLDivElement>}
      />

      {children({
        homeRef: homeRef as React.RefObject<HTMLDivElement>,
        aboutRef: aboutRef as React.RefObject<HTMLDivElement>,
        projectsRef: projectsRef as React.RefObject<HTMLDivElement>,
        experienceRef: experienceRef as React.RefObject<HTMLDivElement>,
        scrollToSection,
      })}

      <Footer />
    </main>
  )
}
