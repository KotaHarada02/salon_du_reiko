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
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <Reveal>
          <div className="md:sticky md:top-32">
            <span className="mb-4 block font-serif text-sm tracking-widest text-[var(--salon-gold)]">
              Q&amp;A
            </span>
            <h2 className="text-2xl text-gray-800 md:text-3xl">よくあるご質問</h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.slice(0, 5).map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[var(--salon-border)]">
                <AccordionTrigger className="py-6 text-left text-gray-800 hover:text-[var(--salon-gold)]">
                  Q. {faq.q}
                </AccordionTrigger>
                <AccordionContent className="mb-4 bg-[var(--salon-bg)] px-6 py-4 leading-loose text-gray-600">
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
