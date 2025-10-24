import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lola Eventos - Celebraciones Hechas a la Medida",
  description:
    "Desayunos, coffee breaks, almuerzos, cocteles y cenas para clientes particulares y empresas. Cocina cuidada, sabrosa y de alta calidad.",
}

export default function EventosPage() {
  const casos = [
    {
      title: "Matrimonio en Viña",
      description: "Cena de 120 personas con menú de 4 tiempos y barra de cócteles.",
      image: "/images/elegant-wedding-sustainable.jpg",
    },
    {
      title: "Aniversario Corporativo",
      description: "Cóctel ejecutivo para 80 invitados con estaciones temáticas.",
      image: "/images/corporate-anniversary-cocktail.jpg",
    },
    {
      title: "Cumpleaños Íntimo",
      description: "Cena privada para 20 personas con menú personalizado.",
      image: "/intimate-private-dinner-party-elegant-table-settin.jpg",
    },
  ]

  return (
    <>
      <Header />
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lola%20eventos-9zAt7urjPXLfR2sqMKh0fZk0FUh3Zx.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <Section
          className="pt-32 relative z-10"
          eyebrow="Lola Eventos"
          title="CELEBRACIONES HECHAS A LA MEDIDA"
          description="Desayunos, coffee breaks, almuerzos, cocteles y cenas para clientes particulares y empresas. Llevamos la excelencia de la buena mesa a cada detalle, con una cocina cuidada, sabrosa y de alta calidad, para que tu evento sea inolvidable."
          centered
        >
          <Badge className="mx-auto bg-primary text-primary-foreground text-base px-6 py-2 flex items-center gap-2 w-fit">
            <Sparkles className="w-4 h-4" />
            Eventos Memorables
          </Badge>
        </Section>
      </div>

      <Section className="bg-gray-50" title="NUESTROS SERVICIOS">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Matrimonios", desc: "Banquetes elegantes con menús personalizados" },
            { title: "Aniversarios", desc: "Celebraciones íntimas o grandes fiestas" },
            { title: "Cenas Corporativas", desc: "Eventos ejecutivos con servicio impecable" },
            { title: "Desayunos y Brunch", desc: "Opciones frescas y deliciosas para comenzar el día" },
            { title: "Coffee Breaks", desc: "Pausas energizantes para reuniones y conferencias" },
            { title: "Cócteles", desc: "Experiencias gastronómicas de pie con variedad de bocados" },
          ].map((item) => (
            <Card key={item.title} className="rounded-2xl border-brand-200">
              <CardHeader>
                <CardTitle className="text-xl font-normal">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="CASOS DE ÉXITO" centered className="relative overflow-hidden">
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {casos.map((caso) => (
            <Card key={caso.title} className="rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={caso.image || "/placeholder.svg"}
                  alt={caso.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-normal">{caso.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{caso.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-normal uppercase text-balance">¿Listo para tu evento?</h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 text-pretty">
            Conversemos sobre tu celebración y diseñemos juntos una experiencia inolvidable.
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
