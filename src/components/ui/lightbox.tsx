import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export interface LightboxImage {
  src: string
  label?: string
}

interface LightboxProps {
  image: LightboxImage | null
  onClose: () => void
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (image) {
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center gap-4 p-5 sm:p-12 cursor-zoom-out"
          style={{ background: "rgba(3,7,18,.86)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full text-white/80 hover:text-white"
            style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close"
          >
            <X size={20} />
          </motion.button>

          <motion.img
            key={image.src}
            src={image.src}
            alt={image.label ?? "Preview"}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
            className="max-h-[80vh] w-auto max-w-[980px] rounded-2xl object-contain shadow-2xl"
            style={{ border: "1px solid rgba(255,255,255,.16)" }}
          />
          {image.label && (
            <span className="font-mono text-xs text-emerald-100/70">{image.label}</span>
          )}
          <span className="font-mono text-[11px] text-emerald-100/50">click anywhere to close</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
