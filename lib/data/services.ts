import type { Service, EventType } from "@/lib/types"

export const mainServices: Service[] = [
  {
    id: "eventos",
    title: "Lola Eventos",
    description:
      "Celebraciones hechas a la medida, con una cocina cuidada, sabrosa y de alta calidad. Desde matrimonios y aniversarios hasta cenas corporativas, llevamos la excelencia de la buena mesa a cada detalle, para que tu evento sea inolvidable.",
    icon: "Sparkles",
    link: "/servicios/eventos",
    color: "#16a34a",
  },
  {
    id: "funcional",
    title: "Lola Funcional",
    description:
      "Gastronomía con propósito: propuestas diseñadas para nutrir y aportar bienestar. Coffee breaks, brunchs y cócteles elaborados con ingredientes de calidad, que combinan salud y disfrute en experiencias únicas para personas y empresas.",
    icon: "Leaf",
    link: "/servicios/funcional",
    color: "#059669",
  },
  {
    id: "studio",
    title: "Studio Lola",
    description:
      "La cocina al servicio de las marcas. Creamos experiencias comestibles, campañas y activaciones donde el sabor se convierte en estrategia. Una fusión entre gastronomía, creatividad y comunicación que conecta con tu público: experiencias comestibles estratégicas, eventos corporativos, campañas gastronómicas y storytelling de marca.",
    icon: "Lightbulb",
    link: "/servicios/studio",
    color: "#0d9488",
  },
]

export const eventTypes: EventType[] = [
  {
    id: "matrimonios",
    title: "Matrimonios",
    description: "Celebra el día más importante con una experiencia gastronómica inolvidable.",
    category: "privado",
  },
  {
    id: "cumpleanos",
    title: "Cumpleaños y Aniversarios",
    description: "Fiestas personalizadas con menús diseñados especialmente para ti.",
    category: "privado",
  },
  {
    id: "intimas",
    title: "Celebraciones Íntimas",
    description: "Cenas y reuniones pequeñas con atención personalizada.",
    category: "privado",
  },
  {
    id: "coffee-breaks",
    title: "Coffee Breaks Corporativos",
    description: "Pausas energizantes con opciones saludables y deliciosas.",
    category: "corporativo",
  },
  {
    id: "brunch",
    title: "Brunch Ejecutivo",
    description: "Desayunos y almuerzos para reuniones de negocios.",
    category: "corporativo",
  },
  {
    id: "lanzamientos",
    title: "Lanzamientos de Producto",
    description: "Eventos corporativos que marcan la diferencia.",
    category: "corporativo",
  },
  {
    id: "cocteles",
    title: "Cócteles con Maridaje",
    description: "Experiencias sensoriales con combinaciones únicas.",
    category: "sensorial",
  },
  {
    id: "barras",
    title: "Barras Funcionales",
    description: "Estaciones interactivas con ingredientes saludables.",
    category: "sensorial",
  },
  {
    id: "tematicas",
    title: "Cenas Temáticas",
    description: "Experiencias gastronómicas con concepto único.",
    category: "sensorial",
  },
  {
    id: "degustaciones",
    title: "Degustaciones Funcionales",
    description: "Lanzamientos de productos saludables con propósito.",
    category: "funcional",
  },
  {
    id: "fiestas",
    title: "Fiestas a Medida",
    description: "Catering completo con montaje y ambientación personalizada.",
    category: "fiesta",
  },
]
