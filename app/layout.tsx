import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCta } from "@/components/mobile-cta"
import { pinyon_script, notojp, notoSerifJp, geistSans, geistMono } from "@/app/font"

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
      className={`${notojp.variable} ${pinyon_script.variable} ${notoSerifJp.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
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
