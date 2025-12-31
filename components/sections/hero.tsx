import React from "react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 背景画像/動画エリア */}
      <div className="absolute inset-0 z-0">
         {/* 実際には高画質な画像や動画を設定 */}
         <div className="w-full h-full bg-[#f0f0f0] animate-pulse-slow"></div>
         <div className="absolute inset-0 bg-black/10"></div> {/* わずかなオーバーレイ */}
      </div>

      <div className="container relative z-10 text-center text-white px-6">
        <p className="font-serif text-sm md:text-base tracking-[0.3em] mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            甲賀市の隠れ家エステサロン
        </p>
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-8 animate-fade-in-up opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          Salon de Reiko
        </h1>
        <p className="font-serif text-sm md:text-lg tracking-widest mb-12 animate-fade-in-up opacity-0" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
            美しさは、内側から輝きだす。
        </p>
        
        <div className="animate-fade-in-up opacity-0" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
            <Link href="/contact" className="inline-block bg-white/20 backdrop-blur-sm border border-white/40 text-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-[var(--salon-text)] transition-all duration-500">
                RESERVATION
            </Link>
        </div>
      </div>

      {/* スクロールダウンインジケーター */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[2000ms]">
        <span className="block w-[1px] h-16 bg-white/50 mx-auto"></span>
        <span className="block text-white/70 text-[10px] tracking-widest mt-2 uppercase">Scroll</span>
      </div>
    </section>
  )
}
