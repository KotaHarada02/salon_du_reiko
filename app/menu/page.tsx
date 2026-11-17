import type { CSSProperties } from "react"
import { ArrowDownIcon, ArrowUpRightIcon, CheckCircleIcon, CheckIcon } from "@phosphor-icons/react/ssr"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion-reveal"
import { DiagnosisButton, DiagnosisCta } from "@/components/diagnosis-cta"
import { LineButton } from "@/components/booking-buttons"
import {
  BOOKING,
  CATEGORIES,
  FIRST_NOTE,
  FOOT_NOTE,
  GROTTY_NOTE,
  OPTIONS,
  bookingHref,
  categoryOf,
  duration,
  firstText,
  menusIn,
  priceText,
  squareUrl,
  weekdayText,
  yen,
  type Category,
  type Menu,
} from "@/lib/salon"

export const metadata = {
  title: "メニュー | Salon du Reiko",
  description: "お顔・身体・頭など、整えたいところから選べるヒト幹細胞フェイシャル・ボディ・ヘッドスパのメニューと料金。初回価格もご案内しています。",
}

const themeStyle = (cat: Category) => ({ "--c": cat.color }) as CSSProperties
const minPrice = (cat: Category) => Math.min(...menusIn(cat.id).map((m) => m.price))

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader
        subtitle="施術メニュー"
        description="整えたいところに合わせて選べるコースをご用意しています。表示価格はすべて税込です。"
      />

      <div className="container max-w-5xl pt-10 md:pt-14">
        <div className="grid gap-8 md:grid-cols-[1fr_340px] md:gap-12">
          <Reveal>
            <h2 className="font-serif text-xl font-medium text-[var(--color-ink)] md:text-2xl">
              どこを整えたいですか？
            </h2>
            <p className="mt-1.5 text-sm text-[var(--color-ink-muted)]">
              押すと、そのメニューの説明へ移動します。
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id} style={themeStyle(cat)}>
                  <a
                    href={`#${cat.id}`}
                    className="group flex min-h-[60px] items-center justify-between gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition-[border-color,background-color] duration-200 hover:border-[var(--c)] hover:bg-[var(--color-bg)]"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--c)" }}
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-[15px] font-medium text-[var(--color-ink)]">
                          {cat.ja}
                        </span>
                        <span className="block font-serif text-xs tabular-nums text-[var(--color-ink-muted)]">
                          {yen(minPrice(cat))}〜
                        </span>
                      </span>
                    </span>
                    <ArrowDownIcon className="h-4 w-4 shrink-0 text-[var(--c)] transition-transform group-hover:translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
              <img
                src="/img/treatment.jpg"
                alt="GROTTY PRO を使ったフェイシャルの施術風景"
                className="h-full w-full object-cover object-[center_45%]"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-medium text-[var(--color-ink)]">どれを選べばいいか迷ったら</p>
              <DiagnosisButton className="mt-3 w-full" />
              <LineButton className="mt-2.5 w-full" label="LINEで相談する" />
            </div>
          </Reveal>
        </div>

        <p className="mt-8 rounded-2xl bg-[var(--color-surface-muted)]/60 px-5 py-3.5 text-xs leading-relaxed text-[var(--color-ink-muted)]">
          {GROTTY_NOTE}
          {FOOT_NOTE}
          表示価格は税込です。
        </p>

        {CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id} style={themeStyle(cat)} className="scroll-mt-28 pt-16 md:pt-24">
            <Reveal className="flex items-center gap-3 border-b-2 border-[var(--c)] pb-4">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: "var(--c)" }}
                aria-hidden="true"
              />
              <div>
                <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
                  {cat.ja}
                </h2>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{cat.lead}</p>
              </div>
            </Reveal>

            <div className="mt-8 space-y-8">
              {menusIn(cat.id, { includeReferral: true }).map((m) => (
                <MenuItem key={m.id} menu={m} />
              ))}
            </div>
          </section>
        ))}

        <section id="option" className="scroll-mt-28 pt-16 md:pt-24">
          <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            オプション
          </h2>
          <div className="mt-6 space-y-3">
            {OPTIONS.map((o) => (
              <div
                key={o.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="font-serif text-lg font-medium text-[var(--color-ink)]">
                  {o.name}
                  <span className="ml-3 font-sans text-sm font-normal text-[var(--color-ink-muted)]">
                    {o.minutes}分
                  </span>
                </h3>
                <span className="font-serif text-xl font-medium tabular-nums text-[var(--color-ink)]">
                  {yen(o.price)}
                </span>
                <p className="mt-1 w-full text-xs text-[var(--color-ink-muted)]">{o.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[var(--color-ink-muted)]">
            {FIRST_NOTE}
            {FOOT_NOTE}
          </p>
        </section>
      </div>

      <DiagnosisCta />
    </main>
  )
}

function MenuItem({ menu: m }: { menu: Menu }) {
  const withGrotty = categoryOf(m).id !== "head" && !m.contents?.some((c) => c.includes("GROTTY"))
  const backOption = m.category === "head" ? OPTIONS[0] : undefined
  return (
    <Reveal>
      <article
        id={m.id}
        className="grid scroll-mt-28 gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:grid-cols-[1fr_300px] md:gap-10 md:p-8"
      >
        <div className="min-w-0">
          {(m.popular || m.referralOnly) && (
            <p className="mb-3 flex flex-wrap gap-2 text-xs">
              {m.popular && (
                <span
                  style={{ backgroundColor: "var(--c)" }}
                  className="rounded-full px-3 py-1 font-medium text-white"
                >
                  {m.popular}
                </span>
              )}
              {m.referralOnly && (
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 font-medium text-[var(--color-ink-muted)]">
                  ご紹介の方のみ
                </span>
              )}
            </p>
          )}
          <h3 className="font-serif text-xl font-medium leading-snug text-[var(--color-ink)] md:text-2xl">
            {m.name}
          </h3>
          {m.subtitle && (
            <p className="mt-1 font-serif text-[15px] font-medium text-[var(--c)]">{m.subtitle}</p>
          )}

          <p className="mt-4 max-w-[34em] text-sm leading-relaxed text-[var(--color-ink)]">{m.lead}</p>
          {m.note && <p className="mt-1.5 text-xs font-medium text-[var(--c)]">※{m.note}</p>}

          {m.detail && (
            <details className="group mt-4 max-w-[34em]">
              <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-[var(--c)] [&::-webkit-details-marker]:hidden">
                <span className="underline underline-offset-4">くわしい説明を読む</span>
                <ArrowDownIcon className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 space-y-2 rounded-2xl bg-[var(--color-bg)] p-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {m.detail.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </details>
          )}

          {m.contents && (
            <div className="mt-5">
              <p className="text-xs font-medium text-[var(--color-ink-muted)]">コースの内容</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {m.contents.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-ink)]"
                  >
                    <CheckIcon className="h-3.5 w-3.5 text-[var(--c)]" weight="bold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <p className="text-xs font-medium text-[var(--color-ink-muted)]">こんな方におすすめ</p>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {m.forWhom.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--c)]" weight="fill" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-xs font-medium text-[var(--color-ink-muted)]">期待できること</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {m.expect.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-[var(--c)]/40 bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--c)]"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="self-start rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 md:sticky md:top-28">
          <p className="text-sm text-[var(--color-ink-muted)]">{duration(m.minutes)}</p>
          <p className="mt-1 font-serif text-3xl font-medium tabular-nums text-[var(--color-ink)]">
            {priceText(m)}
          </p>
          <PriceNotes menu={m} />

          <dl className="mt-4 space-y-2.5 border-t border-[var(--color-border)] pt-4 text-xs leading-relaxed">
            {m.parts && (
              <div>
                <dt className="text-[var(--color-ink-muted)]">施術部位</dt>
                <dd className="mt-0.5 font-medium text-[var(--color-ink)]">{m.parts}</dd>
              </div>
            )}
            {withGrotty && (
              <div>
                <dt className="text-[var(--color-ink-muted)]">付いてくるもの</dt>
                <dd className="mt-0.5 font-medium text-[var(--color-ink)]">GROTTY PRO 全身照射</dd>
              </div>
            )}
            {backOption && (
              <div>
                <dt className="text-[var(--color-ink-muted)]">おすすめオプション</dt>
                <dd className="mt-0.5 font-medium text-[var(--color-ink)]">
                  {backOption.name}追加 {backOption.minutes}分 {yen(backOption.price)}
                </dd>
              </div>
            )}
          </dl>

          <BookButtons menu={m} />
        </aside>
      </article>
    </Reveal>
  )
}

function PriceNotes({ menu: m }: { menu: Menu }) {
  const first = firstText(m)
  const weekday = weekdayText(m)
  if (!first && !weekday) return null
  return (
    <p className="mt-2 flex flex-wrap gap-1.5 text-xs">
      {first && (
        <span style={{ backgroundColor: "var(--c)" }} className="rounded-full px-2.5 py-0.5 font-medium text-white">
          {first}
        </span>
      )}
      {weekday && (
        <span style={{ backgroundColor: "var(--c)" }} className="rounded-full px-2.5 py-0.5 font-medium text-white">
          {weekday}
        </span>
      )}
    </p>
  )
}

const primaryBtn =
  "flex min-h-[44px] w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] active:scale-[0.98]"
const secondaryBtn =
  "flex min-h-[44px] w-full touch-manipulation items-center justify-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-muted)] active:scale-[0.98]"

function BookButtons({ menu: m }: { menu: Menu }) {
  if (m.referralOnly) {
    return (
      <a
        href={bookingHref(BOOKING.main)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex min-h-[44px] w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-[var(--color-line-brand)] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
      >
        <span>ご紹介の方はLINEで予約</span>
        <ArrowUpRightIcon className="h-4 w-4" />
      </a>
    )
  }
  if (!m.square) return null
  const hasFirst = Boolean(m.square.firstServiceId && m.firstPrice)
  return (
    <div className="mt-5 space-y-2.5">
      {hasFirst && (
        <a href={squareUrl(m, { first: true })} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
          <span>はじめての方の予約</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      )}
      <a href={squareUrl(m)} target="_blank" rel="noopener noreferrer" className={hasFirst ? secondaryBtn : primaryBtn}>
        <span>{hasFirst ? "2回目以降の方の予約" : "このメニューを予約"}</span>
        <ArrowUpRightIcon className="h-4 w-4" />
      </a>
      <p className="pt-1 text-center text-xs text-[var(--color-ink-muted)]">Web予約（Square）が開きます</p>
    </div>
  )
}
