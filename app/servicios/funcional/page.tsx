import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lola Funcional - Gastronomía con Propósito",
  description:
    "Propuestas diseñadas para nutrir y aportar bienestar. Coffee breaks, brunchs y cócteles que combinan salud y disfrute.",
}

export default function FuncionalPage() {
  return (
    <>
      <Header />
      <Section
        className="pt-32"
        eyebrow="Lola Funcional"
        title="Gastronomía con propósito"
        description="Propuestas diseñadas para nutrir y aportar bienestar. Coffee breaks, brunchs y cócteles elaborados con ingredientes de calidad, que combinan salud y disfrute en experiencias únicas para personas y empresas."
        centered
      >
        <Badge className="mx-auto bg-accent text-primary-foreground text-base px-6 py-2 flex items-center gap-2 w-fit">
          <Leaf className="w-4 h-4" />
          Bienestar y Sabor
        </Badge>
      </Section>

      {/* Femme Se Fatal Highlight */}
      <Section className="bg-gradient-to-br from-pink-50 to-purple-50">
        <Card className="max-w-4xl mx-auto rounded-2xl border-2 border-pink-300">
          <CardHeader>
            <CardTitle className="font-serif text-3xl text-center text-pink-900">Femme Se Fatal</CardTitle>
            <p className="text-center text-pink-700 font-semibold">Eventos corporativos diseñados para mujeres</p>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Una propuesta especial para eventos corporativos de mujeres, lanzamientos femeninos y celebraciones que
              honran el empoderamiento y el bienestar.
            </p>
            <p>
              Brunchs saludables, cócteles funcionales y experiencias gastronómicas diseñadas con ingredientes que
              nutren el cuerpo y el espíritu.
            </p>
            <ul className="space-y-2 ml-4">
              <li>✨ Menús con superalimentos y ingredientes antiinflamatorios</li>
              <li>✨ Ambientación elegante y femenina</li>
              <li>✨ Experiencias que conectan y empoderan</li>
            </ul>
          </CardContent>
        </Card>
      </Section>

      <Section title="Nuestras Propuestas Funcionales">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-2xl border-emerald-200">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Cóctel Funcional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Experiencias de pie con bocados saludables, barras de superalimentos y bebidas naturales. Perfecto para
                lanzamientos, networking y eventos corporativos.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Bocados con ingredientes orgánicos</li>
                <li>• Barra de jugos y smoothies naturales</li>
                <li>• Opciones veganas y sin gluten</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-teal-200">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">El Buen Desorden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Brunchs y desayunos funcionales con una presentación creativa y relajada. Ideal para reuniones de
                equipo, workshops y celebraciones matutinas.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Bowls nutritivos y coloridos</li>
                <li>• Panadería saludable casera</li>
                <li>• Café de especialidad y tés funcionales</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-green-200">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Experiencias Conscientes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Menús personalizados diseñados con propósito: antiinflamatorios, energizantes, detox o equilibrantes.
                Cada plato es una herramienta de bienestar.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Consultoría nutricional incluida</li>
                <li>• Ingredientes con propiedades específicas</li>
                <li>• Adaptado a necesidades individuales</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-lime-200">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Coffee Breaks Saludables</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Pausas energizantes para reuniones y conferencias, con opciones que mantienen la concentración y el
                bienestar durante todo el día.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Snacks sin azúcar refinada</li>
                <li>• Frutos secos y semillas activadas</li>
                <li>• Infusiones y bebidas funcionales</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">Bienestar sin renunciar al sabor</h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 text-pretty">
            Diseñemos juntos una experiencia funcional que nutra y sorprenda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\+/g, "") || "56900000000"}`}
              className="bg-secondary text-primary hover:bg-secondary/90 border-2 border-secondary"
              size="lg"
            >
              Cotiza por WhatsApp
            </CTAButton>
            <CTAButton
              href="/contacto"
              className="bg-accent/10 border-2 border-accent text-primary-foreground hover:bg-accent/20"
              size="lg"
            >
              Formulario de contacto
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  )
}
