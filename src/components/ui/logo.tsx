import { motion } from "framer-motion"

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <motion.div
      style={{ width: size, height: size }}
      className={className}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold" style={{ fontSize: Math.max(size * 0.45, 14) + 'px' }}>GT</span>
      </div>
    </motion.div>
  )
}
