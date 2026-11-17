import Link from "next/link"
import { SALON } from "@/lib/salon"
import { LineButton } from "@/components/booking-buttons"

export function Footer() {
  return (
    <footer className="bg-[var(--color-footer-bg)] py-16 text-white md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          {/* 左側: ブランド情報 */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="inline-block font-serif text-3xl font-medium tracking-wide text-white md:text-4xl">
                Salon du Reiko
              </Link>
              <p className="mt-2 text-sm text-white/75">
                {SALON.area}・{SALON.building}の完全予約制エステサロン
              </p>
            </div>
            <address className="not-italic text-sm leading-relaxed text-white/80">
              {SALON.zip} {SALON.address}
              <br />
              {SALON.building}
            </address>
            <p className="text-xs text-white/70">
              営業時間 {SALON.hours}（完全予約制）／ 定休日 {SALON.closed}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <LineButton className="px-6 py-3" />
              <Link
                href="/recommend"
                className="inline-flex min-h-[44px] items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                30秒メニュー診断
              </Link>
            </div>
          </div>

          {/* 右側: ナビゲーション */}
          <div className="grid grid-cols-2 gap-8 md:justify-self-end md:gap-16">
            <div className="flex flex-col gap-3.5">
              <Link href="/" className="text-sm text-white/80 transition-colors hover:text-white">トップ</Link>
              <Link href="/about" className="text-sm text-white/80 transition-colors hover:text-white">サロンについて</Link>
              <Link href="/menu" className="text-sm text-white/80 transition-colors hover:text-white">メニュー・料金</Link>
              <Link href="/gallery" className="text-sm text-white/80 transition-colors hover:text-white">ギャラリー</Link>
              <Link href="/faq" className="text-sm text-white/80 transition-colors hover:text-white">よくあるご質問</Link>
            </div>
            <div className="flex flex-col gap-3.5">
              <Link href="/recommend" className="text-sm text-white/80 transition-colors hover:text-white">30秒メニュー診断</Link>
              <Link href="/reviews" className="text-sm text-white/80 transition-colors hover:text-white">お客様の声</Link>
              <Link href="/info" className="text-sm text-white/80 transition-colors hover:text-white">店舗情報・アクセス</Link>
              <Link href="/contact" className="text-sm text-white/80 transition-colors hover:text-white">ご予約・お問い合わせ</Link>
            </div>
          </div>
        </div>

        {/* 下部 */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
          <p className="text-xs text-white/65">
            © Salon du Reiko. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/65 transition-colors hover:text-white">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
