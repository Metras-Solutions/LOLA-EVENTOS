import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { WhatsAppChatWidget } from "@/components/whatsapp-chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lola - Experiencias Gastronómicas que Marcan la Diferencia",
  description:
    "Eventos, gastronomía funcional y experiencias comestibles estratégicas. Somos chefs y comunicadoras digitales con más de 20 años de experiencia.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppChatWidget />
      </body>
    </html>
  )
}
