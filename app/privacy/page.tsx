import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: 'プライバシーポリシー | Salon du Reiko',
  description: '個人情報保護方針について。',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Privacy" subtitle="プライバシーポリシー" />

      <div className="container mx-auto max-w-2xl px-6">
        <div className="border-t border-[var(--salon-border)] pt-16">
          <p className="leading-loose text-stone-500">
            プライバシーポリシーの本文は、ただいま準備中です。<br />
            公開までしばらくお待ちください。
          </p>
        </div>
      </div>
    </main>
  )
}
