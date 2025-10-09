"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTAButton } from "@/components/cta-button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Los Beneficios de los Superalimentos en tu Dieta Diaria",
    excerpt:
      "Descubre cómo incorporar superalimentos como la quinoa, chía y açaí puede transformar tu salud y bienestar.",
    category: "Cocina Funcional",
    date: "15 de Marzo, 2024",
    readTime: "5 min",
    image: "/colorful-healthy-superfood-bowl-with-quinoa-chia-s.jpg",
    slug: "beneficios-superalimentos",
  },
  {
    id: 2,
    title: "Caso de Éxito: Matrimonio Sustentable en Viña del Mar",
    excerpt:
      "Cómo creamos un banquete de 150 personas con ingredientes locales y cero desperdicio para una pareja eco-consciente.",
    category: "Casos de Éxito",
    date: "10 de Marzo, 2024",
    readTime: "8 min",
    image: "/images/elegant-wedding-sustainable.jpg",
    slug: "matrimonio-sustentable-vina",
  },
  {
    id: 3,
    title: "5 Tips para Mantener una Alimentación Saludable en la Oficina",
    excerpt: "Consejos prácticos para comer bien durante tu jornada laboral sin sacrificar sabor ni tiempo.",
    category: "Bienestar",
    date: "5 de Marzo, 2024",
    readTime: "4 min",
    image: "/healthy-office-lunch-meal-prep-containers-with-fre.jpg",
    slug: "alimentacion-saludable-oficina",
  },
  {
    id: 4,
    title: "El Poder Antiinflamatorio de las Especias",
    excerpt: "Conoce las especias que pueden ayudarte a reducir la inflamación y mejorar tu salud intestinal.",
    category: "Cocina Funcional",
    date: "1 de Marzo, 2024",
    readTime: "6 min",
    image: "/colorful-spices-turmeric-ginger-cinnamon-in-wooden.jpg",
    slug: "especias-antiinflamatorias",
  },
  {
    id: 5,
    title: "Evento Corporativo: Lanzamiento de Producto Tech Startup",
    excerpt:
      "Diseñamos una experiencia gastronómica innovadora para el lanzamiento de una startup tecnológica con 200 invitados.",
    category: "Casos de Éxito",
    date: "25 de Febrero, 2024",
    readTime: "7 min",
    image: "/images/modern-corporate-event-catering.jpg",
    slug: "evento-corporativo-tech-startup",
  },
  {
    id: 6,
    title: "Batidos Verdes: Recetas y Beneficios",
    excerpt:
      "Las mejores combinaciones de vegetales y frutas para batidos nutritivos que te darán energía todo el día.",
    category: "Bienestar",
    date: "20 de Febrero, 2024",
    readTime: "5 min",
    image: "/vibrant-green-smoothie-in-glass-with-spinach-kale-.jpg",
    slug: "batidos-verdes-recetas",
  },
]

const categories = ["Todos", "Cocina Funcional", "Casos de Éxito", "Bienestar"]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredPosts =
    activeCategory === "Todos" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <>
      <Header />
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary text-balance">Blog Lola</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Artículos sobre cocina funcional, casos de éxito de nuestros eventos, y tips de bienestar para una vida más
            saludable.
          </p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge>
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CTAButton
                    href={`/blog/${post.slug}`}
                    variant="ghost"
                    className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </CTAButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">¿Quieres estar al día?</h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 text-pretty">
            Síguenos en redes sociales para más contenido sobre cocina funcional, eventos y bienestar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\+/g, "") || "56900000000"}`}
              className="bg-secondary text-primary hover:bg-secondary/90 border-2 border-secondary"
              size="lg"
            >
              Contáctanos por WhatsApp
            </CTAButton>
            <CTAButton
              href="/contacto"
              className="bg-accent/10 border-2 border-accent text-primary-foreground hover:bg-accent/20"
              size="lg"
            >
              Suscríbete al Newsletter
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  )
}
