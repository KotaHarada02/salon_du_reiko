import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[var(--salon-bg)]">
      {/* 背景装飾（薄いロゴやテクスチャ） */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
         <span className="font-script text-[20vw] text-[var(--salon-gold)] whitespace-nowrap select-none">Salon de Reiko</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
          
          {/* キャッチコピー（縦書き） */}
          <div className="writing-vertical h-[400px] md:h-[500px] flex items-center">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-800 leading-loose tracking-widest">
              時を忘れ、<br />
              美しさを呼び覚ます。
            </h2>
          </div>

          {/* 本文ブロック */}
          <div className="max-w-md space-y-10 text-center md:text-left">
            <p className="text-sm md:text-base font-sans text-gray-600 leading-loose tracking-widest">
              Salon de Reikoは、<br/>
              静寂に包まれた隠れ家サロンです。
            </p>
            <p className="text-sm md:text-base font-sans text-gray-600 leading-loose tracking-widest">
              最先端の再生医療技術と、<br/>
              熟練の手技が織りなす至福の時間。<br/>
              肌の奥深くから満ち溢れる自信を<br/>
              あなたにお届けします。
            </p>
            
            {/* 装飾的な欧文 */}
            <div className="pt-8 flex flex-col items-center md:items-start">
              <span className="font-script text-5xl text-[var(--salon-gold)] opacity-80">
                Philosophy
              </span>
              <div className="w-12 h-[1px] bg-[var(--salon-gold)] mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
