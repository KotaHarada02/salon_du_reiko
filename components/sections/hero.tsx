import Link from "next/link"
import { ArrowRightIcon, SparkleIcon, CheckCircleIcon } from "@phosphor-icons/react/ssr"
import { OWNER, SALON } from "@/lib/salon"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* 左：サロンの約束と主要導線 */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
            {SALON.area}・{SALON.building}（完全予約制）
          </p>

          <h1 className="mt-6 font-serif text-3xl font-medium leading-[1.45] text-[var(--color-ink)] sm:text-4xl lg:text-[44px]">
            「お肌も心も元気」を、
            <br />
            ログハウスの貸切空間で。
          </h1>

          <p className="mt-5 max-w-[34em] text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
            現役看護師のオーナーが、カウンセリングから施術後のティータイムまでひとりで担当するプライベートサロンです。4つの質問に答えるだけで、今のあなたに合うケアと料金がわかります。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#diagnosis"
              className="group inline-flex min-h-[52px] touch-manipulation items-center justify-center gap-2.5 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] active:scale-[0.98]"
            >
              <SparkleIcon className="h-4 w-4" weight="fill" />
              <span>30秒でメニュー診断</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/menu"
              className="inline-flex min-h-[52px] touch-manipulation items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-7 py-3.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              メニュー・料金を見る
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-[var(--color-ink-muted)]">
            <li className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-[var(--color-accent)]" weight="fill" />
              <span>初回フェイシャル ¥9,900</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-[var(--color-accent)]" weight="fill" />
              <span>無料駐車場・貴生川駅送迎</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-[var(--color-accent)]" weight="fill" />
              <span>無理な勧誘なし</span>
            </li>
          </ul>
        </div>

        {/* 右：サロンの空気感が伝わる大きな角丸フレーム */}
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] lg:aspect-[5/6]">
            <img
              src="/img/treatment.jpg"
              alt="ログハウスのサロンでフェイシャルケアを受けるお客様"
              width={1000}
              height={1200}
              fetchPriority="high"
              className="h-full w-full object-cover object-[center_40%]"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3.5 shadow-[0_12px_32px_-16px_rgba(29,36,32,0.12)] sm:absolute sm:bottom-5 sm:left-5 sm:right-5 sm:mt-0">
            <div>
              <p className="text-xs font-medium text-[var(--color-ink)]">
                オーナー {OWNER.name}（{OWNER.career}）
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">
                営業時間 {SALON.hours} ／ 定休 {SALON.closed}
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-xs font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-white"
            >
              予約・相談
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
