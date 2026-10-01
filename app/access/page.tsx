import { PageHeader } from "@/components/page-header"
import { SALON } from "@/lib/salon"
import { TrainIcon, CarIcon, MapPinLineIcon } from "@phosphor-icons/react/dist/ssr"

export const metadata = {
  title: 'アクセス | Salon du Reiko',
  description: 'サロンへのアクセス方法・地図をご案内します。',
}

const directions = [
  {
    Icon: MapPinLineIcon,
    label: "住所",
    detail: "〒528-0024 滋賀県甲賀市水口町中邸2-10 岩谷医院敷地内ログハウス",
  },
  {
    Icon: TrainIcon,
    label: "電車でお越しの方",
    detail: `${SALON.station}。${SALON.pickup}`,
  },
  {
    Icon: CarIcon,
    label: "お車でお越しの方",
    detail: "敷地内に無料駐車場がございます",
  },
]

export default function AccessPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Access" subtitle="アクセス" />

      <div className="container mx-auto max-w-5xl px-6">
        <div className="aspect-[16/9] w-full overflow-hidden border border-[var(--salon-border)]">
          <iframe
            src="https://www.google.com/maps?q=滋賀県甲賀市水口町中邸2-10&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Salon du Reiko地図"
           
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-[var(--salon-border)] pt-16 md:grid-cols-3">
          {directions.map((item) => (
            <div key={item.label}>
              <item.Icon className="mb-4 h-6 w-6 text-[var(--salon-gold)]" weight="light" />
              <h3 className="mb-2 font-serif text-lg text-stone-800">{item.label}</h3>
              <p className="text-sm leading-loose text-stone-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
