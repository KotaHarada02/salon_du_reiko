import Image from "next/image"
import { Reveal } from "@/components/motion-reveal"
import { cn } from "@/lib/utils"

export type ExplainPoint = {
  no: string
  /** 見出しは区切りの位置でだけ折り返す（スマホで1文字だけ次の行に落ちないように） */
  title: string[]
  body: string[]
}

/** トップの「〇〇のこと」セクション。左に見出しと画像、右に番号付きの説明を並べる */
export function ExplainSection({
  label,
  title,
  intro,
  image,
  points,
  note,
  className,
}: {
  label: string
  /** 見出し。配列の区切りでスマホのときだけ改行する */
  title: string[]
  intro: string
  image: { src: string; alt: string; className?: string }
  points: ExplainPoint[]
  note?: string
  className?: string
}) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className="container grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <div className="md:sticky md:top-28">
            <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">{label}</span>
            <h2 className="mt-3 text-2xl leading-relaxed text-[var(--salon-text)] md:text-3xl">
              {title.map((part, i) => (
                <span key={part}>
                  {i > 0 && <br className="md:hidden" />}
                  {part}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-sm">{intro}</p>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden border border-[var(--salon-border)] md:block">
              <Image src={image.src} alt={image.alt} fill className={cn("object-cover", image.className)} />
            </div>
          </div>
        </Reveal>

        <div className="border-t border-[var(--salon-border)]">
          {points.map((p) => (
            <Reveal key={p.no}>
              <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[var(--salon-border)] py-8">
                <span className="font-serif text-2xl text-[var(--salon-gold)]/60">{p.no}</span>
                <div className="min-w-0">
                  <h3 className="text-lg text-[var(--salon-text)]">
                    {p.title.map((part) => (
                      <span key={part} className="inline-block">
                        {part}
                      </span>
                    ))}
                  </h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed">
                    {p.body.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          {note && <p className="pt-4 text-[11px] text-gray-400">{note}</p>}
        </div>
      </div>
    </section>
  )
}
