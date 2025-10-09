"use client"

import { useState } from "react"
import { TestimonialCard } from "./testimonial-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const next = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage))
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerPage) : Math.max(0, prev - itemsPerPage),
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          disabled={currentIndex === 0}
          className="rounded-full bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          disabled={currentIndex + itemsPerPage >= testimonials.length}
          className="rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>
    </div>
  )
}
