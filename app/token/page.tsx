"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TokenDashboard } from "@/components/token-dashboard"
import { TokenFlow } from "@/components/token-flow"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingElements } from "@/components/floating-elements"
import { GradientButton } from "@/components/gradient-button"
import { AnimatedCard } from "@/components/animated-card"

export default function TokenPage() {
  const [balance, setBalance] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="relative bg-gradient-to-b from-purple-50 to-blue-50 py-12">
          <FloatingElements count={10} />
          <div className="container px-4 mx-auto relative z-10">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">In-Game Currency</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Learn about cUSDT, the educational token powering the DungeonSwap ecosystem.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TokenDashboard balance={balance} />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Educational Modules</h2>

                <Tabs defaultValue="why" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="why"
                      className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                    >
                      Why We Created cUSDT
                    </TabsTrigger>
                    <TabsTrigger
                      value="how"
                      className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
                    >
                      How This Teaches Real Crypto
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="why" className="mt-6">
                    <AnimatedCard hoverEffect="glow">
                      <CardHeader>
                        <CardTitle>The Purpose Behind cUSDT</CardTitle>
                        <CardDescription>
                          Our educational token was designed with specific learning goals in mind
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>
                          cUSDT was created to provide a risk-free environment for players to learn about cryptocurrency
                          mechanics. By using an educational token instead of real currency, we can create a safe space
                          for experimentation and learning.
                        </p>
                        <p>
                          The token mirrors real-world stablecoins in functionality, but exists solely within our game
                          ecosystem. This allows players to understand concepts like liquidity, trading, and tokenomics
                          without financial risk.
                        </p>
                        <div className="mt-6">
                          <GradientButton asChild variant="outline" className="gap-2">
                            <Link href="/lore">
                              <BookOpen className="h-4 w-4" />
                              Read the full backstory
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </GradientButton>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  </TabsContent>

                  <TabsContent value="how" className="mt-6">
                    <AnimatedCard hoverEffect="lift">
                      <CardHeader>
                        <CardTitle>cUSDT vs Real USDT</CardTitle>
                        <CardDescription>Understanding the similarities and differences</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border p-2 text-left">Feature</th>
                                <th className="border p-2 text-left">cUSDT (Educational)</th>
                                <th className="border p-2 text-left">Real USDT</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2 font-medium">Value</td>
                                <td className="border p-2">Fixed at $1 (in-game only)</td>
                                <td className="border p-2">Pegged to $1 USD</td>
                              </tr>
                              <tr>
                                <td className="border p-2 font-medium">Tradability</td>
                                <td className="border p-2">Only within DungeonSwap</td>
                                <td className="border p-2">Global exchanges</td>
                              </tr>
                              <tr>
                                <td className="border p-2 font-medium">Purpose</td>
                                <td className="border p-2">Education & gameplay</td>
                                <td className="border p-2">Real financial transactions</td>
                              </tr>
                              <tr>
                                <td className="border p-2 font-medium">Mechanics</td>
                                <td className="border p-2">Identical (for learning)</td>
                                <td className="border p-2">Real blockchain operations</td>
                              </tr>
                              <tr>
                                <td className="border p-2 font-medium">Risk</td>
                                <td className="border p-2">None (educational)</td>
                                <td className="border p-2">Real financial risk</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  </TabsContent>
                </Tabs>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Token Flow in DungeonSwap</h2>
                <p className="text-muted-foreground max-w-2xl mb-8">
                  See how cUSDT moves through the game ecosystem, from quests to trades and beyond.
                </p>

                <TokenFlow />
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
