import Link from "next/link"
import { BattleBotAnimation } from "@/components/battle-bot-animation"
import { CountdownTimer } from "@/components/countdown-timer"
import { SponsorSection } from "@/components/sponsor-section"
import { RulesSection } from "@/components/rules-section"
import { ArenaSection } from "@/components/arena-section"
import { Button } from "@/components/ui/button"
import { ChevronRight, Info, Trophy, Shield, Users } from "lucide-react"

export default function Home() {
  // Launch date - set this to your actual launch date
  const launchDate = new Date("2025-06-01T00:00:00")

  // Event date - set this to your actual event date
  const eventDate = new Date("2025-07-15T00:00:00")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <BattleBotAnimation />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-gradient">
            ROBOWARS
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
            The ultimate battlebot competition where engineering meets combat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/signup">
                Register Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-red-600 text-white hover:bg-red-950">
              <Link href="#about">
                Learn More <Info className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-3xl">
            <div className="bg-black/60 backdrop-blur-sm border border-red-900/50 rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2 text-red-400">Launch Countdown</h3>
              <CountdownTimer targetDate={launchDate} />
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-red-900/50 rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2 text-red-400">Event Countdown</h3>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block p-2 bg-red-900/20 rounded-lg mb-4">
              <Info className="h-6 w-6 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What is RoboWars?</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="max-w-3xl text-gray-300 text-lg">
              RoboWars is the premier battlebot competition where engineers, hobbyists, and tech enthusiasts bring their
              custom-built combat robots to battle in an arena of destruction. Competitors design, build, and operate
              remote-controlled machines designed to fight and disable opponents in a thrilling display of strategy,
              engineering, and combat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 rounded-xl p-6 transform transition-transform hover:scale-105">
              <div className="bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competition</h3>
              <p className="text-gray-300">
                Battle your robot against others in a knockout tournament format with prizes for the winners.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 transform transition-transform hover:scale-105">
              <div className="bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-300">
                Join a thriving community of robot enthusiasts, engineers, and makers from around the world.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 transform transition-transform hover:scale-105">
              <div className="bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">
                Showcase your engineering skills and innovative designs in a competitive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorSection />

      {/* Rules Section */}
      <RulesSection />

      {/* Arena Section */}
      <ArenaSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Battle?</h2>
            <p className="max-w-2xl text-gray-300 text-lg mb-8">
              Register your team today and start building your battlebot for the ultimate robot combat experience!
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/signup">
                Register Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
