import { Hero } from "@/components/sections/hero"
import { FirstVisit } from "@/components/sections/first-visit"
import { MenuOverview } from "@/components/sections/menu-overview"
import { Owner } from "@/components/sections/owner"
import { Why } from "@/components/sections/why"
import { Flow } from "@/components/sections/flow"
import { VoicePickup } from "@/components/sections/voice-pickup"
import { FaqSection } from "@/components/sections/faq-section"
import { Closing } from "@/components/sections/closing"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--salon-bg)]">
      {/* 1. 診断をファーストビューに置き、その場で始められるようにする */}
      <Hero />
      {/* 2. 初見の不安（勧誘・痛み・雰囲気・アクセス）を先に解消 */}
      <FirstVisit />
      {/* 3. 料金を隠さず一覧で */}
      <MenuOverview />
      {/* 4. スタッフはオーナーひとり。人柄を写真とお客様の言葉で伝える */}
      <Owner />
      <VoicePickup />
      <Flow />
      {/* 5. 看板成分の説明は、興味を持った人向けに後半へ */}
      <Why />
      <FaqSection />
      <Closing />
    </main>
  )
}
