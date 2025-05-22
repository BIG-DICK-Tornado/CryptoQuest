"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  hoverEffect?: "lift" | "glow" | "border" | "scale" | "tilt"
  glowColor?: string
  borderColor?: string
}

export function AnimatedCard({
  children,
  className,
  hoverEffect = "lift",
  glowColor = "rgba(147, 51, 234, 0.3)",
  borderColor = "rgba(147, 51, 234, 0.7)",
  ...props
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getHoverStyles = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          y: isHovered ? -8 : 0,
          boxShadow: isHovered ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "none",
        }
      case "glow":
        return {
          boxShadow: isHovered ? `0 0 20px 5px ${glowColor}` : "none",
        }
      case "border":
        return {
          boxShadow: isHovered ? `0 0 0 2px ${borderColor}` : "none",
        }
      case "scale":
        return {
          scale: isHovered ? 1.03 : 1,
        }
      case "tilt":
        return {
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          perspective: "1000px",
        }
      default:
        return {}
    }
  }

  return (
    <motion.div
      className="h-full"
      animate={getHoverStyles()}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={`h-full transition-colors ${className}`} {...props}>
        {children}
      </Card>
    </motion.div>
  )
}
