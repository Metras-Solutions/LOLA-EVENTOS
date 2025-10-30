import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { GalleryGrid } from "@/components/gallery-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galería - Lola",
  description: "Explora nuestras creaciones gastronómicas y eventos memorables.",
}

export default function GaleriaPage() {
  return (
    <>
      <Header />
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-wider text-primary font-medium">Galería</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal uppercase text-primary text-balance">
            NUESTRAS CREACIONES
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Cada imagen cuenta una historia de sabor, creatividad y atención al detalle.
          </p>
        </div>
      </Section>

      <Section className="py-16">
        <GalleryGrid />
      </Section>
    </>
  )
}
