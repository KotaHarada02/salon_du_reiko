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

/** カテゴリの色を子要素から var(--c) で使えるようにする */
const themeStyle = (cat: Category) => ({ "--c": cat.color }) as CSSProperties

/** カテゴリでいちばん安い価格（目的ボタンの「〜」表示用）。ご紹介のみのメニューは含めない */
const minPrice = (cat: Category) => Math.min(...menusIn(cat.id).map((m) => m.price))

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Menu" subtitle="施術メニュー" />

      <div className="container max-w-5xl">
        {/* 目的から選ぶ入口。押せるとわかるよう、枠と矢印のあるボタンにする */}
        <div className="grid gap-10 md:grid-cols-[1fr_340px] md:gap-12">
          <Reveal>
            <h2 className="text-xl text-[var(--salon-text)] md:text-2xl">どこを整えたいですか？</h2>
            <p className="mt-1 text-sm text-stone-500">押すと、そのメニューの説明へ移動します。</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id} style={themeStyle(cat)}>
                  <a
                    href={`#${cat.id}`}
                    className="group flex min-h-14 items-center justify-between gap-3 border border-[var(--salon-border)] border-l-4 border-l-[var(--c)] bg-white px-4 py-3 transition-[border-color,transform] duration-200 hover:border-[var(--c)] active:scale-[0.99]"
                  >
                    <span>
                      <span className="block text-[15px] text-[var(--salon-text)]">{cat.ja}</span>
                      <span className="block font-serif text-xs tabular-nums text-stone-500">{yen(minPrice(cat))}〜</span>
                    </span>
                    <ArrowDownIcon className="h-4 w-4 shrink-0 text-[var(--c)] transition-transform group-hover:translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
              <img src="/img/treatment.jpg" alt="GROTTY PRO を使ったフェイシャルの施術風景" className="h-full w-full object-cover object-[center_45%]" />
            </div>
            <div className="border border-t-0 border-[var(--salon-border)] bg-white p-5">
              <p className="text-sm text-[var(--salon-text)]">どれを選べばいいか迷ったら</p>
              <DiagnosisButton className="mt-3 w-full" />
              <LineButton className="mt-2 py-3.5" label="LINEで相談する" />
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-stone-500">
          {GROTTY_NOTE}
          {FOOT_NOTE}
          表示価格は税込です。
        </p>

        {CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id} style={themeStyle(cat)} className="scroll-mt-28 pt-20 md:pt-28">
            <Reveal>
              <p className="font-script text-5xl leading-[1.15] text-[var(--c)] md:text-6xl">{cat.en}</p>
              <h2 className="mt-2 text-2xl text-[var(--salon-text)] md:text-3xl">{cat.ja}</h2>
              <p className="mt-2 text-sm text-stone-500">{cat.lead}</p>
            </Reveal>

            <div className="mt-8 space-y-10 border-t-2 border-[var(--c)] pt-8">
              {menusIn(cat.id, { includeReferral: true }).map((m) => (
                <MenuItem key={m.id} menu={m} />
              ))}
            </div>
          </section>
        ))}

        <section id="option" className="scroll-mt-28 pt-20 md:pt-28">
          <h2 className="text-2xl text-[var(--salon-text)] md:text-3xl">オプション</h2>
          <div className="mt-6 border-t border-[var(--salon-border)]">
            {OPTIONS.map((o) => (
              <div key={o.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-[var(--salon-border)] py-4">
                <h3 className="text-base text-[var(--salon-text)] md:text-lg">
                  {o.name}
                  <span className="ml-3 font-sans text-sm text-stone-500">{o.minutes}分</span>
                </h3>
                <span className="font-serif text-lg tabular-nums text-[var(--salon-text)]">{yen(o.price)}</span>
                <p className="w-full text-xs text-stone-500">{o.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-stone-500">
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
  // GROTTY PRO はヘッドスパ以外に付く。コース内容にすでに書いてあるものは重ねて出さない
  const withGrotty = categoryOf(m).id !== "head" && !m.contents?.some((c) => c.includes("GROTTY"))
  const backOption = m.category === "head" ? OPTIONS[0] : undefined
  return (
    <Reveal>
      <article id={m.id} className="grid scroll-mt-28 gap-6 border-b border-[var(--salon-border)] pb-10 md:grid-cols-[1fr_300px] md:gap-10">
        <div className="min-w-0">
          {(m.popular || m.referralOnly) && (
            <p className="mb-3 flex flex-wrap gap-2 text-xs">
              {m.popular && <span className="bg-[var(--c)] px-2 py-1 text-white">{m.popular}</span>}
              {m.referralOnly && <span className="border border-stone-300 px-2 py-1 text-stone-600">ご紹介の方のみ</span>}
            </p>
          )}
          <h3 className="text-xl leading-snug text-[var(--salon-text)] md:text-2xl">{m.name}</h3>
          {m.subtitle && <p className="mt-1 font-serif text-[15px] text-[var(--c)]">{m.subtitle}</p>}

          <p className="mt-4 max-w-[34em] text-sm leading-relaxed text-[var(--salon-text)]">{m.lead}</p>
          {m.note && <p className="mt-1 text-xs text-[var(--c)]">※{m.note}</p>}

          {/* 長い説明は閉じておき、読みたい方だけ開けるようにする */}
          {m.detail && (
            <details className="group mt-3 max-w-[34em]">
              <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm text-[var(--c)] [&::-webkit-details-marker]:hidden">
                <span className="border-b border-current pb-0.5">くわしい説明を読む</span>
                <ArrowDownIcon className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 space-y-2 text-sm leading-relaxed">
                {m.detail.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </details>
          )}

          {m.contents && (
            <div className="mt-5">
              <p className="text-xs text-stone-500">コースの内容</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {m.contents.map((c) => (
                  <li key={c} className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 text-sm text-[var(--salon-text)] ring-1 ring-[var(--salon-border)]">
                    <CheckIcon className="h-3.5 w-3.5 text-[var(--c)]" weight="bold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <p className="text-xs text-stone-500">こんな方におすすめ</p>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {m.forWhom.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-[var(--salon-text)]">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--c)]" weight="fill" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-xs text-stone-500">期待できること</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {m.expect.map((e) => (
                <li key={e} className="border border-[var(--c)] px-2.5 py-1 text-xs text-[var(--c)]">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 時間・料金・予約ボタンをひとまとめにする */}
        <aside className="self-start bg-white p-5 ring-1 ring-[var(--salon-border)] md:sticky md:top-28">
          <p className="text-sm text-stone-500">{duration(m.minutes)}</p>
          <p className="font-serif text-3xl tabular-nums text-[var(--salon-text)]">{priceText(m)}</p>
          <PriceNotes menu={m} />

          <dl className="mt-4 space-y-2 border-t border-[var(--salon-border)] pt-4 text-xs leading-relaxed">
            {m.parts && (
              <div>
                <dt className="text-stone-500">施術部位</dt>
                <dd className="text-[var(--salon-text)]">{m.parts}</dd>
              </div>
            )}
            {withGrotty && (
              <div>
                <dt className="text-stone-500">付いてくるもの</dt>
                <dd className="text-[var(--salon-text)]">GROTTY PRO 全身照射</dd>
              </div>
            )}
            {backOption && (
              <div>
                <dt className="text-stone-500">おすすめオプション</dt>
                <dd className="text-[var(--salon-text)]">
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
      {first && <span className="bg-[var(--c)] px-2 py-1 text-white">{first}</span>}
      {weekday && <span className="bg-[var(--c)] px-2 py-1 text-white">{weekday}</span>}
    </p>
  )
}

const primaryBtn =
  "flex w-full items-center justify-center gap-2 bg-[var(--salon-text)] px-4 py-3.5 text-sm text-white transition-[background-color,transform] duration-200 hover:bg-[#222] active:scale-[0.98]"
const secondaryBtn =
  "flex w-full items-center justify-center gap-2 border border-[var(--salon-text)] px-4 py-3 text-sm text-[var(--salon-text)] transition-[background-color,transform] duration-200 hover:bg-[var(--salon-bg)] active:scale-[0.98]"

/** Square の予約ページを、このメニューを選んだ状態で開く。ご紹介のみのメニューは LINE で受ける */
function BookButtons({ menu: m }: { menu: Menu }) {
  if (m.referralOnly) {
    return (
      <a
        href={bookingHref(BOOKING.main)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex w-full items-center justify-center gap-2 bg-[#06C755] px-4 py-3.5 text-sm text-white transition-[opacity,transform] duration-200 hover:opacity-90 active:scale-[0.98]"
      >
        ご紹介の方はLINEで予約
        <ArrowUpRightIcon className="h-4 w-4" />
      </a>
    )
  }
  if (!m.square) return null
  const hasFirst = Boolean(m.square.firstServiceId && m.firstPrice)
  return (
    <div className="mt-5 space-y-2">
      {hasFirst && (
        <a href={squareUrl(m, { first: true })} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
          はじめての方の予約
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      )}
      <a href={squareUrl(m)} target="_blank" rel="noopener noreferrer" className={hasFirst ? secondaryBtn : primaryBtn}>
        {hasFirst ? "2回目以降の方の予約" : "このメニューを予約"}
        <ArrowUpRightIcon className="h-4 w-4" />
      </a>
      <p className="pt-1 text-center text-[11px] text-stone-500">Web予約（Square）が開きます</p>
    </div>
  )
}
