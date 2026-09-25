import Link from "next/link"
import { ArrowUpIcon, MapPinIcon, ClockIcon } from "@phosphor-icons/react/ssr"
import { LineButton, SubBookingLinks } from "@/components/booking-buttons"
import { Reveal } from "@/components/motion-reveal"
import { MENUS, SALON, yen } from "@/lib/salon"

const OFFERS = [MENUS["stem-facial"], MENUS["head-spa"]]

export function Closing() {
  return (
    <section className="bg-[var(--salon-text)] py-20 text-white md:py-28">
      <div className="container grid gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <Reveal>
          <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">RESERVATION</span>
          <h2 className="mt-3 text-2xl leading-relaxed text-white md:text-4xl">
            思わず触りたくなって、
            <br />
            会う人会う人に褒められるお肌に…
          </h2>

          <div className="mt-8 border border-white/15 p-6">
            <p className="text-xs tracking-wider text-[var(--salon-gold)]">はじめての方限定の価格</p>
            <div className="mt-2 divide-y divide-white/10">
              {OFFERS.map((m) => (
                <div key={m.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                  <p className="text-white">
                    {m.name}
                    <span className="ml-2 text-xs text-gray-400">{m.minutes}分</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-sm text-gray-400 line-through">{yen(m.price)}</span>
                    <span className="font-serif text-2xl text-white">{yen(m.firstPrice!)}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">税込。はじめてご来店の方が対象です。千手観音トリートメント（お日にち限定）も初回20%OFFです。</p>
          </div>

          <LineButton className="mt-8 w-full sm:w-auto sm:min-w-[320px] sm:inline-flex" label="公式LINEで予約・相談" />
          <SubBookingLinks tone="dark" className="mt-4" />
          <Link
            href="#diagnosis"
            className="mt-6 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[var(--salon-gold)]"
          >
            <ArrowUpIcon className="h-4 w-4" />
            メニューに迷ったら、30秒診断へ戻る
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] w-full overflow-hidden bg-white/5">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(SALON.address)}&output=embed`}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              title={`${SALON.name}の地図`}
            />
          </div>
          <dl className="mt-6 space-y-4 text-sm text-gray-300">
            <div className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--salon-gold)]" />
              <dd>
                {SALON.address} {SALON.building}
                <br />
                <span className="text-xs text-gray-400">{SALON.station}・無料駐車場あり</span>
              </dd>
            </div>
            <div className="flex gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--salon-gold)]" />
              <dd>
                {SALON.hours}（完全予約制）
                <br />
                <span className="text-xs text-gray-400">定休日：{SALON.closed}</span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
