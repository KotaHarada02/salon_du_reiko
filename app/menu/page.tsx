import Link from "next/link"
import type { CSSProperties } from "react"
import { CheckIcon } from "@phosphor-icons/react/ssr"
import { PageHeader } from "@/components/page-header"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
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

/** カテゴリの色を子要素から var(--c) / var(--t) で使えるようにする */
const themeStyle = (cat: Category) => ({ "--c": cat.color, "--t": cat.tint }) as CSSProperties

/** カテゴリでいちばん安い価格（目的カードの「〜」表示用）。ご紹介のみのメニューは含めない */
const minPrice = (cat: Category) => Math.min(...menusIn(cat.id).map((m) => m.price))

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Menu" subtitle="施術メニュー" />

      <div className="container max-w-5xl">
        {/* 目的から選ぶ入口。整えたいところをタップすると、そのカテゴリへ移動する */}
        <Reveal>
          <p className="text-center font-serif text-lg text-[var(--salon-text)] md:text-xl">どこを整えたいですか？</p>
        </Reveal>
        <RevealGroup className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => (
            <RevealItem key={cat.id} className={`h-full ${i === CATEGORIES.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}>
              <a
                href={`#${cat.id}`}
                style={themeStyle(cat)}
                className="group flex h-full flex-col justify-between border border-[var(--salon-border)] border-t-4 border-t-[var(--c)] bg-white p-4 transition-colors hover:bg-[var(--t)]"
              >
                <span className="font-script text-2xl leading-none text-[var(--c)]">{cat.en}</span>
                <span className="mt-2 font-serif text-[13px] text-[var(--salon-text)] sm:text-[15px]">{cat.ja}</span>
                <span className="mt-2 hidden flex-1 text-xs leading-relaxed text-gray-500 sm:block">{cat.lead}</span>
                <span className="mt-3 flex items-baseline justify-between text-xs text-[var(--c)]">
                  <span className="font-serif text-sm">{yen(minPrice(cat))}〜</span>
                  <span className="transition-transform group-hover:translate-y-0.5">↓</span>
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Link
          href="/recommend"
          className="mt-6 flex flex-col justify-between gap-2 border border-[var(--salon-gold)] bg-white p-5 transition-colors hover:bg-[var(--salon-bg)] sm:flex-row sm:items-center"
        >
          <span className="text-sm text-[var(--salon-text)]">どれを選べばいいか迷ったら</span>
          <span className="text-sm text-[var(--salon-gold)]">30秒メニュー診断へ →</span>
        </Link>
        <p className="mt-6 border-l-2 border-[var(--salon-gold)] pl-3 text-xs leading-relaxed text-gray-500">
          {GROTTY_NOTE}
          <br />
          {FOOT_NOTE}
        </p>

        {CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id} style={themeStyle(cat)} className="scroll-mt-28 pt-16 md:pt-24">
            <Reveal className="border-l-4 border-[var(--c)] bg-[var(--t)] px-5 py-6 md:px-8 md:py-8">
              <p className="font-script text-4xl leading-none text-[var(--c)] md:text-5xl">{cat.en}</p>
              <h2 className="mt-3 font-serif text-2xl text-[var(--salon-text)] md:text-3xl">{cat.ja}</h2>
              <p className="mt-2 text-sm text-gray-600">{cat.lead}</p>
            </Reveal>

            <div className={`mt-6 grid gap-6 ${menusIn(cat.id, { includeReferral: true }).length > 1 ? "md:grid-cols-2" : ""}`}>
              {menusIn(cat.id, { includeReferral: true }).map((m) => (
                <MenuCard key={m.id} menu={m} />
              ))}
            </div>
          </section>
        ))}

        <section id="option" className="scroll-mt-28 pt-16 md:pt-24">
          <div className="mb-6 flex items-baseline justify-between border-b border-[var(--salon-border)] pb-3">
            <h2 className="text-3xl text-gray-800">Option</h2>
            <p className="text-xs tracking-widest text-[var(--salon-gold)]">オプション</p>
          </div>
          <div className="space-y-6">
            {OPTIONS.map((o) => (
              <div key={o.name} className="border-b border-gray-200 pb-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base text-gray-800 md:text-lg">
                    {o.name}
                    <span className="ml-3 font-sans text-sm text-gray-400">{o.minutes}分</span>
                  </h3>
                  <span className="font-serif text-gray-600">{yen(o.price)}</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">{o.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400">表示価格は税込です。{FIRST_NOTE}{FOOT_NOTE}</p>
        </section>
      </div>
    </main>
  )
}

function MenuCard({ menu: m }: { menu: Menu }) {
  const first = firstText(m)
  const weekday = weekdayText(m)
  // GROTTY PRO はヘッドスパ以外に付く。コース内容にすでに書いてあるものは重ねて出さない
  const withGrotty = categoryOf(m).id !== "head" && !m.contents?.some((c) => c.includes("GROTTY"))
  const backOption = m.category === "head" ? OPTIONS[0] : undefined
  return (
    <Reveal className="h-full">
      <article id={m.id} className="flex h-full scroll-mt-28 flex-col border border-[var(--salon-border)] border-t-2 border-t-[var(--c)] bg-white p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          {m.popular && <span className="bg-[var(--c)] px-2 py-0.5 text-[11px] text-white">{m.popular}</span>}
          {m.referralOnly && <span className="border border-gray-300 px-2 py-0.5 text-[11px] text-gray-500">ご紹介の方のみ</span>}
        </div>
        <h3 className="mt-2 font-serif text-xl leading-snug text-[var(--salon-text)] md:text-[22px]">{m.name}</h3>
        {m.subtitle && <p className="mt-1 font-serif text-sm text-[var(--c)]">{m.subtitle}</p>}
        {m.note && <p className="mt-1 text-xs text-[var(--c)]">※{m.note}</p>}

        <p className="mt-4 text-sm leading-relaxed">{m.lead}</p>
        {m.detail?.map((line) => (
          <p key={line} className="mt-2 text-sm leading-relaxed text-gray-600">
            {line}
          </p>
        ))}

        {m.contents && (
          <ul className="mt-4 space-y-1">
            {m.contents.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm">
                <CheckIcon className="h-4 w-4 shrink-0 text-[var(--c)]" weight="bold" />
                {c}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ListBox title="こんな方におすすめ" items={m.forWhom} />
          <ListBox title="期待できること" items={m.expect} />
        </div>

        <div className="mt-auto pt-5">
          {(m.parts || withGrotty) && (
            <dl className="space-y-1 text-xs text-gray-500">
              {m.parts && (
                <div className="flex gap-2">
                  <dt className="shrink-0 bg-[var(--t)] px-1.5 text-[var(--salon-text)]">施術部位</dt>
                  <dd>{m.parts}</dd>
                </div>
              )}
              {withGrotty && (
                <div className="flex gap-2">
                  <dt className="shrink-0 bg-[var(--t)] px-1.5 text-[var(--salon-text)]">付いてくる</dt>
                  <dd>GROTTY PRO 全身照射</dd>
                </div>
              )}
            </dl>
          )}

          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2 border-t border-[var(--salon-border)] pt-4">
            <span className="border border-[var(--salon-border)] px-2 py-0.5 text-sm text-gray-600">{duration(m.minutes)}</span>
            <span className="font-serif text-2xl text-[var(--salon-text)]">{priceText(m)}</span>
            {first && <span className="bg-[var(--c)] px-2 py-0.5 text-xs text-white">{first}</span>}
            {weekday && <span className="bg-[var(--c)] px-2 py-0.5 text-xs text-white">{weekday}</span>}
          </div>

          {backOption && (
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 bg-[var(--t)] px-3 py-2 text-xs">
              <span className="text-[var(--c)]">おすすめオプション</span>
              <span>
                {backOption.name}追加 {backOption.minutes}分 {yen(backOption.price)}
              </span>
            </p>
          )}

          {m.square && !m.referralOnly && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {m.square.firstServiceId && m.firstPrice && (
                <a
                  href={squareUrl(m, { first: true })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[var(--c)] pb-0.5 text-[var(--salon-text)] hover:text-[var(--c)]"
                >
                  はじめての方の予約（初回 {yen(m.firstPrice)}）→
                </a>
              )}
              <a
                href={squareUrl(m)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[var(--c)] pb-0.5 text-[var(--salon-text)] hover:text-[var(--c)]"
              >
                {m.square.firstServiceId && m.firstPrice ? "2回目以降の方の予約 →" : "このメニューをWebで予約 →"}
              </a>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}

function ListBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[var(--t)] px-4 py-3">
      <p className="text-xs text-[var(--c)]">{title}</p>
      <ul className="mt-1.5 space-y-0.5 text-[13px] leading-relaxed text-gray-600">
        {items.map((i) => (
          <li key={i}>・{i}</li>
        ))}
      </ul>
    </div>
  )
}
