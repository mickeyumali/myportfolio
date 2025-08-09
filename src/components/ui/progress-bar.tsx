import { motion, useScroll, useSpring } from 'framer-motion'

export default function ProgressBar() {
  const {scrollYProgress } = useScroll()
  const progressAnimation = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="ficked top-0 left-0 right-0 h-1 bg-primary z-50"
      style={{ scaleX: progressAnimation }}
    />
  )
}
