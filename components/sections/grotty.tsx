import { ExplainSection, type ExplainPoint } from "@/components/sections/explain"

// メーカー（株式会社プロラボソリューション）の公式ページで確かめられる事実と、当サロンでの使い方だけを書く。
// 血流・細胞・到達する深さなど、効果をうたう表現は使わない（薬機法）
// 本文の「GROTTY PRO」が行末で分かれないよう、間を改行しない空白にする
const NAME = "GROTTY\u00a0PRO"

const POINTS: ExplainPoint[] = [
  {
    no: "01",
    title: ["どんな機器？"],
    body: [
      `${NAME}（グロッティプロ）は、株式会社プロラボソリューションの業務用美容機器です。`,
      "近赤外線と音響振動を組み合わせた日本製の機器で、お顔にもからだにも使えます。",
    ],
  },
  {
    no: "02",
    title: ["サロンでの", "使い方"],
    body: [
      `ヘッドスパ以外のコースでは、${NAME} の全身照射から施術を始めます。`,
      "フェイシャルでは、ヒト幹細胞培養上清液（整肌成分）をお肌へ届けるサポートに使います。",
    ],
  },
  {
    no: "03",
    title: ["受け心地は？"],
    body: [
      "針を使わず、肌に当てて使う機器なので、痛みはありません。",
      "横になったまま受けていただけるので、施術中に眠ってしまう方もいらっしゃいます。",
    ],
  },
]

export function Grotty() {
  return (
    <ExplainSection
      className="bg-[var(--salon-bg)]"
      label="ABOUT GROTTY PRO"
      title={["GROTTY PRO のこと"]}
      intro="ほとんどのコースで使っている美容機器です。はじめての方のために、3つにまとめました。"
      image={{ src: "/img/treatment.jpg", alt: "GROTTY PRO をお客様の首元に当てている施術風景", className: "object-[center_45%]" }}
      points={POINTS}
      note="※感じ方には個人差があります。"
    />
  )
}
