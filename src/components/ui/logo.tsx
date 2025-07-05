import { motion } from "framer-motion"

interface LogoProps {
  size?: number
  animated?: boolean
}

const Logo = ({ size = 32, animated = true }: LogoProps) => {
  const containerSize = size;
  const fontSize = size * 0.125; // 4xl is approximately 2.25rem or 36px

  const LogoContent = () => (
    <div className={`w-${containerSize} h-${containerSize} rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 p-1 shadow-2xl`}>
      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
        <span className={`text-${fontSize}xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent`}>
          GT
        </span>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
};

export default Logo;
