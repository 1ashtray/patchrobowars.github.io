import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3">
              <div className="h-8 w-8 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patch_logo-svavpUUgfsSsrjLtP5crzmcoULHiqX.png"
                  alt="Patch Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
                ROBOWARS
              </span>
            </Link>
            <p className="text-gray-400">The ultimate battlebot competition where engineering meets combat.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#sponsors" className="text-gray-400 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/#past-competition" className="text-gray-400 hover:text-white transition-colors">
                  Past Winners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Build Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Past Winners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@robowars.com" className="hover:text-white transition-colors">
                  operations@patchrobowars.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="mechanical-btn border-orange-600 text-white hover:bg-orange-950 min-w-[120px]"
              >
                <Link href="#">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} RoboWars. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
