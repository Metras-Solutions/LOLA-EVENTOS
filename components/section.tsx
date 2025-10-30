import type React from "react"
import { cn } from "@/lib/utils"
import { design } from "@/lib/design"

interface SectionProps {
  children: React.ReactNode
  className?: string
  eyebrow?: string
  title?: string | React.ReactNode
  description?: string
  centered?: boolean
}

export function Section({ children, className, eyebrow, title, description, centered = false }: SectionProps) {
  return (
    <section className={cn(design.spacing.section, className)}>
      <div className={design.spacing.container}>
        {(eyebrow || title || description) && (
          <div className={cn("mb-12", centered && "text-center max-w-3xl mx-auto")}>
            {eyebrow && <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-2">{eyebrow}</p>}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal uppercase text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {description && <p className="text-lg text-gray-600 leading-relaxed">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
