import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"

/** 各ページ末尾に置く診断への導線 */
export function DiagnosisCta({ lead = "どのメニューにするか迷ったら" }: { lead?: string }) {
  return (
    <section className="container mt-24 max-w-4xl">
      <Link
        href="/recommend"
        className="group grid gap-6 bg-[var(--salon-text)] p-8 text-white transition-colors hover:bg-[#2f2f2f] md:grid-cols-[1fr_auto] md:items-center md:p-12"
      >
        <div>
          <p className="text-xs tracking-[0.2em] text-[var(--salon-gold)]">{lead}</p>
          <p className="mt-3 font-serif text-2xl leading-relaxed text-white md:text-3xl">4つの質問で、あなたに合うメニューを。</p>
          <p className="mt-2 text-sm text-stone-400">30秒で、おすすめのメニューと料金がわかります。</p>
        </div>
        <span className="inline-flex items-center gap-2 self-start bg-[var(--salon-gold)] px-6 py-4 text-sm tracking-wider text-white md:self-auto">
          診断をはじめる
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </section>
  )
}
