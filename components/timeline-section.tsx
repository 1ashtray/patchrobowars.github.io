import { Calendar, PenToolIcon as Tool, Zap, Flame } from "lucide-react"

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-orange-600 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-orange-500 filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
            <Calendar className="h-6 w-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Battle Schedule</h2>
          <div className="w-20 h-1 bg-orange-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            Mark your calendars for these key dates in the RoboWars competition journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-700"></div>

          {/* Launch Day */}
          <div className="relative mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-orange-900/30 transform transition-transform hover:scale-105 hover:border-orange-500/50 group">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Launch Day
                  </h3>
                  <div className="text-xl font-mono text-orange-500 mb-4">May 3rd, 2:00pm–5:00pm</div>
                  <div className="text-lg font-medium text-white mb-2">Dogpatch Labs</div>
                  <p className="text-gray-300 mb-4">
                    The official kickoff of RoboWars! Teams will receive their battle kits, including transmitters,
                    receivers, and batteries.
                  </p>
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-orange-400 mb-2">What to Expect:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        <span>Official team sign-up</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        <span>Equipment handout</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        <span>Competition overview</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        <span>Domino&apos;s Pizza</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-orange-600 border-4 border-black flex items-center justify-center animate-pulse">
                  <Flame className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
          </div>

          {/* Build Days */}
          <div className="relative mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-800 border-4 border-black flex items-center justify-center">
                  <Tool className="h-8 w-8 text-orange-500" />
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-orange-900/30 transform transition-transform hover:scale-105 hover:border-orange-500/50 group">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Build Days
                  </h3>
                  <div className="text-xl font-mono text-orange-500 mb-4">Every Saturday</div>
                  <p className="text-gray-300">
                    Join us every Saturday at Dogpatch Labs for collaborative build sessions. Access tools, 3D printers,
                    and expert advice to bring your battlebot to life. These sessions are the perfect opportunity to
                    troubleshoot issues, test components, and refine your design before the big showdown.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      <span>Technical support available</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      <span>Collaborative workspace</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      <span>Testing opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fight Night */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-orange-900/30 transform transition-transform hover:scale-105 hover:border-orange-500/50 group">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Fight Night
                  </h3>
                  <div className="text-xl font-mono text-orange-500 mb-4">July 5th, 2025</div>
                  <p className="text-gray-300">
                    The ultimate showdown! Battlebots will enter the arena to compete for glory and prizes. Witness
                    spectacular robot combat with crushing, flipping, and spinning weapons in action. The event includes
                    food, music, and networking with tech enthusiasts and potential employers.
                  </p>
                  <div className="mt-4 text-sm text-orange-400 font-semibold">Special features:</div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="bg-black/30 rounded-lg p-2 text-center">
                      <span className="text-white">Live Commentary</span>
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 text-center">
                      <span className="text-white">Awards Ceremony</span>
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 text-center">
                      <span className="text-white">Free Food & Drinks</span>
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 text-center">
                      <span className="text-white">Networking</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-orange-600 border-4 border-black flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="absolute w-24 h-24 rounded-full border-2 border-orange-500 opacity-50 animate-ping"></div>
              </div>

              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>
          </div>

          {/* Timeline end marker */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
            <div className="w-6 h-6 rounded-full bg-orange-600 animate-pulse"></div>
          </div>
        </div>

        {/* Mobile timeline dots - only visible on mobile */}
        <div className="md:hidden flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-orange-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-orange-600"></div>
        </div>
      </div>
    </section>
  )
}
