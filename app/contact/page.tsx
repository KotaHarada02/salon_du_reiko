import { Suspense } from "react"
import { ContactContent } from "@/components/contact-content"

export const metadata = {
  title: "ご予約・お問い合わせ | Salon du Reiko",
  description: "ご予約・ご相談は公式LINEから。Instagram・ホットペッパービューティー・Web予約からも承っています。",
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  )
}
