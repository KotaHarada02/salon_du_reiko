import Image from "next/image"
import { CheckIcon } from "@phosphor-icons/react/ssr"
import { Reveal } from "@/components/motion-reveal"
import { cn } from "@/lib/utils"

export type ExplainPoint = {
  no: string
  /** 見出しは区切りの位置でだけ折り返す（スマホで1文字だけ次の行に落ちないように） */
  title: string[]
  body: string[]
  /** 本文のあとに並べるチェックリスト */
  checks?: string[]
  /** チェックリストのあとの本文 */
  after?: string[]
}

/** トップの「〇〇のこと」セクション。片側に見出しと画像、もう片側に説明を並べる。
 * 2つ続けて置くので、reverse で左右を入れ替え、numbered で番号の有無を変えて同じ形が続かないようにする */
export function ExplainSection({
  title,
  intro,
  catchphrase,
  image,
  points,
  note,
  closing,
  reverse = false,
  numbered = true,
  className,
}: {
  /** 見出し。配列の区切りでスマホのときだけ改行する */
  title: string[]
  intro: string
  /** 見出しの下に置くキャッチコピー */
  catchphrase?: string
  image: { src: string; alt: string; className?: string }
  points: ExplainPoint[]
  note?: string
  /** 項目の下に置く締めの言葉 */
  closing?: string[]
  /** 見出しと画像を右側に置く */
  reverse?: boolean
  /** 項目に 01・02… の番号を付ける */
  numbered?: boolean
  className?: string
}) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      <div className={cn("container grid gap-12 md:gap-20", reverse ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]")}>
        <Reveal className={cn(reverse && "md:order-2")}>
          <div className="md:sticky md:top-28">
            <h2 className="text-2xl leading-relaxed text-[var(--salon-text)] md:text-3xl">
              {title.map((part, i) => (
                <span key={part}>
                  {i > 0 && <br className="md:hidden" />}
                  {part}
                </span>
              ))}
            </h2>
            {catchphrase && (
              <p className="mt-5 font-serif text-xl leading-relaxed text-[var(--salon-gold)] md:text-2xl">{catchphrase}</p>
            )}
            <p className="mt-4 text-sm leading-relaxed">{intro}</p>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden border border-[var(--salon-border)] md:block">
              <Image src={image.src} alt={image.alt} fill className={cn("object-cover", image.className)} />
            </div>
          </div>
        </Reveal>

        <div className={cn("border-t border-[var(--salon-border)]", reverse && "md:order-1")}>
          {points.map((p) => (
            <Reveal key={p.no}>
              <div className={cn("border-b border-[var(--salon-border)] py-8", numbered && "grid grid-cols-[48px_1fr] gap-4")}>
                {numbered && <span className="font-serif text-2xl text-[var(--salon-gold)]/60">{p.no}</span>}
                <div className="min-w-0">
                  <h3 className="text-lg text-[var(--salon-text)]">
                    {p.title.map((part) => (
                      <span key={part} className="inline-block">
                        {part}
                      </span>
                    ))}
                  </h3>
                  {p.body.length > 0 && (
                    <div className="mt-3 space-y-3 text-sm leading-relaxed">
                      {p.body.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                  {p.checks && (
                    <ul className="mt-4 space-y-2">
                      {p.checks.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-[var(--salon-text)]">
                          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--salon-gold)]" weight="bold" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.after && (
                    <div className="mt-4 space-y-3 text-sm leading-relaxed">
                      {p.after.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
          {closing && (
            <Reveal>
              <div className="mt-8 border-l-2 border-[var(--salon-gold)] pl-5">
                {closing.map((line) => (
                  <p key={line} className="font-serif text-base leading-relaxed text-[var(--salon-text)] md:text-lg">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          )}
          {note && <p className="pt-6 text-[11px] text-stone-400">{note}</p>}
        </div>
      </div>
    </section>
  )
}
