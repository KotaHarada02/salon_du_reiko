import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import { Reveal } from "@/components/motion-reveal"
import { OWNER } from "@/lib/salon"

const QUOTES = [
  { text: "笑顔でお話しやすく、サロン内の雰囲気も素敵でした。", by: "甲賀市 S様" },
  { text: "施術前後にあるティータイムがとても癒されて気に入っています。", by: "甲賀市 H様" },
]

export function Owner() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="container grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <div className="mx-auto aspect-[3/4] max-w-[340px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] md:max-w-none">
            <img
              src="/img/owner1.jpg"
              alt={`オーナーの${OWNER.name}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="inline-block rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs font-medium text-[var(--color-accent)]">
            {OWNER.career}
          </span>
          <h2 className="mt-4 font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            オーナー {OWNER.name}
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-[15px]">
            <p>
              現在、看護師として働いています。病気をきっかけに一気に老け込んでしまった私を、「{OWNER.quote}」にしてくれたのがヒト幹細胞のエステです。
            </p>
            <p>
              大切にしているのは「{OWNER.motto}」。スタッフは私ひとりなので、カウンセリングから施術、施術後のお茶の時間まで、最初から最後まで担当します。
            </p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {QUOTES.map((q) => (
              <li
                key={q.text}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <p className="font-serif text-sm leading-relaxed text-[var(--color-ink)]">
                  「{q.text}」
                </p>
                <p className="mt-2 text-xs text-[var(--color-ink-muted)]">{q.by}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/about#owner"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-hover)]"
          >
            <span>オーナーがサロンを開いた理由</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
