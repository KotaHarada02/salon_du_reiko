import Image from "next/image"
import { CheckIcon } from "@phosphor-icons/react/ssr"
import { Reveal } from "@/components/motion-reveal"
import { cn } from "@/lib/utils"

export type ExplainPoint = {
  no: string
  title: string[]
  body: string[]
  checks?: string[]
  after?: string[]
}

export function ExplainSection({
  title,
  intro,
  catchphrase,
  image,
  points,
  note,
  closing,
  reverse = false,
  className,
}: {
  title: string[]
  intro: string
  catchphrase?: string
  image: { src: string; alt: string; className?: string }
  points: ExplainPoint[]
  note?: string
  closing?: string[]
  reverse?: boolean
  numbered?: boolean
  className?: string
}) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div
        className={cn(
          "container grid gap-10 md:gap-16",
          reverse ? "md:grid-cols-[1.15fr_0.85fr]" : "md:grid-cols-[0.85fr_1.15fr]",
        )}
      >
        <Reveal className={cn(reverse && "md:order-2")}>
          <div className="md:sticky md:top-28">
            <h2 className="font-serif text-2xl font-medium leading-snug text-[var(--color-ink)] md:text-3xl">
              {title.map((part, i) => (
                <span key={part}>
                  {i > 0 && <br className="md:hidden" />}
                  {part}
                </span>
              ))}
            </h2>
            {catchphrase && (
              <p className="mt-4 font-serif text-lg font-medium text-[var(--color-accent)] md:text-xl">
                {catchphrase}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{intro}</p>
            <div className="relative mt-7 hidden aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] md:block">
              <Image src={image.src} alt={image.alt} fill className={cn("object-cover", image.className)} />
            </div>
          </div>
        </Reveal>

        <div className={cn("space-y-4", reverse && "md:order-1")}>
          {points.map((p) => (
            <Reveal key={p.no}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7">
                <h3 className="font-serif text-lg font-medium text-[var(--color-ink)]">
                  {p.title.map((part) => (
                    <span key={part} className="inline-block">
                      {part}
                    </span>
                  ))}
                </h3>
                {p.body.length > 0 && (
                  <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {p.body.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
                {p.checks && (
                  <ul className="mt-4 space-y-2">
                    {p.checks.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" weight="bold" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {p.after && (
                  <div className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {p.after.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          {closing && (
            <Reveal>
              <div className="space-y-2 pt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {closing.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          )}
          {note && <p className="pt-2 text-xs text-[var(--color-ink-muted)]">{note}</p>}
        </div>
      </div>
    </section>
  )
}
