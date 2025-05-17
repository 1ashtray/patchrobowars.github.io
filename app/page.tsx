import Link from "next/link"
import { BattleBotAnimation } from "@/components/battle-bot-animation"
import { BackgroundParticles } from "@/components/background-particles"
import { CountdownTimer } from "@/components/countdown-timer"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { Button } from "@/components/ui/button"
import { ChevronRight, Info } from "lucide-react"

export default function Home() {
  // Event date - set this to your actual event date
  const eventDate = new Date("2025-07-05T20:00:00")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
        <BackgroundParticles />
        <div className="absolute inset-0 z-0">
          <BattleBotAnimation />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient">
            ROBOWARS
          </h1>

          {/* Fight Night Countdown - keeping only this one */}
          <div className="mt-12 w-full max-w-md">
            <div className="bg-black/60 backdrop-blur-sm border border-orange-900/50 rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2 text-orange-400">Fight Night Countdown</h3>
              <CountdownTimer targetDate={eventDate} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a href="#about" className="animate-bounce">
            <svg
              className="w-8 h-8 text-white"
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
            <p className="max-w-3xl text-gray-300 text-lg">
              Patch RoboWars is a student-run battlebot competition where anyone from any background can participate.
              Each team receives a transmitter/receiver set, funding to build their robot, dedicated workspace, and
              access to 3D printers. Participants design and build their own remote-controlled machines to fight and
              disable opponents in a thrilling display of strategy, engineering, and combat.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorSection />

      {/* Past Competition Section */}
      <PastCompetitionSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Battle?</h2>
            <p className="max-w-2xl text-gray-300 text-lg mb-8">
              Register your team today and start building your battlebot for the ultimate robot combat experience!
            </p>
            <Button
              asChild
              size="lg"
              className="mechanical-btn bg-orange-600 hover:bg-orange-700 text-white min-w-[150px]"
            >
              <Link href="mailto:operations@patchrobowars.com">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
