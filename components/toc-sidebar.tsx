"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "problem", label: "お悩み" },
  { id: "philosophy", label: "コンセプト" },
  { id: "solution", label: "解決策" },
  { id: "mechanism", label: "メカニズム" },
  { id: "technology", label: "技術" },
  { id: "trust", label: "信頼・安全" },
  { id: "voice", label: "お客様の声" },
  { id: "menu", label: "メニュー" },
  { id: "faq", label: "Q&A" },
  { id: "offer", label: "ご予約" },
]

export function TocSidebar() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px", // 画面の上部20%〜下部60%の範囲に入ったらアクティブとみなす
        threshold: 0,
      }
    )

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed right-1 lg:right-2 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
      {/* 背景の縦線: これがあるだけでまとまって見えます */}
      <div className="absolute right-[5px] top-4 bottom-4 w-[1px] bg-gray-300/30" />

      <div className="flex flex-col gap-6"> {/* gapを広げてゆとりを持たせる */}
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end"
          >
            {/* ラベル部分: ホバー時のみ表示（奥ゆかしさ重視） */}
            <span
              className={cn(
                "absolute right-6 whitespace-nowrap text-xs font-serif tracking-widest transition-all duration-500 pr-2",
                "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                activeSection === section.id ? "text-[var(--salon-gold)]" : "text-gray-500"
              )}
            >
              {section.label}
            </span>

            {/* ドット部分: クリック判定を広げるために親divで囲む手もあり */}
            <div className="relative flex items-center justify-center w-3 h-3">
               {/* アクティブ時の光彩（ぼかし） */}
              <div
                className={cn(
                  "absolute w-full h-full rounded-full bg-[var(--salon-gold)] blur-sm transition-all duration-500",
                  activeSection === section.id ? "opacity-60 scale-150" : "opacity-0"
                )}
              />
              {/* メインドット */}
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-500 z-10 border border-[var(--salon-gold)]",
                  activeSection === section.id
                    ? "bg-[var(--salon-gold)] scale-125"
                    : "bg-white group-hover:bg-[var(--salon-gold)]/30" // 非アクティブ時は中を白抜きにすると軽やか
                )}
              />
            </div>
          </button>
        ))}
      </div>
    </nav>
  )
}
