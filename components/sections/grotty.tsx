import { ExplainSection, type ExplainPoint } from "@/components/sections/explain"

// 薬機法に配慮した表現にしている。GROTTY PRO は医療機器ではないため、
// 血流・血管・一酸化窒素・温める・めぐりなど「体の働きに作用する」と受け取れる表現は使わない。
// 書くのは、機器の事実（メーカー公式）・当サロンでの施術の流れ・化粧品の範囲のお手入れだけ
const NAME = "GROTTY PRO"

const POINTS: ExplainPoint[] = [
  {
    no: "01",
    title: ["GROTTY PRO", "（グロッティプロ）とは"],
    body: [
      `${NAME}は、株式会社プロラボソリューションの業務用美容機器です。近赤外線と音響振動を組み合わせた日本製の機器で、お顔にもからだにも使えます。`,
      "光と振動を肌に当てて使うので、針は使いません。横になったまま、リラックスして受けていただけます。",
    ],
  },
  {
    no: "02",
    title: ["ヒト幹細胞培養上清液と", "組み合わせて"],
    body: [
      "フェイシャルでは、ヒト幹細胞培養上清液（整肌成分）をお肌へ届けるサポートに使います。",
      "お肌や頭皮を健やかに整え、年齢に応じたお手入れ（エイジングケア）を行います。",
    ],
  },
  {
    no: "03",
    title: ["施術の流れ"],
    body: [
      `ヘッドスパ以外のコースでは、${NAME} の全身照射から施術を始めます。`,
      "そのあと、お顔・頭皮・首肩・デコルテまで、手技と組み合わせて丁寧にケアします。",
    ],
  },
  {
    no: "04",
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
      catchphrase="美しさは、肌の土台づくりから。"
      intro={`${NAME}は、近赤外線と音響振動を組み合わせた美容機器です。肌・頭皮・首肩まで心地よくケアしながら、ヒト幹細胞培養上清液（整肌成分）を組み合わせた、年齢に応じたエイジングケアを行います。`}
      image={{ src: "/img/treatment.jpg", alt: "GROTTY PRO をお客様の首元に当てている施術風景", className: "object-[center_45%]" }}
      points={POINTS}
      note="※エイジングケアとは、年齢に応じたお手入れのことです。感じ方には個人差があります。"
    />
  )
}
