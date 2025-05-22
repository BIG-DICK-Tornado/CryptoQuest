"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FloatingElementsProps {
  count?: number
  className?: string
}

export function FloatingElements({ count = 10, className }: FloatingElementsProps) {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setElements(newElements)
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-300/20 to-blue-300/10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + element.delay,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
          }}
        />
      ))}
    </div>
  )
}
