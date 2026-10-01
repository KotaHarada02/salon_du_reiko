"use client"

import { motion, type Variants } from "framer-motion"
import type { CSSProperties, ReactNode } from "react"

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

const groupVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

/** スクロールで一度だけフェード＋スライドインする単一要素 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** 子要素を順番にスタガー表示させるコンテナ。子は <RevealItem> を使う */
export function RevealGroup({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div
      style={style}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={revealVariants} className={className}>
      {children}
    </motion.div>
  )
}
