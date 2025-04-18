"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function SignupForm() {
  const [formStep, setFormStep] = useState(0)

  const nextStep = () => {
    setFormStep(formStep + 1)
  }

  const prevStep = () => {
    setFormStep(formStep - 1)
  }

  return (
    <div>
      {/* Tally Form Embed */}
      <div className="w-full h-[800px] rounded-lg overflow-hidden">
        <iframe
          src="https://tally.so/embed/3xzyMv?alignLeft=1&hideTitle=1&transparentBackground=0&dynamicHeight=1" // Replace with your actual Tally form URL
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="RoboWars Registration Form"
        >
          Loading…
        </iframe>
      </div>

      {/* Fallback Form (in case Tally doesn't load) */}
      <div className="mt-8 border-t border-gray-700 pt-8">
        <h3 className="text-xl font-bold text-white mb-4">Alternative Registration Form</h3>
        <p className="text-gray-300 mb-6">
          If you're having trouble with the form above, you can use this alternative form to register.
        </p>

        <div className="space-y-6">
          {formStep === 0 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact Information</h4>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Team Captain Name</Label>
                    <Input id="contact-name" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input id="contact-email" type="email" placeholder="Email address" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" placeholder="Phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="team-size">Team Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of team members" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 member</SelectItem>
                        <SelectItem value="2-3">2-3 members</SelectItem>
                        <SelectItem value="4-6">4-6 members</SelectItem>
                        <SelectItem value="7+">7+ members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-requirements">Special Requirements or Notes</Label>
                  <Textarea
                    id="special-requirements"
                    placeholder="Any special requirements or additional information"
                    rows={3}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-sm text-gray-400">
                      By checking this box, you agree to abide by the competition rules and safety requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="mechanical-btn flex-1 border-orange-600 text-white hover:bg-orange-950 min-w-[120px]"
                >
                  Previous
                </Button>
                <Button className="mechanical-btn flex-1 bg-orange-600 hover:bg-orange-700 text-white min-w-[180px]">
                  Submit Registration
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
