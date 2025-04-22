import Link from "next/link"
import { BattleBotAnimation } from "@/components/battle-bot-animation"
import { BackgroundParticles } from "@/components/background-particles"
import { CountdownTimer } from "@/components/countdown-timer"
import { SponsorSection } from "@/components/sponsor-section"
import { RulesSection } from "@/components/rules-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { ParticipantBenefits } from "@/components/participant-benefits"
import { TimelineSection } from "@/components/timeline-section"
import { Button } from "@/components/ui/button"
import { ChevronRight, Info } from "lucide-react"

export default function Home() {
  // Launch date - set this to your actual launch date
  const launchDate = new Date("2025-05-03T14:00:00")

  // Event date - set this to your actual event date
  const eventDate = new Date("2025-05-05T20:00:00")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
        <BackgroundParticles />
        <div className="absolute inset-0 z-0">
          <BattleBotAnimation />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          {/* Increased top margin to push title higher */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient mb-32">
            ROBOWARS
          </h1>

          {/* Added mt-auto to push buttons to bottom of container */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto mb-16">
            <Button
              asChild
              size="lg"
              className="mechanical-btn bg-orange-600 hover:bg-orange-700 text-white min-w-[180px]"
            >
              <Link href="/signup">
                Sign Up Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mechanical-btn border-orange-600 text-white hover:bg-orange-950 min-w-[140px]"
            >
              <Link href="#about">
                Learn More
                <Info className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="bg-black/60 backdrop-blur-sm border border-orange-900/50 rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2 text-orange-400">Launch Countdown</h3>
              <CountdownTimer targetDate={launchDate} />
            </div>
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

      {/* About Section - Competition, Community, Innovation boxes removed */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
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

          {/* Competition, Community, Innovation boxes removed as requested */}

          {/* Add the ParticipantBenefits component */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What We Provide</h3>
            <ParticipantBenefits />
          </div>
        </div>
      </section>

      {/* Timeline Section - NEW */}
      <TimelineSection />

      {/* Sponsors Section */}
      <SponsorSection />

      {/* Rules Section */}
      <RulesSection />

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
              <Link href="/signup">
                Register Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
