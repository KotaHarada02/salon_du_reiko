import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "プライバシーポリシー | Salon du Reiko",
  description: "個人情報保護方針について。",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader subtitle="プライバシーポリシー" />

      <div className="container max-w-2xl pt-12 md:pt-16">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
            プライバシーポリシーの本文は、ただいま準備中です。公開までしばらくお待ちください。
          </p>
        </div>
      </div>
    </main>
  )
}
