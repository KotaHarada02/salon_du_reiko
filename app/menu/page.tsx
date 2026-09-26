import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { CATEGORIES, FIRST_NOTE, FOOT_NOTE, GROTTY_NOTE, OPTIONS, firstText, menusIn, priceText, squareUrl, yen, duration } from "@/lib/salon"

export const metadata = {
  title: "メニュー | Salon du Reiko",
  description: "ヒト幹細胞フェイシャル・ボディ・ヘッドスパのメニューと料金。初回価格もご案内しています。",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Menu" subtitle="施術メニュー" />

      <div className="container max-w-4xl">
        <Link
          href="/recommend"
          className="mb-8 flex flex-col justify-between gap-2 border border-[var(--salon-gold)] bg-white p-5 transition-colors hover:bg-[var(--salon-bg)] sm:flex-row sm:items-center"
        >
          <span className="text-sm text-[var(--salon-text)]">どれを選べばいいか迷ったら</span>
          <span className="text-sm text-[var(--salon-gold)]">30秒メニュー診断へ →</span>
        </Link>
        <p className="mb-8 border-l-2 border-[var(--salon-gold)] pl-3 text-xs leading-relaxed text-gray-500">
          {GROTTY_NOTE}
          <br />
          {FOOT_NOTE}
        </p>

        {CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28 border-t border-[var(--salon-border)] py-14 md:py-20">
            <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-3xl text-gray-800">{cat.en}</h2>
              <p className="flex items-center gap-3 text-xs tracking-widest text-[var(--salon-gold)]">
                {cat.ja}
                {cat.badge && <span className="bg-[var(--salon-gold)] px-2 py-0.5 tracking-normal text-white">{cat.badge}</span>}
              </p>
            </div>

            <div className="space-y-12">
              {menusIn(cat.id, { includeReferral: true }).map((m) => {
                const first = firstText(m)
                return (
                  <article key={m.id} id={m.id} className="scroll-mt-28">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-gray-200 pb-3">
                      <h3 className="text-lg text-gray-800 md:text-xl">
                        {m.name}
                        <span className="ml-3 font-sans text-sm text-gray-400">{duration(m.minutes)}</span>
                      </h3>
                      <div className="flex items-baseline gap-3">
                        {m.referralOnly && <span className="border border-gray-300 px-2 py-0.5 text-xs text-gray-500">ご紹介の方のみ</span>}
                        {first && <span className="bg-[var(--salon-gold)] px-2 py-0.5 text-xs text-white">{first}</span>}
                        <span className="font-serif text-lg text-[var(--salon-gold)]">{priceText(m)}</span>
                      </div>
                    </div>
                    {m.parts && <p className="mt-3 text-xs tracking-wider text-gray-500">内容：{m.parts}</p>}
                    {m.note && <p className="mt-1 text-xs text-[var(--salon-gold)]">※{m.note}</p>}
                    <p className="mt-3 text-sm">{m.lead}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {m.forWhom.map((w) => (
                        <li key={w} className="border border-[var(--salon-border)] bg-white px-3 py-1 text-xs text-gray-500">
                          {w}
                        </li>
                      ))}
                    </ul>
                    {m.square && !m.referralOnly && (
                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        {m.square.firstServiceId && m.firstPrice && (
                          <a
                            href={squareUrl(m, { first: true })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-[var(--salon-gold)] pb-0.5 text-[var(--salon-text)] hover:text-[var(--salon-gold)]"
                          >
                            はじめての方の予約（初回 {yen(m.firstPrice)}）→
                          </a>
                        )}
                        <a
                          href={squareUrl(m)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-b border-[var(--salon-gold)] pb-0.5 text-[var(--salon-text)] hover:text-[var(--salon-gold)]"
                        >
                          {m.square.firstServiceId && m.firstPrice ? "2回目以降の方の予約 →" : "このメニューをWebで予約 →"}
                        </a>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </section>
        ))}

        <section id="option" className="border-t border-[var(--salon-border)] py-14 md:py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="text-3xl text-gray-800">Option</h2>
            <p className="text-xs tracking-widest text-[var(--salon-gold)]">オプション</p>
          </div>
          <div className="space-y-6">
            {OPTIONS.map((o) => (
              <div key={o.name} className="border-b border-gray-200 pb-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base text-gray-800 md:text-lg">
                    {o.name}
                    <span className="ml-3 font-sans text-sm text-gray-400">{o.minutes}分</span>
                  </h3>
                  <span className="font-serif text-gray-600">{yen(o.price)}</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">{o.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400">表示価格は税込です。{FIRST_NOTE}{FOOT_NOTE}</p>
        </section>
      </div>
    </main>
  )
}
