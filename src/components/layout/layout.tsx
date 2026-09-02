import type React from "react"
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
    <main
      className="min-h-screen overflow-x-hidden transition-colors duration-500"
      style={{ background: "var(--bg-grad)", color: "var(--fg)" }}
    >
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
