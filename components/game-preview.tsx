"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function GamePreview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <div className="absolute inset-0 bg-gray-100"></div>
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image src="/placeholder.svg?height=600&width=1000" alt="Game preview" fill className="object-cover" />

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-4 rounded-full cursor-pointer hover:bg-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-600"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold mb-1">DungeonSwap Gameplay Teaser</h3>
            <p className="text-sm opacity-90">Watch how players earn cUSDT through quests and battles</p>
          </div>
        </div>
      </div>
    </div>
  )
}
