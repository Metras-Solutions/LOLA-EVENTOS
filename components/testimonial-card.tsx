import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { design } from "@/lib/design"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <Card className={cn(design.radius.card, "border-brand-100 bg-brand-50/30")}>
      <CardContent className="pt-6">
        <Quote className="w-8 h-8 text-brand-400 mb-4" />
        <p className="text-gray-700 leading-relaxed mb-6 italic">"{content}"</p>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
