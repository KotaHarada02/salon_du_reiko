import { RecommendWizard } from "@/components/recommend-wizard"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "おすすめ診断 | Salon de Reiko",
  description: "質問に答えるとおすすめメニューをご提案します。",
}

export default function RecommendPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Diagnosis" subtitle="おすすめ診断" />
      
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-gray-600 leading-loose">
            簡単な質問にお答えいただくだけで、<br/>
            今のあなたに最適なメニューをご提案いたします。<br/>
            まずは、お悩みをお聞かせください。
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-[var(--salon-border)]">
          <RecommendWizard />
        </div>
      </div>
    </main>
  )
}


