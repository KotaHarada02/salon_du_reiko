import { PageHeader } from "@/components/page-header"
import { DiagnosisCta } from "@/components/diagnosis-cta"

export const metadata = {
  title: "ギャラリー | Salon du Reiko",
  description: "施術写真やサロンの雰囲気をご紹介します。",
}

export default function GalleryPage() {
  const images = [
    { src: "/img/outside.jpg", alt: "岩谷医院敷地内のログハウス外観", caption: "静かな敷地内に建つ貸切ログハウス", span: "md:row-span-2" },
    { src: "/img/room.jpg", alt: "木の温もりとランプの灯りの施術室", caption: "ゆったりとお過ごしいただける施術室", span: "" },
    { src: "/img/treatment.jpg", alt: "GROTTY PROを使ったフェイシャル施術", caption: "丁寧なカウンセリングと心地よい施術", span: "" },
  ]

  return (
    <main className="min-h-screen pb-32">
      <PageHeader
        subtitle="ギャラリー"
        description="ログハウスの外観から施術室、ケアの風景までご紹介します。"
      />

      <div className="container pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-6 md:auto-rows-[minmax(0,280px)] md:grid-cols-2 md:gap-8">
          {images.map((img) => (
            <figure
              key={img.src}
              className={`flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] ${img.span}`}
            >
              <div className="relative flex-1 overflow-hidden bg-[var(--color-surface-muted)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-6 py-4">
                <p className="font-serif text-base font-medium text-[var(--color-ink)]">{img.alt}</p>
                <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">{img.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <DiagnosisCta />
    </main>
  )
}
