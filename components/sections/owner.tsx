import Link from "next/link"
import { Reveal } from "@/components/motion-reveal"
import { OWNER } from "@/lib/salon"

// お客様の声から、オーナーの人柄が伝わる言葉をそのまま引用する
const QUOTES = [
  { text: "笑顔でお話しやすく、サロン内の雰囲気も素敵でした。", by: "甲賀市 S様" },
  { text: "施術前後にあるティータイムがとても癒されて気に入っています。", by: "甲賀市 H様" },
]

export function Owner() {
  return (
    <section className="bg-[var(--salon-bg)] py-20 md:py-28">
      <div className="container grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <Reveal>
          <div className="mx-auto aspect-[2/3] max-w-[320px] overflow-hidden md:max-w-none">
            <img src="/img/owner1.jpg" alt={`オーナーの${OWNER.name}`} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">OWNER</span>
          <h2 className="mt-3 text-2xl text-[var(--salon-text)] md:text-3xl">
            オーナー <span className="ml-1">{OWNER.name}</span>
          </h2>
          <p className="mt-2 text-xs tracking-wider text-gray-500">{OWNER.career}</p>

          <div className="mt-6 space-y-4 text-sm leading-loose">
            <p>
              現在、看護師として働いています。病気をきっかけに一気に老け込んでしまった私を、「{OWNER.quote}」にしてくれたのがヒト幹細胞のエステです。
            </p>
            <p>
              大切にしているのは「{OWNER.motto}」。スタッフは私ひとりなので、カウンセリングから施術、施術後のお茶の時間まで、最初から最後まで担当します。
            </p>
          </div>

          <ul className="mt-8 space-y-4 border-l border-[var(--salon-gold)] pl-6">
            {QUOTES.map((q) => (
              <li key={q.text}>
                <p className="font-serif text-[15px] leading-relaxed text-[var(--salon-text)]">「{q.text}」</p>
                <p className="mt-1 text-xs text-gray-400">{q.by}</p>
              </li>
            ))}
          </ul>

          <Link href="/about#owner" className="mt-10 inline-block border-b border-[var(--salon-gold)] pb-1 text-sm text-[var(--salon-text)] transition-colors hover:text-[var(--salon-gold)]">
            オーナーがサロンを開いた理由
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
