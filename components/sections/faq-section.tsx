import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/motion-reveal"
import { FAQS } from "@/lib/content"

export function FaqSection() {
  return (
    <section className="bg-[var(--color-surface-muted)]/45 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            よくあるご質問
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.slice(0, 5).map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6"
              >
                <AccordionTrigger className="py-5 text-left text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:no-underline">
                  <span>Q. {faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  <span className="mr-2 font-medium text-[var(--color-accent)]">A.</span>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Link
            href="/faq"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-hover)]"
          >
            <span>ほかのご質問を見る</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
