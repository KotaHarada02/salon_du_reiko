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
  {
    src: "/img/outside.jpg",
    alt: "岩谷医院敷地内にあるログハウスの外観",
    caption: `外観。${SALON.station}（JR貴生川駅まで送迎あり）`,
    position: "object-top",
  },
  {
    src: "/img/room.jpg",
    alt: "ベッドとソファのある施術室",
    caption: "施術室。ランプの灯りで、ゆっくり過ごせます",
    position: "object-center",
  },
]

export function FirstVisit() {
  return (
    <section className="bg-[var(--color-bg)] py-14 md:py-24">
      <div className="container">
        <Reveal>
          <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            はじめての方へ
          </h2>
          <p className="mt-2.5 max-w-[36em] text-sm leading-relaxed text-[var(--color-ink-muted)]">
            「エステは緊張する」「勧誘されそう」。ご来店前によく伺う不安に、先にお答えします。
          </p>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-8">
          {PHOTOS.map((p) => (
            <RevealItem key={p.src}>
              <figure>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] md:aspect-[4/3] md:rounded-3xl">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className={`h-full w-full object-cover ${p.position}`}
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2 text-[11px] leading-snug text-[var(--color-ink-muted)] md:mt-2.5 md:text-xs">
                  {p.caption}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-8 grid gap-3.5 sm:grid-cols-2 md:mt-12 lg:gap-6">
          {POINTS.map(({ title, text }) => (
            <RevealItem
              key={title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:p-7"
            >
              <h3 className="font-serif text-base font-medium text-[var(--color-ink)] md:text-lg">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)] md:mt-2">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
