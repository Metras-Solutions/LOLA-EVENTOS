import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { WhatsAppChatWidget } from "@/components/whatsapp-chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script";
import GAAnalytics from "@/components/ga-analytics"

const montserratHeading = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
})

const montserratBody = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
})

const isProd = process.env.NODE_ENV === "production";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lola-eventos.vercel.app"),
  title: {
    default: "Lola - Experiencias Gastronómicas que Marcan la Diferencia",
    template: "%s | Lola",
  },
  description:
    "Eventos, gastronomía funcional y experiencias comestibles estratégicas. Somos chefs y comunicadoras digitales con más de 20 años de experiencia.",
  keywords: [
    "catering eventos",
    "gastronomía funcional",
    "marketing gastronómico",
    "eventos corporativos",
    "alimentación saludable",
    "studio gastronómico",
    "catering Chile",
    "eventos matrimonios",
  ],
  authors: [{ name: "Studio Lola" }],
  creator: "Studio Lola",
  publisher: "Studio Lola",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "Lola - Studio Gastronómico",
    title: "Lola - Experiencias Gastronómicas que Marcan la Diferencia",
    description:
      "Eventos, gastronomía funcional y experiencias comestibles estratégicas. Somos chefs y comunicadoras digitales con más de 20 años de experiencia.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Lola - Experiencias Gastronómicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lola - Experiencias Gastronómicas que Marcan la Diferencia",
    description:
      "Eventos, gastronomía funcional y experiencias comestibles estratégicas. Chefs y comunicadoras digitales con +20 años de experiencia.",
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "manifest",
        url: "/favicons/site.webmanifest",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserratHeading.variable} ${montserratBody.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <main className="flex-1">
          {children}
        </main>
        <GAAnalytics />
        <Footer />
        <WhatsAppChatWidget />
        {isProd && GA_ID && (
          <>
            {/* Carga gtag.js */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            {/* Init + Consent Mode + desactivar send_page_view automático */}
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                // Consent Mode básico (ajusta según tu banner de cookies)
                gtag('consent', 'default', {
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'ad_storage': 'denied',
                  'analytics_storage': 'granted'
                });

                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
