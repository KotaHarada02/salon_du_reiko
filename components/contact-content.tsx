"use client"

import Link from "next/link"
import { SparkleIcon } from "@phosphor-icons/react/dist/ssr"
import { PageHeader } from "@/components/page-header"
import { ChannelIcon, LineButton } from "@/components/booking-buttons"
import { BOOKING, FIRST_NOTE, MENUS, SALON, firstText, priceText, type MenuId, duration } from "@/lib/salon"
import { useSearchParams } from "next/navigation"

export function ContactContent() {
  const searchParams = useSearchParams()
  const menuId = searchParams.get("menu") ?? undefined
  const chosen = menuId && menuId in MENUS ? MENUS[menuId as MenuId] : undefined

  return (
    <main className="min-h-screen pb-32">
      <PageHeader
        subtitle="ご予約・お問い合わせ"
        description="ご予約もメニューのご相談も、公式LINEまたは各種予約窓口から承っています。"
      />

      <div className="container max-w-4xl pt-12 md:pt-16">
        {chosen && (
          <div className="mb-8 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-accent-soft)]/50 p-6">
            <p className="text-xs font-medium text-[var(--color-accent)]">診断結果のメニュー</p>
            <p className="mt-1.5 font-serif text-lg font-medium text-[var(--color-ink)]">
              {chosen.name}
              <span className="ml-3 font-sans text-sm font-normal text-[var(--color-ink-muted)]">
                {duration(chosen.minutes)} {priceText(chosen)}
                {firstText(chosen) && `（${firstText(chosen)}）`}
              </span>
            </p>
            <p className="mt-2 text-xs text-[var(--color-ink-muted)]">
              下のLINEボタンを押すと、このメニュー名がコピーされます。LINEのトークに貼り付けて送ってください。
            </p>
          </div>
        )}

        {/* メイン：公式LINE */}
        <section className="grid gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#06C755]/10 px-3 py-1 text-xs font-medium text-[#059640]">
              <ChannelIcon channel={BOOKING.main} size={18} />
              おすすめの窓口
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-[var(--color-ink)]">
              公式LINEで予約・相談
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              ご予約も、メニューのご相談も、LINEのトークで受け付けています。「どのメニューがいいか迷っている」というご相談もどうぞ。
            </p>
          </div>
          <div>
            <LineButton
              className="w-full md:min-w-[260px]"
              copyText={chosen ? `【30秒診断の結果】\n${chosen.name}（${duration(chosen.minutes)}）\n\nご希望の日時：` : undefined}
            />
          </div>
        </section>

        {/* サブ窓口 */}
        <section className="mt-12">
          <h2 className="font-serif text-lg font-medium text-[var(--color-ink)]">ほかの予約方法</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {BOOKING.subs.map((c) => {
              const body = (
                <>
                  <ChannelIcon channel={c} size={36} />
                  <span className="mt-4 block font-serif text-lg font-medium text-[var(--color-ink)]">{c.label}</span>
                  <span className="mt-1 block text-xs text-[var(--color-ink-muted)]">{c.url ? c.action : "準備中"}</span>
                </>
              )
              return c.url ? (
                <a
                  key={c.id}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-bg)]"
                >
                  {body}
                </a>
              ) : (
                <div key={c.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 opacity-50">
                  {body}
                </div>
              )
            })}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-[var(--color-ink-muted)]">
            完全予約制 ／ 営業時間 {SALON.hours} ／ 定休日 {SALON.closed}
            <br />
            お支払い：{SALON.payment}
            <br />
            {FIRST_NOTE}
          </p>
        </section>

        <Link
          href="/recommend"
          className="mt-12 flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <SparkleIcon className="h-5 w-5" weight="fill" />
          </span>
          <span>
            <span className="block font-serif text-lg font-medium text-[var(--color-ink)]">
              メニューが決まっていない方へ
            </span>
            <span className="block text-xs text-[var(--color-ink-muted)]">
              30秒診断で、合うメニューを先に確認できます
            </span>
          </span>
        </Link>
      </div>
    </main>
  )
}
