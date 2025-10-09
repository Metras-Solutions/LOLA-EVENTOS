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
      <Section
        className="pt-32"
        eyebrow="Galería"
        title="Nuestras Creaciones"
        description="Cada imagen cuenta una historia de sabor, creatividad y atención al detalle."
        centered
      >
        <GalleryGrid />
      </Section>
    </>
  )
}
