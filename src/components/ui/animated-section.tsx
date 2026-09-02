import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  [key: string]: any
}

const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className = "", ...props }, forwardedRef) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const combinedRef = (node: HTMLDivElement) => {
      // Apply to both refs
      ref.current = node
      if (typeof forwardedRef === "function") {
        forwardedRef(node)
      } else if (forwardedRef) {
        forwardedRef.current = node
      }
    }

    // Reveal once, as soon as a small part enters the viewport. Using a small
    // amount + once avoids tall sections staying hidden when 20% never fits.
    const isInView = useInView(ref, { once: true, amount: 0.08 })
    const controls = useAnimation()

    useEffect(() => {
      if (isInView) {
        controls.start("visible")
      }
    }, [controls, isInView])

    return (
      <motion.section
        ref={combinedRef}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={className}
        {...props}
      >
        {children}
      </motion.section>
    )
  },
)

AnimatedSection.displayName = "AnimatedSection"
export default AnimatedSection
