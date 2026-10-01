import Link from "next/link"
import type { CSSProperties } from "react"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
import { CATEGORIES, firstText, menusIn, priceText, weekdayText, duration } from "@/lib/salon"

export function MenuOverview() {
  return (
    <section className="bg-[var(--salon-bg)] py-20 md:py-28">
      <div className="container">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">MENU</span>
            <h2 className="mt-3 text-2xl text-[var(--salon-text)] md:text-3xl">整えたいところから選ぶ</h2>
          </div>
          <Link
            href="#diagnosis"
            className="inline-flex items-center gap-2 self-start border-b border-[var(--salon-gold)] pb-1 text-sm text-[var(--salon-text)] transition-colors hover:text-[var(--salon-gold)] md:self-auto"
          >
            迷ったら30秒診断で選ぶ
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        {/* カテゴリごとに色を分け、フェイシャルとボディをひと目で見分けられるようにする */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <RevealGroup
              key={cat.id}
              style={{ "--c": cat.color, "--t": cat.tint } as CSSProperties}
              className="border border-[var(--salon-border)] border-t-4 border-t-[var(--c)] bg-white"
            >
              <RevealItem className="bg-[var(--t)] px-5 py-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-lg text-[var(--salon-text)]">{cat.ja}</h3>
                  <span className="font-script text-2xl leading-none text-[var(--c)]">{cat.en}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{cat.lead}</p>
              </RevealItem>
              {menusIn(cat.id).map((m) => {
                const first = firstText(m)
                const weekday = weekdayText(m)
                return (
                  <RevealItem key={m.id}>
                    <Link
                      href={`/menu#${m.id}`}
                      className="group flex items-baseline justify-between gap-4 border-t border-[var(--salon-border)] px-5 py-4 transition-colors hover:bg-[var(--t)]"
                    >
                      <span>
                        {m.popular && <span className="mb-1 inline-block bg-[var(--c)] px-1.5 py-0.5 text-[10px] text-white">{m.popular}</span>}
                        <span className="block text-[15px] text-[var(--salon-text)] transition-colors group-hover:text-[var(--c)]">{m.name}</span>
                        <span className="mt-0.5 block text-xs text-gray-400">
                          {duration(m.minutes)}
                          {m.subtitle && ` ／ ${m.subtitle}`}
                        </span>
                      </span>
                      <span className="shrink-0 text-right">
                        <span className="block font-serif text-[var(--salon-text)]">{priceText(m)}</span>
                        {first && <span className="block text-[11px] text-[var(--c)]">{first}</span>}
                        {weekday && <span className="block text-[11px] text-[var(--c)]">{weekday}</span>}
                      </span>
                    </Link>
                  </RevealItem>
                )
              })}
            </RevealGroup>
          ))}
          <Reveal className="flex items-center md:col-span-1">
            <Link
              href="/menu"
              className="flex w-full items-center justify-between border border-[var(--salon-gold)] px-5 py-6 text-sm text-[var(--salon-text)] transition-colors hover:bg-white"
            >
              くわしい内容・おすすめの方はメニューページへ
              <ArrowRightIcon className="h-4 w-4 text-[var(--salon-gold)]" />
            </Link>
          </Reveal>
        </div>
        <p className="mt-6 text-xs text-gray-400">表示価格は税込です。初回価格は、はじめてご来店の方が対象です。ヘッドスパ以外のコースには、導入機器 GROTTY PRO の全身照射が付きます。どのコースも、施術の前後に足のマッサージが少し付きます。オプション「背中ほぐし」（15分 ¥3,000）も追加できます。</p>
      </div>
    </section>
  )
}
