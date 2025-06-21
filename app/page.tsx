import { BattleBotAnimation } from "@/components/battle-bot-animation"
import { BackgroundParticles } from "@/components/background-particles"
import { CountdownTimer } from "@/components/countdown-timer"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { FightRulesSection } from "@/components/fight-rules-section"
import { JudgingCriteriaSection } from "@/components/judging-criteria-section"
import { Info, MapPin } from "lucide-react"

export default function Home() {
  // Event date - set this to your actual event date
  const eventDate = new Date("2025-07-05T20:00:00")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
        <BackgroundParticles />
        <div className="absolute inset-0 z-0">
          <BattleBotAnimation />
        </div>

        {/* Title at top */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-24 px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient text-center">
            ROBOWARS
          </h1>
        </div>

        {/* Countdown centered at bottom */}
        <div className="absolute bottom-20 left-0 right-0 z-10 flex justify-center">
          <div className="bg-black/40 backdrop-blur-sm border border-orange-900/30 rounded-xl p-4 w-full max-w-xs">
            <h3 className="text-sm font-medium mb-2 text-orange-400 text-center">Fight Night Countdown</h3>
            <CountdownTimer targetDate={eventDate} />
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
            <div className="bg-black/40 rounded-xl p-6 border border-orange-900/20 max-w-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-900/30 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Fight Night Location</h3>
              </div>
              <p className="text-gray-300 text-lg">
                The ultimate showdown will take place at{" "}
                <span className="text-orange-400 font-semibold">Dogpatch Labs</span>, where teams will battle it out in
                an epic arena of destruction and engineering prowess.
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
