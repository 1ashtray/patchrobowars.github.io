"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Trophy, Zap, ChevronLeft, ChevronRight, PenTool } from "lucide-react"

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
                src="/placeholder.svg?height=400&width=600"
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
                <PenTool className="h-5 w-5 text-orange-500 mr-2" />
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
                src="/placeholder.svg?height=400&width=600"
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

        {/* Design Inspiration Section */}
        <div className="bg-black/30 rounded-xl p-8 border border-orange-900/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Design Inspiration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 rounded-lg p-5 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Innovative Weapons</h4>
              <p className="text-gray-300">
                From spinning discs to pneumatic flippers, our competitors have showcased a wide range of creative
                weapon systems.
              </p>
            </div>
            <div className="bg-black/50 rounded-lg p-5 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Defensive Strategies</h4>
              <p className="text-gray-300">
                Some of the most successful bots feature innovative armor designs that can withstand powerful attacks
                while maintaining mobility.
              </p>
            </div>
            <div className="bg-black/50 rounded-lg p-5 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Electronic Integration</h4>
              <p className="text-gray-300">
                Advanced control systems and custom PCBs have given competitors precise control over their battlebots
                during intense matches.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Slideshow */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Battle Highlights</h3>

          <div className="relative rounded-xl overflow-hidden aspect-[16/9] max-w-5xl mx-auto shadow-2xl">
            {/* Slideshow */}
            <div className="relative w-full h-full">
              {slideImages.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image src={slide.src || "/placeholder.svg"} alt={slide.alt} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-medium">{slide.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
