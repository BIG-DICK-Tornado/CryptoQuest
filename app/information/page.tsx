"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, FileText, Shield } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { GradientButton } from "@/components/gradient-button"
import { AnimatedCard } from "@/components/animated-card"

export default function InformationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-blue-50 py-12">
          <AnimatedBackground />
          <FloatingElements count={15} />
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="container px-4 py-12 mx-auto relative z-10">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <Badge variant="outline" className="mb-4 px-3 py-1 text-sm bg-blue-100 text-blue-800 border-blue-300">
                  Information
                </Badge>
                <motion.h1
                  className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  About CryptoQuest USDT
                </motion.h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive information about our educational blockchain project
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <ScrollReveal direction="left" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Project Overview</h2>
                  <p className="text-lg mb-4">
                    CryptoQuest USDT is a 100% educational project designed to teach players about token mechanics in a
                    controlled environment. Our mission is to make blockchain education accessible and engaging through
                    gamified learning.
                  </p>
                  <p className="mb-6">
                    The project combines elements of role-playing games with real blockchain mechanics, allowing users
                    to learn by doing without financial risk.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <GradientButton asChild>
                      <Link href="/token">
                        <FileText className="mr-2 h-4 w-4" />
                        Token Details
                      </Link>
                    </GradientButton>
                    <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50">
                      <Link href="/lore">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Game Lore
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <ParallaxSection speed={0.2}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative aspect-video overflow-hidden rounded-lg shadow-inner">
                      <Image
                        src="/IMAGE2.1.png"
                        alt="CryptoQuest USDT Overview"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-xl font-bold">Educational Blockchain Gaming</h3>
                          <p className="text-sm">Learn crypto concepts through gameplay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxSection>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mb-16">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <AnimatedCard
                    hoverEffect="lift"
                    className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-100"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple-600" />
                        Risk-Free Learning
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Learn about cryptocurrency mechanics without financial risk. Our educational token exists solely
                        within the game ecosystem.
                      </p>
                    </CardContent>
                  </AnimatedCard>

                  <AnimatedCard
                    hoverEffect="glow"
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                        Interactive Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Complete quests and missions that teach real-world blockchain concepts in an engaging, gamified
                        environment.
                      </p>
                    </CardContent>
                  </AnimatedCard>

                  <AnimatedCard
                    hoverEffect="border"
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-purple-600" />
                        Authentic Mechanics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Experience token mechanics that mirror real-world cryptocurrencies, including trading, liquidity
                        pools, and tokenomics.
                      </p>
                    </CardContent>
                  </AnimatedCard>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mb-16">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Educational Objectives</h2>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative">
                    <ul className="space-y-4">
                      <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <div>
                          <h3 className="font-medium">Understanding Token Fundamentals</h3>
                          <p className="text-muted-foreground">
                            Learn how tokens are created, distributed, and valued in blockchain ecosystems.
                          </p>
                        </div>
                      </motion.li>
                      <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <div>
                          <h3 className="font-medium">Trading and Exchange Mechanics</h3>
                          <p className="text-muted-foreground">
                            Experience how decentralized exchanges work through our in-game DEX (DragonSwap).
                          </p>
                        </div>
                      </motion.li>
                      <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <div>
                          <h3 className="font-medium">Security and Risk Management</h3>
                          <p className="text-muted-foreground">
                            Learn to identify common crypto scams and security risks in a safe environment.
                          </p>
                        </div>
                      </motion.li>
                      <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          4
                        </div>
                        <div>
                          <h3 className="font-medium">Tokenomics and Economic Models</h3>
                          <p className="text-muted-foreground">
                            Understand how token supply, demand, and utility affect value in blockchain ecosystems.
                          </p>
                        </div>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="text-center">
                <GradientButton asChild size="lg">
                  <Link href="/faq">
                    Have Questions?
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </GradientButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <div className="bg-red-100 py-3 text-center text-red-800 font-medium border-t border-red-200">
        Not a real token. Part of DungeonSwap's crypto education game.
      </div>
    </div>
  )
}
