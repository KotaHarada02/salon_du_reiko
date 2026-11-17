import { PageHeader } from "@/components/page-header"
import { DiagnosisCta } from "@/components/diagnosis-cta"
import { SALON } from "@/lib/salon"
import { MapPinIcon, TrainIcon, ClockIcon, ChatCircleDotsIcon, CreditCardIcon } from "@phosphor-icons/react/dist/ssr"
import { LineButton, SubBookingLinks } from "@/components/booking-buttons"

export const metadata = {
  title: "店舗情報 | Salon du Reiko",
  description: "住所・営業時間・定休日・予約方法のご案内。",
}

export default function InfoPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader
        subtitle="店舗情報・アクセス"
        description="完全予約制のプライベートサロンです。無料駐車場およびJR貴生川駅までの送迎もございます。"
      />

      <div className="container max-w-5xl pt-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="flex items-center gap-2.5 font-serif text-lg font-medium text-[var(--color-ink)]">
                <MapPinIcon className="h-5 w-5 text-[var(--color-accent)]" />
                住所
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {SALON.zip}
                <br />
                {SALON.address}
                <br />
                {SALON.building}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="flex items-center gap-2.5 font-serif text-lg font-medium text-[var(--color-ink)]">
                <TrainIcon className="h-5 w-5 text-[var(--color-accent)]" />
                アクセス
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {SALON.station}
                <br />
                {SALON.pickup}
                <br />
                <span className="mt-1 inline-block text-xs">※敷地内に無料駐車場がございます</span>
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="flex items-center gap-2.5 font-serif text-lg font-medium text-[var(--color-ink)]">
                <ClockIcon className="h-5 w-5 text-[var(--color-accent)]" />
                営業時間・定休日
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {SALON.hours}（完全予約制）
                <br />
                定休日：{SALON.closed}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="flex items-center gap-2.5 font-serif text-lg font-medium text-[var(--color-ink)]">
                <CreditCardIcon className="h-5 w-5 text-[var(--color-accent)]" />
                お支払い方法
              </h2>
              <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{SALON.payment}</p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="flex items-center gap-2.5 font-serif text-lg font-medium text-[var(--color-ink)]">
                <ChatCircleDotsIcon className="h-5 w-5 text-[var(--color-accent)]" />
                ご予約方法
              </h2>
              <p className="mt-2 mb-4 text-sm text-[var(--color-ink-muted)]">
                ご予約・ご相談は公式LINEから承っています。
              </p>
              <LineButton />
              <SubBookingLinks className="mt-4" />
            </div>
          </div>

          <div className="md:sticky md:top-28 md:self-start">
            <div className="aspect-square w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)]">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(SALON.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Salon du Reiko地図"
              />
            </div>
          </div>
        </div>
      </div>

      <DiagnosisCta />
    </main>
  )
}
