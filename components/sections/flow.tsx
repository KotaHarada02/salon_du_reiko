import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"

const STEPS = [
  { title: "ご予約", text: "公式LINEから。診断で出たメニュー名を送っていただくとスムーズです。" },
  { title: "カウンセリング", text: "お茶を飲みながら、お肌やお体の状態、気になることを伺います。" },
  { title: "施術", text: "お着替えのあと、ベッドで横になるだけ。眠ってしまっても大丈夫です。" },
  { title: "ティータイム", text: "施術後もお茶の時間があります。そのままメイクしてお帰りいただけます。" },
]

export function Flow() {
  return (
    <section className="bg-[var(--salon-bg)] py-20 md:py-28">
      <div className="container">
        <Reveal>
          <h2 className="text-2xl text-[var(--salon-text)] md:text-3xl">当日の流れ</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {STEPS.map((s, i) => (
            <RevealItem key={s.title} className="relative border-t border-[var(--salon-gold)] pt-6">
              <h3 className="flex items-baseline gap-3 text-lg text-[var(--salon-text)]">
                <span className="font-serif text-2xl tabular-nums text-[var(--salon-gold)]">{i + 1}</span>
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
