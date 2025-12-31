import React from "react"
import Link from "next/link"

export function MenuPickup() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="block text-[var(--salon-gold)] font-serif tracking-widest mb-4 text-sm">MENU</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">至高のメニュー</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 max-w-5xl mx-auto">
          {/* アイテム1 */}
          <Link href="/menu#facial" className="group block">
            <div className="overflow-hidden aspect-[4/3] mb-8 relative">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 z-10"/>
              {/* 画像はプレースホルダーを使用。実際には適切な画像パスに変更してください */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 font-serif">
                Image: Facial
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-serif mb-4 group-hover:text-[var(--salon-gold)] transition-colors duration-300">
                ヒト幹細胞フェイシャル
              </h3>
              <p className="text-gray-500 text-sm leading-loose mb-8 max-w-xs">
                再生医療から生まれた高濃度培養液を導入。<br/>
                細胞レベルで肌を呼び覚まします。
              </p>
              <span className="text-xs tracking-widest border-b border-gray-300 pb-1 group-hover:border-[var(--salon-gold)] transition-colors duration-300">VIEW MORE</span>
            </div>
          </Link>

          {/* アイテム2 */}
          <Link href="/menu#oil" className="group block md:mt-24"> {/* ずらして配置するリズム感 */}
            <div className="overflow-hidden aspect-[4/3] mb-8 relative">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 z-10"/>
              {/* 画像はプレースホルダーを使用。実際には適切な画像パスに変更してください */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 font-serif">
                Image: Oil
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-serif mb-4 group-hover:text-[var(--salon-gold)] transition-colors duration-300">
                厳選オイルトリートメント
              </h3>
              <p className="text-gray-500 text-sm leading-loose mb-8 max-w-xs">
                世界中から選び抜いたオーガニックオイルを使用。<br/>
                心身の深い疲れを解き放ちます。
              </p>
              <span className="text-xs tracking-widest border-b border-gray-300 pb-1 group-hover:border-[var(--salon-gold)] transition-colors duration-300">VIEW MORE</span>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-24">
             <Link href="/menu" className="inline-block border border-[var(--salon-gold)] text-[var(--salon-gold)] px-12 py-4 text-sm tracking-widest hover:bg-[var(--salon-gold)] hover:text-white transition-all duration-500">
                ALL MENUS
             </Link>
        </div>
      </div>
    </section>
  )
}
