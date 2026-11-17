import Link from "next/link"
import type { CSSProperties } from "react"
import { ArrowRightIcon, CaretRightIcon } from "@phosphor-icons/react/ssr"
import { DiagnosisButton } from "@/components/diagnosis-cta"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
import { CATEGORIES, firstText, menusIn, priceText, weekdayText, duration } from "@/lib/salon"

export function MenuOverview() {
  return (
    <section className="bg-[var(--color-surface-muted)]/45 py-20 md:py-28">
      <div className="container">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
              整えたいところから選ぶ
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
              料金はすべて税込です。初回限定価格もご用意しています。
            </p>
          </div>
          <DiagnosisButton href="#diagnosis" label="迷ったら30秒診断" className="self-start md:self-auto" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <RevealGroup
              key={cat.id}
              style={{ "--c": cat.color } as CSSProperties}
              className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
            >
              <RevealItem className="border-b border-[var(--color-border)] pb-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--c)" }}
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-lg font-medium text-[var(--color-ink)] md:text-xl">
                    {cat.ja}
                  </h3>
                </div>
                <p className="mt-1.5 text-xs text-[var(--color-ink-muted)]">{cat.lead}</p>
              </RevealItem>

              <div className="divide-y divide-[var(--color-border)]">
                {menusIn(cat.id).map((m) => {
                  const first = firstText(m)
                  const weekday = weekdayText(m)
                  return (
                    <RevealItem key={m.id}>
                      <Link
                        href={`/menu#${m.id}`}
                        className="group -mx-2 flex items-center justify-between gap-3 rounded-xl px-2 py-4 transition-colors hover:bg-[var(--color-bg)]"
                      >
                        <div className="min-w-0">
                          <span className="block text-[15px] font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                            {m.name}
                            {m.popular && (
                              <span className="ml-2 inline-block rounded-full bg-[var(--color-warm-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-warm)]">
                                {m.popular}
                              </span>
                            )}
                          </span>
                          <span className="mt-0.5 block text-xs text-[var(--color-ink-muted)]">
                            {duration(m.minutes)}
                            {m.subtitle && ` ／ ${m.subtitle}`}
                          </span>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <div className="text-right tabular-nums">
                            <span className="block font-serif text-base font-medium text-[var(--color-ink)]">
                              {priceText(m)}
                            </span>
                            {first && (
                              <span className="block text-[11px] font-medium text-[var(--color-warm)]">
                                {first}
                              </span>
                            )}
                            {weekday && (
                              <span className="block text-[11px] font-medium text-[var(--color-accent)]">
                                {weekday}
                              </span>
                            )}
                          </div>
                          <CaretRightIcon className="h-4 w-4 shrink-0 text-[var(--color-ink-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                        </div>
                      </Link>
                    </RevealItem>
                  )
                })}
              </div>
            </RevealGroup>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-[var(--color-ink-muted)]">
            初回価格は、はじめてご来店の方が対象です。ヘッドスパ以外のコースには、導入機器 GROTTY PRO の全身照射が付きます。どのコースも、施術の前後に足のマッサージが少し付きます。オプション「背中ほぐし」（15分 ¥3,000）も追加できます。
          </p>
          <Link
            href="/menu"
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[var(--color-ink)] bg-[var(--color-surface)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white md:self-auto"
          >
            <span>メニューの詳しい内容を見る</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
