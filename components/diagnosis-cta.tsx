import Link from "next/link"
import { ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react/ssr"
import { cn } from "@/lib/utils"

export function DiagnosisButton({
  href = "/recommend",
  label = "30秒でメニュー診断",
  tone = "light",
  className,
}: {
  href?: string
  label?: string
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-[48px] touch-manipulation items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-[background-color,transform] duration-200 active:scale-[0.98]",
        tone === "light"
          ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]"
          : "bg-white text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)]",
        className,
      )}
    >
      <SparkleIcon className="h-4 w-4 shrink-0" weight="fill" />
      <span>{label}</span>
      <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

export function DiagnosisCta({ lead = "どのメニューにするか迷ったら" }: { lead?: string }) {
  return (
    <section className="container mt-20 max-w-4xl">
      <Link
        href="/recommend"
        className="group grid gap-6 rounded-3xl bg-[var(--color-accent)] p-8 text-white transition-colors hover:bg-[var(--color-accent-hover)] md:grid-cols-[1fr_auto] md:items-center md:p-12"
      >
        <div>
          <p className="text-sm font-medium text-white/85">{lead}</p>
          <p className="mt-2 font-serif text-2xl font-medium leading-snug text-white md:text-3xl">
            4つの質問で、あなたに合うメニューを。
          </p>
          <p className="mt-2 text-sm text-white/80">
            30秒で、おすすめのメニューと料金がわかります。
          </p>
        </div>
        <span className="inline-flex min-h-[48px] items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors group-hover:bg-[var(--color-accent-soft)] md:self-auto">
          診断をはじめる
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </section>
  )
}
