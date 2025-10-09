import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export function CTAButton({ href, children, variant = "primary", className }: CTAButtonProps) {
  const isPrimary = variant === "primary"

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "rounded-xl text-base px-8 py-6 h-auto",
        isPrimary
          ? "bg-brand-600 hover:bg-brand-700 text-white"
          : "bg-white hover:bg-gray-50 text-brand-700 border-2 border-brand-600",
        className,
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
