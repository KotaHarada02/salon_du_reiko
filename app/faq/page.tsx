import { PageHeader } from "@/components/page-header"
import { DiagnosisCta } from "@/components/diagnosis-cta"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQS } from "@/lib/content"
import { LineButton } from "@/components/booking-buttons"

export const metadata = {
  title: "よくあるご質問 | Salon du Reiko",
  description: "痛み・勧誘・支払い方法など、はじめての方からよくいただくご質問にお答えします。",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="FAQ" subtitle="よくあるご質問" />

      <div className="container max-w-2xl">
        <Accordion type="single" collapsible className="border-t border-[var(--salon-border)]">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-[var(--salon-border)]">
              <AccordionTrigger className="py-6 text-left font-serif text-lg text-stone-800 hover:text-[var(--salon-gold)] hover:no-underline [&>svg]:text-[var(--salon-gold)]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="bg-white px-5 py-4 text-sm leading-loose text-stone-600">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 border border-[var(--salon-border)] bg-white p-6">
          <p className="text-sm">ここにないご質問は、公式LINEからお気軽にどうぞ。</p>
          <LineButton className="mt-4 sm:inline-flex" label="LINEで質問する" />
        </div>
      </div>

      <DiagnosisCta />
    </main>
  )
}
