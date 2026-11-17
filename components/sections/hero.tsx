import Link from "next/link"
import { ArrowRightIcon, SparkleIcon, ChatCircleDotsIcon } from "@phosphor-icons/react/ssr"
import { BOOKING, OWNER, SALON, bookingHref } from "@/lib/salon"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pb-12 pt-16 md:pb-24 md:pt-32">
      <div className="container grid items-center gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        {/* ビジュアル：スマホでは最上部に配置し、開いた瞬間にサロンの空気感が伝わるようにする */}
        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] sm:aspect-[16/9] lg:aspect-[5/6] lg:rounded-3xl">
            <img
              src="/img/treatment.jpg"
              alt="ログハウスのサロンでフェイシャルケアを受けるお客様"
              width={1000}
              height={1200}
              fetchPriority="high"
              className="h-full w-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent lg:from-black/35" />

            {/* 写真上のロケーションバッジ（1行で収まる長さに固定） */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 sm:top-4 sm:left-4 sm:right-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-[11px] font-medium text-[var(--color-ink)] shadow-sm backdrop-blur-md sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                {SALON.area}・ログハウスの貸切サロン
              </span>
              <span className="rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                完全予約制
              </span>
            </div>

            {/* 写真下部のオーナー・営業時間情報 */}
            <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 text-white sm:inset-x-5 sm:bottom-5">
              <div>
                <p className="text-xs font-medium text-white/95 sm:text-sm">
                  オーナー {OWNER.name}（{OWNER.career}）
                </p>
                <p className="text-[11px] text-white/80 sm:text-xs">
                  {SALON.building} ／ {SALON.hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* コピー＆主要導線（スマホでは写真のすぐ下にピタッと収まる） */}
        <div className="order-2 lg:order-1">
          <h1 className="font-serif text-[25px] font-medium leading-[1.42] tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-[42px] lg:leading-[1.45]">
            お肌も心も元気になれる、
            <br />
            ログハウスの貸切エステ。
          </h1>

          <p className="mt-3 max-w-[34em] text-[13.5px] leading-[1.75] text-[var(--color-ink-muted)] sm:mt-5 sm:text-base sm:leading-relaxed">
            現役看護師のオーナーがひとりで担当するプライベートサロンです。4つの質問に答えるだけで、今のあなたに合うケアと料金がわかります。
          </p>

          {/* CTA群：スマホではメインを横幅100%、サブ2つを2列均等配置にして美しく揃える */}
          <div className="mt-5 space-y-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:space-y-0">
            <a
              href="#diagnosis"
              className="group flex min-h-[50px] w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_20px_-6px_rgba(47,82,65,0.45)] transition-colors hover:bg-[var(--color-accent-hover)] active:scale-[0.99] sm:w-auto sm:px-7"
            >
              <SparkleIcon className="h-4 w-4 shrink-0" weight="fill" />
              <span>30秒でメニューを診断する</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>

            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-3">
              <Link
                href="/menu"
                className="flex min-h-[46px] touch-manipulation items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:min-h-[50px] sm:px-6 sm:text-sm"
              >
                メニュー・料金
              </Link>
              <a
                href={bookingHref(BOOKING.main)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[46px] touch-manipulation items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-[#06C755] sm:min-h-[50px] sm:px-6 sm:text-sm"
              >
                <ChatCircleDotsIcon className="h-4 w-4 shrink-0 text-[#06C755]" weight="fill" />
                <span>LINEで予約・相談</span>
              </a>
            </div>
          </div>

          {/* 安心の3つの事実：スマホで3列均等のコンパクトなピル・グリッドに整列 */}
          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-[var(--color-border)] pt-4 text-center sm:mt-8 sm:pt-5">
            <div className="rounded-xl bg-[var(--color-surface)] px-2 py-2 border border-[var(--color-border)]/70">
              <dt className="text-[10px] text-[var(--color-ink-muted)] sm:text-xs">初回フェイシャル</dt>
              <dd className="mt-0.5 font-serif text-xs font-medium tabular-nums text-[var(--color-ink)] sm:text-sm">
                90分 ¥9,900
              </dd>
            </div>
            <div className="rounded-xl bg-[var(--color-surface)] px-2 py-2 border border-[var(--color-border)]/70">
              <dt className="text-[10px] text-[var(--color-ink-muted)] sm:text-xs">アクセス・送迎</dt>
              <dd className="mt-0.5 font-serif text-xs font-medium text-[var(--color-ink)] sm:text-sm">
                駐車場・送迎あり
              </dd>
            </div>
            <div className="rounded-xl bg-[var(--color-surface)] px-2 py-2 border border-[var(--color-border)]/70">
              <dt className="text-[10px] text-[var(--color-ink-muted)] sm:text-xs">安心のお約束</dt>
              <dd className="mt-0.5 font-serif text-xs font-medium text-[var(--color-ink)] sm:text-sm">
                無理な勧誘なし
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
