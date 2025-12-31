import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: '店舗情報 | Salon de Reiko',
  description: '住所・営業時間・定休日・予約方法のご案内。',
}

export default function InfoPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Information" subtitle="店舗情報" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Text Info */}
          <div className="w-full md:w-1/2 space-y-12">
            <div>
              <h3 className="text-lg font-serif text-gray-800 mb-4 border-b border-[var(--salon-gold)] pb-2 inline-block">Address</h3>
              <p className="text-gray-600 leading-loose">
                〒528-0024<br />
                滋賀県甲賀市水口町中邸2-10<br />
                岩谷医院敷地内ログハウス
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif text-gray-800 mb-4 border-b border-[var(--salon-gold)] pb-2 inline-block">Access</h3>
              <p className="text-gray-600 leading-loose">
                近江鉄道「水口石橋駅」より徒歩10分<br />
                <span className="text-sm text-gray-400">※敷地内に無料駐車場がございます</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif text-gray-800 mb-4 border-b border-[var(--salon-gold)] pb-2 inline-block">Open</h3>
              <p className="text-gray-600 leading-loose">
                10:00 ～ 18:00<br />
                <span className="text-sm text-gray-400">定休日：月曜日・土曜日</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif text-gray-800 mb-4 border-b border-[var(--salon-gold)] pb-2 inline-block">Contact</h3>
              <p className="text-3xl font-serif text-[var(--salon-text)] mb-2">
                090-9041-7442
              </p>
              <p className="text-sm text-gray-400 mb-4">完全予約制</p>
              <p className="text-sm text-gray-500">
                LINE・Instagram・Hot Pepper Beautyからも<br/>ご予約可能です。
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square w-full bg-gray-100 relative overflow-hidden border border-[var(--salon-border)]">
               <iframe 
                  src="https://www.google.com/maps?q=滋賀県甲賀市水口町中邸2-10&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Salon de Reiko地図"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}


