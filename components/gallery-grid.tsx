"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { galleryItems } from "@/lib/data/gallery"

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
    if (e.key === "Escape") closeLightbox()
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium text-sm drop-shadow-lg">{item.alt}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent
          className="max-w-[95vw] w-full h-[95vh] p-0 bg-[#E8DCC4]/98 border-0 [&>button]:hidden flex items-center justify-center"
          onKeyDown={handleKeyDown}
        >
          {selectedIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 text-[#4A6741] hover:bg-[#4A6741]/20 rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
                aria-label="Cerrar"
              >
                <X className="w-7 h-7" />
              </Button>

              <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12">
                <div className="relative w-full h-full bg-white/50 rounded-2xl shadow-2xl p-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryItems[selectedIndex].src || "/placeholder.svg"}
                      alt={galleryItems[selectedIndex].alt}
                      fill
                      className="object-contain rounded-lg"
                      sizes="90vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A6741] hover:bg-[#4A6741]/20 rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A6741] hover:bg-[#4A6741]/20 rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#4A6741]/90 backdrop-blur-sm rounded-full shadow-lg">
                <p className="text-white text-sm font-medium">
                  {selectedIndex + 1} / {galleryItems.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
