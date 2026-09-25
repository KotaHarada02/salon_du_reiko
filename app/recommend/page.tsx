import { RecommendWizard } from "@/components/recommend-wizard"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "30秒メニュー診断 | Salon du Reiko",
  description: "4つの質問に答えるだけで、あなたに合うメニューと料金がわかります。",
}

export default function RecommendPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Diagnosis" subtitle="30秒メニュー診断" />

      <div className="container max-w-2xl">
        <p className="mb-10 border-l border-[var(--salon-gold)] pl-5 text-sm">
          4つの質問に答えると、今のあなたに合うメニューと料金がわかります。
          <br />
          予約するかどうかは、結果を見てから決めてください。
        </p>
        <RecommendWizard tone="card" />
      </div>
    </main>
  )
}
