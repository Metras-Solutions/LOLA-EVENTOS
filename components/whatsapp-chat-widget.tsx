"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [autoCloseTimer, setAutoCloseTimer] = useState<NodeJS.Timeout | null>(null)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+56900000000"

  // Auto-close after 10 seconds of no interaction
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 10000)
      setAutoCloseTimer(timer)

      return () => {
        if (timer) clearTimeout(timer)
      }
    }
  }, [isOpen])

  const handleInteraction = () => {
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer)
      setAutoCloseTimer(null)
    }
  }

  const handleOpenWhatsApp = () => {
    const message = "¡Hola! Me gustaría obtener más información sobre sus servicios."
    window.open(`https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl bg-[#6B8E6F] hover:bg-[#5A7A5E] transition-all duration-300"
          aria-label="Chat por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </Button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-6 z-50 w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E8E5DC]"
            onMouseEnter={handleInteraction}
            onClick={handleInteraction}
          >
            {/* Header */}
            <div className="bg-[#6B8E6F] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Studio Lola</h3>
                  <p className="text-xs text-white/80">Chatea con nosotros</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 bg-[#FAF9F6]">
              <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-[#E8E5DC]">
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  <span className="text-xl mr-1">👋</span>
                  ¡Hola! ¿Cómo podemos ayudarte hoy?
                </p>
                <p className="text-xs text-[#8B8B8B] mt-2">
                  Estamos aquí para crear experiencias gastronómicas únicas.
                </p>
              </div>

              <Button
                onClick={handleOpenWhatsApp}
                className="w-full bg-[#6B8E6F] hover:bg-[#5A7A5E] text-white rounded-xl py-6 font-medium shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </Button>

              <p className="text-xs text-center text-[#8B8B8B]">Te responderemos a la brevedad</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
