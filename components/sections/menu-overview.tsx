import Link from "next/link"
import type { CSSProperties } from "react"
import { ArrowRightIcon, CaretRightIcon } from "@phosphor-icons/react/ssr"
import { DiagnosisButton } from "@/components/diagnosis-cta"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
import { CATEGORIES, firstText, menusIn, priceText, weekdayText, duration } from "@/lib/salon"

export function MenuOverview() {
  return (
    <section className="bg-[var(--salon-bg)] py-20 md:py-28">
      <div className="container">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-2xl text-[var(--salon-text)] md:text-3xl">整えたいところから選ぶ</h2>
          <DiagnosisButton href="#diagnosis" label="迷ったら30秒診断" className="self-start md:self-auto" />
        </Reveal>

        {/* 箱で囲まず、カテゴリの色は見出しの線と英字だけに使う。フェイシャルとボディを色で見分けられるようにする */}
        <div className="mt-12 grid gap-x-14 gap-y-14 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <RevealGroup key={cat.id} style={{ "--c": cat.color } as CSSProperties}>
              <RevealItem className="border-t-2 border-[var(--c)] pt-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg text-[var(--salon-text)] md:text-xl">{cat.ja}</h3>
                  <span className="font-script text-2xl leading-[1.1] text-[var(--c)]">{cat.en}</span>
                </div>
                <p className="mt-1 text-xs text-stone-500">{cat.lead}</p>
              </RevealItem>
              <div className="mt-2">
                {menusIn(cat.id).map((m) => {
                  const first = firstText(m)
                  const weekday = weekdayText(m)
                  return (
                    <RevealItem key={m.id}>
                      <Link
                        href={`/menu#${m.id}`}
                        className="group flex items-center justify-between gap-4 border-b border-[var(--salon-border)] py-4 transition-colors hover:bg-white md:-mx-3 md:px-3"
                      >
                        <span>
                          <span className="block text-[15px] text-[var(--salon-text)] transition-colors group-hover:text-[var(--c)]">
                            {m.name}
                            {m.popular && <span className="ml-2 text-[11px] text-[var(--c)]">{m.popular}</span>}
                          </span>
                          <span className="mt-0.5 block text-xs text-stone-400">
                            {duration(m.minutes)}
                            {m.subtitle && `　${m.subtitle}`}
                          </span>
                        </span>
                        <span className="shrink-0 text-right">
                          <span className="block font-serif tabular-nums text-[var(--salon-text)]">{priceText(m)}</span>
                          {first && <span className="block text-[11px] text-[var(--c)]">{first}</span>}
                          {weekday && <span className="block text-[11px] text-[var(--c)]">{weekday}</span>}
                        </span>
                        <CaretRightIcon className="h-4 w-4 shrink-0 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--c)]" />
                      </Link>
                    </RevealItem>
                  )
                })}
              </div>
            </RevealGroup>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl text-xs text-stone-400">
            表示価格は税込です。初回価格は、はじめてご来店の方が対象です。ヘッドスパ以外のコースには、導入機器 GROTTY PRO の全身照射が付きます。どのコースも、施術の前後に足のマッサージが少し付きます。オプション「背中ほぐし」（15分 ¥3,000）も追加できます。
          </p>
          <Link
            href="/menu"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start border border-[var(--salon-text)] px-6 py-4 text-sm text-[var(--salon-text)] transition-[background-color,transform] duration-200 hover:bg-white active:scale-[0.98]"
          >
            メニューの詳しい内容を見る
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
