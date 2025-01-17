'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftRight, Plane } from 'lucide-react'

export default function FlightSearch() {
  return (
    <div className="max-w-7xl mx-auto lg:px-6  px-3 p-8 mt-7 bg-white rounded-xl shadow-sm ">
      {/* Tabs */}
      <Tabs defaultValue="flight" className="mb-6">
        <TabsList className="w-full flex flex-col lg:flex-row items-center justify-between px-5  bg-gray-100">
          <TabsTrigger 
            value="flight" 
            className=" data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Flight
          </TabsTrigger>
          <TabsTrigger value="stopover">
            Stopover
          </TabsTrigger>
          <TabsTrigger value="manage">
            Manage Booking
          </TabsTrigger>
          <TabsTrigger value="status">
            Flight Status
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Trip Type Selection */}
      <RadioGroup defaultValue="one-way" className="flex gap-6 mb-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="one-way" id="one-way" />
          <label htmlFor="one-way" className="text-sm font-medium">
            One way
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="round-trip" id="round-trip" />
          <label htmlFor="round-trip" className="text-sm font-medium">
            Round-trip
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multi-city" id="multi-city" />
          <label htmlFor="multi-city" className="text-sm font-medium">
            Multi-City
          </label>
        </div>
      </RadioGroup>

      {/* Flight Search Form */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="grid md:grid-cols-[1fr,auto,1fr,1fr] gap-4 items-end mb-4">
          {/* From Field */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600">From</label>
            <Input placeholder="From" className="bg-white" />
          </div>

          {/* Swap Button */}
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ArrowLeftRight className="h-4 w-4" />
          </Button>

          {/* To Field */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600">To</label>
            <Input placeholder="To" className="bg-white" />
          </div>

          {/* Passengers and Class */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Passengers and Class</label>
            <div className="bg-white px-3 py-2 rounded-md border text-sm">
              2 Passengers / Business
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Departing Date */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Departing</label>
            <Input 
              type="date" 
              defaultValue="2023-08-18"
              className="bg-white"
            />
          </div>

          {/* Returning Date */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Returning</label>
            <Input 
              type="date" 
              defaultValue="2023-08-20"
              className="bg-white"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end items-center gap-4">
          <Input 
            placeholder="Enter Promo Code" 
            className="max-w-[200px] bg-white"
          />
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plane className="mr-2 h-4 w-4" />
            Show Flight
          </Button>
        </div>
      </div>
    </div>
  )
}

