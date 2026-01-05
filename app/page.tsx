"use client"

import React from "react"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Philosophy } from "@/components/sections/philosophy"
import { Solution } from "@/components/sections/solution"
import { Mechanism } from "@/components/sections/mechanism"
import { Technology } from "@/components/sections/technology"
import { MenuPickup } from "@/components/sections/menu-pickup"
import { Trust } from "@/components/sections/trust"
import { VoicePickup } from "@/components/sections/voice-pickup"
import { FaqSection } from "@/components/sections/faq-section"
import { Offer } from "@/components/sections/offer"
import { TocSidebar } from "@/components/toc-sidebar"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--salon-bg)] relative">
      <TocSidebar />

      {/* 1. ヒーローエリア：キャッチコピー刷新 */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* 2. 導入：共感と問題提起 */}
      <section id="problem">
        <Problem />
      </section>

      {/* 3. コンセプト：サロンの想い（信頼感） */}
      <section id="philosophy">
        <Philosophy />
      </section>

      {/* 4. 解決策：ヒト幹細胞とは？（安全性） */}
      <section id="solution">
        <Solution />
      </section>

      {/* 5. 独自性：メカニズム（カギとカギ穴・エクソソーム） */}
      <section id="mechanism">
        <Mechanism />
      </section>

      {/* 6. 技術：エレクトロポレーション */}
      <section id="technology">
        <Technology />
      </section>

      {/* 7. 信頼：安全性・こだわり */}
      <section id="trust">
        <Trust />
      </section>

      {/* 8. 実績：お客様の声 */}
      <section id="voice">
        <VoicePickup />
      </section>

      {/* 9. メニュー紹介 */}
      <section id="menu">
        <MenuPickup />
      </section>

      {/* 10. FAQ：不安払拭 */}
      <section id="faq">
        <FaqSection />
      </section>
      
      {/* 11. クロージング：オファー・予約 */}
      <section id="offer">
        <Offer />
      </section>
    </main>
  )
}
