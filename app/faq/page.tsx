export const metadata = {
  title: 'FAQ | Salon de Reiko',
  description: 'よくあるご質問と回答を掲載します。',
}

export default function FAQPage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-semibold mb-4">よくあるご質問</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Q. 予約は必要ですか？</h2>
          <p className="text-muted-foreground">A. 当サロンは完全予約制です。事前にお電話またはLINE・InstagramのDMでご予約ください。</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Q. 駐車場はありますか？</h2>
          <p className="text-muted-foreground">A. 敷地内に無料駐車場がございます。ご利用の際はご案内いたします。</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Q. 支払い方法は？</h2>
          <p className="text-muted-foreground">A. 現金・各種クレジットカード・PayPayがご利用いただけます。</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Q. 男性も利用できますか？</h2>
          <p className="text-muted-foreground">A. 女性専用サロンですが、ご紹介の場合は男性もご利用いただけます。事前にご相談ください。</p>
        </div>
      </div>
    </main>
  )
}
