"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface GradientButtonProps extends React.ComponentProps<typeof Button> {
  gradientFrom?: string
  gradientTo?: string
  hoverGradientFrom?: string
  hoverGradientTo?: string
  glowColor?: string
}

export function GradientButton({
  children,
  className,
  gradientFrom = "from-purple-500",
  gradientTo = "to-indigo-500",
  hoverGradientFrom = "from-purple-600",
  hoverGradientTo = "to-indigo-600",
  glowColor = "rgba(147, 51, 234, 0.5)",
  ...props
}: GradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group">
      <motion.div
        className="absolute -inset-1 rounded-lg opacity-70 blur-lg transition-all duration-300"
        animate={{
          background: isHovered
            ? `linear-gradient(90deg, ${glowColor} 0%, rgba(79, 70, 229, 0.5) 100%)`
            : "transparent",
        }}
      />
      <Button
        className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:bg-gradient-to-r hover:${hoverGradientFrom} hover:${hoverGradientTo} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
