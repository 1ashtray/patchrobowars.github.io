import { BattleBotAnimation } from "@/components/battle-bot-animation"
import { BackgroundParticles } from "@/components/background-particles"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { FightRulesSection } from "@/components/fight-rules-section"
import { JudgingCriteriaSection } from "@/components/judging-criteria-section"
import { Info, MapPin, Calendar, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Animation - Split Layout */}
      <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
        <BackgroundParticles />

        {/* 3D Animation positioned only on left side, cropped for bigger bot */}
        <div className="absolute top-1/3 left-0 w-1/2 h-2/3 z-0">
          <BattleBotAnimation />
        </div>

        {/* Content with split layout */}
        <div className="relative z-10 flex flex-col lg:flex-row h-screen">
          {/* Left side - Title only */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start px-4 md:px-6 lg:px-8 pt-20 lg:pt-32">
            <div className="text-center max-w-lg">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient">
                PATCH ROBOWARS
              </h1>
            </div>
          </div>

          {/* Right side - Fight Night Box */}
          <div className="w-full lg:w-1/2 flex items-center justify-start lg:justify-center px-4 md:px-6 lg:px-8 mt-8 lg:mt-0 lg:pl-8">
            <div className="bg-black/70 backdrop-blur-md border-2 border-orange-500/50 rounded-2xl p-6 md:p-8 lg:p-10 max-w-lg w-full shadow-2xl">
              {/* Fight Night Header */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-3 mr-4">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-black" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">FIGHT NIGHT</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto"></div>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="flex flex-col items-center text-center p-3 bg-orange-900/20 rounded-xl border border-orange-500/30">
                  <Calendar className="h-5 w-5 text-orange-400 mb-2" />
                  <span className="text-white font-semibold text-sm">July 5th</span>
                  <span className="text-gray-300 text-xs">2025</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-orange-900/20 rounded-xl border border-orange-500/30">
                  <Clock className="h-5 w-5 text-orange-400 mb-2" />
                  <span className="text-white font-semibold text-sm">5:00 PM</span>
                  <span className="text-gray-300 text-xs">Doors Open</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-orange-900/20 rounded-xl border border-orange-500/30">
                  <MapPin className="h-5 w-5 text-orange-400 mb-2" />
                  <span className="text-white font-semibold text-sm">Dogpatch</span>
                  <span className="text-gray-300 text-xs">Labs</span>
                </div>
              </div>

              {/* Main CTA */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="mechanical-btn bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl mb-4 w-full shadow-lg"
                >
                  <a
                    href="https://www.eventbrite.ie/e/1408425351139?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register for Fight Night
                  </a>
                </Button>
                <p className="text-gray-300 text-sm">
                  <span className="text-orange-400 font-semibold">Free Admission</span> • Limited Seating • Registration
                  Required
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Down arrow at very bottom */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
          <a href="#about" className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section - simplified */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
              <Info className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What is Patch RoboWars?</h2>
            <div className="w-20 h-1 bg-orange-600 mb-6"></div>
            <p className="max-w-3xl text-gray-300 text-lg mb-8">
              Patch RoboWars is a student-run battlebot competition where anyone from any background can participate.
              Each team receives a transmitter/receiver set, funding to build their robot, dedicated workspace, and
              access to 3D printers. Participants design and build their own remote-controlled machines to fight and
              disable opponents in a thrilling display of strategy, engineering, and combat.
            </p>

            {/* Fight Night Location */}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event-details" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
              <Calendar className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fight Night Details</h2>
            <div className="w-20 h-1 bg-orange-600 mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Date & Time */}
              <div className="bg-black/40 rounded-xl p-8 border border-orange-900/20">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-900/30 rounded-full p-3 mr-4">
                    <Calendar className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">When</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-orange-400 font-semibold text-lg">Saturday, July 5th, 2025</p>
                    <p className="text-gray-300">Mark your calendars for the ultimate robot showdown!</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-500 mr-2" />
                    <p className="text-gray-300">
                      <span className="text-white font-semibold">5:00 PM</span> - Doors open & registration
                    </p>
                  </div>
                  <div className="bg-orange-900/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-300">
                      <span className="text-orange-400 font-semibold">Note:</span> Arrive early to secure the best
                      viewing spots and witness the pre-battle preparations!
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="bg-black/40 rounded-xl p-8 border border-orange-900/20">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-900/30 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Where</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-orange-400 font-semibold text-lg">Dogpatch Labs</p>
                    <p className="text-gray-300">The CHQ Building, Custom House Quay, North Dock, Dublin 1</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• State-of-the-art venue with professional arena setup</p>
                    <p>• Spectator seating with optimal viewing angles</p>
                    <p>• Food and refreshments available</p>
                    <p>• Accessible location with public transport links</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="mechanical-btn bg-orange-600 hover:bg-orange-700 text-white font-bold px-12 py-4 text-xl"
              >
                <a
                  href="https://www.eventbrite.ie/e/1408425351139?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Tickets Now
                </a>
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Limited seating available • Free admission • Registration required
              </p>
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
