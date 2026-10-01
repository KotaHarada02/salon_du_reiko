"use client"

import { useState } from "react"
import { BOOKING, OPTIONS, bookingHref, squareUrl, yen, type BookingChannel, type Menu } from "@/lib/salon"
import { cn } from "@/lib/utils"

const external = (c: BookingChannel) => (c.url ? { target: "_blank", rel: "noopener noreferrer" } : {})

export function ChannelIcon({ channel, size = 20, className }: { channel: BookingChannel; size?: number; className?: string }) {
  return (
    <img
      src={channel.icon}
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 rounded-[22%] object-cover", className)}
      style={{ width: size, height: size }}
    />
  )
}

/**
 * メインの予約ボタン（公式LINE）。
 * copyText を渡すと、押したときに文面をクリップボードへコピーしてから LINE を開く。
 * メッセージ入りURL（oaMessage）は PC や端末によって別画面に飛ぶため使わない
 */
export function LineButton({ className, label, copyText }: { className?: string; label?: string; copyText?: string }) {
  const line = BOOKING.main
  const [copied, setCopied] = useState(false)

  const onClick = () => {
    if (!copyText) return
    navigator.clipboard
      ?.writeText(copyText)
      .then(() => setCopied(true))
      .catch(() => setCopied(false))
  }

  return (
    <div>
      <a
        href={bookingHref(line)}
        {...external(line)}
        onClick={onClick}
        className={cn(
          "flex items-center justify-center gap-3 bg-[#06C755] px-6 py-4 text-sm tracking-wider text-white transition-opacity hover:opacity-90",
          className,
        )}
      >
        <ChannelIcon channel={line} size={22} className="ring-1 ring-white/60" />
        {label ?? line.action}
      </a>
      {copyText && (
        <p className="mt-2 text-[11px] leading-relaxed text-stone-500" aria-live="polite">
          {copied
            ? "診断結果をコピーしました。LINEのトーク画面に貼り付けて、ご希望の日時を添えて送ってください。"
            : "ボタンを押すと、診断結果がコピーされます。LINEのトーク画面に貼り付けて送ってください。"}
        </p>
      )}
    </div>
  )
}

/** サブの予約窓口（Instagram・ホットペッパー・Square）を小さく並べる */
export function SubBookingLinks({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-2 text-xs", tone === "dark" ? "text-stone-400" : "text-stone-500", className)}>
      <span>ほかの予約方法</span>
      {BOOKING.subs.map((c) => (
        <a
          key={c.id}
          href={bookingHref(c)}
          {...external(c)}
          className={cn("inline-flex items-center gap-1.5 transition-colors", tone === "dark" ? "hover:text-white" : "hover:text-[var(--salon-gold)]")}
        >
          <ChannelIcon channel={c} size={18} />
          <span className="underline underline-offset-4">{c.label}</span>
        </a>
      ))}
    </div>
  )
}

/**
 * Square の予約ページを、メニューを開いた状態で表示するボタン。
 * 初回用が別に登録されているメニューは「はじめての方」「2回目以降の方」に分ける
 */
export function SquareBookButtons({ menu, withBack, className }: { menu: Menu; withBack?: boolean; className?: string }) {
  const square = BOOKING.subs.find((c) => c.id === "square")!
  const hasFirst = Boolean(menu.square?.firstServiceId && menu.firstPrice)
  const primary =
    "flex items-center justify-center gap-3 bg-[var(--salon-text)] px-6 py-4 text-sm tracking-wider text-white transition-colors hover:bg-[var(--salon-gold)]"

  return (
    <div className={className}>
      {hasFirst ? (
        <div className="grid gap-2 sm:grid-cols-2">
          <a href={squareUrl(menu, { first: true })} target="_blank" rel="noopener noreferrer" className={primary}>
            <ChannelIcon channel={square} size={20} />
            はじめての方（初回 {yen(menu.firstPrice!)}）
          </a>
          <a
            href={squareUrl(menu)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-[var(--salon-text)] px-6 py-4 text-sm tracking-wider text-[var(--salon-text)] transition-colors hover:border-[var(--salon-gold)] hover:text-[var(--salon-gold)]"
          >
            2回目以降の方
          </a>
        </div>
      ) : (
        <a href={squareUrl(menu)} target="_blank" rel="noopener noreferrer" className={primary}>
          <ChannelIcon channel={square} size={20} />
          このメニューをWebで予約
        </a>
      )}
      <p className="mt-2 text-[11px] leading-relaxed text-stone-500">
        Square の予約ページが、このメニューを選んだ状態で開きます。「追加」を押して日時を選んでください。
        {withBack && `背中ほぐしを付ける場合は、「${OPTIONS[0].squareName}」（${yen(OPTIONS[0].price)}）も追加してください。`}
      </p>
    </div>
  )
}

