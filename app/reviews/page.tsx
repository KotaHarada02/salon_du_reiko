import { QuotesIcon } from "@phosphor-icons/react/dist/ssr"
import { PageHeader } from "@/components/page-header"
import { DiagnosisCta } from "@/components/diagnosis-cta"
import { VOICES } from "@/lib/content"

export const metadata = {
  title: "お客様の声 | Salon du Reiko",
  description: "通っているお客様の声をご紹介します。",
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader
        subtitle="お客様の声"
        description="Salon du Reiko に通ってくださっているお客様からいただいたお声をご紹介します。"
      />

      <div className="container max-w-5xl pt-12 md:pt-16">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {VOICES.map((v) => (
            <article
              key={v.text}
              className="flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
                    {v.menu}
                  </span>
                  <QuotesIcon className="h-5 w-5 text-[var(--color-accent)]/50" weight="fill" aria-hidden="true" />
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]">
                  {v.text}
                </blockquote>
              </div>
              <p className="mt-5 border-t border-[var(--color-border)] pt-3 text-right text-xs font-medium text-[var(--color-ink-muted)]">
                {[v.location, v.name].filter(Boolean).join(" ")}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-xs text-[var(--color-ink-muted)]">
          ※個人の感想です。効果の感じ方には個人差があります。
        </p>
      </div>

      <DiagnosisCta />
    </main>
  )
}
