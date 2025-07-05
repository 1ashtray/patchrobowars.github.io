import { BackgroundParticles } from "@/components/background-particles"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { FightRulesSection } from "@/components/fight-rules-section"
import { JudgingCriteriaSection } from "@/components/judging-criteria-section"
import { BuildDaySlideshow } from "@/components/build-day-slideshow"
import { Info, MapPin, Calendar, Clock, Ticket, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Clean, Modern, Centered */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white py-20">
        <BackgroundParticles />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full space-y-12">
          {/* Main Event Title */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500">
                PATCH ROBOWARS
              </span>
            </h1>
            <div className="space-y-2">
              <p className="text-orange-400 font-semibold text-xl md:text-2xl tracking-wide">PRESENTS</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">FIGHT NIGHT 2025</h2>
            </div>

            {/* Get Tickets Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-12 py-4 text-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://www.eventbrite.ie/e/1408425351139?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Ticket className="h-6 w-6" />
                  Get Free Tickets Now
                </a>
              </Button>
            </div>
          </div>

          {/* Build Context Slideshow */}
          <div className="w-full">
            <div className="bg-black/60 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="w-full max-w-5xl mx-auto">
                <BuildDaySlideshow />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs text-gray-400">Learn More</p>
            <ArrowDown className="h-6 w-6 text-orange-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block p-2 bg-orange-900/20 rounded-lg">
                <Info className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What is Patch RoboWars?</h2>
              <div className="w-20 h-1 bg-orange-600"></div>
              <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
                Patch RoboWars is a student-run battlebot competition where anyone from any background can participate.
                Each team receives a transmitter/receiver set, funding to build their robot, dedicated workspace, and
                access to 3D printers. Participants design and build their own remote-controlled machines to fight and
                disable opponents in a thrilling display of strategy, engineering, and combat.
              </p>
            </div>

            {/* Participant Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
              <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
                <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Weekly Build Sessions</h3>
                  <p className="text-gray-300">
                    Regular workshops at Dogpatch Labs with access to tools, 3D printers, and expert guidance.
                  </p>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
                <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
                  <Ticket className="h-6 w-6 text-orange-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Everything Provided</h3>
                  <p className="text-gray-300">
                    Transmitter, receiver, batteries, funding, and workspace - just bring your creativity!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event-details" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-block p-2 bg-orange-900/20 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Fight Night Details</h2>
              <div className="w-20 h-1 bg-orange-600"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black/40 rounded-xl p-8 border border-orange-900/20 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* When */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-900/30 rounded-full p-3">
                        <Calendar className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">When</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-orange-400 font-semibold text-lg">Saturday, July 5th, 2025</p>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-orange-500" />
                            <p className="text-gray-300">
                              <span className="text-white font-semibold">4:30 PM</span> - Doors open
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-orange-500" />
                            <p className="text-gray-300">
                              <span className="text-white font-semibold">5:00 PM</span> - Kick off
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Where */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-900/30 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Where</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-orange-400 font-semibold text-lg">Dogpatch Labs</p>
                        <p className="text-gray-300">The CHQ Building, Custom House Quay, North Dock, Dublin 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12 space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-12 py-4 text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://www.eventbrite.ie/e/1408425351139?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Ticket className="h-6 w-6" />
                    Reserve Your Spot
                  </a>
                </Button>
                <p className="text-gray-400 text-sm">
                  Limited seating available • Free admission • Registration required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fight Rules Section */}
      <FightRulesSection />

      {/* Judging Criteria Section */}
      <JudgingCriteriaSection />

      {/* Sponsors Section */}
      <SponsorSection />

      {/* Past Competition Section */}
      <PastCompetitionSection />
    </div>
  )
}
