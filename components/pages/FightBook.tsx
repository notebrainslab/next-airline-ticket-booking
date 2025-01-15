'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plane, Building2, Car, ArrowLeftRight } from 'lucide-react'

export default function FlightBookingCard() {
  return (
    <div className=" max-w-6xl mx-auto p-6 bg-gray-200 rounded-xl shadow-sm">
      {/* Main Service Tabs */}
      <Tabs defaultValue="flights" className="mb-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="flights" className="flex items-center gap-2">
            <Plane className="h-4 w-4" />
            Flights
          </TabsTrigger>
          <TabsTrigger value="hotel" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Hotel
          </TabsTrigger>
          <TabsTrigger value="car" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            Car Rentals
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Secondary Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <Button variant="secondary" className="bg-orange-400 text-white hover:bg-orange-500">
          Stopover
        </Button>
        <Button variant="ghost" className="bg-gray-100">
          Manage Booking / Check in
        </Button>
        <Button variant="ghost" className="bg-gray-100">
          Flight Status
        </Button>
      </div>

      {/* Trip Type Selection */}
      <RadioGroup defaultValue="one-way" className="flex gap-6 mb-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="one-way" id="one-way" />
          <label htmlFor="one-way" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            One way
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="round-trip" id="round-trip" />
          <label htmlFor="round-trip" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Round-trip
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multi-city" id="multi-city" />
          <label htmlFor="multi-city" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Multi-City
          </label>
        </div>
      </RadioGroup>

      {/* Flight Search Form */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-4 gap-4">
          {/* From/To Fields */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500">From</label>
            <Input placeholder="From" className="bg-white" />
          </div>
          <div className="flex items-end">
            <Button variant="ghost" size="icon" className="mb-[2px]">
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-gray-500">To</label>
            <Input placeholder="To" className="bg-white" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-gray-500">Passengers and Class</label>
            <div className="bg-white px-3 py-2 rounded-md border text-sm">
              2 Passengers / Business
            </div>
          </div>
          {/* Dates */}
          <div className="space-y-1">
            <label className="text-sm text-gray-500">Departing</label>
            <Input type="date" defaultValue="2023-08-18" className="bg-white" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-gray-500">Returning</label>
            <Input type="date" defaultValue="2023-08-20" className="bg-white" />
          </div>
        </div>
      </div>

      {/* Stopover Options */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-600 mb-4">When would you like stop in dubai during your journey?</h3>
        <RadioGroup defaultValue="departure" className="flex gap-6 mb-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="departure" id="departure" />
            <label htmlFor="departure" className="text-sm font-medium leading-none">
              Departure
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="return" id="return" />
            <label htmlFor="return" className="text-sm font-medium leading-none">
              Return
            </label>
          </div>
        </RadioGroup>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">How many days would you like to stay in Dubai?</p>
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="h-8 w-8 rounded-l">-</Button>
            <div className="h-8 w-12 flex items-center justify-center border-y">0</div>
            <Button variant="outline" size="sm" className="h-8 w-8 rounded-r">+</Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-4">
        <Input placeholder="Enter Promo Code" className="max-w-[200px]" />
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plane className="mr-2 h-4 w-4" /> Show Flight
        </Button>
      </div>
    </div>
  )
}

