import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { design } from "@/lib/design"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  link: string
  color: string
  badge?: string
}

export function ServiceCard({ title, description, link, color, badge }: ServiceCardProps) {
  return (
    <Link href={link} className="block group">
      <Card
        className={cn(design.radius.card, design.shadows.card, "h-full border-2 hover:border-brand-400 transition-all")}
      >
        <CardHeader>
          {badge && (
            <Badge className="w-fit mb-2" style={{ backgroundColor: color }}>
              {badge}
            </Badge>
          )}
          <CardTitle className="font-serif text-2xl font-normal uppercase group-hover:text-brand-700 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed mb-4">{description}</CardDescription>
          <div className="flex items-center text-brand-600 font-semibold group-hover:gap-2 transition-all">
            <span>Ver más</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
