import { PageHeader } from "@/components/page-header"
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr"

export const metadata = {
  title: "スタッフ紹介 | Salon du Reiko",
  description: "サロンスタッフのプロフィールや想いをご紹介します。",
}

export default function StaffPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader subtitle="スタッフ紹介" />

      <div className="container max-w-2xl pt-12 md:pt-16">
        <div className="flex flex-col items-start gap-5 rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <UsersThreeIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-serif text-xl font-medium text-[var(--color-ink)]">ただいま準備中です</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              スタッフのプロフィールは、ただいま準備中です。公開までしばらくお待ちください。
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
