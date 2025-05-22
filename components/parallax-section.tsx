"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  const { scrollY } = useScroll()

  // The slower the speed, the less distance the element will travel when scrolling
  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], [speed * 100, -speed * 100])

  useEffect(() => {
    if (!ref) return

    const setValues = () => {
      setElementTop(ref.offsetTop)
      setClientHeight(window.innerHeight)
    }

    setValues()
    document.addEventListener("load", setValues)
    window.addEventListener("resize", setValues)

    return () => {
      document.removeEventListener("load", setValues)
      window.removeEventListener("resize", setValues)
    }
  }, [ref])

  return (
    <div ref={setRef} className={`relative overflow-hidden ${className || ""}`}>
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </div>
  )
}
