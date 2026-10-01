import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Reveal } from "@/components/motion-reveal"
import { FAQS } from "@/lib/content"


export function FaqSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      {/* 左に見出しだけの列を置かず、見出しの下に質問を並べる */}
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="text-2xl text-[var(--salon-text)] md:text-3xl">よくあるご質問</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.slice(0, 5).map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[var(--salon-border)]">
                <AccordionTrigger className="py-6 text-left text-stone-800 hover:text-[var(--salon-gold)]">
                  Q. {faq.q}
                </AccordionTrigger>
                <AccordionContent className="mb-4 bg-[var(--salon-bg)] px-6 py-4 leading-loose text-stone-600">
                  <span className="mr-2 font-bold text-[var(--salon-gold)]">A.</span>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link href="/faq" className="mt-8 inline-block border-b border-[var(--salon-gold)] pb-1 text-sm text-[var(--salon-text)] transition-colors hover:text-[var(--salon-gold)]">
            ほかのご質問を見る
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
