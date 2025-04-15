import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"

export function SponsorSection() {
  return (
    <section id="sponsors" className="py-20 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-red-900/20 rounded-lg mb-4">
            <Award className="h-6 w-6 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            RoboWars is made possible by the generous support of our sponsors who share our passion for robotics and
            engineering excellence.
          </p>
        </div>

        {/* Main Sponsor */}
        <div className="bg-black/50 rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 bg-white rounded-xl p-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Main Sponsor Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-white">Title Sponsor</h3>
              <p className="text-gray-300">
                Our title sponsor is a leading technology company committed to advancing robotics and engineering
                education. Their support has been instrumental in making RoboWars a premier battlebot competition.
              </p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
                tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </p>
              <Button asChild variant="outline" className="border-red-600 text-white hover:bg-red-950">
                <Link href="#">Visit Sponsor</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Supporting Sponsors */}
        <h3 className="text-2xl font-bold text-white text-center mb-8">Supporting Sponsors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((sponsor) => (
            <div key={sponsor} className="bg-black/30 rounded-xl p-6 border border-gray-800 flex flex-col items-center">
              <div className="relative w-full h-32 bg-white rounded-lg p-4 flex items-center justify-center mb-4">
                <Image
                  src={`/placeholder.svg?height=100&width=100`}
                  alt={`Sponsor ${sponsor} Logo`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Sponsor {sponsor}</h4>
              <p className="text-gray-400 text-sm text-center">
                Supporting the future of robotics and engineering excellence.
              </p>
            </div>
          ))}
        </div>

        {/* Become a Sponsor */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-black rounded-xl p-8 border border-red-900/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Become a Sponsor</h3>
              <p className="text-gray-300">
                Join our growing list of sponsors and support the future of robotics and engineering.
              </p>
            </div>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="#">Sponsorship Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
