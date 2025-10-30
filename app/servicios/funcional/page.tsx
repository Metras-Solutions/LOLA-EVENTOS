import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf } from "lucide-react"
import Image from "next/image"
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
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/lola-funcional-hero.png"
            alt="Lola Funcional - Healthy food options"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Lola Funcional</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-primary text-balance">
                GASTRONOMÍA CON PROPÓSITO
              </h1>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Propuestas diseñadas para nutrir y aportar bienestar.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Coffee breaks, brunchs y cócteles elaborados con ingredientes de calidad, que combinan salud y
                  disfrute en experiencias únicas para personas y empresas.
                </p>
              </div>
              <Badge className="mx-auto bg-accent text-primary-foreground text-base px-6 py-2 flex items-center gap-2 w-fit">
                <Leaf className="w-4 h-4" />
                Bienestar y Sabor
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-gradient-to-br from-pink-50 to-purple-50">
        <Card className="max-w-4xl mx-auto rounded-2xl border-2 border-pink-300">
          <CardHeader>
            <CardTitle className="font-serif text-3xl text-center text-pink-900 uppercase font-normal">
              FEMME SE FATAL
            </CardTitle>
            <p className="text-center text-pink-700 font-medium">Eventos corporativos diseñados para mujeres</p>
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

      <Section title={<span className="text-primary">NUESTRAS PROPUESTAS FUNCIONALES</span>}>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          <Card className="rounded-2xl border-emerald-200">
            <CardHeader>
              <CardTitle className="font-serif text-2xl uppercase font-normal">CÓCTEL FUNCIONAL</CardTitle>
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
              <CardTitle className="font-serif text-2xl uppercase font-normal">EL BUEN DESORDEN</CardTitle>
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
              <CardTitle className="font-serif text-2xl uppercase font-normal">EXPERIENCIAS INTELIGENTES</CardTitle>
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
              <CardTitle className="font-serif text-2xl uppercase font-normal">COFFEE BREAKS SALUDABLES</CardTitle>
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

      <Section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-normal uppercase text-balance">
            BIENESTAR SIN RENUNCIAR AL SABOR
          </h2>
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
