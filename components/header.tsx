"use client"

import Link from "next/link"
import { Fragment, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ListIcon, SparkleIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/about", label: "サロンについて" },
  { href: "/menu", label: "メニュー" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/reviews", label: "お客様の声" },
  { href: "/info", label: "店舗情報" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-[background-color,padding,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 py-2.5 shadow-[0_4px_24px_-12px_rgba(29,36,32,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-[var(--color-bg)]/85 py-3 backdrop-blur-sm md:bg-transparent md:py-5",
      )}
    >
      <div className="container flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-baseline gap-2 text-[var(--color-ink)] transition-opacity hover:opacity-80"
        >
          <span className="font-serif text-xl font-medium tracking-wide md:text-2xl">
            Salon du Reiko
          </span>
        </Link>

        {/* PC Navigation */}
        <nav aria-label="メインナビゲーション" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1.5 text-sm transition-colors",
                  active
                    ? "font-medium text-[var(--color-accent)]"
                    : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[var(--color-accent)]" />
                )}
              </Link>
            )
          })}
          <div className="flex items-center gap-2.5 pl-2">
            <Link
              href="/recommend"
              className="inline-flex min-h-[44px] items-center rounded-full border border-[var(--color-accent)] px-5 py-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent-soft)]"
            >
              30秒診断
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              ご予約
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-1.5 md:hidden">
          <Link
            href={pathname === "/" ? "#diagnosis" : "/recommend"}
            className="inline-flex h-9 items-center gap-1 rounded-full bg-[var(--color-accent-soft)] px-3.5 text-xs font-medium text-[var(--color-accent)]"
          >
            <SparkleIcon className="h-3.5 w-3.5" weight="fill" />
            <span>30秒診断</span>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)]"
              >
                <ListIcon className="h-6 w-6" weight="regular" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-bg)] p-0 sm:w-[380px]"
            >
              <div className="border-b border-[var(--color-border)] px-6 py-6">
                <SheetTitle className="font-serif text-left text-2xl font-medium text-[var(--color-ink)]">
                  Salon du Reiko
                </SheetTitle>
                <SheetDescription className="mt-1 text-left text-xs text-[var(--color-ink-muted)]">
                  甲賀市水口町・ログハウスの完全予約制サロン
                </SheetDescription>
              </div>
              <nav aria-label="モバイルナビゲーション" className="flex flex-col p-6">
                <Link
                  href="/"
                  className="flex min-h-[48px] items-center border-b border-[var(--color-border)] py-3 text-base text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                  onClick={() => setIsOpen(false)}
                >
                  トップページ
                </Link>
                <Link
                  href="/recommend"
                  className="my-3 flex min-h-[52px] items-center justify-between rounded-2xl bg-[var(--color-accent-soft)] px-4 py-3 text-base font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span>30秒メニュー診断</span>
                  <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-xs text-white">
                    おすすめ
                  </span>
                </Link>
                {navItems.map((item) => (
                  <Fragment key={item.href}>
                    <Link
                      href={item.href}
                      className="flex min-h-[48px] items-center border-b border-[var(--color-border)] py-3 text-base text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </Fragment>
                ))}
                <Link
                  href="/faq"
                  className="flex min-h-[48px] items-center border-b border-[var(--color-border)] py-3 text-base text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                  onClick={() => setIsOpen(false)}
                >
                  よくあるご質問
                </Link>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
                    onClick={() => setIsOpen(false)}
                  >
                    ご予約・お問い合わせ
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
