import React from "react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* 背景画像エリア */}
      <div className="absolute inset-0 z-0">
         {/* placeholder.jpg を使用していますが、実際はサロンの明るい画像推奨 */}
         <div 
           className="w-full h-full bg-cover bg-center animate-pulse-slow"
           style={{ backgroundImage: "url('/sample.jpg')" }} 
         ></div>
         <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 text-center text-white px-6">
        <p className="font-serif text-sm md:text-base tracking-[0.3em] mb-8 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            2025年の美容トレンドは「補う」から「呼び覚ます」へ
        </p>
        <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          ヒト幹細胞培養液で<br />
          肌本来の力をスイッチON。
        </h1>
        <p className="text-xs md:text-sm text-right pr-4 md:pr-20 opacity-80 mb-12 animate-fade-in-up" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
          ※ヒト幹細胞順化培養液（整肌成分）
        </p>
        
        <div className="animate-fade-in-up opacity-0" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
            <Link href="/contact" className="inline-block bg-[var(--salon-gold)] border border-[var(--salon-gold)] text-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[var(--salon-text)] transition-all duration-500">
                RESERVATION
            </Link>
        </div>
      </div>
    </section>
  )
}
