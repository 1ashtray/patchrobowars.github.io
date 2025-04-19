import { Cpu, DollarSign, Warehouse, Printer } from "lucide-react"

export function ParticipantBenefits() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
        <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
          <Cpu className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Transmitter, Receiver and Battery</h3>
          <p className="text-gray-300">
            Each team receives a flysky FS-i6x transmitter, a iA10B receiver, 3x 18650 battery cells at 3.7v 3000mAh each, with a holder for 3s configuration.
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
            Teams will be provided with financial support to purchase materials, components, and tools needed to build their
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
            Access to Dogpatch labs every Saturday or Sunday depending on when most people are free.
          </p>
        </div>
      </div>

      <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
        <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
          <Printer className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Night Outs</h3>
          <p className="text-gray-300">Fun night outs with free food on Launch day and FIght Night</p>
        </div>
      </div>
    </div>
  )
}
