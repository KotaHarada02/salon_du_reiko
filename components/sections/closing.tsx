import { MapPinIcon, ClockIcon } from "@phosphor-icons/react/ssr"
import { LineButton, SubBookingLinks } from "@/components/booking-buttons"
import { DiagnosisButton } from "@/components/diagnosis-cta"
import { Reveal } from "@/components/motion-reveal"
import { MENUS, SALON, yen } from "@/lib/salon"

const OFFERS = [MENUS["stem-facial"], MENUS["head-spa"]]

export function Closing() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="container grid gap-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:p-12">
        <Reveal>
          <span className="inline-block rounded-full bg-[var(--color-warm-soft)] px-3.5 py-1 text-xs font-medium text-[var(--color-warm)]">
            ご予約・アクセス
          </span>
          <h2 className="mt-4 font-serif text-2xl font-medium leading-snug text-[var(--color-ink)] md:text-3xl">
            思わず触りたくなって、
            <br />
            会う人会う人に褒められるお肌に…
          </h2>

          <div className="mt-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 md:p-6">
            <p className="text-xs font-medium text-[var(--color-warm)]">はじめての方限定の価格</p>
            <div className="mt-2 divide-y divide-[var(--color-border)]">
              {OFFERS.map((m) => (
                <div key={m.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                  <p className="text-sm font-medium text-[var(--color-ink)]">
                    {m.name}
                    <span className="ml-2 text-xs font-normal text-[var(--color-ink-muted)]">{m.minutes}分</span>
                  </p>
                  <p className="flex items-baseline gap-2.5 tabular-nums">
                    <span className="text-xs text-[var(--color-ink-muted)] line-through">{yen(m.price)}</span>
                    <span className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                      {yen(m.firstPrice!)}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-muted)]">
              税込。はじめてご来店の方が対象です。千手観音トリートメント（お日にち限定）も初回20%OFFです。
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <LineButton className="w-full sm:w-auto sm:min-w-[260px]" label="公式LINEで予約・相談" />
            <DiagnosisButton href="#diagnosis" label="迷ったら30秒診断" className="w-full sm:w-auto" />
          </div>
          <SubBookingLinks className="mt-5" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(SALON.address)}&output=embed`}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              title={`${SALON.name}の地図`}
            />
          </div>
          <dl className="mt-6 space-y-4 text-sm text-[var(--color-ink)]">
            <div className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              <dd>
                <span className="font-medium">
                  {SALON.address} {SALON.building}
                </span>
                <span className="mt-1 block text-xs text-[var(--color-ink-muted)]">
                  {SALON.station}・無料駐車場あり・{SALON.pickup}
                </span>
              </dd>
            </div>
            <div className="flex gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              <dd>
                <span className="font-medium">{SALON.hours}（完全予約制）</span>
                <span className="mt-1 block text-xs text-[var(--color-ink-muted)]">
                  定休日：{SALON.closed}
                </span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
