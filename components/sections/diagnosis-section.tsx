import { RecommendWizard } from "@/components/recommend-wizard"

export function DiagnosisSection() {
  return (
    <section id="diagnosis" className="scroll-mt-20 bg-[var(--color-surface-muted)]/60 py-14 md:py-24">
      <div className="container grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <span className="inline-block rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
            30秒メニュー診断
          </span>
          <h2 className="mt-3 font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            今のわたしに合うケアを、
            <br />
            4つの質問で。
          </h2>
          <p className="mt-3 max-w-[30em] text-sm leading-relaxed text-[var(--color-ink-muted)]">
            お悩みとケアしたい部位を選ぶだけで、おすすめのコースと料金がその場でわかります。予約するかどうかは結果を見てから決められます。
          </p>
        </div>

        <RecommendWizard tone="card" />
      </div>
    </section>
  )
}
