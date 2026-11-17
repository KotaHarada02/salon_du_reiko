import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCta } from "@/components/mobile-cta"
import { geistSans, geistMono } from "@/app/font"

export const metadata: Metadata = {
  title: "Salon du Reiko | 甲賀市のヒト幹細胞エステサロン",
  description:
    "滋賀県甲賀市水口町、ログハウスの完全予約制ヒト幹細胞エステサロン。4つの質問でメニューがわかる30秒診断。ヒト幹細胞フェイシャル（90分）初回¥9,900。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;600&family=Pinyon+Script&display=swap"
        />
      </head>
      <body className="antialiased">
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <MobileCta />
        <Analytics />
      </body>
    </html>
  )
}
