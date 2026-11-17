import type React from "react"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCta } from "@/components/mobile-cta"
import { SALON } from "@/lib/salon"

export const metadata: Metadata = {
  title: "Salon du Reiko | 滋賀県甲賀市の完全予約制ヒト幹細胞エステサロン",
  description:
    "滋賀県甲賀市水口町、岩谷医院敷地内のログハウスで看護師オーナーが営む完全予約制エステサロン。4つの質問で合うケアがわかる30秒診断。ヒト幹細胞フェイシャル初回¥9,900。",
  openGraph: {
    title: "Salon du Reiko | 甲賀市のヒト幹細胞エステサロン",
    description:
      "木立に囲まれたログハウスの貸切空間で、お肌も心も元気に。4つの質問であなたに合うメニューがわかります。",
    type: "website",
    locale: "ja_JP",
    siteName: SALON.name,
  },
}

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SALON.name,
  description: metadata.description,
  address: {
    "@type": "PostalAddress",
    postalCode: "528-0024",
    addressRegion: "滋賀県",
    addressLocality: "甲賀市",
    streetAddress: "水口町中邸2-10 岩谷医院敷地内ログハウス",
    addressCountry: "JP",
  },
  openingHours: "Tu,We,Fr,Su 10:00-18:00",
  paymentAccepted: SALON.payment,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] antialiased selection:bg-[var(--color-accent)] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-accent)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          本文へ移動
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <div id="main-content" tabIndex={-1} className="outline-none">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Footer />
        <MobileCta />
      </body>
    </html>
  )
}
