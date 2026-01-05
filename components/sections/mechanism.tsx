import React from "react"
import Image from "next/image"

export function Mechanism() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[var(--salon-gold)] font-serif tracking-widest text-sm block mb-4">MECHANISM</span>
          <h2 className="text-3xl font-serif text-gray-800">
            なぜ、植物ではなく<br className="md:hidden" />「ヒト由来」なのか？
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Point 1: カギとカギ穴 */}
          <div className="bg-[var(--salon-bg)] p-8 border border-[var(--salon-border)] h-full">
            <h3 className="text-xl font-serif text-[var(--salon-text)] mb-6 text-center">
              1. 「カギとカギ穴」の関係
            </h3>
            <div className="aspect-video bg-white mb-6 relative border border-gray-100">
              <Image 
                src="/receipter.png" 
                alt="カギとカギ穴（レセプター）のイメージ" 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm leading-loose text-justify">
              私たちの肌細胞には特定の成分を受け取る「カギ穴（レセプター）」があります。
              ヒト由来の成分はこの穴にぴったり合う「カギ」となり、肌のスイッチをオンにします。
              植物由来にはない、ヒト由来ならではの肌なじみの良さをご体感ください。
            </p>
          </div>

          {/* Point 2: エクソソーム */}
          <div className="bg-[var(--salon-bg)] p-8 border border-[var(--salon-border)] h-full">
            <h3 className="text-xl font-serif text-[var(--salon-text)] mb-6 text-center">
              2. 話題の「エクソソーム」
            </h3>
            <div className="aspect-video bg-white mb-6 relative border border-gray-100">
              <Image 
                src="/dentatsu.png" 
                alt="エクソソーム（伝達物質）のイメージ" 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm leading-loose text-justify">
              培養液には「エクソソーム」というナノサイズの粒子が含まれています。
              これは細胞間の「メッセンジャー」であり、ダメージを受けた場所に修復の指令を届ける役割を果たします。
              お肌の隅々までアプローチし、なめらかな肌へ整えます。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
