"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { Trophy, Zap, PenToolIcon as Tool, ChevronLeft, ChevronRight, Play, Flame } from "lucide-react"

// Combined slideshow with both images and video
const slides = [
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20240511_155930462%20%281%29-QF3veH2JOsy3dcya0sgncsZ5EeL3fv.mp4",
    alt: "RoboWars battle video",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240511_193915.jpg-PVMkp1MYaZ1aLn05J6LsS05gcuI2yi.jpeg",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240511_193915.jpg-PVMkp1MYaZ1aLn05J6LsS05gcuI2yi.jpeg",
    alt: "Battlebots in the arena",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240511_194315%20%281%29.jpg-q8iKM0FM6D0L7UxyFoDg722NkNJZOc.jpeg",
    alt: "Green spiked battlebot",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_233107830%20%282%29.jpg-QDbYHwvVDirydD4PxhxsyFAZIGhycz.jpeg",
    alt: "Team bonding around campfire",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_152413.jpg-BxXqnzFDuVHRANCkDeRIYW6yBwa94W.jpeg",
    alt: "Arena setup in the vaults",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_181715_007%20%281%29.jpg-Nrp4hM5vS1xcIiXddmD1O32JpC2A6A.jpeg",
    alt: "Team collaboration",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_183539_001.jpg-ijf05qYCMZ8sk3Fl6mweeWaqpLlT6J.jpeg",
    alt: "Decorating the battlebot",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_174345.jpg-Hwr6hDkdOhN2QohkodgnrefAlgGOwz.jpeg",
    alt: "Workshop session",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_185627_011%20%281%29.jpg-U6pMrvwHFVZHjBU7ZyqRkTnjSfpTqh.jpeg",
    alt: "Testing the green shell",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240511_145628_01.jpg-cqZojKom7pDqSeExcrXonXzpIoyeJy.jpeg",
    alt: "Team planning session",
  },
]

export function PastCompetitionSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextSlide = useCallback(() => {
    // Pause video if we're moving away from a video slide
    if (slides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.pause()
    }
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    // Pause video if we're moving away from a video slide
    if (slides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.pause()
    }
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [currentSlide])

  // Auto-advance slides only when video is not playing
  useEffect(() => {
    if (isVideoPlaying || slides[currentSlide].type === "video") return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide, isVideoPlaying, currentSlide])

  return (
    <section id="past-competition" className="py-20 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
            <Trophy className="h-6 w-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ROBOWARS 2024</h2>
          <div className="w-20 h-1 bg-orange-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            Check out highlights from our RoboWars events, showcasing the incredible battlebots, team collaboration, and
            the exciting atmosphere of the competition.
          </p>
        </div>

        {/* Combined Slideshow with Images and Video */}
        <div className="relative max-w-5xl mx-auto mb-16 overflow-hidden rounded-xl">
          <div className="relative aspect-video overflow-hidden bg-black">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {slide.type === "image" ? (
                  <Image
                    src={slide.src || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      controls
                      className="w-full h-full object-contain"
                      poster={slide.poster}
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      onEnded={() => setIsVideoPlaying(false)}
                    >
                      <source src={slide.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {!isVideoPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                        <div className="bg-orange-600/80 rounded-full p-4">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => {
                  // Pause video if we're moving away from a video slide
                  if (slides[currentSlide].type === "video" && videoRef.current) {
                    videoRef.current.pause()
                  }
                  setCurrentSlide(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-orange-500" : "bg-gray-600 hover:bg-gray-500"
                } ${slide.type === "video" ? "ring-2 ring-orange-300 ring-opacity-50" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Bot 1 - Internal Components */}
          <div className="bg-black/50 rounded-xl overflow-hidden border border-orange-900/30 transition-transform hover:scale-105">
            <div className="relative h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20240511_172204411.jpg-9FDZuK3zfK3ufn2DppCIUXhnshQqqB.jpeg"
                alt="Battlebot Internal Components"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Tool className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-white">Super Sucker</h3>
              </div>
              <p className="text-gray-300 mb-4"></p>
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
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-white">Shreckbot</h3>
              </div>
              <p className="text-gray-300 mb-4"></p>
            </div>
          </div>

          {/* Bot 3 - Peter the Piss Bot */}
          <div className="bg-black/50 rounded-xl overflow-hidden border border-orange-900/30 transition-transform hover:scale-105">
            <div className="relative h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0Dq7FFdRvAQ9tJmo7EnSNWdQakhuQD.png"
                alt="Peter the Piss Bot"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Flame className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-white">Peter the Piston Bot</h3>
              </div>
              <p className="text-gray-300 mb-4"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
