import { Shield, Clock, Trophy, AlertTriangle } from "lucide-react"

export function FightRulesSection() {
  return (
    <section id="fight-rules" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
            <Shield className="h-6 w-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fight Rules</h2>
          <div className="w-20 h-1 bg-orange-600 mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 rounded-xl p-8 border border-orange-900/20">
            <div className="space-y-6">
              {/* Rule 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-900/30 rounded-full p-2 flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">1.</span>
                  <span className="text-gray-300 ml-2">
                    Fights are 5 minutes each, unless the judges call for overtime
                  </span>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-900/30 rounded-full p-2 flex-shrink-0 mt-1">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">2.</span>
                  <span className="text-gray-300 ml-2">
                    Teams will have time between matches for repairs, but that time will depend on the match order
                  </span>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-900/30 rounded-full p-2 flex-shrink-0 mt-1">
                  <Trophy className="h-5 w-5 text-orange-500" />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-orange-400 font-semibold">3.</span>
                    <span className="text-gray-300 ml-2">
                      Winner / Loser is determined by the judges' scoring unless:
                    </span>
                  </div>

                  <div className="ml-8 space-y-3">
                    <div className="flex items-start">
                      <span className="text-orange-400 font-semibold mr-3">a.</span>
                      <span className="text-gray-300">
                        A bot falls into the pit of the arena (failsafes must be in place for this)
                      </span>
                    </div>

                    <div className="flex items-start">
                      <span className="text-orange-400 font-semibold mr-3">b.</span>
                      <span className="text-gray-300">A bot can no longer move</span>
                    </div>

                    <div className="flex items-start">
                      <span className="text-orange-400 font-semibold mr-3">c.</span>
                      <span className="text-gray-300">A bot goes boom-boom</span>
                    </div>

                    <div className="flex items-start">
                      <span className="text-orange-400 font-semibold mr-3">d.</span>
                      <span className="text-gray-300">
                        A team forfeits a match (in order to preserve themselves for future fights)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
