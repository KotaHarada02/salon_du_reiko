"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "トップ", en: "TOP" },
    { href: "/about", label: "サロンについて", en: "ABOUT" },
    { href: "/menu", label: "メニュー", en: "MENU" },
    { href: "/recommend", label: "おすすめ診断", en: "RECOMMEND" },
    { href: "/gallery", label: "ギャラリー", en: "GALLERY" },
    { href: "/reviews", label: "お客様の声", en: "VOICE" },
    { href: "/info", label: "店舗情報", en: "INFORMATION" },
  ]

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container flex items-center justify-between">
        <Link href="/" className="brand font-brand text-2xl md:text-3xl">
          Salon du Reiko
        </Link>

        {/* PC Navigation */}
        <nav className="main-nav hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm tracking-widest hover:text-[var(--salon-gold)] transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="cta bg-[var(--salon-text)] text-white px-6 py-2 text-sm tracking-widest hover:bg-[var(--salon-gold)] transition-colors">
            ご予約・お問い合わせ
          </Link>
        </nav>

        {/* Mobile Navigation (Hamburger) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Menu className="h-6 w-6 text-[var(--salon-text)]" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-[var(--salon-bg)] border-l border-[var(--salon-border)] p-0">
              <div className="p-10 pb-4">
                <SheetTitle className="font-brand text-4xl text-left mb-8 text-[var(--salon-gold)]">Salon du Reiko</SheetTitle>
              </div>
              <SheetDescription className="sr-only">ナビゲーションメニュー</SheetDescription>
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col py-4 px-10 border-b border-gray-200/50 hover:bg-white/50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg font-serif tracking-widest text-[var(--salon-text)] group-hover:text-[var(--salon-gold)] transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] text-gray-400 mt-1 font-sans uppercase group-hover:text-[var(--salon-gold)] transition-colors">
                      {item.en}
                    </span>
                  </Link>
                ))}
                <div className="p-10 mt-4">
                  <Link
                    href="/contact"
                    className="block bg-[var(--salon-text)] text-white py-4 text-sm tracking-widest hover:bg-[var(--salon-gold)] transition-colors text-center rounded-sm shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    RESERVATION
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
