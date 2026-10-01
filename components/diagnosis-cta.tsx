import Link from "next/link"
import { ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react/ssr"
import { cn } from "@/lib/utils"

/**
 * 30秒診断へのボタン。文字リンクだと押せると気づかれにくいので、塗りのボタンにする。
 * 白い文字が読める濃さ（コントラスト4.5以上）まで金色を沈めている
 */
export function DiagnosisButton({
  href = "/recommend",
  label = "30秒でメニュー診断",
  tone = "light",
  className,
}: {
  href?: string
  label?: string
  /** dark は濃い背景の上に置くとき */
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm tracking-wider transition-[background-color,transform] duration-200 active:scale-[0.98]",
        tone === "light" ? "bg-[#86704C] text-white hover:bg-[#6F5C3D]" : "bg-[var(--salon-gold)] text-[var(--salon-text)] hover:bg-[#C9B38C]",
        className,
      )}
    >
      <SparkleIcon className="h-4 w-4" weight="fill" />
      {label}
      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

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
