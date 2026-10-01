import Link from "next/link"
import { SparkleIcon } from "@phosphor-icons/react/dist/ssr"
import { PageHeader } from "@/components/page-header"
import { ChannelIcon, LineButton } from "@/components/booking-buttons"
import { BOOKING, FIRST_NOTE, MENUS, SALON, firstText, priceText, type MenuId, duration } from "@/lib/salon"

export const metadata = {
  title: "ご予約・お問い合わせ | Salon du Reiko",
  description: "ご予約・ご相談は公式LINEから。Instagram・ホットペッパービューティー・Web予約からも承っています。",
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ menu?: string }>
}) {
  const { menu: menuId } = await searchParams
  const chosen = menuId && menuId in MENUS ? MENUS[menuId as MenuId] : undefined

  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Contact" subtitle="ご予約・お問い合わせ" />

      <div className="container max-w-4xl">
        {chosen && (
          <div className="mb-10 border border-[var(--salon-gold)] bg-white p-5">
            <p className="text-xs tracking-wider text-[var(--salon-gold)]">診断結果のメニュー</p>
            <p className="mt-1 text-lg text-[var(--salon-text)]">
              {chosen.name}
              <span className="ml-3 font-serif text-base text-stone-500">
                {duration(chosen.minutes)} {priceText(chosen)}
                {firstText(chosen) && `（${firstText(chosen)}）`}
              </span>
            </p>
            <p className="mt-1 text-xs text-stone-500">下のLINEボタンを押すと、このメニュー名がコピーされます。LINEのトークに貼り付けて送ってください。</p>
          </div>
        )}

        {/* メイン：公式LINE */}
        <section className="grid gap-8 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(58,58,58,0.3)] md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-[#06C755]">
              <ChannelIcon channel={BOOKING.main} size={20} />
              おすすめ
            </p>
            <h2 className="mt-3 text-2xl text-[var(--salon-text)]">
              公式LINEで
              <br className="sm:hidden" />
              予約・相談
            </h2>
            <p className="mt-3 text-sm">
              ご予約も、メニューのご相談も、LINEのトークで受け付けています。
              <br className="hidden md:block" />
              「どのメニューがいいか迷っている」というご相談もどうぞ。
            </p>
          </div>
          <div>
            <LineButton
              className="md:min-w-[260px]"
              copyText={chosen ? `【30秒診断の結果】\n${chosen.name}（${duration(chosen.minutes)}）\n\nご希望の日時：` : undefined}
            />
            {!BOOKING.main.url && <p className="mt-2 text-center text-[11px] text-stone-400">LINEのURLは準備中です</p>}
          </div>
        </section>

        {/* サブ窓口 */}
        <section className="mt-14">
          <h2 className="text-lg text-[var(--salon-text)]">ほかの予約方法</h2>
          <div className="mt-6 grid gap-px bg-[var(--salon-border)] sm:grid-cols-3">
            {BOOKING.subs.map((c) => {
              const body = (
                <>
                  <ChannelIcon channel={c} size={36} />
                  <span className="mt-4 block font-serif text-lg text-[var(--salon-text)]">{c.label}</span>
                  <span className="mt-1 block text-xs text-stone-400">{c.url ? c.action : "準備中"}</span>
                </>
              )
              return c.url ? (
                <a
                  key={c.id}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 transition-colors hover:bg-[var(--salon-bg)]"
                >
                  {body}
                </a>
              ) : (
                <div key={c.id} className="bg-white p-6 opacity-50">
                  {body}
                </div>
              )
            })}
          </div>
          <p className="mt-6 text-xs text-stone-400">
            完全予約制 / 営業時間 {SALON.hours} / 定休日 {SALON.closed}
            <br />
            お支払い：{SALON.payment}
            <br />
            {FIRST_NOTE}
          </p>
        </section>

        <Link
          href="/recommend"
          className="mt-14 flex items-center gap-4 border-t border-[var(--salon-border)] pt-8 transition-colors hover:text-[var(--salon-gold)]"
        >
          <SparkleIcon className="h-6 w-6 shrink-0 text-[var(--salon-gold)]" weight="light" />
          <span>
            <span className="block font-serif text-lg">メニューが決まっていない方へ</span>
            <span className="block text-xs text-stone-400">30秒診断で、合うメニューを先に確認できます</span>
          </span>
        </Link>
      </div>
    </main>
  )
}
