import { Shield, AlertTriangle, Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function RulesSection() {
  return (
    <section id="rules" className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-red-900/20 rounded-lg mb-4">
            <Shield className="h-6 w-6 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Competition Rules</h2>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            All participants must adhere to these rules to ensure a fair, safe, and exciting competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-900/30 rounded-full p-2 mr-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Safety Requirements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    All robots must have a clearly visible and accessible power switch
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Weapons must have a locking mechanism when not in the arena</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">All participants must wear safety glasses when in the pit area</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Batteries must be properly secured and protected</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Fire extinguishers must be readily available in team pits</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-red-900/30 rounded-full p-2 mr-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Prohibited Items</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Explosives or flammable liquids</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">EMP or jamming devices</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Projectiles that leave the robot</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Liquids, gels, or gases that could damage the arena</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Radio systems operating outside of approved frequencies</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-red-400 text-lg font-medium py-4">
                  Weight Classes
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <ul className="space-y-2">
                    <li>
                      <strong>Heavyweight:</strong> 220 lbs (100 kg) maximum
                    </li>
                    <li>
                      <strong>Middleweight:</strong> 120 lbs (54 kg) maximum
                    </li>
                    <li>
                      <strong>Lightweight:</strong> 60 lbs (27 kg) maximum
                    </li>
                    <li>
                      <strong>Featherweight:</strong> 30 lbs (13.6 kg) maximum
                    </li>
                    <li>
                      <strong>Antweight:</strong> 1 lb (454 g) maximum
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-red-400 text-lg font-medium py-4">
                  Match Format
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>
                    Matches are 3 minutes in length. If neither robot is knocked out during this time, the winner will
                    be determined by a panel of judges based on damage, aggression, and control.
                  </p>
                  <p className="mt-2">
                    Tournament structure is double elimination, meaning a robot must lose twice to be eliminated from
                    the competition.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-red-400 text-lg font-medium py-4">
                  Technical Requirements
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <ul className="space-y-2">
                    <li>All robots must have a remote kill switch accessible to the referee</li>
                    <li>Maximum dimensions: 4' x 4' x 4' (122cm x 122cm x 122cm)</li>
                    <li>Robots must be ready to compete within 5 minutes of being called</li>
                    <li>All robots must pass a safety inspection before competing</li>
                    <li>Teams are limited to 4 members in the pit area during matches</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-red-400 text-lg font-medium py-4">
                  Judging Criteria
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <ul className="space-y-2">
                    <li>
                      <strong>Damage:</strong> Amount of functional damage inflicted on the opponent
                    </li>
                    <li>
                      <strong>Aggression:</strong> Frequency, severity, and effectiveness of attacks
                    </li>
                    <li>
                      <strong>Control:</strong> Ability to maneuver effectively and avoid hazards
                    </li>
                    <li>
                      <strong>Strategy:</strong> Effectiveness of the game plan and adaptability
                    </li>
                  </ul>
                  <p className="mt-2">Each category is worth 25 points for a total of 100 possible points.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-red-400 text-lg font-medium py-4">
                  Knockout Conditions
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>A robot will be declared knocked out if:</p>
                  <ul className="space-y-2 mt-2">
                    <li>It is unable to demonstrate controlled movement</li>
                    <li>It is thrown out of the arena</li>
                    <li>The team taps out</li>
                    <li>The robot catches fire or experiences a catastrophic failure</li>
                    <li>The robot becomes stuck in the arena for more than 30 seconds</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 bg-red-900/20 rounded-xl p-6 border border-red-900/30">
              <h3 className="text-xl font-bold text-white mb-4">Important Notice</h3>
              <p className="text-gray-300">
                All rules are subject to interpretation by the judges and event officials. Their decisions are final.
                Rules may be updated or modified at any time to ensure safety and fair competition. It is the
                responsibility of all teams to stay informed of any rule changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
