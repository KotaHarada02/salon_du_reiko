import React from "react"

export function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-12 leading-relaxed">
          こんな想いありませんか？
        </h2>
        
        <div className="bg-[var(--salon-bg)] p-8 md:p-12 border border-[var(--salon-border)]">
          <ul className="space-y-6 text-left inline-block">
            {[
              "鏡を見るたび「前より疲れて見える」と感じる",
              "ちゃんとケアしているのに、肌が応えてくれなくなった",
              "高級コスメを使っても、感動する変化がない",
              "エステは好きだけど「その場しのぎ」に感じてしまう",
              "年齢のせいだと、どこかであきらめかけている",
              "本当はもっと、自分の肌に自信を持ちたい",
              "“今の私に合うケア”が分からなくなってきた"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-[var(--salon-gold)] mt-1">✔</span>
                <span className="text-gray-600 font-serif text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <p className="mt-12 text-gray-600 leading-loose">
          従来の「足りないものを補う」ケアから、<br className="hidden md:block"/>
          <span className="text-[var(--salon-text)] font-bold border-b border-[var(--salon-gold)]">「肌本来の力を呼び覚ます」</span>アプローチへ。<br />
          Salon de Reikoが、あなたの肌の可能性を引き出します。
        </p>
      </div>
    </section>
  )
}
