import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AmbassadorCardProps {
  name: string
  role: string
  image: string
  description: string
}

export function AmbassadorCard({ name, role, image, description }: AmbassadorCardProps) {
  return (
    <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6 space-y-2">
        <h3 className="font-serif text-2xl font-bold text-primary">{name}</h3>
        <p className="text-sm font-medium text-accent uppercase tracking-wide">{role}</p>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
