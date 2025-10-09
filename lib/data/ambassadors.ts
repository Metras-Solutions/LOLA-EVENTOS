export interface Ambassador {
  id: string
  name: string
  role: string
  image: string
  description: string
}

export const ambassadors: Ambassador[] = [
  {
    id: "1",
    name: "Sofía Martínez",
    role: "Chef & Fundadora",
    image: "/chef-woman-professional-kitchen.jpg",
    description:
      "Chef profesional con más de 15 años de experiencia en gastronomía de autor y eventos corporativos. Lidera Lola Eventos con pasión y creatividad.",
  },
  {
    id: "2",
    name: "Camila Rojas",
    role: "Nutricionista & Wellness Coach",
    image: "/nutritionist-woman-healthy-food.jpg",
    description:
      "Especialista en nutrición funcional y bienestar integral. Dirige Lola Funcional creando experiencias saludables sin sacrificar el sabor.",
  },
  {
    id: "3",
    name: "Daniela Vargas",
    role: "Estratega Digital & Content Creator",
    image: "/content-creator-woman-camera-food.jpg",
    description:
      "Experta en marketing gastronómico y branding culinario. Lidera Studio Lola fusionando creatividad digital con experiencias comestibles.",
  },
]
