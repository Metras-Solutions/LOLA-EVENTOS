import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Lola",
  description: "Conversemos sobre tu evento o proyecto. Estamos listos para crear una experiencia gastronómica única.",
}

export default function ContactoPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+56900000000"

  return (
    <>
      <Header />
      <Section
        eyebrow="Contacto"
        title="Conversemos tu proyecto"
        description="Completa el formulario y nos pondremos en contacto contigo a la brevedad. También puedes escribirnos directamente por WhatsApp."
        centered
        className="pt-32"
      />

      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="rounded-2xl">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:lola.eventoschile@gmail.com" className="text-gray-600 hover:text-brand-600">
                      lola.eventoschile@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="space-y-1">
                      <a href="tel:+56994182013" className="text-gray-600 hover:text-brand-600 block">
                        +56 9 9418 2013
                      </a>
                      <a href="tel:+56988071823" className="text-gray-600 hover:text-brand-600 block">
                        +56 9 8807 1823
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <a
                      href="https://wa.me/56994182013"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-600"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Ubicación</div>
                    <p className="text-gray-600">Santiago, Chile</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Optional Map */}
            {process.env.NEXT_PUBLIC_ADDRESS_MAP_IFRAME_URL && (
              <Card className="rounded-2xl overflow-hidden">
                <iframe
                  src={process.env.NEXT_PUBLIC_ADDRESS_MAP_IFRAME_URL}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Lola"
                />
              </Card>
            )}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl">
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
