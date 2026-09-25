import Link from "next/link"
import { SALON } from "@/lib/salon"
import { LineButton } from "@/components/booking-buttons"

export function Footer() {
  return (
    <footer className="bg-[var(--salon-text)] text-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          
          {/* 左側: ブランド情報 */}
          <div className="space-y-8 md:w-1/3">
            <Link href="/" className="block">
              <h2 className="font-brand text-4xl md:text-5xl text-[var(--salon-gold)]">
                Salon du Reiko
              </h2>
            </Link>
            <address className="not-italic text-sm leading-loose text-gray-400 font-sans tracking-wider">
              {SALON.zip}<br />
              {SALON.address}<br />
              {SALON.building}
            </address>
            <div className="pt-2">
              <p className="text-xs text-gray-500 tracking-widest">{SALON.hours}（完全予約制）/ 定休日 {SALON.closed}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LineButton className="px-5 py-3" />
              <Link href="/recommend" className="inline-flex items-center border border-[var(--salon-gold)] px-6 py-3 text-sm tracking-wider text-white transition-colors hover:bg-[var(--salon-gold)]">
                30秒でメニュー診断
              </Link>
            </div>
          </div>

          {/* 右側: ナビゲーション */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 md:w-1/2 lg:w-1/3 ml-auto">
            <div className="flex flex-col gap-5">
              <Link href="/" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">TOP</Link>
              <Link href="/about" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">ABOUT</Link>
              <Link href="/menu" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">MENU</Link>
              <Link href="/gallery" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">GALLERY</Link>
              <Link href="/faq" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">FAQ</Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link href="/recommend" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">DIAGNOSIS</Link>
              <Link href="/reviews" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">VOICE</Link>
              <Link href="/info" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">INFORMATION</Link>
              <Link href="/contact" className="text-xs tracking-[0.2em] text-gray-300 hover:text-[var(--salon-gold)] transition-colors">CONTACT</Link>
            </div>
          </div>
        </div>

        {/* 下部: Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">
            © Salon du Reiko. All Rights Reserved.
          </p>
          <div className="flex gap-8">
             <Link href="/privacy" className="text-[10px] text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Privacy Policy</Link>
             {/* 必要であればここにSNSリンクなどを追加 */}
          </div>
        </div>
      </div>
    </footer>
  )
}
