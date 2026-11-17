import React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title?: string
  subtitle: string
  description?: string
  className?: string
}

export function PageHeader({ subtitle, description, className }: PageHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-[var(--color-border)] bg-[var(--color-surface-muted)]/55 pb-10 pt-22 md:pb-16 md:pt-36",
        className,
      )}
    >
      <div className="container">
        <h1 className="font-serif text-3xl font-medium text-[var(--color-ink)] md:text-5xl">
          {subtitle}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
            {description}
          </p>
        )}
      </div>
    </header>
  )
}
