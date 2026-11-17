import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"

const STEPS = [
  { title: "ご予約", text: "公式LINEから。診断で出たメニュー名を送っていただくとスムーズです。" },
  { title: "カウンセリング", text: "お茶を飲みながら、お肌やお体の状態、気になることを伺います。" },
  { title: "施術", text: "お着替えのあと、ベッドで横になるだけ。眠ってしまっても大丈夫です。" },
  { title: "ティータイム", text: "施術後もお茶の時間があります。そのままメイクしてお帰りいただけます。" },
]

export function Flow() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="container">
        <Reveal>
          <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            当日の流れ
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((s, i) => (
            <RevealItem
              key={s.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] font-serif text-sm font-medium text-[var(--color-accent)] tabular-nums">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg font-medium text-[var(--color-ink)]">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
