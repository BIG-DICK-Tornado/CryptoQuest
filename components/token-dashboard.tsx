"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Coins, Info, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { WalletConnectModal } from "@/components/wallet-connect-modal"

interface TokenDashboardProps {
  balance: number
}

export function TokenDashboard({ balance }: TokenDashboardProps) {
  const [mounted, setMounted] = useState(false)
  const [animatedBalance, setAnimatedBalance] = useState(0)

  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setAnimatedBalance((prev) => {
        if (prev < 100) {
          return prev + 1
        }
        clearInterval(interval)
        return prev
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-40 bg-gray-100 rounded-lg"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/40 dark:to-purple-900/40 border-blue-200 dark:border-blue-700 overflow-hidden token-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-blue-600" />
              Live Balance
            </CardTitle>
            <CardDescription>Your current cUSDT holdings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">{animatedBalance}</span>
              <span className="text-lg font-medium text-muted-foreground mb-1">cUSDT</span>
            </div>
            <div className="mt-4">
              <WalletConnectModal
                trigger={
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Wallet2 className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </Button>
                }
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="h-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/40 dark:to-orange-900/40 border-amber-200 dark:border-amber-700 token-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <ArrowUpRight className="h-5 w-5 text-amber-600" />
              Conversion Rate
            </CardTitle>
            <CardDescription>Fixed in-game value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">1:1</span>
              <span className="text-lg font-medium text-muted-foreground mb-1">USD</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">1 cUSDT = $1 (fixed in-game value only)</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    <Info className="mr-2 h-4 w-4" />
                    Educational Purpose Only
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>
                    This token has no real-world value and cannot be exchanged for actual cryptocurrency or fiat
                    currency.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="h-full bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/40 dark:to-teal-900/40 border-green-200 dark:border-green-700 token-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Tokenomics
            </CardTitle>
            <CardDescription>Token mechanics</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="dark:text-gray-200 token-list-item">5% quest tax</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="dark:text-gray-200 token-list-item">1-year expiration</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="dark:text-gray-200 token-list-item">In-game use only</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="dark:text-gray-200 token-list-item">Educational mechanics</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

function Wallet2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14h.01" />
      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
    </svg>
  )
}
