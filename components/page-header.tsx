import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle: string
  image?: string
  className?: string
}

export function PageHeader({ title, subtitle, image, className }: PageHeaderProps) {
  return (
    <div className={cn("relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[var(--salon-bg)]", className)}>
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         {/* ここにパターンや画像を配置可能 */}
         <div className="w-full h-full bg-gradient-to-b from-white/0 to-[var(--salon-bg)]" />
      </div>

      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="font-script text-5xl md:text-7xl text-[var(--salon-gold)] mb-4">
          {title}
        </h1>
        <p className="font-serif text-sm md:text-base tracking-[0.2em] text-gray-600">
          {subtitle}
        </p>
        <div className="w-[1px] h-12 bg-[var(--salon-gold)] mx-auto mt-8 opacity-50"></div>
      </div>
    </div>
  )
}
