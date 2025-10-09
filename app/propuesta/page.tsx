import { Section } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Leaf, Sparkles, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Propuesta Gastronómica - Lola",
  description:
    "Ingredientes naturales, servicio personalizado y la fusión perfecta entre gastronomía, creatividad y estrategia.",
}

export default function PropuestaPage() {
  return (
    <>
      <Section
        eyebrow="Nuestra Propuesta"
        title="Gastronomía con Propósito"
        description="Cada experiencia que creamos está diseñada con atención al detalle, ingredientes de calidad y un enfoque personalizado."
        centered
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-2xl border-brand-200">
            <CardHeader>
              <Sparkles className="w-10 h-10 text-brand-600 mb-2" />
              <CardTitle className="font-serif text-2xl">Ingredientes Naturales y Frescos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <p>Seleccionamos productos de temporada y proveedores locales</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <p>Priorizamos ingredientes orgánicos y de origen sustentable</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <p>Preparaciones desde cero, sin aditivos ni conservantes</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-emerald-200">
            <CardHeader>
              <Target className="w-10 h-10 text-emerald-600 mb-2" />
              <CardTitle className="font-serif text-2xl">Servicio Personalizado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>Menús diseñados a la medida de cada cliente y ocasión</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>Atención impecable en cada detalle del evento</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>Flexibilidad para adaptarnos a restricciones alimentarias</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Functional vs Traditional */}
      <Section className="bg-gray-50" title="Cocina Funcional vs Tradicional" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-2xl border-teal-200 bg-teal-50/50">
            <CardHeader>
              <Leaf className="w-10 h-10 text-teal-600 mb-2" />
              <CardTitle className="font-serif text-2xl text-teal-900">Cocina Funcional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Nuestra propuesta funcional va más allá de lo saludable: es una experiencia que nutre el cuerpo y el
                alma. Utilizamos superalimentos, ingredientes antiinflamatorios y técnicas que preservan los nutrientes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Enfoque en bienestar y equilibrio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Ingredientes con propiedades nutricionales específicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Sabor y placer sin culpa</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-brand-200">
            <CardHeader>
              <Sparkles className="w-10 h-10 text-brand-600 mb-2" />
              <CardTitle className="font-serif text-2xl text-brand-900">Cocina Tradicional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Nuestra cocina tradicional celebra los sabores clásicos con una presentación moderna. Platos que evocan
                recuerdos, que reconfortan y que sorprenden por su calidad y ejecución.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Técnicas culinarias refinadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Presentación elegante y sofisticada</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Experiencia gastronómica memorable</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Integration with Strategy */}
      <Section>
        <Card className="max-w-4xl mx-auto rounded-2xl border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="font-serif text-3xl text-center text-teal-900">
              Gastronomía + Creatividad + Estrategia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Lo que nos diferencia es nuestra capacidad de integrar la gastronomía con el branding y la comunicación
              estratégica. No solo cocinamos: creamos narrativas, diseñamos experiencias y construimos identidad de
              marca a través del sabor.
            </p>
            <p>
              En <strong>Studio Lola</strong>, trabajamos con empresas y emprendimientos para desarrollar:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Experiencias comestibles estratégicas para lanzamientos y activaciones</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Campañas gastronómicas que generan conversación</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Producción de contenido culinario para redes sociales</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Storytelling de marca a través de la comida</span>
              </li>
            </ul>
            <p className="font-semibold text-teal-900 pt-4">
              Porque tu marca necesita más que recetas. Necesita relato, estrategia y sabor propio.
            </p>
          </CardContent>
        </Card>
      </Section>
    </>
  )
}
