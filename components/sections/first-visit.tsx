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
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="container">
        <Reveal>
          <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            はじめての方へ
          </h2>
          <p className="mt-3 max-w-[36em] text-sm leading-relaxed text-[var(--color-ink-muted)]">
            「エステは緊張する」「勧誘されそう」。ご来店前によく伺う不安に、先にお答えします。
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-2 md:gap-8">
          {PHOTOS.map((p) => (
            <RevealItem key={p.src}>
              <figure>
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)]">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className={`h-full w-full object-cover ${p.position}`}
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-[var(--color-ink-muted)]">
                  {p.caption}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {POINTS.map(({ title, text }) => (
            <RevealItem
              key={title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7"
            >
              <h3 className="font-serif text-lg font-medium text-[var(--color-ink)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
