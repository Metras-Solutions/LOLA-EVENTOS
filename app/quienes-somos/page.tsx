import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { Heart, Users, Lightbulb, Sparkles, Target, Award } from "lucide-react"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Quiénes Somos - Lola",
  description:
    "Somos dos chefs y comunicadoras digitales con más de 20 años de experiencia en gastronomía, eventos y marketing digital.",
}

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <div className="relative h-[400px] bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('/hero/food-flatlay.png')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal uppercase text-white drop-shadow-lg text-balance">
              Quiénes Somos
            </h1>
            <p className="text-xl md:text-2xl text-secondary drop-shadow-md leading-relaxed text-pretty">
              Chefs y comunicadoras digitales con más de 20 años de experiencia
            </p>
          </div>
        </div>
      </div>

      <Section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                <Heart className="w-4 h-4" />
                Nuestra Historia
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-normal uppercase text-primary">
                Pasión por la gastronomía y la comunicación
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Somos dos chefs y comunicadoras digitales con más de 20 años de experiencia en gastronomía, eventos y
                  marketing digital. Nos conocimos trabajando en el mundo de la comunicación y descubrimos que
                  compartíamos una pasión: crear experiencias que conectan a las personas a través de la comida.
                </p>
                <p>
                  Lola nació de la idea de fusionar nuestras dos vocaciones: la cocina y la comunicación. Queríamos
                  ofrecer algo más que un servicio de catering tradicional; queríamos diseñar experiencias gastronómicas
                  memorables, con propósito y con una mirada estratégica.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pasi%C3%B3n%20por%20la%20gastronom%C3%ADa%20y%20la%20comunicaci%C3%B3n-hrtf8mVYZQj35bMPiAqPTUQwS5Gnih.png"
                alt="Equipo Studio Lola"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-normal uppercase text-primary">Pasión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Por la gastronomía y el arte de crear experiencias que conectan
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-normal uppercase text-primary">Conexión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creamos vínculos auténticos a través del sabor y la experiencia
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-normal uppercase text-primary">Innovación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fusionamos tradición con tendencias actuales y tecnología
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <Image
                src="/hero/lola-kitchen-products.png"
                alt="Productos Studio Lola"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-medium">
                <Sparkles className="w-4 h-4" />
                Nuestra Filosofía
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-normal uppercase text-primary">
                La buena comida hace la diferencia
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  En Lola creemos que la buena comida hace la diferencia. Trabajamos con ingredientes de primera
                  calidad, cuidando cada sabor, textura y presentación, porque cada detalle importa.
                </p>
                <p>
                  Pero nuestro trabajo no se detiene en la cocina. Nos dedicamos a crear experiencias completas, donde
                  cada evento fluye sin preocupaciones, cada plato se disfruta al máximo y cada momento queda en la
                  memoria de quienes lo viven.
                </p>
                <p>
                  Nuestra misión es simple: entregar comida que celebra, conecta y soluciona, haciendo la vida de
                  nuestros clientes más fácil y sus eventos más exitosos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-primary/10">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                  <Target className="w-4 h-4" />
                  Nuestro Enfoque Digital
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-normal uppercase text-primary">
                  Marketing gastronómico con propósito
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Como comunicadoras digitales, entendemos el poder de las redes, el contenido y la narrativa visual.
                  Por eso, además de cocinar, creamos contenido gastronómico estratégico para marcas: desde campañas de
                  lanzamiento hasta activaciones experienciales que generan conversación.
                </p>
                <p>
                  En Studio Lola, ayudamos a empresas y emprendimientos a contar su historia a través de la comida,
                  diseñando experiencias comestibles que conectan emocionalmente con su audiencia.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 uppercase">20+ años de experiencia</h4>
                    <p className="text-sm text-muted-foreground">En gastronomía y comunicación digital</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 uppercase">Experiencias memorables</h4>
                    <p className="text-sm text-muted-foreground">Que conectan y dejan huella</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
