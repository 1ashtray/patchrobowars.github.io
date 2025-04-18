import { Shield, AlertTriangle, Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function RulesSection() {
  return (
    <section id="rules" className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
            <Shield className="h-6 w-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Competition Rules</h2>
          <div className="w-20 h-1 bg-orange-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            All participants must adhere to these rules to ensure a fair, safe, and exciting competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-orange-900/30 rounded-full p-2 mr-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Safety Requirements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    All bots must have a kill switch connected in series with battery connections
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Weapons must have a locking mechanism when not in the arena</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    All remotes / wireless controls must be configured to enter a failsafe mode upon loss of connection,
                    in which all bot systems are turned off / stopped
                  </span>
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
                <div className="bg-orange-900/30 rounded-full p-2 mr-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Prohibited Items</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Exposed edges / blades / weapons sharp enough to cut skin</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Liquid-based weapons</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">EMI / intentional signal interference</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Projectile weapons with the range to hit a person above waist height
                  </span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Radio systems operating outside of approved frequencies</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-orange-400 text-lg font-medium py-4">
                  Match Format
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>
                    Matches are 10 minutes in length. If neither robot is knocked out during this time, the winner will
                    be determined by a panel of judges based on damage, aggression, and control.
                  </p>
                  <p className="mt-2">Tournament structure is yet to be decided</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-orange-400 text-lg font-medium py-4">
                  Technical Requirements
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <ul className="space-y-2">
                    <li>All robots must have a remote kill switch accessible to the referee</li>
                    <li>Maximum Weight: 5kg</li>
                    <li>Robots must be ready to compete within 5 minutes of being called</li>
                    <li>All robots must pass a safety inspection before competing</li>
                    <li>All bots must have a kill switch connected in series with battery connections</li>
                    <li>All bots must have a kill switch connected in series with battery connections</li>
                    <li>
                      All teams must pass a technical inspection by submitting their bot to the judges for inspection in
                      three categories: Physical design/internal layout, Electronic design/schematic, any custom PCBs if
                      applicable
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-orange-400 text-lg font-medium py-4">
                  Judging Criteria
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p className="mt-2">
                    {" "}
                    In the case of niether bot being knocked out, we will have a panel of judges determing the winner
                    according to judging criteria which is tbd{" "}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-orange-400 text-lg font-medium py-4">
                  Knockout Conditions
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>A robot will be declared knocked out if:</p>
                  <ul className="space-y-2 mt-2">
                    <li>It is pushed into the pit of death</li>
                    <li>The bot demonstrates behviour which could cause serious harm to anyone watching the patch</li>
                    <li>The bot is immobilised for more than 30 seconds</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 bg-orange-900/20 rounded-xl p-6 border border-orange-900/30">
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
