import Link from "next/link"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-reveal"
import { PICKUP_VOICES } from "@/lib/content"

const OFFSETS = ["md:mt-0", "md:mt-14", "md:mt-28"]

export function VoicePickup() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <Reveal>
          <div className="mb-14 md:mb-20">
            <h2 className="text-2xl text-[var(--salon-text)] md:text-3xl">通っている方の声</h2>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {PICKUP_VOICES.map((v, i) => (
            <RevealItem key={v.text} className={OFFSETS[i]}>
              <figure className="border-t border-[var(--salon-gold)] pt-6">
                <blockquote className="line-clamp-4 text-sm leading-loose text-stone-600">{v.text}</blockquote>
                <figcaption className="mt-4 text-xs tracking-wider text-[var(--salon-gold)]">
                  {[v.location, v.name].filter(Boolean).join(" ")}・{v.menu}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 md:mt-10">
          <Link href="/reviews" className="border-b border-[var(--salon-gold)] pb-1 text-sm text-[var(--salon-text)] transition-colors hover:text-[var(--salon-gold)]">
            お客様の声をすべて読む
          </Link>
        </div>
      </div>
    </section>
  )
}
