import { Cpu, DollarSign, Warehouse, Printer } from "lucide-react"

export function ParticipantBenefits() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
        <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
          <Cpu className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Transmitter & Receiver</h3>
          <p className="text-gray-300">
            Each team receives a professional-grade transmitter and receiver set to control their battlebot with
            precision during combat.
          </p>
        </div>
      </div>

      <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
        <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
          <DollarSign className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Funding</h3>
          <p className="text-gray-300">
            Teams are provided with financial support to purchase materials, components, and tools needed to build their
            competitive robot.
          </p>
        </div>
      </div>

      <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
        <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
          <Warehouse className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Workspace</h3>
          <p className="text-gray-300">
            Access to dedicated building space equipped with essential tools and equipment to design, build, and test
            your battlebot.
          </p>
        </div>
      </div>

      <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
        <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
          <Printer className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">3D Printing</h3>
          <p className="text-gray-300">
            Teams can utilize 3D printers to create custom parts, protective casings, and unique design elements for
            their battlebots.
          </p>
        </div>
      </div>
    </div>
  )
}
