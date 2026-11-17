import { PageHeader } from "@/components/page-header"
import { SALON } from "@/lib/salon"
import { TrainIcon, CarIcon, MapPinLineIcon } from "@phosphor-icons/react/dist/ssr"
import { DiagnosisCta } from "@/components/diagnosis-cta"

export const metadata = {
  title: "アクセス | Salon du Reiko",
  description: "サロンへのアクセス方法・地図をご案内します。",
}

const directions = [
  {
    Icon: MapPinLineIcon,
    label: "住所",
    detail: `${SALON.zip} ${SALON.address} ${SALON.building}`,
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
      <PageHeader
        subtitle="アクセス"
        description="近江鉄道「水口城南駅」より徒歩13分。敷地内に無料駐車場があり、JR貴生川駅までの送迎も可能です。"
      />

      <div className="container max-w-4xl pt-12 md:pt-16">
        <div className="grid gap-4 md:grid-cols-3">
          {directions.map((d) => (
            <div
              key={d.label}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <d.Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-serif text-base font-medium text-[var(--color-ink)]">{d.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{d.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)]">
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

      <DiagnosisCta />
    </main>
  )
}
