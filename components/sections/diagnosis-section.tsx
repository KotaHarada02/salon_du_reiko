import { RecommendWizard } from "@/components/recommend-wizard"

export function DiagnosisSection() {
  return (
    <section id="diagnosis" className="scroll-mt-24 bg-[var(--color-surface-muted)]/60 py-16 md:py-24">
      <div className="container grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            今のわたしに合うケアを、
            <br />
            4つの質問で。
          </h2>
          <p className="mt-4 max-w-[30em] text-sm leading-relaxed text-[var(--color-ink-muted)]">
            「どのコースを選べばいいかわからない」という方のために、お悩みとケアしたい部位から最適なメニューをご案内します。
          </p>
          <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
            所要時間：約30秒 ／ 予約するかどうかは結果を見てから決められます。
          </p>
        </div>

        <RecommendWizard tone="card" />
      </div>
    </section>
  )
}
