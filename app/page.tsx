import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { HeroCarousel } from "@/components/hero-carousel"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Leaf, Sparkles, Heart, Users, Lightbulb } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"
import Image from "next/image"
import Script from "next/script"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Studio Lola",
    alternateName: "Lola Eventos",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://lola-eventos.vercel.app",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://lola-eventos.vercel.app"}/images/lola-logo.png`,
    description:
      "Eventos, gastronomía funcional y experiencias comestibles estratégicas. Chefs y comunicadoras digitales con más de 20 años de experiencia.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Chile",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56-9-9418-2013",
      contactType: "customer service",
      email: "lola.eventoschile@gmail.com",
      availableLanguage: ["Spanish"],
    },
    sameAs: ["https://www.instagram.com/lolaeventos.chile"],
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroCarousel />

      <Section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-primary text-balance">
            Tres formas de vivir la experiencia Lola
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Somos un equipo de <span className="font-bold">chefs profesionales</span> y{" "}
            <span className="font-bold">comunicadoras digitales</span> que transforman la gastronomía en experiencias
            únicas. Diseñamos <span className="font-bold">eventos, menús y proyectos gastronómicos</span> que sorprenden
            y conectan con las personas.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-normal uppercase text-primary">Pasión</h3>
              <p className="text-muted-foreground">Por la gastronomía y el arte de crear experiencias</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-normal uppercase text-primary">Conexión</h3>
              <p className="text-muted-foreground">Creamos vínculos auténticos a través del sabor</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-normal uppercase text-primary">Innovación</h3>
              <p className="text-muted-foreground">Fusionamos tradición con tendencias actuales</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-normal uppercase text-primary text-balance">
              Tres propuestas, una misma esencia
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Cada línea de negocio está diseñada para complementarse y crear un ecosistema completo de experiencias
              gastronómicas que van desde la cocina hasta la comunicación digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Lola Eventos */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group flex flex-col relative overflow-hidden bg-white">
              <div className="absolute bottom-2 right-2 w-2/5 h-auto opacity-10 pointer-events-none select-none z-0">
                <Image
                  src="/brand/lola-eventos-logo.png"
                  alt=""
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain"
                  aria-hidden="true"
                />
              </div>
              <CardHeader className="space-y-4 flex-1 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary uppercase font-normal">Lola Eventos</CardTitle>
                <CardDescription className="text-base leading-relaxed text-primary/80">
                  Catering y organización de eventos corporativos, matrimonios y celebraciones. Creamos experiencias
                  gastronómicas que van más allá de lo tradicional.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <CTAButton
                  href="/servicios/eventos"
                  variant="outline"
                  className="w-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white"
                >
                  Conocer más
                </CTAButton>
              </CardContent>
            </Card>

            {/* Lola Funcional */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl group bg-primary/10 flex flex-col relative overflow-hidden">
              <div className="absolute bottom-2 right-2 w-2/5 h-auto opacity-10 pointer-events-none select-none z-0">
                <Image
                  src="/brand/lola-funcional-logo.png"
                  alt=""
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain"
                  aria-hidden="true"
                />
              </div>
              <CardHeader className="space-y-4 flex-1 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/40 flex items-center justify-center group-hover:bg-white/50 transition-colors">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary uppercase font-normal">Lola Funcional</CardTitle>
                <CardDescription className="text-base leading-relaxed text-primary/80">
                  Alimentación saludable y bienestar. Nutrición funcional enfocada en el bienestar que no sacrifica el
                  sabor ni la experiencia gastronómica.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <CTAButton
                  href="/servicios/funcional"
                  className="w-full border-2 border-primary bg-primary text-white hover:bg-primary/90"
                >
                  Conocer más
                </CTAButton>
              </CardContent>
            </Card>

            {/* Studio Lola */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group flex flex-col relative overflow-hidden bg-white">
              <CardHeader className="space-y-4 flex-1 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary/30 flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary uppercase font-normal">Studio Lola</CardTitle>
                <CardDescription className="text-base leading-relaxed text-primary/80">
                  Marketing gastronómico digital. Branding culinario, fotografía de alimentos, contenido para redes
                  sociales y estrategia digital.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <CTAButton
                  href="/servicios/studio"
                  variant="outline"
                  className="w-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white"
                >
                  Conocer más
                </CTAButton>
              </CardContent>
            </Card>
          </div>

          <div className="text-center max-w-3xl mx-auto pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              <span className="text-primary font-semibold">Lola Eventos</span> crea la experiencia gastronómica,{" "}
              <span className="text-primary font-semibold">Lola Funcional</span> aporta el enfoque saludable y enfocado
              en el bienestar, y{" "}
              <span className="font-semibold" style={{ color: "#1A1A1A" }}>
                Studio Lola
              </span>{" "}
              captura y comunica estas experiencias al mundo digital. Juntas, forman un ecosistema completo de
              gastronomía y comunicación.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-block">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Utensils className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-balance leading-tight text-primary px-4">
            Si tu evento no se comenta al día siguiente,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">no era un evento de Lola.</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-10"></span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creamos experiencias que trascienden el momento y se convierten en conversaciones memorables.
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="font-serif text-xl font-bold text-white">Studio Lola</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-balance">
              Creatividad gastronómica con visión estratégica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Fusionamos cocina con branding, marketing digital y producción de contenidos gastronómicos.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Diseñamos experiencias comestibles, campañas que despiertan el apetito y relatos visuales que marcan la
                diferencia.
              </p>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed font-semibold text-white">
                Somos chefs. Somos comunicadoras. Somos Studio Lola.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
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

      <Section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-primary text-balance">
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
          <h2 className="font-serif text-4xl md:text-5xl font-normal uppercase text-balance">
            Conversemos tu próximo proyecto
          </h2>
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
