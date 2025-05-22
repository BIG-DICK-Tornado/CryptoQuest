"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"

export function Testimonials() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Crypto Beginner",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "DungeonSwap made learning about crypto fun! I finally understand how liquidity pools work without risking real money.",
      stars: 5,
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Game Developer",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "The educational approach is brilliant. Players learn by doing, and the fantasy setting makes complex concepts accessible.",
      stars: 5,
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "DeFi Enthusiast",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Even as someone familiar with DeFi, I found the game mechanics engaging and the educational content accurate.",
      stars: 4,
    },
  ]

  if (!mounted) {
    return (
      <div className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">Adventurer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="flex-1">{testimonial.content}</p>
                  <div className="flex mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-5 h-5"></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <ScrollReveal delay={0.3}>
      <div className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">Adventurer Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-8">
            Hear what our early access players have to say about their experience with CryptoQuest USDT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={0.2 + index * 0.1} direction={index === 1 ? "up" : "left"}>
              <AnimatedCard
                hoverEffect={index === 0 ? "lift" : index === 1 ? "glow" : "border"}
                className="h-full bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-100"
                      >
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="flex-1">{testimonial.content}</p>
                    <div className="flex mt-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              i < testimonial.stars ? "text-amber-400 fill-amber-400" : "text-gray-300"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
