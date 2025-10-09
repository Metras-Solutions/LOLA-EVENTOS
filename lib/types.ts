export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image?: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: "eventos" | "funcional" | "studio"
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
  color: string
}

export interface EventType {
  id: string
  title: string
  description: string
  category: "privado" | "corporativo" | "sensorial" | "funcional" | "fiesta"
}
