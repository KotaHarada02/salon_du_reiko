import React from "react"

export function Solution() {
  return (
    <section className="py-24 bg-[var(--salon-bg)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             {/* 安全でクリーンなイメージ画像（試験管や雫など） */}
             <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image: Clean/Safe</div>
             </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-[var(--salon-gold)] font-serif tracking-widest text-sm block mb-4">SOLUTION</span>
            <h2 className="text-2xl font-serif text-gray-800 mb-8">
              「ヒト幹細胞」ってなに？
            </h2>
            <div className="space-y-6 text-gray-600 leading-loose text-justify">
              <p>
                当サロンで使用するのは、細胞そのものではなく,
                幹細胞を培養した際に抽出される<strong className="text-[var(--salon-text)] bg-white px-1">「上澄み液（培養液）」</strong>です。
              </p>
              <p>
                ここには、美しさを引き出すための成分が凝縮されています。<br />
                細胞や不純物は徹底して取り除かれており、厚生労働省が定める基準に沿って精製されたものを使用しているため、安心して施術を受けていただけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
