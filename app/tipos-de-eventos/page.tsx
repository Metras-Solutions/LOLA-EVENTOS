import { Section } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { eventTypes } from "@/lib/data/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tipos de Eventos - Lola",
  description: "Eventos privados, corporativos, sensoriales y funcionales. Cada celebración diseñada a la medida.",
}

const categoryColors = {
  privado: "bg-pink-100 text-pink-800 border-pink-300",
  corporativo: "bg-blue-100 text-blue-800 border-blue-300",
  sensorial: "bg-purple-100 text-purple-800 border-purple-300",
  funcional: "bg-green-100 text-green-800 border-green-300",
  fiesta: "bg-orange-100 text-orange-800 border-orange-300",
}

const categoryLabels = {
  privado: "Privado",
  corporativo: "Corporativo",
  sensorial: "Sensorial",
  funcional: "Funcional",
  fiesta: "Fiesta",
}

export default function TiposEventosPage() {
  return (
    <Section
      eyebrow="Tipos de Eventos"
      title="Cada celebración es única"
      description="Desde matrimonios íntimos hasta grandes eventos corporativos, diseñamos experiencias gastronómicas memorables para cada ocasión."
      centered
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventTypes.map((event) => (
          <Card key={event.id} className="rounded-2xl border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className={`w-fit mb-2 ${categoryColors[event.category]}`}>{categoryLabels[event.category]}</Badge>
              <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          ¿No encuentras el tipo de evento que buscas? Cada celebración es única y nos adaptamos a tus necesidades.
          Conversemos sobre tu idea.
        </p>
      </div>
    </Section>
  )
}
