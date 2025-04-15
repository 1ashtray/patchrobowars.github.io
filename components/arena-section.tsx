import Image from "next/image"
import { MapPin } from "lucide-react"

export function ArenaSection() {
  return (
    <section id="arena" className="py-20 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-red-900/20 rounded-lg mb-4">
            <MapPin className="h-6 w-6 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Arena</h2>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            Our state-of-the-art battleground is designed for maximum robot carnage and spectator enjoyment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-white mb-4">Arena Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-red-900/30 rounded-full p-1 mr-3 mt-1">
                  <span className="text-red-500 font-bold text-sm">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Bulletproof Glass Enclosure</h4>
                  <p className="text-gray-300">
                    1-inch thick polycarbonate walls protect spectators while providing a clear view of all the action.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-900/30 rounded-full p-1 mr-3 mt-1">
                  <span className="text-red-500 font-bold text-sm">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Hazards & Obstacles</h4>
                  <p className="text-gray-300">
                    Spinning kill saws, hammer traps, and pit traps add an extra element of danger and strategy.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-900/30 rounded-full p-1 mr-3 mt-1">
                  <span className="text-red-500 font-bold text-sm">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Steel Floor Plates</h4>
                  <p className="text-gray-300">
                    Reinforced steel floor can withstand the most powerful weapons and provides excellent traction.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-900/30 rounded-full p-1 mr-3 mt-1">
                  <span className="text-red-500 font-bold text-sm">04</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">360° Viewing</h4>
                  <p className="text-gray-300">
                    Arena design allows spectators to view the battles from all angles with no obstructed views.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-2">Dimensions</h4>
                <p className="text-gray-300">32' x 32' (9.75m x 9.75m) battle area</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-2">Capacity</h4>
                <p className="text-gray-300">Seating for 1,200 spectators</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-300">Downtown Convention Center</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-2">Lighting</h4>
                <p className="text-gray-300">Professional stage lighting system</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden border-4 border-red-900/50 shadow-2xl shadow-red-900/20">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="RoboWars Arena"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">The Battleground</h3>
                  <p className="text-gray-300">Where metal meets mayhem in the ultimate test of engineering prowess.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative rounded-lg overflow-hidden border-2 border-red-900/30">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Arena Close-up"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden border-2 border-red-900/30">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Arena Hazards"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
