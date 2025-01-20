'use client'

import { useState } from "react"
import { Utensils, ShipWheelIcon as Wheelchair, Check } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FormData {
  gender: string
  nationality: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dob: string
  postal: string
  flightNumber: string
}

function FlightBookingForm() {
  const [currentStep, setCurrentStep] = useState(2)
  const [completedSteps, setCompletedSteps] = useState([1])
  const [formData, setFormData] = useState<FormData>({
    gender: '',
    nationality: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    postal: '',
    flightNumber: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    setCompletedSteps([...completedSteps, currentStep])
    setCurrentStep(currentStep + 1)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Progress Steps */}
      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center justify-between relative px-2">
          {/* Progress line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-200" />

          {['Your Selection', 'Your Details', 'Final Step'].map((step, index) => {
            const stepNumber = index + 1
            const isCompleted = completedSteps.includes(stepNumber)
            const isActive = currentStep === stepNumber

            return (
              <div key={step} className="relative flex flex-row justify-center items-center">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center z-10",
                    isCompleted ? "bg-blue-500" : 
                    isActive ? "bg-blue-500" : "bg-gray-200",
                    "text-xs font-medium"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-3 w-3 text-white" />
                  ) : (
                    <span className={isActive ? "text-white" : "text-gray-600"}>
                      {stepNumber}
                    </span>
                  )}
                </div>
                <span className={cn(
                  "text-sm mt-2 bg-white p-2 mb-2",
                  isActive ? "text-gray-900 font-medium" : "text-gray-500"
                )}>
                  {step}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Enter Your Details</h2>
        <div className="grid gap-4">
          <div className="grid md:grid-cols-[200px,1fr,1fr] gap-4">
            <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
              <SelectTrigger className="bg-blue-50">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              placeholder="First Name" />
            <Input 
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              placeholder="Last Name" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Email" 
              type="email" />
            <Select onValueChange={(value) => setFormData({...formData, nationality: value})}>
              <SelectTrigger className="bg-blue-50">
                <SelectValue placeholder="Nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input 
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Your Number" 
              type="tel" />
            <Input 
              onChange={(e) => setFormData({...formData, dob: e.target.value})}
              placeholder="Date of Birth" 
              type="date" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input 
              onChange={(e) => setFormData({...formData, postal: e.target.value})}
              placeholder="Postal Code" />
            <Input 
              onChange={(e) => setFormData({...formData, flightNumber: e.target.value})}
              placeholder="Flight Number" />
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4 bg-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold">Save your details!</h3>
        <p className="text-sm text-gray-500">
          Use your contact details to create an account and speed up future bookings. (We won&apos;t save your payment information.)
        </p>
        <div className="flex items-center gap-2 justify-start">
          <input type="checkbox" id="save-details" className="rounded text-blue-600 focus:ring-blue-500" />
          <label htmlFor="save-details" className="text-sm text-gray-700">Save my details so I can book faster next time.</label>
        </div>
        <p className="text-sm text-gray-700">
          By signing in or creating an account, you agree with our <span className="text-blue-700 cursor-pointer">Terms & conditions</span>
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">Extras</h3>
        <div className="space-y-4">
          <Select>
            <SelectTrigger className="bg-blue-50">
              <Utensils className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select Meal Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="halal">Halal</SelectItem>
              <SelectItem value="kosher">Kosher</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-blue-50">
              <Wheelchair className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Request Wheelchair" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes, I need assistance</SelectItem>
              <SelectItem value="no">No assistance needed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Next Step
      </Button>
    </form>
  )
}

export default FlightBookingForm

