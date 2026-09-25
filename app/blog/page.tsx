import { PageHeader } from "@/components/page-header"
import { NotePencilIcon } from "@phosphor-icons/react/dist/ssr"

export const metadata = {
  title: 'ブログ | Salon du Reiko',
  description: 'サロンの最新情報や美容コラムを掲載します。',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Blog" subtitle="お知らせ・美容コラム" />

      <div className="container mx-auto max-w-2xl px-6">
        <div className="flex flex-col items-start gap-6 border border-dashed border-[var(--salon-border)] px-8 py-16 md:px-12">
          <NotePencilIcon className="h-8 w-8 text-[var(--salon-gold)]" weight="light" />
          <div>
            <p className="mb-2 font-serif text-xl text-gray-800">Coming Soon</p>
            <p className="leading-loose text-gray-500">
              記事の公開に向けて準備を進めております。<br />
              しばらくお待ちください。
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
