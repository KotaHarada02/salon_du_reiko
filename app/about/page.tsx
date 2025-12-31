import { PageHeader } from "@/components/page-header"
import Image from "next/image"

export const metadata = {
  title: '幸せを引き寄せるサロン | Salon de Reiko',
  description: 'サロンの想いとコンセプトのご紹介。',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="About Salon" subtitle="幸せを引き寄せるサロン" />
      
      <div className="container mx-auto px-6">
        {/* Concept Section */}
        <section className="py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 aspect-[3/4] bg-gray-100 relative overflow-hidden">
               {/* Placeholder for Concept Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-serif">Concept Image</div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl font-serif text-gray-800 leading-relaxed">
                心も体も幸せに。<br/>
                内側から輝く美しさを。
              </h2>
              <div className="w-12 h-[1px] bg-[var(--salon-gold)]"></div>
              <p className="text-gray-600 leading-loose tracking-widest text-justify">
                Salon de Reikoは、ただ外見を美しくするだけの場所ではありません。<br/>
                日々の喧騒を忘れ、自分自身と深く向き合うための隠れ家です。<br/><br/>
                厳選されたヒト幹細胞培養上清液や、世界中から選び抜いたオーガニックオイル。<br/>
                本物だけが持つ力が、あなたの肌と心に深い癒しをもたらします。<br/><br/>
                施術を終えた後、鏡に映る自分が少し好きになる。<br/>
                そんな「幸せを引き寄せる」体験を、ここでお約束します。
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32 border-t border-[var(--salon-border)]">
          <div className="text-center mb-20">
            <span className="text-[var(--salon-gold)] font-serif tracking-widest text-sm block mb-4">FEATURES</span>
            <h2 className="text-3xl font-serif text-gray-800">3つのこだわり</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "完全プライベート空間",
                desc: "他のお客様と顔を合わせることのない、あなただけの特別な時間をご提供します。"
              },
              {
                title: "医療レベルのケア",
                desc: "再生医療の分野でも注目される「ヒト幹細胞培養上清液」を使用した、結果にこだわる施術。"
              },
              {
                title: "厳選された素材",
                desc: "肌に直接触れるものだからこそ、オイルやタオル一つひとつまで、最高品質のものを選び抜いています。"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-[var(--salon-bg)] border border-[var(--salon-gold)] rounded-full flex items-center justify-center mb-8 group-hover:bg-[var(--salon-gold)] transition-colors duration-500">
                  <span className="font-serif text-[var(--salon-gold)] group-hover:text-white transition-colors duration-500">{i + 1}</span>
                </div>
                <h3 className="text-xl font-serif mb-6">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-loose text-justify inline-block max-w-xs">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}


