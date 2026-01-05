import React from "react"

export function VoicePickup() {
  const voices = [
    {
      age: "40代女性",
      title: "翌日の化粧ノリが全然違いました",
      text: "今まで色々なエステに行きましたが、ここまで変化を感じたのは初めてです。施術直後もですが、翌朝の肌の柔らかさに驚きました。ファンデーションが薄くても自信が持てるようになりました。"
    },
    {
      age: "50代女性",
      title: "痛みもなく、リラックスして受けられます",
      text: "「針を使わない」と聞いて安心はしていましたが、本当に痛みがなくて驚きました。温かい手でのマッサージも気持ちよくて、つい眠ってしまうほど。毎月の自分へのご褒美です。"
    },
    {
      age: "60代女性",
      title: "肌に自信が持てるように",
      text: "年齢のせいと諦めていましたが、こちらに通い始めてから「肌が明るくなったね」と娘に褒められました。無理な勧誘もなく、私のペースで通えるのも嬉しいポイントです。"
    }
  ]

  return (
    <section className="py-24 bg-[var(--salon-bg)]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[var(--salon-gold)] font-serif tracking-widest text-sm block mb-4">VOICE</span>
          <h2 className="text-3xl font-serif text-gray-800">お客様の喜びの声</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {voices.map((voice, i) => (
            <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm relative">
              <span className="absolute -top-4 left-6 text-6xl text-[var(--salon-gold)] opacity-20 font-serif">“</span>
              <p className="text-[var(--salon-gold)] text-xs tracking-widest mb-2">{voice.age}</p>
              <h3 className="font-bold text-gray-800 mb-4 text-sm">{voice.title}</h3>
              <p className="text-sm text-gray-600 leading-loose text-justify">{voice.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
