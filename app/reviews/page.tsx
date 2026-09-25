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
      <PageHeader title="Voice" subtitle="お客様の声" />

      <div className="container max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {VOICES.map((v, i) => (
            <article
              key={v.text}
              className={`border border-[var(--salon-border)] bg-white p-8 md:p-10 ${i % 2 === 1 ? "md:translate-y-10" : ""}`}
            >
              <p className="text-xs tracking-wider text-[var(--salon-gold)]">{v.menu}</p>
              <blockquote className="mt-4 text-sm leading-loose text-gray-600">{v.text}</blockquote>
              <p className="mt-6 text-right text-xs text-gray-400">{[v.location, v.name].filter(Boolean).join(" ")}</p>
            </article>
          ))}
        </div>
        <p className="mt-16 text-xs text-gray-400">※個人の感想です。効果の感じ方には個人差があります。</p>
      </div>

      <DiagnosisCta lead="同じような悩みがあるなら" />
    </main>
  )
}
