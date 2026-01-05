import React from "react"
import { ShieldCheck, Award, UserCheck } from "lucide-react"

export function Trust() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--salon-gold)] font-serif tracking-widest text-sm block mb-4">TRUST</span>
          <h2 className="text-3xl font-serif text-gray-800">安心・安全へのこだわり</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-[var(--salon-bg)] p-8 text-center border border-[var(--salon-border)]">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[var(--salon-gold)]">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-serif mb-4">厚労省基準の安全性</h3>
            <p className="text-sm text-gray-600 leading-loose">
              ドナー検査やウイルスクリアランス試験など、厚生労働省が定める厳しい基準をクリアした培養液のみを使用しています。
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-[var(--salon-bg)] p-8 text-center border border-[var(--salon-border)]">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[var(--salon-gold)]">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-serif mb-4">高濃度・高品質</h3>
            <p className="text-sm text-gray-600 leading-loose">
              不純物を徹底的に取り除いた「上澄み液」を厳選。希釈することなく、成分本来の力を肌へ届けます。
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-[var(--salon-bg)] p-8 text-center border border-[var(--salon-border)]">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[var(--salon-gold)]">
              <UserCheck size={32} />
            </div>
            <h3 className="text-xl font-serif mb-4">完全個室・専任制</h3>
            <p className="text-sm text-gray-600 leading-loose">
              他のお客様と顔を合わせることのないプライベート空間。専門知識を持つオーナーが、責任を持って施術を担当します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
