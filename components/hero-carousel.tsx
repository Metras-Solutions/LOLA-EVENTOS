"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const slides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studio%20lola-FDNCYIGAwByF7SwJsQuZRkI1ppNCWC.png",
    title: "Studio Lola",
    subtitle: "Marketing Gastronómico Digital",
    description: "Experiencias gastronómicas que marcan la diferencia",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lola%20funcional-rdVM4qo0FIzlDKy1D5eaqZBPEam6ig.png",
    title: "Lola Funcional",
    subtitle: "Alimentación Saludable y Bienestar",
    description: "Nutrición enfocada en el bienestar sin sacrificar el sabor",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lola%20eventos-79azcJP7CAyMof401zpGlPWmfT1bv8.png",
    title: "Lola Eventos",
    subtitle: "Catering y Organización de Eventos",
    description: "Creamos experiencias memorables para tu celebración",
  },
]

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Servicios", href: "/servicios" },
  { name: "Tipos de Servicios", href: "/tipos-servicios" },
  { name: "Blog", href: "/blog" },
  { name: "Galería", href: "/galeria" },
  { name: "Contacto", href: "/contacto" },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="font-serif text-2xl md:text-3xl font-normal text-white drop-shadow-lg">
              STUDIO LOLA
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 bg-black/80 backdrop-blur-md rounded-lg mt-2">
              <div className="space-y-1 px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-base font-medium text-white/90 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="text-center max-w-5xl mx-auto px-4 py-20">
              <div className="space-y-4">
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-2xl text-balance">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl text-secondary drop-shadow-lg font-light text-balance">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl text-white/95 drop-shadow-lg max-w-2xl mx-auto leading-relaxed text-pretty">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
        onClick={goToPrevious}
        aria-label="Anterior"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white"
        onClick={goToNext}
        aria-label="Siguiente"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
