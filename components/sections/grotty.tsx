import { ExplainSection, type ExplainPoint } from "@/components/sections/explain"

// オーナーの文面をもとに、血流・血管・医療を連想させる表現を外したもの（薬機法）。
// 化粧品・エステの範囲の表現（整肌・健やかに整える・年齢に応じたお手入れ）だけを使う
const POINTS: ExplainPoint[] = [
  {
    no: "01",
    title: ["GROTTY PRO", "（グロッティプロ）とは"],
    body: [
      "GROTTY PROは、近赤外線と音響振動を組み合わせた、日本製の業務用美容機器です。",
      "ヒト幹細胞培養上清液（整肌成分）と組み合わせることで、お肌や頭皮を健やかに整え、年齢に応じたお手入れ（エイジングケア）をサポートします。",
    ],
  },
  {
    no: "02",
    title: ["Salon du Reikoが", "大切にしていること"],
    body: [],
    checks: ["健やかな肌環境づくり", "年齢に応じたエイジングケア", "頭皮からお顔までのトータルケア"],
    after: ["この3つを大切に考え、フェイシャル・ヘッド・首肩・デコルテまで施術を行っています。"],
  },
]

export function Grotty() {
  return (
    <ExplainSection
      className="bg-[var(--salon-bg)]"
      label="ABOUT GROTTY PRO"
      title={["GROTTY PRO のこと"]}
      intro="ほとんどのコースで使っている美容機器です。"
      image={{ src: "/img/treatment.jpg", alt: "GROTTY PRO をお客様の首元に当てている施術風景", className: "object-[center_45%]" }}
      points={POINTS}
      closing={["美しさは、お肌の表面だけではなく、毎日の土台づくりから。", "GROTTY PROは、そんな考えを支える美容機器です。"]}
      note="※エイジングケアとは、年齢に応じたお手入れのことです。感じ方には個人差があります。"
    />
  )
}
