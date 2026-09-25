import React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle: string
  image?: string
  className?: string
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-1 gap-6 overflow-hidden bg-[var(--salon-bg)] pb-16 pt-36 md:grid-cols-[2fr_1fr] md:pb-20 md:pt-44",
        className,
      )}
    >
      <div className="container col-span-full grid grid-cols-1 items-end gap-6 md:grid-cols-[2fr_1fr]">
        <div className="animate-fade-in-up">
          <span className="mb-4 block h-px w-16 bg-[var(--salon-gold)]" />
          <h1 className="font-script text-5xl leading-none text-[var(--salon-gold)] md:text-7xl">
            {title}
          </h1>
        </div>
        <p
          className="animate-fade-in-up text-left text-sm tracking-[0.25em] text-gray-500 md:text-right md:text-base"
          style={{ animationDelay: "0.05s", animationFillMode: "backwards" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}
