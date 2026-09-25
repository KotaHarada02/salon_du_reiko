"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChatCircleDotsIcon, SparkleIcon } from "@phosphor-icons/react"
import { BOOKING, bookingHref } from "@/lib/salon"
import { cn } from "@/lib/utils"

/** スマホ下部に固定する「診断」「LINE予約」ボタン。ヒーローを過ぎてから表示する */
export function MobileCta() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const diagnosisHref = pathname === "/" ? "#diagnosis" : "/recommend"
  const hidden = pathname === "/recommend" || pathname === "/contact" || !visible

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.4fr_1fr] gap-px border-t border-[var(--salon-border)] bg-[var(--salon-border)] pb-[env(safe-area-inset-bottom)] transition-transform duration-300 md:hidden",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
    >
      <Link href={diagnosisHref} className="flex items-center justify-center gap-2 bg-[var(--salon-text)] py-4 text-sm text-white">
        <SparkleIcon className="h-4 w-4 text-[var(--salon-gold)]" weight="fill" />
        30秒でメニュー診断
      </Link>
      <a href={bookingHref(BOOKING.main)} className="flex items-center justify-center gap-2 bg-[#06C755] py-4 text-sm text-white">
        <ChatCircleDotsIcon className="h-4 w-4" weight="fill" />
        LINE予約
      </a>
    </div>
  )
}
