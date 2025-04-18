"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Trophy, Zap, PenToolIcon as Tool } from "lucide-react"

const slideImages = [
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Battle Highlight 1",
    caption: "Destroyer X vs Hammer Time - Championship Final",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Battle Highlight 2",
    caption: "Flipper Frenzy's incredible arena flip",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Battle Highlight 3",
    caption: "The dramatic semi-final match",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Battle Highlight 4",
    caption: "Crowd reaction to the championship match",
  },
]

export function PastCompetitionSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1))
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="past-competition" className="py-20 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
            <Trophy className="h-6 w-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Previous Battlebots</h2>
          <div className="w-20 h-1 bg-orange-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            Check out some of the incredible battlebots from our previous competitions that amazed the crowd with their
            innovative designs and engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Bot 1 - Internal Components */}
          <div className="bg-black/50 rounded-xl overflow-hidden border border-orange-900/30 transition-transform hover:scale-105">
            <div className="relative h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20240511_172204411.jpg-9FDZuK3zfK3ufn2DppCIUXhnshQqqB.jpeg"
                alt="Battlebot Internal Components"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Engineering Excellence
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Tool className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-white">Precision Engineering</h3>
              </div>
              <p className="text-gray-300 mb-4">
                This battlebot showcases meticulous internal component layout with a powerful motor system, custom PCB
                integration, and a high-capacity battery pack. The precision-machined chassis provides optimal weight
                distribution and durability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-orange-400 text-xs px-2 py-1 rounded">Custom Electronics</span>
                <span className="bg-gray-800 text-orange-400 text-xs px-2 py-1 rounded">Dual Motors</span>
                <span className="bg-gray-800 text-orange-400 text-xs px-2 py-1 rounded">Modular Design</span>
              </div>
            </div>
          </div>

          {/* Bot 2 - Green Shell with Signatures */}
          <div className="bg-black/50 rounded-xl overflow-hidden border border-orange-900/30 transition-transform hover:scale-105">
            <div className="relative h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_203028864.jpg-kP0pk9tRAxXbyhFKtvkS9M8dxk9CAb.jpeg"
                alt="Battlebot Shell with Signatures"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Team Collaboration
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-white">Lucy Daisy</h3>
              </div>
              <p className="text-gray-300 mb-4">
                This distinctive green shell features the signatures of team members Aditya, Joshi, Abutalha, and others
                who collaborated on this innovative design. The spiked exterior provides both offensive capability and
                defensive protection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-orange-400 text-xs px-2 py-1 rounded">Spiked Armor</span>
                <span className="bg-gray-800 text-orange-400 text-xs px-2 py-1 rounded">Lightweight</span>
                <span className="bg-gray-800 text-orange-400 text-xs px-2 py-1 rounded">Team Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
