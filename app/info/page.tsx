import { PageHeader } from "@/components/page-header"
import { DiagnosisCta } from "@/components/diagnosis-cta"
import { SALON } from "@/lib/salon"
import { MapPinIcon, TrainIcon, ClockIcon, ChatCircleDotsIcon, CreditCardIcon } from "@phosphor-icons/react/dist/ssr"
import { LineButton, SubBookingLinks } from "@/components/booking-buttons"

export const metadata = {
  title: '店舗情報 | Salon du Reiko',
  description: '住所・営業時間・定休日・予約方法のご案内。',
}

export default function InfoPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Information" subtitle="店舗情報" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Text Info */}
          <div className="w-full md:w-1/2 divide-y divide-[var(--salon-border)]">
            <div className="pb-10">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-gray-800">
                <MapPinIcon className="h-5 w-5 text-[var(--salon-gold)]" weight="light" />
                Address
              </h3>
              <p className="text-gray-600 leading-loose">
                {SALON.zip}<br />
                {SALON.address}<br />
                {SALON.building}
              </p>
            </div>

            <div className="py-10">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-gray-800">
                <TrainIcon className="h-5 w-5 text-[var(--salon-gold)]" weight="light" />
                Access
              </h3>
              <p className="text-gray-600 leading-loose">
                {SALON.station}<br />
                <span className="text-sm text-gray-400">※敷地内に無料駐車場がございます</span>
              </p>
            </div>

            <div className="py-10">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-gray-800">
                <ClockIcon className="h-5 w-5 text-[var(--salon-gold)]" weight="light" />
                Open
              </h3>
              <p className="text-gray-600 leading-loose">
                {SALON.hours}<br />
                <span className="text-sm text-gray-400">定休日：{SALON.closed}</span>
              </p>
            </div>

            <div className="py-10">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-gray-800">
                <CreditCardIcon className="h-5 w-5 text-[var(--salon-gold)]" weight="light" />
                Payment
              </h3>
              <p className="text-gray-600 leading-loose">{SALON.payment}</p>
            </div>

            <div className="pt-10">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-gray-800">
                <ChatCircleDotsIcon className="h-5 w-5 text-[var(--salon-gold)]" weight="light" />
                Reservation
              </h3>
              <p className="mb-4 text-sm text-gray-500">完全予約制です。ご予約・ご相談は公式LINEからどうぞ。</p>
              <LineButton className="sm:inline-flex" />
              <SubBookingLinks className="mt-4" />
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square w-full bg-gray-100 relative overflow-hidden border border-[var(--salon-border)]">
               <iframe 
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SALON.address)}&output=embed`} 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Salon du Reiko地図"
                 
                ></iframe>
            </div>
          </div>

        </div>
      </div>
      <DiagnosisCta />
    </main>
  )
}
