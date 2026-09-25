import Image from "next/image"
import { Reveal } from "@/components/motion-reveal"

const POINTS = [
  {
    no: "01",
    title: "細胞ではなく「上澄み液」",
    text: "使うのは幹細胞そのものではありません。幹細胞を培養したときにできる上澄み液（培養上清液）から、細胞や不純物を取り除いたものです。",
  },
  {
    no: "02",
    title: "ヒト由来だから、肌になじむ",
    text: "肌には成分を受け取る「カギ穴」があります。ヒト由来の成分は、植物由来よりもこのカギ穴に合いやすいと考えられています。",
    image: "/img/receipter.png",
    alt: "カギとカギ穴（レセプター）のイメージ図",
  },
  {
    no: "03",
    title: "手では届かない層まで導入",
    text: "近赤外線と音響振動の機器「GROTTY PRO」で、普段のスキンケアより奥の角質層まで届けます。針は使いません。",
  },
]

export function Why() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <div className="md:sticky md:top-28">
            <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">WHY STEM CELL</span>
            <h2 className="mt-3 text-2xl leading-relaxed text-[var(--salon-text)] md:text-3xl">
              ヒト幹細胞培養上清液って、
              <br />
              なに？
            </h2>
            <p className="mt-4 text-sm">
              当サロンの看板メニューで使う美容成分です。はじめて聞く方のために、3つにまとめました。
            </p>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden border border-[var(--salon-border)] md:block">
              <Image src="/img/dentatsu.png" alt="成分が肌に届くイメージ図" fill className="object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="border-t border-[var(--salon-border)]">
          {POINTS.map((p) => (
            <Reveal key={p.no}>
              <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[var(--salon-border)] py-8">
                <span className="font-serif text-2xl text-[var(--salon-gold)]/60">{p.no}</span>
                <div>
                  <h3 className="text-lg text-[var(--salon-text)]">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed">{p.text}</p>
                  {p.image && (
                    <div className="relative mt-5 aspect-[16/9] overflow-hidden border border-[var(--salon-border)] md:hidden">
                      <Image src={p.image} alt={p.alt!} fill className="object-cover" />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
          <p className="pt-4 text-[11px] text-gray-400">※ヒト幹細胞順化培養液（整肌成分）。効果の感じ方には個人差があります。</p>
        </div>
      </div>
    </section>
  )
}
