import Link from "next/link"
import type { CSSProperties } from "react"
import { CheckIcon } from "@phosphor-icons/react/ssr"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/motion-reveal"
import {
  CATEGORIES,
  FIRST_NOTE,
  FOOT_NOTE,
  GROTTY_NOTE,
  OPTIONS,
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

/** カテゴリの色を子要素から var(--c) で使えるようにする */
const themeStyle = (cat: Category) => ({ "--c": cat.color }) as CSSProperties

/** カテゴリでいちばん安い価格（目的カードの「〜」表示用）。ご紹介のみのメニューは含めない */
const minPrice = (cat: Category) => Math.min(...menusIn(cat.id).map((m) => m.price))

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Menu" subtitle="施術メニュー" />

      <div className="container max-w-5xl">
        {/* 目的から選ぶ入口。整えたいところをタップすると、そのカテゴリへ移動する */}
        <Reveal>
          <p className="font-serif text-lg text-[var(--salon-text)] md:text-xl">どこを整えたいですか？</p>
          <ul className="mt-5 grid gap-x-10 border-t border-[var(--salon-border)] sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <li key={cat.id} style={themeStyle(cat)} className="border-b border-[var(--salon-border)]">
                <a href={`#${cat.id}`} className="group flex items-baseline justify-between gap-4 py-4">
                  <span className="flex items-baseline gap-3">
                    <span className="inline-block h-2 w-2 shrink-0 translate-y-[-2px] bg-[var(--c)]" aria-hidden />
                    <span className="text-[15px] text-[var(--salon-text)] transition-colors group-hover:text-[var(--c)]">{cat.ja}</span>
                  </span>
                  <span className="shrink-0 font-serif text-sm tabular-nums text-stone-500">{yen(minPrice(cat))}〜</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            どれを選べばいいか迷ったら、
            <Link href="/recommend" className="border-b border-[var(--salon-gold)] pb-0.5 text-[var(--salon-text)] hover:text-[var(--salon-gold)]">
              30秒メニュー診断
            </Link>
            へ。
          </p>
          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            {GROTTY_NOTE}
            {FOOT_NOTE}
          </p>
        </Reveal>

        {CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id} style={themeStyle(cat)} className="scroll-mt-28 pt-24 md:pt-32">
            <Reveal>
              <p className="font-script text-5xl leading-[1.15] text-[var(--c)] md:text-6xl">{cat.en}</p>
              <h2 className="mt-2 text-2xl text-[var(--salon-text)] md:text-3xl">{cat.ja}</h2>
              <p className="mt-2 text-sm text-stone-500">{cat.lead}</p>
            </Reveal>

            <div className="mt-8 border-t-2 border-[var(--c)]">
              {menusIn(cat.id, { includeReferral: true }).map((m) => (
                <MenuItem key={m.id} menu={m} />
              ))}
            </div>
          </section>
        ))}

        <section id="option" className="scroll-mt-28 pt-24 md:pt-32">
          <div className="mb-6 flex items-baseline justify-between border-b border-[var(--salon-border)] pb-3">
            <h2 className="text-3xl text-stone-800">Option</h2>
            <p className="text-xs tracking-widest text-[var(--salon-gold)]">オプション</p>
          </div>
          <div className="space-y-6">
            {OPTIONS.map((o) => (
              <div key={o.name} className="border-b border-stone-200 pb-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base text-stone-800 md:text-lg">
                    {o.name}
                    <span className="ml-3 font-sans text-sm text-stone-400">{o.minutes}分</span>
                  </h3>
                  <span className="font-serif text-stone-600">{yen(o.price)}</span>
                </div>
                <p className="mt-1 text-xs text-stone-400">{o.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-stone-400">表示価格は税込です。{FIRST_NOTE}{FOOT_NOTE}</p>
        </section>
      </div>
    </main>
  )
}

function MenuItem({ menu: m }: { menu: Menu }) {
  const first = firstText(m)
  const weekday = weekdayText(m)
  // GROTTY PRO はヘッドスパ以外に付く。コース内容にすでに書いてあるものは重ねて出さない
  const withGrotty = categoryOf(m).id !== "head" && !m.contents?.some((c) => c.includes("GROTTY"))
  const backOption = m.category === "head" ? OPTIONS[0] : undefined
  return (
    <Reveal>
      <article
        id={m.id}
        className="grid scroll-mt-28 gap-8 border-b border-[var(--salon-border)] py-10 md:grid-cols-[1fr_250px] md:gap-14 md:py-14"
      >
        <div className="min-w-0">
          {(m.popular || m.referralOnly) && (
            <p className="mb-2 text-xs text-[var(--c)]">
              {m.popular}
              {m.referralOnly && <span className="text-stone-500">ご紹介の方のみ</span>}
            </p>
          )}
          <h3 className="text-xl leading-snug text-[var(--salon-text)] md:text-2xl">{m.name}</h3>
          {m.subtitle && <p className="mt-1 font-serif text-[15px] text-[var(--c)]">{m.subtitle}</p>}

          <div className="mt-5 max-w-[34em] space-y-2 text-sm leading-relaxed">
            <p className="text-[var(--salon-text)]">{m.lead}</p>
            {m.detail?.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {m.note && <p className="text-xs text-[var(--c)]">※{m.note}</p>}
          </div>

          {m.contents && (
            <ul className="mt-5 space-y-1">
              {m.contents.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-[var(--salon-text)]">
                  <CheckIcon className="h-3.5 w-3.5 shrink-0 text-[var(--c)]" weight="bold" />
                  {c}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <PlainList title="こんな方におすすめ" items={m.forWhom} />
            <PlainList title="期待できること" items={m.expect} />
          </div>
        </div>

        {/* 時間・料金・予約。PCでは右側にまとめる */}
        <div className="md:border-l md:border-[var(--salon-border)] md:pl-8">
          <p className="text-sm text-stone-500">{duration(m.minutes)}</p>
          <p className="mt-1 font-serif text-3xl tabular-nums text-[var(--salon-text)]">{priceText(m)}</p>
          {(first || weekday) && (
            <p className="mt-2 space-x-3 text-sm text-[var(--c)]">
              {first && <span>{first}</span>}
              {weekday && <span>{weekday}</span>}
            </p>
          )}

          <dl className="mt-6 space-y-3 text-xs leading-relaxed">
            {m.parts && (
              <div>
                <dt className="text-stone-400">施術部位</dt>
                <dd className="mt-0.5 text-[var(--salon-text)]">{m.parts}</dd>
              </div>
            )}
            {withGrotty && (
              <div>
                <dt className="text-stone-400">付いてくるもの</dt>
                <dd className="mt-0.5 text-[var(--salon-text)]">GROTTY PRO 全身照射</dd>
              </div>
            )}
            {backOption && (
              <div>
                <dt className="text-stone-400">おすすめオプション</dt>
                <dd className="mt-0.5 text-[var(--salon-text)]">
                  {backOption.name}追加 {backOption.minutes}分 {yen(backOption.price)}
                </dd>
              </div>
            )}
          </dl>

          {m.square && !m.referralOnly && (
            <div className="mt-6 flex flex-col items-start gap-2 text-sm">
              {m.square.firstServiceId && m.firstPrice && (
                <a
                  href={squareUrl(m, { first: true })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[var(--c)] pb-0.5 text-[var(--salon-text)] transition-colors hover:text-[var(--c)]"
                >
                  はじめての方の予約 →
                </a>
              )}
              <a
                href={squareUrl(m)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[var(--c)] pb-0.5 text-[var(--salon-text)] transition-colors hover:text-[var(--c)]"
              >
                {m.square.firstServiceId && m.firstPrice ? "2回目以降の方の予約 →" : "Webで予約 →"}
              </a>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}

function PlainList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs text-[var(--c)]">{title}</p>
      <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-stone-600">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}
