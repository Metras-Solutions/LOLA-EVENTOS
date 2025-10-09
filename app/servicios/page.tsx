import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { ServiceCard } from "@/components/service-card"
import { mainServices } from "@/lib/data/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios - Lola",
  description:
    "Tres propuestas gastronómicas: Lola Eventos, Lola Funcional y Studio Lola. Cada una diseñada para crear experiencias memorables.",
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <Section
        className="pt-32"
        eyebrow="Servicios"
        title="Tres líneas, un mismo compromiso"
        description="Cada propuesta nace de nuestra pasión por la gastronomía y la comunicación. Todas comparten el mismo ADN: calidad, creatividad y atención personalizada. Lo que cambia es el enfoque y el propósito de cada experiencia."
        centered
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              link={service.link}
              color={service.color}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Ya sea que busques un catering elegante para tu matrimonio, un brunch funcional para tu equipo, o una
            campaña gastronómica para tu marca, en Lola encontrarás la propuesta perfecta.
          </p>
        </div>
      </Section>
    </>
  )
}
