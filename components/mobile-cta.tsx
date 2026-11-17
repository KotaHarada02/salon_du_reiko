"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChatCircleDotsIcon, SparkleIcon } from "@phosphor-icons/react"
import { BOOKING, bookingHref } from "@/lib/salon"
import { cn } from "@/lib/utils"

/** スマホ下部に固定する「診断」「LINE予約」バー */
export function MobileCta() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.65)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const diagnosisHref = pathname === "/" ? "#diagnosis" : "/recommend"
  const hidden = pathname === "/recommend" || pathname === "/contact" || !visible

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-surface)]/95 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
    >
      <div className="grid grid-cols-[1.25fr_1fr] gap-2.5">
        <Link
          href={diagnosisHref}
          className="flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 text-sm font-medium text-white transition-colors active:scale-[0.98]"
        >
          <SparkleIcon className="h-4 w-4" weight="fill" />
          30秒診断
        </Link>
        <a
          href={bookingHref(BOOKING.main)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[44px] touch-manipulation items-center justify-center gap-1.5 rounded-full bg-[var(--color-line-brand)] px-4 text-sm font-medium text-white transition-opacity active:scale-[0.98]"
        >
          <ChatCircleDotsIcon className="h-4 w-4" weight="fill" />
          LINE予約
        </a>
      </div>
    </div>
  )
}
