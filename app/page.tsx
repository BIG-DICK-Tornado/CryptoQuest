import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"
import { Testimonials } from "@/components/testimonials"
import { CountdownTimer } from "@/components/countdown-timer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedCard } from "@/components/animated-card"
import { GradientButton } from "@/components/gradient-button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <div className="container px-4 py-12 md:py-24 mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">About CryptoQuest USDT</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn about our educational in-game currency designed to teach players about token mechanics in a
                controlled environment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal delay={0.2} direction="left">
              <div>
                <h3 className="text-2xl font-bold mb-4">What is CryptoQuest USDT?</h3>
                <p className="mb-4">
                  CryptoQuest USDT (cUSDT) is an educational token created for our upcoming blockchain RPG
                  'DungeonSwap'. It's designed to teach players about token mechanics in a safe, controlled environment
                  without financial risk.
                </p>
                <p className="mb-4">
                  With cUSDT, players can learn about cryptocurrency concepts like liquidity pools, trading, and
                  tokenomics while enjoying an immersive gaming experience.
                </p>
                <p className="font-medium text-purple-800">
                  All trading happens ONLY in our in-game DEX (DragonSwap) – providing a safe learning environment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="right">
              <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-lg overflow-hidden">
                <AnimatedBackground className="opacity-30" />
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-inner">
                  <Image
                    src="/IMAGE2.1.png"
                    alt="CryptoQuest USDT"
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
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <ScrollReveal delay={0.2}>
              <AnimatedCard
                hoverEffect="lift"
                className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 shadow-md"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-amber-200 text-amber-800 w-8 h-8 rounded-full flex items-center justify-center">
                      1
                    </span>
                    Complete Missions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Defeat enemies, solve puzzles, and complete educational quests to earn rewards and advance your
                    knowledge.
                  </p>
                </CardContent>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <AnimatedCard
                hoverEffect="glow"
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-md"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-blue-200 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center">
                      2
                    </span>
                    Earn cUSDT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Gain in-game currency as you progress through the game, learning real crypto mechanics without
                    financial risk.
                  </p>
                </CardContent>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <AnimatedCard
                hoverEffect="border"
                className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-md"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-green-200 text-green-800 w-8 h-8 rounded-full flex items-center justify-center">
                      3
                    </span>
                    Trade Within Ecosystem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Use your earned cUSDT exclusively within the DungeonSwap ecosystem to upgrade gear, buy items, and
                    trade with other players.
                  </p>
                </CardContent>
              </AnimatedCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <Badge
                variant="outline"
                className="mb-4 px-3 py-1 text-sm bg-purple-100 text-purple-800 border-purple-300"
              >
                Coming Soon
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">DungeonSwap Beta Launch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Get ready for the ultimate crypto education adventure. Our beta launch is just around the corner!
              </p>

              <CountdownTimer targetDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} />

              <div className="mt-8">
                <GradientButton asChild size="lg">
                  <Link href="/token">
                    Learn About In-Game Currency <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </GradientButton>
              </div>
            </div>
          </ScrollReveal>

          <Testimonials />
        </div>
      </main>

      <div className="bg-red-100 py-3 text-center text-red-800 font-medium border-t border-red-200">
        Not a real token. Part of DungeonSwap's crypto education game.
      </div>
    </div>
  )
}
