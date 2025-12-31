import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: 'メニュー | Salon de Reiko',
  description: '施術メニューと料金のご案内。',
}

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Menu" subtitle="施術メニュー" />

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Facial */}
        <section className="py-16 md:py-24" id="facial">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Facial</h2>
            <p className="text-xs tracking-widest text-[var(--salon-gold)]">フェイシャル</p>
          </div>

          <div className="space-y-12">
            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-4 relative overflow-hidden">
                <h3 className="text-lg md:text-xl font-serif text-gray-800 bg-[var(--salon-bg)] pr-4 z-10 relative">ヒト幹細胞培養上清液フェイシャル</h3>
                <span className="absolute bottom-2 left-0 w-full border-b border-dotted border-gray-300 -z-0"></span>
                <span className="text-lg font-serif text-[var(--salon-gold)] bg-[var(--salon-bg)] pl-4 z-10 relative">¥12,000</span>
              </div>
              <p className="text-sm text-gray-500 leading-loose pl-4 border-l border-[var(--salon-gold)] ml-2">
                再生医療から生まれた高濃度培養液を導入し、肌の細胞を活性化。<br/>
                シワ・たるみ・くすみにアプローチし、ハリのある若々しい肌へ導きます。
              </p>
            </div>

            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-4 relative overflow-hidden">
                <h3 className="text-lg md:text-xl font-serif text-gray-800 bg-[var(--salon-bg)] pr-4 z-10 relative">GOMARICOオイルフェイシャル</h3>
                <span className="absolute bottom-2 left-0 w-full border-b border-dotted border-gray-300 -z-0"></span>
                <span className="text-lg font-serif text-[var(--salon-gold)] bg-[var(--salon-bg)] pl-4 z-10 relative">¥8,000</span>
              </div>
              <p className="text-sm text-gray-500 leading-loose pl-4 border-l border-[var(--salon-gold)] ml-2">
                抗酸化作用の高いセサミオイルを使用。<br/>
                デコルテまでしっかりと流し、老廃物の排出を促します。
              </p>
            </div>
          </div>
        </section>

        {/* Scalp */}
        <section className="py-16 md:py-24 border-t border-[var(--salon-border)]" id="scalp">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Scalp</h2>
            <p className="text-xs tracking-widest text-[var(--salon-gold)]">スカルプ（頭皮ケア）</p>
          </div>

          <div className="space-y-12">
            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-4 relative overflow-hidden">
                <h3 className="text-lg md:text-xl font-serif text-gray-800 bg-[var(--salon-bg)] pr-4 z-10 relative">ヒト幹細胞培養上清液スカルプ</h3>
                <span className="absolute bottom-2 left-0 w-full border-b border-dotted border-gray-300 -z-0"></span>
                <span className="text-lg font-serif text-[var(--salon-gold)] bg-[var(--salon-bg)] pl-4 z-10 relative">¥10,000</span>
              </div>
              <p className="text-sm text-gray-500 leading-loose pl-4 border-l border-[var(--salon-gold)] ml-2">
                頭皮環境を整え、健やかな髪を育む土台を作ります。<br/>
                薄毛・抜け毛が気になる方、髪にハリ・コシが欲しい方へ。
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 md:py-24 border-t border-[var(--salon-border)]" id="body">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Body</h2>
            <p className="text-xs tracking-widest text-[var(--salon-gold)]">ボディ</p>
          </div>

          <div className="space-y-12">
            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-4 relative overflow-hidden">
                <h3 className="text-lg md:text-xl font-serif text-gray-800 bg-[var(--salon-bg)] pr-4 z-10 relative">最新エステ機器 GROTTYPRO</h3>
                <span className="absolute bottom-2 left-0 w-full border-b border-dotted border-gray-300 -z-0"></span>
                <span className="text-lg font-serif text-[var(--salon-gold)] bg-[var(--salon-bg)] pl-4 z-10 relative">¥15,000</span>
              </div>
              <p className="text-sm text-gray-500 leading-loose pl-4 border-l border-[var(--salon-gold)] ml-2">
                近赤外線と音響振動で、深層筋肉までアプローチ。<br/>
                凝り固まった体をほぐし、血流を改善します。
              </p>
            </div>

            <div className="group">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-4 relative overflow-hidden">
                <h3 className="text-lg md:text-xl font-serif text-gray-800 bg-[var(--salon-bg)] pr-4 z-10 relative">オイルトリートメント</h3>
                <span className="absolute bottom-2 left-0 w-full border-b border-dotted border-gray-300 -z-0"></span>
                <span className="text-lg font-serif text-[var(--salon-gold)] bg-[var(--salon-bg)] pl-4 z-10 relative">¥9,000</span>
              </div>
              <p className="text-sm text-gray-500 leading-loose pl-4 border-l border-[var(--salon-gold)] ml-2">
                オールハンドによる至福のトリートメント。<br/>
                心身のバランスを整え、深いリラクゼーションへ導きます。
              </p>
            </div>
          </div>
        </section>

        {/* Option */}
        <section className="py-16 md:py-24 border-t border-[var(--salon-border)]" id="option">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Option</h2>
            <p className="text-xs tracking-widest text-[var(--salon-gold)]">オプション</p>
          </div>

          <div className="space-y-8">
             <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 relative overflow-hidden">
                <h3 className="text-base md:text-lg font-serif text-gray-800 bg-[var(--salon-bg)] pr-4 z-10 relative">ヘッドマッサージ</h3>
                <span className="absolute bottom-2 left-0 w-full border-b border-dotted border-gray-300 -z-0"></span>
                <span className="text-base font-serif text-gray-600 bg-[var(--salon-bg)] pl-4 z-10 relative">¥2,000</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 relative overflow-hidden">
                <h3 className="text-base md:text-lg font-serif text-gray-800 bg-[var(--salon-bg)] pr-4 z-10 relative">パック各種</h3>
                <span className="absolute bottom-2 left-0 w-full border-b border-dotted border-gray-300 -z-0"></span>
                <span className="text-base font-serif text-gray-600 bg-[var(--salon-bg)] pl-4 z-10 relative">¥1,500〜</span>
              </div>
          </div>
        </section>

      </div>
    </main>
  )
}


