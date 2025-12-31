import { PageHeader } from "@/components/page-header"
import Link from "next/link"

export const metadata = {
  title: 'お問い合わせ | Salon de Reiko',
  description: 'ご予約・お問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Contact" subtitle="ご予約・お問い合わせ" />

      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white p-12 md:p-20 shadow-sm border border-[var(--salon-border)] text-center">
          <p className="text-gray-600 leading-loose mb-12">
            当サロンは完全予約制となっております。<br/>
            ご予約、施術に関するご質問は、<br className="md:hidden"/>お電話またはLINE、InstagramのDMより<br/>
            お気軽にお問い合わせください。
          </p>

          <div className="space-y-8 mb-16">
            <div>
              <p className="text-xs tracking-widest text-gray-400 mb-2">TEL</p>
              <a href="tel:09090417442" className="text-3xl md:text-4xl font-serif text-[var(--salon-text)] hover:text-[var(--salon-gold)] transition-colors">
                090-9041-7442
              </a>
              <p className="text-xs text-gray-400 mt-2">受付時間 10:00 - 19:00</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <Link href="#" className="group block border border-[var(--salon-border)] p-8 hover:border-[var(--salon-gold)] transition-colors duration-300">
                <span className="block font-serif text-lg mb-2 group-hover:text-[var(--salon-gold)] transition-colors">LINE Reservation</span>
                <span className="block text-xs text-gray-400">LINEで予約する</span>
             </Link>
             <Link href="#" className="group block border border-[var(--salon-border)] p-8 hover:border-[var(--salon-gold)] transition-colors duration-300">
                <span className="block font-serif text-lg mb-2 group-hover:text-[var(--salon-gold)] transition-colors">Instagram DM</span>
                <span className="block text-xs text-gray-400">DMで問い合わせる</span>
             </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-100">
             <p className="text-sm text-gray-500 mb-4">Hot Pepper Beautyからもご予約いただけます</p>
             <Link href="#" className="inline-block border-b border-gray-400 pb-1 text-gray-600 hover:text-[var(--salon-gold)] hover:border-[var(--salon-gold)] transition-colors">
                Hot Pepper Beauty 予約ページへ
             </Link>
          </div>
        </div>
      </div>
    </main>
  )
}


