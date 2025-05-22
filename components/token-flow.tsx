"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function TokenFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Token particle class
    class Token {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 2
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = `hsl(${Math.random() * 60 + 240}, 70%, 60%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create tokens
    const tokens: Token[] = []
    for (let i = 0; i < 50; i++) {
      tokens.push(new Token())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nodes
      const nodeRadius = 40
      const nodePositions = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, label: "Quests" },
        { x: canvas.width * 0.5, y: canvas.height * 0.2, label: "cUSDT" },
        { x: canvas.width * 0.8, y: canvas.height * 0.3, label: "Items" },
        { x: canvas.width * 0.3, y: canvas.height * 0.7, label: "Trading" },
        { x: canvas.width * 0.7, y: canvas.height * 0.7, label: "Upgrades" },
      ]

      // Draw connections
      ctx.strokeStyle = "rgba(147, 51, 234, 0.3)"
      ctx.lineWidth = 2

      ctx.beginPath()
      ctx.moveTo(nodePositions[0].x, nodePositions[0].y)
      ctx.lineTo(nodePositions[1].x, nodePositions[1].y)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(nodePositions[1].x, nodePositions[1].y)
      ctx.lineTo(nodePositions[2].x, nodePositions[2].y)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(nodePositions[1].x, nodePositions[1].y)
      ctx.lineTo(nodePositions[3].x, nodePositions[3].y)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(nodePositions[1].x, nodePositions[1].y)
      ctx.lineTo(nodePositions[4].x, nodePositions[4].y)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(nodePositions[3].x, nodePositions[3].y)
      ctx.lineTo(nodePositions[4].x, nodePositions[4].y)
      ctx.stroke()

      // Draw nodes
      nodePositions.forEach((node) => {
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, nodeRadius * 0.5, node.x, node.y, nodeRadius * 1.2)
        gradient.addColorStop(0, "rgba(147, 51, 234, 0.6)")
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius * 1.2, 0, Math.PI * 2)
        ctx.fill()

        // Node circle
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = "rgba(147, 51, 234, 0.5)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2)
        ctx.stroke()

        // Node label
        ctx.fillStyle = "#6b21a8"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(node.label, node.x, node.y)
      })

      // Update and draw tokens
      tokens.forEach((token) => {
        token.update()
        token.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [mounted])

  if (!mounted) {
    return <div className="w-full h-[400px] bg-gray-100 rounded-lg"></div>
  }

  return (
    <motion.div
      className="w-full h-[400px] bg-white rounded-lg shadow-md overflow-hidden border border-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  )
}
