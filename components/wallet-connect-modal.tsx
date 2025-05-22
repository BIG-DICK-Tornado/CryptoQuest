"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface WalletConnectModalProps {
  trigger: React.ReactNode
}

export function WalletConnectModal({ trigger }: WalletConnectModalProps) {
  const [open, setOpen] = useState(false)

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      logo: "/metmask.jpeg",
      description: "Connect to your MetaMask Wallet",
    },
    {
      id: "trustwallet",
      name: "Trust Wallet",
      logo: "/trustwallet.jpeg",
      description: "Connect to your Trust Wallet",
    },
    {
      id: "phantom",
      name: "Phantom",
      logo: "/phanton.png",
      description: "Connect to your Phantom Wallet",
    },
  ]

  const handleConnect = (walletId: string) => {
    console.log(`Connecting to ${walletId}...`)
    // Here you would implement the actual wallet connection logic
    setTimeout(() => {
      setOpen(false)
    }, 500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>Select a wallet to connect to the CryptoQuest USDT platform.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {wallets.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="flex items-center justify-start gap-3 p-4 h-auto"
              onClick={() => handleConnect(wallet.id)}
            >
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image src={wallet.logo || "/placeholder.svg"} alt={wallet.name} fill className="object-contain" />
              </div>
              <div className="text-left">
                <div className="font-medium">{wallet.name}</div>
                <div className="text-sm text-muted-foreground">{wallet.description}</div>
              </div>
            </Button>
          ))}
        </div>
        <div className="text-xs text-center text-muted-foreground mt-2">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
        </div>
      </DialogContent>
    </Dialog>
  )
}
