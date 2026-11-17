import { RecommendWizard } from "@/components/recommend-wizard"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "30秒メニュー診断 | Salon du Reiko",
  description: "4つの質問に答えるだけで、あなたに合うメニューと料金がわかります。",
}

export default function RecommendPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader
        subtitle="30秒メニュー診断"
        description="4つの質問に答えると、今のあなたに合うメニューと料金がわかります。予約するかどうかは、結果を見てから決めてください。"
      />

      <div className="container max-w-2xl pt-10 md:pt-14">
        <RecommendWizard tone="card" />
      </div>
    </main>
  )
}
