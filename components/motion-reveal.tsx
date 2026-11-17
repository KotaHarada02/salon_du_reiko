"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { CSSProperties, ReactNode } from "react"

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const groupVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  if (reduced) {
    return <div className={className}>{children}</div>
  }
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

export function RevealGroup({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const reduced = useReducedMotion()
  if (reduced) {
    return (
      <div style={style} className={className}>
        {children}
      </div>
    )
  }
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
  const reduced = useReducedMotion()
  if (reduced) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div variants={revealVariants} className={className}>
      {children}
    </motion.div>
  )
}
