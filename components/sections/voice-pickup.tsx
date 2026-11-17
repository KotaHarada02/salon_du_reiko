import Link from "next/link"
import { ArrowRightIcon, QuotesIcon } from "@phosphor-icons/react/ssr"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
import { PICKUP_VOICES } from "@/lib/content"

export function VoicePickup() {
  return (
    <section className="bg-[var(--color-surface-muted)]/45 py-20 md:py-28">
      <div className="container">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
              通っている方の声
            </h2>
            <p className="mt-2 text-xs text-[var(--color-ink-muted)]">
              ※個人の感想です。感じ方には個人差があります。
            </p>
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-hover)] md:self-auto"
          >
            <span>お客様の声をすべて読む</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {PICKUP_VOICES.map((v) => (
            <RevealItem key={v.text}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7">
                <div>
                  <QuotesIcon className="h-5 w-5 text-[var(--color-accent)]/60" weight="fill" aria-hidden="true" />
                  <blockquote className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]">
                    {v.text}
                  </blockquote>
                </div>
                <figcaption className="mt-5 border-t border-[var(--color-border)] pt-3 text-xs text-[var(--color-ink-muted)]">
                  <span className="font-medium text-[var(--color-ink)]">
                    {[v.location, v.name].filter(Boolean).join(" ")}
                  </span>
                  <span className="mt-0.5 block">{v.menu}</span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
