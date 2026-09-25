import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
import { CATEGORIES, firstText, menusIn, priceText, duration } from "@/lib/salon"

export function MenuOverview() {
  return (
    <section className="bg-[var(--salon-bg)] py-20 md:py-28">
      <div className="container">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">MENU</span>
            <h2 className="mt-3 text-2xl text-[var(--salon-text)] md:text-3xl">メニューと料金</h2>
          </div>
          <Link
            href="#diagnosis"
            className="inline-flex items-center gap-2 self-start border-b border-[var(--salon-gold)] pb-1 text-sm text-[var(--salon-text)] transition-colors hover:text-[var(--salon-gold)] md:self-auto"
          >
            迷ったら30秒診断で選ぶ
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <RevealGroup key={cat.id}>
              <RevealItem className="flex items-center gap-3 border-b border-[var(--salon-text)] pb-3">
                <h3 className="text-lg text-[var(--salon-text)]">{cat.ja}</h3>
                {cat.badge && <span className="bg-[var(--salon-gold)] px-2 py-0.5 text-[11px] text-white">{cat.badge}</span>}
              </RevealItem>
              {menusIn(cat.id).map((m) => {
                const first = firstText(m)
                return (
                  <RevealItem key={m.id}>
                    <Link
                      href={`/menu#${m.id}`}
                      className="group flex items-baseline justify-between gap-4 border-b border-[var(--salon-border)] py-4 transition-colors hover:bg-white md:px-2"
                    >
                      <span>
                        <span className="block text-[15px] text-[var(--salon-text)] transition-colors group-hover:text-[var(--salon-gold)]">{m.name}</span>
                        <span className="mt-0.5 block text-xs text-gray-400">
                          {duration(m.minutes)}{m.parts && ` ／ ${m.parts}`}
                        </span>
                      </span>
                      <span className="shrink-0 text-right">
                        <span className="block font-serif text-[var(--salon-text)]">{priceText(m)}</span>
                        {first && <span className="block text-[11px] text-[var(--salon-gold)]">{first}</span>}
                      </span>
                    </Link>
                  </RevealItem>
                )
              })}
            </RevealGroup>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-400">表示価格は税込です。初回価格は、はじめてご来店の方が対象です。どのコースも、施術の前後に足のマッサージが少し付きます。オプション「背中ほぐし」（15分 ¥3,000）も追加できます。</p>
      </div>
    </section>
  )
}
