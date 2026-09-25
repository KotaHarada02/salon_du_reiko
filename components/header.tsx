"use client"

import Link from "next/link"
import { Fragment, useEffect, useState } from "react"
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
  { href: "/", label: "トップ", en: "TOP" },
  { href: "/about", label: "サロンについて", en: "ABOUT" },
  { href: "/menu", label: "メニュー", en: "MENU" },
  { href: "/gallery", label: "ギャラリー", en: "GALLERY" },
  { href: "/reviews", label: "お客様の声", en: "VOICE" },
  { href: "/info", label: "店舗情報", en: "INFORMATION" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-[background-color,padding,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-[var(--salon-border)] bg-[var(--salon-bg)]/95 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-brand text-2xl text-[var(--salon-text)] md:text-3xl">
          Salon du Reiko
        </Link>

        {/* PC Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm tracking-widest text-[var(--salon-text)] transition-colors hover:text-[var(--salon-gold)]"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--salon-gold)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/recommend"
            className="border border-[var(--salon-gold)] px-5 py-2.5 text-sm tracking-widest text-[var(--salon-text)] transition-colors hover:bg-[var(--salon-gold)] hover:text-white"
          >
            30秒診断
          </Link>
          <Link
            href="/contact"
            className="-ml-4 bg-[var(--salon-text)] px-5 py-2.5 text-sm tracking-widest text-white transition-colors hover:bg-[var(--salon-gold)]"
          >
            ご予約
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <ListIcon className="h-6 w-6 text-[var(--salon-text)]" weight="light" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto border-l border-[var(--salon-border)] bg-[var(--salon-bg)] p-0 sm:w-[400px]">
              <div className="p-10 pb-4">
                <SheetTitle className="font-brand text-left text-4xl text-[var(--salon-gold)]">
                  Salon du Reiko
                </SheetTitle>
              </div>
              <SheetDescription className="sr-only">ナビゲーションメニュー</SheetDescription>
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Fragment key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex flex-col border-b border-[var(--salon-border)] px-10 py-4 transition-colors hover:bg-white/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg tracking-widest text-[var(--salon-text)] transition-colors group-hover:text-[var(--salon-gold)]">
                      {item.label}
                    </span>
                    <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-colors group-hover:text-[var(--salon-gold)]">
                      {item.en}
                    </span>
                  </Link>
                  {/* 診断は「トップ」のすぐ下に目立たせて置く */}
                  {item.href === "/" && (
                    <Link
                      href="/recommend"
                      className="group flex items-center justify-between gap-4 border-b border-[var(--salon-border)] bg-white px-10 py-4 transition-colors hover:bg-[var(--salon-bg)]"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex flex-col">
                        <span className="flex items-center gap-2 text-lg tracking-widest text-[var(--salon-text)] group-hover:text-[var(--salon-gold)]">
                          <SparkleIcon className="h-4 w-4 text-[var(--salon-gold)]" weight="fill" />
                          30秒メニュー診断
                        </span>
                        <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--salon-gold)]">
                          DIAGNOSIS
                        </span>
                      </span>
                      <span className="shrink-0 bg-[var(--salon-gold)] px-2 py-0.5 text-[10px] tracking-wider text-white">おすすめ</span>
                    </Link>
                  )}
                  </Fragment>
                ))}
                <div className="mt-4 p-10">
                  <Link
                    href="/contact"
                    className="block bg-[var(--salon-text)] py-4 text-center text-sm tracking-widest text-white shadow-sm transition-colors hover:bg-[var(--salon-gold)]"
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
