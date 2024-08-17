import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  const segments = 50
  const rotations = 5

  return (
    <div className="flex h-60 w-60 items-center justify-center">
      <svg width="100%" height="100%" viewBox="-100 -100 200 200">
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(segments)].map((_, i) => {
            const angle = (i / segments) * Math.PI * 2 * rotations
            const radius = 5 + (90 * i) / segments
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={2 + (i / segments) * 3}
                fill="#142A91"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: (i / segments) * 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1,
                }}
              />
            )
          })}
        </motion.g>
      </svg>
    </div>
  )
}

export default Loading