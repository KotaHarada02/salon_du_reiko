import React from "react"
import Link from "next/link"

export function Offer() {
  return (
    <section className="py-24 md:py-32 bg-[var(--salon-text)] text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-[var(--salon-gold)]">
          未来の肌への投資を、<br/>今始めませんか？
        </h2>
        <p className="mb-12 text-sm md:text-base tracking-widest leading-loose text-gray-300">
          「補う」ケアから「呼び覚ます」ケアへ。<br/>
          あなたの肌が本来持っている可能性を、<br className="md:hidden"/>Salon du Reikoが引き出します。<br/><br/>
          まずは、初回体験でその違いをご実感ください。
        </p>
        
        {/* 特典エリア */}
        <div className="bg-white text-[var(--salon-text)] p-8 max-w-xl mx-auto mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[var(--salon-gold)] text-white text-xs px-10 py-1 rotate-45 translate-x-8 translate-y-4">
            First Time
          </div>
          <h3 className="font-serif text-xl mb-2">ご新規様 限定プラン</h3>
          <p className="text-sm text-gray-500 mb-6">ヒト幹細胞導入フェイシャル（90分）</p>
          <div className="flex items-end justify-center gap-4 mb-2">
             <span className="text-gray-400 line-through text-sm">通常 ¥16,500</span>
             <span className="text-3xl font-bold text-[var(--salon-gold)]">¥9,900<span className="text-sm font-normal text-gray-500 ml-1">(税込)</span></span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* LINE予約ボタン（メイン） */}
            <Link href="https://line.me/..." className="inline-flex items-center justify-center bg-[#06C755] text-white px-10 py-4 text-sm tracking-widest hover:bg-[#05b54d] transition-all duration-300 min-w-[280px] rounded-sm">
                LINEでかんたん予約・相談
            </Link>
            
            {/* 通常予約ボタン */}
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/30 text-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[var(--salon-text)] transition-all duration-300 min-w-[280px] rounded-sm">
                Webフォームから予約
            </Link>
        </div>
        
        <p className="mt-8 text-xs text-gray-500">
           ※無理な勧誘は一切ございません。お気軽にご相談ください。
        </p>
      </div>
    </section>
  )
}
