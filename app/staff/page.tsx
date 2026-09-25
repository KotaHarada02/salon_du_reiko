import { PageHeader } from "@/components/page-header"
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr"

export const metadata = {
  title: 'スタッフ紹介 | Salon du Reiko',
  description: 'サロンスタッフのプロフィールや想いをご紹介します。',
}

export default function StaffPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Staff" subtitle="スタッフ紹介" />

      <div className="container mx-auto max-w-2xl px-6">
        <div className="flex flex-col items-start gap-6 border border-dashed border-[var(--salon-border)] px-8 py-16 md:px-12">
          <UsersThreeIcon className="h-8 w-8 text-[var(--salon-gold)]" weight="light" />
          <div>
            <p className="mb-2 font-serif text-xl text-gray-800">Coming Soon</p>
            <p className="leading-loose text-gray-500">
              スタッフのプロフィールは、ただいま準備中です。<br />
              公開までしばらくお待ちください。
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
