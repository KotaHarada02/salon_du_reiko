"use client"

import { motion } from "framer-motion"
import { RecommendWizard } from "@/components/recommend-wizard"
import { SALON } from "@/lib/salon"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--salon-bg)] pt-20 md:pt-0">
      <div className="grid md:min-h-[100dvh] md:grid-cols-[1fr_0.9fr]">
        {/* 写真（モバイルは上、PCは右） */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[34vh] max-h-[320px] md:order-2 md:h-auto md:max-h-none"
        >
          <div
            className="absolute inset-0 bg-cover bg-[center_40%]"
            style={{ backgroundImage: "url('/img/treatment.jpg')" }}
            role="img"
            aria-label="ログハウスのサロンでフェイシャルを受けるお客様"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--salon-bg)] to-transparent md:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[var(--salon-bg)] to-transparent md:block" />
          <p className="absolute bottom-6 right-6 hidden bg-white/85 px-3 py-1.5 text-[11px] tracking-wider text-[var(--salon-text)] backdrop-blur md:block">
            {SALON.area}・{SALON.building}
          </p>
        </motion.div>

        {/* コピー＋診断 */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-16 md:order-1 md:px-12 md:pb-12 md:pt-28 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs tracking-[0.25em] text-[var(--salon-gold)]">甲賀市の{SALON.tagline}・完全予約制</p>
            <h1 className="text-[26px] leading-[1.55] !tracking-[0.08em] text-[var(--salon-text)] md:text-[34px] lg:text-[40px]">
              今のわたしに合うケアを、
              <br />
              4つの質問で。
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              30秒で、あなたに合うメニューと料金がわかります。
              <br className="hidden sm:block" />
              予約するかどうかは、結果を見てから決めてください。
            </p>
          </motion.div>

          {/* 主要導線なのでアニメーションで隠さず即表示する */}
          <div id="diagnosis" className="mt-8 max-w-xl scroll-mt-24">
            <RecommendWizard tone="card" />
          </div>
        </div>
      </div>
    </section>
  )
}
