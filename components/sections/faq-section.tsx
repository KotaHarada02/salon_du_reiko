import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      q: "痛みはありますか？",
      a: "いいえ、当サロンの導入技術（GROTTY PRO）は音響振動を利用しており、痛みは全くありません。程よい振動で、リラックスして施術を受けていただけます。"
    },
    {
      q: "どれくらいの頻度で通うのがおすすめですか？",
      a: "肌の生まれ変わりサイクル（ターンオーバー）に合わせて、最初は2週間〜1ヶ月に1回をおすすめしています。状態が安定してきましたら、月1回のメンテナンスで十分な効果をご実感いただけます。"
    },
    {
      q: "施術後、すぐにメイクはできますか？",
      a: "はい、可能です。ダウンタイム（腫れや赤みが出る期間）がないため、施術後すぐにメイクをしてお帰りいただけます。パウダールームも完備しております。"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-[var(--salon-gold)] font-serif tracking-widest text-sm block mb-4">Q&A</span>
          <h2 className="text-3xl font-serif text-gray-800">よくあるご質問</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100">
              <AccordionTrigger className="text-left font-serif text-gray-800 hover:text-[var(--salon-gold)] py-6">
                Q. {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-loose pb-6 bg-[var(--salon-bg)] px-6 py-4 mb-4 rounded-sm">
                <span className="font-bold text-[var(--salon-gold)] mr-2">A.</span>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
