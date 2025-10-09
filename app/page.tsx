import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { HeroCarousel } from "@/components/hero-carousel"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Leaf, Sparkles, Heart, Users, Lightbulb } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <Section className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-balance">
            ¿Qué es Lola Eventos?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Somos un equipo de <span className="text-primary font-semibold">chefs profesionales</span> y{" "}
            <span className="text-primary font-semibold">comunicadoras digitales</span> que fusionamos la gastronomía
            con la creatividad, el branding y la estrategia digital.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Creamos <span className="text-accent font-semibold">experiencias gastronómicas memorables</span> que
            conectan con las personas a través del sabor, la estética y la emoción. Cada proyecto es una oportunidad
            para contar historias únicas que dejan huella.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Pasión</h3>
              <p className="text-muted-foreground">Por la gastronomía y el arte de crear experiencias</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Conexión</h3>
              <p className="text-muted-foreground">Creamos vínculos auténticos a través del sabor</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Innovación</h3>
              <p className="text-muted-foreground">Fusionamos tradición con tendencias actuales</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
              Tres propuestas, una misma esencia
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Cada línea de negocio está diseñada para complementarse y crear un ecosistema completo de experiencias
              gastronómicas que van desde la cocina hasta la comunicación digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Lola Eventos */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group flex flex-col">
              <CardHeader className="space-y-4 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary">Lola Eventos</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Catering y organización de eventos corporativos, matrimonios y celebraciones. Creamos experiencias
                  gastronómicas que van más allá de lo tradicional.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <CTAButton
                  href="/servicios/eventos"
                  variant="outline"
                  className="w-full border-2 border-primary/30 bg-secondary/50 hover:bg-secondary hover:border-primary"
                >
                  Conocer más
                </CTAButton>
              </CardContent>
            </Card>

            {/* Lola Funcional */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group flex flex-col">
              <CardHeader className="space-y-4 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary">Lola Funcional</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Alimentación saludable y bienestar. Nutrición funcional y consciente que no sacrifica el sabor ni la
                  experiencia gastronómica.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <CTAButton
                  href="/servicios/funcional"
                  variant="outline"
                  className="w-full border-2 border-primary/30 bg-secondary/50 hover:bg-secondary hover:border-primary"
                >
                  Conocer más
                </CTAButton>
              </CardContent>
            </Card>

            {/* Studio Lola */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl group bg-primary/5 flex flex-col">
              <CardHeader className="space-y-4 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary">Studio Lola</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Marketing gastronómico digital. Branding culinario, fotografía de alimentos, contenido para redes
                  sociales y estrategia digital.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <CTAButton
                  href="/servicios/studio"
                  className="w-full border-2 border-primary bg-primary hover:bg-primary/90"
                >
                  Conocer más
                </CTAButton>
              </CardContent>
            </Card>
          </div>

          <div className="text-center max-w-3xl mx-auto pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              <span className="text-primary font-semibold">Lola Eventos</span> crea la experiencia gastronómica,{" "}
              <span className="text-accent font-semibold">Lola Funcional</span> aporta el enfoque saludable y
              consciente, y <span className="text-primary font-semibold">Studio Lola</span> captura y comunica estas
              experiencias al mundo digital. Juntas, forman un ecosistema completo de gastronomía y comunicación.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Studio Lola Block */}
      <Section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary/30">
              <Sparkles className="w-6 h-6 text-secondary" />
              <span className="font-serif text-xl font-bold text-secondary">Studio Lola</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Creatividad gastronómica con visión estratégica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/95">
                Fusionamos cocina con branding, marketing digital y producción de contenidos gastronómicos.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/95">
                Diseñamos experiencias comestibles, campañas que despiertan el apetito y relatos visuales que marcan la
                diferencia.
              </p>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed font-semibold text-secondary">
                Somos chefs. Somos comunicadoras. Somos Studio Lola.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/95">
                Tu marca necesita más que recetas. Necesita relato, estrategia y sabor propio.
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <CTAButton
              href="/servicios/studio"
              className="bg-secondary text-primary hover:bg-secondary/90 border-2 border-secondary shadow-xl hover:shadow-2xl transition-all"
              size="lg"
            >
              Descubre Studio Lola
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-balance">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Experiencias reales de quienes han confiado en Lola para crear momentos memorables.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">Conversemos tu próximo proyecto</h2>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 text-pretty">
            Estamos listos para crear una experiencia gastronómica única que conecte con tu audiencia y marque la
            diferencia.
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
              variant="outline"
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
