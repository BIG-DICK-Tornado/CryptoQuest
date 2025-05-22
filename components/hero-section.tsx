"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Wallet2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { WalletConnectModal } from "@/components/wallet-connect-modal"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"
import { GradientButton } from "@/components/gradient-button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-blue-50 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Learn DeFi While You Play</h1>
              <p className="text-xl text-muted-foreground">Your Adventure Earns Real Crypto Knowledge</p>
            </div>
            <div className="relative h-[300px] md:h-[400px]"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-blue-50 py-16 md:py-24">
      <AnimatedBackground />
      <FloatingElements count={20} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-2"
            >
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-purple-100">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-purple-800">Educational Blockchain RPG</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700"
            >
              Learn DeFi While You Play
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-muted-foreground"
            >
              Your Adventure Earns Real Crypto Knowledge
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <WalletConnectModal
                trigger={
                  <GradientButton size="lg">
                    <Wallet2 className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </GradientButton>
                }
              />
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[300px] md:h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{ rotate: 3, scale: 1.05 }}
                  transition={{
                    rotate: {
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                    scale: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-2xl"
                ></motion.div>
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
                  <div className="relative w-full h-full">
                    <Image
                      src="/dungensawap.png"
                      alt="Game characters"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold mb-1">DungeonSwap</h3>
                        <p className="text-sm opacity-90">Battle Rug Pull dragons and earn cUSDT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
              initial={{ y: 20, opacity: 0, rotate: -10 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <div className="text-center">
                <div className="text-xl font-bold text-purple-800">100%</div>
                <div className="text-xs text-purple-600">Educational</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}
