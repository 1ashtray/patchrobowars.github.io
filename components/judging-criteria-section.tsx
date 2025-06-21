import { Scale, Zap, Target, Star, AlertCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function JudgingCriteriaSection() {
  return (
    <section id="judging-criteria" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
            <Scale className="h-6 w-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Judging Criteria</h2>
          <div className="w-20 h-1 bg-orange-600 mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <div className="bg-black/40 rounded-xl p-8 border border-orange-900/20 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-orange-900/30 rounded-full p-3 mb-3">
                  <Zap className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Damage</h3>
                <span className="text-2xl font-bold text-orange-400">5 points</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-900/30 rounded-full p-3 mb-3">
                  <Target className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Control</h3>
                <span className="text-2xl font-bold text-orange-400">3 points</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-900/30 rounded-full p-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Aggression</h3>
                <span className="text-2xl font-bold text-orange-400">3 points</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-900/30 rounded-full p-3 mb-3">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Personality</h3>
                <span className="text-2xl font-bold text-orange-400">2 points</span>
              </div>
            </div>
          </div>

          {/* Expandable Detailed Criteria */}
          <div className="bg-black/40 rounded-xl border border-orange-900/20 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {/* Damage */}
              <AccordionItem value="damage" className="border-orange-900/20">
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-orange-900/10 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-900/30 rounded-full p-3">
                      <Zap className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">1. Damage (5 points)</h3>
                      <p className="text-gray-400 text-sm mt-1">Click to expand details</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-4 text-gray-300">
                    <p>
                      A measure of how a robot's weapon or weapons are used to reduce the functionality or
                      'defensibility' (permanently or temporarily) of the opponent. What constitutes effective weapon
                      usage will vary by weapon type – for damaging weapons such as spinners it will primarily involve
                      doing damage, whereas for a control bot it will involve gaining control of the opponent. Attacks
                      which use a weapon in an unconventional way (e.g. a lifter being used to grab an opponent) should
                      still be scored if they are effective.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <h4 className="text-orange-400 font-semibold mb-3">Damage Levels</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-orange-300 font-medium">Minimal:</span>
                            <span className="ml-2">Doesn't reduce the functionality or effectiveness of the Bot.</span>
                          </div>
                          <div>
                            <span className="text-orange-300 font-medium">Moderate:</span>
                            <span className="ml-2">
                              Slightly reduces the effectiveness of the drive, defensibility, or weapon system of the
                              Bot.
                            </span>
                          </div>
                          <div>
                            <span className="text-orange-300 font-medium">Significant:</span>
                            <span className="ml-2">
                              Clearly reduces the effectiveness of the drive, defensibility, or weapon system of the
                              Bot.
                            </span>
                          </div>
                          <div>
                            <span className="text-orange-300 font-medium">Massive:</span>
                            <span className="ml-2">
                              Eliminates the functionality of the drive, defensibility, or weapon system, or reduces the
                              effectiveness of two or more systems of the Bot.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <h4 className="text-orange-400 font-semibold mb-3">Additional Considerations</h4>
                        <div className="space-y-2 text-sm">
                          <p>• Self-inflicted damage counts the same as opponent-caused damage</p>
                          <p>• Cosmetic damage (scratches, paint) has minimal impact</p>
                          <p>• Functional damage to critical systems weighs more heavily</p>
                          <p>• Sparks don't always indicate significant damage</p>
                          <p>• Watch for post-fight demonstrations of functionality</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Aggression */}
              <AccordionItem value="aggression" className="border-orange-900/20">
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-orange-900/10 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-900/30 rounded-full p-3">
                      <AlertCircle className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">2. Aggression (3 points)</h3>
                      <p className="text-gray-400 text-sm mt-1">Click to expand details</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Aggression is a measure of how actively a robot engages its opponent. Frequent attacks should be
                      scored highly under aggression regardless of their effectiveness or whether they use a weapon, and
                      more risky attacks (eg those into the path of a weapon) should earn a higher score.
                    </p>

                    <div className="bg-gray-900/50 rounded-lg p-4 mt-4">
                      <h4 className="text-orange-400 font-semibold mb-3">Key Points</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          a. An 'attack' is not necessarily every individual activation of a weapon. For example; a
                          grabber using its grabber to let go of and re-grab a pinned opponent would not be a second,
                          additional display of aggression, but repeated strikes from a hammer would be.
                        </p>
                        <p className="ml-4">
                          i. Prolonged pinning which does not result in repeated activations of a weapon can be
                          considered as a show of negative aggression.
                        </p>
                        <p>
                          Strategic breaks from attacking (such as to reposition or spin up a weapon) should not
                          negatively affect aggression scores.
                        </p>
                        <p>
                          Frequent avoidance of attacks should harm a robot's aggression score, but may be scored under
                          control.
                        </p>
                        <p>
                          Freeing a stuck opponent, or otherwise prolonging a fight which could have already been won,
                          should score extremely highly on aggression.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Control */}
              <AccordionItem value="control" className="border-orange-900/20">
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-orange-900/10 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-900/30 rounded-full p-3">
                      <Target className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">3. Control (3 points)</h3>
                      <p className="text-gray-400 text-sm mt-1">Click to expand details</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Control measures the precision with which a robot is controlled. Examples of good control might
                      include:
                    </p>

                    <div className="ml-6 space-y-2">
                      <p>a. Attacks which successfully target weak spots or avoid the opponent's weapon</p>
                      <p>b. Successfully using the arena to aid in attacks</p>
                      <p>c. Successfully evading/escaping grapples, pins, and pushes towards the wall or pit</p>
                      <p>d. Consistently occupying advantageous space in the arena</p>
                      <p>e. Getting knocked into the Pit of Death will result in a control score of 0.</p>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4 mt-4">
                      <p className="text-sm">
                        The judges' perception of how easy or difficult a robot is to drive should not impact scoring in
                        this category; however, in situations where a robot takes damage which clearly makes it harder
                        to control, control points may be awarded for successfully adapting to these changes.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Personality */}
              <AccordionItem value="personality" className="border-orange-900/20">
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-orange-900/10 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-900/30 rounded-full p-3">
                      <Star className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">4. Personality (2 points)</h3>
                      <p className="text-gray-400 text-sm mt-1">Click to expand details</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Personality measures how entertaining, unique, and engaging a robot is during the match. This is
                      not based on effectiveness but rather on how much character the robot expresses through its
                      actions, design, or behavior. Examples of good personality might include:
                    </p>

                    <div className="ml-6 space-y-2">
                      <p>
                        1. Visibly expressive behavior (e.g., taunting movements, celebratory spins, signature
                        flourishes)
                      </p>
                      <p>2. Distinctive design or theme that comes across clearly in motion or interactions</p>
                      <p>
                        3. Entertaining risk-taking or flair in combat (e.g., flashy attacks, unconventional strategies)
                      </p>
                      <p>4. Engaging audience reactions due to the robot's antics or unique style</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
