"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+56900000000"

  const handleSend = () => {
    const finalMessage = message || "Hola, me gustaría obtener más información sobre sus servicios."
    window.open(`https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(finalMessage)}`, "_blank")
    setIsOpen(false)
    setMessage("")
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl bg-[#25D366] hover:bg-[#20BA5A] transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Contactar por WhatsApp
            </DialogTitle>
            <DialogDescription>
              Personaliza tu mensaje antes de enviarlo. Te responderemos a la brevedad.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="message">Tu mensaje</Label>
              <Textarea
                id="message"
                placeholder="Hola, me gustaría obtener más información sobre..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleSend} className="flex-1 bg-[#25D366] hover:bg-[#20BA5A]">
                <MessageCircle className="w-4 h-4 mr-2" />
                Enviar mensaje
              </Button>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
