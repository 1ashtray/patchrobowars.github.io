import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function SponsorSection() {
  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        {/* Main Sponsor Showcase */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-orange-900/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-orange-600 filter blur-3xl"></div>
            <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-orange-500 filter blur-3xl"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              {/* Logo as title */}
              <div className="mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patchlogo-TM8xJhfqh6soXH5p4leYvYFarNThah.png"
                  alt="Patch Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="max-w-3xl space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg">
                    Patch runs a free, seven-week summer accelerator tailored for people ages 16–21 (and sometimes a
                    little older) who have big ideas and the drive to bring them to life. Their program helps
                    participants focus on building innovative projects, connecting with a dynamic network of peers, and
                    learning from expert mentors and guest speakers.
                  </p>

                  <p className="text-gray-300 text-lg">
                    By offering resources and support, Patch enables its teams to dedicate their full attention to
                    developing their ideas—whether they're entrepreneurs, scientists, engineers, designers, or
                    technologists. After the summer, alumni join a close-knit community of creators and founders who
                    continue collaborating through events, mentorship, and exciting new opportunities.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    variant="default"
                    className="mechanical-btn bg-orange-600 hover:bg-orange-700 text-white group"
                  >
                    <Link
                      href="https://joinpatch.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Visit Patch
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
