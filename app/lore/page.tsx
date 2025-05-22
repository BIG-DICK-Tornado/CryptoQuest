import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Coins } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WalletConnectModal } from "@/components/wallet-connect-modal"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedCard } from "@/components/animated-card"
import { GradientButton } from "@/components/gradient-button"

export default function LorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-blue-50 py-16">
          <FloatingElements count={15} />
          <div className="container px-4 mx-auto relative z-10">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <Badge
                  variant="outline"
                  className="mb-4 px-3 py-1 text-sm bg-amber-100 text-amber-800 border-amber-300"
                >
                  Game Lore
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-4">The World of DungeonSwap</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover the rich backstory behind our educational blockchain RPG
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <ScrollReveal delay={0.2} direction="left">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">The Arbitrum Wizards</h2>
                  <p className="text-lg mb-4">
                    In DungeonSwap, players battle evil 'Rug Pull' dragons using DeFi spells. The cUSDT token was
                    created by the 'Arbitrum Wizards' guild to:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Teach new adventurers token mechanics safely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Prevent real monetary losses while learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Reward players for completing educational quests</span>
                    </li>
                  </ul>
                  <p className="text-lg font-medium text-purple-800">
                    All trading happens ONLY in our in-game DEX (DragonSwap) – hence the blocked external exchanges.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} direction="right">
                <ParallaxSection speed={0.2} className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative aspect-video overflow-hidden rounded-lg shadow-inner">
                      <Image
                        src="/IMAGE3.1.png"
                        alt="Arbitrum Wizards Guild"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-xl font-bold">The Arbitrum Wizards Guild Hall</h3>
                          <p className="text-sm">Home of the creators of cUSDT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxSection>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="mb-16">
                <h2 className="text-2xl font-bold tracking-tight mb-6">DragonSwap Interface</h2>
                <p className="text-muted-foreground max-w-2xl mb-8">
                  The in-game decentralized exchange where all cUSDT trading takes place
                </p>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden relative">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 p-4 border-b border-gray-200 dark:border-gray-700 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-purple-500 text-white p-1 rounded">
                          <Coins className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-lg">DragonSwap</h3>
                      </div>
                      <WalletConnectModal
                        trigger={
                          <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700">
                            Connect Wallet
                          </Button>
                        }
                      />
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AnimatedCard hoverEffect="glow">
                        <CardHeader>
                          <CardTitle>Liquidity Pools</CardTitle>
                          <CardDescription>Available pools for trading</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg card-bg-white">
                              <div className="flex items-center gap-2">
                                <div className="bg-blue-100 p-1 rounded-full">
                                  <div className="w-6 h-6 rounded-full bg-blue-500" />
                                </div>
                                <span>cUSDT / GOLD</span>
                              </div>
                              <span className="text-sm font-medium">10,000 cUSDT</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg card-bg-white">
                              <div className="flex items-center gap-2">
                                <div className="bg-green-100 p-1 rounded-full">
                                  <div className="w-6 h-6 rounded-full bg-green-500" />
                                </div>
                                <span>cUSDT / MANA</span>
                              </div>
                              <span className="text-sm font-medium">5,000 cUSDT</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg card-bg-white">
                              <div className="flex items-center gap-2">
                                <div className="bg-amber-100 p-1 rounded-full">
                                  <div className="w-6 h-6 rounded-full bg-amber-500" />
                                </div>
                                <span>cUSDT / XP</span>
                              </div>
                              <span className="text-sm font-medium">7,500 cUSDT</span>
                            </div>
                          </div>
                        </CardContent>
                      </AnimatedCard>

                      <AnimatedCard hoverEffect="lift">
                        <CardHeader>
                          <CardTitle>Quest Log</CardTitle>
                          <CardDescription>Complete quests to earn cUSDT</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="p-2 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg quest-item">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium dark:text-white quest-item-text">
                                  Lesson 1: Wallet Security
                                </span>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/50 dark:text-green-100">
                                  Completed
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground dark:text-gray-300">Reward: 25 cUSDT</div>
                            </div>
                            <div className="p-2 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg quest-item">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium dark:text-white quest-item-text">
                                  Lesson 2: Liquidity Basics
                                </span>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/50 dark:text-green-100">
                                  Completed
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground dark:text-gray-300">Reward: 35 cUSDT</div>
                            </div>
                            <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg quest-item">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium dark:text-white quest-item-text">
                                  Lesson 3: Avoid Honeypots
                                </span>
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/50 dark:text-blue-100">
                                  In Progress
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground dark:text-gray-300">Reward: 50 cUSDT</div>
                            </div>
                          </div>
                        </CardContent>
                      </AnimatedCard>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up">
              <div className="text-center">
                <GradientButton asChild size="lg">
                  <Link href="/faq">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read our FAQ
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
