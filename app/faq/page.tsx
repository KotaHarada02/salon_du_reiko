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
      <PageHeader
        subtitle="よくあるご質問"
        description="施術の痛みや勧誘の有無、お支払い方法など、よくいただくご質問をまとめました。"
      />

      <div className="container max-w-3xl pt-12 md:pt-16">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6"
            >
              <AccordionTrigger className="py-5 text-left text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:no-underline">
                <span>Q. {item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                <span className="mr-2 font-medium text-[var(--color-accent)]">A.</span>
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 md:p-9">
          <h2 className="font-serif text-lg font-medium text-[var(--color-ink)]">
            そのほか、気になることがあれば
          </h2>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
            お肌の状態やメニューについてなど、公式LINEからいつでもお気軽にご相談ください。
          </p>
          <LineButton className="mt-5" label="公式LINEで相談する" />
        </div>
      </div>

      <DiagnosisCta />
    </main>
  )
}
