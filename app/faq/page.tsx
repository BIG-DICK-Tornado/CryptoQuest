"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedBackground } from "@/components/animated-background"

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const faqItems = [
    {
      id: "item-1",
      question: "Why can't I sell cUSDT on PancakeSwap?",
      answer:
        "By design – this token only works in DungeonSwap to prevent real-money confusion. cUSDT is an educational token that exists solely within our game ecosystem to teach crypto concepts without financial risk.",
    },
    {
      id: "item-2",
      question: "Is this real USDT?",
      answer:
        "NO. This is a classroom token with identical mechanics for educational purposes. cUSDT has no real-world value and cannot be exchanged for actual cryptocurrency or fiat currency.",
    },
    {
      id: "item-3",
      question: "How do I earn cUSDT in the game?",
      answer:
        "You can earn cUSDT by completing educational quests, defeating enemies, solving puzzles, and participating in in-game events. The primary purpose is to learn about cryptocurrency mechanics in a safe environment.",
    },
    {
      id: "item-4",
      question: "What can I do with cUSDT in the game?",
      answer:
        "You can use cUSDT to purchase in-game items, upgrade your character, trade with other players on DragonSwap (our in-game DEX), and participate in various game activities. All transactions are confined to the DungeonSwap ecosystem.",
    },
    {
      id: "item-5",
      question: "When will DungeonSwap be released?",
      answer:
        "DungeonSwap is currently in development, with a beta launch planned soon. Join our community to stay updated on the latest news and be among the first to experience the game when it launches.",
    },
    {
      id: "item-6",
      question: "Is there a limit to how much cUSDT I can earn?",
      answer:
        "While there's no strict limit, cUSDT is balanced within the game economy. The token has a 1-year expiration to encourage active participation and prevent hoarding, which helps maintain a healthy in-game economy.",
    },
    {
      id: "item-7",
      question: "Can I transfer cUSDT to other players?",
      answer:
        "Yes, you can trade cUSDT with other players within the DungeonSwap ecosystem. This feature allows you to experience peer-to-peer transactions in a controlled environment, teaching you about crypto transfers without real financial risk.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="relative bg-gradient-to-b from-purple-50 to-blue-50 py-12">
          <AnimatedBackground />
          <FloatingElements count={8} />
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="container px-4 mx-auto relative z-10">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find answers to common questions about CryptoQuest USDT and the DungeonSwap game
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              <Accordion type="multiple" value={expandedItems} onValueChange={setExpandedItems} className="mb-8">
                {faqItems.map((item, index) => (
                  <ScrollReveal key={item.id} delay={0.1 * index}>
                    <AccordionItem
                      value={item.id}
                      className="border border-gray-200 rounded-lg mb-4 overflow-hidden data-[state=open]:bg-purple-50 data-[state=open]:border-purple-200 transition-colors"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-purple-50 hover:no-underline">
                        <span className="text-left font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0">
                        <div className="text-muted-foreground">{item.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>

              <ScrollReveal delay={0.5}>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mt-12">
                  <h2 className="text-xl font-bold mb-4 dark:text-white">Still have questions?</h2>
                  <p className="mb-2 dark:text-gray-200 text-muted-dark">
                    If you couldn't find the answer to your question, feel free to reach out to our community on Discord
                    or Twitter.
                  </p>
                  <p className="text-sm text-purple-800 dark:text-purple-300 font-medium">
                    Remember: CryptoQuest USDT is an educational token with no real-world value.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-red-100 py-3 text-center text-red-800 font-medium border-t border-red-200">
        Not a real token. Part of DungeonSwap's crypto education game.
      </div>
    </div>
  )
}
