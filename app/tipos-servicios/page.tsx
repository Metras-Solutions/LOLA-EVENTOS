import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Heart, GraduationCap, Home, PartyPopper, Building2, Coffee, UtensilsCrossed } from "lucide-react"

const serviceTypes = [
  {
    icon: Briefcase,
    title: "Eventos Corporativos",
    description:
      "Desayunos ejecutivos, almuerzos de trabajo, cócteles empresariales y celebraciones corporativas con menús personalizados.",
    features: ["Coffee breaks", "Almuerzos ejecutivos", "Cócteles empresariales", "Eventos de fin de año"],
  },
  {
    icon: Heart,
    title: "Matrimonios",
    description:
      "Creamos experiencias gastronómicas únicas para el día más especial. Desde la degustación hasta el banquete final.",
    features: ["Menús personalizados", "Degustaciones previas", "Servicio completo", "Decoración de mesas"],
  },
  {
    icon: PartyPopper,
    title: "Celebraciones Privadas",
    description: "Cumpleaños, aniversarios, baby showers y cualquier celebración que quieras hacer memorable.",
    features: ["Menús temáticos", "Servicio a domicilio", "Montaje completo", "Atención personalizada"],
  },
  {
    icon: Building2,
    title: "Eventos Institucionales",
    description: "Seminarios, conferencias, lanzamientos de productos y eventos institucionales de gran escala.",
    features: ["Servicio para grupos grandes", "Logística completa", "Menús variados", "Coordinación profesional"],
  },
  {
    icon: GraduationCap,
    title: "Eventos Académicos",
    description: "Graduaciones, ceremonias académicas y eventos universitarios con servicio de catering profesional.",
    features: ["Menús para estudiantes", "Servicio buffet", "Opciones vegetarianas", "Precios especiales"],
  },
  {
    icon: Coffee,
    title: "Coffee Breaks & Snacks",
    description: "Pausas de café, snacks saludables y refrigerios para reuniones y eventos de medio día.",
    features: ["Opciones dulces y saladas", "Bebidas calientes y frías", "Snacks saludables", "Presentación elegante"],
  },
  {
    icon: Home,
    title: "Servicio a Domicilio",
    description: "Llevamos la experiencia Lola a tu hogar con servicio completo de catering y montaje.",
    features: ["Entrega puntual", "Montaje incluido", "Vajilla y mantelería", "Servicio de meseros"],
  },
  {
    icon: UtensilsCrossed,
    title: "Repostería y Pastelería",
    description: "Postres finos y dulces artesanales para cualquier ocasión.",
    features: ["Postres individuales", "Mesa dulce completa", "Opciones sin gluten"],
  },
  {
    icon: UtensilsCrossed,
    title: "El Mesón de Lola",
    description: "Una opción práctica, estética y deliciosa para tus celebraciones.",
    features: [
      "Mesa con mantelería y presentación cuidada",
      "Alimentos fríos listos para disfrutar",
      "Bocados calientes preparados para servir",
      "Opción de contratar personal de servicio",
      "Retiro al día siguiente sin necesidad de lavado",
      "Cuatro variedades de cóctel disponibles",
    ],
    fullDescription: [
      "Instalamos una mesa con mantelería, presentación cuidada y toda la propuesta de alimentos fríos lista para disfrutar. Los bocados calientes quedan preparados para que los anfitriones los sirvan en el momento que deseen.",
      "También ofrecemos la opción de contratar personal de servicio, si prefieres una atención más completa.",
      "Los utensilios y elementos se retiran al día siguiente, sin necesidad de lavado, dejando una garantía previa. Una alternativa conveniente, funcional y elegante, ideal para celebraciones tipo cóctel.",
      "Contamos con cuatro variedades de cóctel, adaptadas a diferentes estilos y necesidades.",
    ],
  },
]

export default function TiposServiciosPage() {
  return (
    <>
      <Header />
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary text-balance">
            Tipos de Servicios
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Ofrecemos una amplia variedad de servicios gastronómicos adaptados a cada tipo de evento y celebración.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon
              const isMesonLola = service.title === "El Mesón de Lola"

              return (
                <Card
                  key={index}
                  className={`border-2 transition-all duration-300 hover:shadow-xl group ${
                    isMesonLola ? "bg-white border-primary/30 hover:border-primary" : "hover:border-primary/50"
                  }`}
                >
                  <CardHeader className="space-y-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                        isMesonLola
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : "bg-primary/10 group-hover:bg-primary/20"
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${isMesonLola ? "text-primary" : "text-primary"}`} />
                    </div>
                    <CardTitle className={`font-serif text-2xl ${isMesonLola ? "text-primary" : "text-primary"}`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className={`text-base leading-relaxed ${isMesonLola ? "text-primary/80" : ""}`}>
                      {service.description}
                    </CardDescription>
                    {isMesonLola && "fullDescription" in service && (
                      <div className="space-y-3 pt-2">
                        {service.fullDescription.map((paragraph, idx) => (
                          <p key={idx} className="text-sm text-primary/80 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 text-sm ${
                            isMesonLola ? "text-primary/80" : "text-muted-foreground"
                          }`}
                        >
                          <span className={isMesonLola ? "text-primary mt-1" : "text-primary mt-1"}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">¿Listo para planificar tu evento?</h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 text-pretty">
            Contáctanos y conversemos sobre cómo podemos hacer de tu evento una experiencia gastronómica inolvidable.
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
