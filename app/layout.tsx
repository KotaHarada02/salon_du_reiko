import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pinyon_script, notojp } from '@/app/font'; // 先ほど作成したfonts.tsからインポート
import './globals.css';


const notoSerif = Noto_Serif_JP({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
})

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Salon de Reiko | 甲賀市の隠れ家エステサロン",
  description: "ヒト幹細胞フェイシャルと厳選オイルで、内側から輝くあなたへ。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html
        lang="ja"
        className={`${notojp.variable} ${pinyon_script.variable}`} // 2つのフォント変数を設定
      >
      <body className={`${notoSerif.variable} ${montserrat.variable} antialiased`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
