import { Zen_Kaku_Gothic_New, Shippori_Mincho } from "next/font/google"

export const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-zen-kaku",
})

export const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-shippori-mincho",
})
