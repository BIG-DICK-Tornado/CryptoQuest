"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, Wallet2 } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WalletConnectModal } from "@/components/wallet-connect-modal"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Information", href: "/information" },
    { name: "In-Game Currency", href: "/token" },
    { name: "Game Lore", href: "/lore" },
    { name: "FAQ", href: "/faq" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-1.5 rounded-md">
              <Wallet2 className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">CryptoQuest USDT</span>
            <span className="font-bold text-xl sm:hidden">CQ USDT</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}

          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          )}

          <WalletConnectModal
            trigger={
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
                <Wallet2 className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            }
          />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {mounted && (
                <Button variant="outline" className="flex items-center gap-2 justify-start" onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>
              )}

              <WalletConnectModal
                trigger={
                  <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
                    <Wallet2 className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </Button>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
