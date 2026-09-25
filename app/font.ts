import { Pinyon_Script, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

// ロゴ用のPinyon Scriptフォント
export const pinyon_script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400", // このフォントは太さ400のみ利用可能です
  display: "swap",
  variable: "--font-pinyon-script",
})

// 本文・UI用の日本語フォント
export const notojp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-jp",
})

// 見出し用の明朝体
export const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-noto-serif",
})

// 英数字・UIラベル用のGeist
export const geistSans = GeistSans
export const geistMono = GeistMono
