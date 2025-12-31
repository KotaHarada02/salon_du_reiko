import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: 'お客様のお声 | Salon de Reiko',
  description: 'ご利用者様のレビューをご紹介。',
}

export default function ReviewsPage() {
  const reviews = [
    {
      age: "40代女性",
      menu: "フェイシャル",
      content: "施術後すぐに肌のハリを実感できました。丁寧なカウンセリングで安心して通えます。サロンの雰囲気もとても素敵で、毎月の楽しみになっています。"
    },
    {
      age: "30代女性",
      menu: "ボディ",
      content: "オイルトリートメントで心も体も癒されました。プライベート空間なので、周りを気にせずリラックスできるのが嬉しいです。香りにも癒されました。"
    },
    {
      age: "50代男性",
      menu: "スカルプ",
      content: "髪と頭皮の悩みが改善されてきました。最初は緊張しましたが、スタッフの方の対応が素晴らしく、今では家族にも勧めています。"
    }
  ]

  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Voice" subtitle="お客様のお声" />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid gap-12 md:gap-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 md:p-12 border border-[var(--salon-border)] relative">
              <span className="absolute top-8 left-8 text-6xl font-serif text-[var(--salon-gold)] opacity-20">“</span>
              
              <div className="relative z-10">
                <p className="text-gray-600 leading-loose font-serif text-lg mb-8 text-center">
                  {review.content}
                </p>
                
                <div className="flex items-center justify-center gap-4 text-sm tracking-widest">
                  <span className="text-[var(--salon-gold)]">{review.menu}</span>
                  <span className="w-[1px] h-3 bg-gray-300"></span>
                  <span className="text-gray-400">{review.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


