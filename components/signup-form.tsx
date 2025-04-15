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
          src="about:blank" // Replace with your actual Tally form URL
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
              <h4 className="text-lg font-semibold text-white">Team Information</h4>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="team-name">Team Name</Label>
                    <Input id="team-name" placeholder="Enter your team name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight-class">Weight Class</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select weight class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="heavyweight">Heavyweight (220 lbs)</SelectItem>
                        <SelectItem value="middleweight">Middleweight (120 lbs)</SelectItem>
                        <SelectItem value="lightweight">Lightweight (60 lbs)</SelectItem>
                        <SelectItem value="featherweight">Featherweight (30 lbs)</SelectItem>
                        <SelectItem value="antweight">Antweight (1 lb)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team-description">Team Description</Label>
                  <Textarea id="team-description" placeholder="Tell us about your team" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team-location">Team Location</Label>
                  <Input id="team-location" placeholder="City, State/Province, Country" />
                </div>
              </div>

              <Button onClick={nextStep} className="w-full bg-red-600 hover:bg-red-700 text-white">
                Next: Robot Information
              </Button>
            </div>
          )}

          {formStep === 1 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Robot Information</h4>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="robot-name">Robot Name</Label>
                    <Input id="robot-name" placeholder="Enter your robot name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="robot-weight">Robot Weight (lbs)</Label>
                    <Input id="robot-weight" type="number" placeholder="Enter weight in pounds" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="robot-description">Robot Description</Label>
                  <Textarea
                    id="robot-description"
                    placeholder="Describe your robot and its weapons/features"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primary-weapon">Primary Weapon Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select weapon type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spinner">Spinner</SelectItem>
                      <SelectItem value="flipper">Flipper</SelectItem>
                      <SelectItem value="crusher">Crusher</SelectItem>
                      <SelectItem value="hammer">Hammer</SelectItem>
                      <SelectItem value="saw">Saw</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={prevStep} variant="outline" className="flex-1">
                  Previous
                </Button>
                <Button onClick={nextStep} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  Next: Contact Information
                </Button>
              </div>
            </div>
          )}

          {formStep === 2 && (
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
                <Button onClick={prevStep} variant="outline" className="flex-1">
                  Previous
                </Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">Submit Registration</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
