import { SignupForm } from "@/components/signup-form"

export const metadata = {
  title: "Sign Up - RoboWars",
  description: "Register your team for the RoboWars battlebot competition.",
}

export default function SignupPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Register for RoboWars</h1>
          <div className="w-20 h-1 bg-orange-600 mb-6"></div>
          <p className="max-w-3xl text-gray-300 text-lg">
            Fill out the form below to register your team for the upcoming RoboWars battlebot competition.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-10 border border-gray-700">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
