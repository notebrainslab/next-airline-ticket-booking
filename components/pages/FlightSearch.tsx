'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftRight, Plane } from 'lucide-react'
import BookingManage from "./BookingManage"
import TripTypeSelection from "./TripTypeSelection"
import FlightTab from "./FlightTab"
import StopOverTab from "./StopOverTab"

export default function FlightSearch() {
  return (
    <div className="max-w-7xl mx-auto lg:px-6  px-3 p-8 mt-7 bg-white rounded-xl shadow-sm ">
      {/* Tabs */}
      <Tabs defaultValue="flight" className="mb-6">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger 
            value="flight" 
            className=" flex items-center gap-2 transition-all duration-300 ease-in-out"
          >
            Flight
          </TabsTrigger>
          <TabsTrigger value="stopover">
            Stopover
          </TabsTrigger>
          <TabsTrigger value="manage-booking">
            Manage Booking
          </TabsTrigger>
          <TabsTrigger value="flight-status">
            Flight Status
          </TabsTrigger>
        </TabsList>

        {/* Dynamic Content Rendering */}
        <TabsContent 
        className="py-3"
        value="flight">
          <FlightTab />
        </TabsContent>
       <TabsContent className="py-3" value="stopover">
        <StopOverTab/>
        </TabsContent>
        <TabsContent className="py-3" value="manage-booking">
          <BookingManage />
        </TabsContent>
        <TabsContent className="py-3" value="flight-status">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Flight Status</h2>
            <p className="text-gray-600">Coming Soon...</p>
          </div>
        </TabsContent>
      </Tabs>
      {/* Flight Search Form */}
    </div>
  )
}

