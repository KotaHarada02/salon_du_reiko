import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
import { OWNER, SALON } from "@/lib/salon"

const POINTS = [
  {
    title: "ログハウスを貸切",
    text: "ほかのお客様と顔を合わせません。敷地内に無料駐車場があり、JR貴生川駅までの送迎もできます。",
  },
  {
    title: "看護師のオーナーが担当",
    text: `カウンセリングから施術、施術後のティータイムまで、オーナーの${OWNER.name}がひとりで担当します。`,
  },
  {
    title: "針を使わない、痛くない",
    text: "導入機器 GROTTY PRO は、近赤外線と音響振動を使います。眠ってしまう方も多く、ダウンタイムもありません。",
  },
  {
    title: "無理な勧誘はしません",
    text: "回数券の押し売りはしません。次回のご予約は、ご自身のペースで決めてください。",
  },
]

const PHOTOS = [
  // 外観写真は下部に文字が入っているので上寄せで切り抜く
  { src: "/img/outside.jpg", alt: "岩谷医院敷地内にあるログハウスの外観", caption: `外観。${SALON.station}（JR貴生川駅まで送迎あり）`, position: "object-top" },
  { src: "/img/room.jpg", alt: "ベッドとソファのある施術室", caption: "施術室。ランプの灯りで、ゆっくり過ごせます", position: "object-center" },
]

export function FirstVisit() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <Reveal>
          <h2 className="text-2xl text-[var(--salon-text)] md:text-3xl">はじめての方へ</h2>
          <p className="mt-4 max-w-xl text-sm">
            「エステは緊張する」「勧誘されそう」。ご来店前によく伺う不安に、先にお答えします。
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-2 gap-3 md:gap-6">
          {PHOTOS.map((p) => (
            <RevealItem key={p.src}>
              <figure>
                <div className="aspect-[4/5] overflow-hidden md:aspect-[4/3]">
                  <img src={p.src} alt={p.alt} className={`h-full w-full object-cover ${p.position}`} loading="lazy" />
                </div>
                <figcaption className="mt-2 text-[11px] leading-snug text-stone-400 md:text-xs">{p.caption}</figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-14 grid gap-x-14 sm:grid-cols-2">
          {POINTS.map(({ title, text }) => (
            <RevealItem key={title} className="border-t border-[var(--salon-border)] py-7">
              <h3 className="text-lg text-[var(--salon-text)]">{title}</h3>
              <p className="mt-2 max-w-[30em] text-sm leading-relaxed">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
