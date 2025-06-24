"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const buildDayImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8649.JPG-PTC0huIOQMHdlsrFTxmunmwzaRoONX.jpeg",
    alt: "Team members working with 3D printer at Dogpatch Labs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8773%203.jpg-RxgubPBtpy7f5HSmv6sJxM1iqUWtFU.jpeg",
    alt: "Team member designing robot components using CAD software",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9457.jpg-DqO86NmU8smSAi4NZ7Kxqd239KVQDi.jpeg",
    alt: "Team planning and designing robot strategy on whiteboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8670.JPG-LKA5eJbFgxKgHrzrGNGS2ezFzBmOhd.jpeg",
    alt: "Strategic planning session with detailed robot diagrams on whiteboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9395.jpg-TI0NXzvMLbFDdCJexluUWcBmBs2EY1.jpeg",
    alt: "Collaborative team building session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9480.JPG-LQ2r81C6532Llcmz8JGvCxP40W2yAT.jpeg",
    alt: "Team members assembling robot components and electronics",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8851.JPG-UZgi6vFrTeWmQNfrfdHd78xHjzoLxm.jpeg",
    alt: "Testing robot controls and electronics",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9408.JPG-vZbSUJyy7aCXUlSTvWOC0YVGooP6lo.jpeg",
    alt: "Hands-on fabrication work with power tools and materials",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9181.JPG-I26kWmHtPLv1XIp6dmCwfvkGuB6456.jpeg",
    alt: "Detailed electronics and wiring work",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9347.JPG-E7rb3CM6sEwNTNb9ChnOwUEFQ6Qasb.jpeg",
    alt: "Outdoor fabrication and material cutting work",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9237.JPG-R7PeUFXRrMqEfcIeP55kxZq08LNIKV.jpeg",
    alt: "Final robot assembly and testing",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8830.jpg-LeEbacQUUtMtg4FGSuqIkzt1BGn89F.jpeg",
    alt: "Workshop table with robot components and tools",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8799.JPG-EEtRI6VNTP6MpJl1C5DXcswAkMX1KF.jpeg",
    alt: "Overhead view of workspace with robot parts",
  },
]

export function BuildDaySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === buildDayImages.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? buildDayImages.length - 1 : prev - 1))
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main slideshow container */}
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black/40 border border-orange-900/20">
        {buildDayImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {buildDayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
