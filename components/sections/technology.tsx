import React from "react"

export function Technology() {
  return (
    <section className="py-24 bg-[var(--salon-bg)] relative overflow-hidden">
      {/* 装飾的な背景円 */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-[var(--salon-gold)] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
             {/* 施術風景や機器の画像 */}
             <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image: Electroporation</div>
             </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-serif text-gray-800 mb-8 leading-relaxed">
              サロンだからできる<br />
              <span className="border-b border-[var(--salon-gold)]">「深層への浸透技術」</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-loose">
              <p>
                高機能な成分も、届かなければ意味がありません。<br/>
                当サロンでは、近赤外線と音響振動を用いる<strong className="text-[var(--salon-text)]">「GROTTY PRO(グロッティプロ)」</strong>を採用しています。
              </p>
              <p>
                普段のスキンケアでは届かない肌の奥まで成分をダイレクトに導入。
                針を使わないため痛みもなく、リラックスして受けていただけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
