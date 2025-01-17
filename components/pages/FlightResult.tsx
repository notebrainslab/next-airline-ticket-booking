'use client'

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronDown, ChevronUp, Plane, Filter } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useState } from "react"

interface Flight {
  id: number
  airline: string
  logo: string
  aircraft: string
  departure: string
  departureCode: string
  arrival: string
  arrivalCode: string
  duration: string
  stops: number
  date: string
  price: number
}

const flights: Flight[] = [
  {
    id: 1,
    airline: "Feel Dubai Airline",
    logo: "/icon-1.png",
    aircraft: "Boeing 777-90",
    departure: "12:00",
    departureCode: "DUB",
    arrival: "12:50",
    arrivalCode: "SHJ",
    duration: "0h 50m",
    stops: 1,
    date: "Monday 14 August",
    price: 240
  },
  // Add more flight data as needed
]

export default function FlightResults() {
  const [priceRange, setPriceRange] = useState([100])
  const [cabinExpanded, setCabinExpanded] = useState(true)
  const [priceExpanded, setPriceExpanded] = useState(true)
  const [airlinesExpanded, setAirlinesExpanded] = useState(true)

  const FilterContent = () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold bg-blue-50 p-4 rounded-lg">
        Filter Search
      </h2>

      {/* Cabin Class */}
      <div className="border-b pb-6">
        <button
          onClick={() => setCabinExpanded(!cabinExpanded)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="text-lg font-medium">Cabin</h3>
          {cabinExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {cabinExpanded && (
          <div className="grid grid-cols-2 gap-2">
            {["Economy Class", "Business Class", "First Class", "Premium Economy"].map((cabin) => (
              <Button
                key={cabin}
                variant="outline"
                className="justify-start h-auto py-2 px-4 text-sm"
              >
                {cabin}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b pb-6">
        <button
          onClick={() => setPriceExpanded(!priceExpanded)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="text-lg font-medium">Price Range</h3>
          {priceExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {priceExpanded && (
          <div className="px-2">
            <Slider
              defaultValue={[100]}
              max={3000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-4"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>$3000</span>
            </div>
          </div>
        )}
      </div>

      {/* Airlines */}
      <div className="border-b pb-6">
        <button
          onClick={() => setAirlinesExpanded(!airlinesExpanded)}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="text-lg font-medium">Airlines</h3>
          {airlinesExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {airlinesExpanded && (
          <RadioGroup defaultValue="emirates">
            {[
              { name: "Emirates Airline", count: "02" },
              { name: "Qatar Airways", count: "04" },
              { name: "Saudi Arabian Airlines", count: "06" },
              { name: "Air Asia", count: "08" },
            ].map((airline) => (
              <div key={airline.name} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value={airline.name.toLowerCase().replace(" ", "-")} />
                  <label className="text-sm">{airline.name}</label>
                </div>
                <span className="text-sm text-gray-500">({airline.count})</span>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto py-6">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="mt-4">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid lg:grid-cols-[320px,1fr] gap-4 lg:gap-6">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block bg-white p-6 rounded-lg h-fit">
          <FilterContent />
        </div>

        {/* Flight Results */}
        <div className="space-y-4">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-lg p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8">
                {/* Airline Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={flight.logo}
                    alt={flight.airline}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{flight.airline}</h3>
                    <p className="text-sm text-gray-500">{flight.aircraft}</p>
                  </div>
                </div>

                {/* Flight Details */}
                <div className="flex flex-wrap items-center gap-4 lg:gap-8">
                  <div className="text-center">
                    <div className="text-xl font-bold">{flight.departure}</div>
                    <div className="text-sm text-gray-600">{flight.departureCode}</div>
                  </div>

                  <div className="flex flex-col items-center min-w-[128px]">
                    <div className="text-sm text-gray-500">{flight.duration}</div>
                    <div className="relative w-32">
                      <div className="border-t border-gray-300 w-full absolute top-1/2"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Plane className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{flight.stops} Stop</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xl font-bold">{flight.arrival}</div>
                    <div className="text-sm text-gray-600">{flight.arrivalCode}</div>
                  </div>

                  <div className="flex items-center justify-between gap-4 w-full lg:w-auto">
                    <div className="text-left lg:text-right">
                      <div className="text-2xl font-bold">${flight.price}</div>
                      <div className="text-sm text-gray-500">Price</div>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">{flight.date}</div>
                <Button variant="link" className="text-blue-600 p-0">
                  Flight Detail
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

