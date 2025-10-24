import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Megaphone, Camera, Sparkles } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Studio Lola - La Cocina al Servicio de las Marcas",
  description:
    "Experiencias comestibles estratégicas, eventos corporativos, campañas gastronómicas y storytelling de marca.",
}

export default function StudioPage() {
  return (
    <>
      <Header />
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studio%20lola-zbMgLg0sMdajesHxCT0wMwufzqcptO.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <Section
          className="pt-32 relative z-10"
          eyebrow="Studio Lola"
          title="LA COCINA AL SERVICIO DE LAS MARCAS"
          description="Creamos experiencias comestibles, campañas y activaciones donde el sabor se convierte en estrategia. Una fusión entre gastronomía, creatividad y comunicación que conecta con tu público."
          centered
        >
          <Badge className="mx-auto bg-primary text-primary-foreground text-base px-6 py-2 flex items-center gap-2 w-fit">
            <Lightbulb className="w-4 h-4" />
            Estrategia + Sabor
          </Badge>
        </Section>
      </div>

      <Section className="bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-normal uppercase text-teal-900">
            Tu marca necesita más que recetas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Necesita relato, estrategia y sabor propio. En Studio Lola, fusionamos cocina con branding, marketing
            digital y producción de contenidos gastronómicos para crear experiencias que marcan la diferencia.
          </p>
          <div className="grid md:grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-700">20+</div>
              <div className="text-sm text-gray-600">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-700">100+</div>
              <div className="text-sm text-gray-600">Campañas creadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-700">50+</div>
              <div className="text-sm text-gray-600">Marcas atendidas</div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="SERVICIOS PARA MARCAS">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-2xl border-teal-200">
            <CardHeader>
              <Sparkles className="w-10 h-10 text-teal-600 mb-2" />
              <CardTitle className="font-serif text-2xl uppercase font-normal">
                Experiencias Comestibles Estratégicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Diseñamos activaciones y eventos donde la comida es el vehículo para transmitir los valores de tu marca.
                Cada bocado cuenta una historia.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Lanzamientos de producto con menús temáticos</li>
                <li>• Activaciones experienciales en puntos de venta</li>
                <li>• Eventos corporativos con identidad de marca</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-cyan-200">
            <CardHeader>
              <Megaphone className="w-10 h-10 text-cyan-600 mb-2" />
              <CardTitle className="font-serif text-2xl uppercase font-normal">Campañas Gastronómicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Creamos campañas integrales que combinan gastronomía, contenido digital y estrategia de comunicación
                para generar conversación y engagement.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Estrategia de contenido gastronómico</li>
                <li>• Colaboraciones con influencers culinarios</li>
                <li>• PR culinario y relaciones con medios</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-teal-200">
            <CardHeader>
              <Camera className="w-10 h-10 text-teal-600 mb-2" />
              <CardTitle className="font-serif text-2xl uppercase font-normal">Producción de Contenido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Creamos contenido gastronómico de alta calidad para redes sociales, sitios web y campañas publicitarias.
                Food styling, fotografía y video.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Sesiones de food styling y fotografía</li>
                <li>• Videos de recetas y tutoriales</li>
                <li>• Contenido para redes sociales</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-cyan-200">
            <CardHeader>
              <Lightbulb className="w-10 h-10 text-cyan-600 mb-2" />
              <CardTitle className="font-serif text-2xl uppercase font-normal">Storytelling de Marca</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Ayudamos a marcas gastronómicas y emprendimientos a construir su narrativa, definir su identidad y
                comunicar su propuesta de valor.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Consultoría de branding gastronómico</li>
                <li>• Desarrollo de identidad culinaria</li>
                <li>• Estrategia de comunicación digital</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-normal uppercase text-balance">
            ¿Lista tu marca para destacar?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 text-pretty">
            Conversemos sobre cómo la gastronomía puede potenciar tu estrategia de marca.
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
              Agendar Consultoría
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  )
}
