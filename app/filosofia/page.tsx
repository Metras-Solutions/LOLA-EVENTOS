import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { CTAButton } from "@/components/cta-button"
import { Heart, Sparkles, Target } from "lucide-react"

export const metadata = {
  title: "Nuestra Filosofía - Lola",
  description: "En Lola creemos que la buena comida hace la diferencia. Conoce nuestra filosofía y misión.",
}

export default function FilosofiaPage() {
  return (
    <>
      <Header />
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary text-balance">
            Nuestra Filosofía
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            La buena comida hace la diferencia
          </p>
        </div>
      </Section>

      <Section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  Ingredientes de primera calidad
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  En Lola creemos que la buena comida hace la diferencia. Trabajamos con ingredientes de primera
                  calidad, cuidando cada sabor, textura y presentación, porque cada detalle importa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Experiencias completas</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Pero nuestro trabajo no se detiene en la cocina. Nos dedicamos a crear experiencias completas, donde
                  cada evento fluye sin preocupaciones, cada plato se disfruta al máximo y cada momento queda en la
                  memoria de quienes lo viven.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Nuestra misión</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Nuestra misión es simple: entregar comida que celebra, conecta y soluciona, haciendo la vida de
                  nuestros clientes más fácil y sus eventos más exitosos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sand-gradient rounded-3xl p-8 md:p-12 text-center space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] text-balance">
              Comida que celebra, conecta y soluciona
            </h3>
            <p className="text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed max-w-2xl mx-auto">
              Cada evento es una oportunidad para crear momentos memorables que quedan en el corazón de las personas.
            </p>
          </div>
        </div>
      </Section>

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
