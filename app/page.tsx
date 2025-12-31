"use client"

import React from "react"
import { Hero } from "@/components/sections/hero"
import { Philosophy } from "@/components/sections/philosophy"
import { MenuPickup } from "@/components/sections/menu-pickup"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <MenuPickup />
      
      {/* 簡易的なCTAセクション（後で本格的なものに差し替え推奨） */}
      <section className="py-32 bg-[var(--salon-bg)] text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif mb-8">ご予約・お問い合わせ</h2>
            <p className="mb-12 text-sm tracking-widest">
                完全予約制となっております。<br/>
                まずは、お気軽にご相談ください。
            </p>
            <Link href="/contact" className="inline-block bg-[var(--salon-text)] text-white px-16 py-4 text-sm tracking-widest hover:bg-[var(--salon-gold)] transition-colors duration-500">
                CONTACT US
            </Link>
        </div>
      </section>
    </main>
  )
}
