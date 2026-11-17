import { Hero } from "@/components/sections/hero"
import { DiagnosisSection } from "@/components/sections/diagnosis-section"
import { FirstVisit } from "@/components/sections/first-visit"
import { MenuOverview } from "@/components/sections/menu-overview"
import { Owner } from "@/components/sections/owner"
import { Why } from "@/components/sections/why"
import { Grotty } from "@/components/sections/grotty"
import { Flow } from "@/components/sections/flow"
import { VoicePickup } from "@/components/sections/voice-pickup"
import { FaqSection } from "@/components/sections/faq-section"
import { Closing } from "@/components/sections/closing"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <Hero />
      <DiagnosisSection />
      <FirstVisit />
      <MenuOverview />
      <Owner />
      <VoicePickup />
      <Flow />
      <Why />
      <Grotty />
      <FaqSection />
      <Closing />
    </main>
  )
}
